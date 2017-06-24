/**
 * Manages the json data.
 */
class BopisJsonData {

    private data;

    /**
     * Verifies if the json data has been loaded.
     */
    checkReload() {
        if (this.data === undefined) {
            return true;
        }
        return false;
    }

    /**
     * Sets the json data.
     * @param newData json data object
     */
    setData(newData) {
        this.data = newData;
    }

    /**
     * Returns the json data object.
     */
    getData() {
        return this.data;
    }

}