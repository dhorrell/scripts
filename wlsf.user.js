// ==UserScript==
// @name         Warcraftlogs - Hide bottom sticky footer
// @version      1.2
// @author       danh
// @description  Remove the bottom banner on Warcraftlogs for a better user experience
// @match        https://www.warcraftlogs.com/*
// @grant        none
// @icon		 https://assets.rpglogs.com/img/warcraft/favicon.png
// @run-at       document-end
// ==/UserScript==
(function() {
    'use strict';
    setInterval(function() {
        const footer = document.getElementsByClassName("ad-placement-sticky-footer ad-placement-sticky-footer--playwire");
		if (footer != null) {
			footer[0].style = "display: none;";
		}
		const profileAdd = document.getElementById("gear-box-ad");
		if (profileAdd != null) {
			profileAdd.style = "display: none;";
		}
    }, 10)();
})();