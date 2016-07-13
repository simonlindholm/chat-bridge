// ==UserScript==
// @name        Skype Bridge
// @namespace   chat-bridge
// @description Chat bridge for Skype
// @include     https://web.skype.com/en/*
// @version     1
// @grant       none
// ==/UserScript==

var bridgeOrigins = ["http://localhost"];

window.addEventListener("message", function(ev) {
    var origin = ev.origin || ev.originalEvent.origin;
    if (bridgeOrigins.indexOf(origin) == -1) return;
    var win = ev.source;
    // if (win != window.opener) alert("something is off...");
    win.postMessage("init", origin);
});
