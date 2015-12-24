var interactive123cf_loaded=1;
var allow_submit=1;
var submitted=false;
var alert_popped=false;
var preview_ifame=false;
var may_scroll=true;
var main_ios_ver=0;
window.process_debug=-1;
window.lastactiontime=0;
var user_agent = navigator.userAgent;
window.calculations_timeout=null;
window.fields_timeout=null;
window.interactive123cf_loaded=1;
window.stopCalculate=false;
window.typingTimer=0;
function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
}

if (typeof iOSversion() !== 'undefined')  {
	var ios_ver=iOSversion();
	main_ios_ver=ios_ver[0];
	if (main_ios_ver>0) if (main_ios_ver<5) may_scroll=	false;
}
if (may_scroll) {
	if ((ie_version>0) && (ie_version<=8))  { may_scroll=false; }
	}

window.may_scroll=may_scroll;

$(function (){
	$('.autotab123').keyup(function(e) {
		var $this = $(this);

		if (($this.val().length == $this.attr('maxlength')) && (e.keyCode != 37) && (e.keyCode != 38) && (e.keyCode != 39) && (e.keyCode != 40)&& (e.keyCode != 8) && (e.keyCode != 9) && (e.keyCode != 13) && (e.keyCode != 16) && (e.keyCode != 17) && (e.keyCode != 18) && (e.keyCode != 19) && (e.keyCode != 20) && (e.keyCode != 27) && (e.keyCode != 33) && (e.keyCode != 34) && (e.keyCode != 35) && (e.keyCode != 36) && (e.keyCode != 37) && (e.keyCode != 38) && (e.keyCode != 39) && (e.keyCode != 40) && (e.keyCode != 45) && (e.keyCode != 46) && (e.keyCode != 91) && (e.keyCode != 92) && (e.keyCode != 93) && (e.keyCode != 110) && (e.keyCode != 112) && (e.keyCode != 113) && (e.keyCode != 114) && (e.keyCode != 115) && (e.keyCode != 116) && (e.keyCode != 117) && (e.keyCode != 118) && (e.keyCode != 119) && (e.keyCode != 120) && (e.keyCode != 121) && (e.keyCode != 122) && (e.keyCode != 123) && (e.keyCode != 144) && (e.keyCode != 145) && (e.keyCode != 186) && (e.keyCode != 187) && (e.keyCode != 188) && (e.keyCode != 189) && (e.keyCode != 190) && (e.keyCode != 191) && (e.keyCode != 192) && (e.keyCode != 219) && (e.keyCode != 220) && (e.keyCode != 221) && (e.keyCode != 222) ) {
			$(this).parent().next('span').next('span').find('.autotab123').focus();
		}else{
			return;
		}

	});

});

