(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),o=(n(0),n(879)),a={id:"supervision",title:"Process supervision"},l={unversionedId:"os/linux/init/supervision",id:"os/linux/init/supervision",isDocsHomePage:!1,title:"Process supervision",description:"Tips",source:"@site/notes/os/linux/init/supervision.md",slug:"/os/linux/init/supervision",permalink:"/notes/os/linux/init/supervision",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/init/supervision.md",version:"current",sidebar:"docs",previous:{title:"OpenRC",permalink:"/notes/os/linux/init/openrc"},next:{title:"systemd",permalink:"/notes/os/linux/init/systemd"}},c=[{value:"Tips",id:"tips",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Process_supervision"},"Process supervision")),Object(o.b)("li",{parentName:"ul"},"\u901a\u5e38 init \u7cfb\u7edf\u90fd\u5305\u542b "),Object(o.b)("li",{parentName:"ul"},"supervision \u6bd4 init \u6709\u4f18\u52bf",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u670d\u52a1\u91cd\u542f"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981 pid \u6587\u4ef6"),Object(o.b)("li",{parentName:"ul"},"\u6e05\u9664\u8fdb\u7a0b\u72b6\u6001"),Object(o.b)("li",{parentName:"ul"},"\u66f4\u53ef\u9760\u7684\u65e5\u5fd7 - \u4f1a\u6355\u83b7 stdout\u3001stderr"),Object(o.b)("li",{parentName:"ul"},"\u66f4\u5feb - \u5e76\u884c"),Object(o.b)("li",{parentName:"ul"},"\u76d1\u63a7\u544a\u8b66"))),Object(o.b)("li",{parentName:"ul"},"\u7eaf\u7cb9\u7684 supervision",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"monit"),Object(o.b)("li",{parentName:"ul"},"pm2"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://www.skarnet.org/software/s6/"},"s6")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://immortal.run/"},"immortal")," ",Object(o.b)("a",{parentName:"li",href:"https://github.com/immortal/immortal/"},"immortal/immortal"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Go \u8bed\u8a00\u5b9e\u73b0")))))))}s.isMDXComponent=!0},879:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||b[m]||o;return n?i.a.createElement(f,l(l({ref:t},p),{},{components:n})):i.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);