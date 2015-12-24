// This file was automatically generated from home_badge_drop_down_inbox_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.containerEnd');
goog.provide('home.nav.drop.down.containerStart');
goog.provide('home.nav.drop.down.generic');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.renderIconElement');
goog.require('jive.shared.soy.render');


home.nav.drop.down.generic = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.objDescriptor) {
    jive.shared.soy.render({templateName: 'home.nav.drop.down.' + opt_data.objDescriptor, data: (function() { var map = {}; var pairs = [['activityContainer', opt_data.activityContainer], ['user', opt_data.user]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
  } else {
    if (opt_data.activityContainer.activityList.length > 0) {
      home.nav.drop.down.containerStart(opt_data, output);
      var activity__soy13 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
      if (! activity__soy13.content.deleted) {
        jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy13.activityUser, {size: 32, hideLink: true, anonymous: activity__soy13.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
      }
      output.append('<div class="font-color-meta">');
      jive.eae.common.activityAuthor({object: activity__soy13.content, type: activity__soy13.content.deleted ? opt_data.activityContainer.jiveObject.objectType : activity__soy13.type, activityUser: activity__soy13.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy13.content.deleted}, output);
      output.append(' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime), '</div><div class="title font-color-link">');
      if (opt_data.activityContainer.jiveObject.activityIcon) {
        jive.shared.displayutil.renderIconElement({icon: opt_data.activityContainer.jiveObject.activityIcon}, output);
      } else {
        output.append('<span class="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.jiveObjectCSS), '"></span>');
      }
      output.append((opt_data.activityContainer.jiveObject.subjectIsHtml) ? soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.htmlSubject) : soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div>');
      home.nav.drop.down.containerEnd(null, output);
    }
  }
  return opt_sb ? '' : output.toString();
};


home.nav.drop.down.containerStart = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/inbox?objectType=' + opt_data.activityContainer.jiveObject.objectType + '&objectID=' + opt_data.activityContainer.jiveObject.id))), '" id="homeNavCommItem_', opt_data.activityContainer.jiveObject.objectType, '_', opt_data.activityContainer.jiveObject.id, '" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal clearfix">');
  return opt_sb ? '' : output.toString();
};


home.nav.drop.down.containerEnd = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('</a></li>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.idea');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');


home.nav.drop.down.idea = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    var activity__soy6 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    if (! activity__soy6.content.deleted) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy6.activityUser, {size: 32, hideLink: true, anonymous: activity__soy6.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
    }
    output.append('<div class="font-color-meta">');
    jive.eae.common.activityAuthor({object: activity__soy6.content, type: activity__soy6.content.deleted ? opt_data.activityContainer.jiveObject.objectType : activity__soy6.type, activityUser: activity__soy6.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy6.content.deleted}, output);
    output.append(' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime), '</div><div class="title font-color-link"><span class="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.jiveObjectCSS), '"></span>', soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.share');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');


home.nav.drop.down.share = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    var activity__soy6 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    if (! activity__soy6.content.deleted) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy6.activityUser, {size: 32, hideLink: true, anonymous: activity__soy6.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
    }
    output.append('<div class="font-color-meta">');
    jive.eae.common.activityAuthor({object: activity__soy6.content, type: 'share', activityUser: activity__soy6.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy6.content.deleted}, output);
    output.append(' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime), '</div><div class="title font-color-link"><span class="jive-icon-med jive-icon-share-label"></span>', soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.document');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');


home.nav.drop.down.document = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    var activity__soy5 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    output.append('<li><a ', (opt_data.activityContainer.activityList[0] && opt_data.activityContainer.activityList[0].content.commentContentResource && opt_data.activityContainer.activityList[0].content.commentContentResource.objectType == 129) ? 'href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/inbox?objectType=129&objectID=' + opt_data.activityContainer.jiveObject.id))) + '" ' : 'href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/inbox?objectType=' + opt_data.activityContainer.jiveObject.objectType + '&objectID=' + opt_data.activityContainer.jiveObject.id))) + '" ', 'id="homeNavCommItem_', (opt_data.activityContainer.activityList[0] && opt_data.activityContainer.activityList[0].content.commentContentResource && opt_data.activityContainer.activityList[0].content.commentContentResource.objectType == 129) ? '129' : opt_data.activityContainer.jiveObject.objectType, '_', opt_data.activityContainer.jiveObject.id, '" class="j-comm-entry j-js-ibx-item j-act-unread font-color-normal">');
    if (! activity__soy5.content.deleted) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy5.activityUser, {size: 32, hideLink: true, anonymous: activity__soy5.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
    }
    output.append('<div class="font-color-meta">');
    jive.eae.common.activityAuthor({object: activity__soy5.content, type: activity__soy5.content.deleted ? opt_data.activityContainer.jiveObject.objectType : activity__soy5.type, activityUser: activity__soy5.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy5.content.deleted}, output);
    output.append(' ', (activity__soy5.type != 'notification') ? soy.$$escapeHtml(opt_data.activityContainer.parentTime) : '', '</div><div class="title font-color-link"><span title=\'', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.document'),[])), '\' role=\'img\' class="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.jiveObjectCSS), '"></span>', soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div></a></li>');
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

goog.provide('jive.rtc.dateSeparator');
goog.provide('jive.rtc.defaultSubject');
goog.provide('jive.rtc.deleteCommentConfirm');
goog.provide('jive.rtc.deleteDMConfirm');
goog.provide('jive.rtc.errorMessage');
goog.provide('jive.rtc.interaction');
goog.provide('jive.rtc.interactionGrouping');
goog.provide('jive.rtc.interactionsContainer');
goog.provide('jive.rtc.leaveConversationConfirm');
goog.provide('jive.rtc.subject');
goog.provide('jive.rtc.subjectEditForm');
goog.provide('jive.rtc.subjectText');
goog.provide('jive.rtc.xPeopleLink');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.common.groupedUsers');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.renderGuestDisplayName');
goog.require('jive.shared.displayutil.userDisplayName');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.i18nHelper');


