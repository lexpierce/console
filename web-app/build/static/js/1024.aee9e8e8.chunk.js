"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[1024],{11024:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var s=n(69060),o=n(66152),c=n(95705),l=n(66156),r=n(61180),u=n(78256),a=n(70780),i=n(82496);const p=e=>{let{onClose:t,modalOpen:n,bucket:p,toDelete:f}=e;const h=(0,l.Ab)(),[b,d]=(0,s.useState)(!1);return(0,i.jsx)(a.c,{title:"Delete Anonymous Access Rule",confirmText:"Delete",isOpen:n,isLoading:b,onConfirm:()=>{d(!0);let e={prefix:f};r.m.bucket.deleteAccessRuleWithBucket(p,e).then((()=>{t()})).catch((e=>{h((0,c.aW)((0,u.K)(e.error))),t()})).finally((()=>d(!1)))},titleIcon:(0,i.jsx)(o.sB6,{}),onClose:t,confirmationContent:(0,i.jsx)(s.Fragment,{children:"Are you sure you want to delete this access rule?"})})}}}]);
//# sourceMappingURL=1024.aee9e8e8.chunk.js.map