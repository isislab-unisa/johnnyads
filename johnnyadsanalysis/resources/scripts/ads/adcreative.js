var JSON;
if (!JSON) {
	JSON = {};
}
(function () {
	"use strict";
	function f(n) {
		// Format integers to have at least two digits.
		return n < 10 ? '0' + n : n;
	}

	if (typeof Date.prototype.toJSON !== 'function') {

		Date.prototype.toJSON = function (key) {

			return isFinite(this.valueOf()) ?
				this.getUTCFullYear()     + '-' +
				f(this.getUTCMonth() + 1) + '-' +
				f(this.getUTCDate())      + 'T' +
				f(this.getUTCHours())     + ':' +
				f(this.getUTCMinutes())   + ':' +
				f(this.getUTCSeconds())   + 'Z' : null;
		};

		String.prototype.toJSON      =
			Number.prototype.toJSON  =
			Boolean.prototype.toJSON = function (key) {
				return this.valueOf();
			};
	}

	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		gap,
		indent,
		meta = {    // table of character substitutions
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"' : '\\"',
			'\\': '\\\\'
		},
		rep;


	function quote(string) {
		escapable.lastIndex = 0;
		return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
			var c = meta[a];
			return typeof c === 'string' ? c :
				'\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		}) + '"' : '"' + string + '"';
	}


	function str(key, holder) {
		var i,          // The loop counter.
			k,          // The member key.
			v,          // The member value.
			length,
			mind = gap,
			partial,
			value = holder[key];

		if (value && typeof value === 'object' &&
				typeof value.toJSON === 'function') {
			value = value.toJSON(key);
		}

		if (typeof rep === 'function') {
			value = rep.call(holder, key, value);
		}

		switch (typeof value) {
		case 'string':
			return quote(value);

		case 'number':
			return isFinite(value) ? String(value) : 'null';

		case 'boolean':
		case 'null':
			return String(value);

		case 'object':
			if (!value) {
				return 'null';
			}
			gap += indent;
			partial = [];
			if (Object.prototype.toString.apply(value) === '[object Array]') {
				length = value.length;
				for (i = 0; i < length; i += 1) {
					partial[i] = str(i, value) || 'null';
				}
				v = partial.length === 0 ? '[]' : gap ?
					'[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
					'[' + partial.join(',') + ']';
				gap = mind;
				return v;
			}
			if (rep && typeof rep === 'object') {
				length = rep.length;
				for (i = 0; i < length; i += 1) {
					if (typeof rep[i] === 'string') {
						k = rep[i];
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			} else {
				for (k in value) {
					if (Object.prototype.hasOwnProperty.call(value, k)) {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ': ' : ':') + v);
						}
					}
				}
			}
			v = partial.length === 0 ? '{}' : gap ?
				'{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
				'{' + partial.join(',') + '}';
			gap = mind;
			return v;
		}
	}

	if (typeof JSON.stringify !== 'function') {
		JSON.stringify = function (value, replacer, space) {
			var i;
			gap = '';
			indent = '';
			if (typeof space === 'number') {
				for (i = 0; i < space; i += 1) {
					indent += ' ';
				}
			} else if (typeof space === 'string') {
				indent = space;
			}
			rep = replacer;
			if (replacer && typeof replacer !== 'function' &&
					(typeof replacer !== 'object' ||
					typeof replacer.length !== 'number')) {
				throw new Error('JSON.stringify');
			}
			return str('', {'': value});
		};
	}

	if (typeof JSON.parse !== 'function') {
		JSON.parse = function (text, reviver) {
			var j;
			function walk(holder, key) {
				var k, v, value = holder[key];
				if (value && typeof value === 'object') {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v;
							} else {
								delete value[k];
							}
						}
					}
				}
				return reviver.call(holder, key, value);
			}

			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function (a) {
					return '\\u' +
						('0000' + a.charCodeAt(0).toString(16)).slice(-4);
				});
			}

			if (/^[\],:{}\s]*$/
					.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
						.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
						.replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
				j = eval('(' + text + ')');
				return typeof reviver === 'function' ?
					walk({'': j}, '') : j;
			}
			throw new SyntaxError('JSON.parse');
		};
	}
}());


///////////////////////////////////////////////////////////////////////////////////////////////////////////


