(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(988)),i={title:"Thanos \u7248\u672c"},c={unversionedId:"devops/metrics/thanos-version",id:"devops/metrics/thanos-version",isDocsHomePage:!1,title:"Thanos \u7248\u672c",description:"0.18",source:"@site/notes/devops/metrics/thanos-version.md",slug:"/devops/metrics/thanos-version",permalink:"/notes/devops/metrics/thanos-version",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/metrics/thanos-version.md",version:"current",sidebar:"docs",previous:{title:"statsd_exporter",permalink:"/notes/devops/metrics/statsd_exporter"},next:{title:"Thanos",permalink:"/notes/devops/metrics/thanos"}},l=[{value:"0.18",id:"018",children:[]},{value:"0.17",id:"017",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"018"},"0.18"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u67e5\u8be2\u6027\u80fd\u4f18\u5316"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"thanos tools bucket rewrite"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u91cd\u5199\u5220\u9664\u5e8f\u5217"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"thanos tools bucket replicate"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u4e8e block ID \u590d\u5236"))),Object(o.b)("li",{parentName:"ul"},"Query Frontend \u4ee3\u7406 labels \u548c series"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/thanos-io/thanos/releases/tag/v0.18.0"},"v0.18.0"))),Object(o.b)("h2",{id:"017"},"0.17"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"BlockViewer \u652f\u6301\u4e0b\u8f7d meta.json - Compact/Web UI"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"thanos query-frontend")," - \u652f\u6301 label \u540d\u5b57\u548c\u503c \u67e5\u8be2\u5206\u7247\u3001\u91cd\u8bd5"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"thanos tools bucket replicate")," - \u652f\u6301\u901a\u8fc7 ID \u548c\u65f6\u95f4\u6bb5 \u590d\u5236"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"thanos query")," - using dynamic lookback delta when downsampled data is used by default"),Object(o.b)("li",{parentName:"ul"},"Compactor \u4f1a\u6ce8\u610f 64GB \u7d22\u5f15\u9650\u5236\uff0c\u4f1a\u907f\u514d\u8fdb\u884c\u538b\u7f29 - \u901a\u8fc7\u4e0a\u4f20 no-compact-mark.json \u4e5f\u80fd\u63a7\u5236\u4e0d\u538b\u7f29"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"thanos tools bucket mark")," \u6807\u8bb0\u4e0d\u538b\u7f29\u6216\u5220\u9664"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"--store.enable-index-header-lazy-reader")," - \u542f\u7528\u540e store \u53ea\u4f1a mmap \u90e8\u5206\u5fc5\u8981\u4fe1\u606f\uff0c\u4e0b\u4e00\u4e2a\u7248\u672c\u4e3a\u9ed8\u8ba4\u5f00\u542f")))}p.isMDXComponent=!0},988:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);