import{c as t,a as o,h as s,t as c}from"./index.68b19147.js";import{b as d}from"./render.aac01231.js";import{u as l,a as i}from"./QSeparator.0352044d.js";var v=t({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:r}){const e=o(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>s(a.tag,{class:e.value},d(r.default))}}),g=t({name:"QCard",props:{...l,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=c(),n=i(a,e),u=o(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>s(a.tag,{class:u.value},d(r.default))}});export{v as Q,g as a};
