// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly \u6E38\u620F</span><span id="Games_puzzle">\u62FC\u56FE</span><span id="Games_maze">\u8FF7\u5BAB</span><span id="Games_bird">\u9E1F</span><span id="Games_turtle">\u4E4C\u9F9F</span><span id="Games_movie">\u7535\u5F71</span><span id="Games_music">\u97F3\u4E50</span><span id="Games_pondTutor">\u6C60\u5858\u5BFC\u5E08</span><span id="Games_pond">\u6C60\u5858</span><span id="Games_genetics">\u9057\u4F20\u5B66</span><span id="Games_linesOfCode1">\u60A8\u901A\u8FC7\u4E00\u884CJavaScript\u901A\u8FC7\u4E86\u8FD9\u4E2A\u7B49\u7EA7\uFF1A</span><span id="Games_linesOfCode2">\u60A8\u901A\u8FC7%1\u884CJavaScript\u901A\u8FC7\u4E86\u8FD9\u4E2A\u7B49\u7EA7\uFF1A</span><span id="Games_nextLevel">\u51C6\u5907\u597D\u7B49\u7EA7%1\u4E86\u4E48?</span><span id="Games_finalLevel">\u60A8\u51C6\u5907\u597D\u4E0B\u4E00\u4E2A\u6311\u6218\u4E86\u4E48\uFF1F</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">\u4FDD\u5B58\u5E76\u94FE\u63A5\u81F3\u5757\u3002</span><span id="Games_runTooltip">\u8FD0\u884C\u60A8\u5199\u7684\u7A0B\u5E8F\u3002</span><span id="Games_runProgram">\u8FD0\u884C\u7A0B\u5E8F</span><span id="Games_resetTooltip">\u505C\u6B62\u8FD0\u884C\u7A0B\u5E8F\u5E76\u91CD\u7F6E\u7B49\u7EA7\u3002</span><span id="Games_resetProgram">\u91CD\u7F6E</span><span id="Games_help">\u5E2E\u52A9</span><span id="Games_dialogOk">\u786E\u8BA4</span><span id="Games_dialogCancel">\u53D6\u6D88</span><span id="Games_catLogic">\u903B\u8F91</span><span id="Games_catLoops">\u5FAA\u73AF</span><span id="Games_catMath">\u6570\u5B66</span><span id="Games_catText">\u6587\u672C</span><span id="Games_catLists">\u5217\u8868</span><span id="Games_catColour">\u989C\u8272</span><span id="Games_catVariables">\u53D8\u91CF</span><span id="Games_catProcedures">\u51FD\u6570</span><span id="Games_httpRequestError">\u8BF7\u6C42\u5B58\u5728\u95EE\u9898\u3002</span><span id="Games_linkAlert">\u901A\u8FC7\u8FD9\u4E2A\u94FE\u63A5\u5206\u4EAB\u60A8\u7684\u6A21\u5757\uFF1A\n\n%1</span><span id="Games_hashError">\u5BF9\u4E0D\u8D77\uFF0C\u6CA1\u6709\u4EFB\u4F55\u5DF2\u4FDD\u5B58\u7684\u7A0B\u5E8F\u5BF9\u5E94\'%1\' \u3002</span><span id="Games_xmlError">\u65E0\u6CD5\u8F7D\u5165\u60A8\u4FDD\u5B58\u7684\u6587\u4EF6\u3002\u60A8\u662F\u5426\u4F7F\u7528\u5176\u4ED6\u7248\u672C\u7684Blockly\u521B\u5EFA\u8BE5\u6587\u4EF6\u7684\uFF1F</span><span id="Games_submitted">Thank you for your program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">\u5217\u8868</span><span id="Games_textVariable">\u6587\u672C</span><span id="Games_breakLink">\u4E00\u65E6\u60A8\u5F00\u59CB\u7F16\u8F91JavaScript\uFF0C\u60A8\u4E0D\u80FD\u8FD4\u56DE\u7F16\u8F91\u5757\u3002\u8FD9\u662F\u771F\u7684\u4E48\uFF1F</span><span id="Games_blocks">\u5757</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly \u6E38\u620F</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.titleSpan.soyTemplateName = 'BlocklyGames.soy.titleSpan';
}


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit183 = opt_data.maxLevel + 1;
  for (var i183 = 1; i183 < iLimit183; i183++) {
    output += ' ' + ((i183 == opt_data.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i183) + '">' + soy.$$escapeHtml(i183) + '</span>' : (i183 == opt_data.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i183) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i183) + soy.$$escapeHtml(opt_data.suffix) + '">' + soy.$$escapeHtml(i183) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i183) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i183) + soy.$$escapeHtml(opt_data.suffix) + '"></a>');
  }
  return output;
};
if (goog.DEBUG) {
  BlocklyGames.soy.levelLinks.soyTemplateName = 'BlocklyGames.soy.levelLinks';
}


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.dialog.soyTemplateName = 'BlocklyGames.soy.dialog';
}


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">\u795D\u8D3A\uFF01</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">\u53D6\u6D88</button><button id="doneOk" class="secondary">\u786E\u8BA4</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">\u6B64\u7B49\u7EA7\u975E\u5E38\u56F0\u96BE\u3002\u60A8\u662F\u5426\u5E0C\u671B\u8DF3\u8FC7\u5B83\u5E76\u8FDB\u5165\u4E0B\u4E00\u4E2A\u6E38\u620F\uFF1F\u60A8\u603B\u662F\u53EF\u4EE5\u7A0D\u540E\u8FD4\u56DE\u8FD9\u91CC\u3002<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">\u53D6\u6D88</button><button id="abortOk" class="secondary">\u786E\u8BA4</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.abortDialog.soyTemplateName = 'BlocklyGames.soy.abortDialog';
}


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.storageDialog.soyTemplateName = 'BlocklyGames.soy.storageDialog';
}


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">\u786E\u8BA4</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
