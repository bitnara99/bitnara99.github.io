import{h as i,c as n,a,a4 as u}from"./index.e4b45f3e.js";const l=i("div",{class:"q-space"});var f=n({name:"QSpace",setup(){return()=>l}});const m={dark:{type:Boolean,default:null}};function p(t,e){return a(()=>t.dark===null?e.dark.isActive:t.dark)}const r={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},s=Object.keys(r);r.all=!0;function g(t){const e={};for(const o of s)t[o]===!0&&(e[o]=!0);return Object.keys(e).length===0?r:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}const c=["INPUT","TEXTAREA"];function v(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&c.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function h(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),u.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{f as Q,p as a,h as c,g,v as s,m as u};
