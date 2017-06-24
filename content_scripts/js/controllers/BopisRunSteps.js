/**
 * Parses the steps / actions to run on the page.
 * Runs the steps.
 */
var BopisRunSteps = (function () {
    function BopisRunSteps() {
        this.waitTime = 0;
    }
    /**
     * Finds the steps to run from the json object key.
     * @param key json object key
     */
    BopisRunSteps.prototype.run = function (key) {
        this.waitTime = 0;
        if (key !== null) {
            for (var t in bopisJsonData.getData()[key]) {
                if (t == "actions") {
                    for (var i = 0; i < bopisJsonData.getData()[key][t].length; i++) {
                        this.process(bopisJsonData.getData()[key][t][i]);
                    }
                }
            }
        }
    };
    /**
     * Runs the actions on the page.
     * @param action Action to run
     */
    BopisRunSteps.prototype.process = function (action) {
        if (action !== null) {
            var actionSplit_1 = action.split("|");
            if (actionSplit_1.length > 1) {
                var type = actionSplit_1[0];
                if (type === "scroll") {
                    setTimeout(function () {
                        var finder = document.querySelector(actionSplit_1[1]);
                        if (finder !== null || finder !== undefined) {
                            finder.scrollIntoView();
                        }
                    }, this.waitTime);
                }
                if (type === "wait") {
                    this.waitTime += parseInt(actionSplit_1[1]);
                }
                if (type === "select") {
                    if (actionSplit_1.length > 2) {
                        setTimeout(function () {
                            var finder = document.querySelector(actionSplit_1[1]);
                            if (finder !== null && finder !== undefined) {
                                if (finder.tagName == "SELECT") {
                                    finder.scrollIntoView();
                                    for (var i = 0; i < finder.options.length; i++) {
                                        if (finder.options[i].value === actionSplit_1[2]) {
                                            finder.selectedIndex = i;
                                            break;
                                        }
                                    }
                                }
                            }
                        }, this.waitTime);
                    }
                }
                if (type === "input") {
                    if (actionSplit_1.length > 2) {
                        setTimeout(function () {
                            var finder = document.querySelector(actionSplit_1[1]);
                            if (finder !== null && actionSplit_1.length > 1) {
                                finder.scrollIntoView();
                                if (finder.tagName == "TEXTAREA" ||
                                    finder.tagName == "DIV" ||
                                    finder.tagName == "INPUT") {
                                    finder.value = actionSplit_1[2];
                                }
                                else {
                                    finder.innerHTML = actionSplit_1[2];
                                }
                            }
                        }, this.waitTime);
                    }
                }
                if (type === "click") {
                    setTimeout(function () {
                        var finder = document.querySelector(actionSplit_1[1]);
                        if (finder !== null && finder !== undefined) {
                            finder.scrollIntoView();
                            finder.click();
                        }
                    }, this.waitTime);
                }
            }
        }
    };
    return BopisRunSteps;
}());
//# sourceMappingURL=BopisRunSteps.js.map