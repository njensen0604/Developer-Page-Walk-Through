/**
 * Manages the json data.
 */
var BopisJsonData = (function () {
    function BopisJsonData() {
    }
    /**
     * Verifies if the json data has been loaded.
     */
    BopisJsonData.prototype.checkReload = function () {
        if (this.data === undefined) {
            return true;
        }
        return false;
    };
    /**
     * Sets the json data.
     * @param newData json data object
     */
    BopisJsonData.prototype.setData = function (newData) {
        this.data = newData;
    };
    /**
     * Returns the json data object.
     */
    BopisJsonData.prototype.getData = function () {
        return this.data;
    };
    return BopisJsonData;
}());
//# sourceMappingURL=BopisJsonData.js.map