function validate(form) {
	var pulldown = form.category.options[form.category.selectedIndex].value;
	var bodytext = form.body.value;
	var subject = form.subject.value;
	/*if (!pulldown || !bodytext || !subject) {
		alert("Please provide input for all required fields.\nThank You!");
		return false;
	}
	else if (bodytext.length > 4500) {
		alert("Your comments should contain less than 4,500 characters. Please reduce the length and try again.");
		return false;
	}
	else {*/
		// Optional customer values still need to be set before submitting
		if (!form.alt_fname.value) {
			form.fname.value = 'Sender';
		}
		else {
			form.fname.value = form.alt_fname.value;
		}
		if (!form.alt_lname.value) {
			form.lname.value = 'Anonymous';
		}
		else {
			form.lname.value = form.alt_lname.value;
		}
		if (!form.alt_email.value) {
			form.accountname.value = 'no_email_supplied@apple.com';
		}
		else {
			form.accountname.value = form.alt_email.value;
		}
		if ($('casenumber').innerHTML == '') {
			/* nothing */
		}
		else {
			bodytext = 'Case number: ' + $('casenumber').innerHTML + '\n\n' + bodytext;
		}
		if (!form.web_url.value) {
			/* nothing */
		}
		else {
			bodytext = bodytext + '\n\nWeb Address (URL):\n' + form.web_url.value;
		}
		form.body.value = bodytext;

		// Let's put the pulldown selection in the subject line by doing this
		form.subject2.value = '(' + pulldown + ')';

		// We'll set the subprogram value to get the data to the right email address
		if (pulldown == 'Broken Link') form.subprogram.value = 'link';
		else if (pulldown == 'Apple Support Contact Us') form.subprogram.value = 'expresslane';
		else if (pulldown == 'Discussions') form.subprogram.value = 'discussions';
		else if (pulldown == 'Downloads (software/firmware updates)') form.subprogram.value = 'download';
		else if (pulldown == 'Environmental') form.subprogram.value = 'other';
		else if (pulldown == 'How-to & Troubleshooting Articles') form.subprogram.value = 'kbase';
		else if (pulldown == 'Manuals') form.subprogram.value = 'manuals';
		else if (pulldown == 'My Support Profile') form.subprogram.value = 'supportprofile';
		else if (pulldown == 'Repairs and Repair Status') form.subprogram.value = 'repair';
		else if (pulldown == 'Search') form.subprogram.value = 'search';
		else if (pulldown == 'Send Files to Apple Support') form.subprogram.value = 'sendfiles';
		else if (pulldown == 'Specifications') form.subprogram.value = 'specs';
		else if (pulldown == 'Warranties and AppleCare Agreements') form.subprogram.value = 'warranty';
		else if (pulldown == 'Other') form.subprogram.value = 'other';

		//submitEmailForm(form);
		//return false;
		//form.submit();

}



var preselectOption = function (queryValue, optionValue, isExclusive) {
	var query = location.href.parseQuery();
	$('topic-area').select('option').each(function (option) {
		if (query.ref == queryValue) {
			if (option.value == optionValue) {
				option.selected = true;
			}
			else if (isExclusive == true) {
				option.remove();
			}
		}
		else if (option.value == optionValue && isExclusive == true) {
			option.remove();
		}
	});
};

var prefillText = function (queryValue, executeCode) {
	if (getQuery(queryValue) != '') {
		executeCode();
	}
};

var exclusiveOptionByParamAndReferrer = function (queryValue, referrerString, optionValue) {
	var query = location.href.parseQuery();
	$('topic-area').select('option').each(function (option) {
		if (option.value == optionValue) {
			if (query.ref == queryValue) {}
			else if (document.referrer.indexOf(referrerString) != -1) {}
			else {
				option.remove();
			}
		}
	});
};

var getQuery = function (queryValue) {
	var query = location.href.parseQuery();
	if ((query[queryValue] != undefined) && (query[queryValue] != null) && (query[queryValue] != '')) {
		return query[queryValue];
	}
	else {
		return '';
	}
};

var redirectTo = function(queryValue, url) {
	if (queryValue != undefined && url != undefined) {
		if (getQuery('ref') == queryValue) {
			window.location.replace(url);
		}
	}
};

document.observe('dom:loaded', function() {
	redirectTo('appleexpert', '/support/feedback/?ref=contact-us');
	redirectTo('expresslane', '/support/feedback/?ref=contact-us');
	preselectOption('agreements', 'Warranties and AppleCare Agreements', false);
	preselectOption('contact-us', 'Apple Support Contact Us', true);
	preselectOption('MySupportProfile', 'My Support Profile', true);
	preselectOption('repairs', 'Repairs and Repair Status', false);
	preselectOption('SendFilesToAppleSupport', 'Send Files to Apple Support', true);

	/* exclusive options */
	exclusiveOptionByParamAndReferrer('no_NO', '/no/', 'Environmental');

	/* prefill */
	prefillText('case', function () {
		$('casenumber').update(getQuery('case'));
		$('caserow').show();
	});
	prefillText('web_url', function () {
		$('web_url').value = getQuery('web_url');
	});
	prefillText('page_title', function () {
		$('comment_body').value = 'Page Title: ' + getQuery('page_title') + '\n\n';
	});
});
