(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8521],{98521:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return U}});var o=t(93433),r=t(29439),i=t(72791),s=t(95087),l=t(29945),a=t(78687),c=t(81551),d=t(26824),u=t(69129),h=t(87995),f=t(59114),p=t(81207),x=t(35527),g=t(79836),m=t(53382),v=t(87462),y=t(63366),j=t(28182),w=t(94419),b=t(31402),Z=t(66934),C=t(75878),S=t(21217);function E(e){return(0,S.Z)("MuiTableContainer",e)}(0,C.Z)("MuiTableContainer",["root"]);var T=t(80184),k=["className","component"],A=(0,Z.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,n){return n.root}})({width:"100%",overflowX:"auto"}),L=i.forwardRef((function(e,n){var t=(0,b.Z)({props:e,name:"MuiTableContainer"}),o=t.className,r=t.component,i=void 0===r?"div":r,s=(0,y.Z)(t,k),l=(0,v.Z)({},t,{component:i}),a=function(e){var n=e.classes;return(0,w.Z)({root:["root"]},E,n)}(l);return(0,T.jsx)(A,(0,v.Z)({ref:n,as:i,className:(0,j.Z)(a.root,o),ownerState:l},s))})),R=t(99779),z=t(35855),M=t(53994),F=t(56125),I=t(64554),O=t(20890),_=t(26181),D=t.n(_),N="HH:mm:ss ZZZZ MM/dd/yyyy",H=function(e){var n=e.log,t=(0,i.useState)(!1),o=(0,r.Z)(t,2),s=o[0],a=o[1],c=function(e){return D()(n,e,"")},d="",u=c("ConsoleMsg"),h=c("error.message");""!==u?d=u:""!==h&&(d=h);var f=(d||"").replace(/\u2501|\u250f|\u2513|\u2503|\u2517|\u251b/g,"");f=f.replace(/([^\x20-\x7F])/g,"");var p=(0,T.jsx)(i.Fragment,{});""!==u?p=function(e){var n=e.ConsoleMsg;return n=(n=n.replace(/\x1B/g," ")).replace(/((\[[0-9;]+m))/g,""),(0,T.jsx)("div",{style:{display:"table",tableLayout:"fixed",width:"100%",paddingLeft:10,paddingRight:10},children:(0,T.jsx)("div",{style:{display:"table-cell",whiteSpace:"nowrap",textOverflow:"ellipsis",overflowX:"auto"},children:(0,T.jsx)("pre",{children:n})})})}(n):""!==h&&(p=function(e){var n={color:"#C83B51",fontWeight:400,fontFamily:"monospace",fontSize:"12px"},t={fontFamily:"monospace",fontSize:"12px"},o=function(n){return D()(e,n,"")},r=R.ou.fromFormat(e.time.toString(),"HH:mm:ss z MM/dd/yyyy",{zone:"UTC"});return(0,T.jsxs)(i.Fragment,{children:[(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{style:t,children:"API:\xa0"}),(0,T.jsx)("span",{style:n,children:o("api.name")})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{style:t,children:"Time:\xa0"}),(0,T.jsx)("span",{style:n,children:r.toFormat(N)})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{style:t,children:"DeploymentID:\xa0"}),(0,T.jsx)("span",{style:n,children:o("deploymentid")})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{style:t,children:"RequestID:\xa0"}),(0,T.jsx)("span",{style:n,children:o("requestID")})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{style:t,children:"RemoteHost:\xa0"}),(0,T.jsx)("span",{style:n,children:o("remotehost")})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{style:t,children:"UserAgent:\xa0"}),(0,T.jsx)("span",{style:n,children:o("userAgent")})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{style:t,children:"Error:\xa0"}),(0,T.jsx)("span",{style:n,children:o("error.message")})]}),(0,T.jsx)("br",{}),(0,T.jsx)("div",{children:(0,T.jsx)("b",{style:t,children:"Backtrace:\xa0"})}),(e.error.source||[]).map((function(e,o){return(0,T.jsxs)("div",{children:[(0,T.jsxs)("b",{style:t,children:[o,":\xa0"]}),(0,T.jsx)("span",{style:n,children:e})]})}))]})}(n)),f=(f||"").replace(/((\[[0-9;]+m))/g,"");var x=R.ou.fromFormat(n.time.toString(),"HH:mm:ss z MM/dd/yyyy",{zone:"UTC"}),g=x.toJSDate(),m=(0,T.jsx)(i.Fragment,{children:x.toFormat(N)});return 1===g.getFullYear()&&(m=(0,T.jsx)(i.Fragment,{children:"n/a"})),(0,T.jsxs)(i.Fragment,{children:[(0,T.jsxs)(z.Z,{sx:{"& > *":{borderBottom:"unset"},cursor:"pointer",borderLeft:"0",borderRight:"0"},style:{backgroundColor:"#FDFDFD"},children:[(0,T.jsx)(M.Z,{onClick:function(){return a(!s)},style:{width:280,color:"#989898",fontSize:12},children:(0,T.jsxs)(I.Z,{sx:{display:"flex",gap:1,alignItems:"center","& .min-icon":{width:12,marginRight:1},fontWeight:"bold",lineHeight:1},children:[(0,T.jsx)(l.AeX,{}),(0,T.jsx)("div",{children:m})]})}),(0,T.jsx)(M.Z,{onClick:function(){return a(!s)},style:{width:200,color:"#989898",fontSize:12},children:(0,T.jsx)(I.Z,{sx:{"& .min-icon":{width:12,marginRight:1},fontWeight:"bold",lineHeight:1},children:n.errKind})}),(0,T.jsx)(M.Z,{onClick:function(){return a(!s)},children:(0,T.jsx)("div",{style:{display:"table",tableLayout:"fixed",width:"100%",paddingLeft:10,paddingRight:10},children:(0,T.jsx)("div",{style:{display:"table-cell",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:f})})}),(0,T.jsx)(M.Z,{onClick:function(){return a(!s)},style:{width:40},children:(0,T.jsx)(I.Z,{sx:{"& .min-icon":{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"2px"},"&:hover .min-icon":{fill:"#eaeaea"}},children:s?(0,T.jsx)(l.Ekf,{}):(0,T.jsx)(l._f_,{})})})]}),s?(0,T.jsxs)(z.Z,{children:[(0,T.jsx)(M.Z,{style:{paddingBottom:0,paddingTop:0,width:200,textTransform:"uppercase",verticalAlign:"top",textAlign:"right",color:"#8399AB",fontWeight:"bold"},children:(0,T.jsx)(F.Z,{in:s,timeout:"auto",unmountOnExit:!0,children:(0,T.jsx)("div",{style:{marginTop:10},children:"Log Details"})})}),(0,T.jsx)(M.Z,{colSpan:2,style:{paddingBottom:0,paddingTop:0},children:(0,T.jsx)(F.Z,{in:s,timeout:"auto",unmountOnExit:!0,children:(0,T.jsx)(I.Z,{sx:{margin:1},children:(0,T.jsx)(O.Z,{style:{background:"#efefef",border:"1px solid #dedede",padding:4,fontSize:14,color:"#666666"},children:p})})})}),(0,T.jsx)(M.Z,{style:{paddingBottom:0,paddingTop:0,width:40}})]}):null]},x.toString())},P=t(47974),W=t(99670),B=null,U=function(){var e=(0,c.TL)(),n=(0,a.v9)((function(e){return e.logs.logMessages})),t=(0,a.v9)((function(e){return e.logs.logsStarted})),v=(0,i.useState)(""),y=(0,r.Z)(v,2),j=y[0],w=y[1],b=(0,i.useState)([""]),Z=(0,r.Z)(b,2),C=Z[0],S=Z[1],E=(0,i.useState)("all"),k=(0,r.Z)(E,2),A=k[0],R=k[1],z=(0,i.useState)("Select user agent"),M=(0,r.Z)(z,2),F=M[0],I=M[1],O=(0,i.useState)(["All User Agents"]),_=(0,r.Z)(O,2),D=_[0],N=_[1],U=(0,i.useState)("all"),G=(0,r.Z)(U,2),X=G[0],q=G[1],J=(0,i.useState)(!1),K=(0,r.Z)(J,2),Q=K[0],V=K[1],Y=j.toLowerCase(),$=n.filter((function(e){return(e.userAgent===F||"All User Agents"===F||"Select user agent"===F)&&(""===j||(e.ConsoleMsg.toLowerCase().indexOf(Y)>=0||(!!(e.error&&e.error.source&&e.error.source.filter((function(e){return e.toLowerCase().indexOf(Y)>=0})).length>0)||(!!(e.error&&e.error.message.toLowerCase().indexOf(Y)>=0)||!!(e.api&&e.api.name.toLowerCase().indexOf(Y)>=0)))))}));return(0,i.useEffect)((function(){V(!0),p.Z.invoke("GET","/api/v1/nodes").then((function(e){S(e),V(!1)})).catch((function(e){V(!1)}))}),[]),(0,i.useEffect)((function(){e((0,h.Sc)("error_logs"))}),[]),(0,T.jsxs)(i.Fragment,{children:[(0,T.jsx)(P.Z,{label:"Logs",actions:(0,T.jsx)(W.Z,{})}),(0,T.jsx)(l.Xgh,{children:(0,T.jsxs)(l.rjZ,{container:!0,sx:{gap:15},children:[(0,T.jsx)(l.rjZ,{item:!0,xs:3,children:Q?(0,T.jsx)("h3",{children:" Loading nodes"}):(0,T.jsx)(l.PhF,{id:"node-selector",name:"node","data-test-id":"node-selector",value:A,onChange:function(e){R(e)},disabled:Q||t,options:[{label:"All Nodes",value:"all"}].concat((0,o.Z)(C.map((function(e){return{label:e,value:e}}))))})}),(0,T.jsx)(l.rjZ,{item:!0,xs:3,children:(0,T.jsx)(l.PhF,{id:"logType",name:"logType","data-test-id":"log-type",value:X,onChange:function(e){q(e)},disabled:Q||t,options:[{value:"all",label:"All Log Types"},{value:"minio",label:"MinIO"},{value:"application",label:"Application"}]})}),(0,T.jsx)(l.rjZ,{item:!0,xs:3,children:D.length>1&&(0,T.jsx)(l.PhF,{id:"userAgent",name:"userAgent","data-test-id":"user-agent",value:F,onChange:function(e){I(e)},disabled:D.length<1||t,options:D.map((function(e){return{label:e,value:e}}))})}),(0,T.jsxs)(l.rjZ,{item:!0,xs:2,sx:{display:"flex",justifyContent:"flex-end"},children:[!t&&(0,T.jsx)(l.zxk,{id:"start-logs",type:"submit",variant:"callAction",disabled:!1,onClick:function(){e((0,u.i1)());var n=new URL(window.location.toString()),t=n.port,o=(0,d.x2)(n.protocol),r=new URL(document.baseURI).pathname;B=new s.w3cwebsocket("".concat(o,"://").concat(n.hostname,":").concat(t).concat(r,"ws/console/?logType=").concat(X,"&node=").concat("Select node"===A?"":A));var i=null;if(null!==B)return B.onopen=function(){console.log("WebSocket Client Connected"),e((0,u.v0)(!0)),B.send("ok"),i=setInterval((function(){B.send("ok")}),1e4)},B.onmessage=function(n){var t=JSON.parse(n.data.toString()),o=!0;""===t.level&&""===t.errKind&&"00:00:00 UTC 01/01/0001"===t.time&&""===t.ConsoleMsg&&""===t.node&&(o=!1),t.key=Math.random(),D.indexOf(t.userAgent)<0&&void 0!==t.userAgent&&(D.push(t.userAgent),N(D)),o&&e((0,u.Qo)(t))},B.onclose=function(){clearInterval(i),console.log("connection closed by server"),e((0,u.v0)(!1))},function(){B.close(1e3),clearInterval(i),console.log("closing websockets"),e((0,u.v0)(!1))}},label:"Start Logs"}),t&&(0,T.jsx)(l.zxk,{id:"stop-logs",type:"button",variant:"callAction",onClick:function(){null!==B&&void 0!==B&&(B.close(1e3),e((0,u.v0)(!1)))},label:"Stop Logs"})]}),(0,T.jsx)(l.rjZ,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem","& button":{flexGrow:0,marginLeft:8,marginBottom:0}},children:(0,T.jsx)(f.Z,{placeholder:"Filter",onChange:function(e){w(e)},value:j})}),(0,T.jsx)(l.rjZ,{item:!0,xs:12,children:(0,T.jsx)(l.xuv,{id:"logs-container","data-test-id":"logs-list-container",sx:{minHeight:400,height:"calc(100vh - 200px)",overflow:"auto",fontSize:13,borderRadius:4},children:(0,T.jsxs)(L,{component:x.Z,children:[(0,T.jsx)(g.Z,{"aria-label":"collapsible table",children:(0,T.jsx)(m.Z,{children:$.map((function(e){return(0,T.jsx)(H,{log:e})}))})}),0===$.length&&(0,T.jsx)("div",{style:{padding:20,textAlign:"center"},children:"No logs to display"})]})})})]})})]})}},26824:function(e,n,t){"use strict";t.d(n,{HE:function(){return i},V9:function(){return o},ci:function(){return r},x2:function(){return s}});var o=1006,r=1008,i=1011,s=function(e){var n="ws";return"https:"===e&&(n="wss"),n}},56125:function(e,n,t){"use strict";t.d(n,{Z:function(){return S}});var o=t(4942),r=t(63366),i=t(87462),s=t(72791),l=t(28182),a=t(18875),c=t(94419),d=t(66934),u=t(31402),h=t(81314),f=t(4999),p=t(13967),x=t(42071),g=t(75878),m=t(21217);function v(e){return(0,m.Z)("MuiCollapse",e)}(0,g.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var y=t(80184),j=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],w=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.orientation],"entered"===t.state&&n.entered,"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({height:0,overflow:"hidden",transition:n.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:n.transitions.create("width")},"entered"===t.state&&(0,i.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"})})),b=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,n){return n.wrapper}})((function(e){var n=e.ownerState;return(0,i.Z)({display:"flex",width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),Z=(0,d.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,n){return n.wrapperInner}})((function(e){var n=e.ownerState;return(0,i.Z)({width:"100%"},"horizontal"===n.orientation&&{width:"auto",height:"100%"})})),C=s.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiCollapse"}),d=t.addEndListener,g=t.children,m=t.className,C=t.collapsedSize,S=void 0===C?"0px":C,E=t.component,T=t.easing,k=t.in,A=t.onEnter,L=t.onEntered,R=t.onEntering,z=t.onExit,M=t.onExited,F=t.onExiting,I=t.orientation,O=void 0===I?"vertical":I,_=t.style,D=t.timeout,N=void 0===D?h.x9.standard:D,H=t.TransitionComponent,P=void 0===H?a.ZP:H,W=(0,r.Z)(t,j),B=(0,i.Z)({},t,{orientation:O,collapsedSize:S}),U=function(e){var n=e.orientation,t=e.classes,o={root:["root","".concat(n)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(n)],wrapperInner:["wrapperInner","".concat(n)]};return(0,c.Z)(o,v,t)}(B),G=(0,p.Z)(),X=s.useRef(),q=s.useRef(null),J=s.useRef(),K="number"===typeof S?"".concat(S,"px"):S,Q="horizontal"===O,V=Q?"width":"height";s.useEffect((function(){return function(){clearTimeout(X.current)}}),[]);var Y=s.useRef(null),$=(0,x.Z)(n,Y),ee=function(e){return function(n){if(e){var t=Y.current;void 0===n?e(t):e(t,n)}}},ne=function(){return q.current?q.current[Q?"clientWidth":"clientHeight"]:0},te=ee((function(e,n){q.current&&Q&&(q.current.style.position="absolute"),e.style[V]=K,A&&A(e,n)})),oe=ee((function(e,n){var t=ne();q.current&&Q&&(q.current.style.position="");var o=(0,f.C)({style:_,timeout:N,easing:T},{mode:"enter"}),r=o.duration,i=o.easing;if("auto"===N){var s=G.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(s,"ms"),J.current=s}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[V]="".concat(t,"px"),e.style.transitionTimingFunction=i,R&&R(e,n)})),re=ee((function(e,n){e.style[V]="auto",L&&L(e,n)})),ie=ee((function(e){e.style[V]="".concat(ne(),"px"),z&&z(e)})),se=ee(M),le=ee((function(e){var n=ne(),t=(0,f.C)({style:_,timeout:N,easing:T},{mode:"exit"}),o=t.duration,r=t.easing;if("auto"===N){var i=G.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),J.current=i}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[V]=K,e.style.transitionTimingFunction=r,F&&F(e)}));return(0,y.jsx)(P,(0,i.Z)({in:k,onEnter:te,onEntered:re,onEntering:oe,onExit:ie,onExited:se,onExiting:le,addEndListener:function(e){"auto"===N&&(X.current=setTimeout(e,J.current||0)),d&&d(Y.current,e)},nodeRef:Y,timeout:"auto"===N?null:N},W,{children:function(e,n){return(0,y.jsx)(w,(0,i.Z)({as:E,className:(0,l.Z)(U.root,m,{entered:U.entered,exited:!k&&"0px"===K&&U.hidden}[e]),style:(0,i.Z)((0,o.Z)({},Q?"minWidth":"minHeight",K),_),ownerState:(0,i.Z)({},B,{state:e}),ref:$},n,{children:(0,y.jsx)(b,{ownerState:(0,i.Z)({},B,{state:e}),className:U.wrapper,ref:q,children:(0,y.jsx)(Z,{ownerState:(0,i.Z)({},B,{state:e}),className:U.wrapperInner,children:g})})}))}}))}));C.muiSupportAuto=!0;var S=C},94210:function(e){var n=function(){if("object"===typeof self&&self)return self;if("object"===typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"===typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return n()}try{return __global__||n()}finally{delete Object.prototype.__global__}}()},95087:function(e,n,t){var o;if("object"===typeof globalThis)o=globalThis;else try{o=t(94210)}catch(l){}finally{if(o||"undefined"===typeof window||(o=window),!o)throw new Error("Could not determine global this")}var r=o.WebSocket||o.MozWebSocket,i=t(51496);function s(e,n){return n?new r(e,n):new r(e)}r&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(s,e,{get:function(){return r[e]}})})),e.exports={w3cwebsocket:r?s:null,version:i}},51496:function(e,n,t){e.exports=t(19794).version},19794:function(e){"use strict";e.exports={version:"1.0.34"}}}]);
//# sourceMappingURL=8521.590edd30.chunk.js.map