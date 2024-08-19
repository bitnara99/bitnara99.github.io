import{g as Ie,v as Te,Q as H}from"./QBtn.b4841e17.js";import{u as Be,a as De,Q as Ne}from"./QSeparator.7ad2d565.js";import{k as pe,N as L,D as Me,O as Ae,m as Y,P as ee,q as se,y as te,p as ne,r as k,a as g,w as M,E as Ve,t as ie,h as _,T as be,a5 as Qe,a2 as ue,a6 as Ee,C as ae,v as ye,c as J,a7 as Le,_ as le,o as P,U as O,Z as xe,$ as Ce,j as c,a8 as je,B as ce,a1 as re,e as K,f as b,a9 as Fe,g as f,X as U,M as Oe,W as qe,Y as de,i as Ue,V as Se}from"./index.96f86e24.js";import{g as ve,s as fe,c as ze}from"./selection.bacaae82.js";import{b as Z,d as we,a as Pe}from"./render.09fe6139.js";import{Q as F}from"./QIcon.7706786c.js";import{Q as W,a as X}from"./QCard.7665d546.js";import{Q as Re}from"./QPage.838ab8e3.js";import{Q as ke}from"./QSpace.a145dd50.js";import{d as me,N as Ye}from"./Notice.bbd0bf04.js";import"./dom.d81b9be1.js";import"./format.7eeb0604.js";function We(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((o,s)=>{const i=parseFloat(o);i&&(t[s]=i)}),t}var Xe=pe({name:"touch-swipe",beforeMount(e,{value:t,arg:o,modifiers:s}){if(s.mouse!==!0&&L.has.touch!==!0)return;const i=s.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:We(o),direction:ve(s),noop:Me,mouseStart(a){fe(a,n)&&Ae(a)&&(Y(n,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(a,!0))},touchStart(a){if(fe(a,n)){const r=a.target;Y(n,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),n.start(a)}},start(a,r){L.is.firefox===!0&&ee(e,!0);const u=se(a);n.event={x:u.left,y:u.top,time:Date.now(),mouse:r===!0,dir:!1}},move(a){if(n.event===void 0)return;if(n.event.dir!==!1){te(a);return}const r=Date.now()-n.event.time;if(r===0)return;const u=se(a),m=u.left-n.event.x,d=Math.abs(m),y=u.top-n.event.y,h=Math.abs(y);if(n.event.mouse!==!0){if(d<n.sensitivity[1]&&h<n.sensitivity[1]){n.end(a);return}}else if(window.getSelection().toString()!==""){n.end(a);return}else if(d<n.sensitivity[2]&&h<n.sensitivity[2])return;const x=d/r,q=h/r;n.direction.vertical===!0&&d<h&&d<100&&q>n.sensitivity[0]&&(n.event.dir=y<0?"up":"down"),n.direction.horizontal===!0&&d>h&&h<100&&x>n.sensitivity[0]&&(n.event.dir=m<0?"left":"right"),n.direction.up===!0&&d<h&&y<0&&d<100&&q>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&d<h&&y>0&&d<100&&q>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&d>h&&m<0&&h<100&&x>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&d>h&&m>0&&h<100&&x>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(te(a),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ze(),n.styleCleanup=B=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const S=()=>{document.body.classList.remove("no-pointer-events--children")};B===!0?setTimeout(S,50):S()}),n.handler({evt:a,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:r,distance:{x:d,y:h}})):n.end(a)},end(a){n.event!==void 0&&(ne(n,"temp"),L.is.firefox===!0&&ee(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),a!==void 0&&n.event.dir!==!1&&te(a),n.event=void 0)}};if(e.__qtouchswipe=n,s.mouse===!0){const a=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";Y(n,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}L.has.touch===!0&&Y(n,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const o=e.__qtouchswipe;o!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&o.end(),o.handler=t.value),o.direction=ve(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(ne(t,"main"),ne(t,"temp"),L.is.firefox===!0&&ee(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function He(){let e=Object.create(null);return{getCache:(t,o)=>e[t]===void 0?e[t]=typeof o=="function"?o():o:e[t],setCache(t,o){e[t]=o},hasCache(t){return Object.hasOwnProperty.call(e,t)},clearCache(t){t!==void 0?delete e[t]:e=Object.create(null)}}}const Ke={name:{required:!0},disable:Boolean},ge={setup(e,{slots:t}){return()=>_("div",{class:"q-panel scroll",role:"tabpanel"},Z(t.default))}},Je={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ze=["update:modelValue","beforeTransition","transition"];function Ge(){const{props:e,emit:t,proxy:o}=ie(),{getCache:s}=He();let i,n;const a=k(null),r=k(null);function u(l){const v=e.vertical===!0?"up":"left";w((o.$q.lang.rtl===!0?-1:1)*(l.direction===v?1:-1))}const m=g(()=>[[Xe,u,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),d=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),y=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),h=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),x=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),q=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),B=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);M(()=>e.modelValue,(l,v)=>{const C=$(l)===!0?D(l):-1;n!==!0&&N(C===-1?0:C<D(v)?-1:1),a.value!==C&&(a.value=C,t("beforeTransition",l,v),Ve(()=>{t("transition",l,v)}))});function S(){w(1)}function V(){w(-1)}function z(l){t("update:modelValue",l)}function $(l){return l!=null&&l!==""}function D(l){return i.findIndex(v=>v.props.name===l&&v.props.disable!==""&&v.props.disable!==!0)}function G(){return i.filter(l=>l.props.disable!==""&&l.props.disable!==!0)}function N(l){const v=l!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(l===-1?d.value:y.value):null;r.value!==v&&(r.value=v)}function w(l,v=a.value){let C=v+l;for(;C!==-1&&C<i.length;){const T=i[C];if(T!==void 0&&T.props.disable!==""&&T.props.disable!==!0){N(l),n=!0,t("update:modelValue",T.props.name),setTimeout(()=>{n=!1});return}C+=l}e.infinite===!0&&i.length!==0&&v!==-1&&v!==i.length&&w(l,l===-1?i.length:-1)}function Q(){const l=D(e.modelValue);return a.value!==l&&(a.value=l),!0}function R(){const l=$(e.modelValue)===!0&&Q()&&i[a.value];return e.keepAlive===!0?[_(Qe,q.value,[_(B.value===!0?s(x.value,()=>({...ge,name:x.value})):ge,{key:x.value,style:h.value},()=>l)])]:[_("div",{class:"q-panel scroll",style:h.value,key:x.value,role:"tabpanel"},[l])]}function p(){if(i.length!==0)return e.animated===!0?[_(be,{name:r.value},R)]:R()}function I(l){return i=Ie(Z(l.default,[])).filter(v=>v.props!==null&&v.props.slot===void 0&&$(v.props.name)===!0),i.length}function E(){return i}return Object.assign(o,{next:S,previous:V,goTo:z}),{panelIndex:a,panelDirectives:m,updatePanelsList:I,updatePanelIndex:Q,getPanelContent:p,getEnabledPanels:G,getPanels:E,isValidPanelName:$,keepAliveProps:q,needsUniqueKeepAliveWrapper:B,goToPanelByOffset:w,goToPanel:z,nextPanel:S,previousPanel:V}}let j=0;const et={fullscreen:Boolean,noRouteFullscreenExit:Boolean},tt=["update:fullscreen","fullscreen"];function nt(){const e=ie(),{props:t,emit:o,proxy:s}=e;let i,n,a;const r=k(!1);Te(e)===!0&&M(()=>s.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&d()}),M(()=>t.fullscreen,y=>{r.value!==y&&u()}),M(r,y=>{o("update:fullscreen",y),o("fullscreen",y)});function u(){r.value===!0?d():m()}function m(){r.value!==!0&&(r.value=!0,a=s.$el.parentNode,a.replaceChild(n,s.$el),document.body.appendChild(s.$el),j++,j===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:d},ue.add(i))}function d(){r.value===!0&&(i!==void 0&&(ue.remove(i),i=void 0),a.replaceChild(s.$el,n),r.value=!1,j=Math.max(0,j-1),j===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return Ee(()=>{n=document.createElement("span")}),ae(()=>{t.fullscreen===!0&&m()}),ye(d),Object.assign(s,{toggleFullscreen:u,setFullscreen:m,exitFullscreen:d}),{inFullscreen:r,toggleFullscreen:u}}const ot=["top","right","bottom","left"],it=["regular","flat","outline","push","unelevated"];var at=J({name:"QCarousel",props:{...Be,...Je,...et,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>it.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ot.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...tt,...Ze],setup(e,{slots:t}){const{proxy:{$q:o}}=ie(),s=De(e,o);let i=null,n;const{updatePanelsList:a,getPanelContent:r,panelDirectives:u,goToPanel:m,previousPanel:d,nextPanel:y,getEnabledPanels:h,panelIndex:x}=Ge(),{inFullscreen:q}=nt(),B=g(()=>q.value!==!0&&e.height!==void 0?{height:e.height}:{}),S=g(()=>e.vertical===!0?"vertical":"horizontal"),V=g(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),z=g(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(q.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${S.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${V.value}`:"")),$=g(()=>{const p=[e.prevIcon||o.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||o.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&o.lang.rtl===!0?p.reverse():p}),D=g(()=>e.navigationIcon||o.iconSet.carousel.navigationIcon),G=g(()=>e.navigationActiveIcon||D.value),N=g(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));M(()=>e.modelValue,()=>{e.autoplay&&w()}),M(()=>e.autoplay,p=>{p?w():i!==null&&(clearTimeout(i),i=null)});function w(){const p=Le(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,p>=0?y():d()},p)}ae(()=>{e.autoplay&&w()}),ye(()=>{i!==null&&clearTimeout(i)});function Q(p,I){return _("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${p} q-carousel__navigation--${V.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[_("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},h().map(I))])}function R(){const p=[];if(e.navigation===!0){const I=t["navigation-icon"]!==void 0?t["navigation-icon"]:l=>_(H,{key:"nav"+l.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${l.active===!0?"":"in"}active`,...l.btnProps,onClick:l.onClick}),E=n-1;p.push(Q("buttons",(l,v)=>{const C=l.props.name,T=x.value===v;return I({index:v,maxIndex:E,name:C,active:T,btnProps:{icon:T===!0?G.value:D.value,size:"sm",...N.value},onClick:()=>{m(C)}})}))}else if(e.thumbnails===!0){const I=e.controlColor!==void 0?` text-${e.controlColor}`:"";p.push(Q("thumbnails",E=>{const l=E.props;return _("img",{key:"tmb#"+l.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${l.name===e.modelValue?"":"in"}active`+I,src:l.imgSrc||l["img-src"],onClick:()=>{m(l.name)}})}))}return e.arrows===!0&&x.value>=0&&((e.infinite===!0||x.value>0)&&p.push(_("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${S.value} absolute flex flex-center`},[_(H,{icon:$.value[0],...N.value,onClick:d})])),(e.infinite===!0||x.value<n-1)&&p.push(_("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${S.value} absolute flex flex-center`},[_(H,{icon:$.value[1],...N.value,onClick:y})]))),Pe(t.control,p)}return()=>(n=a(t),_("div",{class:z.value,style:B.value},[we("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>u.value)].concat(R())))}});const lt={},rt=e=>(xe("data-v-cb985e2e"),e=e(),Ce(),e),st={class:"banner-section full-width bg-green-3"},ut=rt(()=>c("div",null,"\uBC30\uB108\uC601\uC5ED\uC785\uB2C8\uB2E4.",-1)),ct=[ut];function dt(e,t){return P(),O("div",st,ct)}var vt=le(lt,[["render",dt],["__scopeId","data-v-cb985e2e"]]);const _e={threshold:0,root:null,rootMargin:"0px"};function he(e,t,o){let s,i,n;typeof o=="function"?(s=o,i=_e,n=t.cfg===void 0):(s=o.handler,i=Object.assign({},_e,o.cfg),n=t.cfg===void 0||je(t.cfg,i)===!1),t.handler!==s&&(t.handler=s),n===!0&&(t.cfg=i,t.observer!==void 0&&t.observer.unobserve(e),t.observer=new IntersectionObserver(([a])=>{if(typeof t.handler=="function"){if(a.rootBounds===null&&document.body.contains(e)===!0){t.observer.unobserve(e),t.observer.observe(e);return}(t.handler(a,t.observer)===!1||t.once===!0&&a.isIntersecting===!0)&&$e(e)}},i),t.observer.observe(e))}function $e(e){const t=e.__qvisible;t!==void 0&&(t.observer!==void 0&&t.observer.unobserve(e),delete e.__qvisible)}var ft=pe({name:"intersection",mounted(e,{modifiers:t,value:o}){const s={once:t.once===!0};he(e,s,o),e.__qvisible=s},updated(e,t){const o=e.__qvisible;o!==void 0&&he(e,o,t.value)},beforeUnmount:$e}),oe=J({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(e,{slots:t,emit:o}){const s=k(ce.value===!0?e.ssrPrerender:!1),i=g(()=>e.root!==void 0||e.margin!==void 0||e.threshold!==void 0?{handler:u,cfg:{root:e.root,rootMargin:e.margin,threshold:e.threshold}}:u),n=g(()=>e.disable!==!0&&(ce.value!==!0||e.once!==!0||e.ssrPrerender!==!0)),a=g(()=>[[ft,i.value,void 0,{once:e.once}]]),r=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`);function u(d){s.value!==d.isIntersecting&&(s.value=d.isIntersecting,e.onVisibility!==void 0&&o("visibility",s.value))}function m(){if(s.value===!0)return[_("div",{key:"content",style:r.value},Z(t.default))];if(t.hidden!==void 0)return[_("div",{key:"hidden",style:r.value},t.hidden())]}return()=>{const d=e.transition?[_(be,{name:"q-transition--"+e.transition},m)]:m();return we(e.tag,{class:"q-intersection"},d,"main",n.value,()=>a.value)}}}),mt=J({name:"QCarouselSlide",props:{...Ke,imgSrc:String},setup(e,{slots:t}){const o=g(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>_("div",{class:"q-carousel__slide",style:o.value},Z(t.default))}});const gt={class:"slide-content-section column"},_t={class:"text-h3"},ht={class:"row full-width items-center justify-between"},pt={class:"col-6"},bt=["alt","src"],yt={__name:"SlideContent",props:["name","imgSrc","title","subTitle","content","linkUrl","bgColor"],setup(e){const t=re(),o=e,s=i=>{i.startsWith("/")?t.push({path:i}):i.startsWith("https://")?location.href=i:console.error("link\uB85C \uC774\uB3D9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")};return(i,n)=>(P(),K(mt,{name:"slide"+o.name,class:"q-pa-none"},{default:b(()=>[c("div",{class:"full-height full-width",style:Fe({backgroundColor:o.bgColor})},[c("div",gt,[f(oe,{transition:"fade","transition-duration":"1200"},{default:b(()=>[c("div",null,[c("div",_t,U(o.title),1),c("div",null,U(o.subTitle),1),c("div",null,U(o.content),1)])]),_:1}),f(ke),c("div",ht,[f(oe,{transition:"jump-up","transition-duration":"600"},{default:b(()=>[f(H,{class:"slide-link col-6",flat:"",onClick:n[0]||(n[0]=a=>s(o.linkUrl))},{default:b(()=>[Oe(" \uBC14\uB85C\uAC00\uAE30 ")]),_:1})]),_:1}),c("div",pt,[f(oe,{transition:"scale",style:{"min-height":"120px"}},{default:b(()=>[c("img",{alt:o.imgSrc,src:`/images/${o.imgSrc}`,style:{height:"120px",width:"100%"}},null,8,bt)]),_:1})])])])],4)]),_:1},8,["name"]))}};var xt=le(yt,[["__scopeId","data-v-0d27c266"]]),Ct=[{title:"\uC790\uB3D9\uCC28\uB300\uCD9C",imgSrc:"undraw_term_sheet_re_ju7s.svg",subTitle:"#\uC790\uB3D9\uCC28 #\uB2F4\uBCF4 #\uB300\uCD9C",content:"\uC790\uB3D9\uCC28\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC790\uB3D9\uCC28\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC790\uB3D9\uCC28\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC790\uB3D9\uCC28\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC790\uB3D9\uCC28\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC790\uB3D9\uCC28\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4",linkUrl:"/loan/car",bgColor:"#b2dfdb"},{title:"\uC2E0\uC6A9\uB300\uCD9C",imgSrc:"undraw_pitching_re_fpgk.svg",subTitle:"#\uC2E0\uC6A9\uB300\uCD9C #\uC2E0\uC6A9 #\uACE0\uAC1D",content:"\uC2E0\uC6A9\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC2E0\uC6A9\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC2E0\uC6A9\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC2E0\uC6A9\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC2E0\uC6A9\uB300\uCD9C\uC2E0\uC6A9\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4",linkUrl:"/loan/credit",bgColor:"#ffecb3"},{title:"\uC8FC\uD0DD\uB2F4\uBCF4\uB300\uCD9C",imgSrc:"undraw_investor_update_re_qnuu.svg",subTitle:"#\uC8FC\uD0DD\uB2F4\uBCF4 #\uC8FC\uB2F4\uB300 #\uB2F4\uBCF4\uB300\uCD9C",content:"\uC8FC\uD0DD\uB2F4\uBCF4\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC8FC\uD0DD\uB2F4\uBCF4\uB300\uCD9C\uC8FC\uD0DD\uB2F4\uBCF4\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC8FC\uD0DD\uB2F4\uBCF4\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC8FC\uD0DD\uB2F4\uBCF4\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4",linkUrl:"/loan/mortgage",bgColor:"#f8bbd0"},{title:"\uC18C\uC561\uB300\uCD9C",imgSrc:"undraw_investor_update_re_qnuu.svg",subTitle:"#\uC18C\uC561\uB300\uCD9C #\uB300\uD559\uC0DD #\uC2A4\uC6E9",content:"\uC18C\uC561\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC18C\uC561\uB300\uCD9C\uC18C\uC561\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC18C\uC561\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uB0B4\uC6A9\uC785\uB2C8\uB2E4\uB0B4\uC6A9\uC785\uB2C8\uB2E4 \uC18C\uC561\uB300\uCD9C\uB0B4\uC6A9\uC785\uB2C8\uB2E4",linkUrl:"/loan/small",bgColor:"#c5cae9"}];const qt=["top","middle","bottom"];var St=J({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>qt.includes(e)}},setup(e,{slots:t}){const o=g(()=>e.align!==void 0?{verticalAlign:e.align}:null),s=g(()=>{const i=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(i!==void 0?` text-${i}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>_("div",{class:s.value,style:o.value,role:"status","aria-label":e.label},Pe(t.default,e.label!==void 0?[e.label]:[]))}});const wt=["onClick"],Pt={class:"text-subtitle1 text-weight-bold"},kt={key:0,class:"self-center q-px-xs"},$t={class:"text-grey-5 self-end q-px-sm"},It={__name:"MainNotice",setup(e){const t=re(),o=k([]),s=()=>{const a=Ye.sort((r,u)=>u.seq-r.seq);o.value=a.filter((r,u)=>u<3)},i=a=>{t.push({name:"notice/detail",params:{seq:a}})},n=a=>{const r=new Date,u=me.addToDate(new Date(a),{days:2});return r<u};return ae(()=>{s()}),(a,r)=>(P(!0),O(Se,null,qe(o.value,(u,m)=>(P(),O("div",{key:m},[m!==0?(P(),K(Ne,{key:0,class:"bg-grey-3"})):de("",!0),c("div",{class:"row q-py-lg cursor-pointer",onClick:d=>i(u.seq)},[c("div",Pt,U(u.title),1),n(u.createDate)?(P(),O("div",kt,[f(St,{rounded:"",color:"red",label:"new"})])):de("",!0),c("div",$t,U(Ue(me).formatDate(u.createDate,"YYYY-MM-DD")),1),f(ke),f(F,{name:"navigate_next",size:"20px"})],8,wt)]))),128))}};const A=e=>(xe("data-v-8a33670a"),e=e(),Ce(),e),Tt={class:"slide-section"},Bt={class:"main-link-section full-width q-py-xl"},Dt=A(()=>c("div",{class:"title-wrap q-pt-lg q-px-lg"},[c("div",{class:"text-subtitle1"},"\uACE0\uAC1D\uB2D8\uC758 \uD798\uC774 \uB418\uB294 \uAE08\uC735\uD30C\uD2B8\uB108"),c("div",{class:"text-h5 text-weight-bolder"},"\uC81C\uC774\uB514\uB300\uBD80\uAC00 \uD568\uAED8\uD569\uB2C8\uB2E4.")],-1)),Nt={class:"menu-wrap"},Mt={class:"row q-ma-none"},At={class:"flex text-green-5 col-6"},Vt=A(()=>c("div",{class:"col-6 column justify-center"},[c("div",{class:"text-h6 text-weight-bold"}," \uC790\uB3D9\uCC28 \uB300\uCD9C ")],-1)),Qt={class:"flex text-orange-5 col-6"},Et=A(()=>c("div",{class:"col-6 column justify-center"},[c("div",{class:"text-h6 text-weight-bold"}," \uC2E0\uC6A9\uB300\uCD9C ")],-1)),Lt={class:"row"},jt={class:"flex text-deep-orange-5 col-6"},Ft=A(()=>c("div",{class:"col-6 column justify-center"},[c("div",{class:"text-h6 text-weight-bold"}," \uC8FC\uD0DD\uB2F4\uBCF4\uB300\uCD9C ")],-1)),Ot={class:"flex text-teal-5 col-6"},Ut=A(()=>c("div",{class:"col-6 column justify-center"},[c("div",{class:"text-h6 text-weight-bold"}," \uC18C\uC561\uB300\uCD9C ")],-1)),zt={class:"notice-section full-width q-pa-md"},Rt=A(()=>c("div",{class:"notice-title q-pb-sm"},[c("div",{class:"text-h5"},"\uACF5\uC9C0\uC0AC\uD56D")],-1)),Yt={__name:"MainPage",setup(e){const t=re(),o=k(1),s=k(2500),i=k(Ct),n=a=>{t.push(a)};return(a,r)=>(P(),K(Re,{class:"flex"},{default:b(()=>[c("div",Tt,[f(at,{height:"100%",animated:"",modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=u=>o.value=u),infinite:"",navigation:"",swipeable:"",autoplay:s.value,"transition-prev":"slide-right","transition-next":"slide-left"},{default:b(()=>[(P(!0),O(Se,null,qe(i.value,(u,m)=>(P(),K(xt,{key:m,name:m,imgSrc:u.imgSrc,title:u.title,subTitle:u.subTitle,content:u.content,linkUrl:u.linkUrl,bgColor:u.bgColor},null,8,["name","imgSrc","title","subTitle","content","linkUrl","bgColor"]))),128))]),_:1},8,["modelValue","autoplay"])]),c("div",Bt,[Dt,c("div",Nt,[c("div",Mt,[f(X,{class:"col q-ma-md",bordered:"",flat:""},{default:b(()=>[f(W,{class:"full-height column text-center",onClick:r[1]||(r[1]=u=>n("loan/car"))},{default:b(()=>[c("div",At,[f(F,{tag:"div",class:"col",name:"directions_car",size:"2rem"})]),Vt]),_:1})]),_:1}),f(X,{class:"col q-ma-md",bordered:"",flat:""},{default:b(()=>[f(W,{class:"full-height column text-center",onClick:r[2]||(r[2]=u=>n("loan/credit"))},{default:b(()=>[c("div",Qt,[f(F,{tag:"div",class:"col",name:"handshake",size:"2rem"})]),Et]),_:1})]),_:1})]),c("div",Lt,[f(X,{class:"col q-ma-md",bordered:"",flat:""},{default:b(()=>[f(W,{class:"full-height column text-center",onClick:r[3]||(r[3]=u=>n("loan/mortgage"))},{default:b(()=>[c("div",jt,[f(F,{tag:"div",class:"col",name:"home",size:"2rem"})]),Ft]),_:1})]),_:1}),f(X,{class:"col q-ma-md",bordered:"",flat:""},{default:b(()=>[f(W,{class:"full-height column text-center",onClick:r[4]||(r[4]=u=>n("loan/small"))},{default:b(()=>[c("div",Ot,[f(F,{tag:"div",class:"col",name:"paid",size:"2rem"})]),Ut]),_:1})]),_:1})])])]),f(vt),c("div",zt,[Rt,f(It)])]),_:1}))}};var ln=le(Yt,[["__scopeId","data-v-8a33670a"]]);export{ln as default};
