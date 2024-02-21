// wwwroot/download.js

/*window.downloadFile = function (url) {
    var anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = ''; // Give a name to the downloaded file if needed
    anchor.target = '_blank'; // Open in a new tab, if needed
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};*/
window.downloadFile = function (fileName, buffer) {
    // Create a blob from the buffer
    var blob = new Blob([buffer], { type: "application/octet-stream" });

    // Create an object URL for the blob
    var url = URL.createObjectURL(blob);

    // Create a temporary anchor element to trigger the download
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = fileName;

    // Trigger the download by clicking the anchor element
    document.body.appendChild(anchor);
    anchor.click();

    // Cleanup
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
};