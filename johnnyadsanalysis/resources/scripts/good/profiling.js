
window.infiniTrack = new Object();
window.infiniTagC = new Object();

infiniTrack.init = function(){
	////infiniTrack._consoleLog("infiniTrack init");
	
	infiniTrack._currentLogCache = new Array();
	
	/*valori da prendere da file di properties*/
	infiniTrack._rowsToSend = conf.profilingConsts.rowsToSend;
	infiniTrack._maxTime = conf.profilingConsts.maxTime;
	infiniTrack._toLogDefaults = conf.profilingConsts.toLogDefaults;
	infiniTrack.loggerUrl = conf.profilingConsts.loggerUrl;
	infiniTrack._enabled = conf.profilingConsts.enabled;
	infiniTrack._separator = conf.profilingConsts.separator;
	
	infiniTrack.reInit();
	
	infiniTrack._taskInterval = window.setInterval(infiniTrack._task, infiniTrack._taskTime);
}

infiniTrack.reInit = function(){
	////infiniTrack._consoleLog("infiniTrack reInit");
	
	infiniTrack._lastTime = new Date().getTime();
	var logValues = (USER && USER.userInfo && USER.userInfo.loglevel && USER.userInfo.loglevel != "") ? USER.userInfo.loglevel : "";
	for (elem in infiniTrack._toLog){
		if (logValues.indexOf(elem)>-1){
			infiniTrack._toLog[elem] = true;
		}else{
			infiniTrack._toLog[elem] = infiniTrack._toLogDefaults[elem];
		}
	}
}

infiniTrack.add = function(track, type){
	////infiniTrack._consoleLog("infiniTrack add");
	
	if (infiniTrack._enabled && infiniTrack._isToProfile(type)){
		infiniTrack._currentLogCache.push(track);
		if (type == "ERROR"){
			infiniTrack.forceSend();
		}
	}
}

infiniTrack.forceSend = function(){
	////infiniTrack._consoleLog("infiniTrack forceSend");
	infiniTrack._sendingLogCache = infiniTrack._currentLogCache;
	infiniTrack._currentLogCache = new Array();
	infiniTrack._lastTime = new Date().getTime();
	infiniTrack._sendProfile();
	/*TODO forzare l'invio dei dati in caso di ERROR se ERROR va loggato*/
}

infiniTrack.forceMaxLogLevel = function(){
	////infiniTrack._consoleLog("infiniTrack forceMaxLogLevel");
	
	infiniTrack._toLog = {
		"PROFILING": true,
		"LOGGING": true,
		"VIDEO_QUALITY": true,
		"ERROR": true
	};
}

infiniTrack.getTrack = function(type, jsonData){
	////infiniTrack._consoleLog("infiniTrack getTrack");
	
	return infiniTrack["_get"+type](jsonData);
}

infiniTrack.getTrackTemplate = function(type){
	////infiniTrack._consoleLog("infiniTrack getTrackTemplate");
	
	return infiniTrack["_get"+type+"TrackTemplate"]();
}

infiniTrack._debug = true;
infiniTrack._enabled = true;
infiniTrack._taskTime = 500;
infiniTrack._lastTime = 0;
infiniTrack._maxTime = 10000;
infiniTrack._separator = "|";
infiniTrack._toLogDefaults = {
	"PROFILING": false,
	"LOGGING": false,
	"VIDEO_QUALITY": false,
	"ERROR": false
};

infiniTrack._toLog = {
	"PROFILING": false,
	"LOGGING": false,
	"VIDEO_QUALITY": false,
	"ERROR": false
};

infiniTrack._rowsToSend = 50;

infiniTrack.loggerUrl = "http://usage.infinitytv.it/InfiniLog/InfiniLog.jsp";//"svm19842.vps.tagadab.it:8080/InfiniLog/InfiniLog.jsp";

infiniTrack._currentLogCache = new Array();
infiniTrack._sendingLogCache = undefined;

