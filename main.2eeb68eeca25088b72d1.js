(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var n=t(document.getElementsByClassName("demo-block__top-button")),o=t(document.getElementsByClassName("demo-block__content-inner")),r=document.getElementById("youtube-demo");document.getElementById("demo-block-top").addEventListener("click",(function(t){var e=t.target.dataset.target,a=o[Number(e)];a&&(r.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*"),n.forEach((function(t){return t.classList.remove("button_color_black")})),t.target.classList.add("button_color_black"),o.forEach((function(t){return t.classList.remove("demo-block__content-inner_active")})),a.classList.add("demo-block__content-inner_active"))}))})();