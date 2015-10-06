'use strict';
var lf_force_logout = false;

/**
 * Define a re-usable Livefyre Auth Delegate
 * Attempt to rely on the URL helper in our Gigya plugin to generate URLs
 * If that doesn't work, fall back to local ones that will redirect
 *
 * Since this is a global object, it's usable in all Livefyre.require() calls
 */
var vbAuthDelegate = {
	login: function (errback) {
		// Redirect login requests to the login page
		if( typeof lfBuildUserServiceUrl !== 'undefined' ) {
			window.location = lfBuildUserServiceUrl('/login/', true);
		} else {
			window.location = '/login/';
		}
	},
	logout: function (errback) {

		// If we're not forcing a logout, redirect to handle
		if( !lf_force_logout ) {
			// Redirect logout requests to the logout page
			if( typeof lfBuildUserServiceUrl !== 'undefined' ) {
				window.location = lfBuildUserServiceUrl('/logout/', true);
			} else {
				window.location = '/logout/';
			}
		}

		errback(null);

	},
	editProfile: function (user) {

		// Open the My Account page in a new window
		if( typeof lfBuildUserServiceUrl !== 'undefined' ) {
			window.open(lfBuildUserServiceUrl('/account/', false));
		} else {
			window.open('/account/');
		}

	},
	forEachAuthentication: function (authenticate) {
		var lfToken = jQuery.cookie('lfdata');

		// Check to see if our lfdata cookie contains a token and log the user in if so
		if( ( typeof lfToken !== 'undefined' ) && ( lfToken !== null ) ) {
			authenticate({livefyre: lfToken});
		}
	}
};


/**
 * Setup our Livefyre auth integration
 */
Livefyre.require(['auth'], function (auth) {

	// Provide our global auth delegate
	auth.delegate( vbAuthDelegate );


	/**
	 * If Livefyre recognizes the user, check to make sure we do too
	 * If not, force the user to logout
	 */
	if( auth.isAuthenticated() ) {
		var lfToken = jQuery.cookie('lfdata');

		// Check to see if our lfdata cookie exists or is empty
		if( ( typeof lfToken === 'undefined' ) || ( lfToken === null ) ) {
			lf_force_logout = true;
			auth.logout();
		}
	}

});


/**
 * Define a re-usable Livefyre Network Config object
 * Since this is global, it's usable in all Livefyre.require() calls
 */
var vbNetworkConfig = {
	network: vb_config.networkConfig.network
};


/**
 * If we have LiveComments enabled on this page,
 *		 require and instantiate a comments widget using the provided config
 */
if( typeof lfConvConfig !== 'undefined' ) {
Livefyre.require(['fyre.conv#3'], function (Conv) {

	// Initiate the comments widget
		new Conv(vbNetworkConfig, [lfConvConfig], function(widget) {

			// Check for Segment's library
			// Hook into Livefyre events for tracking comment-related events
			if( typeof( analytics ) !== 'undefined' ) {
				analytics.ready(function(){

						widget.on('commentPosted', function (data) {
								analytics.track('Posted Comment', {
									category: 'User Actions',
									url: window.location.href,
									property: 'vbnews'
								})
						});

						widget.on('commentFlagged', function (data) {
								analytics.track('Flagged Comment', {
									category: 'User Actions',
									url: window.location.href,
									property: 'vbnews',
									label: data.type // The type of comment flag
								})
						});

						widget.on('commentLiked', function (data) {
								analytics.track('Liked Comment', {
									category: 'User Actions',
									url: window.location.href,
									property: 'vbnews'
								})
						});

				})

			}


		});
});
}


/**
 * Define a Comment Count 'replacer'
 * This ensures that the format matches what we want output on our site
 * We just use the simple number count, no text
 */
if( typeof LF !== 'undefined' ) {
LF.CommentCount({
		replacer: function(element, count) {
				element.innerHTML = count;
		}
});
}


function lfBuildUserServiceUrl( path, referrer ) {
	var userURL = '';

	// Try to set the user service URL based on a global config object
	if( ( typeof( vbSettings ) !== 'undefined' ) && ( typeof( vbSettings.userServiceUrl ) !== 'undefined' ) ) {
		userURL += vbSettings.userServiceUrl;
	} else {
		userURL += 'https://users.venturebeat.com';
	}

	// Append the provided path to our URL
	userURL += path;

	// If we want to provide the referrer, append that
	if( referrer ) {
		userURL += '?ref='+ encodeURIComponent( window.location.href );
	}

	// Return the generated URL
	return userURL;
}
