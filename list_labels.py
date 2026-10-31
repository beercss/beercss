
import urllib.request
import json
import os
import sys

token = os.environ.get("JULES_GITHUB_TOKEN")
if not token:
    print("JULES_GITHUB_TOKEN not found")
    sys.exit(1)

repo = "beercss/beercss"
url = f"https://api.github.com/repos/{repo}/labels"

req = urllib.request.Request(url)
req.add_header("Authorization", f"token {token}")
req.add_header("Accept", "application/vnd.github.v3+json")

try:
    with urllib.request.urlopen(req) as response:
        labels = json.loads(response.read().decode())
        for l in labels:
            print(f"Label: {l['name']}")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
