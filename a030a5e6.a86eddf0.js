(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{380:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),i=(n(0),n(557)),o={id:"iwd",title:"IWD"},c={unversionedId:"ops/os/linux/network/iwd",id:"ops/os/linux/network/iwd",isDocsHomePage:!1,title:"IWD",description:"iwd",source:"@site/contents/tricks/ops/os/linux/network/iwd.md",slug:"/ops/os/linux/network/iwd",permalink:"/notes/ops/os/linux/network/iwd",version:"current"},l=[{value:"Tips",id:"tips",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"iwd"},"iwd"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=iwd&arch=x86_64&repo=community"}),"iwd"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/usr/libexec/iwd")," - \u5b88\u62a4\u8fdb\u7a0b"),Object(i.b)("li",{parentName:"ul"},"/usr/libexec/ead -  Ethernet authentication daemon"),Object(i.b)("li",{parentName:"ul"},"/usr/bin/iwmon - \u76d1\u542c RF \u5305"),Object(i.b)("li",{parentName:"ul"},"/usr/bin/iwctl - \u901a\u8fc7 dbus \u4e0e iwd \u4ea4\u4e92",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e09\u79cd\u6a21\u5f0f\u5206\u522b\u4f7f\u7528\u76f8\u540c\u540d\u5b57\u7684\u547d\u4ee4\u53bb\u63a7\u5236"))))),Object(i.b)("li",{parentName:"ul"},"\u5bc6\u7801\u4f4d\u4e8e ",Object(i.b)("inlineCode",{parentName:"li"},"/var/lib/iwd")),Object(i.b)("li",{parentName:"ul"},"\u5bc6\u7801\u8981\u6c42 8-63 \u4f4d ASCII \u7f16\u7801"),Object(i.b)("li",{parentName:"ul"},"\u8bbe\u5907\u6709\u4e09\u79cd\u6a21\u5f0f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"station"),Object(i.b)("li",{parentName:"ul"},"ap"),Object(i.b)("li",{parentName:"ul"},"ad-hoc",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Wireless_ad_hoc_network"}),"WANET"))))))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# \ndevice list\ndevice wlan0 show\ndevice wlan0 set-property Powered on\ndevice wlan0 set-property Mode station\n\nstation wlan0 scan\n# \u8fde\u63a5 - \u4f1a\u63d0\u793a\u8f93\u5165\u5bc6\u7801\nstation wlan0 connect <SSID>\n\n# \u67e5\u770b\u8bbe\u5907\u4fe1\u606f\nadapter list\nadapter wlan0 show\n# \u67e5\u770b\u8fde\u63a5\u8fc7\u7684\u7f51\u7edc\n# \u53ef\u4ee5\u8bbe\u7f6e AutoConnect - \u9ed8\u8ba4\u5f00\u542f\nknown-networks list\n\n# \u67e5\u770b\u652f\u6301 wsc \u7684\u8bbe\u5907\nwsc list\n")))}u.isMDXComponent=!0},557:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||s[d]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);