(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},819:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),a=(n(0),n(1021)),o={id:"iwd",title:"IWD"},c={unversionedId:"os/linux/network/iwd",id:"os/linux/network/iwd",isDocsHomePage:!1,title:"IWD",description:"iwd",source:"@site/notes/os/linux/network/iwd.md",slug:"/os/linux/network/iwd",permalink:"/notes/os/linux/network/iwd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/iwd.md",version:"current",sidebar:"docs",previous:{title:"IPTables",permalink:"/notes/os/linux/network/iptables"},next:{title:"MitmProxy",permalink:"/notes/os/linux/network/mitmproxy"}},l=[{value:"Tips",id:"tips",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"iwd"},"iwd"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://pkgs.alpinelinux.org/contents?branch=edge&name=iwd&arch=x86_64&repo=community"},"iwd"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"/usr/libexec/iwd")," - \u5b88\u62a4\u8fdb\u7a0b"),Object(a.b)("li",{parentName:"ul"},"/usr/libexec/ead -  Ethernet authentication daemon"),Object(a.b)("li",{parentName:"ul"},"/usr/bin/iwmon - \u76d1\u542c RF \u5305"),Object(a.b)("li",{parentName:"ul"},"/usr/bin/iwctl - \u901a\u8fc7 dbus \u4e0e iwd \u4ea4\u4e92",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4e09\u79cd\u6a21\u5f0f\u5206\u522b\u4f7f\u7528\u76f8\u540c\u540d\u5b57\u7684\u547d\u4ee4\u53bb\u63a7\u5236"))))),Object(a.b)("li",{parentName:"ul"},"\u5bc6\u7801\u4f4d\u4e8e ",Object(a.b)("inlineCode",{parentName:"li"},"/var/lib/iwd")),Object(a.b)("li",{parentName:"ul"},"\u5bc6\u7801\u8981\u6c42 8-63 \u4f4d ASCII \u7f16\u7801"),Object(a.b)("li",{parentName:"ul"},"\u8bbe\u5907\u6709\u4e09\u79cd\u6a21\u5f0f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"station"),Object(a.b)("li",{parentName:"ul"},"ap"),Object(a.b)("li",{parentName:"ul"},"ad-hoc",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Wireless_ad_hoc_network"},"WANET"))))))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \ndevice list\ndevice wlan0 show\ndevice wlan0 set-property Powered on\ndevice wlan0 set-property Mode station\n\nstation wlan0 scan\n# \u8fde\u63a5 - \u4f1a\u63d0\u793a\u8f93\u5165\u5bc6\u7801\nstation wlan0 connect <SSID>\n\n# \u67e5\u770b\u8bbe\u5907\u4fe1\u606f\nadapter list\nadapter wlan0 show\n# \u67e5\u770b\u8fde\u63a5\u8fc7\u7684\u7f51\u7edc\n# \u53ef\u4ee5\u8bbe\u7f6e AutoConnect - \u9ed8\u8ba4\u5f00\u542f\nknown-networks list\n\n# \u67e5\u770b\u652f\u6301 wsc \u7684\u8bbe\u5907\nwsc list\n")))}u.isMDXComponent=!0}}]);