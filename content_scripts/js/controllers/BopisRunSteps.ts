/**
 * Parses the steps / actions to run on the page.
 * Runs the steps.
 */
class BopisRunSteps {

    private waitTime: number = 0;

    /**
     * Finds the steps to run from the json object key.
     * @param key json object key
     */
    run(key: string) {
        this.waitTime = 0;
        if (key !== null) {
            for (var t in bopisJsonData.getData()[key]) {
                if (t == "actions") {
                    for (let i = 0; i < bopisJsonData.getData()[key][t].length; i++) {
                        this.process(bopisJsonData.getData()[key][t][i]);
                    }
                }
            }
        }
    }

    /**
     * Runs the actions on the page.
     * @param action Action to run
     */
    private process(action: string) {

        if (action !== null) {

            let actionSplit = action.split("|");
            if (actionSplit.length > 1) {

                let type = actionSplit[0];

                if (type === "scroll") {
                    setTimeout(function () {
                        let finder = document.querySelector(actionSplit[1]);
                        if (finder !== null || finder !== undefined) {
                            ( < HTMLElement > finder).scrollIntoView();
                        }
                    }, this.waitTime);
                }

                if (type === "wait") {
                    this.waitTime += parseInt(actionSplit[1]);
                }

                if (type === "select") {
                    if (actionSplit.length > 2) {

                        setTimeout(function () {
                            let finder = document.querySelector(actionSplit[1]);
                            if (finder !== null && finder !== undefined) {
                                if (( < HTMLInputElement > finder).tagName == "SELECT") {
                                    ( < HTMLElement > finder).scrollIntoView();
                                    for (var i = 0; i < ( < HTMLSelectElement > finder).options.length; i++) {
                                        if (( < HTMLSelectElement > finder).options[i].value === actionSplit[2]) {
                                            ( < HTMLSelectElement > finder).selectedIndex = i;
                                            break;
                                        }
                                    }
                                }
                            }
                        }, this.waitTime);
                    }

                }

                if (type === "input") {
                    if (actionSplit.length > 2) {

                        setTimeout(function () {
                            let finder = document.querySelector(actionSplit[1]);
                            if (finder !== null && actionSplit.length > 1) {
                                ( < HTMLElement > finder).scrollIntoView();
                                if (( < HTMLInputElement > finder).tagName == "TEXTAREA" ||
                                    ( < HTMLInputElement > finder).tagName == "DIV" ||
                                    ( < HTMLInputElement > finder).tagName == "INPUT") {
                                    ( < HTMLInputElement > finder).value = actionSplit[2];
                                } else {
                                    ( < HTMLInputElement > finder).innerHTML = actionSplit[2];
                                }
                            }
                        }, this.waitTime);
                    }
                }

                if (type === "click") {
                    setTimeout(function () {
                        let finder = document.querySelector(actionSplit[1]);
                        if (finder !== null && finder !== undefined) {
                            ( < HTMLElement > finder).scrollIntoView();
                            ( < HTMLElement > finder).click();
                        }
                    }, this.waitTime);
                }

            }

        }

    }

}