function mostra_finestra_help () {
	$("#titolo_barra_superiore").html(chrome.i18n.getMessage("OptionsLabel16_label"));
	$("#titolo_barra_inferiore").html(chrome.i18n.getMessage("OptionsLabel17_label"));
    $("#parte_superiore").height("68mm");
	$("#contenuto_parte_superiore_main").css("display", "none");
	$("#contenuto_parte_superiore_help").css("display", "block");
    $("#parte_inferiore").css("display", "block");
	$("#pulsante_destro_main").css("display", "none");
	$("#pulsante_destro_help").css("display", "inline");
}

function mostra_finestra_main () {
	$("#parte_inferiore").css("display", "block");
	$("#titolo_barra_superiore").html(chrome.i18n.getMessage("OptionsLabel1_label"));
	$("#parte_superiore").height("88mm");
	$("#contenuto_parte_superiore_main").css("display", "block");
	$("#contenuto_parte_superiore_help").css("display", "none");
	$("#parte_inferiore").css("display", "none");
	$("#pulsante_destro_main").css("display", "inline");
	$("#pulsante_destro_help").css("display", "none");
}

function sospendi_alamut (e) {
    if (localStorage['alamutSospeso'] === 'true') { // Era già sospeso => Dobbiamo riattivarlo!
        localStorage['alamutSospeso'] = false; // Riattivato!
        $("#testo_pulsante_sospendi").text(chrome.i18n.getMessage("OptionsLabel15_label"));
        $("#corpo").css("visibility", "visible");
        $("#sospensione").css("display", "none");
        mostra_finestra_main();
    }
    else { // Bisogna sospendere Alamut
        localStorage['alamutSospeso'] = true;
        $("#testo_pulsante_sospendi").text(chrome.i18n.getMessage("OptionsLabel34_label"));
        $("#corpo").css("visibility", "hidden");
        $("#sospensione").css("display", "block");
        $("#pulsante_destro_main").css("display", "none");
        $("#pulsante_destro_help").css("display", "none");
    }
}

function carica_preferenze () {
    if (localStorage['alamutSospeso'] === 'true') {
        document.getElementById("testo_pulsante_sospendi").appendChild(document.createTextNode(chrome.i18n.getMessage("OptionsLabel34_label")));
        $("#corpo").css("visibility", "hidden");
        $("#sospensione").css("display", "block");
        $("#pulsante_destro_main").css("display", "none");
    }
    else {
        document.getElementById("testo_pulsante_sospendi").appendChild(document.createTextNode(chrome.i18n.getMessage("OptionsLabel15_label")));
        $("#checkbox_dati_anonimi").attr('checked', localStorage["datianonimi"] === 'true'); // Impostiamo il selettore per l'invio di dati anonimi
    }
}

$(document).ready(function () {
	$("#checkbox_dati_anonimi").click(function () { // Impostiamo il listener per la casella dei dati anonimi nella pagina di help
		localStorage["datianonimi"] = $(this).is(':checked');
	});
	carica_preferenze();
});


document.getElementById("pulsante_sinistro").addEventListener("click", sospendi_alamut);
document.getElementById("pulsante_destro_main").addEventListener("click", mostra_finestra_help);
document.getElementById("pulsante_destro_help").addEventListener("click", mostra_finestra_main);



// Qui impostiamo tutte le label, in modo dinamico, in base alla lingua dell'utente
document.getElementById("versione").appendChild(document.createTextNode(chrome.i18n.getMessage("version")));
document.getElementById("sito").appendChild(document.createTextNode(chrome.i18n.getMessage("webSite")));
document.getElementById("autore").appendChild(document.createTextNode(chrome.i18n.getMessage("appAuthor")));
document.getElementById("sviluppatori").appendChild(document.createTextNode(chrome.i18n.getMessage("developers")));
document.getElementById("titolo_barra_superiore").appendChild(document.createTextNode(chrome.i18n.getMessage("OptionsLabel1_label")));
document.getElementById("descrizione_app").appendChild(document.createTextNode(chrome.i18n.getMessage("OptionsLabel7_label")));
document.getElementById("titolo_versione").appendChild(document.createTextNode(chrome.i18n.getMessage("OptionsLabel8_label")));
document.getElementById("titolo_sito").appendChild(document.createTextNode(chrome.i18n.getMessage("OptionsLabel9_label")));
document.getElementById("titolo_autore").appendChild(document.createTextNode(chrome.i18n.getMessage("OptionsLabel10_label")));
document.getElementById("titolo_sviluppatori").appendChild(document.createTextNode(chrome.i18n.getMessage("OptionsLabel11_label")));
document.getElementById("invia_dati_anonimi").appendChild(document.createTextNode(chrome.i18n.getMessage("OptionsLabel14_label")));