function msieversion() {
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
if (msie > 0)      // If Internet Explorer, return version number
	return (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
	else                 // If another browser, return 0
	  return 0;
}

window.ie_version=parseInt(msieversion());
window.is_android = ((user_agent.indexOf('Mozilla') >-1 && user_agent.indexOf('Android ')>-1 && user_agent.indexOf('AppleWebKit')>-1) && !(user_agent.indexOf('Chrome')>-1));
var ie_version=window.ie_version;
var is_andorid=window.is_android;

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


function checkSubmitAllowed()
{
// if we're not on the last page, we definetely can hit the submit button (probably Next)
if (document.getElementById('activepage')!=null && document.getElementById('totalpages')!=null)
	if (document.getElementById('activepage').value < document.getElementById('totalpages').value) return true;
// function to be further developed
if (allow_submit==1) return true;
else return false;
}

String.prototype.endsWith = function(str)
{return (this.match(str+"$")==str)}

function replaceAll(txt, repl, with_this) {
  return txt.replace(new RegExp(repl, 'g'),with_this);
}

function RefreshFrameHeight(jumptotop) {
	if (document.getElementById('thisisjsform')!=null)
	if (parent.socket != null) {
		// jQuery_height = 1;
		// if (typeof($) == "function")
			// jQuery_height = $(document).height();
		var  newframeheight = Math.max(document.body.clientHeight,document.body.offsetHeight,document.body.scrollHeight);

		// BTV, fix for huge height on these 2 browsers. Might need to use this trick only for form 604374
		var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
		if (is_chrome || is_safari)
			newframeheight=document.body.offsetHeight;

		if (typeof frameHeightAdditionalSpace != 'undefined') // BTV
			{
			newframeheight = newframeheight + frameHeightAdditionalSpace;
			}
		// if (typeof second_refresh != "undefined" && second_refresh)
			// document.body.style.height = newframeheight + 'px';
		var mymsg= newframeheight+ "||"+ jumptotop;
		parent.socket.postMessage(mymsg);
		// alert(mymsg);
		}
	if (typeof(Wix) !== 'undefined') {
		/*
		var offset=25; // because on Wix we often show the box, so we need more space
		var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
		if (is_chrome!=-1) {
			var newheight=offset+Math.max(document.body.clientHeight,document.body.offsetHeight,document.body.scrollHeight);
			}
		else
			var newheight=offset+30+Math.max(document.body.clientHeight,document.body.offsetHeight,document.body.scrollHeight);
		*/

		// var newheight=15+Math.max(document.body.clientHeight,document.body.offsetHeight,document.body.scrollHeight);
		 var newheight = 35+ document.body.offsetHeight; //MNG
		 if (typeof frameHeightAdditionalSpace != 'undefined') // BTV
			{
			newheight = newheight + frameHeightAdditionalSpace;
			}
		//BTV: this is the deprecated way
		// Wix.reportHeightChange(newheight);
		Wix.setHeight(newheight);
		}
	}

function disableForm(formid,list_cid) {
		if (document.all || document.getElementById) {
			var theform=document.getElementById(formid);
			for (i = 0; i < theform.length; i++) {
			var formElement = theform.elements[i];
				if (true) {
					formElement.disabled = true;
				}
			}
			if((list_cid!="")&&(list_cid != null))
					{var array_list=list_cid.split("||");
						//enable this elements:
						for(var i=0;i<=array_list.length;i++)
						if(document.getElementById(array_list[i]))
							{
							document.getElementById(array_list[i]).disabled = false;//email
							}
					}
		}
	}

function readOnlyForm(formid,list_cid) {

	$('.fileinput-button,.upload-dropzone, .fileupload-remove a, .fileattached a').prop("disabled",true).off("click").prop("onClick", false).addClass("no-pointer-events");

	if (document.all || document.getElementById) {
		var theform=document.getElementById(formid);
		for (i = 0; i < theform.length; i++) {
			var formElement = theform.elements[i];
			if (true && ['hidden','button','submit','file'].indexOf(formElement.type)==-1) {
				if (formElement.type=='radio' || formElement.type=='checkbox') { //special case: radio buttons and checkboxes cannot be set readOnly
					if (formElement.checked==false) {
						formElement.disabled=true;
					}
				} else if (formElement.type=='select-one') { //special case: dropdowns cannot be set readOnly
					for (j = 0; j < formElement.length; j++) {
						var formOption = formElement.options[j];
						if (formOption.selected==false) {
							formOption.disabled=true;
						}
					}
				} else if (formElement.id!="id123-captcha"){
					formElement.readOnly = true;
				}
				if (formElement.id!="id123-captcha") {
					formElement.style.backgroundColor='#EEE';
					formElement.style.border='1px solid #CCC';
		                    	$('.searchable').removeClass('searchable');
		                    	$('.xbtn_top').addClass('xbtnp');
				}
			}
		}
		if((list_cid!="")&&(list_cid != null)) {
			var array_list=list_cid.split("||");
			//enable this elements:
			for(var i=0;i<=array_list.length;i++)
			if(document.getElementById(array_list[i]))
				{
				document.getElementById(array_list[i]).readOnly = false;//email
				}
		}
	}
}

function setFocusOnFirstTextField(optionalFid, optionalCid){
 optionalFid = (typeof optionalFid == "undefined")?'0':optionalFid;
 optionalCid = (typeof optionalCid == "undefined")?'0':optionalCid;
 if ((optionalFid!=0)&&(optionalCid!=0)) {
	elem=document.getElementById('id123-control'+optionalCid);
	if (typeof elem=="undefined") elem=document.getElementById('id123-control'+optionalCid+'_0');
	if (typeof elem!="undefined") {
		elem.focus();
		return;
		}
	}

 for(z=0;z<document.forms.length;z++){
  var form = document.forms[z];
  var elements = form.elements;
  for (var i=0;i<elements.length;i++){
    var element = elements[i];
    if((element.type == 'text' || element.type == 'textarea' || element.type == 'checkbox' || element.type == 'radio') &&
      !element.readOnly &&
      !element.disabled){
	  id_fild = element.id;
	  var ele = id_fild.replace(/\D/g, "");
	  var c_id_ele = ele.replace(123, '');
	var info_label = document.getElementById('id123-titlemic'+c_id_ele);
	//info_label.style.display ='block';
	$(info_label).removeClass('hidden_instruction');
	$(info_label).addClass('class123-noprint');
	  if (element.value==''){
			element.focus();
		}
	  return;
    }
  }
 }
}
//FCO
/**
*
**/
function OneRule(j)
{
	//console.log ( 'OneRule = formrules['+j+']' );
	//console.log ( formrules[j] );

	var condtrue=0;
	if(formrules[j][0].match('language'))
	{
		action=''; notaction='none';
		if (formrules[j][3]=='1') { action='none'; notaction=''; }

		var lang = formrules[j][0];
		language = lang.match(/-(.*?)_/);
		var languageSelected = $('.langselector select').val();

		switch (formrules[j][1])
		{
			case "1":
				if(languageSelected == language[1]) condtrue=1;

				break;
			case "2":
				if(languageSelected != language[1]) condtrue=1;
				break;
		}

    }
	else
	{

		var leftm='id123-control'+formrules[j][0];
            action=''; notaction='none';
            if (formrules[j][3]=='1') { action='none'; notaction=''; }
            var rightm=formrules[j][2].toLowerCase();
            //alert('obj:'+leftm);
            //alert(document.getElementById(leftm).tagName);
            // verificare validitate regula
            isadvancedfield=0;
            if (document.getElementById(leftm)==null)
            {
                //daca nu gaseste asa, poate e un field advanced ce are - in loc de _
                var pos_=formrules[j][0].indexOf('_');
                if (pos_>0)
                {
                    var firstgroup=formrules[j][0].substr(0,pos_);
                    var secondgroup=formrules[j][0].substr(pos_+1,formrules[j][0].length-pos_);
                    leftm='id123-control'+firstgroup+'-'+secondgroup;
                    if (document.getElementById(leftm)==null) return 2;//continue;
                }
                else
                {
                    //daca nu gaseste, poate e un field advanced de tipul time sau date, ce nu are _, dar pe form componentele sunt cu _
                    //alert('spec');
                    if (document.getElementById(leftm+'-1')==null) return 2;//continue;
                    else isadvancedfield=1;

                }
                pos_=undefined; //MNG:optimize
            }
            if (isadvancedfield==0)
            {
                var leftmval=document.getElementById(leftm).value.toLowerCase();
                var leftm_parent=document.getElementById(leftm).parentNode.parentNode;
            }
            else
            {
                //e adv field care trebuie concatenat
                leftmval='';
                var leftm_parent=document.getElementById(leftm+'-1').parentNode.parentNode;
                for(i=1;i<4;i++) //nu are mai mult de 4
                    if (document.getElementById(leftm+'-'+i)!=null)
                        leftmval+=document.getElementById(leftm+'-'+i).value.toLowerCase();
                    else break;
            }

            switch (formrules[j][1])
            {
                case "1":
                    if (leftm.indexOf('_')>0) {
                        if (document.getElementById(leftm).checked==true) condtrue=1;
                    }
                    else{
			if (leftmval==rightm || ((parseFloat(leftmval) == parseFloat(rightm))&& (isNaN(leftmval) == false && isNaN(rightm)==false)))
		    		condtrue=1;

			}
                    break;
                case "2":
                    if (leftm.indexOf('_')>0) {
                        if (document.getElementById(leftm).checked!=true) condtrue=1;
                    }
                    else
                    if (leftmval!=rightm) condtrue=1;
                    break;
                case "3":
                    pos=leftmval.indexOf(rightm);
                    if (pos>=0) condtrue=1;
                    break;
                case "4":
                    pos=leftmval.indexOf(rightm);
                    if (!(pos>=0)) condtrue=1;
                    break;
                case "5":
                    pos=leftmval.indexOf(rightm);
                    if (pos==0) condtrue=1;
                    break;
                case "6":
                    if (leftmval.endsWith(rightm)) condtrue=1;
                    break;
                case "7": //Greater than //MNG rules
                    if(leftmval == '')
                        break;
                          if(parseFloat(leftmval.replace(new RegExp(",",'g'),'.')) > parseFloat(rightm.replace(new RegExp(",",'g'),'.'))) condtrue = 1;

                    if(typeof(js_cobject_arr) == 'undefined') //prevent js error not defined
                    {
                        break;
                    }
                    else
                    if(js_cobject_arr["cid"+formrules[j][0]] != null)
                        if((js_cobject_arr["cid"+formrules[j][0]] == 4)||(js_cobject_arr["cid"+formrules[j][0]] == 5)) //Special validation for date MM/DD/YYYY or DD/MM/YYYY
                        {
							//zack - format is DD/MM/YYYY need to switch day with month
							condtrue = compareDate ( leftmval, rightm, formrules[j][1], js_cobject_arr["cid"+formrules[j][0]] );
						}

                    break;
                case "8": //Less than
                    if(leftmval == '')
                        break;
                    if(parseFloat(leftmval.replace(new RegExp(",",'g'),'.')) < parseFloat(rightm.replace(new RegExp(",",'g'),'.'))) condtrue = 1;

                    if(typeof(js_cobject_arr) == 'undefined')//prevent js error not defined
                    {
                        break;
                    }
                    else
                    if(js_cobject_arr["cid"+formrules[j][0]] != null)
                        if((js_cobject_arr["cid"+formrules[j][0]] == 4)||(js_cobject_arr["cid"+formrules[j][0]] == 5)) //Special validation for date MM/DD/YYYY or DD/MM/YYYY
                        {
							//zack - format is DD/MM/YYYY need to switch day with month
							condtrue = compareDate ( leftmval, rightm, formrules[j][1], js_cobject_arr["cid"+formrules[j][0]] );
                        }

                   break;

            }
        }


		//MNG:NEW VERSION ----------------------------------------------
		var mycontrolid="";
		var mycontrolidsplit="";
		var mytitleid="";
		var myformrules_arr=formrules[j][4].split("||");
		for(var ii=0;ii<myformrules_arr.length;ii++)
			{
			if (stopCalculateNow()) { return ; }
			var myformrule=myformrules_arr[ii];
			if(myformrule!="id123-button-send" && myformrule!="id123-button-calc" && !myformrule.match('id123-goNextPage-'))
				{
				mycontrolid +="id123-control"+myformrule+"||";
				if(myformrule.indexOf("_")!= -1)
					mycontrolidsplit= mycontrolid.split("_");
				else
					{
					mycontrolidsplit=new Array();
					mycontrolidsplit[0]="id123-control"+myformrule;
					}
				if(typeof(myformrule) !== 'undefined')
					// if(myformrule.indexOf('undefined')!= -1)
						controlidunic +=  mycontrolidsplit[0]+"||";

				titleidsplit=myformrule.split("_");
				mytitleid += "id123-title"+titleidsplit[0]+"||";

				}
			else   // pt submit
				{
				mycontrolid+=myformrule+"||";
				controlidsplit += myformrule+"||";
				titleid += myformrule+" ";
				}
			mycontrolidsplit=undefined;//MNG:optimize
			myformrule=undefined;
			}//endoffor

			controlid=mycontrolid;

			titleid=mytitleid;

			ii=undefined;//MNG:optimize
			mycontrolid=undefined;
		//------------------------------------end of new version
return condtrue;
}
	var controlid;
	var titleid;
	var controlidunic="";
	var controlidsplit;
	var condtrue;
	var action=''; var notaction='none';

// search for field leftm in the hidden fields list, force 0 or 1, or else use the default result
function ForceResultIfLeftMemberHidden(defaultresult, leftm, thenewhiddenvalues)
{
var result=defaultresult;

var pos_=leftm.indexOf('_');
if (pos_>0)
	{
	var fieldid=leftm.substr(0,pos_);
	}
else {
	var fieldid=leftm;
	}
// alert('Caut '+fieldid+' ___in____'+thenewhiddenvalues);
if (thenewhiddenvalues.search('id123-control'+fieldid) != -1) result=0;

return result;
}

function disable_form_bottom_buttons() {


	if (typeof(formrules)!="undefined")
		if (formrules.length<80) return;

	var controls=$('.navigationButtons, .thebuttons').find('input[type="button"],input[type="submit"]').not('.control-locked');
	if (controls.length>0) {
		controls.addClass('control-locked');
	}
}

function enable_form_bottom_buttons() {

	if (typeof(formrules)!="undefined")
		if (formrules.length<80) return;

	var controls=$('.control-locked');
	if (controls.length>0) {
		controls.removeClass('control-locked');
	}
}

function InputRules2(inputfieldid,nr_rules,delaytime_fix)
{

 if((nr_rules == undefined )||(nr_rules ==null))
	nr_rules=0;
	// var delaytime=(inputfieldid=="firsttime") && (nr_fields>30)?1:(nr_fields*100);
	var delaytime=(inputfieldid=="firsttime")|| ((this.nr_fields<50) && (nr_rules<30))?0:(nr_rules+((nr_rules+1)/100)*(nr_rules>50?25:120));
	if(delaytime > 1500 && delaytime_fix == 0)
		delaytime = 1500;
	if(delaytime_fix != 0 && delaytime_fix != undefined)
		delaytime = delaytime_fix;
	disable_form_bottom_buttons();
	clearTimeout(window.typingTimer);
	window.typingTimer = setTimeout(function(){window.stopCalculate=false;InputRules(inputfieldid);enable_form_bottom_buttons();}, delaytime);
}
function InputRules(inputfieldid)
{
controlidunic="";

    //formrule array:
	//0
	//1
	//2
	//3
	//4
	//5 : type of rule (3=autoresponder ... )
	//6 : unique ID of the rule
	//7 : Id of the parent rule, if any
	//8 : operator: && || for complex rules , blank for simple rules
	//9 : leftparan
  // 10 : rightparan
   	if (inputfieldid!="calculation")
 	 	formsavetime();

	var thenewhiddenvalues=document.getElementById('hiddenfields').value;
	if( typeof( formrules ) == 'undefined' ) { return 0; }

	var mustApplyAllRules=isNaN(inputfieldid) ? 1:0;
	// alert('inputrules begin:'+inputfieldid+'___'+mustApplyAllRules);

	var reguli_de_aplicat='';
	if (!isNaN(inputfieldid) && typeof(formrules_left)!='undefined')
		{
		if (formrules_left['cid'+inputfieldid] == undefined) return 0;
		else reguli_de_aplicat=formrules_left['cid'+inputfieldid];
		}
	if (reguli_de_aplicat=='' && mustApplyAllRules==0) { return 0; }


//	if (inputfieldid=="beginning") { return 0; }// FCO se apeleaza aiurea scriptul la final de onclick
	var rulescnt=formrules.length;
    var formrules_applied=new Array(rulescnt);
	var sameparentrules="";


	for (var x=0;x<rulescnt;x++)
		formrules_applied[x]=0;

	var autoresponders_id='';
	//zack - count rules for autoresponder, all, false and true
	var total_rules_type3_cond0 = 0;
	var total_rules_type3_cond1 = 0;
	var total_rules_type3 = 0;

	//console.clear();

	for (var j=0;j<rulescnt;j++)
	{
		if (formrules_applied[j]==1) continue;
		if (mustApplyAllRules==0 && formrules[j][7]==0 && reguli_de_aplicat.indexOf(formrules[j][6])==-1) continue;
		if (mustApplyAllRules==0 && formrules[j][7]!=0 && reguli_de_aplicat.indexOf(formrules[j][7])==-1) continue;
		// console.log(reguli_de_aplicat+'avem de aplicat regula '+formrules[j][6]+ ' din cauza fieldului '+inputfieldid);
		if (stopCalculateNow()) { window.stopCalculate=false; return false; }
		//FCO MOVED TO ONERULE
		condtrue=OneRule(j);

		if (0==1) // feature not ready for public yet
			condtrue=ForceResultIfLeftMemberHidden(condtrue, formrules[j][0], thenewhiddenvalues);

		var finalcondtrue=formrules[j][9]+condtrue+formrules[j][10]; //condition result + paranteze
		for (related=(j+1);related<rulescnt;related++)
		{
			if (stopCalculateNow()) { window.stopCalculate=false; return false; }
			if (formrules[related][7]==formrules[j][6]) //if it's a related condition
			{
				formrules_applied[related]=1;
				condtrue=OneRule(related);

				if (0==1) // feature not ready for public yet
					condtrue=ForceResultIfLeftMemberHidden(condtrue, formrules[related][0], thenewhiddenvalues);

				finalcondtrue+=formrules[related][8]+formrules[related][9]+condtrue+formrules[related][10];
			}
		}

		condtrue=eval(finalcondtrue);
		finalcondtrue=null;
		//delete finalcondtrue;

		if (formrules[j][5]=="3") // notification rule - autoresponders
		{

			total_rules_type3++;
			if (condtrue==1)
			{
				//zack - count all rules that are TRUE
				total_rules_type3_cond1++;
				autoresponders_id=formrules[j][4];
				if ( document.getElementById('special_autoresponder') != null )
					document.getElementById('special_autoresponder').value = formrules[j][4];

				if (document.getElementById('multiple_autoresponder') !=null) {
					var multipleautoresponder=document.getElementById('multiple_autoresponder').value;
					var current_autoresponder='-'+formrules[j][4]+'-';
					// add to Multiple Autoresponder list, only if not already there
					if (multipleautoresponder.indexOf(current_autoresponder)== -1) {
						multipleautoresponder+=current_autoresponder;
						document.getElementById('multiple_autoresponder').value=multipleautoresponder;
						}
						current_autoresponder=null;
						//delete current_autoresponder;
					}

			}
			else
			{
				//zack - count all rules that are FALSE
				total_rules_type3_cond0++;

				//console.log ('rulescnt='+rulescnt );
				//console.log ('total_rules_type3='+total_rules_type3 );
				//console.log ('total_rules_type3_cond0='+total_rules_type3_cond0 );
				//console.log ('total_rules_type3_cond1='+total_rules_type3_cond1 );

				//zack - when all rules are FALSE and none are TRUE, just reset autoresponder to default value stored into hidden field
				if ( total_rules_type3>0 && total_rules_type3_cond0>0 && total_rules_type3 == total_rules_type3_cond0 )
				{
					if (document.getElementById('special_autoresponder') != null )
						document.getElementById('special_autoresponder').value= (document.getElementById('f_autoresponder') != null)?document.getElementById('f_autoresponder').value:'';
				}

				// delete from Multiple Autoresponder list
				if (document.getElementById('multiple_autoresponder') != null)
				{
					var multipleautoresponder=document.getElementById('multiple_autoresponder').value;
					document.getElementById('multiple_autoresponder').value=replaceAll(multipleautoresponder, '-'+formrules[j][4].toString()+'-', '');
				}
			}

			multipleautoresponder=undefined;//MNG:optimize
			//delete multipleautoresponder;
			continue;
		}

		// now hide or show the parent TR(s)
	    var my_aux_var;

		if (condtrue==1)  // apply ACTION
		{
		   var my_string_arr=new Array();
		   if(controlid != null)
			my_string_arr=controlid.split("||");
		   for(var ii=0;ii< my_string_arr.length;ii++)
				{
				if (stopCalculateNow()) { window.stopCalculate=false; return false; }
				mycontrolid=my_string_arr[ii];
				if(mycontrolid == "")
					continue;
				// show or hide control
				if(mycontrolid != "id123-button-send" && mycontrolid != "id123-button-calc" && !mycontrolid.match('id123-goNextPage-'))
					{
					var tr=document.getElementById(mycontrolid);

				if  ((tr!=null) && (tr.type!="hidden")  &&  (tr.type!="radio"))  {
					if (!hasClass( tr, 'extradiv' )) {tr.parentNode.parentNode.parentNode.style.display=action; }
												else {	tr.parentNode.parentNode.parentNode.parentNode.style.display=action; } //daca un element are clasa extradiv atunci el mai e inclus intr-un extra div
					}
					// show or hide label
					var mytitleid=titleid.split("||");
					for(var jj=0;jj<mytitleid.length;jj++)
						{
						if (stopCalculateNow()) { window.stopCalculate=false; return; }
						var tr=document.getElementById(mytitleid[jj]);
						if (tr!=null) tr.parentNode.parentNode.parentNode.style.display=action;

						if (inputfieldid>0)  {
							var canvas_item_cid=mycontrolid.replace("id123-control","");
							var canvas_item=$("#id123-control-"+canvas_item_cid);

						if (canvas_item.length>0)  if (canvas_item.get(0).tagName=="CANVAS") {

							if (digital_sign_cids.length>0) {

								for (var sign_index=0;sign_index<digital_sign_cids.length;sign_index++) {
									var sign=digital_sign_cids[sign_index];
										if (sign==canvas_item_cid) {
											 eval('if ($("#id123-control'+sign+'").val()=="") window.sign'+sign+'= new signature(\'id123-control-'+sign+'\');');
										}
									}
							}
						}
						}
						//MNG aici : vezi ca parentNode x 3 =>null in cazul checkbox-ului
						var onlycontrolid=mytitleid[jj].substring(mytitleid[jj].indexOf("id123-title")+11);//iau doar numarul din id-ul controlului
						if(js_ctype_arr["cid"+onlycontrolid] == 2) //checkbox : MNG: Fix checkbox label show cand avem label top align
							{
							 tr.parentNode.parentNode.style.display=action;
							 if(tr.parentNode.parentNode.id != null)
									{
									var auxid=tr.parentNode.parentNode.id;
									//console.log(" auxid=" + auxid);
									if(auxid.indexOf('row')!=  -1)
										{
										auxid=auxid.replace("row","rowsec");
										if(document.getElementById(auxid) != null)
											document.getElementById(auxid).style.display=action;
										}
									}
							}
						}
					// show or hide separator
					var mycontrolidunic_arr=new Array();
					if((controlidunic != "")&&(controlidunic !=null))
						mycontrolidunic_arr=controlidunic.split("||");

					for(var kk=0;kk<mycontrolidunic_arr.length;kk++)
						{
						var mycontrolidunic_arr_item=mycontrolidunic_arr[kk];
						if (stopCalculateNow()) { window.stopCalculate=false; return false; }
						var trsep=document.getElementById('separator-'+mycontrolidunic_arr_item);
						if (trsep!=null) trsep.style.display=action;
						}
					kk=undefined;//MNG:optimize
					jj=undefined;
					mycontrolidunic_arr=undefined;
					mycontrolidunic_arr_item=undefined;
					tr=undefined;
					delete tr,jj,kk,mycontrolidunic_arr,mycontrolidunic_arr_item;


						if(mycontrolid.indexOf("_") != -1)
							{
							mycontrolid_arr=mycontrolid.split("_");
							my_aux_var=mycontrolid_arr[0];
							}
						else
							my_aux_var=mycontrolid;
						thenewhiddenvalues=thenewhiddenvalues.replace(new RegExp(my_aux_var+";","g"),'') ;
						if (action=='none') {thenewhiddenvalues=thenewhiddenvalues+my_aux_var+';';}
					}
				else {
		                        if(!mycontrolid.match('id123-goNextPage-')) {
		                            if(document.getElementById(mycontrolid)!=null)
		                            {
		                                document.getElementById(mycontrolid).style.display=action;
		                            }
		                        } else {
		                            if($('.currentPageActive #goNextPage').length > 0)
		                            {
		                                var pageNumber = mycontrolid.match(/\d+$/)[0];
		                                pageNumber = parseFloat(pageNumber, 10) + parseFloat(1, 10);

		                                if(document.getElementById('goNextPage').getAttribute('data-curentpage') == pageNumber) {
		                                    $('.currentPageActive #goNextPage').css('display', action);
		                                }
		                            }
		                        }
		                    }

                    if (mycontrolid=='id123-button-send' && action=='none') { allow_submit=0; /* alert('disallow1'); */ }
                    else if (mycontrolid=='id123-button-send' && action=='') allow_submit=1;
                    if(mycontrolid == "id123-button-send")
                        {
                        allow_submit=1;
                        }
                    if(document.getElementById('id123-button-showsummary')!= null)
                        if(mycontrolid == "id123-button-send")
                            {
                            document.getElementById('id123-button-send').style.display="none";
                            allow_submit=1;
                            }
				}//endfor
		}
	    else // apply NOTACTION
			{
			var my_string_arr=new Array();
			if(controlid != null)
				my_string_arr=controlid.split("||");
			for(var ii=0;ii< my_string_arr.length;ii++)
				{
				var mycontrolid=my_string_arr[ii];
				if(mycontrolid == "")
					continue;
				// show or hide control
				var mytitleid=titleid.split("||");
				for(var jj=0;jj<mytitleid.length;jj++)
					{
					var tr=document.getElementById(mytitleid[jj]);
					if (stopCalculateNow()) { window.stopCalculate=false; return false; }
					if (tr!=null) tr.parentNode.parentNode.parentNode.style.display=notaction;
					//MNG:  fix pentru checkbox
					var onlycontrolid=mytitleid[jj].substring(mytitleid[jj].indexOf("id123-title")+11);//iau doar numarul din id-ul controlului
					if(js_cobject_arr != undefined)
						if(js_ctype_arr["cid"+onlycontrolid]!= undefined)
						if(js_ctype_arr["cid"+onlycontrolid] == 2) //checkbox
							{
							if (tr!=null)
								{
								tr.parentNode.parentNode.style.display=notaction;
								//Caz special pentru label top
								if(tr.parentNode.parentNode.id != null)
									{
									var auxid=tr.parentNode.parentNode.id;
									if(auxid.indexOf('row')!=  -1)
										{
										auxid=auxid.replace("row","rowsec");
										if(document.getElementById(auxid) != null)
											document.getElementById(auxid).style.display=notaction;
										}
									}

								//endof caz special pentru label top
								}
							}
					//endof mng fix pentru checkbox
					}
				var my_controlidunit_arr=new Array();
				if((controlidunic != "")&&(controlidunic !=null)&&(typeof(controlidunic)!='undefined'))
					my_controlidunit_arr=controlidunic.split("||");
				for(var jj=0;jj<my_controlidunit_arr.length;jj++)
					{
					if (stopCalculateNow()) { window.stopCalculate=false; return false; }
					var mycontrolidunic_arr_item=my_controlidunit_arr[jj];
					if(mycontrolidunic_arr_item == "")
						continue;
					var trsep=document.getElementById('separator-'+mycontrolidunic_arr_item);
					if (trsep!=null) trsep.style.display=notaction;
					}


					if(mycontrolid.indexOf("_")!= -1)
							{
							mycontrolid_arr=mycontrolid.split("_");
							my_aux_var=mycontrolid_arr[0];
							}
						else
							my_aux_var=mycontrolid;

					thenewhiddenvalues=thenewhiddenvalues.replace(new RegExp(my_aux_var+";",'g'),'') ;
					if (notaction=='none') {thenewhiddenvalues=thenewhiddenvalues+my_aux_var+";";}


				if (mycontrolid=='id123-button-send' && notaction=='none') { allow_submit=0;  /*alert('disallow2');*/  }
				else if (mycontrolid=='id123-button-send' && notaction=='') allow_submit=1;

				if(mycontrolid == "id123-button-send")
					{
					if(document.getElementById(mycontrolid)!= null)
						document.getElementById(mycontrolid).parentNode.parentNode.parentNode.style.display="";
					if(document.getElementById(mycontrolid) != null)
						document.getElementById(mycontrolid).style.display=notaction;
					allow_submit=1;
					}
		                if(mycontrolid == "id123-button-calc") {
		                    if(document.getElementById(mycontrolid) != null)
		                        document.getElementById(mycontrolid).style.display=notaction;
		                }


		                if(mycontrolid.match('id123-goNextPage-')) {
		                    var pageNumber = mycontrolid.match(/\d+$/)[0];
		                    pageNumber = parseFloat(pageNumber, 10) + parseFloat(1, 10);

		                    if(document.getElementById('goNextPage').getAttribute('data-curentpage') == pageNumber) {
		                        if($('.currentPageActive #goNextPage').length > 0) {
		                            $('.currentPageActive #goNextPage').css('display', notaction);
		                        }
		                    }
		                }
				if(document.getElementById('id123-button-showsummary')!= null)
						{
						if(document.getElementById('id123-button-send')!=null)
							document.getElementById('id123-button-send').style.display="none";
						allow_submit=1;
						}
				}//endof for
			}
	my_string_arr=undefined;//MNG:optimize
	my_controlidunit_arr=undefined;
	mycontrolid=undefined;
	//delete my_string_arr,my_controlidunit_arr,mycontrolid;
	}


	document.getElementById('hiddenfields').value=thenewhiddenvalues;
	RefreshFrameHeight(0);
}

function InputSetDefaultValue(elemid, defval, action, inputcolor_default, inputcolor_gray)
	{
	elem=document.getElementById(elemid);
	if (elem==null) return;
	var aux_elem_val = elem.value;
	var replace_aux_elem_val = elem.value.replace(/\n/g,'').replace(/\r\n/g,'').replace(/\"/g,'"').replace(/&quot;/g,'"');
	if ((action=='focus')&&(elem.value==defval || replace_aux_elem_val == defval)) {
		elem.value='';
		}
	if ((action=='blur')&&(elem.value=='')) {
		elem.value=defval;
		}
	if (elem.value==defval || replace_aux_elem_val == defval.replace(/&quot;/g,'"'))
		elem.style.color=inputcolor_gray;
	else elem.style.color=inputcolor_default;
	}

$.bixNamespace = {};
$.bixNamespace.alert = false;
$(document).ready(function(){
	$('[id^=maxaccepted_]').parent().find('input:checkbox').each(function() {
		$(this).data('onchangeFunction', this.onchange);
		$(this).attr('onchange', '')
	});

	$('[id^=maxaccepted_]').parent().find('input:checkbox').on('change', function(event){
		var elem = $(this);
		setTimeout(function() {
			if (!$.bixNamespace.alert)
				elem.data('onchangeFunction').call(this,event || window.event);
			else {
				$.bixNamespace.alert = false;
				if (elem.is(':checked'))
					elem.prop('checked', false);
				alert($('#maxaccepted_message').html());
			}
		}, 100);
	});

	$('[id^=maxaccepted_]').parent().find('input:checkbox').on('click', function(event){
		var maxaccepted = $(this).closest('[id^=fieldcontainer]').find('[id^=maxaccepted_]').html();
		var arechecked = $(this).closest('[id^=fieldcontainer]').find('input:checked').length;

		if (arechecked > maxaccepted) {
			$.bixNamespace.alert = true;
			$(this).trigger('change');
			return false;
		}
	});
    // Alen -> if checkbox has other value.
    $('[id^=maxaccepted_]').parent().find('input:text').on('change', function(event){
        var maxaccepted = $(this).closest('.fieldcontainer').find('[id^=maxaccepted_]').html();
        var arechecked = $(this).closest('.fieldcontainer').find('input:checked').length;
        var last_checkbox = $(this).closest('.fieldcontainer').find(':checkbox').last();
        if (arechecked > maxaccepted) {
            var checked = $(this).closest('.fieldcontainer').find('input:checked');
            alert($('#maxaccepted_message').html());
            $(this).val('');
            $(last_checkbox).attr('checked', false);
            return false;
        }
    });
	prepare_send_for_input();
});
// function verify_checkbox(thisfield,parentfieldid,maxoptions, maxaccepted,text)
// {
// arechecked=0;
// id=thisfield.id;
// thisfieldid_array =id.split('_');
// thisfieldindex=thisfieldid_array[1];

// for (i=0;i<maxoptions;i++)
	// {
	// // if (document.getElementById('id123-control'+parentfieldid+'_'+i)!=undefined)
		// // if ((document.getElementById('id123-control'+parentfieldid+'_'+i).checked==true) && (i!=thisfieldindex)) arechecked++;
		// if ($('#id123-control'+parentfieldid+'_'+i).length && $('#id123-control'+parentfieldid+'_'+i).is(':checked') && i!=thisfieldindex)
				// arechecked++;
	// }
// if (arechecked>=maxaccepted)
	// {
		// //document.getElementById('id123-control'+parentfieldid+'_'+thisfieldindex).checked=false;
		// //IB: poate merge sa faca si trigger si change (fara sa pop-uie de 2 ori alertu) insa pe moment nu gasesc alta solutie
		// // needed for IE 8 compatibility
			// //$('#id123-control'+parentfieldid+'_'+thisfieldindex).trigger('mousedown');
		// $('#id123-control'+parentfieldid+'_'+thisfieldindex).trigger('click');
		// //return false;
		// if (!alert_popped) {
			// alert_popped=true;
			// alert(text);
		// }
		// else alert_popped=false;
	// }

// }
function verify_passwords(id1,id2)
{
var default_match_msg='Passwords match!';
var default_notmatch_msg='Passwords do not match!';
if (id2==2791244 || id2==2890996) {
	default_match_msg='Email is valid!';
	default_notmatch_msg='Email is not valid!';
	}
if ((document.getElementById('id123-control'+id1)!=undefined)&&(document.getElementById('id123-control'+id2)!=undefined)) {
	if ((document.getElementById('id123-control'+id1).value=='')||(document.getElementById('id123-control'+id2).value=='')) return false;
	else {
		if (document.getElementById('id123-control'+id1).value==document.getElementById('id123-control'+id2).value) {
			document.getElementById('id123-titlemic-custom'+id2).innerHTML='<span style="color:#00AA44;font-weight:bold;">'+default_match_msg+'</span>';
			document.getElementById('id123-button-send').style.display='';
			}
		else	{
			document.getElementById('id123-titlemic-custom'+id2).innerHTML='<span style="color:#FF0000;font-weight:bold;">'+default_notmatch_msg+'</span>';
			document.getElementById('id123-button-send').style.display='none';
			}
		}
	}
}
function customWindowOpen(f_aftermsg, target, submit_message)
{
if (target=='_blank' || target=='_new') {
	var loader_spinning = document.getElementById('loader_spinning');
	if (loader_spinning!=null) {
		loader_spinning.style.display="none";
	}
	var submitting_text = document.getElementById('id123-submitting');
	if (submitting_text!=null) {
		submitting_text.innerHTML=submit_message;
	}
}
if (target=='_self') {
	location.assign(f_aftermsg);
	}
else {
	window.open(f_aftermsg, target);
	}
}

$(function() {
	$(".js-capitalize-string").keyup(function(){

	  // store current positions in variables
	  var start = this.selectionStart,
	      end = this.selectionEnd;

	  // do your stuff
	  $(this).val( $(this).val().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); }) );

	  // restore from variables...
	  this.setSelectionRange(start, end);
	});
});



