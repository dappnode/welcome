(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[640],{2544:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return r.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return u},deprecatedPropType:function(){return c},isMuiElement:function(){return l},ownerDocument:function(){return s},ownerWindow:function(){return d},requirePropFactory:function(){return f},setRef:function(){return p},unstable_useId:function(){return N},unsupportedProp:function(){return h},useControlled:function(){return v},useEventCallback:function(){return y},useForkRef:function(){return g},useIsFocusVisible:function(){return C}});var r=t(3871);function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))}var i=t(3786);function u(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];var u=this,c=function(){e.apply(u,o)};clearTimeout(n),n=setTimeout(c,t)}return r.clear=function(){clearTimeout(n)},r}function c(e,n){return function(){return null}}var a=t(7294);function l(e,n){return a.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)}function s(e){return e&&e.ownerDocument||document}function d(e){return s(e).defaultView||window}function f(e){return function(){return null}}function p(e,n){"function"===typeof e?e(n):e&&(e.current=n)}function h(e,n,t,r,o){return null}function v(e){var n=e.controlled,t=e.default,r=(e.name,e.state,a.useRef(void 0!==n).current),o=a.useState(t),i=o[0],u=o[1];return[r?n:i,a.useCallback((function(e){r||u(e)}),[])]}var m="undefined"!==typeof window?a.useLayoutEffect:a.useEffect;function y(e){var n=a.useRef(e);return m((function(){n.current=e})),a.useCallback((function(){return n.current.apply(void 0,arguments)}),[])}function g(e,n){return a.useMemo((function(){return null==e&&null==n?null:function(t){p(e,t),p(n,t)}}),[e,n])}function N(e){var n=a.useState(e),t=n[0],r=n[1],o=e||t;return a.useEffect((function(){null==t&&r("mui-".concat(Math.round(1e5*Math.random())))}),[t]),o}var P=t(3935),w=!0,x=!1,j=null,D={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function E(e){e.metaKey||e.altKey||e.ctrlKey||(w=!0)}function O(){w=!1}function b(){"hidden"===this.visibilityState&&x&&(w=!0)}function _(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return w||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!D[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}function A(){x=!0,window.clearTimeout(j),j=window.setTimeout((function(){x=!1}),100)}function C(){return{isFocusVisible:_,onBlurVisible:A,ref:a.useCallback((function(e){var n,t=P.findDOMNode(e);null!=t&&((n=t.ownerDocument).addEventListener("keydown",E,!0),n.addEventListener("mousedown",O,!0),n.addEventListener("pointerdown",O,!0),n.addEventListener("touchstart",O,!0),n.addEventListener("visibilitychange",b,!0))}),[])}}},8418:function(e,n,t){"use strict";var r=t(5318),o=t(862);n.Z=void 0;var i=o(t(7294)),u=(0,r(t(2108)).default)(i.createElement("path",{d:"M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74c-3.6-.76-3.54-.75-3.67-.75-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"}),"TouchApp");n.Z=u},2108:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(2544)},9309:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(5893),o=t(7329),i=(t(7294),t(3457)),u=t(7661),c=t(1594),a=t(7257),l=t(8569),s=t(1664),d=t(8974),f={title:"Plug DAppNode to the router",image:"/connect-to-router.png"},p=function(e){var n=e.avahi,t=void 0!==n&&n;return{title:"You're all set!",image:"/ready.png",component:function(){return function(e){var n=e.avahi,t=void 0!==n&&n?d.f.DAPPNODE_AVAHI_ENDPOINT:d.f.DAPPNODE_ENDPOINT;return(0,r.jsx)(s.default,{href:t,children:(0,r.jsx)("a",{children:t})})}({avahi:t})}}};function h(e){var n=e.steps,t=e.avahi,s=void 0!==t&&t;return n=[f].concat((0,o.Z)(n),[p({avahi:s})]),(0,r.jsx)(i.Z,{theme:l.Z,children:(0,r.jsx)(u.Z,{activeStep:-1,orientation:"horizontal",alternativeLabel:!0,children:n.map((function(e,n){return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(a.Z,{children:e.title}),e.component?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:d.f.basePath+e.image}),(0,r.jsx)(e.component,{})]}):(0,r.jsx)("img",{src:d.f.basePath+e.image})]},n)}))})})}},2936:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(5893),o=(t(7294),t(9309)),i=t(8974),u=t(7735),c=t(8418);function a(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{children:[(0,r.jsx)(u.I8s,{})," Open-VPN"]}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:i.f.OPENVPN_DAPPNODE_URL,children:"Get DAppNode Wireguard package"})}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:i.f.OPENVPN_DOWNLOAD_URL,children:"Download Wireguard desktop"})})]})}function l(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{children:[(0,r.jsx)(u.U08,{})," Wireguard"]}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:i.f.WIREGUARD_DAPPNODE_URL,children:"Get DAppNode Wireguard package"})}),(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:i.f.WIREGUARD_DOWNLOAD_URL,children:"Download Wireguard desktop"})})]})}function s(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{children:[(0,r.jsx)(c.Z,{})," Choose a VPN client to install"]}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",marginTop:30},children:[(0,r.jsx)(l,{}),(0,r.jsx)(a,{})]})]})}function d(){return(0,r.jsxs)("div",{className:"connect-content",children:[(0,r.jsx)("h1",{children:"VPN"}),(0,r.jsx)("p",{children:"Connect to your DAppNode through VPN from anywhere."}),(0,r.jsx)(o.Z,{steps:[{title:"*Choose your VPN client",image:"/select.png"},{title:"Get your VPN credentials",image:"/vpn-credentials.png"}]}),(0,r.jsx)(s,{})]})}},8569:function(e,n,t){"use strict";var r=(0,t(5830).Z)({overrides:{MuiStepper:{root:{backgroundColor:"#eee",marginTop:20,color:"#393e46"}},MuiStep:{horizontal:{justifyContent:"space-around",paddingLeft:16,paddingRight:16}},MuiStepConnector:{line:{borderColor:"#393e46"},lineHorizontal:{borderStyle:"solid"}},MuiStepIcon:{root:{color:"#393e46",fontSize:30}},MuiStepLabel:{label:{marginBottom:10,color:"#393e46"}},MuiCard:{root:{display:"flex",flexDirection:"column",justifyContent:"center",height:300,width:300,backgroundColor:"#393e46",color:"#eee","&:hover":{boxShadow:"0 16px 70px -12.125px #2fbcb2"},cursor:"pointer"}},MuiTypography:{h5:{fontSize:40}}}});n.Z=r},8974:function(e,n,t){"use strict";t.d(n,{f:function(){return r}});var r={OPENVPN_DOWNLOAD_URL:"https://openvpn.net/download-open-vpn/",OPENVPN_DAPPNODE_URL:"http://my.dappnode/#/installer/vpn.dnp.dappnode.eth",WIREGUARD_DOWNLOAD_URL:"https://www.wireguard.com/install/",WIREGUARD_DAPPNODE_URL:"http://my.dappnode/#/installer/wireguard.dnp.dappnode.eth",DAPPNODE_ENDPOINT:"http://my.dappnode",DAPPNODE_AVAHI_ENDPOINT:"http://my.dappnode.local",SSID:"DAppNodeWifi",PASSWORD:"dappnode",basePath:"/welcome_materials"}},4788:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vpn",function(){return t(2936)}])},4405:function(e,n,t){"use strict";t.d(n,{w_:function(){return l}});var r=t(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};function a(e){return e&&e.map((function(e,n){return r.createElement(e.tag,u({key:n},e.attr),a(e.child))}))}function l(e){return function(n){return r.createElement(s,u({attr:u({},e.attr)},n),a(e.child))}}function s(e){var n=function(n){var t,o=e.attr,i=e.size,a=e.title,l=c(e,["attr","size","title"]),s=i||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,l,{className:t,style:u(u({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&r.createElement("title",null,a),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return n(e)})):n(o)}}},function(e){e.O(0,[774,415,351,784,609],(function(){return n=4788,e(e.s=n);var n}));var n=e.O();_N_E=n}]);