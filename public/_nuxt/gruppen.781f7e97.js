import{_ as $}from"./Diashow.03c865d9.js";import{a as g,o as a,F as c,e as t,B as d,I as i,p as m,b as h,w as f,G as w,J as x,R as y,M as D,c as v,H as I}from"./entry.fad59579.js";import{_ as b}from"./DefaultView.369559e8.js";const G={props:["groupData"]},S=e=>(m("data-v-487b61dc"),e=e(),h(),e),k={class:"groupDetails"},B={class:"pics"},C={class:"name"},q={class:"info"},E=S(()=>t("p",null,"Gruppenstunde: Freitag 18:30-20:00",-1));function J(e,s,o,u,n,p){const r=$;return a(),c("div",k,[t("div",B,[d(r,{images:o.groupData.images.items.map(_=>_.url),"current-img":"3",height:"280px",repeat:""},null,8,["images"])]),t("div",C,i(o.groupData.name),1),t("div",q,[t("p",null,"Jahrgang: "+i(o.groupData.year),1),E,t("p",null,"Leiter:in: "+i(o.groupData.supervisor),1)])])}const L=g(G,[["render",J],["__scopeId","data-v-487b61dc"]]),R=""+new URL("imageError.ef762fd4.svg",import.meta.url).href;const V={props:["gruppe"],data(){return{showDetails:!1,loaded:!1}},computed:{getImages(){return this.gruppe.images.items}}},F=e=>(m("data-v-35c67e8a"),e=e(),h(),e),M=["src"],P={key:1,class:"cover",src:R},H={class:"name"},N=F(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-chevron-down",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})],-1));function z(e,s,o,u,n,p){const r=L,_=x;return a(),c(w,null,[d(_,{show:n.showDetails,"button-color":"white",onClose:s[0]||(s[0]=l=>n.showDetails=!1)},{default:f(()=>[d(r,{"group-data":o.gruppe},null,8,["group-data"])]),_:1},8,["show"]),t("div",{class:"group",onClick:s[1]||(s[1]=l=>n.showDetails=!0)},[p.getImages[0]?(a(),c("img",{key:0,class:"cover",src:p.getImages[0].url},null,8,M)):(a(),c("img",P)),t("p",H,i(o.gruppe.name),1),N])],64)}const A=g(V,[["render",z],["__scopeId","data-v-35c67e8a"]]);const K={async setup(){const e=y`
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
        `,{data:{value:{groups:{items:s}}}}=await D(e);return{groups:s}}},O=e=>(m("data-v-b2846c25"),e=e(),h(),e),Q=O(()=>t("head",null,[t("title",null,"KPJH - Gruppen")],-1)),U={class:"groups"},j={class:"group-grid"};function T(e,s,o,u,n,p){const r=A,_=b;return a(),v(_,{titel:"Gruppen"},{default:f(()=>[Q,t("div",U,[t("div",j,[(a(!0),c(w,null,I(u.groups,l=>(a(),v(r,{gruppe:l},null,8,["gruppe"]))),256))])])]),_:1})}const Z=g(K,[["render",T],["__scopeId","data-v-b2846c25"]]);export{Z as default};