// IB: functie folosita pentru a selecta, specific dupa o clasa, parintele unui element
function find_parent(elem, selector) {
	bicParent = elem.parentNode;
	while (elem) {
		if (hasClass(bicParent, selector)) {
			return bicParent;
		} else {
			find_parent(bicParent, selector);
		}
	}
	return false;
}

function removeClass(elem,cls) {
	if (hasClass(elem,cls)) {
		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		elem.className=elem.className.replace(reg,' ');
	}
}

function addClass(elem,cls) {
	elem.className = elem.className + " "+cls;
}

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function setstarvote(cid,star,maxv) {

i=1;
if (document.getElementById('goBackButton')!=undefined) return;  // exit if preview
document.getElementById("id123-control"+cid).value=star;
while (i<=maxv) {
if (i<=star) {document.getElementById("star-"+i+"-"+cid).className="selected";}
		else document.getElementById("star-"+i+"-"+cid).className="";
i+=1;
}

var dels="<span id=\"star-remove-"+cid+"\" class=\"cancel-rating\" onclick=\"cancelrating('"+cid+"','"+maxv+"')\">x</span>";
if (document.getElementById("star-remove-"+cid)==undefined) document.getElementById('id123-control-'+cid).innerHTML+=dels;

}

function setstarhovervote(cid,star,maxv) {

if (document.getElementById('goBackButton')!=undefined) {return;  // exit if preview
	if (document.getElementById("star-remove-"+cid)!=undefined) document.getElementById("star-remove-"+cid).parentNode.removeChild(document.getElementById("star-remove-"+cid));
	}

val=document.getElementById("id123-control"+cid).value;
i=parseInt(val);
maxv=parseInt(maxv);
res="";
while (i++ < star) {
	var sstar=document.getElementById("star-"+i+"-"+cid);
	 sstar.className="hover";
}

}

