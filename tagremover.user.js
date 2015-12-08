// ==UserScript==
// @name        Remove Tags on /r/jailbreak
// @namespace   marank
// @include     https://www.reddit.com/r/jailbreak*
// @version     1
// @grant       none
// ==/UserScript==

$('a.title').each(function () {
  $(this).text($(this).text().replace(/^\[[a-zA-Z]*\]\s*/, ''));
});