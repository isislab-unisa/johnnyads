/*Total Duration : 78.536 ms
*/
trackerId = "76fedad2ae57f7c8150cfe65eb355994";

document.getElementById(wpn_ad_configuration[0]['div_id']).innerHTML = '<a href="http://rpc-php.trafficfactory.biz/click/.6924AFwF25HAy5QH1CRw2JsGfxAGR161tjIZQcq46abzNW2KbmQ4kfgEjk7axQ_llr6V1jc2PFF98Y_IoBwoakZx_iTbJSAmfqdGTDTF2GoPkN2kxwQZqLs2tChNFmqGX1YZOBUznegOe7McgdBSUYELP2S154yauKUR-UVkBoQShInvvIUuq6foAxhMUgGagJnKUGPu3L8I-mWdU4fApA3MM8QymbLgDyo984xZ7Jypcu7Lz3d6mPHJP5T_qkycB1zOSpVy2zuImfRT1Lz0hArcpA==/73f2ec867527c7e5b6abaa69ad391166" target="_blank"><img src="http://media.trafficfactory.biz//banners/822/96c1ac514881c318f2f1ab79d8ffd445.gif"></a>';
			
function wpn_set_cookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	
	var expires_date = new Date( today.getTime() + (expires) );
	
	var toset = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
	( ( path ) ? ";path=" + path : "" ) +
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" )
	document.cookie = toset;
	
}

wpn_set_cookie('wpn_ad_cookie', trackerId, 1, "/");