function clearstars(cid, maxv) {

if (document.getElementById('goBackButton')!=undefined) {
	if (document.getElementById("star-remove-"+cid)!=undefined) document.getElementById("star-remove-"+cid).parentNode.removeChild(document.getElementById("star-remove-"+cid));
	return; // exit if preview
	}

maxv=parseInt(maxv);
val=document.getElementById("id123-control"+cid).value;
res="";
i=parseInt(val);
while (i++ < maxv) {
	ich=i.toString();
	var star=document.getElementById("star-"+ich+"-"+cid);
	if (star.className=="hover") star.className="";
}

}

function cancelrating(cid,maxv) {

if (document.getElementById('goBackButton')!=undefined) return;
maxv=parseInt(maxv);
val=document.getElementById("id123-control"+cid).value;
document.getElementById("id123-control"+cid).value="0";
res="";
vl=parseInt(val);
i=0;
while (i++ < vl) {
	ich=i.toString();
	var star=document.getElementById("star-"+ich+"-"+cid);
	star.className="";
}
document.getElementById("star-remove-"+cid).parentNode.removeChild(document.getElementById("star-remove-"+cid));
}

function checkvalue(x,chars,words,cid) {
    var val=x.value;
    var xchars=val.length;
    var xwords=0;
    chars=parseInt(chars);
    words=parseInt(words);

    if (val.trim().length>0)  if (words>0) { var vl=val; var alw=vl.match(/\b\S+\b/g);  xwords=alw.length;  }
    if (chars>0) if (xchars>chars) { x.value = val.substr(0,chars); xchars=chars; }
    if (words>0) if (xwords>words) {  alw.splice(words, xwords-words);x.value=alw.join(" ");xwords=words;}

	if($('#charsLeft'+cid).length > 0) {
		var cleft=chars-xchars;
		if (chars>0) {	document.getElementById('charsLeft'+cid).innerHTML=cleft.toString(); }
	}
	if($('#wordsLeft'+cid).length > 0) {
		var wleft=words-xwords;
		if (words>0) {	document.getElementById('wordsLeft'+cid).innerHTML=wleft.toString(); }
	}
}

