import{i as o}from"./index.68b19147.js";function u(t){if(t===window)return{top:0,left:0};const{top:n,left:e}=t.getBoundingClientRect();return{top:n,left:e}}function c(t,n){return window.getComputedStyle(t).getPropertyValue(n)}function d(t){return t===window?window.innerHeight:t.getBoundingClientRect().height}function f(t){return t===window?window.innerWidth:t.getBoundingClientRect().width}function r(t,n){const e=t.style;for(const i in n)e[i]=n[i]}function a(t,n){t.forEach(e=>r(e,n))}function s(t){if(typeof t=="function"){if(document.readyState!=="loading")return t();document.addEventListener("DOMContentLoaded",t,!1)}}function l(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const n=o(t);if(n)return n.$el||n}function w(t,n){if(t==null||t.contains(n)===!0)return!0;for(let e=t.nextElementSibling;e!==null;e=e.nextElementSibling)if(e.contains(n))return!0;return!1}var h={offset:u,style:c,height:d,width:f,css:r,cssBatch:a,ready:s};export{w as a,r as c,h as d,l as g};
