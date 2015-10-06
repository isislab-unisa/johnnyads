var tabUrl = null;
var tabs = {};
var selectedTab = null;
var visitedLinks = new Object();
var toBlock = false;

chrome.runtime.onInstalled.addListener(function(details) {
    localStorage['alamutSospeso'] = false;
    
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
    chrome.tabs.query({}, function(results) {
        results.forEach(function(tab) {
            /* Dobbiamo avere due contatori per ogni tab, uno che conta i tracciamenti evitati,
             * l'altro conta le pubblicità bloccate. Dobbiamo agire così perchè, in base al tab selezionato,
             * dobbiamo mostrare IN QUELLA PAGINA quante minacce sono state evitate.
             */
            tabs[tab.id] = 0;
            });
        chrome.tabs.query({active: true, currentWindow: true}, function (tabarray) { // Al momento dell'attivazione dell'estensione devo prendere il tab corrente
            selectedTab = tabarray[0].id; // Il tab corrente è il primo dell'array tabarray
        });
    });
    chrome.tabs.onRemoved.addListener(function (tabId) {
        delete tabs[tabId];
    });
    chrome.tabs.onActivated.addListener(function (info) {
        selectedTab = info.tabId;
        
        if (tabs[selectedTab] > 0) {
            chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
            
            chrome.browserAction.setBadgeText({text: '' + tabs[selectedTab]});
        }
        else {
            chrome.browserAction.setBadgeText({text: ''});
        }
    });
}

chrome.webRequest.onBeforeRequest.addListener(function (details) {
    
    if (details.tabId != -1) {
        // Salvo l'URL della pagina, così come viene mostrato nella barra
        // degli indirizzi del tab dal quale è partita la richiesta.
        // Mi servirà nel fingerprinting, quando devo vedere se il dominio
        // della richiesta coincide col dominio della pagina presente nel
        // tab visualizzato.
        
        /* Per ogni pagina la richiesta alla risorsa principale (main_frame) è unica, inoltre sappiamo che è sempre
         * la prima ad essere effettuata, quindi quando troviamo tale richiesta resettiamo i contatori.
         */
        if (details.type == "main_frame") {
            // Salvo l'URL della pagina, così come viene mostrato nella barra
            // degli indirizzi del tab dal quale è partita la richiesta.
            // Mi servirà nel fingerprinting, quando devo vedere se il dominio
            // della richiesta coincide col dominio della pagina presente nel
            // tab visualizzato.
            tabUrl = details.url; // L'URL del tab sarebbe quello di richiesta del main_frame
            tabs[details.tabId] = 0;
        }
        
        if (details.type == "script") {
            scriptHandler(details.url); // Analizziamo se bloccarlo o meno*/
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
    
    if (labelProbability >= 0.7) { // La richiesta non deve essere cancellata
        console.log(url + " - " + labelProbability);
    }
    else {
        console.log("Bloccato - " + url + " - " + labelProbability);
    }
}