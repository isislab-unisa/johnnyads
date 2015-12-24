// This file was automatically generated from create_comment_or_message.soy.
// Please don't edit this file by hand.

goog.provide('jive.onbStep.create_comment_or_message.pageTips');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.onboarding.msgFormatHelper');


jive.onbStep.create_comment_or_message.pageTips = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.renderLocation == 'stream_header') {
    output.append('<div class="j-pop js-pop popover js-onboarding-tip" style="position: fixed; top: 100px; left: 50%; margin-left: -225px; visibility: visible; z-index: 100;"><div class="d-', soy.$$escapeHtml(opt_data.renderLocation), '-tip j-tips wide j-pop-main"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_comment_or_message_head,[])), '</h4><p>');
    jive.onboarding.msgFormatHelper({i18nKey: soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_comment_or_message_text,[])), arg0: '<span style="background: #e28044; color: #fff; font-weight: bold; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; padding: 2px 5px; margin: -2px;">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.comment'),[])) + '</span> ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.or'),[])) + ' <span style="background: #e28044; color: #fff; font-weight: bold; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; padding: 2px 5px; margin: -2px;">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.reply'),[])) + '</span>', noAutoEscape: true}, output);
    output.append('</p></div></div>');
  } else if (opt_data.renderLocation == 'banner_post_comment') {
    output.append('<div class="j-pop js-pop popover js-onboarding-tip" style="position: fixed; top: 50px; left: 50%; margin-left: -225px; visibility: visible; z-index: 100;"><div class="j-tips wide done j-banner-tip d-', soy.$$escapeHtml(opt_data.renderLocation), '-tip j-pop-main"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_comment_or_message_done_label,[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_comment_or_message_done_desc,[])), '</p><p><button class="js-back-to-onb j-btn-callout close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.ok'),[])), '</button></p></div></div>');
  }
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Onboarding");define("apps/onboarding/views/create_comment_or_message",["jquery","apps/onboarding/models/onboarding_source","apps/shared/models/location_state","apps/shared/controllers/switchboard"],function(d,b,e,a){var c={};c.onboardingSource=new b();c.startStep=function(f){c.stepID=f;c.onboardingSource.getStepData(c.stepID).addCallback(function(g){c.viewData=g;d("html, body").animate({scrollTop:0},"fast");e.addListener("change",c.onViewChange);e.setState({fromQ:c.stepID},"","/activity")})};c.onViewChange=function(j,i,h){var f=c,g=function(){var n=function(){f.closeTip();l.remove();d("html, body").animate({scrollTop:0},"fast");var p=d(jive.onbStep.create_comment_or_message.pageTips({renderLocation:"banner_post_comment",viewData:c.viewData}));var o=d("body");o.append(p);o.on("click.postConfirmationTip",function(r){var q=d(r.target);if(!q.closest(".js-onboarding-tip").length||q.hasClass("js-back-to-onb")){o.off("click.postConfirmationTip");f.closeTip();if(q.hasClass("js-back-to-onb")){e.setState({},"","get-started")}}});c.onboardingSource.initializeView().addCallback(function(q){a.emit("onboarding.state.update",q)});a.removeListener("activity.stream.comment.created",n)};var k=d("#j-activity-page .j-act-header h1");if(k.length){var m="all-activity";d("body").append(d(jive.onbStep.create_comment_or_message.pageTips({renderLocation:"stream_header",viewData:c.viewData})));var l=d('<style type="text/css"> a.j-reply-micro, a.j-reply-rte { background: #e28044; color: #fff !important; font-weight: bold; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; padding: 2px 5px; margin: -2px;} </style>');l.appendTo(k);a.addListener("activity.stream.comment.created",n)}a.removeListener("activity.stream.controller.initialized",g)};e.removeListener("change",c.onViewChange);a.addListener("activity.stream.controller.initialized",g)};c.setupPage=d.noop();c.closeTip=function(f){var g="div.js-onboarding-tip";if(f){g+="[data-location="+f+"]"}var h=d(g);if(h.length){h.each(function(){var j=d(this);var i=j.closest("div.js-pop").length;if(i.length){i.trigger("close");i.remove()}else{j.remove()}})}};return c});
;
