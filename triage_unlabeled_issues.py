import urllib.request
import urllib.parse
import json
import os
import sys

def make_request(url, method="GET", data=None):
    token = os.environ.get("JULES_GITHUB_TOKEN")
    if not token:
        print("JULES_GITHUB_TOKEN not found")
        sys.exit(1)

    req = urllib.request.Request(url, method=method)
    req.add_header("Authorization", f"token {token}")
    req.add_header("Accept", "application/vnd.github.v3+json")
    req.add_header("User-Agent", "Jules-Agent")

    if data:
        json_data = json.dumps(data).encode("utf-8")
        req.add_header("Content-Type", "application/json")
        try:
            with urllib.request.urlopen(req, data=json_data) as response:
                return json.loads(response.read().decode())
        except urllib.error.HTTPError as e:
            print(f"HTTP Error {e.code}: {e.read().decode()}")
            return None
    else:
        try:
            with urllib.request.urlopen(req) as response:
                return json.loads(response.read().decode())
        except urllib.error.HTTPError as e:
            print(f"HTTP Error {e.code}: {e.read().decode()}")
            return None
        except Exception as e:
            print(f"Error: {e}")
            return None

def get_unlabeled_issues():
    repo = "beercss/beercss"
    query = f"repo:{repo} is:open is:issue no:label"
    encoded_query = urllib.parse.quote(query)
    url = f"https://api.github.com/search/issues?q={encoded_query}"

    issues = []
    page = 1
    while True:
        paged_url = f"{url}&per_page=100&page={page}"
        result = make_request(paged_url)
        if not result or "items" not in result or not result["items"]:
            break
        issues.extend(result["items"])
        if len(result["items"]) < 100:
            break
        page += 1
    return issues

def triage_issue(issue):
    title = issue.get("title", "").lower()
    body = issue.get("body", "")
    if body is None:
        body = ""
    body = body.lower()

    content = title + " " + body

    # bug: bug, error, fix, broken, problem
    if any(kw in content for kw in ["bug", "error", "fix", "broken", "problem"]):
        return "bug"
    # enhancement: feature, request, improve, new, feat, chore, bump, implement, add, enhance
    if any(kw in content for kw in ["feature", "request", "improve", "new", "feat", "chore", "bump", "implement", "add", "enhance"]):
        return "enhancement"
    # question: help, how to, why, question
    if any(kw in content for kw in ["help", "how to", "why", "question"]):
        return "question"
    # documentation: doc, readme, guide, documentation
    if any(kw in content for kw in ["doc", "readme", "guide", "documentation"]):
        return "documentation"
    # duplicate: duplicate
    if "duplicate" in content:
        return "duplicate"

    return "enhancement"

def add_label_to_issue(issue_number, label):
    repo = "beercss/beercss"
    url = f"https://api.github.com/repos/{repo}/issues/{issue_number}/labels"
    data = {"labels": [label]}
    return make_request(url, method="POST", data=data)

def main():
    print("Fetching unlabeled issues...")
    issues = get_unlabeled_issues()
    print(f"Found {len(issues)} unlabeled issues.")

    for issue in issues:
        issue_number = issue["number"]
        title = issue["title"]
        label = triage_issue(issue)
        print(f"Triaging issue #{issue_number}: '{title}' -> Label: {label}")
        add_label_to_issue(issue_number, label)

if __name__ == "__main__":
    main()
