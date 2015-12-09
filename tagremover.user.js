// ==UserScript==
// @name        Reddit Tag Remover
// @description Removes tags from post titles
// @namespace   https://github.com/marank
// @include     https://www.reddit.com/r/jailbreak*
// @version     0.3
// @grant       none
// ==/UserScript==

removeTags();

window.addEventListener('neverEndingLoad', function (e) {
  removeTags();
});

function removeTags() {
  $('a.title').not('.rtr_tagRemoved').each(function () {
    $(this).text($(this).text().replace(/^\[[a-zA-Z]*\]\s*/, ''));
    $(this).addClass('rtr_tagRemoved');
  });
}