function preventBehavior(e) {
    e.preventDefault();
};


function FindPosition(oElement)
{
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
}

function GetCoordinates(e)
{
  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(e.target);

  if (!e) var e = window.event;
  if (e.touches)
  {
    PosX = e.touches[0].pageX;
    PosY = e.touches[0].pageY;
  } else
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];

  return new Array(PosX,PosY);
}


signature = function(el) {

public: elid=el;
this.elid=elid;
this.flag = false;
this.prevX = "0";
this.currX = "0";
this.prevY = "0";
this.started=false;
started=false;
this.currY = "0";
this.coords=Array();
this.scolor = "black";
this.lineWidth = 1;
this.canvas = document.getElementById(el);
if (navigator.appVersion.indexOf('MSIE 8.')==-1) if (navigator.appVersion.indexOf('MSIE 7.')==-1) if (navigator.appVersion.indexOf('MSIE 6.')==-1) {
			this.canvas.addEventListener("touchmove", preventBehavior, false);
			}
this.ctx = this.canvas.getContext("2d");
ctx=this.ctx;
this.canvas.width=this.canvas.parentNode.offsetWidth;
this.canvas.height=this.canvas.parentNode.offsetHeight;
this.width=this.canvas.width;
this.height=this.canvas.height;
this.ctx.moveTo(20, 100);
this.ctx.lineTo(this.canvas.width-20, 100);
this.ctx.strokeStyle = "darkgray";
this.ctx.stroke();

if ((navigator.appVersion.indexOf('MSIE 8.')==-1) && (navigator.appVersion.indexOf('MSIE 7.')==-1) && (navigator.appVersion.indexOf('MSIE 6.')==-1)) {
this.canvas.addEventListener("mousemove", function (e,elid) {
	nid=el.replace("id123-control-","");
    sg=eval('window.sign'+nid);
	sg.findxy('move', e);
    }, false);
this.canvas.addEventListener("touchmove", function (e,elid) {
	nid=el.replace("id123-control-","");
    sg=eval('window.sign'+nid);
	sg.findxy('move', e);
	sg.pushout();
    }, false);
this.canvas.addEventListener("mousedown", function (e,elid) {
    nid=el.replace("id123-control-","");
    sg=eval('window.sign'+nid);
	sg.findxy('down', e);
    }, false);
this.canvas.addEventListener("touchstart", function (e,elid) {
    nid=el.replace("id123-control-","");
    sg=eval('window.sign'+nid);
	sg.findxy('down', e);
    }, false);
this.canvas.addEventListener("mouseup", function (e,elid) {
    nid=el.replace("id123-control-","");
    sg=eval('window.sign'+nid);
	sg.findxy('up', e);
    }, false);
this.canvas.addEventListener("touchend", function (e,elid) {
    nid=el.replace("id123-control-","");
    sg=eval('window.sign'+nid);
	sg.findxy('up', e);
	sg.pushout();
    }, false);
this.canvas.addEventListener("touchcancel", function (e,elid) {
    nid=el.replace("id123-control-","");
    sg=eval('window.sign'+nid);
	sg.findxy('up', e);
	sg.pushout();
    }, false);
this.canvas.addEventListener("mouseout", function (e,elid) {
	nid=el.replace("id123-control-","");
	sg=eval('window.sign'+nid);
	sg.findxy('out', e);
	sg.pushout();
    }, false);
 } else {
 this.canvas.attachEvent("onmouseup", function(e,elid) {
	nid=el.replace("id123-control-","");
	e.target=this.canvas;
    sg=eval('window.sign'+nid);
	sg.findxy('up', e);
 });

 this.canvas.attachEvent("onmousedown", function(e,elid) {
	nid=el.replace("id123-control-","");
	e.target=document.getElementById(el);
	sg=eval('window.sign'+nid);
	sg.findxy('down', e);
	});

 this.canvas.attachEvent("onmouseout", function(e,elid) {
	nid=el.replace("id123-control-","");
	e.target=document.getElementById(el);
	sg=eval('window.sign'+nid);
	sg.findxy('out', event);
	sg.pushout();
	});

this.canvas.attachEvent("onmousemove", function (e,elid) {
	nid=el.replace("id123-control-","");
	e.target=document.getElementById(el);
    sg=eval('window.sign'+nid);
	sg.findxy('move', e);
    });

 }
public:
this.draw=function() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.prevX, this.prevY);
    this.ctx.lineTo(this.currX, this.currY);
    this.ctx.strokeStyle = this.scolor;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke();
    this.ctx.closePath();
	this.coords.push(new Array(this.prevX,this.prevY,this.currX,this.currY));
}

