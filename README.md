# Developer Page Walk Through

This extension walks through a page. The specific action are specified in the steps/PageSteps.json file.

**Use Case**

(All automated) Tell the script to...
Navigate to signin page.
Enter username and pass.
Click to sign in.
...

## Install

Get it from my github [Developer Page Walk Through](https://github.com/njensen0604/Developer-Page-Walk-Through)

- In your browser, open extensions page. (Chrome: Settings > Extensions).
- Check 'Developer Mode'
- Load unpacked extension. Select extension folder.

## Setup Page Steps

In the extension, open steps/PageSteps.json.
Use the format:
`{`
`    "search for coder": {`
`        "url": "https://www.google.com",`
`        "actions": [`
`            "wait|500",`
`            "input|#inner-editor|njensen0604 on github",`
`            "wait|1500",`
`            "click|[role\"search\"] [type=\"submit\"]"`
`    ]}`
`}`

**Must Have**

url, actions

**Options**

wait, click, input, select, scroll

## Test

Go to https://www.reddit.com/ and test out the extension.

### Changes ###

Read the CHANGELOG.md for a list of updates.

### Feature Requests ###

If there are any features you would like to see in this extension (or another), please contact me.
