(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\r\n  background-color: #f6f6f6;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style-type: initial;\r\n  margin-block-start: initial;\r\n  margin-block-end: initial;\r\n  margin-inline-start: initial;\r\n  margin-inline-end: initial;\r\n  padding-inline-start: initial;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  text-decoration: none;\r\n}\r\n\r\n.to-do-list {\r\n  width: 50%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: grey;\r\n  display: grid;\r\n  grid-auto-rows: 1fr;\r\n  box-shadow: 4px 3px 8px 1px #969696;\r\n  -webkit-box-shadow: 4px 3px 8px 1px #969696;\r\n}\r\n\r\n.tdl-element {\r\n  background-color: white;\r\n  height: 50px;\r\n  border-bottom-style: solid;\r\n  border-right-style: solid;\r\n  border-left-style: solid;\r\n  border-width: 1px;\r\n  border-color: grey;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.tdle-status-c {\r\n  width: 10%;\r\n  align-content: center;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.tdle-last-c {\r\n  width: 10%;\r\n  align-content: center;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.tdle-text-c {\r\n  width: 80%;\r\n  display: flex;\r\n}\r\n\r\n.input {\r\n  width: 80%;\r\n  margin-left: 10%;\r\n  border: none;\r\n}\r\n\r\n.icon-return {\r\n  width: 5%;\r\n  margin-left: auto;\r\n  margin-right: 2.5%;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n}\r\n\r\n#new-item {\r\n  font-style: italic;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: rgb(98, 109, 112);\r\n  -webkit-box-shadow: 10px 10px 99px 6px rgb(98, 109, 112);\r\n  -moz-box-shadow: 10px 10px 99px 6px rgba(98, 109, 112);\r\n  box-shadow: 10px 10px 99px 6px rgba(98, 109, 112);\r\n}\r\n",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(n[p].references++,n[p].updater(f)):n.push({identifier:u,updater:o(f,r),references:1}),a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};function h(e,n,t){console.log(t),e.classList.remove("fa-check-square"),e.classList.add("fa-square"),e.removeEventListener("click",n),e.addEventListener("click",(function n(){x(e,n,t)}))}function x(e,n,t){console.log(t),e.classList.remove("fa-square"),e.classList.add("fa-check-square"),e.removeEventListener("click",n),e.addEventListener("click",(function n(){h(e,n,t)}))}m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let g=0;const v=[{description:"Complete to-do-List",completed:!1,id:0,index:0},{description:"Clean Washes",completed:!0,id:1,index:1},{description:"Do more examples",completed:!0,id:2,index:2}];!function(e){let n;try{n=window.localStorage;const e="__storage_test__";return n.setItem(e,e),n.removeItem(e),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&n&&0!==n.length}}()?g=g=v:(g=JSON.parse(localStorage.getItem("information")),null===g&&(g=v));let b=g;const y=document.querySelector(".erase-container"),w=new class{constructor(){this.todo=null}setTodo(e){this.todo=e}getTodo(){return this.todo}showall(){for(let e=0;e<this.todo.length;e+=1){const n=this.todo[e],t=document.createElement("li");t.classList.add("tdl-element");const r=document.createElement("div");r.classList.add("tdle-status-c");const o=document.createElement("i");o.classList.add("far"),!0===n.completed?(o.classList.add("fa-check-square"),o.addEventListener("click",(function e(){x(o,e,b)}))):(o.classList.add("fa-square"),o.addEventListener("click",(function e(){h(o,e,b)}))),r.appendChild(o),t.appendChild(r);const i=document.createElement("div");i.classList.add("tdle-text-c"),i.textContent=n.description,t.appendChild(i);const a=document.createElement("div");a.classList.add("tdle-last-c");const s=document.createElement("i");s.classList.add("fas"),s.classList.add("fa-ellipsis-v"),a.appendChild(s),t.appendChild(a),y.parentNode.insertBefore(t,y)}}};w.setTodo(b),w.showall()})()})();