infiniTrack._consoleLog = function(text){
	if (infiniTrack._debug){
		//console.log(text);
	}
}

infiniTrack._removeAll = function(){
	////infiniTrack._consoleLog("infiniTrack _removeAll");
	
	infiniTrack._currentLogCache = new Array();
	infiniTrack._lastTime = new Date().getTime();
}

infiniTrack._isToProfile = function(type){
	////infiniTrack._consoleLog("infiniTrack _isToProfile");
	
	var toReturn = false;
	if (infiniTrack._toLog[type]){
		toReturn  = true;
	}
	
	return toReturn;
}

infiniTrack._sendProfile = function(){
	infiniTrack._consoleLog("infiniTrack _sendProfile");
	if (infiniTrack._enabled){
		var toSend = infiniTrack._sendingLogCache;
		infiniTrack._sendingLogCache = new Array();
		var logObj = new Object();
		var i1 = 1;
		for (elem in toSend){
			/*TODO da mettere invio vero al server*/
			if (toSend[elem] && typeof(toSend[elem]) != "function"){
				////infiniTrack._consoleLog("xxxxxxxxxxxxx sending " + toSend[elem]);
				var str = toSend[elem];
				str = str.replace(/{/g, "");
				str = str.replace(/}/g, "");
				logObj["d"+i1] = str;
				i1++;
			}
		}
		var jsonToSend = JSON.stringify(logObj);
		for (var k = 0; k < conf.profilingConsts.rowsToSend; k++){
			jsonToSend = jsonToSend.replace('"d' + k + '"', 'd' + k + '');			
		}		
		////infiniTrack._consoleLog("xxxxxxxxxxxxx sending " + jsonToSend);
		var toDay = new Date();
		var _name = "log_PCTV_" + (("0000" + toDay.getFullYear()).slice(4)) + "-" + (((toDay.getMonth()+1) < 10 ? "0" : "") + (toDay.getMonth()+1)) + "-" + ((toDay.getDate() < 10 ? "0" : "") + toDay.getDate());
		var call_options = {
			nome : _name,
			separator : "%0d%0a",
			data : encodeURIComponent(jsonToSend)
		};
		$.ajax({
			url : conf.profilingConsts.loggerUrl,
			dataType : "text",
			type : "POST",
			data : call_options,
			success : function(response, status, request){
				////infiniTrack._consoleLog("" + response + "");
			},
			error : function(jqXHR, textStatus, errorThrown) {
				////infiniTrack._consoleLog("" + textStatus + " (" + errorThrown + ")");
			}
		});
	}
	
}

infiniTrack._task = function(){
	////infiniTrack._consoleLog("infiniTrack _task");
	
	var sent = false;
	if (!sent && infiniTrack._rowsToSend <= infiniTrack._currentLogCache.length){
		////infiniTrack._consoleLog("infiniTrack _task sending by rows");
		sent = true;
		infiniTrack._sendingLogCache = infiniTrack._currentLogCache;
		infiniTrack._currentLogCache = new Array();
		infiniTrack._lastTime = new Date().getTime();
		infiniTrack._sendProfile();
	}
	
	if (!sent && (new Date().getTime() > infiniTrack._lastTime + infiniTrack._maxTime) && infiniTrack._currentLogCache.length > 0){
		////infiniTrack._consoleLog("infiniTrack _task sending by time");
		sent = true;
		infiniTrack._sendingLogCache = infiniTrack._currentLogCache;
		infiniTrack._currentLogCache = new Array();
		infiniTrack._lastTime = new Date().getTime();
		infiniTrack._sendProfile();
	}
	
	if (!sent && infiniTrack._currentLogCache.length == 0){
		////infiniTrack._consoleLog("infiniTrack _task reset time");
		infiniTrack._lastTime = new Date().getTime();
	}
	
}

