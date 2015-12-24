function setDefaultPermission(localeCode){
		var nmtHeading = document.getElementById('nmtHeading');
		var nmtDesc = document.getElementById('nmtDesc');
        if(document.getElementById('otherCountry').checked){
                localeCode=document.getElementById('otherCountry').value
        }
	//alert(localeCode);
        if(localeCode!=null && localeCode.trim()!=""){
		if(localeCode != "en_XX"){
			$("#nmtPermission").show();
			$("#nmtHeading").show();
			$("#nmtDesc").show();
			if((jQuery.inArray( localeCode, PreUncheckedCountriesLocale ))!=-1){
				 $("#permission").find("input[type='checkbox']").prop('checked', false);
			}else{
				 $("#permission").find("input[type='checkbox']").prop('checked', true);
			}
		}else{
			$("#nmtPermission").hide();
			$("#nmtPermission").prop('checked', false);
			$("#nmtHeading").hide();
			$("#nmtDesc").hide();
			$("#dmPermission").prop('checked', true);
		}
        }
}

//function setDefaultPermission(localeCode){
//	if(document.getElementById('otherCountry').checked){
//		localeCode=document.getElementById('otherCountry').value
//	}
//	if(localeCode!=null && localeCode.trim()!=""){
//		if((jQuery.inArray( localeCode, PreUncheckedCountriesLocale ))!=-1){
//			 $("INPUT[name='permission']").prop('checked', false);
//		}else{
//			 $("INPUT[name='permission']").prop('checked', true);
//		}
//	}
//}
//function setDefaultPermission(localeCode){
//											if((jQuery.inArray( localeCode, PreUncheckedCountriesLocale ))!=-1){
//												 $("INPUT[name='nmtPermission']").prop('checked', false);
//												 $("INPUT[name='dmPermission']").prop('checked', false);
//											}else{
//												$("INPUT[name='dmPermission']").prop('checked', true);
//												$("INPUT[name='nmtPermission']").prop('checked', true);
//											}
//										}

function toggle() {
	var btn = document.getElementById('toggleBtn');
	var text = document.getElementById('toggleText');
	if (text.style.display == "block") {
		text.style.display = "none";
	} else {
		text.style.display = "block";
	}
}
function loadCountryData() {
	var fields = $(DataCountries.countries);
	jQuery
	.each(
			fields,
			function(i, field) {
				rowNum = rowNum + 1;
				Data.arrayCountries[rowNum] = field.name
			});
}
function focusOtherCountry() {
	$("#otherCountry")
	.prop("checked", true);
//	setDefaultPermission("")
}
function resetOtherCountry(localeCode) {
	if (document
			.getElementById('countryText') != null) {
		document
		.getElementById('countryText').value = "";
		document
		.getElementById('otherCountry').value = "";

	}
	setDefaultPermission(localeCode);
}

function KeyCode(field, event) {
	//alert("Key is pressed");
	var theCode = event.keyCode ? event.keyCode
			: event.which ? event.which
					: event.charCode;
	if (theCode == 13) {
		searchResults();
		//return false;
	}
}

function toggleLocExp(dir) {
	if (dir == 'show') {
		document
		.getElementById("countrylink").style.display = "none";
		document
		.getElementById("countrylinktext").style.display = "block";
	} else {
		document
		.getElementById("countrylinktext").style.display = "none";
		document
		.getElementById("countrylink").style.display = "block";
	}
}

$( document ).ready(function() {
	loadCountryData();
	onloadCountry();
});

Data = {
		arrayCountries : []
};
var rowNum = -1;

function onloadCountry(){
	YAHOO.example.BasicLocal = function() {
		// Use a LocalDataSource
		var oDS = new YAHOO.util.LocalDataSource(
				Data.arrayCountries);
		// Optional to define fields for single-dimensional array
		oDS.responseSchema = {
				fields : [ "state" ]
		};

		// Instantiate the AutoComplete
		var oAC = new YAHOO.widget.AutoComplete(
				"countryText", "countryList",
				oDS);
		oAC.prehighlightClassName = "yui-ac-prehighlight";
		oAC.useShadow = true;
		oAC.queryDelay = 0;
		oAC.forceSelection = true;
		oAC.typeAhead = true;

		oAC.dataReturnEvent = new YAHOO.util.CustomEvent(
				"dataReturn", this);
		oAC.containerPopulateEvent = new YAHOO.util.CustomEvent(
				"containerPopulate", this);

		oAC.doBeforeLoadData = function(sQuery,
				oResponse, oPayload) {
			oAC.getListEl().innerHTML = "";
			oAC.maxResultsDisplayed = 43;
			return true;
		};

		oAC.dataReturnEvent
		.subscribe(function(sType,
				aArgs) {
			var aResults = aArgs[2];
			oAC.maxResultsDisplayed = 43;
			if (aResults.length != 0) {
				oAC.maxResultsDisplayed = aResults.length;
			}
		});

		oAC.containerPopulateEvent
		.subscribe(function(oSelf) {
			oAC.maxResultsDisplayed = 43;
		});

		oAC.textboxChangeEvent
		.subscribe(function(oSelf) {
			//alert("Hi = "+document.getElementById('countryText').value+" preVal = "+document.getElementById('previousSelectedCountry').value+" = "+document.getElementById('countryText').value);
			if (document
					.getElementById('countryText').value == null
					|| document
					.getElementById('countryText').value == "") {
				//countryText.value=countryText.prevVal;   Here we can also mark Sniffed country as checked when text box is empty
				//we have to uncomment the next line to implement the suggestion
				//document.getElementById('isuserselectedchecked').checked=true;
			}
			var junkFlag = 1;
			document
			.getElementById('otherCountry').value = "";

			for ( var i = 0; i < DataCountries.countries.length; i++) {
				var country = DataCountries.countries[i];
				if (country.name == document
						.getElementById('countryText').value) {
					document
					.getElementById('otherCountry').value = country.locale;
					setDefaultPermission(document.getElementById('otherCountry').value)
					junkFlag = 0;
					break;
				}
			}

			//alert("sc = " + document.getElementById('sCountry').value);
			if (document
					.getElementById('previousSelectedCountry') != null
					&& document
					.getElementById('previousSelectedCountry').value != document
					.getElementById('countryText').value
					&& junkFlag != 1) {
				//alert("in if1");
				if ((document
						.getElementById('sCountry').value == document
						.getElementById('countryText').value)
						&& (document
								.getElementById('previousSelectedCountry').value == "")) {
					//alert("in if2");
					return false;
				} else {
					//alert("in else2");
					document
					.getElementById('checkedIndexId').value = -1;
					submitForm('SelectCountry');
				}
			} else {
				//alert("in else1");
				document
				.getElementById('countryText').value = document
				.getElementById('previousSelectedCountry').value;
				document
				.getElementById('otherCountry').value = "";
				return false;
			}
		});

		oAC.containerCollapseEvent
		.subscribe(function(oSelf) {
			document.getElementById(
					'countryText')
					.focus();

		});

		return {
			oDS : oDS,
			oAC : oAC
		};
	}();
}


