var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");const r={form:document.querySelector(".form"),fieldDelay:document.querySelector('input[name="delay"]'),fieldStep:document.querySelector('input[name="step"]'),fieldAmount:document.querySelector('input[name="amount"]')};function l(e,t,o){for(let n=0;n<t;n+=1)setTimeout((()=>{var t,r;(t=n,r=e*n,new Promise(((e,o)=>{const n=Math.random()>.3;setTimeout((()=>{n&&e({position:t,delay:r}),o({position:t,delay:r})}),r)}))).then((({position:e,delay:t})=>{i.Notify.success(`✅ Fulfilled promise ${e+1} in ${t+o}ms`)})).catch((({position:e,delay:t})=>{i.Notify.failure(`❌ Rejected promise ${e+1} in ${t+o}ms`)}))}),e)}r.form.addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:o,amount:n}={delay:Number(r.fieldDelay.value),step:Number(r.fieldStep.value),amount:Number(r.fieldAmount.value)};setTimeout(l,t,o,n,t)}));
//# sourceMappingURL=03-promises.347f4508.js.map