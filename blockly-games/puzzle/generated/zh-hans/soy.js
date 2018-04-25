// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Puzzle.soy.
 */

goog.provide('Puzzle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Puzzle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_animal1">\u9E2D\u5B50</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">\u7FBD\u6BDB</span><span id="Puzzle_animal1Trait2">\u5599</span><span id="Puzzle_animal1HelpUrl">https://zh.wikipedia.org/wiki/\u9E2D</span><span id="Puzzle_animal2">\u732B</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">\u80E1\u987B</span><span id="Puzzle_animal2Trait2">\u6BDB\u76AE</span><span id="Puzzle_animal2HelpUrl">https://zh.wikipedia.org/wiki/\u732B</span><span id="Puzzle_animal3">\u871C\u8702</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">\u8702\u871C</span><span id="Puzzle_animal3Trait2">\u8702\u523A</span><span id="Puzzle_animal3HelpUrl">https://zh.wikipedia.org/wiki/\u871C\u8702</span><span id="Puzzle_animal4">\u8717\u725B</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">\u58F3</span><span id="Puzzle_animal4Trait2">\u7C98\u6DB2</span><span id="Puzzle_animal4HelpUrl">https://zh.wikipedia.org/wiki/\u8717\u725B</span><span id="Puzzle_picture">\u56FE\u7247\uFF1A</span><span id="Puzzle_legs">\u817F\uFF1A</span><span id="Puzzle_legsChoose">\u8BF7\u9009\u62E9...</span><span id="Puzzle_traits">\u7279\u5F81\uFF1A</span><span id="Puzzle_error0">\u5B8C\u7F8E\uFF01\u6240\u6709%1\u4E2A\u65B9\u5757\u90FD\u662F\u6B63\u786E\u7684\u3002</span><span id="Puzzle_error1">\u5DEE\u4E0D\u591A\u4E86\uFF01\u8FD8\u6709\u4E00\u4E2A\u5757\u662F\u4E0D\u6B63\u786E\u7684\u3002</span><span id="Puzzle_error2">%1 \u5757\u4E0D\u6B63\u786E</span><span id="Puzzle_tryAgain">\u9AD8\u4EAE\u5757\u4E0D\u6B63\u786E\uFF0C\u518D\u8BD5\u8BD5\u3002</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1>' + BlocklyGames.soy.titleSpan({appName: '\u62FC\u56FE'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">\u5E2E\u52A9</button>&nbsp;<button id="checkButton" class="primary">\u68C0\u67E5\u7B54\u6848</button></td></tr></table><div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">\u4E3A\u6BCF\u4E2A\u52A8\u7269\uFF08\u7EFF\u8272\uFF09\u52A0\u4E0A\u5B83\u7684\u56FE\u7247\u3001\u9009\u62E9\u817F\u7684\u6570\u91CF\u5E76\u52A0\u5165\u5176\u62E5\u6709\u7684\u7279\u5F81\u3002</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
