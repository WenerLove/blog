(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{1044:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return r?a.a.createElement(d,c(c({ref:t},s),{},{components:r})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},560:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),i=(r(0),r(1044)),o={title:"Thanos \u7248\u672c"},c={unversionedId:"service/observability/metrics/thanos-version",id:"service/observability/metrics/thanos-version",isDocsHomePage:!1,title:"Thanos \u7248\u672c",description:"0.18",source:"@site/notes/service/observability/metrics/thanos-version.md",slug:"/service/observability/metrics/thanos-version",permalink:"/notes/service/observability/metrics/thanos-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/thanos-version.md",version:"current",sidebar:"docs",previous:{title:"\u6307\u6807\u670d\u52a1\u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/observability/metrics/metrics-faq"},next:{title:"Thanos",permalink:"/notes/service/observability/metrics/thanos"}},l=[{value:"0.18",id:"018",children:[]},{value:"0.17",id:"017",children:[]}],s={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"018"},"0.18"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u67e5\u8be2\u6027\u80fd\u4f18\u5316"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"thanos tools bucket rewrite"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u91cd\u5199\u5220\u9664\u5e8f\u5217"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"thanos tools bucket replicate"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u4e8e block ID \u590d\u5236"))),Object(i.b)("li",{parentName:"ul"},"Query Frontend \u4ee3\u7406 labels \u548c series"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/thanos-io/thanos/releases/tag/v0.18.0"},"v0.18.0"))),Object(i.b)("h2",{id:"017"},"0.17"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"BlockViewer \u652f\u6301\u4e0b\u8f7d meta.json - Compact/Web UI"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"thanos query-frontend")," - \u652f\u6301 label \u540d\u5b57\u548c\u503c \u67e5\u8be2\u5206\u7247\u3001\u91cd\u8bd5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"thanos tools bucket replicate")," - \u652f\u6301\u901a\u8fc7 ID \u548c\u65f6\u95f4\u6bb5 \u590d\u5236"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"thanos query")," - using dynamic lookback delta when downsampled data is used by default"),Object(i.b)("li",{parentName:"ul"},"Compactor \u4f1a\u6ce8\u610f 64GB \u7d22\u5f15\u9650\u5236\uff0c\u4f1a\u907f\u514d\u8fdb\u884c\u538b\u7f29 - \u901a\u8fc7\u4e0a\u4f20 no-compact-mark.json \u4e5f\u80fd\u63a7\u5236\u4e0d\u538b\u7f29"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"thanos tools bucket mark")," \u6807\u8bb0\u4e0d\u538b\u7f29\u6216\u5220\u9664"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--store.enable-index-header-lazy-reader")," - \u542f\u7528\u540e store \u53ea\u4f1a mmap \u90e8\u5206\u5fc5\u8981\u4fe1\u606f\uff0c\u4e0b\u4e00\u4e2a\u7248\u672c\u4e3a\u9ed8\u8ba4\u5f00\u542f")))}b.isMDXComponent=!0}}]);