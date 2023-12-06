"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[366],{5966:function(J,E,e){var I=e(1413),m=e(91),H=e(67294),M=e(49254),b=e(85893),C=["fieldProps","proFieldProps"],D=["fieldProps","proFieldProps"],L="text",s=function(f){var y=f.fieldProps,T=f.proFieldProps,S=(0,m.Z)(f,C);return(0,b.jsx)(M.Z,(0,I.Z)({valueType:L,fieldProps:y,filedConfig:{valueType:L},proFieldProps:T},S))},p=function(f){var y=f.fieldProps,T=f.proFieldProps,S=(0,m.Z)(f,D);return(0,b.jsx)(M.Z,(0,I.Z)({valueType:"password",fieldProps:y,proFieldProps:T,filedConfig:{valueType:L}},S))},B=s;B.Password=p,B.displayName="ProFormComponent",E.Z=B},1485:function(J,E,e){e.r(E),e.d(E,{default:function(){return Fe}});var I=e(17061),m=e.n(I),H=e(42122),M=e.n(H),b=e(17156),C=e.n(b),D=e(99702),L=e(87547),s=e(1413),p=e(67294),B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},N=B,f=e(98615),y=function(a,n){return p.createElement(f.Z,(0,s.Z)((0,s.Z)({},a),{},{ref:n,icon:N}))};y.displayName="LockOutlined";var T=p.forwardRef(y),S=e(91),q=e(10915),_=e(63830),ee=e(94184),re=e.n(ee),ne=e(34994),R=e(4942),te=e(98082),ae=function(a){var n;return n={},(0,R.Z)(n,a.componentCls,{"&-container":{display:"flex",flex:"1",flexDirection:"column",height:"100%",paddingInline:32,paddingBlock:24,overflow:"auto",background:"inherit"},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",insetBlockStart:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:a.colorTextSecondary,fontSize:a.fontSize},"&-main":{minWidth:"328px",maxWidth:"580px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),(0,R.Z)(n,"@media (min-width: @screen-md-min)",(0,R.Z)({},"".concat(a.componentCls,"-container"),{paddingInline:0,paddingBlockStart:32,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"})),n};function oe(t){return(0,te.Xj)("LoginForm",function(a){var n=(0,s.Z)((0,s.Z)({},a),{},{componentCls:".".concat(t)});return[ae(n)]})}var r=e(85893),se=["logo","message","contentStyle","title","subTitle","actions","children"];function ie(t){var a,n=t.logo,d=t.message,Z=t.contentStyle,l=t.title,x=t.subTitle,A=t.actions,F=t.children,i=(0,S.Z)(t,se),u=(0,q.YB)(),h=i.submitter===!1?!1:(0,s.Z)((0,s.Z)({searchConfig:{submitText:u.getMessage("loginForm.submitText","\u767B\u5F55")}},i.submitter),{},{submitButtonProps:(0,s.Z)({size:"large",style:{width:"100%"}},(a=i.submitter)===null||a===void 0?void 0:a.submitButtonProps),render:function(z,$){var U,ye=$.pop();if(typeof(i==null||(U=i.submitter)===null||U===void 0?void 0:U.render)=="function"){var O,k;return i==null||(O=i.submitter)===null||O===void 0||(k=O.render)===null||k===void 0?void 0:k.call(O,z,$)}return ye}}),v=(0,p.useContext)(_.ZP.ConfigContext),c=v.getPrefixCls("pro-form-login"),j=oe(c),Y=j.wrapSSR,o=j.hashId,P=function(z){return"".concat(c,"-").concat(z," ").concat(o)},W=(0,p.useMemo)(function(){return n?typeof n=="string"?(0,r.jsx)("img",{src:n}):n:null},[n]);return Y((0,r.jsxs)("div",{className:re()(P("container"),o),children:[(0,r.jsxs)("div",{className:"".concat(P("top")," ").concat(o),children:[l||W?(0,r.jsxs)("div",{className:"".concat(P("header")),children:[W?(0,r.jsx)("span",{className:P("logo"),children:W}):null,l?(0,r.jsx)("span",{className:P("title"),children:l}):null]}):null,x?(0,r.jsx)("div",{className:P("desc"),children:x}):null]}),(0,r.jsxs)("div",{className:P("main"),style:(0,s.Z)({width:328},Z),children:[(0,r.jsxs)(ne.A,(0,s.Z)((0,s.Z)({isKeyPressSubmit:!0},i),{},{submitter:h,children:[d,F]})),A?(0,r.jsx)("div",{className:P("main-other"),children:A}):null]})]}))}var w=e(5966),K=e(22270),le=e(32808),de=e(80658),V=e(49254),ue=["options","fieldProps","proFieldProps","valueEnum"],ce=p.forwardRef(function(t,a){var n=t.options,d=t.fieldProps,Z=t.proFieldProps,l=t.valueEnum,x=(0,S.Z)(t,ue);return(0,r.jsx)(V.Z,(0,s.Z)({ref:a,valueType:"checkbox",valueEnum:(0,K.h)(l,void 0),fieldProps:(0,s.Z)({options:n},d),lightProps:(0,s.Z)({labelFormatter:function(){return(0,r.jsx)(V.Z,(0,s.Z)({ref:a,valueType:"checkbox",mode:"read",valueEnum:(0,K.h)(l,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,s.Z)({options:n},d),proFieldProps:Z},x))}},x.lightProps),proFieldProps:Z},x))}),ge=p.forwardRef(function(t,a){var n=t.fieldProps,d=t.children;return(0,r.jsx)(le.Z,(0,s.Z)((0,s.Z)({ref:a},n),{},{children:d}))}),ve=(0,de.G)(ge,{valuePropName:"checked"}),G=ve;G.Group=ce;var me=G,Q=e(19922),g=e(85065),X=e(2453),fe=e(67610),he=e(73935),pe=e(60997),xe=function(){var a=(0,Q.l)(function(n){var d=n.token;return{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:d.borderRadius,":hover":{backgroundColor:d.colorBgTextHover}}});return(0,r.jsx)("div",{className:a,"data-lang":!0,children:g.SelectLang&&(0,r.jsx)(g.SelectLang,{})})},Pe=function(){var a=(0,g.useModel)("@@initialState"),n=a.initialState,d=a.setInitialState,Z=(0,Q.l)(function(){return{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundColor:"#F6BCBC",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%"}}),l=(0,g.useIntl)(),x=function(){var F=C()(m()().mark(function i(){var u,h;return m()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,n==null||(u=n.fetchUserInfo)===null||u===void 0?void 0:u.call(n);case 2:h=c.sent,h&&(0,he.flushSync)(function(){d(function(j){return M()(M()({},j),{},{currentToken:h})})});case 4:case"end":return c.stop()}},i)}));return function(){return F.apply(this,arguments)}}(),A=function(){var F=C()(m()().mark(function i(u){var h,v,c,j;return m()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,(0,pe.x4)({userId:u.username,password:u.password});case 3:if(h=o.sent,h){o.next=6;break}return o.abrupt("return");case 6:return v=l.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),X.ZP.success(v),o.next=10,x();case 10:return c=new URL(window.location.href).searchParams,g.history.push(c.get("redirect")||"/"),o.abrupt("return");case 15:o.prev=15,o.t0=o.catch(0),j=l.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),X.ZP.error((o.t0===null||o.t0===void 0?void 0:o.t0.message)||j);case 19:case"end":return o.stop()}},i,null,[[0,15]])}));return function(u){return F.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:Z,children:[(0,r.jsx)(g.Helmet,{children:(0,r.jsxs)("title",{children:[l.formatMessage({id:"menu.login",defaultMessage:"\u767B\u5F55\u9875"}),"- ",fe.Z.title]})}),(0,r.jsx)(xe,{}),(0,r.jsx)("div",{style:{flex:"1",padding:"32px 0"},children:(0,r.jsxs)(ie,{contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(0,r.jsx)("img",{alt:"logo",src:"/logo.svg"}),title:"Zane FAM",subTitle:l.formatMessage({id:"pages.layouts.userLayout.title"}),initialValues:{autoLogin:!0},onFinish:function(){var F=C()(m()().mark(function i(u){return m()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,A(u);case 2:case"end":return v.stop()}},i)}));return function(i){return F.apply(this,arguments)}}(),children:[(0,r.jsx)(w.Z,{name:"username",fieldProps:{size:"large",prefix:(0,r.jsx)(L.Z,{})},placeholder:l.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:(0,r.jsx)(g.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,r.jsx)(w.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,r.jsx)(T,{})},placeholder:l.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:(0,r.jsx)(g.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]}),(0,r.jsxs)("div",{style:{marginBottom:24},children:[(0,r.jsx)(me,{noStyle:!0,name:"autoLogin",children:(0,r.jsx)(g.FormattedMessage,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})}),(0,r.jsx)("a",{style:{float:"right"},children:(0,r.jsx)(g.FormattedMessage,{id:"pages.login.forgotPassword",defaultMessage:"\u5FD8\u8BB0\u5BC6\u7801"})})]})]})}),(0,r.jsx)(D.Z,{})]})},Fe=Pe}}]);