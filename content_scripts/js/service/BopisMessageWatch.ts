/**
 * Listens for messages from the browser-action (popup).
 */
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "start") {
            bopisStartStop.start();
        }
        if (request.message === "stop") {
            bopisStartStop.stop();
        }
    }
)