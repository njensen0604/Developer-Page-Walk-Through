/**
 * This maanages the gui element
 */
var BopisMenu = (function () {
    function BopisMenu() {
        this.bopisMenuElementEmpty = true;
        this.toggleOn = false;
    }
    /**
     * Creates the html element for the extension.
     */
    BopisMenu.prototype.getBopisMenuElement = function () {
        if (this.bopisMenuElement === undefined) {
            this.bopisMenuElement = document.createElement("DIV");
            this.getBopisMenuElement().setAttribute("data-bopis-menu", "true");
            this.bopisMenuElement.classList.add("bopisHide");
            document.body.appendChild(this.getBopisMenuElement());
        }
        return this.bopisMenuElement;
    };
    /**
     * Shows the html element.
     */
    BopisMenu.prototype.show = function () {
        this.populate();
        if (this.toggleOn === false) {
            this.getBopisMenuElement().classList.toggle("bopisHide");
            this.toggleOn = true;
        }
    };
    /**
     * Hides the html element.
     */
    BopisMenu.prototype.hide = function () {
        if (this.toggleOn === true) {
            this.getBopisMenuElement().classList.toggle("bopisHide");
            this.toggleOn = false;
        }
    };
    /**
     * Creates html elements for each action in the json file.
     */
    BopisMenu.prototype.populate = function () {
        if (this.bopisMenuElementEmpty === true) {
            if (bopisJsonData.getData() === undefined || bopisJsonData.getData() === null) {
                var parent_1 = document.createElement("DIV");
                parent_1.classList.add("bopis-step");
                var message = document.createElement("DIV");
                message.innerHTML = "nothing to show";
                parent_1.appendChild(message);
                this.getBopisMenuElement().appendChild(parent_1);
            }
            else {
                var _loop_1 = function () {
                    var foundUrlMatch = false;
                    for (var keyUrl in bopisJsonData.getData()[key].url) {
                        if (bopisJsonData.getData()[key].url[keyUrl] == window.location.href) {
                            foundUrlMatch = true;
                        }
                    }
                    if (foundUrlMatch === false)
                        return "continue";
                    var parent_2 = document.createElement("DIV");
                    parent_2.classList.add("bopis-step");
                    var message = document.createElement("DIV");
                    message.innerHTML = key;
                    var button = document.createElement("BUTTON");
                    button.innerText = "run";
                    var thatKey = key;
                    var thatMenu = this_1;
                    button.addEventListener("click", function () {
                        thatMenu.hide();
                        bopisRunSteps.run(thatKey);
                    });
                    parent_2.appendChild(button);
                    parent_2.appendChild(message);
                    this_1.getBopisMenuElement().appendChild(parent_2);
                };
                var this_1 = this;
                for (var key in bopisJsonData.getData()) {
                    _loop_1();
                }
            }
            this.bopisMenuElementEmpty = false;
        }
    };
    return BopisMenu;
}());
//# sourceMappingURL=BopisMenuController.js.map