infiniTrack._getLOGGING = function(jsonData){
	////infiniTrack._consoleLog("infiniTrack getLOGGING");
	
	if (jsonData.TIMESTAMP && jsonData.TIMESTAMP != ""){
		var timestamp_old = jsonData.TIMESTAMP;
		var timestamp_new;
		if ((timestamp_old + "").length !=13) {
			timestamp_new = jsonData.TIMESTAMP;
		}
		else {
		var toDay = new Date(timestamp_old);
		var day = toDay.getDate();
		if (day<10) {
			day = "0"+ day; 	
		}
		var timestamp_new = (("0000" + toDay.getFullYear()).slice(4)) + "-" + (((toDay.getMonth()+1) < 10 ? "0" : "") + (toDay.getMonth()+1)) + "-" + day + "T" + ((toDay.getHours()) + ":"  + ((toDay.getMinutes())) + ":" + (toDay.getSeconds()));
		jsonData.TIMESTAMP = timestamp_new;
		}
	}
	
	if (jsonData.TIME && jsonData.TIME != ""){
		var time_old = jsonData.TIME;
		var time_new;
		if ((time_old + "").length !=13) {
			time_new = jsonData.TIME;
		}
		else {
		var toDay = new Date(time_old);
		var day = toDay.getDate();
		if (day<10) {
			day = "0"+ day; 	
		}
		var time_new = (("0000" + toDay.getFullYear()).slice(4)) + "-" + (((toDay.getMonth()+1) < 10 ? "0" : "") + (toDay.getMonth()+1)) + "-" + day + "T" + ((toDay.getHours()) + ":"  + ((toDay.getMinutes())) + ":" + (toDay.getSeconds()));
		jsonData.TIME = time_new;
		}
	}

	var s = infiniTrack._separator;
	
	var toReturn = "";
	
	toReturn = timestamp_new + s +
			time_new + s +
			jsonData.TYPE + s +
			jsonData.USER_NAME + s +
			jsonData.DEVICE_ID + s +
			jsonData.MODEL + s +
			jsonData.FW_VER + s +
			jsonData.APP_VERSION + s +
			jsonData.BACKEND_ID + s +
			jsonData.CONTENT_ID + s +
			jsonData.CP_ID + s +
			jsonData.CONTENT_TYPE + s +
			jsonData.API + s +
			jsonData.TIME + s +
			jsonData.ADDITIONAL_DATA + s +
			jsonData.EXCEPTION;
	
	return toReturn;
}

infiniTrack._getVIDEO_QUALITY = function(jsonData){
	////infiniTrack._consoleLog("infiniTrack getVIDEO_QUALITY");
	
	if (jsonData.TIMESTAMP && jsonData.TIMESTAMP != ""){
		var timestamp_old = jsonData.TIMESTAMP;
		var timestamp_new;
		if ((timestamp_old + "").length !=13) {
			timestamp_new = jsonData.TIMESTAMP;
		}
		else {
		var toDay = new Date(timestamp_old);
		var day = toDay.getDate();
		if (day<10) {
			day = "0"+ day; 	
		}
		var timestamp_new = (("0000" + toDay.getFullYear()).slice(4)) + "-" + (((toDay.getMonth()+1) < 10 ? "0" : "") + (toDay.getMonth()+1)) + "-"+ day + "T" + ((toDay.getHours()) + ":"  + ((toDay.getMinutes())) + ":" + (toDay.getSeconds()));
		jsonData.TIMESTAMP = timestamp_new;
		}
	}
	
	if (jsonData.TIME && jsonData.TIME != ""){
		var time_old = jsonData.TIME;
		var time_new;
		if ((time_old + "").length !=13) {
			time_new = jsonData.TIME;
		}
		else {
		var toDay = new Date(time_old);
		var day = toDay.getDate();
		if (day<10) {
			day = "0"+ day; 	
		}
		var time_new = (("0000" + toDay.getFullYear()).slice(4)) + "-" + (((toDay.getMonth()+1) < 10 ? "0" : "") + (toDay.getMonth()+1)) + "-"+ day + "T" + ((toDay.getHours()) + ":"  + ((toDay.getMinutes())) + ":" + (toDay.getSeconds()));
		jsonData.TIME = time_new;
		}
	}
	
	var s = infiniTrack._separator;
	
	var toReturn = "";
	
	toReturn = timestamp_new + s +
			time_new + s +
			jsonData.TYPE + s +
			jsonData.USER_NAME + s +
			jsonData.DEVICE_ID + s +
			jsonData.MODEL + s +
			jsonData.FW_VER + s +
			jsonData.APP_VERSION + s +
			jsonData.BACKEND_ID + s +
			jsonData.CONTENT_ID + s +
			jsonData.CP_ID + s +
			jsonData.CONTENT_TYPE + s +
			jsonData.STARTUP_TIME + s +
			jsonData.BUFFER_TIME + s +
			jsonData.AVERAGE_BITRATE + s +
			jsonData.BOOKMARK + s +
			jsonData.DELTA_THRESHOLD + s +
			jsonData.EXCEPTION + s +
			jsonData.STARTUP_CLEINT_IP + s +
			jsonData.STARTUP_SERVER_IP + s +
			jsonData.STARTUP_AKAMAI_RESP_DATE + s +
			jsonData.END_CLEINT_IP + s +
			jsonData.END_SERVER_IP + s +
			jsonData.END_AKAMAI_RESP_DATE + s +
			jsonData.MBPS_SPEED_TEST + s +
			jsonData.DNS;
	
	return toReturn;
}

