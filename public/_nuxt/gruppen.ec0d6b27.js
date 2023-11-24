import{_ as $}from"./Diashow.e9a444cb.js";import{a as g,o as a,F as c,e as t,B as d,I as u,p as m,b as h,w as f,G as w,J as x,K as b,M as D,c as v,H as I}from"./entry.bbbe8ba6.js";import{_ as G}from"./DefaultView.c3fa18c1.js";const S={props:{groupData:{type:Object,required:!0}}},k=e=>(m("data-v-342d170d"),e=e(),h(),e),q={class:"groupDetails"},B={class:"pics"},C={class:"name"},E={class:"info"},J=k(()=>t("p",null,"Gruppenstunde: Freitag 18:30-20:00",-1));function L(e,s,o,i,n,p){const r=$;return a(),c("div",q,[t("div",B,[d(r,{images:o.groupData.images.items.map(_=>_.url),"current-img":"3",height:"280px",repeat:""},null,8,["images"])]),t("div",C,u(o.groupData.name),1),t("div",E,[t("p",null,"Jahrgang: "+u(o.groupData.year),1),J,t("p",null,"Leiter:in: "+u(o.groupData.supervisor),1)])])}const V=g(S,[["render",L],["__scopeId","data-v-342d170d"]]),F=""+new URL("imageError.ef762fd4.svg",import.meta.url).href;const M={props:{gruppe:{type:Object,required:!0}},data(){return{showDetails:!1,loaded:!1}},computed:{getImages(){return this.gruppe.images.items}}},O=e=>(m("data-v-e07381ab"),e=e(),h(),e),P=["src"],R={key:1,class:"cover",src:F},j={class:"name"},H=O(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-chevron-down",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})],-1));function K(e,s,o,i,n,p){const r=V,_=x;return a(),c(w,null,[d(_,{show:n.showDetails,"button-color":"white",onClose:s[0]||(s[0]=l=>n.showDetails=!1)},{default:f(()=>[d(r,{"group-data":o.gruppe},null,8,["group-data"])]),_:1},8,["show"]),t("div",{class:"group",onClick:s[1]||(s[1]=l=>n.showDetails=!0)},[p.getImages[0]?(a(),c("img",{key:0,class:"cover",src:p.getImages[0].url},null,8,P)):(a(),c("img",R)),t("p",j,u(o.gruppe.name),1),H])],64)}const N=g(M,[["render",K],["__scopeId","data-v-e07381ab"]]);const z={async setup(){const e=b`
            query {
                groups: groupCollection(limit: 0) {
                    items {
                        name
                        supervisor
                        year
                        images: imagesCollection(limit: 0) {
                            items {
                                url(
                                    transform: {
                                        format: JPG_PROGRESSIVE
                                        quality: 20
                                    }
                                )
                            }
                        }
                    }
                }
            }
        `,{data:{value:{groups:{items:s}}}}=await D(e);return{groups:s}}},A=e=>(m("data-v-eb880b88"),e=e(),h(),e),Q=A(()=>t("head",null,[t("title",null,"KPJH - Gruppen")],-1)),U={class:"groups"},T={class:"group-grid"};function W(e,s,o,i,n,p){const r=N,_=G;return a(),v(_,{titel:"Gruppen"},{default:f(()=>[Q,t("div",U,[t("div",T,[(a(!0),c(w,null,I(i.groups,(l,y)=>(a(),v(r,{key:y,gruppe:l},null,8,["gruppe"]))),128))])])]),_:1})}const ee=g(z,[["render",W],["__scopeId","data-v-eb880b88"]]);export{ee as default};
