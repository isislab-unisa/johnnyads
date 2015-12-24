var tabs = {};
var tabUrl = null;
var selectedTab = null;
var refreshed = false;
var blacklist;
var whitelist;

chrome.runtime.onInstalled.addListener(function(details) {
    localStorage['alamutSospeso'] = false;
    localStorage['listaBloccati']  = new Array(); // La lista dei siti bloccati
    blacklist = new Object();
    whitelist = new Object();
    
    forest = new forestjs.RandomForest();
    // data is 2D array of size NxD. Labels is 1D array of length D
    forest.train(data, labels); 
    // testInstance is 1D array of length D. Returns probability
    //labelProbability = forest.predictOne();
    // testData is 2D array of size MxD. Returns array of probabilities of length M
    //labelProbabilities = forest.predict();
});

/* Le informazioni sui tab dobbiamo recuperarle al di fuori dei listener delle webRequest.
 * Questo perchè le chiamate alla callback di chrome.tabs.get sono asincrone, quindi il
 * funzionamento non sarebbe corretto.
 */

// In alcuni casi chrome.tabs può non essere definito (crbug.com/60435), quindi controlliamo che esista
if (chrome.tabs) {
    chrome.tabs.onRemoved.addListener(function (tabId) {
        delete tabs[tabId];
    });
    chrome.tabs.onActivated.addListener(function (info) {
        selectedTab = info.tabId;
        
        try {
            if (tabs[selectedTab][0].length + tabs[selectedTab][1].length > 0) {
                chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
            
                chrome.browserAction.setBadgeText({text: '' + (tabs[selectedTab][0].length + tabs[selectedTab][1].length)});
            }
            else {
                chrome.browserAction.setBadgeText({text: ''});
            }
        }
        catch (e) {
            tabs[selectedTab] = new Array(new Array(), new Array());   
            chrome.browserAction.setBadgeText({text: ''});
        }
    });
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.status == 'loading') {
            if (!refreshed) {
                tabs[tabId] = new Array(new Array(), new Array());
                chrome.browserAction.setBadgeText({text: ''});
                refreshed = true;
            }
        }
        else if (changeInfo.status == 'complete') {
            refreshed = false;
        }
    });
}

chrome.webRequest.onBeforeRequest.addListener(function (details) {
    
    if (localStorage['alamutSospeso'] === 'false' && details.tabId != -1) {
        /* Per ogni pagina la richiesta alla risorsa principale (main_frame) è unica, inoltre sappiamo che è sempre
         * la prima ad essere effettuata, quindi quando troviamo tale richiesta resettiamo i contatori.
         */
        if (details.type == "main_frame") {
            // Salvo l'URL della pagina, così come viene mostrato nella barra
            // degli indirizzi del tab dal quale è partita la richiesta.
            tabUrl = details.url; // L'URL del tab sarebbe quello di richiesta del main_frame
        }
        
        if (details.type == "script") {
            if (whitelist.hasOwnProperty(details.url)) {
                tabs[details.tabId][1].push(details.url); // Aggiungo l'url all'elenco dei file in whitelist
                return {cancel: false};
            }
            if (!blacklist.hasOwnProperty(details.url)) {
                scriptHandler(details.url); // Analizziamo se bloccarlo o meno
            }
            else { // Il file è in blacklist
                tabs[details.tabId][0].push(details.url); // Aggiungo l'url all'elenco dei file in blacklist
                addToList(details.url);   
                return {cancel: true};
            }
        }
    }
},
{urls: ["<all_urls>"]},
['blocking']                                              
);

chrome.webRequest.onHeadersReceived.addListener(function (details) {
    if (localStorage['alamutSospeso'] === 'false' && details.tabId != -1) {
        if (tabs[selectedTab][0].length + tabs[selectedTab][1].length > 0) {
            chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
            
            chrome.browserAction.setBadgeText({text: '' + (tabs[selectedTab][0].length + tabs[selectedTab][1].length)});
        }
    }
},
{urls: ["<all_urls>"]}, 
['blocking']
);

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

function blockRequest (scriptBody, url) {
    var count;
    var valori = new Array(features.length);
    var re;
    
    for (i = 0, l = features.length; i < l; i++) { // Calcolo l'indice TF per ogni feature nello script
        re = new RegExp('[^a-zA-Z0-9]' + features[i] + '[^a-zA-Z0-9]', 'g');
        count = (scriptBody.match(re) || []).length;
        valori[i] = count > 0 ? (1 + Math.log10(count)) : 0;
    }
    labelProbability = forest.predictOne(valori);
    
    if (labelProbability <= 0.6) { // La richiesta deve essere messa in blacklist
        blacklist[url] = new Object();
    }
}

function getFiles () {
    if (!selectedTab) {
        return new Array(new Array(), new Array());
    }
    return new Array(tabs[selectedTab][0], tabs[selectedTab][1]);
}