// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Gallery.soy.
 */

goog.provide('Gallery.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Gallery.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Movie_submitDisabled">\u60A8\u7684\u7535\u5F71\u6CA1\u6709\u52A8\u3002\u4F7F\u7528\u65B9\u5757\u4EE5\u5236\u4F5C\u4E00\u4E9B\u6709\u8DA3\u7684\u4E1C\u897F\u3002\u4E4B\u540E\u60A8\u53EF\u4EE5\u63D0\u4EA4\u60A8\u7684\u7535\u5F71\u81F3\u56FE\u5E93\u3002</span></div>';
};
if (goog.DEBUG) {
  Gallery.soy.messages.soyTemplateName = 'Gallery.soy.messages';
}


Gallery.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: soy.$$escapeHtml(opt_ijData.appName) + 'Gallery'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><div id="gallery"></div><div id="loading"><img src="common/loading.gif"></div>';
};
if (goog.DEBUG) {
  Gallery.soy.start.soyTemplateName = 'Gallery.soy.start';
}


Gallery.soy.record = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="galleryThumb">' + ((opt_data.key) ? '<input type="checkbox" id="publish-' + soy.$$escapeHtml(opt_data.key) + '"' + ((opt_data['public']) ? ' checked ' : '') + 'onchange="Gallery.publish(this)">' : '') + '<a href="/' + soy.$$escapeHtml(opt_data.app) + '?level=10#' + soy.$$escapeHtml(opt_data.uuid) + '"><img src="' + soy.$$escapeHtml(opt_data.thumb) + '"></a></div><div class="galleryTitle"><a href="/' + soy.$$escapeHtml(opt_data.app) + '?level=10#' + soy.$$escapeHtml(opt_data.uuid) + '">' + soy.$$escapeHtml(opt_data.title) + '</a></div>';
};
if (goog.DEBUG) {
  Gallery.soy.record.soyTemplateName = 'Gallery.soy.record';
}
