function scriptHandler (url) {
    var xmlHttp = getXMLHttpRequest();
    
    if (xmlHttp != null) {
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                blockRequest(xmlHttp.responseText, url);
            }
        }
        xmlHttp.open("GET", url, true);
        xmlHttp.send(null);
    }
}

//alert(tabUrl);
console.log('entrato3');
postMessage('aooo');