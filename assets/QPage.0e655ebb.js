import{c as g,F as r,G as t,a as s,h as p,H as h,J as d,k as f}from"./index.13f577f6.js";import{a as y}from"./render.5ab69df3.js";var Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:i}){const{proxy:{$q:o}}=f(),e=r(h,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(r(d,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=s(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return a.styleFn(n,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":o.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":o.screen.height-n+"px"}}),u=s(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:u.value,style:c.value},y(i.default))}});export{Q};
