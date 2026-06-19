
import urllib.request
import json
import os
import sys
from urllib.parse import quote

token = os.environ.get("JULES_GITHUB_TOKEN")
if not token:
    print("JULES_GITHUB_TOKEN not found")
    sys.exit(1)

repo = "beercss/beercss"

def get_label(title, body):
    title = title.lower()
    body = (body or "").lower()

    if any(kw in title or kw in body for kw in ["bug", "error", "fix", "broken", "problem"]):
        return "bug"
    if any(kw in title or kw in body for kw in ["doc", "readme", "guide", "documentation"]):
        return "documentation"
    if any(kw in title or kw in body for kw in ["help", "how to", "why", "question"]):
        return "question"
    if any(kw in title or kw in body for kw in ["duplicate"]):
        return "duplicate"
    if any(kw in title or kw in body for kw in ["feature", "request", "improve", "new", "feat", "chore", "bump", "implement", "add", "enhance"]):
        return "enhancement"

    return "enhancement"

def apply_label(issue_number, label):
    url = f"https://api.github.com/repos/{repo}/issues/{issue_number}/labels"
    data = json.dumps([label]).encode()
    req = urllib.request.Request(url, data=data, method="POST")
    req.add_header("Authorization", f"token {token}")
    req.add_header("Accept", "application/vnd.github.v3+json")
    req.add_header("Content-Type", "application/json")

    try:
        with urllib.request.urlopen(req) as response:
            print(f"Successfully labeled #{issue_number} as '{label}'")
    except Exception as e:
        print(f"Error labeling #{issue_number}: {e}")

def main():
    page = 1
    total_processed = 0
    while True:
        query = f"repo:{repo} is:issue is:open no:label"
        url = f"https://api.github.com/search/issues?q={quote(query)}&page={page}&per_page=100"

        req = urllib.request.Request(url)
        req.add_header("Authorization", f"token {token}")
        req.add_header("Accept", "application/vnd.github.v3+json")

        try:
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read().decode())
                items = data.get("items", [])
                if not items:
                    break

                print(f"Processing page {page}, found {len(items)} unlabeled issues.")
                for item in items:
                    label = get_label(item['title'], item['body'])
                    apply_label(item['number'], label)
                    total_processed += 1

                if len(items) < 100:
                    break
                page += 1
        except Exception as e:
            print(f"Error fetching issues: {e}")
            sys.exit(1)

    print(f"Done. Total processed: {total_processed}")

if __name__ == "__main__":
    main()