;(function(){

var rp_id = 'ed_drtubkontx';
var adcreative_url = 'http://adcreative2.awempire.com';
var adcreative_default_url = 'http://static.creatives.livejasmin.com/adcreative2/generated_js/ed_drtubkontx/default.js';
var importantTags = [];
var importantParts = ["url","title"];
var watchWords = ["girl","girls","her","pussy","she","18+","18yo","18yr","babe","babes","barely","barely-legal","barelylegal","chick","chicks","college","cute","cutie","cuties","daughter","drunk","gfs","girlfriend","girlfriends","legal","nice","petite","school","sweet","sweetie","sweety","teen","teenage","teens","virgin","virginity","virgins","young","blond","blonde","blondes","fair","bbw","bbws","big","bigtits","boobie","boobs","breast","bust","busty","buxom","fat","huge tits","ladies","lady","plump","tit","tits","woman","women","petites","pussies","small","smalltits","beauty","brit","british","caucasian","czech","euro","european","german","russian","swedish","white","brasil","brasilian","brazil","brazilian","brazillian","caliente","colombia","colombian","latin","latina","latinas","asian","china","chinese","japan","japanese","korea","korean","thai","arab","arabian","black","ebony","interracial","bald","clean","shaved","hairy","natural","anal","ass","asshole","behind","brown","brunette","brunettes","brunnette","freckle","freckled","freckles","irish","red","redhead","cougar","cougars","experienced","housewife","mature","matures","milf","milfs","teacher","wife","wives","mommy","grandma","grandmother","granny","old","blondies","mami","domina","feet","heels","high heel","leg","leggy","nylon","stiletto","stockings","cream","creampie","orgasm","squirt","dom","dominate","dominated","fetish","s&m","spank","spanked","spanking","sub","whip","whipped","whipping","abuse","bizarre","dildo","extreme","femdom","fetish roleplay","fetish toys","gag","kinky","leather","scissor","slave","toy","mistress","germany","punish","queen","french","hospital","latex","maid","nun","nuns","nurse","nursery","nurses","office","officer","police","uniform","bdsm","bizar","bizarre game","bizzare","bondage","devil fetish","dominas","dominatrix","fem","satistic","kiss","kissing","lesbian","lesbians","lesbo","lesbos","play","playing","twins","two girls","beauties","blondie","fatties","fatty","swapping","butch","dike","girlie","cig","cigarette","foot","smoke","butt","butt plug","double","plug","strap","strap on","strap-on","strapon","ladyboy","shemale","shemales","tgirl","trannies","tranny","trans","transexual","transgendered","transsexual","boy","boys","fag","gay","gays","guys","homo","homos","twink","twinky","bear","bears","bodybuilder","fox","hunk","hunks","muscle","muscles","muscular","silver","silver fox","silverfox","strong","skinny","twinks","big size","big sized","giant","huge","hung","monster","latino","latinos","lover","stallion","rice king","buttplug","finger","fingering"];

var processedWords = {};
var excludeTags = ['script', 'noscript', 'style', 'option', 'comment'];
var otherTags = ['div', 'ul', 'li'];
var AdCreative = (this.AdCreative || {});

AdCreative.trimLeft = /^\s+/;
AdCreative.trimRight = /\s+$/;
AdCreative.rnotwhite = /\S/;
//IE doesn't match non-breaking spaces with \s
if ( AdCreative.rnotwhite.test( "\xA0" ) ) {
	AdCreative.trimLeft = /^[\s\xA0]+/;
	AdCreative.trimRight = /[\s\xA0]+$/;
}

AdCreative.getMeta = function(name) {
	var keywords = [];
	var metas = document.getElementsByTagName('META');
	if (metas) {
		for (var x=0; x < metas.length; x++) {
			if (metas[x].name.toLowerCase() == name) {
				keywords = keywords.concat(AdCreative.getWords(metas[x].content));
			}
		}
	}
	return keywords;
};

AdCreative.createCookie = function(name, value, hour) {
	var cookieTTL = 60*60*1000 * hour;
	var date = new Date();
	date.setTime(date.getTime()+(cookieTTL));
	var cookieExpires = (cookieTTL != 0) ? '; expires=' + date.toGMTString() : '';
	document.cookie = name + '=' + value + cookieExpires +'; path=/';
};

AdCreative.getCookie = function(name) {
	var cookieResults = document.cookie.match ('(^|;) ?' + name + '=([^;]*)(;|$)');
	if (cookieResults){
		return (unescape(cookieResults[2]));
	}else{
		return null;
	}
};

AdCreative.trim = String.prototype.trim
	? function( text ) {
		return text == null
			? ''
			: String.prototype.trim.call(text);
	}
	: function( text ) {
		return text == null
			? ''
			: text.toString().replace(AdCreative.trimLeft, '').replace(AdCreative.trimRight, '');
	};


AdCreative.getWords = function(text){
	var words = AdCreative.trim(text).replace(/\W/g, ' ').split(' ');

	var ret = [];
	for(var i=0; i < words.length; i++)  {
		if(words[i].length > 2) {
			ret[ret.length] = words[i].toLowerCase();
		}
	}
	return ret;
};

AdCreative.getProcessTags = function() {
	return processTags;
};

AdCreative.indexOf = function(array, obj) {
	for(var i=0; i < array.length; i++){
		if(array[i] == obj){
			return i;
		}
	}
	return -1;
};

AdCreative.walk = function(node, func) {
	func(node);
	node = node.firstChild;
	while (node) {
		AdCreative.walk(node, func);
		node = node.nextSibling;
	}
};

AdCreative.getRelevantTags = function(node) {
	var relevantTags = [];
	var depth = 0;
	while(node) {
		if(node.tagName) {
			var tag = (AdCreative.indexOf(otherTags, node.tagName.toLowerCase()) == -1)
				? node.tagName.toLowerCase()
				: 'other';

			if(AdCreative.indexOf(relevantTags, tag) == -1 && AdCreative.indexOf(importantTags, tag) != -1 ) {
				relevantTags[relevantTags.length] = tag;
			}
			depth++;
		}
		node = node.parentNode;
		if(node == document.body) { // a BODY es a HTML nem kell
			break;
		}
	}
	return relevantTags;
};

AdCreative.processWords = function(words, relevantTags) {
	for (var j = 0; j < words.length; j++) {
		if (AdCreative.indexOf(watchWords, words[j]) != -1) { //csak a megfelelo szavakra figyeljen
			for(var k = 0; k < relevantTags.length; k++) { // minden kulcsszohoz felvesszuk a tartalmat
				var tag = relevantTags[k];
				if (processedWords[words[j]]) {
					if(processedWords[words[j]][tag]) {
						processedWords[words[j]][tag] += 1;
					}
					else {
						processedWords[words[j]][tag] = 1;
					}
				}
				else {
					processedWords[words[j]] = {};
					processedWords[words[j]][tag] = 1;
				}
			}
		}
	}
};

AdCreative.processNode = function(node) {
	if(!node.hasChildNodes()) {
		var currentTag = node.tagName
			? node.tagName.toLowerCase()
			: (node.nodeType == 8 ) ? 'comment' : node.parentNode.tagName.toLowerCase();

		if(currentTag == 'img' && node.src && AdCreative.indexOf(importantParts, 'img_src') != -1) {
			AdCreative.processWords(AdCreative.getWords(node.src), ['img_src']);
		}
		if(currentTag == 'img' && node.alt && AdCreative.indexOf(importantParts, 'img_alt') != -1) {
			AdCreative.processWords(AdCreative.getWords(node.alt), ['img_alt']);
		}
		if(currentTag == 'img' && node.title && AdCreative.indexOf(importantParts, 'img_title') != -1) {
			AdCreative.processWords(AdCreative.getWords(node.title), ['img_title']);
		}
		if (currentTag == 'a' && AdCreative.indexOf(importantParts, 'a_href') != -1 && node.parentNode.href) {
			AdCreative.processWords(AdCreative.getWords(node.parentNode.href), ['a_href']);
		}
		if (currentTag == 'a' && AdCreative.indexOf(importantParts, 'a_title') != -1 && node.parentNode.title) {
			AdCreative.processWords(AdCreative.getWords(node.parentNode.title), ['a_title']);
		}

		if (importantTags.length > 0 && AdCreative.indexOf(excludeTags, currentTag) == -1) {
			var relevantTags = AdCreative.getRelevantTags(node);
			if (relevantTags.length > 0) {
				var text = document.all ? node.toString() : node.textContent;
				var processedWordsForTag = AdCreative.getWords(text);
				if (processedWordsForTag.length > 0) {
					AdCreative.processWords(processedWordsForTag, relevantTags);
				}
			}
		}
	}
};


AdCreative.checkAdvert = function() {
	if (AdCreative.load != 1) {
		var adcr = document.createElement('script');
		adcr.type = 'text/javascript';
		adcr.async = true;
		adcr.src = adcreative_default_url;
		(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(adcr);
	}
};

/**********************************************/

var cookieValue = AdCreative.getCookie('lj_popunder');

if (cookieValue != 2) {
	AdCreative.walk(document.body, AdCreative.processNode);

	for(var i in importantParts) {
		switch(importantParts[i]) {
			case 'url':
				AdCreative.processWords(AdCreative.getWords(document.location.href), ['url']);
				break;
			case 'title':
				AdCreative.processWords(AdCreative.getWords(document.title), ['title']);
				break;
			case 'meta_d':
				AdCreative.processWords(AdCreative.getMeta('description'), ['meta_d']);
			case 'meta_k':
				AdCreative.processWords(AdCreative.getMeta('keywords'), ['meta_k']);
				break;
		}
	}

	var adcr = document.createElement('script');
	adcr.type = 'text/javascript';
	adcr.async = true;
	adcr.src = adcreative_url + '/an/' + rp_id + '?info=' + JSON.stringify(processedWords);
	(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(adcr);

	setTimeout('AdCreative.checkAdvert()', 3000);
}

if (!this.AdCreative) this.AdCreative = AdCreative;
}).apply(/*<CommonJS>*/(typeof exports != 'undefined') ? exports : /*</CommonJS>*/this);
