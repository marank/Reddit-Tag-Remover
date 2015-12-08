// ==UserScript==
// @name        Reddit Tag Remover
// @namespace   https://github.com/marank
// @include     https://www.reddit.com/r/jailbreak*
// @version     0.1
// @grant       none
// ==/UserScript==

$('a.title').each(function () {
  $(this).text($(this).text().replace(/^\[[a-zA-Z]*\]\s*/, ''));
});
