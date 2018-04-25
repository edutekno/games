// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">\\n\u5BFB\u627E\u654C\u4EBA\u3002\u6307\u5B9A\u4E00\u4E2A\u65B9\u5411\uFF080-360\u5EA6\u4E4B\u95F4\uFF09\u3002\u8FD4\u56DE\u8BE5\u65B9\u5411\u4E0A\u6700\u8FD1\u654C\u4EBA\u7684\u8DDD\u79BB\u503C\u3002\u5982\u679C\u8BE5\u65B9\u5411\u4E0A\u6CA1\u6709\u53D1\u73B0\u654C\u4EBA\u7684\u8BDD\uFF0C\u5C31\u8FD4\u56DE\u65E0\u9650\u5927\u3002 </span><span id="Pond_cannonTooltip">\u8BD5\u5C04\u5927\u70AE\u3002\u6307\u5B9A\u4E00\u4E2A\u65B9\u5411\uFF080~360\uFF09\u548C\u4E00\u4E2A\u8303\u56F4\uFF080~70\uFF09\u3002.</span><span id="Pond_swimTooltip">\u5411\u524D\u6E38\uFF0C\u5E76\u6307\u5B9A\u4E00\u4E2A\u65B9\u5411\uFF080-360\uFF09\u3002</span><span id="Pond_stopTooltip">\u505C\u6B62\u6E38\u6CF3\u3002\u73A9\u5BB6\u5C06\u7F13\u6162\u505C\u6B62\u3002</span><span id="Pond_healthTooltip">\u8FD4\u56DE\u73A9\u5BB6\u7684\u5F53\u524D\u5065\u5EB7\u72B6\u51B5\uFF080\u4EE3\u8868\u6B7B\u4EA1\uFF0C100\u4EE3\u8868\u5065\u5EB7\uFF09\u3002</span><span id="Pond_speedTooltip">\u8FD4\u56DE\u73A9\u5BB6\u7684\u5F53\u524D\u901F\u5EA6\uFF080\u4EE3\u8868\u5DF2\u505C\u6B62\uFF0C100\u4EE3\u8868\u5168\u901F\uFF09\u3002</span><span id="Pond_locXTooltip">\u8FD4\u56DE\u73A9\u5BB6\u7684X\u5750\u6807\uFF080\u4EE3\u8868\u5DE6\u8FB9\uFF0C100\u4EE3\u8868\u53F3\u8FB9\uFF09\u3002</span><span id="Pond_locYTooltip">\u8FD4\u56DE\u73A9\u5BB6\u7684\u7EB5\u5750\u6807\uFF080\u662F\u5728\u5E95\u90E8\uFF0C100\u5219\u662F\u5728\u9876\u90E8\uFF09\u3002</span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="\u663E\u793A\u8BED\u8A00\u6587\u6863\u3002">\u6587\u6863</button></td><td><button id="runButton" class="primary" title="\u8FD0\u884C\u60A8\u5199\u7684\u7A0B\u5E8F\u3002"><img src="common/1x1.gif" class="run icon21"> \u8FD0\u884C\u7A0B\u5E8F</button><button id="resetButton" class="primary" style="display: none" title="\u505C\u6B62\u8FD0\u884C\u7A0B\u5E8F\u5E76\u91CD\u7F6E\u7B49\u7EA7\u3002"><img src="common/1x1.gif" class="stop icon21"> \u91CD\u7F6E</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