jive.rtc.interactionsContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-rtc-interactions js-rtc-interactions">');
  if (opt_data.interactionGroupingList && opt_data.interactionGroupingList.length) {
    var interactionGroupingList6 = opt_data.interactionGroupingList;
    var interactionGroupingListLen6 = interactionGroupingList6.length;
    for (var interactionGroupingIndex6 = 0; interactionGroupingIndex6 < interactionGroupingListLen6; interactionGroupingIndex6++) {
      var interactionGroupingData6 = interactionGroupingList6[interactionGroupingIndex6];
      jive.rtc.interactionGrouping(soy.$$augmentMap(interactionGroupingData6, {renderLocation: opt_data.renderLocation}), output);
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.dateSeparator = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-rtc-date-separator j-act-majorDate font-color-meta">', soy.$$escapeHtml(opt_data.dateString), '</div>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.interactionGrouping = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-interaction-grouping j-act-comment">');
  if (opt_data.showDateOfGroup) {
    jive.rtc.dateSeparator({dateString: opt_data.interactionList[0].publishedCalendarDate}, output);
  }
  output.append('<div class="j-act-avatar">');
  jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.actor, {size: 46, avatarID: opt_data.actor.thumbnailId}), output);
  output.append('</div><div class="j-author-act js-author-act" data-author-id="', soy.$$escapeHtml(opt_data.actor.id), '">');
  if (! opt_data.actor.anonymous) {
    jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.actor, {displayNameOverride: opt_data.user.id == opt_data.actor.id ? jive.i18n.i18nText(jive.i18n.getMsg('global.you'),[]) : ''}), output);
  } else {
    jive.shared.displayutil.renderGuestDisplayName({message: opt_data.actor}, output);
  }
  output.append('</div>');
  var interactionList36 = opt_data.interactionList;
  var interactionListLen36 = interactionList36.length;
  for (var interactionIndex36 = 0; interactionIndex36 < interactionListLen36; interactionIndex36++) {
    var interactionData36 = interactionList36[interactionIndex36];
    jive.rtc.interaction(soy.$$augmentMap(interactionData36, {selectedInteractionID: opt_data.selectedInteractionID, viewingUserAuthored: opt_data.user.id == opt_data.actor.id, renderLocation: opt_data.renderLocation}), output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.interaction = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-rtc-interaction js-rtc-interaction clearfix', (opt_data.selectedInteractionID && opt_data.selectedInteractionID == opt_data.id) ? ' selected' : '', '" data-id="', soy.$$escapeHtml(opt_data.id), '" data-ts="', soy.$$escapeHtml(opt_data.published), '"><div class="j-rtc-interaction-text">', soy.$$filterNoAutoescape(opt_data.content.text), '</div><div class="j-rtc-interaction-timestamp font-color-meta">', (opt_data.renderLocation == 'inbox' && ! opt_data.rtcEnabled && opt_data.currentUserMentionedInObject) ? '<span class="jive-icon-sml jive-icon-mention"></span>' : '', (opt_data.collabID) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl('/collaborations/' + opt_data.collabID + '/' + opt_data.id)) + '">' + soy.$$escapeHtml(opt_data.publishedTime) + '</a>' : soy.$$escapeHtml(opt_data.publishedTime), (opt_data.renderLocation == 'permalink' && ! opt_data.rtcEnabled && opt_data.viewingUserAuthored) ? '<a href="#" class="js-rtc-dm-delete j-rtc-dm-delete" aria-label="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.delete'),[])) + '" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.delete'),[])) + '"><span class="jive-icon-sml jive-glyph-delete"></span></a>' : '', '</div></div>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.subject = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-rtc-subject-container j-act-title j-fixed-title clearfix">');
  jive.rtc.subjectText(opt_data, output);
  output.append((opt_data.collabType != 'INDIVIDUAL') ? '<a href="#" class="js-rtc-subject-edit-save j-act-editSubject"><span class="j-save j-btn-global j-btn-callout">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.save'),[])) + '</span></a>' : '', '<img src="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.3.0/','','/images/jive-icon-working-16x16.gif')), '" class="j-rtc-spinner js-rtc-spinner" width="16" height="16" border="0" style="display:none;"/></div>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.subjectText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.collabType == 'INDIVIDUAL') {
    if (opt_data.plainText) {
      if (opt_data.users[0]) {
        jive.shared.displayutil.userDisplayName(opt_data.users[0], output);
        output.append(' ');
      }
      output.append(' : ', (opt_data.users[1]) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.you'),[])) : '');
    } else {
      output.append('<span class="title js-rtc-subject-text" role="heading">');
      if (opt_data.users[0]) {
        jive.shared.displayutil.userDisplayNameLink(opt_data.users[0], output);
        output.append(' ');
      }
      output.append((opt_data.collabID) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl('/collaborations/' + opt_data.collabID)) + '">' : '', (opt_data.collabID) ? '</a>' : '');
      if (opt_data.users[1]) {
        output.append('+');
        jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.users[1], {displayNameOverride: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.you'),[]))}), output);
      }
      output.append('</span>');
    }
  } else {
    if (opt_data.subject) {
      if (opt_data.plainText) {
        output.append(soy.$$filterNoAutoescape(opt_data.subject));
      } else {
        output.append((opt_data.collabID) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl('/collaborations/' + opt_data.collabID)) + '" class="title js-rtc-subject-text noParticipantShowing" role="heading">' : '<span class="title js-rtc-subject-text noParticipantShowing" role="heading">', '<span title="', soy.$$escapeHtml(opt_data.subject), '" class="j-rtc-subject-text">', soy.$$filterNoAutoescape(opt_data.subject), '</span>', (opt_data.collabID) ? '</a>' : '</span>');
        if (opt_data.users.length > 1) {
          output.append('<span class="js-with-x-people j-with-x-people">');
          jive.rtc.xPeopleLink(opt_data, output);
          output.append('</span>');
        }
      }
    } else {
      output.append((! opt_data.plainText) ? '<span class="title js-rtc-subject-text" role="heading">' : '');
      jive.rtc.defaultSubject(opt_data, output);
      output.append((! opt_data.plainText) ? '</span>' : '');
    }
  }
  return opt_sb ? '' : output.toString();
};