this.pushout=function() {
var sh=this.elid.replace("-control-","-control");
var shel=document.getElementById(sh);
shel.value=this.getSImage();
}
this.erase = function() {
   this.ctx.beginPath();
	this.ctx.clearRect(0, 0, this.width, this.height);
	this.ctx.strokeStyle = "darkgray";
	this.ctx.lineWidth = 2;
	this.ctx.moveTo(20, 100);
	this.ctx.lineTo(this.canvas.width-20, 100);
	this.ctx.stroke();
	this.ctx.closePath();
	this.ctx.lineWidth = 1;
	this.coords=[];
	coords=[];
var sh=this.elid.replace("-control-","-control");
var shel=document.getElementById(sh);
shel.value="";
var sheld=document.getElementById(sh+"-del");
sheld.style.visibility="hidden";
	flag=false;
	this.flag=false;
	}

this.save=function() {
    var dataURL = this.canvas.toDataURL();
}

this.getImage=function(format) {
    return this.canvas.toDataURL("image/"+format);
}

this.getSImage=function() {
	var rez="";
	var elem=this.coords.length;
	if (elem>0) {
		for (i=0;i<elem;i++) {
		var el=this.coords[i];
			rez+=el[0]+","+el[1]+","+el[2]+","+el[3]+"|";
		}
		rez=rez.substr(0,rez.length-1);
	}
    return rez;
}
public:
this.setSImage=function(str) {
	if (str.length==0) return;
	this.started=false;
	started=false;
	var stra=str.split("|");
	for (i=0;i<stra.length;i++) {
		var elm=stra[i];
		this.coords[i]=elm.split(",");
	}

}


this.findxy=function(res, e) {
if (!(res == 'up' || res == "out"))  {
			var mouseX, mouseY;
			var positions=GetCoordinates(e);
			mouseX=positions[0];
			mouseY=positions[1];
			}
if (res == 'down') {

if (this.coords.length<1) {
		var sh=this.elid.replace("-control-","-control");
		var sheld=document.getElementById(sh+"-del");
		sheld.style.visibility="visible";
		}

		if (this.started==false) {  this.coords=[]; coords=[];  this.started=true; started=true;  this.flag=false; }
		this.prevX = this.currX;
        this.prevY = this.currY;
		this.currX = mouseX;
		this.currY = mouseY;
        this.flag = true;
    }
if (res == 'up' || res == "out") {
        this.flag = false;  flag=false;}
if (res == 'move') {

        if (this.flag) {
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = mouseX;
            this.currY = mouseY;
            this.draw();
        }
    }
}

}

