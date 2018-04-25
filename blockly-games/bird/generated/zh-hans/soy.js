// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Bird.soy.
 */

goog.provide('Bird.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Bird.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Bird_noWorm">\u6CA1\u6709\u8815\u866B</span><span id="Bird_heading">\u98DE\u884C\u65B9\u5411</span><span id="Bird_noWormTooltip">\u9E1F\u6CA1\u6709\u6349\u5230\u866B\u5B50\u7684\u6761\u4EF6\u3002</span><span id="Bird_headingTooltip">\u79FB\u52A8\u5230\u6307\u5B9A\u89D2\u5EA6\u7684\u65B9\u5411\uFF1A0\u662F\u5411\u53F3\uFF0C90\u5219\u662F\u6B63\u4E0A\u65B9\u7B49\u3002</span><span id="Bird_positionTooltip">\u6A2A\u5750\u6807\u548C\u7EB5\u5750\u6807\u8BB0\u5F55\u9E1F\u7684\u4F4D\u7F6E\u3002\u5F53 x = 0 \u65F6\u9E1F\u9760\u8FD1\u5DE6\u8FB9\uFF0C\u5F53 x = 100 \u65F6\u9760\u8FD1\u53F3\u8FB9\u3002\u5F53 y \\n= 0 \u65F6\u9E1F\u5728\u5E95\u90E8\uFF0C\u5F53 y = 100 \u65F6\u5728\u9876\u90E8\u3002 </span></div>';
};
if (goog.DEBUG) {
  Bird.soy.messages.soyTemplateName = 'Bird.soy.messages';
}


Bird.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Bird.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: '\u9E1F'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="\u4FDD\u5B58\u5E76\u94FE\u63A5\u81F3\u5757\u3002"><img src="common/1x1.gif" class="link icon21"></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="\u8FD0\u884C\u60A8\u5199\u7684\u7A0B\u5E8F\u3002"><img src="common/1x1.gif" class="run icon21"> \u8FD0\u884C\u7A0B\u5E8F</button><button id="resetButton" class="primary" style="display: none" title="\u505C\u6B62\u8FD0\u884C\u7A0B\u5E8F\u5E76\u91CD\u7F6E\u7B49\u7EA7\u3002"><img src="common/1x1.gif" class="stop icon21"> \u91CD\u7F6E</button></td></tr></table>' + Bird.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + '<div id="dialogHelp" class="dialogHiddenContent">' + ((opt_ijData.level == 1) ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>\u66F4\u6539\u822A\u5411\u89D2\u4EE5\u4F7F\u9E1F\u6709\u866B\u5403\u5E76\u843D\u5728\u5979\u7684\u5DE2\u4E2D\u3002</td></tr></table>' : (opt_ijData.level == 2) ? '<table><tr><td><img src="common/help.png"></td><td>\u5982\u679C\u60A8\u6709\u8815\u866B\uFF0C\u4F7F\u7528\u8FD9\u4E2A\u5757\u8FDB\u5165\u4E00\u4E2A\u6807\u9898\uFF0C\u5982\u679C\u60A8\u6CA1\u6709\u8815\u866B\uFF0C\u5219\u4F7F\u7528\u4E0D\u540C\u7684\u6807\u9898\u3002</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 4) ? '<table><tr><td><img src="common/help.png"></td><td>\'x\'\u662F\u60A8\u73B0\u5728\u7684\u6C34\u5E73\u4F4D\u7F6E\u3002\u7528\u8FD9\u4E2A\u7248\u5757\u6765\u8FDB\u5165\u4E00\u4E2A\u5F53\'x\'\u5C0F\u4E8E\u67D0\u4E2A\u6570\u5B57\u65F6\u7684\u6807\u9898\uFF0C\u6216\u8005\u53E6\u4E00\u4E2A\u4E0D\u540C\u7684\u6807\u9898\u3002</td><td><img src="bird/help_up.png"></td></tr></table>' : (opt_ijData.level == 5) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u70B9\u51FB\u56FE\u6807\u4EE5\u4FEE\u6539\u201Cif\u201D\u65B9\u5757\u3002</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 6) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u6B64\u7B49\u7EA7\u65E2\u9700\u8981\u201Celse if\u201D\u53C8\u9700\u8981\u201Celse\u201D\u65B9\u5757\u3002</td><td><img src="common/help.png"></td></tr></table>' : (opt_ijData.level == 8) ? '<table><tr><td><img src="bird/help_up.png"></td><td>\u201Cand\u201D\u65B9\u5757\u53EA\u5728\u8F93\u5165\u90FD\u4E3A\u771F\u65F6\u4E3A\u771F\u3002</td><td><img src="common/help.png"></td></tr></table>' : '') + '</div>' + ((opt_ijData.level == 5) ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\u5C06\u4E00\u4E2A\u201Celse\u201D\u5757\u62D6\u653E\u5230\u201Cif\u201D\u5757\u3002</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Bird.soy.start.soyTemplateName = 'Bird.soy.start';
}


Bird.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="bird_heading"></block>' + ((opt_ijData.level >= 2) ? ((opt_ijData.level == 4 || opt_ijData.level == 5) ? '<block type="bird_noWorm" disabled="true"></block>' : '<block type="bird_noWorm"></block>') + ((opt_ijData.level >= 4) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">X</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 5) ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">Y</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + ((opt_ijData.level >= 8) ? '<block type="bird_and"></block>' : '') : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Bird.soy.toolbox.soyTemplateName = 'Bird.soy.toolbox';
}
