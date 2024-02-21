(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99],{613:function(e,t,r){Promise.resolve().then(r.bind(r,17771))},89987:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(57437),s=r(16691),i=r.n(s);function o(e){let{text:t}=e;return(0,a.jsxs)("div",{className:"flex-middle flex-col gap-4",children:[(0,a.jsx)(i(),{width:100,height:100,src:"/img/pictures/zero-content.png",alt:"Тут пусто"}),t&&(0,a.jsx)("p",{className:"text-black/40 text-center",children:t})]})}},17771:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var a=r(57437),s=r(2265),i=r(89987),o=r(16691),n=r.n(o),l=r(51178),c=r(70970),d=r(773),u=r(50079);r(5925);var p=r(10254),m=r(80476),f=r(25827);function g(e){let{children:t}=e,[r,o]=(0,s.useState)(!1),[g,h]=(0,s.useState)({addDriver:!1,editDriver:!1,deleteDriver:!1}),[x,b]=(0,s.useState)({phone:"",password:"",role:0}),[y,v]=(0,s.useState)([]),[w,j]=(0,s.useState)(0);(0,s.useEffect)(()=>{b({...x,password:u.generate(9)}),async function(){let e=await (0,m.jT)();v(e),o(!!e)}()},[]);let N=async()=>{let e=await (0,m.jT)();v(e)},k=async()=>{await (0,m.n5)(x),await N(),h({...g,addDriver:!1})};return(0,s.useEffect)(()=>{let e=async()=>{try{let e=await (0,f.D2)();console.log("data",e),j(null==e?void 0:e.day_auto_balance)}catch(e){console.error("Ошибка при получении данных об организации",e)}};e()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"h-full",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"rounded-2xl bg-[#F7F9FB] p-6 text-black-100",children:[(0,a.jsx)("h6",{className:"text-lg font-semibold mb-4",children:"Автоматическое пополнение"}),(0,a.jsxs)("div",{className:"flex justify-between gap-4 md:flex-wrap",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"mb-1 text-sm",children:"Суточный баланс"}),(0,a.jsx)("input",{className:"max-w-[140px] px-4 py-2 rounded-lg bg-white border border-black/10 font-semibold text-lg",type:"number",value:w,onChange:e=>{j(e.target.value)},onBlur:()=>{let e=async()=>{try{let e=await (0,m.SL)({day_auto_balance:w});if(e){let e=await (0,f.D2)();j(null==e?void 0:e.day_auto_balance)}}catch(e){console.error("Ошибка при получении данных об организации",e)}};e()}})]}),(0,a.jsxs)("div",{className:"flex gap-1 items-start p-4 bg-[rgba(229,236,246,0.50)] rounded-lg",children:[(0,a.jsx)(n(),{width:16,height:16,src:"/img/icons/warning.svg",alt:"Предупреждение"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"Правила пополнения баланса водителей"}),(0,a.jsxs)("p",{className:"text-black/40",children:["Средства пополняются один раз в сутки в 00:01 по Московскому времени."," ",(0,a.jsx)("span",{className:"text-purple--secondary cursor-pointer",children:"Подробные правила"})]})]})]})]})]}),(0,a.jsxs)("div",{onClick:()=>h({...g,addDriver:!0}),className:"flex-middle gap-2 p-4 rounded-2xl border border-dashed border-green--main bg-[rgba(38,173,96,0.10)] cursor-pointer mt-4 duration-300 hover:bg-[rgba(38,173,96,0.2)]",children:[(0,a.jsx)(n(),{width:30,height:30,src:"/img/icons/plus-green.svg",alt:"Добавление водителя"}),(0,a.jsx)("p",{className:"font-semibold text-sm text-green--main",children:"Добавить водителя"})]})]}),(0,a.jsx)(p.default,{drivers:y,updateDrivers:N}),!r&&(0,a.jsx)("div",{className:"h-full flex-middle",children:(0,a.jsx)(i.Z,{text:"Тут будет отображаться список водителей и баланс их счетов"})})]}),(0,a.jsxs)(l.Z,{trigger:g.addDriver,setTrigger:e=>h({...g,addDriver:e}),title:"Добавить водителя",children:[(0,a.jsxs)("div",{className:"flex-middle flex-col gap-3",children:[(0,a.jsx)("span",{children:"Укажите номер телефона водителя, он необходим для доступа в приложение. Пароль сгенерирован автоматически."}),(0,a.jsx)("span",{children:"Передайте водителю данные для доступа."})]}),(0,a.jsx)(c.Z,{label:"Номер телефона",value:x.phone,setValue:e=>b({...x,phone:e.replace(/[\s-()+]/g,"")}),placeholder:"+7 (___) ___-__-__",mask:"+7 (999) 999-99-99",type:"mask-input",getOnlyNumber:!0}),(0,a.jsx)("div",{className:"w-[388px] md:w-full",children:(0,a.jsx)(d.Z,{type:"success",clickHandler:k,children:"Добавить"})})]})]})}},5925:function(e,t,r){"use strict";let a,s;r.r(t),r.d(t,{CheckmarkIcon:function(){return V},ErrorIcon:function(){return B},LoaderIcon:function(){return U},ToastBar:function(){return ee},ToastIcon:function(){return G},Toaster:function(){return es},default:function(){return ei},resolveValue:function(){return k},toast:function(){return H},useToaster:function(){return Z},useToasterStore:function(){return A}});var i,o=r(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let r="",a="",s="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+o+";":a+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=p.p?p.p(i,o):i+":"+o+";")}return r+(t&&s?t+"{"+s+"}":s)+a},m={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},g=(e,t,r,a,s)=>{var i;let o=f(e),n=m[o]||(m[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);m[n]=p(s?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&m.g?m.g:null;return r&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},h=(e,t,r)=>e.reduce((e,a,s)=>{let i=t[s];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let b,y,v,w=x.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function s(i,o){let n=Object.assign({},i),l=n.className||s.className;r.p=Object.assign({theme:y&&y()},n),r.o=/ *go\d+/.test(l),n.className=x.apply(r,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),b(c,n)}return t?t(s):s}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,E=(a=0,()=>(++a).toString()),_=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},D=new Map,$=e=>{if(D.has(e))return;let t=setTimeout(()=>{D.delete(e),z({type:4,toastId:e})},1e3);D.set(e,t)},C=e=>{let t=D.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&C(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?O(e,{type:1,toast:r}):O(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?$(a):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},T=[],I={toasts:[],pausedAt:void 0},z=e=>{I=O(I,e),T.forEach(e=>{e(I)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},A=(e={})=>{let[t,r]=(0,o.useState)(I);(0,o.useEffect)(()=>(T.push(r),()=>{let e=T.indexOf(r);e>-1&&T.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},F=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||E()}),P=e=>(t,r)=>{let a=F(t,e,r);return z({type:2,toast:a}),a.id},H=(e,t)=>P("blank")(e,t);H.error=P("error"),H.success=P("success"),H.loading=P("loading"),H.custom=P("custom"),H.dismiss=e=>{z({type:3,toastId:e})},H.remove=e=>z({type:4,toastId:e}),H.promise=(e,t,r)=>{let a=H.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(H.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{H.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var L=(e,t)=>{z({type:1,toast:{id:e,height:t}})},M=()=>{z({type:5,time:Date.now()})},Z=e=>{let{toasts:t,pausedAt:r}=A(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&H.dismiss(t.id);return}return setTimeout(()=>H.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,o.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),s=(0,o.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:i}=r||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return{toasts:t,handlers:{updateHeight:L,startPause:M,endPause:a,calculateOffset:s}}},B=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,U=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,V=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=j("div")`
  position: absolute;
`,R=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(Y,null,t):t:"blank"===r?null:o.createElement(R,null,o.createElement(U,{...a}),"loading"!==r&&o.createElement(q,null,"error"===r?o.createElement(B,{...a}):o.createElement(V,{...a})))},J=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,s]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(r),K(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:r,children:a})=>{let s=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(G,{toast:e}),n=o.createElement(W,{...e.ariaProps},k(e.message,e));return o.createElement(Q,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof a?a({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,b=i,y=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:s})=>{let i=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:r},s)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,es=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:s,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=Z(r);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let i=r.position||t,n=er(i,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:n},"custom"===r.type?k(r.message,r):s?s(r):o.createElement(ee,{toast:r,position:i}))}))},ei=H}},function(e){e.O(0,[222,191,762,740,254,971,596,744],function(){return e(e.s=613)}),_N_E=e.O()}]);