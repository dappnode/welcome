(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{9309:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var o=t(5893),r=t(7329),i=(t(7294),t(3457)),a=t(7661),c=t(1594),p=t(7257),d=t(8569),l=t(1664),u=t(8974),s={title:"Plug DAppNode to the router",image:"/connect-to-router.png"},h=function(e){var n=e.avahi,t=void 0!==n&&n;return{title:"You're all set!",image:"/ready.png",component:function(){return function(e){var n=e.avahi,t=void 0!==n&&n?u.f.DAPPNODE_AVAHI_ENDPOINT:u.f.DAPPNODE_ENDPOINT;return(0,o.jsx)(l.default,{href:t,children:(0,o.jsx)("a",{children:t})})}({avahi:t})}}};function f(e){var n=e.steps,t=e.avahi,l=void 0!==t&&t;return n=[s].concat((0,r.Z)(n),[h({avahi:l})]),(0,o.jsx)(i.Z,{theme:d.Z,children:(0,o.jsx)(a.Z,{activeStep:-1,orientation:"horizontal",alternativeLabel:!0,children:n.map((function(e,n){return(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(p.Z,{children:e.title}),e.component?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:u.f.basePath+e.image}),(0,o.jsx)(e.component,{})]}):(0,o.jsx)("img",{src:u.f.basePath+e.image})]},n)}))})})}},9361:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});var o=t(5893),r=(t(7294),t(9309));function i(){return(0,o.jsxs)("div",{className:"connect-content",children:[(0,o.jsx)("h1",{children:"Local Network Discovery"}),(0,o.jsx)("p",{children:"Connect directly to your dappnode been in the same local network"}),(0,o.jsx)(r.Z,{steps:[{title:"Connect your device to the same network",image:"/avahi-connect.png"}],avahi:!0})]})}},8569:function(e,n,t){"use strict";var o=(0,t(5830).Z)({overrides:{MuiStepper:{root:{backgroundColor:"#eee",marginTop:20,color:"#393e46"}},MuiStep:{horizontal:{justifyContent:"space-around",paddingLeft:16,paddingRight:16}},MuiStepConnector:{line:{borderColor:"#393e46"},lineHorizontal:{borderStyle:"solid"}},MuiStepIcon:{root:{color:"#393e46",fontSize:30}},MuiStepLabel:{label:{marginBottom:10,color:"#393e46"}},MuiCard:{root:{display:"flex",flexDirection:"column",justifyContent:"center",height:300,width:300,backgroundColor:"#393e46",color:"#eee","&:hover":{boxShadow:"0 16px 70px -12.125px #2fbcb2"},cursor:"pointer"}},MuiTypography:{h5:{fontSize:40}}}});n.Z=o},8974:function(e,n,t){"use strict";t.d(n,{f:function(){return o}});var o={OPENVPN_DOWNLOAD_URL:"https://openvpn.net/download-open-vpn/",OPENVPN_DAPPNODE_URL:"http://my.dappnode/#/installer/vpn.dnp.dappnode.eth",WIREGUARD_DOWNLOAD_URL:"https://www.wireguard.com/install/",WIREGUARD_DAPPNODE_URL:"http://my.dappnode/#/installer/wireguard.dnp.dappnode.eth",DAPPNODE_ENDPOINT:"http://my.dappnode",DAPPNODE_AVAHI_ENDPOINT:"http://my.dappnode.local",SSID:"DAppNodeWifi",PASSWORD:"dappnode",basePath:"/welcome_materials"}},1430:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/local",function(){return t(9361)}])}},function(e){e.O(0,[774,351,784,609],(function(){return n=1430,e(e.s=n);var n}));var n=e.O();_N_E=n}]);