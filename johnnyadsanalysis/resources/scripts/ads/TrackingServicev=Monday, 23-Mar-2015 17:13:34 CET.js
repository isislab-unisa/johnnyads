/*!
 * TrackingService.js
 * version: "GAZ 0.2"
 * Date: 05.03.2014
 *
 * Note:
 * Tracking service gestione cookie rcsTR rcsPRO.
 *
 * Config:
 * TS_debug = true 	mostra console.log
 *
 * v. 1.0:			TrackingService(); 			funzione richiamo servizio condizionato dai cookie rcsLogin, rcsTR, rcsPRO, data generazione cookie etc.
 * 					TrackingPixel();			funzione richiamo servizio condizionato solo all'esistenza del cookie rcsLogin'
 * 					TrackingServiceReset();		funzione reset cookie da chiamare alla login
 */

function myConsoleTS(error) {
	if (TS_debug) {
		console.log(error + "\n");
	}
}

function TrackingServiceReset() {
	document.cookie = "rcsTR=;expires=Thu Jan 01 1970 00:59:59 GMT+0100;domain=.gazzetta.it;";
	document.cookie = "rcsPro=;expires=Thu Jan 01 1970 00:59:59 GMT+0100;domain=.gazzetta.it;";
	myConsoleTS("Effettuato reset Pro e TR.");

}

function TrackingPixel() {
	if (document.cookie.indexOf("rcsLogin") >= 0) {
		var TSimg = new Image();
		TSimg.src = "http://www.gazzetta.it/tracking-service/gc/";
		//TSimg.src = "http://staging.gazzetta.it/tracking-service/gc/";

		myConsoleTS("Cookies Pro e TR generati.");
	}
}

function TrackingService() {
	if (document.cookie.indexOf("rcsLogin") >= 0) {
		if (document.cookie.indexOf("rcsTR") >= 0) {
			myConsoleTS("rcsTR esiste");
			var start = document.cookie.indexOf("rcsTR=");
			//nome cookie
			var end = document.cookie.indexOf(";", start);
			if (end == -1)
				end = document.cookie.length;
			//ex.: rcsPro=1|33|25-34|CO|IT|area1
			var cookie_string = unescape(document.cookie.substring(start + 6, end));
			myConsoleTS("rcsTR= " + cookie_string);
			//ex.: 1|33|25-34|CO|IT|area1
			var cookie_split = cookie_string.split("|");
			cookieData = parseInt(cookie_split[34]);

			if (!cookieData) {
				myConsoleTS("rcsTR senza data. Chiamo Servizio.");
				TrackingPixel();
			} else {
				nowData = new Date().getTime();

				myConsoleTS("Ora: " + nowData);
				myConsoleTS("Cookie: " + cookieData);

				if ((nowData - cookieData) > 259200000) {
					myConsoleTS(nowData - cookieData + " maggiore di 3 giorni. Chiamo servizio.");
					TrackingPixel();
				} else {
					myConsoleTS("Differenza minore di 3 giorni. Fine.");
				}
			}
		} else {
			myConsoleTS("rcsTR NON esiste. Chiamo Servizio.");
			TrackingPixel();
		}
	} else {
		myConsoleTS("Non esiste rcsLogin. Fine.");
	}
}