!function(){var t={btnStartEl:document.querySelector("button[data-start]"),btnStopEl:document.querySelector("button[data-stop]"),body:document.querySelector("body")},n=null;t.btnStopEl.disabled=!0,t.btnStartEl.addEventListener("click",(function(){n=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.btnStartEl.disabled=!0,t.btnStopEl.disabled=!1})),t.btnStopEl.addEventListener("click",(function(){clearInterval(n),t.btnStartEl.disabled=!1,t.btnStopEl.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.2bb9e877.js.map