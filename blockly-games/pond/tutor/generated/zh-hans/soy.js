// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.Tutor.soy.
 */

goog.provide('Pond.Tutor.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');
goog.require('Pond.soy');


Pond.Tutor.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return Pond.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_playerName">\u73A9\u5BB6</span><span id="Pond_targetName">\u76EE\u6807</span><span id="Pond_pendulumName">\u6447\u6446\u4E0D\u5B9A</span><span id="Pond_scaredName">\u5BB3\u6015</span></div>';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.messages.soyTemplateName = 'Pond.Tutor.soy.messages';
}


Pond.Tutor.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = Pond.Tutor.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: '\u6C60\u5858\u5BFC\u5E08'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: ''}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="\u4FDD\u5B58\u5E76\u94FE\u63A5\u81F3\u5757\u3002"><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">\u5E2E\u52A9</button></td></tr></table>' + Pond.soy.visualization(null, null, opt_ijData);
  switch (opt_ijData.level) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
      output += Pond.Tutor.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
      break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 10:
      output += '<div id="editor"></div>';
      break;
  }
  output += Pond.Tutor.soy.playerTarget(null, null, opt_ijData) + Pond.Tutor.soy.playerPendulum(null, null, opt_ijData) + Pond.Tutor.soy.playerScared(null, null, opt_ijData) + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 5 || opt_ijData.level == 6) ? '<div id="helpUseScan" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u60A8\u7684\u89E3\u51B3\u65B9\u6848\u80FD\u591F\u5DE5\u4F5C\uFF0C\u4F46\u60A8\u53EF\u4EE5\u505A\u7684\u66F4\u597D\u3002\u4F7F\u7528\u201Cscan\u201D\u4EE5\u544A\u8BC9\u5927\u70AE\u5C04\u51FB\u591A\u8FDC\u3002</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>' : '') + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' + ((opt_ijData.level == 1 || opt_ijData.level == 2) ? '\u4F7F\u7528\u201Ccannon\u201D\u547D\u4EE4\u4EE5\u6253\u51FB\u76EE\u6807\u3002\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u89D2\u5EA6\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8303\u56F4\u3002\u627E\u5230\u6B63\u786E\u7684\u7EC4\u5408\u3002' + ((opt_ijData.level == 1) ? '<br><br><img src="pond/docs/cannon.png" height=41 width=213>' : (opt_ijData.level == 2) ? '<pre>cannon(0, 70);</pre>' : '') : (opt_ijData.level == 3 || opt_ijData.level == 4) ? '\u6B64\u76EE\u6807\u9700\u8981\u6253\u5F88\u957F\u65F6\u95F4\u3002\u4F7F\u7528\u201Cwhile (true)\u201D\u5FAA\u73AF\u4EE5\u4FBF\u65E0\u9650\u6253\u51FB\u3002' + ((opt_ijData.level == 3) ? '<br><br><img src="pond/docs/whiletrue.png" height=90 width=164>' : (opt_ijData.level == 4) ? '<pre>while (true) {\n  ...\n}</pre>' : '') : (opt_ijData.level == 5 || opt_ijData.level == 6) ? '\u6B64\u5BF9\u624B\u6765\u56DE\u79FB\u52A8\uFF0C\u4F7F\u5176\u5F88\u96BE\u88AB\u653B\u51FB\u3002\u201Cscan\u201D\u8868\u8FBE\u5F0F\u8FD4\u56DE\u7279\u5B9A\u4F4D\u7F6E\u5177\u4F53\u8303\u56F4\u5185\u7684\u5BF9\u624B\u3002' + ((opt_ijData.level == 5) ? '<br><br><img src="pond/docs/scan.png" height=36 width=134><br><br>' : (opt_ijData.level == 6) ? '<pre>scan(0)</pre>' : '') + '\u8FD9\u4E2A\u8303\u56F4\u5C31\u662F\u201Ccannon\u201D\u547D\u4EE4\u9700\u8981\u53D1\u5C04\u7CBE\u786E\u706B\u529B\u7684\u8303\u56F4\u3002' : (opt_ijData.level == 7 || opt_ijData.level == 8) ? '\u8FD9\u4E2A\u5BF9\u624B\u79BB\u5F97\u592A\u8FDC\u4E86\uFF0C\u65E0\u6CD5\u4F7F\u7528\u52A0\u519C\u70AE\uFF08\u4EC5\u9650\u4E8E70\u7C73\u5185\uFF09\u3002\u4F46\u662F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u201Cswim\u201D\u547D\u4EE4\u5F00\u59CB\u5411\u5BF9\u624B\u6E38\u8FC7\u53BB\uFF0C\u7136\u540E\u51FB\u6E83\u5B83\u3002' + ((opt_ijData.level == 7) ? '<br><br><img src="pond/docs/swim.png" height=41 width=131>' : (opt_ijData.level == 8) ? '<pre>swim(0);</pre>' : '') : (opt_ijData.level == 9) ? '\u8FD9\u4E2A\u5BF9\u624B\u4E5F\u79BB\u5F97\u592A\u8FDC\u4E86\uFF0C\u4E0D\u80FD\u4F7F\u7528\u52A0\u519C\u70AE\u3002\u4F46\u662F\u60A8\u5728\u8FD9\u573A\u51B2\u7A81\u4E2D\u592A\u8106\u5F31\u4E86\uFF0C\u5F88\u96BE\u751F\u5B58\u4E0B\u53BB\u3002\u6240\u4EE5\uFF0C\u597D\u7684\u529E\u6CD5\u662F\u5411\u5BF9\u624B\u6E38\u8FC7\u53BB\uFF0C\u76F4\u5230\u60A8\u7684\u6C34\u5E73\u4F4D\u7F6E\u5C0F\u4E8E50\u3002\u7136\u540E\u4F7F\u7528\u201Cstop\u201D\u547D\u4EE4\u505C\u6B62\uFF0C\u5E76\u53D1\u5C04\u52A0\u519C\u70AE\u3002' + ((opt_ijData.level == 9) ? '<br><br><img src="pond/docs/loc_x_50.png" height=37 width=191><br><br><img src="pond/docs/stop.png" height=30 width=63>' : (opt_ijData.level == 10) ? '<pre>getX() &lt; 50</pre><pre>stop();</pre>' : '') : (opt_ijData.level == 10) ? '\u5BF9\u624B\u5982\u679C\u88AB\u51FB\u4E2D\u7684\u8BDD\u4F1A\u9003\u79BB\u3002\u5982\u679C\u9003\u5230\u8D85\u8FC7\u4E00\u5B9A\u8DDD\u79BB\uFF0870\u7C73\uFF09\u7684\u8BDD\uFF0C\u60A8\u9700\u8981\u7EE7\u7EED\u6E38\u5411\u5B83\u3002' : '') + '</div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Pond.Tutor.soy.start.soyTemplateName = 'Pond.Tutor.soy.start';
}


