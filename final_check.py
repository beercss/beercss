import urllib.request
import json
import os

token = os.environ.get("JULES_GITHUB_TOKEN")
repo = "beercss/beercss"
standard_labels = {"enhancement", "bug", "question", "duplicate", "documentation"}

url = f"https://api.github.com/repos/{repo}/issues?state=open&per_page=100"
req = urllib.request.Request(url)
req.add_header("Authorization", f"token {token}")
with urllib.request.urlopen(req) as response:
    data = json.loads(response.read().decode())
    issues = [i for i in data if "pull_request" not in i]
    untriaged = []
    for i in issues:
        labels = {l["name"] for l in i["labels"]}
        if not (labels & standard_labels):
            untriaged.append(i)

    print(f"Issues without standard labels: {len(untriaged)}")
    for i in untriaged:
        print(f"#{i['number']}: {i['title']} (Labels: {[l['name'] for l in i['labels']]})")
