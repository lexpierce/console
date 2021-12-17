(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[118],{389:function(e,t,a){"use strict";var n,o=a(15),i=a(1),r=a(2),c=a(39),s=a(378),l=a(372),d=a(406),b=a(407),j=a(408),u=a(300),p=a(310),h=a(120),O=a(31),m=a(46),x=a.n(m),f=a(127),g=a.n(f),v=a(126),C=a.n(v),y=a(123),k=a.n(y),N=a(0),w=function(){clearInterval(n)},S={displayErrorMessage:O.h},M=Object(c.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),S)(Object(p.a)((function(e){return Object(u.a)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,a=e.modalSnackMessage,i=e.displayErrorMessage,c=e.customStyle,s=Object(r.useState)(!1),l=Object(o.a)(s,2),d=l[0],b=l[1],j=Object(r.useState)(!1),u=Object(o.a)(j,2),p=u[0],h=u[1],O=Object(r.useCallback)((function(){h(!1)}),[]);Object(r.useEffect)((function(){p||(i({detailedError:"",errorMessage:""}),b(!1))}),[i,p]),Object(r.useEffect)((function(){""!==a.message&&"error"===a.type&&h(!0)}),[O,a.message,a.type]);var m=x()(a,"message",""),f=x()(a,"detailedErrorMsg","");return"error"!==a.type||""===m?null:Object(N.jsx)(r.Fragment,{children:Object(N.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(p?t.modalErrorShow:""),style:c,onMouseOver:w,onMouseLeave:function(){n=setInterval(O,1e4)},children:[Object(N.jsx)("button",{className:t.closeButton,onClick:O,children:Object(N.jsx)(k.a,{})}),Object(N.jsxs)("div",{className:t.errorTitle,children:[Object(N.jsx)("span",{className:t.messageIcon,children:Object(N.jsx)(C.a,{})}),Object(N.jsx)("span",{className:t.errorLabel,children:m})]}),""!==f&&Object(N.jsxs)(r.Fragment,{children:[Object(N.jsx)("div",{className:t.detailsContainerLink,children:Object(N.jsxs)("button",{className:t.detailsButton,onClick:function(){b(!d)},children:["Details",Object(N.jsx)(g.a,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),Object(N.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:f})]})]})})}))),E={content:'" "',borderLeft:"2px solid #9C9C9C",height:33,width:1,position:"absolute"},L=Object(c.b)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:O.i});t.a=Object(p.a)((function(e){return Object(u.a)(Object(i.a)({dialogContainer:{padding:"8px 15px 22px"},closeContainer:{textAlign:"right"},closeButton:{height:16,width:16,padding:0,backgroundColor:"initial","&:hover":{backgroundColor:"initial"},"&:active":{backgroundColor:"initial"}},closeIcon:{"&::before":Object(i.a)(Object(i.a)({},E),{},{transform:"rotate(45deg)",height:12}),"&::after":Object(i.a)(Object(i.a)({},E),{},{transform:"rotate(-45deg)",height:12}),"&:hover::before, &:hover::after":{borderColor:"#9C9C9C"},display:"block",position:"relative",height:12,width:12},titleClass:{padding:"0px 50px 12px",fontSize:"1.2rem",fontWeight:600,overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},modalContent:{padding:"0 50px"},customDialogSize:{width:"100%",maxWidth:765}},h.y))}))(L((function(e){var t=e.onClose,a=e.modalOpen,n=e.title,c=e.children,u=e.classes,p=e.wideLimit,h=void 0===p||p,O=e.modalSnackMessage,m=e.noContentPadding,x=e.setModalSnackMessage,f=Object(r.useState)(!1),g=Object(o.a)(f,2),v=g[0],C=g[1];Object(r.useEffect)((function(){x("")}),[x]),Object(r.useEffect)((function(){if(O){if(""===O.message)return void C(!1);"error"!==O.type&&C(!0)}}),[O]);var y=h?{classes:{paper:u.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},k="";return O&&(k=O.detailedErrorMsg,(""===O.detailedErrorMsg||O.detailedErrorMsg.length<5)&&(k=O.message)),Object(N.jsx)(d.a,Object(i.a)(Object(i.a)({open:a,onClose:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},y),{},{children:Object(N.jsxs)("div",{className:u.dialogContainer,children:[Object(N.jsx)(M,{}),Object(N.jsx)(l.a,{open:v,className:u.snackBarModal,onClose:function(){C(!1),x("")},message:k,ContentProps:{className:"".concat(u.snackBar," ").concat(O&&"error"===O.type?u.errorSnackBar:"")},autoHideDuration:O&&"error"===O.type?1e4:5e3}),Object(N.jsx)("div",{className:u.closeContainer,children:Object(N.jsx)(s.a,{"aria-label":"close",className:u.closeButton,onClick:t,disableRipple:!0,size:"large",children:Object(N.jsx)("span",{className:u.closeIcon})})}),Object(N.jsx)(b.a,{id:"alert-dialog-title",className:u.titleClass,children:n}),Object(N.jsx)(j.a,{className:m?"":u.modalContent,children:c})]})}))})))},390:function(e,t,a){"use strict";var n=a(1),o=a(2),i=a.n(o),r=a(415),c=a(436),s=a(809),l=a(376),d=a(378),b=a(300),j=a(369),u=a(310),p=a(120),h=a(121),O=a(0),m=Object(j.a)((function(e){return Object(b.a)(Object(n.a)({},p.n))}));function x(e){var t=m();return Object(O.jsx)(r.a,Object(n.a)({InputProps:{classes:t}},e))}t.a=Object(u.a)((function(e){return Object(b.a)(Object(n.a)(Object(n.a)(Object(n.a)({},p.i),p.D),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,a=e.onChange,o=e.value,r=e.id,b=e.name,j=e.type,u=void 0===j?"text":j,p=e.autoComplete,m=void 0===p?"off":p,f=e.disabled,g=void 0!==f&&f,v=e.multiline,C=void 0!==v&&v,y=e.tooltip,k=void 0===y?"":y,N=e.index,w=void 0===N?0:N,S=e.error,M=void 0===S?"":S,E=e.required,L=void 0!==E&&E,B=e.placeholder,I=void 0===B?"":B,D=e.min,W=e.max,z=e.overlayIcon,A=void 0===z?null:z,F=e.overlayObject,R=void 0===F?null:F,P=e.extraInputProps,T=void 0===P?{}:P,H=e.overlayAction,J=e.noLabelMinWidth,q=void 0!==J&&J,G=e.classes,U=Object(n.a)({"data-index":w},T);return"number"===u&&D&&(U.min=D),"number"===u&&W&&(U.max=W),Object(O.jsx)(i.a.Fragment,{children:Object(O.jsxs)(c.a,{container:!0,className:" ".concat(""!==M?G.errorInField:G.inputBoxContainer),children:[""!==t&&Object(O.jsxs)(s.a,{htmlFor:r,className:q?G.noMinWidthLabel:G.inputLabel,children:[Object(O.jsxs)("span",{children:[t,L?"*":""]}),""!==k&&Object(O.jsx)("div",{className:G.tooltipContainer,children:Object(O.jsx)(l.a,{title:k,placement:"top-start",children:Object(O.jsx)("div",{className:G.tooltip,children:Object(O.jsx)(h.a,{})})})})]}),Object(O.jsxs)("div",{className:G.textBoxContainer,children:[Object(O.jsx)(x,{id:r,name:b,fullWidth:!0,value:o,disabled:g,onChange:a,type:u,multiline:C,autoComplete:m,inputProps:U,error:""!==M,helperText:M,placeholder:I,className:G.inputRebase}),A&&Object(O.jsx)("div",{className:"".concat(G.overlayAction," ").concat(""!==t?"withLabel":""),children:Object(O.jsx)(d.a,{onClick:H?function(){H()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:A})}),R&&Object(O.jsx)("div",{className:"".concat(G.overlayAction," ").concat(""!==t?"withLabel":""),children:R})]})]})})}))},435:function(e,t,a){"use strict";var n=a(1),o=a(2),i=a.n(o),r=a(436),c=a(779),s=a(809),l=a(376),d=a(971),b=a(957),j=a(488),u=a(300),p=a(310),h=a(120),O=a(121),m=a(0),x=Object(p.a)((function(e){return Object(u.a)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(c.c);t.a=Object(p.a)((function(e){return Object(u.a)(Object(n.a)(Object(n.a)({},h.i),h.D))}))((function(e){var t=e.classes,a=e.id,n=e.name,o=e.onChange,c=e.options,u=e.label,p=e.tooltip,h=void 0===p?"":p,f=e.value,g=e.disabled,v=void 0!==g&&g;return Object(m.jsx)(i.a.Fragment,{children:Object(m.jsxs)(r.a,{item:!0,xs:12,className:t.fieldContainer,children:[""!==u&&Object(m.jsxs)(s.a,{htmlFor:a,className:t.inputLabel,children:[Object(m.jsx)("span",{children:u}),""!==h&&Object(m.jsx)("div",{className:t.tooltipContainer,children:Object(m.jsx)(l.a,{title:h,placement:"top-start",children:Object(m.jsx)("div",{className:t.tooltip,children:Object(m.jsx)(O.a,{})})})})]}),Object(m.jsx)(d.a,{fullWidth:!0,children:Object(m.jsx)(b.a,{id:a,name:n,value:f,onChange:o,input:Object(m.jsx)(x,{}),disabled:v,children:c.map((function(e){return Object(m.jsx)(j.a,{value:e.value,children:e.label},"select-".concat(n,"-").concat(e.label))}))})})]})})}))},885:function(e,t,a){"use strict";a.r(t);var n=a(15),o=a(1),i=a(2),r=a.n(i),c=a(389),s=a(436),l=a(380),d=a(390),b=a(300),j=a(310),u=a(120),p=a(39),h=a(52),O=a(31),m=a(435),x=a(0),f=Object(p.b)((function(e){return{session:e.console.session}}),{setErrorSnackMessage:O.e});t.default=Object(j.a)((function(e){return Object(b.a)(Object(o.a)({buttonContainer:{textAlign:"right"}},u.p))}))(f((function(e){var t=e.modalOpen,a=e.onClose,o=e.classes,b=e.bucket,j=Object(i.useState)(""),u=Object(n.a)(j,2),p=u[0],f=u[1],g=Object(i.useState)("readonly"),v=Object(n.a)(g,2),C=v[0],y=v[1];return Object(x.jsx)(r.a.Fragment,{children:Object(x.jsx)(c.a,{modalOpen:t,title:"Add Access Rule",onClose:a,children:Object(x.jsxs)(s.a,{container:!0,children:[Object(x.jsxs)(s.a,{item:!0,xs:12,children:[Object(x.jsx)(d.a,{value:p,label:"Prefix",id:"prefix",name:"prefix",placeholder:"Enter Prefix",onChange:function(e){f(e.target.value)}}),Object(x.jsx)(m.a,{id:"access",name:"Access",onChange:function(e){y(e.target.value)},label:"Access",value:C,options:[{label:"readonly",value:"readonly"},{label:"writeonly",value:"writeonly"},{label:"readwrite",value:"readwrite"}],disabled:!1})]}),Object(x.jsxs)(s.a,{item:!0,xs:12,className:o.buttonContainer,children:[Object(x.jsx)("button",{type:"button",color:"primary",onClick:function(){f(""),y("readonly")},children:"Clear"}),Object(x.jsx)(l.a,{type:"submit",variant:"contained",color:"primary",disabled:""===p.trim(),onClick:function(){h.a.invoke("PUT","/api/v1/bucket/".concat(b,"/access-rules"),{prefix:p,access:C}).then((function(e){a()})).catch((function(e){Object(O.e)(e),a()}))},children:"Save"})]})]})})})})))}}]);
//# sourceMappingURL=118.eb249205.chunk.js.map