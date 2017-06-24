var bopisStartStop,
    bopisActivationKeys,
    bopisJsonData,
    bopisRunSteps;

/**
 * Toggles the listener for user typing.
 */
class BopisStartStop {

    private bopisMenu;

    /**
     * Starts the listener for user typing.
     */
    start() {
        this.loadJsonData();
    }

    /**
     * Stops the listener for user typing.
     */
    stop() {
        this.getBopisMenu().hide();
    }

    getBopisMenu() {
        if (this.bopisMenu === undefined) {
            this.bopisMenu = new BopisMenu();
        }
        return this.bopisMenu;
    }

    loadJsonData() {
        if (bopisJsonData.checkReload()) {
            let bopisJsonFile = new BopisJsonFile();
            var that = this;
            bopisJsonFile.load("/steps/PageSteps.json", function (jsonObj) {
                bopisJsonData.setData(jsonObj);
                that.getBopisMenu().show();
            });
        } else {
            this.getBopisMenu().show();
        }
    }

}

/**
 * Sets the chrome sync storage key value.
 */
class BopisActivationKeys {

    /**
     * Sets the chrome sync storage key value.
     */
    setActivationKeyOn() {
        var save = {};
        save["myKey"] = {
            'val': "on"
        };
        chrome.storage.sync.set(save, function () {});
        bopisStartStop.start();
    }
}

/**
 * Check the chrome sync storage for value.
 */
chrome.storage.sync.get("myKey", function (items) {
    if (typeof items === 'undefined') {
        bopisActivationKeys.setActivationKeyOn();
    } else {
        if (typeof items.myKey === 'undefined') {
            bopisActivationKeys.setActivationKeyOn();
        } else {
            if (items.myKey.val == "on") {
                bopisStartStop.start();
            };
        };
    };
});

bopisStartStop = new BopisStartStop();
bopisActivationKeys = new BopisActivationKeys();
bopisJsonData = new BopisJsonData();
bopisRunSteps = new BopisRunSteps();