function signagain(cid,who) {
document.getElementById('signd'+cid).style.display="block";
document.getElementById('anchor'+cid).style.visibility="hidden";
document.getElementById('id123-control-'+cid).width=document.getElementById('id123-control-'+cid).parentNode.offsetWidth;
document.getElementById('id123-control-'+cid).height=document.getElementById('id123-control-'+cid).parentNode.offsetHeight;
who.width=document.getElementById('id123-control-'+cid).width;
who.height=document.getElementById('id123-control-'+cid).height;
who.erase();
}

function open_tinybox(content, params, frame_width, frame_height, parentLinkId) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    var params = params.split(',');
    var vars = new Array();
    for (var i=0; i < params.length; i++) {
        var aux = params[i].split('=');
        vars[aux[0]] = aux[1];
    }
    if (content == 'tos') {
        xmlhttp.onreadystatechange=function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                var content_tos = xmlhttp.responseText;

                var offset = $('#'+parentLinkId).offset();
                var lightBoxTop = offset.top - frame_height;
                if (lightBoxTop<50) lightBoxTop=50;

                if( isMobile.any())
                    {
                    //TPI Old Way: var lightBoxTop = offset.top - Math.round(frame_height/2); bug pe mobil era prea jos Tiny
                    if(offset.top - Math.round(frame_height/2)<100){
                        var lightBoxTop = 150;
                    } else{
                        var lightBoxTop = offset.top - Math.round((frame_height*1.5)/2);
                    }
                    TINY.box.show({html:"<div id='class123-bicTOSFrame-"+vars['c_id']+"' style='max-height:"+frame_height+"px;'>"+content_tos, boxid:'frameless', width:0, height:0, fixed:false, maskid:'bluemask', maskopacity:40, top: lightBoxTop});
                }else{
                    TINY.box.show({html:"<div id='class123-bicTOSFrame-"+vars['c_id']+"' style='max-height:"+frame_height+"px;'>"+content_tos, boxid:'frameless', width:frame_width, height:frame_height, fixed:false, maskid:'bluemask', maskopacity:40, top: lightBoxTop});
                }
            }
        }
        xmlhttp.open('GET', '/includes/ajax_calls.php?action=get_tos&c_id='+vars['c_id']+"&t="+Math.random(), true);
        xmlhttp.send();
    }

}
function insertPleaseWaitDiv(elem, txt)
{
var theParent = elem.parentNode;
var newText = document.createElement('span');
newText.innerHTML=txt;
submitted=true;
newText.className='formdefaultbut';
newText.style.backgroundColor='#B4B4B4';
newText.style.padding='4px 10px';
theParent.insertBefore(newText, elem.nextSibling);
}


//countdown timer
(function() {

  (function($) {
    $.countdown = function(el, options) {
      var getDateData,
        _this = this;
      this.el = el;
      this.$el = $(el);
      this.$el.data("countdown", this);
      this.init = function() {
        _this.options = $.extend({}, $.countdown.defaultOptions, options);
        if (_this.options.refresh) {
          _this.interval = setInterval(function() {
            return _this.render();
          }, _this.options.refresh);
        }
        _this.render();
        return _this;
      };
      getDateData = function(endDate) {
        var dateData, diff;
        endDate = Date.parse($.isPlainObject(_this.options.date) ? _this.options.date : new Date(_this.options.date));
        diff = (endDate - Date.parse(new Date)) / 1000;
        if (diff <= 0) {
          diff = 0;
          if (_this.interval) {
            _this.stop();
          }
          _this.options.onEnd.apply(_this);
        }
        dateData = {
          years: 0,
          days: 0,
          hours: 0,
          min: 0,
          sec: 0,
          millisec: 0
        };
        if (diff >= (365.25 * 86400)) {
          dateData.years = Math.floor(diff / (365.25 * 86400));
          diff -= dateData.years * 365.25 * 86400;
        }
        if (diff >= 86400) {
          dateData.days = Math.floor(diff / 86400);
          diff -= dateData.days * 86400;
        }
        if (diff >= 3600) {
          dateData.hours = Math.floor(diff / 3600);
          diff -= dateData.hours * 3600;
        }
        if (diff >= 60) {
          dateData.min = Math.floor(diff / 60);
          diff -= dateData.min * 60;
        }
        dateData.sec = diff;
        return dateData;
      };
      this.leadingZeros = function(num, length) {
        if (length == null) {
          length = 2;
        }
        num = String(num);
        while (num.length < length) {
          num = "0" + num;
        }
        return num;
      };
      this.update = function(newDate) {
        _this.options.date = newDate;
        return _this;
      };
      this.render = function() {
        _this.options.render.apply(_this, [getDateData(_this.options.date)]);
        return _this;
      };
      this.stop = function() {
        if (_this.interval) {
          clearInterval(_this.interval);
        }
        _this.interval = null;
        return _this;
      };
      this.start = function(refresh) {
        if (refresh == null) {
          refresh = _this.options.refresh || $.countdown.defaultOptions.refresh;
        }
        if (_this.interval) {
          clearInterval(_this.interval);
        }
        _this.render();
        _this.options.refresh = refresh;
        _this.interval = setInterval(function() {
          return _this.render();
        }, _this.options.refresh);
        return _this;
      };
      return this.init();
    };
    $.countdown.defaultOptions = {
      date: "June 7, 2087 15:03:25",
      refresh: 1000,
      onEnd: $.noop,
      render: function(date) {
        return $(this.el).html("" + date.years + " years, " + date.days + " days, " + (this.leadingZeros(date.hours)) + " hours, " + (this.leadingZeros(date.min)) + " min and " + (this.leadingZeros(date.sec)) + " sec");
      }
    };
    $.fn.countdown = function(options) {
      return $.each(this, function(i, el) {
        var $el;
        $el = $(el);
        if (!$el.data('countdown')) {
          return $el.data('countdown', new $.countdown(el, options));
        }
      });
    };
    return void 0;
  })(jQuery);

}).call(this);

function start_form_timer(time_left,locked, time_h, time_min, time_sec) {

if (!locked) { timer_refresh=1000;}
		else timer_refresh=false;

var now= (+new Date());
var time=now+time_left;
 time=+(new Date)+time_left;
$('.countdown').countdown({
	date: time,
	refresh:timer_refresh,
	render: function(data) {
				$(this.el).html("<span class=\"hours-value\">"+this.leadingZeros(data.hours, 2) + "</span><span class=\"hours-label\">" + time_h + "</span> <span  class=\"minutes-value\">" + this.leadingZeros(data.min, 2) + "</span><span class=\"minutes-label\">" + time_min + "</span><span  class=\"seconds-value\">" + this.leadingZeros(data.sec, 2) + "</span><span class=\"seconds-label\">" + time_sec + "</span><div style=\"clear:both;\"></div>");
		if (data.hours==0) if (data.min==0) if (data.sec<4) 	{
			var buts=$('.navigationButtons, .thebuttons').find('input[type="submit"],input[type="button"]');
			if (buts.length>0) {
			for(i=0;i<buts.length;i++) {
				var but=buts.eq(i);
				if (but.attr("id")!='id123-button-send') but.addClass("hidden");
				}
			}
		}

},
onEnd: function() {
	submitform();
	}
});
}

function submitform() {
if (submitted) return false;
$('#activepage').val($('#totalpages').val());
$('#nextpagenr').val($('#totalpages').val()+1);
var approval_button=$('input[name="justsendforapproval"]');
if (approval_button.length>0) {
	approval_button.remove();
	$('#mainform123').append('<input type="hidden" name="justsendforapproval" value="Send" />');
}
//return;
$('#mainform123').submit();

}
function customRadioImage(element_id,group_class)
	{
        var eenable=0;
        if($('#'+element_id).is(':enabled')) {
            eenable=1;
	    $('label[for="'+element_id+'"]').closest('.rowdownsmall').find('span').removeClass('customRadioImageChecked');
	    $('label[for="'+element_id+'"]').closest('.rowright').find('span').removeClass('customRadioImageChecked');
        }
        if (eenable==0){
            return false;
        }
		$('#'+element_id).attr('checked', 'checked');
		$('#'+element_id).css('height', '50px');
		$('label[for="'+element_id+'"]').closest('.rowdownsmall').find('.customRadioButton').css('background-position','0px 0px');
		$('label[for="'+element_id+'"]').closest('.rowright').find('.customRadioButton').css('background-position','0px 0px');
		$('label[for="'+element_id+'"]').find('.customRadioButton').first().css('background-position','0px -50px');
	}

