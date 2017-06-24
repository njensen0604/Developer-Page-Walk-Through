/**
 * Loads the json file.
 */
class BopisJsonFile {
    
    load(file, callback) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.responseType = "json";
        xhr.open('GET', chrome.extension.getURL(file), true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.response);
            }
        }
        xhr.send();
    }

}