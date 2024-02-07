(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n',""]);const c=a},28:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,':root {\n  --font-color: #f0f9ff;\n}\n\nbody {\n  font-family: "Montserrat", sans-serif;\n}\n\n.content {\n  width: 100%;\n  min-height: 100vh;\n  background: linear-gradient(to right, #8ecae6, #fecaca);\n}\n\n.header {\n  display: flex;\n  color: var(--font-color);\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(to right, #f69d3c, #075985, #9198e5);\n  padding-bottom: 4rem;\n  height: max-content;\n  box-shadow: 1px 0px 11px 1px rgb(29, 29, 29);\n  z-index: 1;\n}\n\n.svg {\n  width: 7rem;\n}\n\n.heading {\n  font-size: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.city-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\n#city {\n  border: 0;\n  font-size: 1.2rem;\n}\n\n.btn {\n  color: var(--font-color);\n  font-weight: bold;\n  background: #171717;\n  border: none;\n  padding: 1rem;\n  border-radius: 20px;\n  cursor: pointer;\n}\n\n.btn:hover {\n  background: #fafaf9;\n  color: #171717;\n  transition: 0.7s;\n}\n\n.error {\n  color: red;\n  font-size: 1.3rem;\n  padding-right: 11rem;\n  font-weight: bold;\n  visibility: hidden;\n}\n\n.weather-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.weather-card {\n  background-color: #075985;\n  background: linear-gradient(#075985, #9198e5);\n  border-radius: 20px;\n  color: var(--font-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 25%;\n  height: fit-content;\n  padding: 1rem;\n  margin: 2rem;\n  box-shadow: 3px 5px 20px rgb(29, 29, 29);\n}\n\n.forecast-section {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 2rem;\n}\n\n.forecast-card {\n  width: fit-content;\n  height: fit-content;\n  color: var(--font-color);\n  border-radius: 20px;\n  padding: 2rem;\n  display: flex;\n  background: linear-gradient(#075985, #f69d3c);\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: 3px 5px 20px rgb(29, 29, 29);\n}\n\n.country {\n  font-size: 2rem;\n}\n\n.icon {\n  width: 7rem;\n}\n',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var u=t(m),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var p=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:m,updater:p,references:1})}a.push(m)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),m=t(589),u=t.n(m),f=t(917),p={};p.styleTagTransform=u(),p.setAttributes=s(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),e()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;var h=t(28),b={};b.styleTagTransform=u(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=l(),e()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals,document.querySelector(".btn").addEventListener("click",(async n=>{n.preventDefault();const e=document.querySelector("#city").value;if(e)try{const n=await(async n=>{try{const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=18a3f8efce464b4392b140617240202&q=${n}&days=3&aqi=yes&alerts=yes`,{mode:"cors"});if(!e.ok)throw document.querySelector(".error").style.visibility="visible",new Error("City is not found");document.querySelector(".error").style.visibility="hidden";const t=await e.json(),o=t.current.temp_c,r=t.current.feelslike_c,{country:i}=t.location,{name:a}=t.location,c=t.current.wind_kph,s=t.forecast.forecastday,d={};for(let n=0;n<s.length;n++){const e=0===n?"first":1===n?"second":"third",t=s[n].day.mintemp_c,o=s[n].day.maxtemp_c,r=new Date(s[n].date).toLocaleDateString("en-EN",{weekday:"long"}),{icon:i}=s[n].day.condition;d[e]={mintempC:t,maxtempC:o,icon:i,date:r}}const{icon:l,text:m}=t.current.condition;return{obj:{tempC:o,tempCFeels:r,icon:l,country:i,windKm:c,name:a,text:m},forecastObj:d}}catch(n){console.log(n)}})(e);!async function(n){try{document.querySelector(".forecast-section").innerHTML="";const e=document.querySelector(".weather-section");e.innerHTML="";const t=document.createElement("div");t.classList.add("weather-card");const o=document.createElement("h1");o.classList.add("country"),o.innerText=n.obj.country;const r=document.createElement("img");r.src=n.obj.icon,r.classList.add("icon");const i=document.createElement("h2");i.innerText=n.obj.name;const a=document.createElement("h2");a.innerText=`Temperature: ${n.obj.tempC}°C`;const c=document.createElement("h2");c.innerText=`Temperature feels like: ${n.obj.tempCFeels}°C`;const s=document.createElement("h2");s.innerText=n.obj.text;const d=document.createElement("h2");d.innerText=`Wind: ${n.obj.windKm}km/h`,e.append(t),t.append(r,o,i,a,c,s,d)}catch(n){console.log(n)}}(n),async function(n){try{const e=Object.values(n.forecastObj),t=document.querySelector(".forecast-section");t.innerHTML="";for(let n of e){const e=document.createElement("div");e.classList.add("forecast-card");const o=document.createElement("img");o.src=n.icon,o.classList.add("icon");const r=document.createElement("h2");r.innerText=`Max temperature: ${n.maxtempC}°C`;const i=document.createElement("h2");i.innerText=`Min temperature: ${n.mintempC}°C`;const a=document.createElement("h1");a.innerText=`${n.date}`,t.appendChild(e),e.append(o,r,i,a)}}catch(n){console.log(n)}}(n)}catch(n){console.log(n)}}))})()})();