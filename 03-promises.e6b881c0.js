document.querySelector(".form"),document.querySelector('input[name="delay"]'),document.querySelector('input[name="step"]'),document.querySelector('input[name="amount"]');var e,o;(e=2,o=1500,new Promise(((t,n)=>{const i=Math.random()>.3;setTimeout((()=>{i&&t({position:e,delay:o}),n({position:e,delay:o})}),o)}))).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.e6b881c0.js.map