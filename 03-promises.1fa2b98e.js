!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i");({form:document.querySelector(".form")}).form.addEventListener("submit",(function(e){var n=function(e){var n=Number(t)+Number(o)*e;(function(e,n){var t=Math.random()>.3;return new Promise(t?function(t){setTimeout((function(){t({position:e,delay:n})}),n)}:function(t,o){setTimeout((function(){o({position:e,delay:n})}),n)})})(o,t).then((function(t){t.position,t.delay;i.Notify.success("✅ Fulfilled promise ".concat(e+1," in ").concat(n,"}ms"))})).catch((function(t){t.position,t.delay;i.Notify.failure("❌ Rejected promise ".concat(e+1," in ").concat(n,"ms"))}))};e.preventDefault();for(var t=e.target.elements.delay.value,o=e.target.elements.step.value,r=e.target.elements.amount.value,a=0;a<r;a+=1)n(a)}))}();
//# sourceMappingURL=03-promises.1fa2b98e.js.map