infiniTrack._getPROFILING = function(jsonData){
	////infiniTrack._consoleLog("infiniTrack getPROFILING");
	
	if (jsonData.TIMESTAMP && jsonData.TIMESTAMP != ""){
		var timestamp_old = jsonData.TIMESTAMP;
		var timestamp_new;
		if ((timestamp_old + "").length !=13) {
			timestamp_new = jsonData.TIMESTAMP;
		}
		else {
		var toDay = new Date(timestamp_old);
		var day = toDay.getDate();
		if (day<10) {
			day = "0"+ day; 	
		}
		var timestamp_new = (("0000" + toDay.getFullYear()).slice(4)) + "-" + (((toDay.getMonth()+1) < 10 ? "0" : "") + (toDay.getMonth()+1)) + "-" + day + "T" + ((toDay.getHours()) + ":"  + ((toDay.getMinutes())) + ":" + (toDay.getSeconds()));
		jsonData.TIMESTAMP = timestamp_new;
		}
	}
	
	if (jsonData.TIME && jsonData.TIME != ""){
		var time_old = jsonData.TIME;
		var time_new;
		if ((time_old + "").length !=13) {
			time_new = jsonData.TIME;
		}
		else {
		var toDay = new Date(time_old);
		var day = toDay.getDate();
		if (day<10) {
			day = "0"+ day; 	
		}
		var time_new = (("0000" + toDay.getFullYear()).slice(4)) + "-" + (((toDay.getMonth()+1) < 10 ? "0" : "") + (toDay.getMonth()+1)) + "-" + day + "T" + ((toDay.getHours()) + ":"  + ((toDay.getMinutes())) + ":" + (toDay.getSeconds()));
		jsonData.TIME = time_new;
		}
	}
	
	var s = infiniTrack._separator;
	
	var toReturn = "";
	
	toReturn = timestamp_new + s +
			time_new + s +
			jsonData.TYPE + s +
			jsonData.USER_NAME + s +
			jsonData.DEVICE_ID + s +
			jsonData.MODEL + s +
			jsonData.FW_VER + s +
			jsonData.APP_VERSION + s +
			jsonData.BACKEND_ID + s +
			jsonData.CONTENT_ID + s +
			jsonData.CP_ID + s +
			jsonData.CONTENT_TYPE + s +
			jsonData.API + s +
			jsonData.TIME + s +
			jsonData.ADDITIONAL_DATA + s +
			jsonData.EXCEPTION;
	
	return toReturn;
}

