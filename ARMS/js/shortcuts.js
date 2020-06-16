AJS.keys = {
    "shortcuts": [{
        "moduleKey": "go-to-dashboard-kb-shortcut",
        "keys": [["g", "d"]],
        "context": "global",
        "op": "goTo",
        "param": "/secure/Dashboard.jspa"
    }, {
        "moduleKey": "greenhopper-gh-shortcut",
        "keys": [["g", "h"]],
        "context": "global",
        "op": "execute",
        "param": "gh.app.globalkeyboardshortcuts.goToAgile();"
    }, {
        "moduleKey": "browse-project-kb-shortcut",
        "keys": [["g", "p"]],
        "context": "global",
        "op": "execute",
        "param": "var elem = document.getElementById(\"browse_link\");\n                if (elem) {\n                    window.location.href = elem.getAttribute(\"href\");\n                }"
    }, {
        "moduleKey": "greenhopper-agile-shortcut",
        "keys": [["g", "a"]],
        "context": "global",
        "op": "execute",
        "param": "gh.app.globalkeyboardshortcuts.goToAgile();"
    }, {
        "moduleKey": "issue-navigator-kb-shortcut",
        "keys": [["g", "i"]],
        "context": "global",
        "op": "execute",
        "param": "var elem = document.getElementById(\"find_link\");\n                if (elem) {\n                    window.location.href = elem.getAttribute(\"href\");\n                }"
    }, {
        "moduleKey": "admin.quicksearch.dialog.shortcut",
        "keys": [["g", "g"]],
        "context": "global",
        "op": "execute",
        "param": "if (AJS.Meta.get('admin-quicksearch-show')) {\n              JIRA.Shifter.show('admin');\n            }"
    }, {
        "moduleKey": "quicksearch",
        "keys": [["/"]],
        "context": "global",
        "op": "moveToAndFocus",
        "param": "#quickSearchInput, #admin-quick-nav-field"
    }, {
        "moduleKey": "create.issue",
        "keys": [["c"]],
        "context": "global",
        "op": "moveToAndClick",
        "param": "#header .create-issue"
    }, {
        "moduleKey": "shifter",
        "keys": [["."]],
        "context": "global",
        "op": "execute",
        "param": "require(['jira/shifter'], function(Shifter) { Shifter.show(); });"
    }, {"moduleKey": "help", "keys": [["?"]], "context": "global", "op": "click", "param": "#keyshortscuthelp"}]
};