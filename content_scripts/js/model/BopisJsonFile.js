/**
 * Loads the json file.
 */
var BopisJsonFile = (function () {
    function BopisJsonFile() {
    }
    BopisJsonFile.prototype.load = function (file, callback) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.responseType = "json";
        xhr.open('GET', chrome.extension.getURL(file), true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.response);
            }
        };
        xhr.send();
    };
    return BopisJsonFile;
}());
//# sourceMappingURL=BopisJsonFile.js.map