infiniTrack._getERROR = function(jsonData){
	////infiniTrack._consoleLog("infiniTrack getERROR");
	
	if (jsonData.TIMESTAMP && jsonData.TIMESTAMP != ""){
		var timestamp_old = jsonData.TIMESTAMP;
		var timestamp_new;
		if ((timestamp_old + "").length !=13) {
			timestamp_new = jsonData.TIMESTAMP;
		}
		else {
		var toDay = new Date(timestamp_old);
		var day = toDay.getDate();
		if (day<10) {
			day = "0"+ day; 	
		}
		var timestamp_new = (("0000" + toDay.getFullYear()).slice(4)) + "-" + (((toDay.getMonth()+1) < 10 ? "0" : "") + (toDay.getMonth()+1)) + "-" + day + "T" + ((toDay.getHours()) + ":"  + ((toDay.getMinutes())) + ":" + (toDay.getSeconds()));
		jsonData.TIMESTAMP = timestamp_new;
		}
	}
	
	if (jsonData.TIME && jsonData.TIME != ""){
		var time_old = jsonData.TIME;
		var time_new;
		if ((time_old + "").length !=13) {
			time_new = jsonData.TIME;
		}
		else {
		var toDay = new Date(time_old);
		var day = toDay.getDate();
		if (day<10) {
			day = "0"+ day; 	
		}
		var time_new = (("0000" + toDay.getFullYear()).slice(4)) + "-" + (((toDay.getMonth()+1) < 10 ? "0" : "") + (toDay.getMonth()+1)) + "-" + day + "T" + ((toDay.getHours()) + ":"  + ((toDay.getMinutes())) + ":" + (toDay.getSeconds()));
		jsonData.TIME = time_new;
		}
	}
	
	var s = infiniTrack._separator;
	
	var toReturn = "";
	
	toReturn = timestamp_new + s +
			jsonData.TYPE + s +
			jsonData.USER_NAME + s +
			jsonData.DEVICE_ID + s +
			jsonData.MODEL + s +
			jsonData.FW_VER + s +
			jsonData.APP_VERSION + s +
			jsonData.BACKEND_ID + s +
			jsonData.CONTENT_ID + s +
			jsonData.CP_ID + s +
			jsonData.CONTENT_TYPE + s +
			jsonData.API + s +
			time_new + s +
			jsonData.ADDITIONAL_DATA + s +
			jsonData.EXCEPTION;
	
	return toReturn;
}

infiniTrack._getPROFILINGTrackTemplate = function(){
	////infiniTrack._consoleLog("infiniTrack _getPROFILING/LOGGING/ERRORTrackTemplate");
	
	return {
		"TIMESTAMP": "",
		"TYPE": "",
		"USER_NAME": "",
		"DEVICE_ID": "",
		"MODEL": "",
		"FW_VER": "",
		"APP_VERSION": "",
		"BACKEND_ID": "",
		"CONTENT_ID": "",
		"CP_ID": "",
		"CONTENT_TYPE": "",
		"API": "",
		"TIME": "",
		"ADDITIONAL_DATA": "",
		"EXCEPTION": ""
	}
}

infiniTrack._getLOGGINGTrackTemplate = infiniTrack._getPROFILINGTrackTemplate;

infiniTrack._getVIDEO_QUALITYTrackTemplate = function(){
	////infiniTrack._consoleLog("infiniTrack _getVIDEO_QUALITYTrackTemplate");
	
	return {
		"TIMESTAMP": "",
		"TYPE": "",
		"USER_NAME": "",
		"DEVICE_ID": "",
		"MODEL": "",
		"FW_VER": "",
		"APP_VERSION": "",
		"BACKEND_ID": "",
		"CONTENT_ID": "",
		"CP_ID": "",
		"CONTENT_TYPE": "",
		"STARTUP_TIME": "",
		"BUFFER_TIME": "",
		"AVERAGE_BITRATE": "",
		"BOOKMARK": "",
		"DELTA_THRESHOLD": "",
		"EXCEPTION": "",
		"STARTUP_CLEINT_IP": "",
		"STARTUP_SERVER_IP": "",
		"STARTUP_AKAMAI_RESP_DATE": "",
		"END_CLEINT_IP": "",
		"END_SERVER_IP": "",
		"END_AKAMAI_RESP_DATE": "",
		"MBPS_SPEED_TEST": "",
		"DNS": ""
	}
}

