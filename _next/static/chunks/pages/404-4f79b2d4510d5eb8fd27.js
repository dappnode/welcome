(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197,179],{6071:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),c=t(1689),u=t(2441),i=t(5749),l={};function f(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var E=a.Children.only(v),_=E&&"object"===typeof E&&E.ref,m=(0,i.useIntersection)({rootMargin:"200px"}),L=r(m,2),k=L[0],w=L[1],M=a.default.useCallback((function(e){k(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,k]);(0,a.useEffect)((function(){var e=w&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(t,d,p,{locale:r})}),[p,d,w,g,n,t]);var C={ref:M,onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,t,d,p,h,b,y,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};if(e.passHref||"a"===E.type&&!("href"in E.props)){var x="undefined"!==typeof g?g:t&&t.locale,j=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,x,t&&t.locales,t&&t.domainLocales);C.href=j||(0,c.addBasePath)((0,c.addLocale)(p,x,t&&t.defaultLocale))}return a.default.cloneElement(E,C)};n.default=s},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),f=r(l,2),s=f[0],d=f[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=t(7294),a=t(8391),c="undefined"!==typeof IntersectionObserver;var u=new Map},5110:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(5893),o=(t(7294),t(1664));function a(){return(0,r.jsxs)("div",{className:"not-found",children:[(0,r.jsx)("h1",{children:"Ooops..."}),(0,r.jsx)("h2",{children:"That page cannot be found :("}),(0,r.jsxs)("p",{children:["Go back to the"," ",(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"Homepage"})})]})]})}},9014:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(5110)}])},1664:function(e,n,t){e.exports=t(6071)},4453:function(){}},function(e){e.O(0,[774,597],(function(){return n=9014,e(e.s=n);var n}));var n=e.O();_N_E=n}]);