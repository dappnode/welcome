(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9454:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var a=n(5893),i=n(7294),o=n(1664),r=n(8569),s=n(2949),c=n(2122),l=(n(5697),n(6010)),d=n(4336),p=[0,1,2,3,4,5,6,7,8,9,10],u=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var x=i.forwardRef((function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,o=e.alignItems,r=void 0===o?"stretch":o,d=e.classes,p=e.className,u=e.component,f=void 0===u?"div":u,x=e.container,m=void 0!==x&&x,g=e.direction,h=void 0===g?"row":g,v=e.item,y=void 0!==v&&v,w=e.justify,b=void 0===w?"flex-start":w,Z=e.lg,S=void 0!==Z&&Z,C=e.md,N=void 0!==C&&C,j=e.sm,E=void 0!==j&&j,M=e.spacing,T=void 0===M?0:M,W=e.wrap,k=void 0===W?"wrap":W,_=e.xl,P=void 0!==_&&_,z=e.xs,I=void 0!==z&&z,R=e.zeroMinWidth,B=void 0!==R&&R,D=(0,s.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=(0,l.Z)(d.root,p,m&&[d.container,0!==T&&d["spacing-xs-".concat(String(T))]],y&&d.item,B&&d.zeroMinWidth,"row"!==h&&d["direction-xs-".concat(String(h))],"wrap"!==k&&d["wrap-xs-".concat(String(k))],"stretch"!==r&&d["align-items-xs-".concat(String(r))],"stretch"!==a&&d["align-content-xs-".concat(String(a))],"flex-start"!==b&&d["justify-xs-".concat(String(b))],!1!==I&&d["grid-xs-".concat(String(I))],!1!==E&&d["grid-sm-".concat(String(E))],!1!==N&&d["grid-md-".concat(String(N))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==P&&d["grid-xl-".concat(String(P))]);return i.createElement(f,(0,c.Z)({className:F,ref:t},D))})),m=(0,d.Z)((function(e){return(0,c.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return p.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(f(i,2)),width:"calc(100% + ".concat(f(i),")"),"& > $item":{padding:f(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};u.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,c.Z)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(x),g=n(9895),h=i.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.raised,r=void 0!==o&&o,d=(0,s.Z)(e,["classes","className","raised"]);return i.createElement(g.Z,(0,c.Z)({className:(0,l.Z)(n.root,a),elevation:r?8:1,ref:t},d))})),v=(0,d.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(h),y=n(2318),w=i.forwardRef((function(e,t){var n=e.action,a=e.avatar,o=e.classes,r=e.className,d=e.component,p=void 0===d?"div":d,u=e.disableTypography,f=void 0!==u&&u,x=e.subheader,m=e.subheaderTypographyProps,g=e.title,h=e.titleTypographyProps,v=(0,s.Z)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),w=g;null==w||w.type===y.Z||f||(w=i.createElement(y.Z,(0,c.Z)({variant:a?"body2":"h5",className:o.title,component:"span",display:"block"},h),w));var b=x;return null==b||b.type===y.Z||f||(b=i.createElement(y.Z,(0,c.Z)({variant:a?"body2":"body1",className:o.subheader,color:"textSecondary",component:"span",display:"block"},m),b)),i.createElement(p,(0,c.Z)({className:(0,l.Z)(o.root,r),ref:t},v),a&&i.createElement("div",{className:o.avatar},a),i.createElement("div",{className:o.content},w,b),n&&i.createElement("div",{className:o.action},n))})),b=(0,d.Z)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(w),Z=i.forwardRef((function(e,t){var n=e.classes,a=e.className,o=e.component,r=void 0===o?"div":o,d=(0,s.Z)(e,["classes","className","component"]);return i.createElement(r,(0,c.Z)({className:(0,l.Z)(n.root,a),ref:t},d))})),S=(0,d.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(Z),C=n(3457);function N(){return(0,a.jsxs)("div",{className:"home",children:[(0,a.jsx)("p",{className:"home-intro",children:"There are different ways to connect to your DAppNode. Choose the most convenient for you. It is recommended to start with Wi-Fi"}),(0,a.jsx)(C.Z,{theme:r.Z,children:(0,a.jsx)(m,{container:!0,justify:"center",spacing:4,children:[{title:"Local",description:"Access via local network",tutorialPath:"/local"},{title:"Wi-Fi",description:"START HERE",tutorialPath:"/wifi"},{title:"VPN",description:"To connect from anywhere",tutorialPath:"/vpn"}].map((function(e,t){return(0,a.jsx)(m,{item:!0,children:(0,a.jsx)(o.default,{href:e.tutorialPath,children:(0,a.jsxs)(v,{style:"Wi-Fi"===e.title?{boxShadow:"-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 36px 15px rgba(47,188,178,0.75)"}:null,children:[(0,a.jsx)(b,{title:e.title}),(0,a.jsx)(S,{children:e.description})]})})},t)}))})})]})}},8569:function(e,t,n){"use strict";var a=(0,n(5830).Z)({overrides:{MuiStepper:{root:{backgroundColor:"#eee",marginTop:20,color:"#393e46"}},MuiStep:{horizontal:{justifyContent:"space-around",paddingLeft:16,paddingRight:16}},MuiStepConnector:{line:{borderColor:"#393e46"},lineHorizontal:{borderStyle:"solid"}},MuiStepIcon:{root:{color:"#393e46",fontSize:30}},MuiStepLabel:{label:{marginBottom:10,color:"#393e46"}},MuiCard:{root:{display:"flex",flexDirection:"column",justifyContent:"center",height:300,width:300,backgroundColor:"#393e46",color:"#eee","&:hover":{boxShadow:"0 16px 70px -12.125px #2fbcb2"},cursor:"pointer"}},MuiTypography:{h5:{fontSize:40}}}});t.Z=a},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9454)}])}},function(e){e.O(0,[774,351,784],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);