/*
Custom script
This file will not be overwritten by the updater
*/

// JavaScript code
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "block";
    }
  }
}

// PubPower Ads Code
(function () {
  var head = document.getElementsByTagName('head')[0];

  // First script
  var script1 = document.createElement('script');
  script1.type = 'text/javascript';
  script1.src = '//nc.pubpowerplatform.io/w/96ccd642-a2ee-4943-a6ca-1da85b4df9da.js';
  script1.async = true;
  script1.defer = true;
  head.appendChild(script1);

  // GDPR config
  var gdprScript = document.createElement('script');
  gdprScript.innerHTML = "var powerTag = powerTag || {}; powerTag.gdprShowConsentToolButton = false;";
  head.appendChild(gdprScript);

  // Second script
  var script2 = document.createElement('script');
  script2.type = 'text/javascript';
  script2.src = '//nc.pubpowerplatform.io/ata/adv/96ccd642-a2ee-4943-a6ca-1da85b4df9da.js';
  script2.async = true;
  script2.defer = true;
  head.appendChild(script2);

  // Sticky banner init
  var stickyInit = document.createElement('script');
  stickyInit.innerHTML = "(powerTag.Init = window.powerTag.Init || []).push(function () { powerAPITag.initStickyBanner('pw_47095'); });";
  head.appendChild(stickyInit);
})();