jive.rtc.defaultSubject = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param179 = new soy.StringBuilder();
  jive.eae.common.groupedUsers({groupedUserList: opt_data.users, groupAfterNum: 2, user: opt_data.viewingUser, hideLinks: opt_data.plainText}, param179);
  jive.shared.soy.i18nHelper({i18nKey: 'rtc.subject.default', arg0: (! opt_data.plainText && opt_data.collabID) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl('/collaborations/' + opt_data.collabID)) + '" class="" role="heading">' : '', arg1: (! opt_data.plainText && opt_data.collabID) ? '</a>' : '', arg2: param179.toString(), noAutoEscape: true}, output);
  return opt_sb ? '' : output.toString();
};


jive.rtc.subjectEditForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form class="js-rtc-subject-edit-controls j-rtc-subjectForm j-form"><label for="rtc-subject-edit-', soy.$$escapeHtml(opt_data.objectId), '" class="j-508-label"></label><input type="text" size="40" maxlength="255" class="js-rtc-subject-edit-input j-rc3" placeholder="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('rtc.subject.edit.placeholder'),[])), '" value="', soy.$$filterNoAutoescape(opt_data.subject), '" id="rtc-subject-edit-', soy.$$escapeHtml(opt_data.objectId), '" autocomplete="off"/></form>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.xPeopleLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href=\'#\' class="js-show-grouped-users j-act-showParticipants font-color-meta-light"><span class="jive-icon-med jive-icon-participants"></span>', (opt_data.users.length == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('rtc.subject.count.participant'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('rtc.subject.count.participants'),[opt_data.users.length])), '</a><div class="js-grouped-users-popover j-grouped-users-popover" style="display:none"><ul class="j-grouped-user-list j-simple-list">');
  var groupedUserList206 = opt_data.users;
  var groupedUserListLen206 = groupedUserList206.length;
  for (var groupedUserIndex206 = 0; groupedUserIndex206 < groupedUserListLen206; groupedUserIndex206++) {
    var groupedUserData206 = groupedUserList206[groupedUserIndex206];
    if (((groupedUserData206.displayName).match(new RegExp('^__invited__', '')) || []).length) {
      output.append(soy.$$escapeHtml(groupedUserData206.email));
    } else if (! groupedUserData206.anonymous) {
      output.append('<li class="j-grouped-user">');
      jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(groupedUserData206, {displayNameOverride: (opt_data.viewingUser && opt_data.viewingUser.id == groupedUserData206.id) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.you'),[])) : ''}), output);
      output.append('</li>');
    } else {
      output.append('<li class="j-grouped-user">');
      jive.shared.displayutil.renderGuestDisplayName({message: groupedUserData206}, output);
      output.append('</li>');
    }
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.leaveConversationConfirm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal jive-modal-narrow" id="jive-modal-leave-convo"><header><h2 class="jive-modal-title jive-modal-title-leave-convo">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.leave.conversation'),[])), '</h2></header><a href="#" class="j-modal-close-top close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '<span class="j-close-icon j-ui-elem" role="img"></span></a><div class="jive-modal-content jive-modal-leave-convo clearfix"><p><span class="jive-icon-med jive-icon-warn"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('rtc.leave.conversation.confirm.text'),[])), '</p><div class="jive-form-buttons"><input id="submit-button" type="submit" class="j-btn-callout" name="delete" value="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.leave.conversation'),[])), '"><input id="close-button" type="submit" class="jive-modal-close close" value="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.cancel'),[])), '"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.deleteDMConfirm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal jive-modal-narrow" id="jive-modal-delete-dm"><header><h2 class="jive-modal-title jive-modal-title-delete-dm">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('we.delete_directmessage.title'),[])), '</h2></header><a href="#" class="j-modal-close-top close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '<span class="j-close-icon j-ui-elem" role="img"></span></a><div class="jive-modal-content jive-modal-delete-dm clearfix"><p><span class="jive-icon-med jive-icon-warn"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('we.del_directmessage.confirm.text'),[])), '</p><div class="jive-form-buttons"><input id="submit-button" type="submit" class="j-btn-callout" name="delete" value="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('we.del.delete_directmessage.button'),[])), '"><input id="close-button" type="submit" class="jive-modal-close close" value="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.cancel'),[])), '"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.deleteCommentConfirm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal jive-modal-narrow" id="jive-modal-delete-comment"><header><h2 class="jive-modal-title jive-modal-title-delete-comment">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('we.delete.comment'),[])), '</h2></header><a href="#" class="j-modal-close-top close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '<span class="j-close-icon j-ui-elem" role="img"></span></a><div class="jive-modal-content jive-modal-delete-dm clearfix"><p><span class="jive-icon-med jive-icon-warn"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('we.delete.comment.confirm_del'),[])), '</p><div class="jive-form-buttons"><input id="submit-button" type="submit" class="j-btn-callout" name="delete" value="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('we.delete.comment.button'),[])), '"><input id="close-button" type="submit" class="jive-modal-close close" value="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.cancel'),[])), '"></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.rtc.errorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="font-color-meta j-rtc-error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.key),[])), '</span>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.rtc');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.rtc.subjectText');
goog.require('jive.shared.displayutil.avatar');


home.nav.drop.down.rtc = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    var activity__soy6 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    var latestInteraction__soy7 = opt_data.activityContainer.jiveObject.latestInteraction;
    var latestAuthor__soy8 = latestInteraction__soy7 ? latestInteraction__soy7.author : opt_data.activityContainer.originalAuthor;
    if (! activity__soy6.content.deleted) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(latestAuthor__soy8, {size: 32, anonymous: latestAuthor__soy8.anonymous, currentUserPartner: opt_data.user.partner, hideLink: true, avatarID: latestAuthor__soy8.avatarID}), output);
    }
    output.append('<div class="font-color-meta">');
    jive.eae.common.activityAuthor({object: opt_data.activityContainer.jiveObject, type: '', activityUser: latestAuthor__soy8, displayAuthorLink: false, hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy6.content.deleted}, output);
    output.append(' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime), '</div><div class="title font-color-link">');
    if (opt_data.activityContainer.jiveObject.roomType == 'INDIVIDUAL') {
      output.append(soy.$$escapeHtml(latestAuthor__soy8.displayName), ' <span class="jive-icon-direct-message-1-1-label jive-icon-med"></span>', (latestAuthor__soy8.id == opt_data.user.id) ? soy.$$escapeHtml(opt_data.activityContainer.jiveObject.participants[0].displayName) : soy.$$escapeHtml(opt_data.user.displayName));
    } else {
      output.append(' <span class="jive-icon-direct-message jive-icon-med" role="img"></span>');
      jive.rtc.subjectText({users: opt_data.activityContainer.jiveObject.participants, viewingUser: opt_data.user, subject: opt_data.activityContainer.jiveObject.subject, plainText: true, collabType: opt_data.activityContainer.jiveObject.roomType}, output);
    }
    output.append('</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.bookmark');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');


home.nav.drop.down.bookmark = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    var activity__soy6 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    if (! activity__soy6.content.deleted) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy6.activityUser, {size: 32, hideLink: true, anonymous: activity__soy6.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
    }
    output.append('<div class="font-color-meta">');
    jive.eae.common.activityAuthor({object: activity__soy6.content, type: activity__soy6.type, activityUser: activity__soy6.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy6.content.deleted}, output);
    output.append(' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime), '</div><div class="title font-color-link"><span title=\'', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.bookmark'),[])), '\' role=\'img\' class="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.jiveObjectCSS), '"></span>', soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.tileActivity');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');


home.nav.drop.down.tileActivity = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    var activity__soy5 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    home.nav.drop.down.containerStart(opt_data, output);
    if (! activity__soy5.content.deleted) {
      if (! activity__soy5.content.typeTileStreamEntry) {
        jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy5.activityUser, {size: 22, anonymous: activity__soy5.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
      } else {
        output.append('<img class="jive-avatar" src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(activity__soy5.content.tile.icons.size48.url)), '" width="22" height="22"/>');
      }
    }
    output.append('<div class="font-color-meta">');
    jive.eae.common.activityAuthor({object: activity__soy5.content, type: activity__soy5.content.deleted ? opt_data.activityContainer.jiveObject.objectType : activity__soy5.type, activityUser: activity__soy5.content.typeTileStreamEntry ? activity__soy5.content.tile : activity__soy5.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy5.content.deleted}, output);
    output.append(' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime), '</div><div class="title font-color-link">', soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.latestAcclaim');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');


home.nav.drop.down.latestAcclaim = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    output.append('<div class="j-badge-oneliner font-color-link"><span title=\'', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.activityContainer.jiveObject.objectType),[])), '\' role=\'img\' class="jive-icon-big jive-icon-acclaim acticon"></span><span class="title">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.acclaim.group.header'),[])), ': </span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.acclaim.group.subhead'),[])), '</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.notifications');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');


