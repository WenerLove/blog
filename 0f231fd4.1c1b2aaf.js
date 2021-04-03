(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(8),a=(t(0),t(879)),c={title:"strongSwan FAQ"},i={unversionedId:"service/network/strongswan-faq",id:"service/network/strongswan-faq",isDocsHomePage:!1,title:"strongSwan FAQ",description:"no IDi configured, fall back on IP address",source:"@site/notes/service/network/strongswan-faq.md",slug:"/service/network/strongswan-faq",permalink:"/notes/service/network/strongswan-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/strongswan-faq.md",version:"current",sidebar:"docs",previous:{title:"strongSwan Cookbook",permalink:"/notes/service/network/strongswan-cookbook"},next:{title:"strongSwan",permalink:"/notes/service/network/strongswan"}},s=[{value:"no IDi configured, fall back on IP address",id:"no-idi-configured-fall-back-on-ip-address",children:[]},{value:"ipsec.conf \u81ea\u52a8\u91cd\u8fde",id:"ipsecconf-\u81ea\u52a8\u91cd\u8fde",children:[]},{value:"peer didn&#39;t accept DH group ECP_256, it requested MODP_2048",id:"peer-didnt-accept-dh-group-ecp_256-it-requested-modp_2048",children:[]}],p={toc:s};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"no-idi-configured-fall-back-on-ip-address"},"no IDi configured, fall back on IP address"),Object(a.b)("h2",{id:"ipsecconf-\u81ea\u52a8\u91cd\u8fde"},"ipsec.conf \u81ea\u52a8\u91cd\u8fde"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ini"},"# \u542f\u52a8\u81ea\u52a8\u542f\u52a8\nauto=start\n\ndpdaction=restart\ncloseaction=restart\nkeyingtries=%forever\n")),Object(a.b)("h2",{id:"peer-didnt-accept-dh-group-ecp_256-it-requested-modp_2048"},"peer didn't accept DH group ECP_256, it requested MODP_2048"),Object(a.b)("p",null,"\u6ce8\u610f\u9009\u62e9 cipher suit, \u5982\u679c\u670d\u52a1\u7aef\u4e0d\u652f\u6301\u5219\u4f1a\u51fa\u73b0\u8be5\u5f02\u5e38"),Object(a.b)("p",null,"ipsec \u4f7f\u7528 aes128-sha256 AES_CBC_128/HMAC_SHA1_96, \u4f46 swanctl \u4e0d\u4f1a\u4f18\u5148\u5c1d\u8bd5\u3002"),Object(a.b)("p",null,"\u4e4b\u540e\u4f1a\u4ece\u65b0\u9009\u62e9"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"selected proposal: IKE:AES_CBC_128/HMAC_SHA1_96/PRF_HMAC_SHA1/MODP_2048\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"ipsec.conf \u914d\u7f6e esp \u6216\u8005 ah"),Object(a.b)("li",{parentName:"ul"},"swanctl.conf \u914d\u7f6e esp_proposal")))}l.isMDXComponent=!0},879:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?o.a.createElement(b,i(i({ref:n},p),{},{components:t})):o.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);