!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return f}));const r=(e,t)=>e&&t?`${e}_${t}`:"",o=(e,t)=>`${e}#channel:${t}`,i=(e,t,n)=>{if(e.length<t.length)return"";const r=e.indexOf(t);if(-1===r)return"";const o=r+t.length,i=e.indexOf(n,o);let s="";return i!==o?s=-1!==i&&i>o||-1!==i?e.substring(o,i):e.substring(o):""===n&&(s=e.substring(o)),s},s=(e,t)=>{const n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const o=n[r];if(e[o]!==t[o])return!1}return!0},a=()=>"complete"===document.readyState&&"visible"===document.visibilityState,c=(e,t)=>`${e}: ${t.statusText} (${t.status})`,l={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},u=/&(?:amp|lt|gt|quot|#(0+)?39);/g,d=RegExp(u.source),f=e=>e&&d.test(e)?e.replace(u,e=>l[e]||"'"):e||""},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s}));let r=null;const o=()=>r,i=e=>{r?e(!0):(chrome.runtime.sendMessage("mnojpmjdmbbfmejpflffifhffcmidifd",{type:"SupportsGreaselion"},(function(t){if(!chrome.runtime.lastError&&t&&t.supported)return r=chrome.runtime.connect("mnojpmjdmbbfmejpflffifhffcmidifd",{name:"Greaselion"}),void e(!0)})),setTimeout(()=>{if(!r)return r=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),void e(!0)},100))},s=(e,t)=>{e&&r&&r.postMessage({type:"GreaselionError",mediaType:e,data:{errorMessage:t}})}},,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1);let o=!1;const i=(e,t)=>{if(!e||o)return;o=!0;const n=Object(r.b)();n&&(n.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),n.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnUpdatedTab":t(e.data.changeInfo)}})))}},,function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s}));const r="twitter",o="twitter.com",i=["https://api.twitter.com/1.1/*"],s=["requestHeaders","extraHeaders"]},,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=(e,t)=>chrome.i18n?chrome.i18n.getMessage(e,t):e},function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var r=n(0);const o=["authorization","x-csrf-token","x-guest-token"],i=/[; ]_twitter_sess=([^\s;]*)/;let s=null,a={};const c=e=>{if(!e)return null;const t=e.match(i);return t?unescape(t[1]):null},l=()=>a,u=()=>a.authorization&&(a["x-csrf-token"]&&a["x-twitter-auth-type"]||a["x-csrf-token"]&&a["x-guest-token"]),d=e=>{if(!e)return!1;let t={};for(const n of e)if("Cookie"===n.name){const e=c(n.value);e!==s&&(s=e,t={})}else(o.includes(n.name)||n.name.startsWith("x-twitter-"))&&(t[n.name]=n.value);return"yes"!==t["x-twitter-active-user"]&&(t["x-twitter-active-user"]="yes"),!r.a(a,t)&&(a=t,!0)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return s}));const r=(e,t)=>e?t?`https://twitter.com/intent/user?user_id=${t}&screen_name=${e}`:`https://twitter.com/${e}/`:"",o=(e,t)=>{if(!e)return null;if(!t)return e.getAttribute("data-tweet-id");const n=e.querySelector("a[href*='/status/']");if(!n||!n.href)return null;const r=n.href.match(/status\/(\d+)/);return!r||r.length<2?null:r[1]},i=e=>{const t=new URLSearchParams(e.search);if(!t)return"";const n=t.get("screen_name");if(n)return unescape(n);if(!e.pathname)return"";const r=e.pathname.split("/").filter(e=>e);return r&&0!==r.length?r[0]:""},s=e=>{if(["/","/about","/home","/login","/logout","/messages","/privacy","/search","/settings","/tos"].includes(e))return!0;const t=["/account/","/compose/","/explore","/hashtag/","/i/","/messages/","/notifications","/settings/","/who_to_follow/","/?login","/?logout"];for(const n of t)if(e.startsWith(n))return!0;return!1}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var r=n(1);let o=!1,i=!1;const s=(e,t,n)=>{if(!e||o)return;o=!0;const i=Object(r.b)();i&&(i.postMessage({type:"RegisterOnCompletedWebRequest",mediaType:e,data:{urlPatterns:[t]}}),i.onMessage.addListener(e=>{switch(e.type){case"OnCompletedWebRequest":n(e.mediaType,e.details)}}))},a=(e,t,n,o)=>{if(!e||i)return;i=!0;const s=Object(r.b)();s&&(s.postMessage({type:"RegisterOnSendHeadersWebRequest",mediaType:e,data:{urlPatterns:t,extra:n}}),s.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnSendHeadersWebRequest":o(e.mediaType,e.data.details)}})))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=()=>`url("data:image/svg+xml,${encodeURIComponent('<svg fill="inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.821 11.1L8.075 6.732v-2.38l4.917 8.195-2.17-1.447zm-6.03.965h5.397l1.752 1.168H2.747l2.043-1.168zm2.13-5.333L4.187 11.08l-1.983 1.133 4.717-7.861v2.38zm.577 1.251l1.841 2.928H5.657l1.841-2.928zm7.42 5.53L7.993 1.97c-.018-.03-.043-.054-.066-.08a.568.568 0 00-.429-.2.57.57 0 00-.43.2c-.022.026-.047.05-.064.08L.079 13.513a.59.59 0 00-.061.143c-.002.004-.002.007-.002.01a.571.571 0 00-.008.237.56.56 0 00.064.193c.01.017.023.029.034.044.02.026.037.055.06.077.021.022.047.038.071.057.017.011.031.025.048.035.027.016.056.025.085.036.018.007.035.016.054.022a.597.597 0 00.132.017c.006 0 .012.003.017.003h13.85a.576.576 0 00.495-.874z" fill="#6A7684"/></svg>')}")`},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(1),o=n(14),i=n(5);let s=0;const a=(e,t)=>new Promise((n,a)=>{if(!e||!t)return void a(new Error("Invalid parameters"));if(!Object(o.b)())return void a(new Error("Missing auth headers"));const c=Object(r.b)();if(!c)return void a(new Error("Invalid port"));if(0!==s&&Date.now()-s<3e3)return void a(new Error("Ignoring API request due to network throttle"));s=Date.now();const l=Object(o.a)();c.postMessage({type:"OnAPIRequest",mediaType:i.b,data:{name:e,url:t,init:{credentials:"include",headers:{...l},referrerPolicy:"no-referrer-when-downgrade",method:"GET",redirect:"follow"}}}),c.onMessage.addListener((function t(r){if(c){if(!r||!r.data)return c.onMessage.removeListener(t),void a(new Error("Invalid message"));if("OnAPIResponse"===r.type){if(!r.data.name||!r.data.response&&!r.data.error)return c.onMessage.removeListener(t),void a(new Error("Invalid message"));if(r.data.name===e)return c.onMessage.removeListener(t),r.data.error?void a(new Error(r.data.error)):void n(r.data.response)}}else a(new Error("Invalid port"))}))}),c=async e=>{if(!e)return Promise.reject(new Error("Invalid parameters"));return a("GetTweetDetails","https://api.twitter.com/1.1/statuses/show.json?id="+e)},l=async e=>{if(!e)return Promise.reject(new Error("Invalid parameters"));return a("GetUserDetails","https://api.twitter.com/1.1/users/show.json?screen_name="+e)}},,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(3),i=n(16),s=n(14),a=n(0),c=n(13),l=n(17),u=n(21),d=n(5),f=n(15);let p=null,m=!0;const g=e=>{if("Enter"!==e.key&&"Space"!==e.code)return;const t=e.target;if(!t)return;const n=t.shadowRoot;if(!n)return;const r=n.querySelector(".js-actionButton");r&&r.click()},h=(e,t,n)=>{const r=document.createElement("div");r.className="ProfileTweet-action js-tooltip action-brave-tip",r.style.display="inline-block",r.style.minWidth="80px",r.style.textAlign=n?"right":"start",r.setAttribute("role","button"),r.setAttribute("tabindex","0"),r.setAttribute("data-original-title",c.a("twitterTipsHoverText")),r.addEventListener("keydown",g);const o=document.createElement("button");o.className="ProfileTweet-actionButton u-textUserColorHover js-actionButton",o.style.background="transparent",o.style.border="0",o.style.color="#657786",o.style.cursor="pointer",o.style.display="inline-block",o.style.fontSize="16px",o.style.lineHeight="1",o.style.outline="0",o.style.padding="0 2px",o.style.position="relative",o.type="button",o.onclick=function(n){if(m)((e,t)=>e&&t?u.a(t).then(e=>({user:{id:e.user.id_str,screenName:e.user.screen_name,fullName:e.user.name,favIconUrl:e.user.profile_image_url_https.replace("_normal","")},post:{id:t,timestamp:e.created_at,text:e.text}})).catch(e=>(console.error(`Failed to fetch tweet details for ${t}: ${e.message}`),Promise.reject(e))):Promise.reject(new Error("Invalid parameters")))(e,t).then(e=>{e&&y(e)}).catch(t=>{console.error(`Failed to fetch tweet metadata for ${e}:`,t)});else{const n=((e,t)=>{if(!e)return null;const n=e.getElementsByClassName("tweet-text");if(!n||0===n.length)return null;const r=n[0],o=e.getElementsByClassName("js-short-timestamp");if(!o||0===o.length)return null;const i=o[0].getAttribute("data-time")||"";return{user:{id:e.getAttribute("data-user-id")||"",screenName:e.getAttribute("data-screen-name")||"",fullName:e.getAttribute("data-name")||"",favIconUrl:""},post:{id:t,timestamp:i,text:r.innerText||""}}})(e,t);n&&y(n)}n.stopPropagation()},m&&e&&(e=>{if(!e||!location.pathname.includes("/status/"))return!1;return!!e.querySelector("a[href*='how-to-tweet']")})(e)&&(o.style.marginTop="12px");const i=document.createElement("div");i.className="IconContainer js-tooltip",i.style.display="inline-block",i.style.lineHeight="0",i.style.position="relative",i.style.verticalAlign="middle",o.appendChild(i);const s=document.createElement("span");s.className="Icon Icon--medium",s.style.background="transparent",s.style.content=l.a(),s.style.display="inline-block",s.style.fontSize="18px",s.style.fontStyle="normal",s.style.height="16px",s.style.marginTop="2px",s.style.position="relative",s.style.verticalAlign="baseline",s.style.width="16px",i.appendChild(s);const a=document.createElement("span");a.className="ProfileTweet-actionCount",a.style.color="#657786",a.style.display="inline-block",a.style.fontSize="12px",a.style.fontWeight="bold",a.style.lineHeight="1",a.style.marginLeft="6px",a.style.position="relative",a.style.verticalAlign="text-bottom",o.appendChild(a);const d=document.createElement("span");d.className="ProfileTweet-actionCountForPresentation",d.textContent=c.a("twitterTipsIconLabel"),a.appendChild(d);const f=r.attachShadow({mode:"open"});f.appendChild(o);const p=document.createElement("style");return p.appendChild(document.createTextNode(".ProfileTweet-actionButton :hover { color: #6781db }")),f.appendChild(p),r},y=e=>{if(!e)return;const t=f.a(e.user.screenName,e.user.id),n=a.c(d.b,e.user.id),o=e.user.screenName,i=e.user.screenName,s=Object(r.b)();s&&s.postMessage({type:"TipUser",mediaType:d.b,data:{url:t,publisherKey:n,publisherName:o,publisherScreenName:i,favIconUrl:e.user.favIconUrl,postId:e.post.id,postTimestamp:e.post.timestamp,postText:e.post.text}})},b=()=>{clearTimeout(p),m=!0;let e=document.querySelectorAll('[role="article"]');0===e.length&&(e=document.querySelectorAll(".tweet"),m=!1);for(let t=0;t<e.length;++t){const n=f.c(e[t],m);if(!n)continue;let r;if(r=m?e[t].querySelector('[role="group"]'):e[t].querySelector(".js-actions"),!r)continue;if(0===r.getElementsByClassName("action-brave-tip").length){const o=(r.querySelectorAll(":scope > div").length||0)>3,i=h(e[t],n,o);r.appendChild(i)}}p=setTimeout(b,3e3)},v=(e,t)=>{e===d.b&&t&&t.requestHeaders&&s.c(t.requestHeaders)&&b()},w=e=>{e&&e.url&&b()};chrome.extension.inIncognitoContext||(Object(r.a)(e=>{e?(a.e()?b():document.addEventListener("readystatechange",(function(){a.e()&&b()})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&b()})),i.b(d.b,d.d,d.c,v),o.a(d.b,w)):console.error("Failed to initialize communications port")}),console.info("Greaselion script loaded: twitterInlineTipping.ts"))}]);