/**
 * This maanages the gui element
 */
class BopisMenu {

    private bopisMenuElement: Element;
    private bopisMenuElementEmpty: boolean = true;
    private toggleOn: boolean = false;

    /**
     * Creates the html element for the extension.
     */
    private getBopisMenuElement() {
        if (this.bopisMenuElement === undefined) {
            this.bopisMenuElement = document.createElement("DIV");
            this.getBopisMenuElement().setAttribute("data-bopis-menu", "true");
            this.bopisMenuElement.classList.add("bopisHide");
            document.body.appendChild(this.getBopisMenuElement());
        }
        return this.bopisMenuElement;
    }

    /**
     * Shows the html element.
     */
    show() {
        this.populate();
        if (this.toggleOn === false) {
            this.getBopisMenuElement().classList.toggle("bopisHide");
            this.toggleOn = true;
        }
    }

    /**
     * Hides the html element.
     */
    hide() {
        if (this.toggleOn === true) {
            this.getBopisMenuElement().classList.toggle("bopisHide");
            this.toggleOn = false;
        }
    }

    /**
     * Creates html elements for each action in the json file.
     */
    populate() {
        if (this.bopisMenuElementEmpty === true) {
            if (bopisJsonData.getData() === undefined || bopisJsonData.getData() === null) {
                let parent = document.createElement("DIV");
                parent.classList.add("bopis-step");
                let message = document.createElement("DIV");
                message.innerHTML = "nothing to show";
                parent.appendChild(message);
                this.getBopisMenuElement().appendChild(parent);
            } else {
                for (var key in bopisJsonData.getData()) {
                    if (bopisJsonData.getData()[key].url != window.location.href) {
                        continue;
                    }
                    let parent = document.createElement("DIV");
                    parent.classList.add("bopis-step");
                    let message = document.createElement("DIV");
                    message.innerHTML = key;
                    let button = document.createElement("BUTTON");
                    ( < HTMLButtonElement > button).innerText = "run";
                    let thatKey = key;
                    let thatMenu = this;
                    button.addEventListener("click", function () {
                        thatMenu.hide();
                        bopisRunSteps.run(thatKey);
                    });
                    parent.appendChild(button);
                    parent.appendChild(message);
                    this.getBopisMenuElement().appendChild(parent);
                }
            }
            this.bopisMenuElementEmpty = false;
        }
    }
}