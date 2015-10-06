// 300x100 mobile v 3.0 - luglio 2013 - massimiliano milani
//--> QUESTO BLOCCO FA VEDERE SOLO BLOCCHI 300X100 DOPO IL 3°
//I DATI DEI BANNER SONO PRESI DEL FILE tabExpand_*.js di ogni sito


document.write('<dl class="box speciali" id="spons">');
//// 300x100 singoli top ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(titolo_banner_300x100_singolo.length > 0 ){//
	document.write('<dt data-title="Suggerimenti"></dt>');
	}
//
for (var i=0; i<titolo_banner_300x100_singolo.length; i++){
	if(titolo_banner_300x100_singolo[i]!='' && titolo_banner_300x100_singolo[i]!='undefined' && titolo_banner_300x100_singolo[i]!= undefined && posizione_300x100_singolo[i] == 'top' ){//controllo che il banner esista
		document.write('<!-- singolo item --><dd>');
		document.write('<a class="i" href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamento_singolo[i]+'/-/click_300x100_singolo'+riferimentoTrackRandom[i]+'_'+nomeSito+'/-/'+urlPuntamento_singolo[i]+'" title="'+titolo_banner_300x100[i]+'">');
		document.write('<img src="http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/img_300x100/'+img_banner_300x100_singolo[i]+'" alt="'+titolo_banner_300x100_singolo[i]+'">');
		document.write('</a>');
		document.write('<a class="t" href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamento_singolo[i]+'/-/click_300x100'+riferimentoTrackRandom[i]+'_'+nomeSito+'/-/'+urlPuntamento_singolo[i]+'" title="'+titolo_banner_300x100[i]+'">'+titolo_banner_300x100_singolo[i]+'</a>');
		document.write('<a class="s" href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamento_singolo[i]+'/-/click_300x100'+riferimentoTrackRandom[i]+'_'+nomeSito+'/-/'+urlPuntamento_singolo[i]+'" title="'+titolo_banner_300x100[i]+'"><img src="http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/logo_300x100/'+logo_banner_300x100_singolo[i]+'" alt=""></a>');
		document.write('</dd><!-- /singolo item -->');
	}
}

////////////// 300x100 standard legati al sitetab /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(status300x100 == true || larghezzaSitoAdv <= 1100 ){
	if(titolo_banner_300x100Random.length > 3 && titolo_banner_300x100_singolo.length == 0){//lo faccio vedere solo se c'è un 4° banner
	document.write('<dt data-title="Suggerimenti"></dt>');
	}
//faccio un ciclo per i banner_300x100 legati al sitetab
	for (var i=3; i<titolo_banner_300x100Random.length; i++){
		if(titolo_banner_300x100Random[i]!='' && titolo_banner_300x100Random[i]!='undefined' && titolo_banner_300x100Random[i]!= undefined ){//controllo che il banner esista
			document.write('<!-- singolo item --><dd>');
			document.write('<a class="i" href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamentoRandom[i]+'/-/click_300x100'+riferimentoTrackRandom[i]+'_'+nomeSito+'/-/'+urlPuntamentoRandom[i]+'" title="'+titolo_banner_300x100Random[i]+'">');
			document.write('<img src="http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/img_300x100/'+img_banner_300x100Random[i]+'" alt="'+titolo_banner_300x100Random[i]+'">');
			document.write('</a>');
			document.write('<a class="t" href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamentoRandom[i]+'/-/click_300x100'+riferimentoTrackRandom[i]+'_'+nomeSito+'/-/'+urlPuntamentoRandom[i]+'" title="'+titolo_banner_300x100Random[i]+'">'+titolo_banner_300x100Random[i]+'</a>');
			document.write('<a class="s" href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamentoRandom[i]+'/-/click_300x100'+riferimentoTrackRandom[i]+'_'+nomeSito+'/-/'+urlPuntamentoRandom[i]+'" title="'+titolo_banner_300x100Random[i]+'"><img src="http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/logo_300x100/'+logo_banner_300x100Random[i]+'" alt=""></a>');
			document.write('</dd><!-- /singolo item -->');
		}
	}
}

//// 300x100 singoli bottom ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (var i=0; i<titolo_banner_300x100_singolo.length; i++){
	if(titolo_banner_300x100_singolo[i]!='' && titolo_banner_300x100_singolo[i]!='undefined' && titolo_banner_300x100_singolo[i]!= undefined && posizione_300x100_singolo[i] == 'bottom' ){//controllo che il banner esista
		document.write('<!-- singolo item --><dd>');
		document.write('<a class="i" href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamento_singolo[i]+'/-/click_300x100_singolo'+riferimentoTrackRandom[i]+'_'+nomeSito+'/-/'+urlPuntamento_singolo[i]+'" title="'+titolo_banner_300x100[i]+'">');
		document.write('<img src="http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/img_300x100/'+img_banner_300x100_singolo[i]+'" alt="'+titolo_banner_300x100_singolo[i]+'"><img src="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamento_singolo[i]+'/-/impression_300x100_singolo/-/http://adv.banzaiadv.it/1x1.png" width="1" height="1">');
		document.write('</a>');
		document.write('<a class="t" href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamento_singolo[i]+'/-/click_300x100'+riferimentoTrackRandom[i]+'_'+nomeSito+'/-/'+urlPuntamento_singolo[i]+'" title="'+titolo_banner_300x100[i]+'">'+titolo_banner_300x100_singolo[i]+'</a>');
		document.write('<a class="s" href="http://lab.banzaimedia.it/track/index1.php?id='+idTracciamento_singolo[i]+'/-/click_300x100'+riferimentoTrackRandom[i]+'_'+nomeSito+'/-/'+urlPuntamento_singolo[i]+'" title="'+titolo_banner_300x100[i]+'"><img src="http://advhd.banzaiadv.it/tab_expanding/'+nomeSito+'/logo_300x100/'+logo_banner_300x100_singolo[i]+'" alt=""></a>');
		document.write('</dd><!-- /singolo item -->');
	}
}

//////////////////////////////////////////////////////////
document.write('</dl>');
document.write('<div style="height:10px;"></div>');