home.nav.drop.down.notifications = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  home.nav.drop.down.containerStart(opt_data, output);
  output.append('<div class="j-badge-oneliner font-color-link"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.activityContainer.jiveObject.name),[])), '" role="img" class="jive-icon-big ', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.iconClass), ' acticon"></span><span class="title">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.activityContainer.jiveObject.name),[])), '</span></div>');
  home.nav.drop.down.containerEnd(null, output);
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.statusUpdate');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.renderIconElement');


home.nav.drop.down.statusUpdate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    var activity__soy6 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    if (! activity__soy6.content.deleted) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy6.activityUser, {size: 32, hideLink: true, anonymous: activity__soy6.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
    }
    output.append('<div class="font-color-meta">');
    jive.eae.common.activityAuthor({object: activity__soy6.content, type: activity__soy6.content.deleted ? opt_data.activityContainer.jiveObject.objectType : activity__soy6.type, activityUser: activity__soy6.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy6.content.deleted}, output);
    output.append(' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime), '</div><div class="title font-color-link">');
    if (opt_data.activityContainer.jiveObject.activityIcon) {
      jive.shared.displayutil.renderIconElement({icon: opt_data.activityContainer.jiveObject.activityIcon}, output);
    } else {
      output.append('<span title=\'', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.status'),[])), '\' role=\'img\' class="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.jiveObjectCSS), '"></span>');
    }
    output.append((opt_data.activityContainer.jiveObject.subjectIsHtml) ? soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.htmlSubject) : soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.video');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');


home.nav.drop.down.video = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    var activity__soy6 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    if (! activity__soy6.content.deleted) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy6.activityUser, {size: 32, hideLink: true, anonymous: activity__soy6.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
    }
    output.append('<div class="font-color-meta">');
    jive.eae.common.activityAuthor({object: activity__soy6.content, type: activity__soy6.content.deleted ? opt_data.activityContainer.jiveObject.objectType : activity__soy6.type, activityUser: activity__soy6.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy6.content.deleted}, output);
    output.append(' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime), '</div><div class="title font-color-link"><span class="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.jiveObjectCSS), '"></span>', soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.announcement');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');


home.nav.drop.down.announcement = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    output.append('<div class="j-badge-oneliner"><span title=\'', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.announcement'),[])), '\' role=\'img\' class="jive-icon-big jive-icon-announcement acticon"></span><span class="jive-alert-announcement-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('anncmt.announcement.gtitle'),[])), ':</span> <span class="title">', soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</span></div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.app');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.renderIconElement');


home.nav.drop.down.app = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    var activity__soy5 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    output.append('<li><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/inbox?objectType=' + opt_data.activityContainer.jiveObject.objectType + '&objectID=' + opt_data.activityContainer.jiveObject.id))), '" ', (opt_data.activityContainer.jiveObject.extraData && opt_data.activityContainer.jiveObject.extraData.appID) ? 'id="homeNavCommItem_' + opt_data.activityContainer.jiveObject.objectType + '_' + opt_data.activityContainer.jiveObject.id + '_1400_' + soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.extraData.appID) + '"' : 'id="homeNavCommItem_' + opt_data.activityContainer.jiveObject.objectType + '_' + opt_data.activityContainer.jiveObject.id + '_' + soy.$$escapeHtmlAttribute(opt_data.activityContainer.container.type) + '_' + soy.$$escapeHtmlAttribute(opt_data.activityContainer.container.id) + '"', ' class="j-comm-entry j-js-ibx-item j-act-unread', (opt_data.activityContainer.lastMentionTime != '0') ? ' j-mentioned' : '', ' font-color-normal clearfix">');
    if (! activity__soy5.content.deleted) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy5.activityUser, {size: 32, hideLink: true, anonymous: activity__soy5.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
    }
    if (activity__soy5.content && activity__soy5.content.verb == 'uri:jiveName:app_install') {
      output.append('<div class="font-color-meta">', soy.$$escapeHtml(activity__soy5.activityUser.displayName), ' ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.installed'),[])), ' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime), '</div>');
    } else {
      output.append('<div class="font-color-meta">');
      if (activity__soy5.content.verb == 'post') {
        output.append(soy.$$escapeHtml(activity__soy5.content.plainSubjectSnippet), ' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime));
      } else {
        jive.eae.common.activityAuthor({object: activity__soy5.content, type: activity__soy5.content.deleted ? opt_data.activityContainer.jiveObject.objectType : activity__soy5.type, activityUser: activity__soy5.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy5.content.deleted}, output);
        output.append(' ', soy.$$escapeHtml(opt_data.activityContainer.parentTime));
      }
      output.append('</div>');
    }
    output.append('<div class="title font-color-link">');
    if (opt_data.activityContainer.jiveObject.activityIcon) {
      jive.shared.displayutil.renderIconElement({icon: opt_data.activityContainer.jiveObject.activityIcon}, output);
    } else {
      output.append('<span class="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.jiveObjectCSS), '"></span>');
    }
    output.append((opt_data.activityContainer.jiveObject.subjectIsHtml) ? soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.htmlSubject) : soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div></a></li>');
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.mention');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.userDisplayName');
goog.require('jive.shared.soy.i18nHelper');


home.nav.drop.down.mention = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    var activity__soy6 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    var mentionActivity__soy7 = new soy.StringBuilder('<div class="title font-color-link"><span title=\'', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.mention'),[])), '\' role=\'img\' class="', soy.$$escapeHtml(activity__soy6.content.context.jiveObjectCSS), '"></span>', soy.$$filterNoAutoescape(activity__soy6.content.context.name), '</div>');
    mentionActivity__soy7 = mentionActivity__soy7.toString();
    jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy6.activityUser, {size: 32, hideLink: true, currentUserPartner: opt_data.user.partner}), output);
    if (activity__soy6.content.mentionedObject.objectType == 3) {
      output.append('<div class="font-color-meta">');
      var param24 = new soy.StringBuilder();
      jive.shared.displayutil.userDisplayName(activity__soy6.activityUser, param24);
      jive.shared.soy.i18nHelper({i18nKey: 'eae.mention.at.you.in', arg0: param24.toString(), arg1: mentionActivity__soy7, noAutoEscape: true}, output);
      output.append('</div>');
    } else {
      output.append((opt_data.activityContainer.jiveObject.typeDirectMessage) ? '<span class="jive-icon-med jive-icon-direct-message-label" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.direct_message.label'),[])) + '"></span>' : (opt_data.activityContainer.jiveObject.typeShare) ? '<span class="jive-icon-med jive-icon-share-label" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.label'),[])) + '"></span>' : '', '<div class="font-color-meta">');
      var mentionKey__soy41 = new soy.StringBuilder((activity__soy6.content.mentionedObject.objectType == 4 || activity__soy6.content.mentionedObject.objectType == 14) ? 'eae.mention.at.item.in.place' : 'eae.mention.at.item.in.content');
      mentionKey__soy41 = mentionKey__soy41.toString();
      var param48 = new soy.StringBuilder();
      jive.shared.displayutil.userDisplayName(activity__soy6.activityUser, param48);
      jive.shared.soy.i18nHelper({i18nKey: mentionKey__soy41, arg0: param48.toString(), arg1: soy.$$escapeHtml(activity__soy6.content.mentionedObject.name), arg2: mentionActivity__soy7, noAutoEscape: true}, output);
      output.append('</div>');
    }
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.collaboratorNotification');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.userDisplayName');


