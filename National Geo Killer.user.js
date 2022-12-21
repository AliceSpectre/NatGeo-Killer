// ==UserScript==
// @name         National Geographic Email Signup Wall Blocker
// @license      GNU General Public License v3.0
// @version      0.1
// @description  Active checks for the existance of the 'email wall', remove changes to page for easy viewing.
// @author       https://github.com/AliceSpectre
// @match        https://www.nationalgeographic.com/*
// @match        https://*.nationalgeographic.com/*
// @match        www.nationalgeographic.com/*
// @match        http://www.nationalgeographic.com/*
// @match        http://*.nationalgeographic.com/*

// @icon         https://www.google.com/s2/favicons?sz=64&domain=nationalgeographic.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Bypass National Geography Email 'PAYWALL'
    function paywall_killer() {
        // Step 1 - Remove body attributes to allow content viewing & scrolling
        console.log("++ Removing BODY class");
        document.getElementsByTagName("body")[0].removeAttribute("class");
        console.log("++ Removing BODY style");
        document.getElementsByTagName("body")[0].removeAttribute("style");
        // Step 2 - Remove Bullshit Box`
        console.log("++ Removing Bullshit signup box.");
        document.getElementById("fittPortal_0").remove()
    }

    function Val_Update() {
        var element = document.getElementById("fittPortal_0");

        //If it isn't "undefined" and it isn't "null", then it exists.
        if(typeof(element) != 'undefined' && element != null){
            console.log('Pay/Email Wall detected here');
            paywall_killer()
        } else{
            console.log("No Pay/Email Wall detected here");
            console.log("Rechecking in 1s")
        }
    }

    setInterval(function() {
        console.clear()
        Val_Update();
    }, 1000);
})();
