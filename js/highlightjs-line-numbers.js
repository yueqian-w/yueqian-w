!function(r,o){"use strict";var e,l="hljs-ln",s="hljs-ln-line",f="hljs-ln-code",c="hljs-ln-numbers",d="hljs-ln-n",h="data-line-number",n=/\r\n|\r|\n/g;function t(e){for(var n=e.toString(),t=e.anchorNode;"TD"!==t.nodeName;)t=t.parentNode;for(var r=e.focusNode;"TD"!==r.nodeName;)r=r.parentNode;var e=parseInt(t.dataset.lineNumber),o=parseInt(r.dataset.lineNumber);if(e==o)return n;var i,a=t.textContent,l=r.textContent;for(o<e&&(i=e,e=o,o=i,i=a,a=l,l=i);0!==n.indexOf(a);)a=a.slice(1);for(;-1===n.lastIndexOf(l);)l=l.slice(0,-1);for(var s=a,c=function(e){for(var n=e;"TABLE"!==n.nodeName;)n=n.parentNode;return n}(t),d=e+1;d<o;++d){var u=v('.{0}[{1}="{2}"]',[f,h,d]);s+="\n"+c.querySelector(u).textContent}return s+="\n"+l}function i(e){try{var n,t=o.querySelectorAll("code.hljs,code.nohighlight");for(n in t)!t.hasOwnProperty(n)||t[n].classList.contains("nohljsln")||a(t[n],e)}catch(e){r.console.error("LineNumbers error: ",e)}}function a(e,n){"object"==typeof e&&r.setTimeout(function(){e.innerHTML=u(e,n)},0)}function u(e,n){var n={singleLine:function(e){return e.singleLine||!1}(n=(n=n)||{}),startFrom:function(e,n){var t=1;isFinite(n.startFrom)&&(t=n.startFrom);n=function(e,n){return e.hasAttribute(n)?e.getAttribute(n):null}(e,"data-ln-start-from");null!==n&&(t=function(e,n){if(!e)return n;e=Number(e);return isFinite(e)?e:n}(n,1));return t}(e,n)},e=(!function e(n){var t=n.childNodes;for(var r in t)!t.hasOwnProperty(r)||0<p((r=t[r]).textContent)&&(0<r.childNodes.length?e(r):m(r.parentNode))}(e),e.innerHTML),t=n,r=g(e);if(""===r[r.length-1].trim()&&r.pop(),1<r.length||t.singleLine){for(var o="",i=0,a=r.length;i<a;i++)o+=v('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[s,c,d,h,f,i+t.startFrom,0<r[i].length?r[i]:" "]);return v('<table class="{0}">{1}</table>',[l,o])}return e}function m(e){var n=e.className;if(/hljs-/.test(n)){for(var t=g(e.innerHTML),r=0,o="";r<t.length;r++)o+=v('<span class="{0}">{1}</span>\n',[n,0<t[r].length?t[r]:" "]);e.innerHTML=o.trim()}}function g(e){return 0===e.length?[]:e.split(n)}function p(e){return(e.trim().match(n)||[]).length}function v(e,t){return e.replace(/\{(\d+)\}/g,function(e,n){return void 0!==t[n]?t[n]:e})}r.hljs?(r.hljs.initLineNumbersOnLoad=function(e){"interactive"===o.readyState||"complete"===o.readyState?i(e):r.addEventListener("DOMContentLoaded",function(){i(e)})},r.hljs.lineNumbersBlock=a,r.hljs.lineNumbersValue=function(e,n){var t;if("string"==typeof e)return(t=document.createElement("code")).innerHTML=e,u(t,n)},(e=o.createElement("style")).type="text/css",e.innerHTML=v(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[l,d,h]),o.getElementsByTagName("head")[0].appendChild(e)):r.console.error("highlight.js not detected!"),document.addEventListener("copy",function(e){var n=window.getSelection();!function(e){for(var n=e;n;){if(n.className&&-1!==n.className.indexOf("hljs-ln-code"))return 1;n=n.parentNode}}(n.anchorNode)||(n=-1!==window.navigator.userAgent.indexOf("Edge")?t(n):n.toString(),e.clipboardData.setData("text/plain",n),e.preventDefault())})}(window,document);