home.nav.drop.down.collaboratorNotification = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.activityContainer.activityList[0].activityUser, {size: 32, hideLink: true, hideTooltip: true}), output);
    output.append('<div class="font-color-meta">');
    jive.shared.displayutil.userDisplayName(opt_data.activityContainer.activityList[0].activityUser, output);
    output.append(' ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.collabAdded'),[])), '</div><div class="title font-color-link"><span class="', soy.$$escapeHtml(opt_data.activityContainer.activityList[0].content.templateData.objData.iconCSS), '"></span>', soy.$$escapeHtml(opt_data.activityContainer.activityList[0].content.templateData.objData.displayName), '</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.discussion');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');
goog.require('jive.eae.common.activityAuthor');
goog.require('jive.shared.displayutil.avatar');


home.nav.drop.down.discussion = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList.length > 0) {
    home.nav.drop.down.containerStart(opt_data, output);
    var activity__soy6 = opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1];
    if (! activity__soy6.content.deleted) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(activity__soy6.activityUser, {size: 32, hideLink: true, anonymous: activity__soy6.activityUser.anonymous, currentUserPartner: opt_data.user.partner}), output);
    }
    output.append('<div class="font-color-meta">');
    jive.eae.common.activityAuthor({object: activity__soy6.content, type: activity__soy6.content.deleted ? opt_data.activityContainer.jiveObject.objectType : activity__soy6.type, activityUser: activity__soy6.activityUser, displayAuthorLink: false, streamType: 'communications', hideDetailedReplyTo: true, user: opt_data.user, againstObject: true, deleted: activity__soy6.content.deleted}, output);
    output.append(' ', (activity__soy6.type != 'notification') ? soy.$$escapeHtml(opt_data.activityContainer.parentTime) : '', '</div><div class="title font-color-link"><span title=\'', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.discussion'),[])), '\' role=\'img\' class="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.jiveObjectCSS), '"></span>', soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject), '</div>');
    home.nav.drop.down.containerEnd(null, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from inbox_home_badge_item.soy.
// Please don't edit this file by hand.

goog.provide('home.nav.drop.down.welcome');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('home.nav.drop.down.containerEnd');
goog.require('home.nav.drop.down.containerStart');


home.nav.drop.down.welcome = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  home.nav.drop.down.containerStart(opt_data, output);
  output.append('<div class="j-badge-oneliner"><span title=\'', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.access.welcome.indicator'),[])), '\' role=\'img\' class="jive-icon-big jive-icon-welcome acticon"></span><span class="title">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.inbox.message.welcome.label'),[])), '</span></div>');
  home.nav.drop.down.containerEnd(null, output);
  return opt_sb ? '' : output.toString();
};

;
define("apps/home/views/badge_menu_template_loader",function(){return home.nav.drop.down.generic});
;