infiniTrack._getERRORTrackTemplate = infiniTrack._getPROFILINGTrackTemplate;


infiniTagC.idTagCScript1 = "TagCommanderScript1";
infiniTagC.idTagCScript2 = "TagCommanderScript2";

infiniTagC.initTagC = function(jsPosition){
	
	infiniTagC.jsPosition = jsPosition;
	
	window.tc_vars = {
        env_template : '', 
        env_work : '', 
        env_channel : '', 
        env_dnt : '', 
        env_language : '', 
        env_country : '', 
        order_id : '', 
        order_amount_ati_without_sf : '', 
        order_discount_ati : '', 
        order_newcustomer : '', 
        order_email : '', 
        order_amount_tf_without_sf : '', 
        order_discount_tf : '', 
        order_tax : '', 
        order_payment_method : '', 
        order_status : '', 
        order_promo_code : '', 
        order_channel : '', 
        order_plan : '', 
        order_currency : '', 
        order_email_optin : '', 
        user_just_registered : '', 
        user_id : '', 
        user_recency : '', 
        user_frequency : '', 
        user_amount : '', 
        user_postalcode : '', 
        page_type : '', 
        page_error : '', 
        page_name : '', 
        product_id : '', 
        product_unitprice_ati : '', 
        product_discount_ati : '', 
        product_url_page : '', 
        product_name : '', 
        product_category : '', 
        product_unitprice_tf : '', 
        product_discount_tf : '', 
        product_currency : '', 
        product_isbundle : '', 
        product_breadcrumb_id : '', 
        product_breadcrumb_label : ''
    } 
	
	infiniTagC.usedTagsJson = new Object();
	for (elem in infiniTagC.tagsJson){
		if (infiniTagC.tagsJson[elem] && typeof(infiniTagC.tagsJson[elem]) != "function"){
			for (elem2 in infiniTagC.tagsJson[elem]){
				if (infiniTagC.tagsJson[elem][elem2] && typeof(infiniTagC.tagsJson[elem][elem2]) != "function"){
					infiniTagC.usedTagsJson[elem2] = infiniTagC.tagsJson[elem][elem2];
				}
			}
		}
	}
}

infiniTagC.Reinit = function(jsPosition){
	
	$("head").append($("<script type='text/javascript' src='"+window.tc_json+"'></script>"));
	
}

