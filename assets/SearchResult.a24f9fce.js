import{u as q,f as k,g as w,h as Q,i as V,j as F,k as R,S as U,t as T,l as J,m as P,n as t,R as Z,p as C,q as B,s as G,v as K,x as W,y as X}from"./app.26c798e2.js";const S=()=>t(C,{name:"heading"},()=>t("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));S.displayName="HeadingIcon";const A=()=>t(C,{name:"heart"},()=>t("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));A.displayName="HeartIcon";const $=()=>t(C,{name:"history"},()=>t("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));$.displayName="HistoryIcon";const x=()=>t(C,{name:"title"},()=>t("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));x.displayName="TitleIcon";const Y="search-pro-history",f=q(Y,[]),ee=(a=5)=>{const r=n=>{f.value.length<a?f.value=Array.from(new Set([n,...f.value])):f.value=Array.from(new Set([...f.value.slice(0,a-1),n]))};return{history:B(f),addHistory:r}},E=k(G),te=w(()=>JSON.parse(K(E.value)));import.meta.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchProDatabase=a=>{E.value=a});const se={},ae={"/":{close:"关闭",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",emply:"没有找到结果",loading:"正在加载搜索索引..."}},L=(a,r)=>{const n=[];let s=0,l=0;const u=a.toLowerCase(),m=r.toLowerCase();let c=u.indexOf(m,s);const v=(o,i)=>{let e=o,d=!1;if(!i&&e.length>100&&l===0&&(e=`… ${e.slice(-10)}`),l+e.length>100){if(n.some(g=>g[0]==="strong"))return;e=e.slice(0,Math.max(100-l,1)),d=!0}e.length&&(n.push(i?["strong",e]:e),l+=e.length),d&&(n.push("…"),l+=2)};if(c<0)return null;for(;c>=0;){const o=c+m.length;if(v(a.slice(s,c),!1),v(a.slice(c,o),!0),s=o,c=u.indexOf(m,s),l>100)break}return v(a.slice(s),!1),n},z=a=>a.reduce((r,{type:n})=>r+(n==="title"?50:n==="heading"?20:n==="custom"?10:1),0),le=(a,r)=>{var n;const s={};for(const[l,u]of Object.entries(r)){const m=((n=r[l.replace(/\/[^\\]*$/,"")])==null?void 0:n.title)||"",c=`${m?`${m} > `:""}${u.title}`,v=L(u.title,a);v&&(s[c]=[...s[c]||[],{type:"title",path:l,display:v}]),u.customFields&&Object.entries(u.customFields).forEach(([o,i])=>{i.forEach(e=>{const d=L(e,a);d&&(s[c]=[...s[c]||[],{type:"custom",path:l,name:o,display:d}])})});for(const o of u.contents){const i=L(o.header,a);i&&(s[c]=[...s[c]||[],{type:"heading",path:l+(o.slug?`#${o.slug}`:""),display:i}]);for(const e of o.contents){const d=L(e,a);d&&(s[c]=[...s[c]||[],{type:"content",header:o.header||u.title||"Documentation",path:l+(o.slug?`#${o.slug}`:""),display:d}])}}}return Object.keys(s).sort((l,u)=>z(s[l])-z(s[u])).map(l=>({title:l,contents:s[l]}))},oe=a=>{const r=R(),n=k([]),s=w(()=>te.value[r.value]),l=W(u=>{n.value=u?le(u,s.value):[]},200);return X([a,r],()=>{l(a.value)}),n};var ce=Q({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(a,{emit:r}){const n=V(),s=F(),l=R(),u=U(ae),{history:m,addHistory:c}=ee(),v=T(a,"query"),o=oe(v),i=k(0),e=k(0),d=w(()=>o.value.length>0),g=w(()=>o.value[i.value]||null),N=()=>{i.value=i.value>0?i.value-1:o.value.length-1,e.value=g.value.contents.length-1},O=()=>{i.value=i.value<o.value.length-1?i.value+1:0,e.value=0},_=()=>{e.value<g.value.contents.length-1?e.value=e.value+1:O()},j=()=>{e.value>0?e.value=e.value-1:N()},b=p=>p.map(h=>typeof h=="string"?h:t(h[0],h[1])),D=p=>{if(p.type==="custom"){const h=se[p.name]||"$content",[M,H=""]=typeof h=="object"?h[l.value].split("$content"):h.split("$content");return b([M,...p.display,H])}return b(p.display)};return J(()=>{P("keydown",p=>{if(d.value){if(p.key==="ArrowUp")j();else if(p.key==="ArrowDown")_();else if(p.key==="Enter"){const h=g.value.contents[e.value].path;s.path!==h&&(n.push(h),c(v.value),r("updateQuery",""),r("close"))}}})}),()=>v.value===""?t("ul",{class:"search-pro-result-list"},m.value.map(p=>t("li",{class:"search-pro-result-list-item"},t("div",{class:"search-pro-result-item",onClick:()=>{r("updateQuery",p)}},[t($,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},p)])))):d.value?t("ul",{class:"search-pro-result-list"},o.value.map(({title:p,contents:h},M)=>{const H=i.value===M;return t("li",{class:["search-pro-result-list-item",{active:H}]},[t("div",{class:"search-pro-result-title"},p||"Documentation"),h.map((y,I)=>t(Z,{to:y.path,class:["search-pro-result-item",{active:H&&e.value===I}],onClick:()=>{c(v.value),r("updateQuery",""),r("close")}},()=>[y.type==="content"?null:t(y.type==="title"?x:y.type==="heading"?S:A,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[y.type==="content"?t("div",{class:"content-header"},y.header):null,t("div",D(y))])]))])})):t("div",{class:"search-pro-result-list empty"},u.value.emply)}});export{ce as default};
