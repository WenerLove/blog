(window.webpackJsonp=window.webpackJsonp||[]).push([[726],{1044:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,m=s["".concat(a,".").concat(f)]||s[f]||b[f]||i;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},799:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(8),i=(r(0),r(1044)),a={title:"Protobuf"},c={unversionedId:"service/api/protobuf",id:"service/api/protobuf",isDocsHomePage:!1,title:"Protobuf",description:"FAQ",source:"@site/notes/service/api/protobuf.md",slug:"/service/api/protobuf",permalink:"/notes/service/api/protobuf",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/protobuf.md",version:"current",sidebar:"docs",previous:{title:"gRPC",permalink:"/notes/service/api/grpc"},next:{title:"smithy",permalink:"/notes/service/api/smithy"}},p=[{value:"FAQ",id:"faq",children:[{value:"null \u503c",id:"null-\u503c",children:[]}]}],u={toc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"null-\u503c"},"null \u503c"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u5b57\u6bb5\u4e0d\u8bbe\u7f6e\u5219\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32, \u65e0\u6cd5\u8bbe\u7f6e\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"nil")),Object(i.b)("li",{parentName:"ul"},"\u63a8\u8350\u662f\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"wrappers.proto")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/google/protobuf/issues/1606"},"google/protobuf#1606"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Missing value/null support for scalar value types in proto 3"))),Object(i.b)("li",{parentName:"ul"},"\u6b64\u5916, \u5f53\u6574\u578b\u503c\u4e3a 0 \u65f6\u4e5f\u6709\u8fd9\u4e2a\u95ee\u9898")))}l.isMDXComponent=!0}}]);