function prepare_send_for_input() {

if ($('input[type="text"]').length==0) return;

$('input[type="text"]').on("keypress",function(event) {
	if (event.keyCode == 13) {
	event.returnValue = false;
	if(event.preventDefault) { event.preventDefault();}
	//	$('input:visible[type="submit"]').last().trigger("click");

	if($('#goNextPage').length>0) {

		if (($('#goNextPage').css('display')!="none") && ($('.currentPageActive #goNextPage').length>0)) {

		$('#goNextPage').trigger("click");
			return true; }
		}
	if($('#id123-button-showsummary').length>0) {
		if (( $('#id123-button-showsummary').css('display')!="none") && ($('.currentPageActive #id123-button-showsummary').length>0)) {$('#id123-button-showsummary').trigger("click");
			return; }
		}
	if (($('#id123-button-send').length>0)&& ($('.currentPageActive #id123-button-send').length>0)) {
		if ( $('#id123-button-send').css('display')!="none" ) {$('#id123-button-send').trigger("click");
			return; }
		}

	}
	});
}

function otherRemoveValue(fieldId, checkboxID, type, radioOtherValue) {
    if(type == 'radio') {
        if($('#'+checkboxID).val() != radioOtherValue) {
            if($('#id123-control'+fieldId+'-other').val() != '') $('#id123-control'+fieldId+'-other').val('');
        }
    } else {
        if(!$('#'+checkboxID).is(':checked')) {
            if($('#id123-control'+fieldId+'-other').val() != '') $('#id123-control'+fieldId+'-other').val('');
        }
    }
}


jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});

function formsavetime()
{
setTimeout(function() {
window.lastactiontime=Math.round(new Date().getTime());
clearTimeout(fields_timeout);
clearTimeout(calculations_timeout);
myformsavetimer();
},10);



}



function prepare_validation() {

	if ($('#checkout_form').length>0) {
		$("#checkout_form").validate({ ignore: ".forceValid, :hidden, :disabled"});
	} else if($('#checkout_form_paypal').length>0) {
        	$("#checkout_form_paypal").validate({ ignore: ".forceValid, :hidden, :disabled"});
    	} else {
		$('#mainform123').validate({ ignore: ".forceValid, :hidden, :disabled"});
	}
return false;
}

function elementInViewport(el) {
   //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

  var rect = el.getBoundingClientRect();
  var top = el.offsetTop;
  var left = el.offsetLeft;

    return Array(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    ,left,top);

  return (Array($(el).visible(true),left,top));
}

function changeTimeValue(timeInput, cid) {
    var timeInputId = $(timeInput).attr('id');
    var timeInputVal = $(timeInput).val();
    var inputNumberArr = timeInputId.split('-');
    var inputNum = inputNumberArr[inputNumberArr.length - 1];
    var hourInput24 = '#id123-control'+cid+'-4';
    var minuteInput24 = '#id123-control'+cid+'-5';
    var hourInput12 = '#id123-control'+cid+'-1';
    var minuteInput12 = '#id123-control'+cid+'-2';
    var amPmInput = '#id123-control'+cid+'-3';
    if(inputNum == '4') {
        if(timeInputVal >= 0 && timeInputVal <= 11) {
            if(timeInputVal == 0) { timeInputVal = 12; }
            $(amPmInput).val("AM");
        } else if(timeInputVal >= 12 && timeInputVal <= 23) {
            timeInputVal = timeInputVal - 12;
            if(timeInputVal == 0) { timeInputVal = 12; }
            $(amPmInput).val("PM");
        } else {
            timeInputVal = 12;
            $(amPmInput).val("AM");
            $(hourInput24).val("00");
        }
        timeInputVal = timeInputVal < 10 && timeInputVal.length < 2 ? "0"+timeInputVal : timeInputVal;
        $(hourInput12).val(timeInputVal);
    }

    if(inputNum == '5') {
        if(timeInputVal < 0 ) {
            timeInputVal = 0;
            $(minuteInput24).val("00");
        } else if( timeInputVal > 59 ) {
            $(minuteInput24).val("59");
            timeInputVal = 59;
        } else if(!$.isNumeric(timeInputVal)) {
          //  $(minuteInput24).val("");
            timeInputVal = 0;
        }
        $(minuteInput12).val(timeInputVal);
    }
}

function sync_time(cid) {
    var hour12 = $('#id123-control'+cid+'-1').val();
    var minute12 = $('#id123-control'+cid+'-2').val();
    var amPm = $('#id123-control'+cid+'-3').val();
    var hour24_id = '#id123-control'+cid+'-4';
    var minute24_id = '#id123-control'+cid+'-5';
    if(hour12 == "" || minute12 == "" || amPm == "") { return; }
    var HH = parseInt(hour12);
    var MM = parseInt(minute12);

    if(amPm.toLowerCase() == 'pm' && HH == 12) {
        HH = 12;
    } else if( amPm.toLowerCase() == 'am' && HH == 12 ) {
        HH = 00;
    } else if (amPm.toLowerCase() == 'pm') {
       HH = parseInt(hour12) + parseInt(12);
       if(HH == 24) { HH = 00; }
    }

    HH = HH<10 ? "0"+HH:HH;
    MM = MM<10 ? "0"+MM:MM;
    $(hour24_id).val(HH);
    $(minute24_id).val(MM);
}

function stopCalculateNow()
{	enable_form_bottom_buttons();
	if (window.stopCalculate)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function start_process_debug() {
	window.process_debug=new Date().getTime();
}

function stop_process_debug(label) {
	process_debug_now=new Date().getTime();
	difference=process_debug_now-window.process_debug;
	window.process_debug =-1;
	process_sec=difference/1000;
	console.log("The process  "+label+"  took: " + difference + " ms => ( " + process_sec + " s )");
}

/**
 * General JS that was inline when it comes to form view.
 */
$(function() {
	/**
	 * Form with multiple pages.
	 */
	$(".js-form").submit(function() {
		RefreshFrameHeight(1);

		return checkSubmitAllowed();
	});

	/**
	 * Language dropdown.
	 */
	$(".js-language-dropdown").change(function() {
		changeFormLanguage($(this).children("option:selected").val());
	});

    /**
     * Calculate button.
     */
    $(".js-just-calculate").click(function() {
        return_type = $(this).data('return');

        updateformfields(true, 0);

        if (return_type === 'false') {
            return false;
        }
    });

    /**
     * Previous button.
     */
    $(".js-previous-btn").click(function() {
       document.mainform123.reset();
    });

    /**
     * Print button
     */
    $(".js-print").click(function() {
       window.print();
    });
});

/**
 * convert date from format DD/MM/YYYY to format MM/DD/YYYY
 * @param string
 * @param string - // 1 = DDMMYYYY else - MMDDYYYY
 * @return string
 * @author - zack 2015-08-19
 **/
function convertDateYYYYMMDD ( val, formatType )
{
	var tmp = val.split('/');
	if ( formatType == 1 )
		tmp = [tmp[2], tmp[0], tmp[1] ].join('/');
	else
		tmp = [ tmp[2], tmp[1], tmp[0] ].join('/');

	return tmp;

}

/**
 * compare date
 * @author - zack
 *
 * @param string - left value
 * @param string - right value
 * @param int - compare attribute - 7/8 from form rules
 * @param int - date format 4=MM/DD/YYYY , 5=DD/MM/YYYY
 * @return int - 0 or 1
 **/
function compareDate ( leftmval, rightm, compare, dateFieldFormat )
{
	var formatType = dateFieldFormat == 5?0:1;
	var debug = !true;

	if ( debug ) console.log ('leftmval='+leftmval);
	if ( debug ) console.log ('rightm='+rightm);
	if ( debug ) console.log ('compare='+compare);
	if ( debug ) console.log ('formatType='+formatType);

	leftmval = convertDateYYYYMMDD (leftmval,  formatType );
	rightm = convertDateYYYYMMDD ( rightm, formatType );

	if ( debug ) console.log ('leftmval='+leftmval);
	if ( debug ) console.log ('rightm='+rightm);

	//var left_ts = new Date(leftmval);
	//var right_ts = new Date(rightm);

	//if ( debug ) console.log ('left_ts='+left_ts);
	//if ( debug ) console.log ('right_ts='+right_ts);

	//condtrue = (compare==7)?((left_ts.getTime()>right_ts.getTime())?1:0):(compare==8)?(left_ts.getTime()<right_ts.getTime()?1:0):0;
	condtrue = 0;
	if ( compare == 7)
		condtrue = leftmval>rightm?1:0;
	else if ( compare == 8)
		condtrue = leftmval<rightm?1:0;

	if ( debug ) console.log ( 'condtrue='+condtrue );

	return condtrue;
}
