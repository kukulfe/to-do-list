(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=o=>{const r=document.createElement(o.tagName);r.classList.add(...o.style),r.textContent=o.text;for(const n in o.attributes)r.setAttribute(n,o.attributes[n]);return r},d={tagName:"header",style:["w-3xs","h-[40px]","bg-red-400"]},l=()=>i(d),u=()=>{const o=document.querySelector("#app"),r=l();o.append(r)};u();
