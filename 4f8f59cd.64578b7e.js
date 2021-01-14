(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{253:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),i=r(7),c=(r(0),r(713)),o={id:"metrics",title:"\u6307\u6807\u76d1\u63a7"},a={unversionedId:"devops/metrics/metrics",id:"devops/metrics/metrics",isDocsHomePage:!1,title:"\u6307\u6807\u76d1\u63a7",description:"Metrics",source:"@site/notes/devops/metrics/README.md",slug:"/devops/metrics/metrics",permalink:"/notes/devops/metrics/metrics",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/metrics/README.md",version:"current",sidebar:"docs",previous:{title:"Tracing",permalink:"/notes/devops/tracing/tracing"},next:{title:"Prometheus",permalink:"/notes/devops/metrics/prometheus"}},p=[{value:"Tips",id:"tips",children:[]}],l={rightToc:p};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"metrics"},"Metrics"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://micrometer.io/"}),"Micrometer"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://micrometer.io/docs/concepts"}),"\u6982\u5ff5"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u7eac\u5ea6\u65b9\u5f0f: \u7eac\u5ea6\u3001\u7ea7\u8054"),Object(c.b)("li",{parentName:"ul"},"\u9891\u7387\u805a\u5408: \u5ba2\u6237\u7aef\u805a\u5408\u3001\u670d\u52a1\u7aef\u805a\u5408"),Object(c.b)("li",{parentName:"ul"},"\u4e0a\u62a5\u65b9\u5f0f: \u63a8\u3001\u62c9"))))),Object(c.b)("li",{parentName:"ul"},"Spring Boot ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-metrics.html"}),"Production-ready Metrics"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u57fa\u4e8e Micrometer"),Object(c.b)("li",{parentName:"ul"},"\u5bf9 Prometheus \u66b4\u9732 ",Object(c.b)("inlineCode",{parentName:"li"},"/actuator/prometheus")))),Object(c.b)("li",{parentName:"ul"},"NOTE",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u6307\u6807\u672c\u8eab\u662f\u591a\u7ef4\u6570\u636e")))))}s.isMDXComponent=!0},713:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,d=u["".concat(o,".").concat(b)]||u[b]||m[b]||c;return r?i.a.createElement(d,a(a({ref:t},l),{},{components:r})):i.a.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=b;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var l=2;l<c;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);