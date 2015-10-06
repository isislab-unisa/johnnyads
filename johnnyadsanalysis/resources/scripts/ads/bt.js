<!--
	///////////////// BT - Start /////////////////
	var OAS_taxonomy = '';
	var pageUrlPath = window.location.href.replace(window.location.protocol + "//", "");
	
	pageUrlPath = pageUrlPath.replace(/%2F/g,"/");

	pageUrlPath = pageUrlPath.replace(/%3F/g,"/");
	pageUrlPath = pageUrlPath.replace(/\?/g,"/");

	pageUrlPath = pageUrlPath.replace(/%21/g,"_");
	pageUrlPath = pageUrlPath.replace(/!/g,"_");

	pageUrlPath = pageUrlPath.replace(/%2A/g,"_");
	pageUrlPath = pageUrlPath.replace(/\*/g,"_");

	pageUrlPath = pageUrlPath.replace(/%22/g,"_");
	pageUrlPath = pageUrlPath.replace(/\"/g,"_");

	pageUrlPath = pageUrlPath.replace(/%27/g,"_");
	pageUrlPath = pageUrlPath.replace(/'/g,"_");

	pageUrlPath = pageUrlPath.replace(/%28/g,"_");
	pageUrlPath = pageUrlPath.replace(/\(/g,"_");

	pageUrlPath = pageUrlPath.replace(/%29/g,"_");
	pageUrlPath = pageUrlPath.replace(/\)/g,"_");

	pageUrlPath = pageUrlPath.replace(/%3B/g,"_");
	pageUrlPath = pageUrlPath.replace(/;/g,"_");

	pageUrlPath = pageUrlPath.replace(/%3A/g,"_");
	pageUrlPath = pageUrlPath.replace(/\:/g,"_");

	pageUrlPath = pageUrlPath.replace(/%40/g,"_");
	pageUrlPath = pageUrlPath.replace(/@/g,"_");

	pageUrlPath = pageUrlPath.replace(/%26/g,"_");
	pageUrlPath = pageUrlPath.replace(/&/g,"_");

	pageUrlPath = pageUrlPath.replace(/%3D/g,"_");
	pageUrlPath = pageUrlPath.replace(/=/g,"_");

	pageUrlPath = pageUrlPath.replace(/%2B/g,"_");
	pageUrlPath = pageUrlPath.replace(/\+/g,"_");

	pageUrlPath = pageUrlPath.replace(/%24/g,"_");
	pageUrlPath = pageUrlPath.replace(/\$/g,"_");

	pageUrlPath = pageUrlPath.replace(/%2C/g,"_");
	pageUrlPath = pageUrlPath.replace(/,/g,"_");

	pageUrlPath = pageUrlPath.replace(/%23/g,"_");
	pageUrlPath = pageUrlPath.replace(/#/g,"_");

	pageUrlPath = pageUrlPath.replace(/%5B/g,"_");
	pageUrlPath = pageUrlPath.replace(/\[/g,"_");

	pageUrlPath = pageUrlPath.replace(/%5D/g,"_");
	pageUrlPath = pageUrlPath.replace(/\]/g,"_");

	pageUrlPath = pageUrlPath.replace(/%20/g,"_");
	pageUrlPath = pageUrlPath.replace(/ /g,"_");

	//Tenere la sostituzione del % come ultima istruzione
	pageUrlPath = pageUrlPath.replace(/%25/g,"_");
	pageUrlPath = pageUrlPath.replace(/\%/g,"_");

	//
	// Per disabilitare BT commentare la riga sottostante
	//
	document.write("\n<script type=\"text/javascript\" src=\"http://bt.rcs.it/" + pageUrlPath + "\"><\/script>");
	-->