var bopisStartStop, bopisActivationKeys, bopisJsonData, bopisRunSteps;
/**
 * Toggles the listener for user typing.
 */
var BopisStartStop = (function () {
    function BopisStartStop() {
    }
    /**
     * Starts the listener for user typing.
     */
    BopisStartStop.prototype.start = function () {
        this.loadJsonData();
    };
    /**
     * Stops the listener for user typing.
     */
    BopisStartStop.prototype.stop = function () {
        this.getBopisMenu().hide();
    };
    BopisStartStop.prototype.getBopisMenu = function () {
        if (this.bopisMenu === undefined) {
            this.bopisMenu = new BopisMenu();
        }
        return this.bopisMenu;
    };
    BopisStartStop.prototype.loadJsonData = function () {
        if (bopisJsonData.checkReload()) {
            var bopisJsonFile = new BopisJsonFile();
            var that = this;
            bopisJsonFile.load("/steps/PageSteps.json", function (jsonObj) {
                bopisJsonData.setData(jsonObj);
                that.getBopisMenu().show();
            });
        }
        else {
            this.getBopisMenu().show();
        }
    };
    return BopisStartStop;
}());
/**
 * Sets the chrome sync storage key value.
 */
var BopisActivationKeys = (function () {
    function BopisActivationKeys() {
    }
    /**
     * Sets the chrome sync storage key value.
     */
    BopisActivationKeys.prototype.setActivationKeyOn = function () {
        var save = {};
        save["myKey"] = {
            'val': "on"
        };
        chrome.storage.sync.set(save, function () { });
        bopisStartStop.start();
    };
    return BopisActivationKeys;
}());
/**
 * Check the chrome sync storage for value.
 */
chrome.storage.sync.get("myKey", function (items) {
    if (typeof items === 'undefined') {
        bopisActivationKeys.setActivationKeyOn();
    }
    else {
        if (typeof items.myKey === 'undefined') {
            bopisActivationKeys.setActivationKeyOn();
        }
        else {
            if (items.myKey.val == "on") {
                bopisStartStop.start();
            }
            ;
        }
        ;
    }
    ;
});
bopisStartStop = new BopisStartStop();
bopisActivationKeys = new BopisActivationKeys();
bopisJsonData = new BopisJsonData();
bopisRunSteps = new BopisRunSteps();
//# sourceMappingURL=BopisMainController.js.map