'use strict';
/**
 * Define a single object to contain our tracking methods and helpers.
 */
var vbTracking = {

  /**
   * Have we already identified the user on this page?
   *
   * Helps prevent wasting event calls to identify a user multiple times.
   * See the doIdentify() method below.
   */
  identified: false,

  /**
   * Did this user just register?
   *
   * Allows us to easily trigger 'Register' events right after a user registers.
   * See the trackRegistered() and trackLogin() methods below.
   */
  registered: false,


  /**
   * Run operations at 'onReady'.
   *
   * Sets up event handlers to track actions as they happen.
   */
  onReady: function() {

    // Call a page track first
    analytics.page({ path: window.location.pathname });


    // Triggered onReady when a logged-in user is present
    jQuery( window ).on('vbUserIdentify', vbTracking.trackIdentify );

    // Triggered when a user submits the registration form
    jQuery( window ).on('vbUserRegister', vbTracking.trackRegister );

    // Triggered when a user successfully logs in
    jQuery( window ).on('vbUserLogin', vbTracking.trackLogin );

    // Triggered when a user successfully logs out
    jQuery( window ).on('vbUserLogout', vbTracking.trackLogout );



    // Link click tracking
    analytics.trackLink( jQuery('a.vb-gigya-login'), 'Clicked Login', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackLink( jQuery('a.vb-gigya-register'), 'Clicked Register', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackLink( jQuery('a.vb-gigya-logout'), 'Clicked Logout', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackLink( jQuery('a.vb-gigya-view-account'), 'Clicked Account', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackLink( jQuery('a.vb-gigya-forgot-password'), 'Clicked Forgot Password', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackLink( jQuery('a.delete-account'), 'Clicked Delete Account', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackLink( jQuery('a.edit-avatar'), 'Clicked Edit Avatar', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });


    // Click tracking on main menu
    analytics.trackLink( jQuery('nav.navbar a'), 'Clicked Main Menu', function( el ){
      return {
        link: jQuery(el).text(),
        category: 'Navigation',
        url: window.location.href,
        property: vbSettings.property
      };
    });

    // Click tracking on story tags
    analytics.trackLink( jQuery('.article-tags a'), 'Clicked Tag', function( el ){
      return {
        link: jQuery(el).text(),
        category: 'Navigation',
        url: window.location.href,
        property: vbSettings.property
      };
    });

    // Form submission tracking

    // Universal search form
    analytics.trackForm( jQuery('form[role="search"]'), 'Searched', function( el ){
      return {
        category: 'User Actions',
        label: 'page',
        url: window.location.href,
        search_term: jQuery(el).find('input[name="s"]').val(),
        property: vbSettings.property
      };
    });


    // Form submission tracking for Newsletter Subscriptions
    analytics.trackForm(jQuery('form#mc-embedded-subscribe-form'), 'Subscribed to Newsletters', {
      category: 'User Actions',
      label: 'page',
      url: window.location.href,
      property: vbSettings.property
    });


    // User Service related
    analytics.trackForm( jQuery('#form-edit-account'), 'Updated Profile', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackForm( jQuery('#form-change-password'), 'Changed Password', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackForm( jQuery('#form-add-card'), 'Added Credit Card', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackForm( jQuery('#form-update-card'), 'Updated Credit Card', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackForm( jQuery('#form-remove-card'), 'Removed Credit Card', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackForm( jQuery('#form-reset-password-request'), 'Requested Password Reset', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });
    analytics.trackForm( jQuery('#form-reset-password'), 'Reset Password', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });

  },


  /**
   * Perform a Segment 'identify' for the given user object
   */
  doIdentify: function( user ) {
    // If for some reason there is no user object, return now
    if( 'undefined' === typeof user ) {
      return false;
    }

    // Only identify the user if they are logged in
    if( user.status !== 'OK' ) {
      return false;
    }

    // Make sure we don't identify a user more than once on a page
    if( vbTracking.identified ) {
      return false;
    }

    analytics.identify(user.UID, {
      firstName: user.profile.firstName,
      lastName: user.profile.lastName,
      email: user.profile.email,
      age: user.profile.age,
      username: user.data.username
    });

    // Mark that we've identified the user
    vbTracking.identified = true;

  },


  /**
   * Identify the user on page load
   *
   * This helps ensure that all actions triggered on a page are linked properly.
   */
  trackIdentify: function( eventObject, user ) {

    vbTracking.doIdentify( user );

  },


  /**
   * Track Register actions
   */
  trackRegister: function() {

    /**
     * All we do is mark that the user just registered,
     * since Gigya logs a user in immediately upon registration
     * the Login call will run and we change it to a 'Register' call.
     */
    vbTracking.registered = true;

  },


  /**
   * Track Login actions
   */
  trackLogin: function( eventObject, user ) {
    // Define a default 'login provider'
    var provider = 'email';

    // By default this is a login action
    var action = 'Logged In';

    // If for some reason there is no user object, return now
    if( 'undefined' === typeof user ) {
      return false;
    }

    /*
     * Unset our identify track so we can re-identify on-login
     * Set the 'status' value for the user object so the user is properly identified
     * Lastly. Identify the user with their account
     */
    vbTracking.identified = false;
    user.status = 'OK';
    vbTracking.doIdentify( user );

    // If Gigya provided us a login provider, use that
    if( user.provider.length > 0 ) {
      provider = user.provider;
    }

    /**
     * If the user just registered,
     * track that action instead of a login
     */
    if( vbTracking.registered ) {
      action = 'Signed Up';

      // Unset our flag now that we've used it
      vbTracking.registered = false;
    }

    // Track the Login action
    analytics.track( action, {
      category: 'User Actions',
      label: provider,
      url: window.location.href,
      property: vbSettings.property
    });

  },


  /**
   * Track Logout actions
   */
  trackLogout: function() {

    // Track the Logout action
    analytics.track('Logged Out', {
      category: 'User Actions',
      url: window.location.href,
      property: vbSettings.property
    });

    // Reset Segment identified user
    if( typeof( analytics.reset ) !== 'undefined' ) {
      analytics.reset();
    }

    /**
     * Since the user logged out
     * allow them to be identified on login again
     */
    vbTracking.identified = false;

  },

};

/**
 * Initialize our vbTracking object and handlers 'onReady'
 */
jQuery(document).ready(function() {

  if( ( typeof(vbSettings) !== 'undefined' ) && ( typeof(vbSettings.segmentKey) !== 'undefined' ) ) {
    // Init Segment library
    /* jshint ignore:start */
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.0.1";
      analytics.load(vbSettings.segmentKey);
    }}();
    /* jshint ignore:end */

    // Load up our tracking handlers
    vbTracking.onReady();
  }

});

jQuery(document).ready(function() {
	// make sure the vb_page_info and _qevents objects are available before trying to use them
	if( typeof( vb_page_info ) !== 'undefined' ) {
		if( typeof( _qevents ) !== 'undefined' ) {
			// Define labels var so we can append to it
			var vb_labels = '';
			var i;
			// Generate the labels for single pages
			if( vb_page_info.page_type === 'single' ) {
			// set the Channel label
				if(  typeof vb_page_info.channel !== 'undefined' ) {
					vb_labels += 'Channel.'+vb_page_info.channel;
				}
				// set the Tag label(s)
				for(i = 0; i < vb_page_info.tags.length; i++) {
					// Check to see if we need to prepend a comma
						if( vb_labels.length > 0 ) {
							vb_labels += ',';
						}
					vb_labels += 'Tag.'+vb_page_info.tags[i];
				}
				// set the Author label(s)
				for(i = 0; i < vb_page_info.authors.length; i++) {
					// Check to see if we need to prepend a comma
					if( vb_labels.length > 0 ) {
						vb_labels += ',';
					}
					vb_labels += 'Author.'+vb_page_info.authors[i];
				}
			}
			// Push the labels, if we have any
			// Otherwise, just push a generic event
			if( vb_labels.length > 0 ) {
				_qevents.push({
					qacct:'p-UkS7f9ZMSZ6hP',
					labels:vb_labels
				});
			} else {
				_qevents.push({
					qacct:'p-UkS7f9ZMSZ6hP'
				});
			}
		}
		// triggered from vb-gallery.js
		jQuery(document).on("trackingImageGalleryItem", {}, function(galleryName, imageName){
			if( typeof( analytics) !== 'undefined' ) {
				var imgAttribs = {
					'Image Title': imageName,
					'Gallery Name': galleryName,
				};
				var trackingAttribs = jQuery.merge(imgAttribs, vb_page_info);
				analytics.ready(function(){
					analytics.track('Image Gallery Item', trackingAttribs);
				});
			}
		});
	} // end if vb_page_info defined
});
