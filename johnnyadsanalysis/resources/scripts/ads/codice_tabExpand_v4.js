//tab expanding versione 4.0 - luglio 2014 - massimiliano milani
var statusTabInit = false;

var larghezzaSitoAdv=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var altezzaSitoAdv=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

document.write('<!-- larghezza sito:'+larghezzaSitoAdv+'-->');
var dimWLinkBg = (larghezzaSitoAdv - 1050)/2;
var tabSelezionato;
//per il random //////////////////////////////////////////////////////////////////////////////////////////
var loghiTabRandom = new Array();
var coloreBannerRandom = new Array();
var swfLoadRandom = new Array();
var urlPuntamentoRandom = new Array();
var urlPuntamentoSkinRandom = new Array();
var tipoFileRandom = new Array();
var imgBgTabRandom = new Array();
var idTracciamentoRandom = new Array();
var banner_editoriale_300x100Random = new Array();
var img_banner_300x100Random = new Array();
var titolo_banner_300x100Random = new Array();
var logo_banner_300x100Random = new Array();
var riferimentoTrackRandom = new Array();
var indiceArrayRandom;
//
var arrvaluesRandom = new Array();
// funzione di random
function getRandNumb(val1, val2){    
  
    // genero il numero random
    var r = Math.random() * (val2 - val1) + val1;
    var r_rounded = Math.round(r);    
  
    // verifico se il numero fa già parte dell'array. Se non ne fa parte il risultato è -1
    var isvalid = (arrvaluesRandom.indexOf(r_rounded) == -1);
  
  
    if (isvalid){
  
       // document.write("<div class='estrazioneRandom'>new item: "+ r_rounded + "</div>");
		
		/*document.write('<div class="banner_300x100_adv">');
		document.write(banner_editoriale_maturita_300x100[r_rounded]);
		document.write('</div>');*/

		
		loghiTabRandom.push(loghiTab[r_rounded]);
		coloreBannerRandom.push(coloreBanner[r_rounded]);
		swfLoadRandom.push(swfLoad[r_rounded]);
		urlPuntamentoRandom.push(urlPuntamento[r_rounded]);
		urlPuntamentoSkinRandom.push(urlPuntamentoSkin[r_rounded]);
		imgBgTabRandom.push(imgBgTab[r_rounded]);
		tipoFileRandom.push(tipoFile[r_rounded]);
		idTracciamentoRandom.push(idTracciamento[r_rounded]);
		banner_editoriale_300x100Random.push(banner_editoriale_300x100[r_rounded]);
		riferimentoTrackRandom.push('');
		
		//300x100
		img_banner_300x100Random.push(img_banner_300x100[r_rounded]);
		titolo_banner_300x100Random.push(titolo_banner_300x100[r_rounded]);
		logo_banner_300x100Random.push(logo_banner_300x100[r_rounded]);
        /*
        se il numero è valido
        1. pusho il numero nell'array
        2. se l'array non è pieno rilancio la funzione
        */
        arrvaluesRandom.push(r_rounded);
        if (arrvaluesRandom.length <= (val2 - val1)){
                getRandNumb(val1, val2);
        }else{
            //document.write("<div class='estrazioneRandom'>Array terminato</div>");
        } 
    }else{       
     getRandNumb(val1, val2);
    }
}
//
if(ordineRandom){//se deve essere random o no

	getRandNumb(0, (loghiTab.length - 1));
	
}else{
	
	for(var b=0;b<=loghiTab.length;b++){
	
		
		
		loghiTabRandom.push(loghiTab[b]);
		coloreBannerRandom.push(coloreBanner[b]);
		swfLoadRandom.push(swfLoad[b]);
		urlPuntamentoRandom.push(urlPuntamento[b]);
		urlPuntamentoSkinRandom.push(urlPuntamentoSkin[b]);
		imgBgTabRandom.push(imgBgTab[b]);
		tipoFileRandom.push(tipoFile[b]);
		idTracciamentoRandom.push(idTracciamento[b]);
		riferimentoTrackRandom.push('');
		banner_editoriale_300x100Random.push(banner_editoriale_300x100[b]);
		
		//300x100
		img_banner_300x100Random.push(img_banner_300x100[b]);
		titolo_banner_300x100Random.push(titolo_banner_300x100[b]);
		logo_banner_300x100Random.push(logo_banner_300x100[b]);
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var tabAperto = false;
var nTabOnline = loghiTab.length;
//
function apriBanner(nTab){
	//setto la dimensioni dell'altezza del div etichette
	document.getElementById('etichette').style.height = (nTabOnline*100)+'px';
	for(var t=1;t<=nTabOnline;t++){//spengo gli altri tab
		document.getElementById('banner'+t).style.display = "none";
		document.getElementById('etichetta'+t).style.opacity = "0.5";
		document.getElementById('etichetta'+t).style.left = "0px";
	}
	document.getElementById('banner'+nTab).style.display = "block";
	document.getElementById('etichetta'+nTab).style.display = "block";
	document.getElementById('etichetta'+nTab).style.opacity = "1";
	
	//
	var i = document.getElementById("primarTabExpanding");
	var t = new Tween(i.style, 'right', Tween.strongEaseOut, -500, 0, 1, 'px'); 
	t.start();  
	//creo il tracciamento per le aperture
	if(idTracciamento[(nTab-1)] != '' && idTracciamento[(nTab-1)] != null){
		document.getElementById(['apertura_tab'+nTab]).innerHTML = '<img src="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamento[(nTab-1)]+'/-/apertura_tab_expanding_'+nomeSito+'/-/http://adv.banzaiadv.it/1x1.png" width="1" height="1">';//questo è un trucco per tracciare le aperture
	}
	//creo l'immagine di sfondo sul lato sx
		if(imgBgTab[(nTab-1)]){			
			document.getElementById(['link_esterno_tabexpanding'+nTab]).style.backgroundImage = "url('http://advhd.banzaiadv.it/tab_expanding/"+nomeSito+"/300x700/"+imgBgTabRandom[(nTab-1)]+"')";
			document.getElementById(['link_esterno_tabexpanding'+nTab]).style.backgroundRepeat="no-repeat";
			document.getElementById(['link_esterno_tabexpanding'+nTab]).style.backgroundPosition="top right";
			document.getElementById(['link_esterno_tabexpanding'+nTab]).style.display = "block";
			document.getElementById(['link_esterno_tabexpanding'+nTab]).style.backgroundColor = coloreBannerRandom[(nTab-1)];
		}
		//
		document.getElementById('primarTabExpandingLink').style.zIndex = "0";
		//chiusura div adv
		if(document.getElementById('stripadv980x50') != null){
			document.getElementById('stripadv980x50').style.display = "none";
		}
		if(document.getElementById('boxadv300x250') != null){
			document.getElementById('boxadv300x250').style.display = "none";
		}
		//
		if(document.getElementById('eyeDiv') != null){
			document.getElementById('eyeDiv').style.display = "none";//mi serve per spegnere/accendere il box in redirect
		}
	
}
function cambiaBanner(nTab){
	//alert('tab'+nTab);
	tabAperto = true;
	
	//
	for(var t=1;t<=nTabOnline;t++){//spengo gli altri tab
		document.getElementById('banner'+t).style.display = "none";
		document.getElementById('etichetta'+t).style.opacity = "0.5";
		document.getElementById('etichetta'+t).style.left = "0px";
		document.getElementById('link_esterno_tabexpanding'+t).style.display = "none";
	}
	//creo l'immagine di sfondo sul lato sx
	if(imgBgTab[(nTab-1)]){
		document.getElementById('link_esterno_tabexpanding'+nTab).style.display = "block";
		document.getElementById('link_esterno_tabexpanding'+nTab).style.backgroundImage = "url('http://advhd.banzaiadv.it/tab_expanding/"+nomeSito+"/300x700/"+imgBgTabRandom[(nTab-1)]+"')";
		document.getElementById('link_esterno_tabexpanding'+nTab).style.backgroundRepeat="no-repeat";
		document.getElementById('link_esterno_tabexpanding'+nTab).style.backgroundPosition="top right";
		document.getElementById('link_esterno_tabexpanding'+nTab).style.backgroundColor = coloreBannerRandom[(nTab-1)];
	}
	document.getElementById('primarTabExpandingLink').style.zIndex = "0";
	document.getElementById('banner'+nTab).style.display = "block";
	document.getElementById('etichetta'+nTab).style.display = "block";
	document.getElementById('etichetta'+nTab).style.opacity = "1";
}
function chiudiBanner(nTab){
	tabAperto = false;
	//alert('tab'+nTab);
	for(var t=1;t<=nTabOnline;t++){
		document.getElementById('banner'+t).style.display = "none";
		document.getElementById('etichetta'+t).style.display = "block";
		document.getElementById('etichetta'+t).style.opacity = "1";
	}
	document.getElementById('banner'+nTab).style.display = "block";
	document.getElementById(['link_esterno_tabexpanding'+nTab]).style.display = "none";
	document.getElementById('primarTabExpandingLink').style.zIndex = "-50";
	//
	var i = document.getElementById("primarTabExpanding");
	var t = new Tween(i.style, 'right', Tween.strongEaseOut, 0, -500, 1, 'px'); 
	t.start(); 
	//apertura div adv
	if(document.getElementById('stripadv980x50') != null){
	document.getElementById('stripadv980x50').style.display = "block";
	}
	if(document.getElementById('boxadv300x250') != null){
	document.getElementById('boxadv300x250').style.display = "block";
	}
	if(document.getElementById('eyeDiv') != null){
		document.getElementById('eyeDiv').style.display = "block";//mi serve per spegnere/accendere il box in redirect
	}
}
//al passaggio del mouse sul tab
function overTab(nTab){
	if(!tabAperto){//se il tab è chiuso
		//alert('overTab');
		for(u=1; u<=nTabOnline; u++){
			if(nTab != u){//escludo il tab selezionato
				document.getElementById('etichetta'+u).style.left = '0px' ;
			}
		}
		var i = document.getElementById('etichetta'+nTab);
		var t = new Tween(i.style, 'left', Tween.strongEaseOut, 0, -25, 0.1, 'px'); 
		t.start(); 
	}else{
		document.getElementById('etichetta'+nTab).style.opacity = "1";
	}
}
function outTab(nTab){
	if(!tabAperto){//se il tab è chiuso
		for(u=1; u<=nTabOnline; u++){
			if(nTab != u){//escludo il tab selezionato
				document.getElementById('etichetta'+u).style.left = '0px' ;
			}
		}
		var i = document.getElementById('etichetta'+nTab);
		var t = new Tween(i.style, 'left', Tween.strongEaseOut, -25, 0, 0.1, 'px'); 
		t.start();
	}else{
		if(tabSelezionato != nTab){//escludo il tab selezionato per l'apertura
			document.getElementById('etichetta'+nTab).style.opacity = "0.5";
		}
	}
}
//check per la chiusura tramite tab
function checkBanner(nTab){
	if(tabAperto){//se è aperto
		//chiusura tab
		tabAperto = false;
		//se il tab e quello selezionato al click lo faccio chiudere
		if(tabSelezionato == nTab){
			chiudiBanner(nTab);
		}else{
			cambiaBanner(nTab);
		}
	}else{ //se è chiuso
		//apertura tab
		if(statusTabInit == false){//se non è mai stato aperto
			statusTabInit = true;
			creaBanner();
		}
		tabAperto = true;
		apriBanner(nTab);		
	}
	tabSelezionato = nTab;
}

//il tab viene crato solo per risoluzioni > 1024, se non c'è personalizzazione, se i tab sono superiori a 3
if(larghezzaSitoAdv > 1180 && statusPersonalizzazioni == false && (nTabOnline > 3 || controlloLimiteMinimo==false) && nTabOnline > 0 ){
	
	var myTimerTab=setInterval(function(){creaTabBanner()},2000);
	
}
//creazione tab etichette
function creaTabBanner(){
	clearInterval(myTimerTab);
	
	var bannertab								=	document.createElement('div');
	
	bannertab.setAttribute('id','primarTabExpanding');
	
	document.getElementsByTagName('body')[0].appendChild(bannertab);
	
	flashObj = '<div id="contentTabExpanding">';
	flashObj += '<div id="contentEtichette">';
	
	//posiziono le etichette al centro della pagina
	top_etichette = ((altezzaSitoAdv-(loghiTab.length*100))/2);
	if(top_etichette<0){
		top_etichette = 0;
	}
	
	flashObj += '<div id="etichette" style="top:'+top_etichette+'px">';

	//ciclo etichette clienti
	for(var t=1;t<=nTabOnline;t++){
		
		var r=t-1;
		
		flashObj += '<a id="etichetta'+t+'" onClick="checkBanner('+t+');" onMouseOver="overTab('+t+');" onMouseOut="outTab('+t+');" style="background: url(http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/icona_100x100/'+loghiTabRandom[r]+') top left '+coloreBannerRandom[r]+' no-repeat;"></a>';

	}
	
	
	flashObj +='</div><!--fine div etichette -->';
	flashObj +='</div><!--fine div contentEtichette -->';
	flashObj +='</div><!--fine div contentTabExpanding -->';
	
	//creo il contenitore sx dei div dei link 300x700
	var bannertab								=	document.createElement('div');
	
	bannertab.setAttribute('id','primarTabExpandingLink');
	bannertab.style.width						= dimWLinkBg+'px';
	bannertab.style.height						= '1200px';
	bannertab.style.position					= 'fixed';
	bannertab.style.top					 		= '0';
	bannertab.style.zIndex 						= "-50";
	
	document.getElementsByTagName('body')[0].appendChild(bannertab);
	
	flashObjLink = '';
	
	//cliclo i div link dx
	for(var s=1;s<=nTabOnline;s++){
		
		var m=s-1;
		
		flashObjLink +='<a href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamentoRandom[m]+'/-/click_tab_expanding/-/'+urlPuntamentoSkinRandom[m]+'" class="adv_esterno_tabexpanding" id="link_esterno_tabexpanding'+s+'" style="width:'+dimWLinkBg+'px; height:1200px;" target="_blank"></a>';
		
		//questo ha l'impression
		/*flashObjLink +='<a href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamentoRandom[m]+'/-/click_tab_expanding/-/'+urlPuntamentoSkinRandom[m]+'" class="adv_esterno_tabexpanding" id="link_esterno_tabexpanding'+s+'" style="width:'+dimWLinkBg+'px; height:1200px;" target="_blank"><img src="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamentoRandom[m]+'/-/impression_tab_expanding/-/http://adv.banzaiadv.it/1x1.png" width="1" height="1"></a>';*/
	
	}
	
	document.getElementById('primarTabExpandingLink').innerHTML	= flashObjLink;
	document.getElementById('primarTabExpanding').innerHTML	= flashObj;
}
//creazione dei tab grandi 500x600
function creaBanner(){
	//ciclo banner
	for(var s=1;s<=nTabOnline;s++){
		
		var m=s-1;
		
		flashObj +='<div id="banner'+s+'">';
		flashObj +='<div class="contenutoBanner" style="background-color:'+coloreBannerRandom[m]+' !important;">';
		flashObj +='<a class="chiudiBanner" onClick="chiudiBanner('+s+');">CHIUDI</a>';
		
		//non faccio apparire il link se non c'è
		if(urlPuntamentoRandom[m] != '' && tipoFileRandom[m] != 'swf'){
			flashObj +='<a href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamentoRandom[m]+'/-/click_tab_expanding/-/'+urlPuntamentoRandom[m]+'" class="area_attiva" target="_blank">';
		}

		if(tipoFileRandom[m] == 'swf'){//distinguo tra swf e img
			
			flashObj +='<object  classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"  width="500" height="600" id="tabFlash'+s+'" align="middle"><param name="movie" value="http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/banner_500x600/'+swfLoadRandom[m]+'?clickTag=http://lab.banzaimedia.it/track/index1.php?id='+idTracciamentoRandom[m]+'/-/click_tab_expanding/-/'+urlPuntamentoRandom[m]+'" /><param name="menu" value="false" /><param name="wmode" value="transparent" /><embed  src="http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/banner_500x600/'+swfLoadRandom[m]+'?clickTag=http://lab.banzaimedia.it/track/index1.php?id='+idTracciamentoRandom[m]+'/-/click_tab_expanding/-/'+urlPuntamentoRandom[m]+'"  menu="false" wmode="transparent" quality="high" width="500"  height="600" name="'+nomeSito+'" align="middle"  allowScriptAccess="sameDomain" allowFullScreen="false"  type="application/x-shockwave-flash" id="tabFlash'+s+'" pluginspage="http://www.adobe.com/go/getflashplayer_it" /></object>';
		
		}else{
			
			flashObj +='<img src="http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/banner_500x600/'+swfLoadRandom[m]+'" border="0">';
			
		}
		
		if(urlPuntamentoRandom[m] != '' && tipoFileRandom[m] != 'swf'){
			flashObj +='</a>';
		}

		
		//questo mi serve per tracciare le impression e per le apertura del tab
		flashObj +='<div id="apertura_tab'+s+'"></div>';
		
		
		
		flashObj +='</div><!-- fine div banner+s -->';
		flashObj +='</div><!-- fine div contenutoBanner -->';
	
		
	}
	
	document.getElementById('contentTabExpanding').innerHTML	= flashObj;
	
}
//tracciamenti
document.write(tracciamenti_clienti_sitetab);