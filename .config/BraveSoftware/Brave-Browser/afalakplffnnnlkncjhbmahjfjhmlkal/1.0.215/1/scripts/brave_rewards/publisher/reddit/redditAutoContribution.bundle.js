(()=>{"use strict";const e="mnojpmjdmbbfmejpflffifhffcmidifd";let t=null;const n=()=>t,i=(e,t)=>e&&t?`${e}_${t}`:"";RegExp(/&(?:amp|lt|gt|quot|#(0+)?39);/g.source);let o=!1;const a="reddit";let s=0,r="";const c=new Set,d=()=>{s=Date.now()},m=e=>{e&&(e.url||"complete"===e.status)&&location.href!==r&&(r=location.href,d())};var l;chrome.extension.inIncognitoContext||(l=e=>{e?(document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState?d():(()=>{const e=(e=>{if(!e.pathname||!e.pathname.startsWith("/user/"))return"";const t=e.pathname.split("/").filter((e=>e));return t&&0!==t.length?t.length<2?"":t[1]:""})(new URL(location.href)),t=!c.has(e);t&&c.add(e);const o=Math.round((Date.now()-s)/1e3);((e,t,o,a)=>{if(!t)return;const s=n();s&&s.postMessage({type:"MediaDurationMetadata",mediaType:e,data:{mediaKey:i(e,t),duration:o,firstVisit:a}})})(a,e,o,t)})()})),"visible"===document.visibilityState&&d(),((e,t)=>{if(o)return;o=!0;const i=n();i&&(i.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),i.onMessage.addListener((function(e){e.data&&"OnUpdatedTab"===e.type&&t(e.data.changeInfo)})))})(a,m)):console.error("Failed to initialize communications port")},t?l(!0):(chrome.runtime.sendMessage(e,{type:"SupportsGreaselion"},(function(n){!chrome.runtime.lastError&&n&&n.supported&&(t=chrome.runtime.connect(e,{name:"Greaselion"}),l(!0))})),setTimeout((()=>{t||(t=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),l(!0))}),100)),console.info("Greaselion script loaded: redditAutoContribution.ts"))})();