Pond.Tutor.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><category name="\u6C60\u5858"><block type="pond_cannon"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value><value name="RANGE"><shadow type="pond_math_number"><field name="NUM">70</field></shadow></value></block>' + ((opt_ijData.level >= 5) ? '<block type="pond_scan"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value></block>' : '') + ((opt_ijData.level >= 7) ? '<block type="pond_swim"><value name="DEGREE"><shadow type="pond_math_number"><field name="NUM">0</field></shadow></value></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="pond_stop"></block>' : '') + ((opt_ijData.level >= 9) ? '<block type="pond_getX"></block><block type="pond_getY"></block>' : '') + '</category>' + ((opt_ijData.level >= 3) ? '<category name="\u903B\u8F91">' + ((opt_ijData.level >= 9) ? '<block type="controls_if"></block><block type="logic_compare"></block>' : '') + '<block type="logic_boolean"></block></category><category name="\u5FAA\u73AF"><block type="controls_whileUntil"></block></category>' : '') + '<category name="\u6570\u5B66"><block type="pond_math_number"></block></category></xml>';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.toolbox.soyTemplateName = 'Pond.Tutor.soy.toolbox';
}


Pond.Tutor.soy.playerTarget = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerTarget" style="display: none">\n</div>\n';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.playerTarget.soyTemplateName = 'Pond.Tutor.soy.playerTarget';
}


Pond.Tutor.soy.playerPendulum = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerPendulum" style="display: none">\n/* Slowly moves east and west.  Does not fire. */\nvar west = false;\nwhile (true) {\n  if (west) {\n    if (getX() > 25) {\n      swim(180, 25);\n    } else {\n      west = false;\n      swim(0, 0);\n    }\n  } else {\n    if (getX() < 75) {\n      swim(0, 25);\n    } else {\n      west = true;\n      swim(0, 0);\n    }\n  }\n}\n</div>\n';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.playerPendulum.soyTemplateName = 'Pond.Tutor.soy.playerPendulum';
}


Pond.Tutor.soy.playerScared = function(opt_data, opt_ignored, opt_ijData) {
  return '\n<div id="playerScared" style="display: none">\n/* Moves south-west when hit.  Does not fire. */\nvar d = damage();\nwhile (true) {\n  if (d != damage()) {\n    swim(45, 100);\n    var t = 0;\n    for (var t = 0; t < 100; t++) {}\n    d = damage();\n    stop();\n  }\n}\n</div>\n';
};
if (goog.DEBUG) {
  Pond.Tutor.soy.playerScared.soyTemplateName = 'Pond.Tutor.soy.playerScared';
}
