// ==UserScript==
// @name        Reddit Tag Remover
// @description Removes tags from post titles
// @namespace   https://github.com/marank
// @include     https://www.reddit.com/r/jailbreak*
// @version     0.2
// @grant       none
// ==/UserScript==

$('a.title').each(function () {
  $(this).text($(this).text().replace(/^\[[a-zA-Z]*\]\s*/, ''));
});
