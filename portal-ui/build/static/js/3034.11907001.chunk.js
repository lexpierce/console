"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3034],{33034:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(72791),a=n(29945),s=n(57689),l=n(56087),o=n(87995),c=n(44690),i=n(23814),x=n(9505),d=n(40214),u=n(80184);const j=e=>{let{onSuccess:t,onError:n}=e;const[s,l]=(0,x.Z)(t,n),[o,c]=(0,r.useState)(""),j=""!==o.trim()&&-1===o.indexOf(" ");return(0,u.jsx)(a.Xgh,{children:(0,u.jsx)(a.ltY,{title:"Create Key",icon:(0,u.jsx)(a.sR0,{}),helpBox:(0,u.jsx)(d.Z,{helpText:"Encryption Key",contents:["Create a new cryptographic key in the Key Management Service server connected to MINIO."]}),children:(0,u.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>{e.preventDefault(),l("POST","/api/v1/kms/keys/",{key:o})},children:(0,u.jsxs)(a.rjZ,{container:!0,children:[(0,u.jsx)(a.rjZ,{item:!0,xs:12,children:(0,u.jsx)(a.Wzg,{id:"key-name",name:"key-name",label:"Key Name",autoFocus:!0,value:o,error:(e=>-1!==e.indexOf(" ")?"Key name cannot contain spaces":"")(o),onChange:e=>{c(e.target.value)}})}),(0,u.jsxs)(a.rjZ,{item:!0,xs:12,sx:i.ID.modalButtonBar,children:[(0,u.jsx)(a.zxk,{id:"clear",type:"button",variant:"regular",onClick:()=>{c("")},label:"Clear"}),(0,u.jsx)(a.zxk,{id:"save-key",type:"submit",variant:"callAction",color:"primary",disabled:s||!j,label:"Save"})]})]})})})})};var h=n(79844),p=n(99670);const m=()=>{const e=(0,c.TL)(),t=(0,s.s0)();return(0,r.useEffect)((()=>{e((0,o.Sc)("add_key"))}),[]),(0,u.jsx)(r.Fragment,{children:(0,u.jsxs)(a.rjZ,{item:!0,xs:12,children:[(0,u.jsx)(h.Z,{label:(0,u.jsx)(a.hbI,{label:"Keys",onClick:()=>t(l.gA.KMS_KEYS)}),actions:(0,u.jsx)(p.Z,{})}),(0,u.jsx)(j,{onError:t=>e((0,o.Ih)(t)),onSuccess:()=>t("".concat(l.gA.KMS_KEYS))})]})})}},40214:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(72791),a=n(29945),s=n(80184);const l=e=>{let{helpText:t,contents:n}=e;return(0,s.jsx)(a.KfX,{iconComponent:(0,s.jsx)(a.M9A,{}),title:t,help:(0,s.jsx)(r.Fragment,{children:n.map((e=>(0,s.jsx)(a.xuv,{sx:{paddingBottom:"20px"},children:e})))})})}}}]);
//# sourceMappingURL=3034.11907001.chunk.js.map