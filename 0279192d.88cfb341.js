(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1021:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),b=n,m=f["".concat(c,".").concat(b)]||f[b]||s[b]||a;return r?o.a.createElement(m,i(i({ref:t},u),{},{components:r})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(8),a=(r(0),r(1021)),c={slug:"regex-note",title:"Regex \u901f\u8bb0",tags:["\u7b14\u8bb0"],date:new Date("2013-10-13T00:00:00.000Z")},i={permalink:"/story/regex-note",editUrl:"https://github.com/wenerme/wener/edit/master/story/2013/2013-10-13-Regex \u901f\u8bb0.md",source:"@site/story/2013/2013-10-13-Regex \u901f\u8bb0.md",description:"Regex \u901f\u8bb0",date:"2013-10-13T00:00:00.000Z",tags:[{label:"\u7b14\u8bb0",permalink:"/story/tags/\u7b14\u8bb0"}],title:"Regex \u901f\u8bb0",readingTime:1.355,truncated:!0,prevItem:{title:"\u8f6f\u4ef6\u8bbe\u8ba1\u5e08\u8003\u8bd5\u7b14\u8bb0",permalink:"/story/rk-software-designer"},nextItem:{title:"\u7b80\u5355\u7684\u6587\u5b57\u6c14\u6ce1\u6846 for Swing",permalink:"/story/java-siwng-textbubble"}},p=[],u={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"regex-\u901f\u8bb0"},"Regex \u901f\u8bb0"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f, \u7531\u4e8e\u6b63\u5219\u5728\u4e0d\u540c\u7684\u6d41\u6d3e\u4e2d\u8868\u793a\u6709\u6240\u4e0d\u540c,\u53ea\u80fd\u6574\u7406\u4e00\u4e9b\u51e0\u4e4e\u96f7\u540c\u7684.\n\u4e0d\u540c\u6d41\u6d3e\u4e4b\u95f4\u7684\u5dee\u5f02,\u5f88\u591a\u5728\u662f\u5426\u9700\u8981\u8f6c\u4e49\u4e0a,\u4f8b\u5982 \u5728\u6709\u4e9b\u6d41\u6d3e\u91cc ",Object(a.b)("inlineCode",{parentName:"p"},"()")," \u8981\u5199\u6210 ",Object(a.b)("inlineCode",{parentName:"p"},"\\(\\)"),"\n\u8fd9\u91cc\u6574\u7406\u7684\u4e3b\u8981\u662f PCRE \u6d41\u6d3e\u7684\u6b63\u5219\u8bed\u6cd5")))}l.isMDXComponent=!0}}]);