infiniTagC.sendPageTag = function(id, args){
	if (!conf.tagCommanderPanic){
		if (!infiniTagC.usedTagsJson){
			infiniTagC.Reinit(window.tc_3Pos);
			infiniTagC.initTagC(window.tc_3Pos);
		}
		
		var varsToSend = infiniTagC.usedTagsJson[id];
		
		if (varsToSend){
			if (varsToSend.type != "event"){
				window.tc_vars = varsToSend;
				
				args.var_env = conf.environment;
				
				for (elem in varsToSend){
					if (varsToSend[elem] && typeof(varsToSend[elem]) != "function"){
						switch(varsToSend[elem]) {
							case "$$$env$$$":
								varsToSend[elem] = args.var_env ? args.var_env : conf.defaultTagCommanderNotFoundValue;
								break;
							case "$$$user_id$$$":
								varsToSend[elem] = args.var_uId ? args.var_uId : conf.defaultTagCommanderNotFoundValue;
								break;
							case "$$$order_id$$$":
								varsToSend[elem] = args.var_orderId ? args.var_orderId : conf.defaultTagCommanderNotFoundValue;
								break;
							case "$$$order_email$$$":
								varsToSend[elem] = args.var_orderEmail ? args.var_orderEmail : conf.defaultTagCommanderNotFoundValue;
								break;
							case "$$$user_just_registered$$$":
								varsToSend[elem] = args.var_userJustRegistered ? args.var_userJustRegistered : conf.defaultTagCommanderNotFoundValue;
								break;
							case "$$$order_channel$$$":
								varsToSend[elem] = args.var_orderChannel ? args.var_orderChannel : conf.defaultTagCommanderNotFoundValue;
								break;
							case "$$$order_plan$$$":
								varsToSend[elem] = args.var_orderPlan ? args.var_orderPlan : conf.defaultTagCommanderNotFoundValue;
								break;
							case "$$$order_promo_code$$$":
								varsToSend[elem] = args.var_orderPromoCode ? args.var_orderPromoCode : conf.defaultTagCommanderNotFoundValue;
								break;
							case "$$$order_payment_method$$$":
								varsToSend[elem] = args.var_orderPaymentMethod ? args.var_orderPaymentMethod : conf.defaultTagCommanderNotFoundValue;
								break;
							case "$$$channel$$$":
								varsToSend[elem] = args.var_channel ? args.var_channel : conf.defaultTagCommanderNotFoundValue;
								break;
							default:
								
						}
					}
				}
				
				//console.log("Sending Page Tag " + id);
				$("#"+infiniTagC.idTagCScript1).remove();
				$("#"+infiniTagC.idTagCScript2).remove();
				$("head").append($("<script id='"+infiniTagC.idTagCScript1+"' type='text/javascript' src='"+infiniTagC.jsPosition+"'></script>"));
				var pos = ""+infiniTagC.jsPosition;
				pos = pos.replace("_3.js", "_1.js");
				var elem = "<script id='"+infiniTagC.idTagCScript2+"' type='text/javascript' src='"+pos+"'></script>";
				//alert(elem);
				$("body").append($(elem));
			}else{
				//console.log("in " + id + " type mismatch: it should be page and it's event");
			}
		}else{
			//console.log("No " + id + " found in infiniTagC.usedTagsJson");
		}
	}
}

infiniTagC.sendEventTag = function(id, args){
	if (!conf.tagCommanderPanic){
		if (!infiniTagC.usedTagsJson){
			infiniTagC.Reinit(window.tc_3Pos);
			infiniTagC.initTagC(window.tc_3Pos);
		}
		
		var varsToSend = infiniTagC.usedTagsJson[id];
		if (varsToSend){
			if (varsToSend.type == "event"){
				var args2 = new Array();
				for (elem in varsToSend.args){
					if (varsToSend.args && varsToSend.args[elem] && typeof(varsToSend.args[elem]) != "function"){
						var item = varsToSend.args[elem];
						var itemToSend = item;
						if (typeof(item) == "object"){
							itemToSend = new Object();
							for (elem2 in item){
								if (item && item[elem2] && typeof(item[elem2]) != "function"){
									itemToSend[elem2] = item[elem2];
								}
							}
						}
						args2.push(itemToSend);
					}
				}
				
				for (elem in args2[1]){
					if (args2[1][elem] && typeof(args2[1][elem]) != "function"){
						switch(args2[1][elem]) {
							case "$$$app_store$$$":
								args2[1][elem] = args.var_type ? args.var_type : conf.defaultTagCommanderNotFoundValue;
								break;
							default:
						}
					}
				}
				
				//console.log("Sending Event Tag " + id + " with args " + args2[0] + ", " + JSON.stringify(args2[1]));
				
				tc_events_1(this,args2[0],args2[1]);
			}else{
				//console.log("in " + id + " type mismatch: it should be event and it's page");
			}
		}else{
			//console.log("No " + id + " found in infiniTagC.usedTagsJson");
		}
	}
}







