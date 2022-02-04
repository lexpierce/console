"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[4220],{53224:function(e,t,n){var a=n(18489),o=n(83738),i=(n(50390),n(70758)),r=n(62449),s=n(62559),l=["onClick","text","disabled","tooltip","icon"],c=(0,r.Z)((function(e){return{root:{padding:"7px",color:function(t){return function(t){var n=t.variant,a=t.color,o=e.palette.primary.main;return"primary"===a&&"contained"===n?o=e.palette.primary.contrastText:"primary"===a&&"outlined"===n?o=e.palette.primary.main:"secondary"===a&&(o=e.palette.secondary.main),o}(t)},borderColor:function(t){return"secondary"===t.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));t.Z=function(e){var t=c(e),n=e.onClick,r=e.text,d=void 0===r?"":r,u=e.disabled,p=void 0!==u&&u,m=e.tooltip,f=e.icon,v=void 0===f?null:f,x=(0,o.Z)(e,l);return(0,s.jsxs)(i.Z,(0,a.Z)((0,a.Z)({classes:t,tooltip:m||d,variant:"outlined",onClick:n,disabled:p,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},x),{},{children:[(0,s.jsx)("span",{children:d})," ",v]}))}},66964:function(e,t,n){var a=n(18489),o=n(50390),i=n(12066),r=n(25594),s=n(14602),l=n(94187),c=n(95467),d=n(86509),u=n(62449),p=n(4285),m=n(72462),f=n(97538),v=n(44977),x=n(62559),h=(0,u.Z)((function(e){return(0,d.Z)((0,a.Z)({},m.gM))}));function g(e){var t=h();return(0,x.jsx)(i.Z,(0,a.Z)({InputProps:{classes:t}},e))}t.Z=(0,p.Z)((function(e){return(0,d.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},m.YI),m.Hr),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}},inputLabel:(0,a.Z)((0,a.Z)({},m.YI.inputLabel),{},{fontWeight:"normal"})}))}))((function(e){var t=e.label,n=e.onChange,i=e.value,d=e.id,u=e.name,p=e.type,m=void 0===p?"text":p,h=e.autoComplete,Z=void 0===h?"off":h,b=e.disabled,j=void 0!==b&&b,y=e.multiline,C=void 0!==y&&y,S=e.tooltip,N=void 0===S?"":S,w=e.index,k=void 0===w?0:w,I=e.error,E=void 0===I?"":I,P=e.required,L=void 0!==P&&P,M=e.placeholder,z=void 0===M?"":M,D=e.min,T=e.max,F=e.overlayIcon,A=void 0===F?null:F,R=e.overlayObject,B=void 0===R?null:R,_=e.extraInputProps,O=void 0===_?{}:_,W=e.overlayAction,V=e.noLabelMinWidth,H=void 0!==V&&V,q=e.pattern,G=void 0===q?"":q,K=e.autoFocus,Y=void 0!==K&&K,X=e.classes,$=e.className,Q=void 0===$?"":$,U=(0,a.Z)({"data-index":k},O);return"number"===m&&D&&(U.min=D),"number"===m&&T&&(U.max=T),""!==G&&(U.pattern=G),(0,x.jsx)(o.Fragment,{children:(0,x.jsxs)(r.ZP,{container:!0,className:(0,v.Z)(""!==Q?Q:"",""!==E?X.errorInField:X.inputBoxContainer),children:[""!==t&&(0,x.jsxs)(s.Z,{htmlFor:d,className:H?X.noMinWidthLabel:X.inputLabel,children:[(0,x.jsxs)("span",{children:[t,L?"*":""]}),""!==N&&(0,x.jsx)("div",{className:X.tooltipContainer,children:(0,x.jsx)(l.Z,{title:N,placement:"top-start",children:(0,x.jsx)("div",{className:X.tooltip,children:(0,x.jsx)(f.Z,{})})})})]}),(0,x.jsxs)("div",{className:X.textBoxContainer,children:[(0,x.jsx)(g,{id:d,name:u,fullWidth:!0,value:i,autoFocus:Y,disabled:j,onChange:n,type:m,multiline:C,autoComplete:Z,inputProps:U,error:""!==E,helperText:E,placeholder:z,className:X.inputRebase}),A&&(0,x.jsx)("div",{className:"".concat(X.overlayAction," ").concat(""!==t?"withLabel":""),children:(0,x.jsx)(c.Z,{onClick:W?function(){W()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:A})}),B&&(0,x.jsx)("div",{className:"".concat(X.overlayAction," ").concat(""!==t?"withLabel":""),children:B})]})]})})}))},67754:function(e,t,n){var a=n(18489),o=n(50390),i=n(25594),r=n(46413),s=n(14602),l=n(94187),c=n(47554),d=n(43965),u=n(31680),p=n(86509),m=n(4285),f=n(72462),v=n(97538),x=n(62559),h=(0,m.Z)((function(e){return(0,p.Z)({root:{height:38,lineHeight:1,"label + &":{marginTop:e.spacing(3)}},input:{height:38,position:"relative",color:"#07193E",fontSize:13,fontWeight:600,padding:"8px 20px 10px 10px",border:"#e5e5e5 1px solid",borderRadius:4,display:"flex",alignItems:"center","&:hover":{borderColor:"#393939"},"&:focus":{backgroundColor:"#fff"}}})}))(r.ZP);t.Z=(0,m.Z)((function(e){return(0,p.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},f.YI),f.Hr),{},{inputLabel:(0,a.Z)((0,a.Z)({},f.YI.inputLabel),{},{"& span":{fontWeight:"normal"}}),fieldContainer:{display:"flex","@media (max-width: 600px)":{flexFlow:"column"}}}))}))((function(e){var t=e.classes,n=e.id,a=e.name,r=e.onChange,p=e.options,m=e.label,f=e.tooltip,g=void 0===f?"":f,Z=e.value,b=e.disabled,j=void 0!==b&&b;return(0,x.jsx)(o.Fragment,{children:(0,x.jsxs)(i.ZP,{item:!0,xs:12,className:t.fieldContainer,children:[""!==m&&(0,x.jsxs)(s.Z,{htmlFor:n,className:t.inputLabel,children:[(0,x.jsx)("span",{children:m}),""!==g&&(0,x.jsx)("div",{className:t.tooltipContainer,children:(0,x.jsx)(l.Z,{title:g,placement:"top-start",children:(0,x.jsx)("div",{className:t.tooltip,children:(0,x.jsx)(v.Z,{})})})})]}),(0,x.jsx)(c.Z,{fullWidth:!0,children:(0,x.jsx)(d.Z,{id:n,name:a,value:Z,onChange:r,input:(0,x.jsx)(h,{}),disabled:j,children:p.map((function(e){return(0,x.jsx)(u.Z,{value:e.value,children:e.label},"select-".concat(a,"-").concat(e.label))}))})})]})})}))},76352:function(e,t,n){n.d(t,{Z:function(){return k}});var a,o=n(23430),i=n(18489),r=n(50390),s=n(34424),l=n(95467),c=n(97771),d=n(84402),u=n(78426),p=n(93085),m=n(86509),f=n(4285),v=n(72462),x=n(44149),h=n(38342),g=n.n(h),Z=n(92125),b=n(19538),j=n(21278),y=n(62559),C=function(){clearInterval(a)},S={displayErrorMessage:x.zb},N=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),S)((0,f.Z)((function(e){return(0,m.Z)({modalErrorContainer:{position:"absolute",marginTop:10,width:"80%",backgroundColor:"#fff",border:"#C72C48 1px solid",borderLeftWidth:12,borderRadius:3,zIndex:1e3,padding:"10px 15px",left:"50%",transform:"translateX(-50%)",opacity:0,transitionDuration:"0.2s"},modalErrorShow:{opacity:1},closeButton:{position:"absolute",right:5,fontSize:"small",border:0,backgroundColor:"#fff",cursor:"pointer"},errorTitle:{display:"flex",alignItems:"center"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5,marginRight:25},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},detailsButton:{color:"#9C9C9C",display:"flex",alignItems:"center",border:0,backgroundColor:"transparent",paddingLeft:5,fontSize:14,transformDuration:"0.3s",cursor:"pointer"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",lineHeight:0,padding:"0 10px",transition:"all .2s ease-in-out",overflow:"hidden"},extraDetailsOpen:{lineHeight:1,padding:"3px 10px"},arrowElement:{marginLeft:-5},arrowOpen:{transform:"rotateZ(90deg)",transformDuration:"0.3s"}})}))((function(e){var t=e.classes,n=e.modalSnackMessage,i=e.displayErrorMessage,s=e.customStyle,l=(0,r.useState)(!1),c=(0,o.Z)(l,2),d=c[0],u=c[1],p=(0,r.useState)(!1),m=(0,o.Z)(p,2),f=m[0],v=m[1],x=(0,r.useCallback)((function(){v(!1)}),[]);(0,r.useEffect)((function(){f||(i({detailedError:"",errorMessage:""}),u(!1))}),[i,f]),(0,r.useEffect)((function(){""!==n.message&&"error"===n.type&&v(!0)}),[x,n.message,n.type]);var h=g()(n,"message",""),S=g()(n,"detailedErrorMsg","");return"error"!==n.type||""===h?null:(0,y.jsx)(r.Fragment,{children:(0,y.jsxs)("div",{className:"".concat(t.modalErrorContainer," ").concat(f?t.modalErrorShow:""),style:s,onMouseOver:C,onMouseLeave:function(){a=setInterval(x,1e4)},children:[(0,y.jsx)("button",{className:t.closeButton,onClick:x,children:(0,y.jsx)(j.Z,{})}),(0,y.jsxs)("div",{className:t.errorTitle,children:[(0,y.jsx)("span",{className:t.messageIcon,children:(0,y.jsx)(b.Z,{})}),(0,y.jsx)("span",{className:t.errorLabel,children:h})]}),""!==S&&(0,y.jsxs)(r.Fragment,{children:[(0,y.jsx)("div",{className:t.detailsContainerLink,children:(0,y.jsxs)("button",{className:t.detailsButton,onClick:function(){u(!d)},children:["Details",(0,y.jsx)(Z.Z,{className:"".concat(t.arrowElement," ").concat(d?t.arrowOpen:"")})]})}),(0,y.jsx)("div",{className:"".concat(t.extraDetailsContainer," ").concat(d?t.extraDetailsOpen:""),children:S})]})]})})}))),w=(0,s.$j)((function(e){return{modalSnackMessage:e.system.modalSnackBar}}),{setModalSnackMessage:x.MK}),k=(0,f.Z)((function(e){return(0,m.Z)((0,i.Z)((0,i.Z)({},v.Qw),{},{root:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},v.sN))}))(w((function(e){var t=e.onClose,n=e.modalOpen,a=e.title,s=e.children,m=e.classes,f=e.wideLimit,v=void 0===f||f,x=e.modalSnackMessage,h=e.noContentPadding,g=e.setModalSnackMessage,Z=e.titleIcon,b=void 0===Z?null:Z,C=(0,r.useState)(!1),S=(0,o.Z)(C,2),w=S[0],k=S[1];(0,r.useEffect)((function(){g("")}),[g]),(0,r.useEffect)((function(){if(x){if(""===x.message)return void k(!1);"error"!==x.type&&k(!0)}}),[x]);var I=v?{classes:{paper:m.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},E="";return x&&(E=x.detailedErrorMsg,(""===x.detailedErrorMsg||x.detailedErrorMsg.length<5)&&(E=x.message)),(0,y.jsxs)(d.Z,(0,i.Z)((0,i.Z)({open:n,classes:m},I),{},{scroll:"paper",onClose:function(e,n){"backdropClick"!==n&&t()},className:m.root,children:[(0,y.jsxs)(u.Z,{className:m.title,children:[(0,y.jsxs)("div",{className:m.titleText,children:[b," ",a]}),(0,y.jsx)("div",{className:m.closeContainer,children:(0,y.jsx)(l.Z,{"aria-label":"close",className:m.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,y.jsx)(j.Z,{})})})]}),(0,y.jsx)(N,{}),(0,y.jsx)(c.Z,{open:w,className:m.snackBarModal,onClose:function(){k(!1),g("")},message:E,ContentProps:{className:"".concat(m.snackBar," ").concat(x&&"error"===x.type?m.errorSnackBar:"")},autoHideDuration:x&&"error"===x.type?1e4:5e3}),(0,y.jsx)(p.Z,{className:h?"":m.content,children:s})]}))})))},84220:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(23430),o=n(18489),i=n(50390),r=n(34424),s=n(86509),l=n(4285),c=n(72462),d=n(12066),u=n(25594),p=n(77138),m=n(44149),f=n(17777),v=n(38342),x=n.n(v),h=n(76352),g=n(66964),Z=n(28948),b=n(66946),j=n(81378),y=n(30324),C=n(93127),S=n(67754),N=n(62559),w=(0,l.Z)((function(e){return(0,s.Z)((0,o.Z)((0,o.Z)({buttonContainer:{textAlign:"right"},bottomContainer:{display:"flex",flexGrow:1,alignItems:"center",margin:"auto",justifyContent:"center","& div":{width:150,"@media (max-width: 900px)":{flexFlow:"column"}}},factorElements:{display:"flex",justifyContent:"flex-start",marginLeft:30},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"}},c.DF),c.ID))}))((function(e){var t=e.tenant,n=e.classes,o=e.open,r=e.onClosePoolAndReload,s=(0,i.useState)(!1),l=(0,a.Z)(s,2),c=l[0],d=l[1],m=(0,i.useState)(0),f=(0,a.Z)(m,2),v=f[0],w=f[1],k=(0,i.useState)(0),I=(0,a.Z)(k,2),E=I[0],P=I[1],L=(0,i.useState)(0),M=(0,a.Z)(L,2),z=M[0],D=M[1],T=(0,i.useState)(""),F=(0,a.Z)(T,2),A=F[0],R=F[1],B=(0,i.useState)([]),_=(0,a.Z)(B,2),O=_[0],W=_[1],V=1073741824*E*z,H=V*v;return(0,i.useEffect)((function(){R(""),W([]),y.Z.invoke("GET","/api/v1/namespaces/".concat(t.namespace,"/resourcequotas/").concat(t.namespace,"-storagequota")).then((function(e){var t=x()(e,"elements",[]).map((function(e){var t=x()(e,"name","").split(".storageclass.storage.k8s.io/requests.storage")[0];return{label:t,value:t}}));W(t),t.length>0&&R(t[0].value)})).catch((function(e){console.error(e)}))}),[t]),(0,N.jsx)(h.Z,{onClose:function(){return r(!1)},modalOpen:o,title:"Add Pool",titleIcon:(0,N.jsx)(p.X2,{}),children:(0,N.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),d(!0);var n=(0,Z.en)(t.pools),a=(0,C.P)(t.name,n),o={name:n,servers:v,volumes_per_server:z,volume_configuration:{size:1073741824*E,storage_class_name:A,labels:null},affinity:a};y.Z.invoke("POST","/api/v1/namespaces/".concat(t.namespace,"/tenants/").concat(t.name,"/pools"),o).then((function(){d(!1),r(!0)})).catch((function(e){d(!1)}))},children:[(0,N.jsx)(u.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,N.jsx)(g.Z,{id:"number_of_nodes",name:"number_of_nodes",type:"number",onChange:function(e){w(parseInt(e.target.value))},label:"Number of Nodes",value:v.toString(10)})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,N.jsx)(g.Z,{id:"pool_size",name:"pool_size",type:"number",onChange:function(e){P(parseInt(e.target.value))},label:"Volume Size (Gi)",value:E.toString(10)})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,N.jsx)(g.Z,{id:"volumes_per_sever",name:"volumes_per_sever",type:"number",onChange:function(e){D(parseInt(e.target.value))},label:"Volumes per Server",value:z.toString(10)})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,N.jsx)(S.Z,{id:"storage_class",name:"storage_class",onChange:function(e){R(e.target.value)},label:"Storage Class",value:A,options:O,disabled:O.length<1})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:n.bottomContainer,children:(0,N.jsxs)("div",{className:n.factorElements,children:[(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:n.sizeNumber,children:(0,Z.ae)(V.toString(10))}),(0,N.jsx)("div",{className:n.sizeDescription,children:"Instance Capacity"})]}),(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:n.sizeNumber,children:(0,Z.ae)(H.toString(10))}),(0,N.jsx)("div",{className:n.sizeDescription,children:"Total Capacity"})]})]})}),(0,N.jsxs)(u.ZP,{item:!0,xs:12,className:n.modalButtonBar,children:[(0,N.jsx)(b.Z,{type:"button",variant:"outlined",color:"primary",disabled:c,onClick:function(){return r(!1)},children:"Cancel"}),(0,N.jsx)(b.Z,{type:"submit",variant:"contained",color:"primary",disabled:c,children:"Save"})]}),c&&(0,N.jsx)(u.ZP,{item:!0,xs:12,children:(0,N.jsx)(j.Z,{})})]})})})),k=n(65771),I=n(46864),E=n(13336),P=n(53224),L=(0,r.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo}}),{setErrorSnackMessage:m.Ih,setTenantDetailsLoad:I.V2}),M=(0,l.Z)((function(e){return(0,s.Z)((0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},c.oZ),c.OR),c.VX),(0,c.Bz)(e.spacing(4))))}))(L((function(e){var t=e.classes,n=e.tenant,o=e.loadingTenant,r=e.setTenantDetailsLoad,s=(0,i.useState)([]),l=(0,a.Z)(s,2),c=l[0],m=l[1],v=(0,i.useState)(!1),x=(0,a.Z)(v,2),h=x[0],g=x[1],Z=(0,i.useState)(""),b=(0,a.Z)(Z,2),j=b[0],y=b[1];(0,i.useEffect)((function(){if(n){var e=n.pools?n.pools:[];m(e)}}),[n]);var C=c.filter((function(e){return!!e.name.toLowerCase().includes(j.toLowerCase())}));return(0,N.jsxs)(i.Fragment,{children:[h&&null!==n&&(0,N.jsx)(w,{open:h,onClosePoolAndReload:function(e){g(!1),e&&r(!0)},tenant:n}),(0,N.jsx)("h1",{className:t.sectionTitle,children:"Pools"}),(0,N.jsxs)(u.ZP,{container:!0,children:[(0,N.jsxs)(u.ZP,{item:!0,xs:12,className:t.actionsTray,children:[(0,N.jsx)(d.Z,{placeholder:"Filter",className:t.searchField,id:"search-resource",label:"",onChange:function(e){y(e.target.value)},InputProps:{disableUnderline:!0,startAdornment:(0,N.jsx)(k.Z,{position:"start",children:(0,N.jsx)(E.Z,{})})},variant:"standard"}),(0,N.jsx)(P.Z,{tooltip:"Expand Tenant",text:"Expand Tenant",onClick:function(){g(!0)},icon:(0,N.jsx)(p.dt,{}),color:"primary",variant:"contained"})]}),(0,N.jsx)(u.ZP,{item:!0,xs:12,children:(0,N.jsx)("br",{})}),(0,N.jsx)(u.ZP,{item:!0,xs:12,className:t.tableBlock,children:(0,N.jsx)(f.Z,{itemActions:[],columns:[{label:"Name",elementKey:"name"},{label:"Capacity",elementKey:"capacity"},{label:"# of Instances",elementKey:"servers"},{label:"# of Drives",elementKey:"volumes"}],isLoading:o,records:C,entityName:"Servers",idField:"name",customEmptyMessage:"No Pools found"})})]})]})})))},93127:function(e,t,n){n.d(t,{P:function(){return a},q:function(){return o}});var a=function(e,t){return{podAntiAffinity:{requiredDuringSchedulingIgnoredDuringExecution:[{labelSelector:{matchExpressions:[{key:"v1.min.io/tenant",operator:"In",values:[e]},{key:"v1.min.io/pool",operator:"In",values:[t]}]},topologyKey:"kubernetes.io/hostname"}]}}},o=function(e,t,n,o){var i=e.split("&"),r=[];i.forEach((function(e){var t=e.split("=");2===t.length&&r.push({key:t[0],operator:"In",values:[t[1]]})}));var s={nodeAffinity:{requiredDuringSchedulingIgnoredDuringExecution:{nodeSelectorTerms:[{matchExpressions:r}]}}};if(t){var l=a(n,o);s.podAntiAffinity=l.podAntiAffinity}return console.log(s),s}},4247:function(e,t,n){n.d(t,{V:function(){return o}});var a=n(10594);function o(e){return(0,a.Z)("MuiDivider",e)}var i=(0,n(43349).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},65771:function(e,t,n){n.d(t,{Z:function(){return j}});var a=n(36222),o=n(1048),i=n(32793),r=n(50390),s=n(44977),l=n(50076),c=n(91442),d=n(35477),u=n(14478),p=n(23060),m=n(8208),f=n(10594);function v(e){return(0,f.Z)("MuiInputAdornment",e)}var x=(0,n(43349).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),h=n(15573),g=n(62559),Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,c.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===n.variant&&(0,a.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),j=r.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiInputAdornment"}),a=n.children,m=n.className,f=n.component,x=void 0===f?"div":f,j=n.disablePointerEvents,y=void 0!==j&&j,C=n.disableTypography,S=void 0!==C&&C,N=n.position,w=n.variant,k=(0,o.Z)(n,Z),I=(0,p.Z)()||{},E=w;w&&I.variant,I&&!E&&(E=I.variant);var P=(0,i.Z)({},n,{hiddenLabel:I.hiddenLabel,size:I.size,disablePointerEvents:y,position:N,variant:E}),L=function(e){var t=e.classes,n=e.disablePointerEvents,a=e.hiddenLabel,o=e.position,i=e.size,r=e.variant,s={root:["root",n&&"disablePointerEvents",o&&"position".concat((0,c.Z)(o)),r,a&&"hiddenLabel",i&&"size".concat((0,c.Z)(i))]};return(0,l.Z)(s,v,t)}(P);return(0,g.jsx)(u.Z.Provider,{value:null,children:(0,g.jsx)(b,(0,i.Z)({as:x,ownerState:P,className:(0,s.Z)(L.root,m),ref:t},k,{children:"string"!==typeof a||S?(0,g.jsxs)(r.Fragment,{children:["start"===N?(0,g.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,a]}):(0,g.jsx)(d.Z,{color:"text.secondary",children:a})}))})}))},31680:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(36222),o=n(1048),i=n(32793),r=n(50390),s=n(44977),l=n(50076),c=n(36128),d=n(8208),u=n(15573),p=n(57308),m=n(86875),f=n(40839),v=n(3299),x=n(4247),h=n(2198),g=n(23586),Z=n(10594);function b(e){return(0,Z.Z)("MuiMenuItem",e)}var j=(0,n(43349).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),y=n(62559),C=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],S=(0,d.ZP)(m.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,o=e.ownerState;return(0,i.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,a.Z)(t,"&.".concat(j.selected),(0,a.Z)({backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(j.focusVisible),{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,a.Z)(t,"&.".concat(j.selected,":hover"),{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,c.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,a.Z)(t,"&.".concat(j.focusVisible),{backgroundColor:n.palette.action.focus}),(0,a.Z)(t,"&.".concat(j.disabled),{opacity:n.palette.action.disabledOpacity}),(0,a.Z)(t,"& + .".concat(x.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,a.Z)(t,"& + .".concat(x.Z.inset),{marginLeft:52}),(0,a.Z)(t,"& .".concat(g.Z.root),{marginTop:0,marginBottom:0}),(0,a.Z)(t,"& .".concat(g.Z.inset),{paddingLeft:36}),(0,a.Z)(t,"& .".concat(h.Z.root),{minWidth:36}),t),!o.dense&&(0,a.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),o.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,a.Z)({},"& .".concat(h.Z.root," svg"),{fontSize:"1.25rem"})))})),N=r.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),a=n.autoFocus,c=void 0!==a&&a,d=n.component,m=void 0===d?"li":d,x=n.dense,h=void 0!==x&&x,g=n.divider,Z=void 0!==g&&g,j=n.disableGutters,N=void 0!==j&&j,w=n.focusVisibleClassName,k=n.role,I=void 0===k?"menuitem":k,E=n.tabIndex,P=(0,o.Z)(n,C),L=r.useContext(p.Z),M={dense:h||L.dense||!1,disableGutters:N},z=r.useRef(null);(0,f.Z)((function(){c&&z.current&&z.current.focus()}),[c]);var D,T=(0,i.Z)({},n,{dense:M.dense,divider:Z,disableGutters:N}),F=function(e){var t=e.disabled,n=e.dense,a=e.divider,o=e.disableGutters,r=e.selected,s=e.classes,c={root:["root",n&&"dense",t&&"disabled",!o&&"gutters",a&&"divider",r&&"selected"]},d=(0,l.Z)(c,b,s);return(0,i.Z)({},s,d)}(n),A=(0,v.Z)(z,t);return n.disabled||(D=void 0!==E?E:-1),(0,y.jsx)(p.Z.Provider,{value:M,children:(0,y.jsx)(S,(0,i.Z)({ref:A,role:I,tabIndex:D,component:m,focusVisibleClassName:(0,s.Z)(F.focusVisible,w)},P,{ownerState:T,classes:F}))})}))}}]);
//# sourceMappingURL=4220.1ac654a2.chunk.js.map