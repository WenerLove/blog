(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{1044:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(r),f=n,s=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?a.a.createElement(s,i(i({ref:t},u),{},{components:r})):a.a.createElement(s,i({ref:t},u))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},473:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(8),o=(r(0),r(1044)),c={title:"Pattern FAQ"},i={unversionedId:"dev/theory/pattern-faq",id:"dev/theory/pattern-faq",isDocsHomePage:!1,title:"Pattern FAQ",description:"Actor vs CSP",source:"@site/notes/dev/theory/pattern-faq.md",slug:"/dev/theory/pattern-faq",permalink:"/notes/dev/theory/pattern-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/theory/pattern-faq.md",version:"current",sidebar:"docs",previous:{title:"\u5f00\u53d1\u76f8\u5173\u8bcd\u6c47",permalink:"/notes/dev/theory/glossary"},next:{title:"\u9650\u5236\u7406\u8bba",permalink:"/notes/dev/theory/theory-of-constraints"}},l=[{value:"Actor vs CSP",id:"actor-vs-csp",children:[]}],u={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"actor-vs-csp"},"Actor vs CSP"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Communicating_sequential_processes#Comparison_with_the_actor_model"},"Comparison with the actor model"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"CSP \u6d88\u606f\u5185\u5bb9\u65e0\u5173\uff0cActor \u6d88\u606f\u7c7b\u578b\u660e\u786e"),Object(o.b)("li",{parentName:"ul"},"CSP \u57fa\u4e8e channel\uff0cActor \u57fa\u4e8e\u660e\u786e\u7684\u7ec8\u7aef\u6807\u8bc6"),Object(o.b)("li",{parentName:"ul"},"CSP channel \u6536\u53d1\u4e24\u7aef\u5b58\u5728\u201c\u7ea6\u4f1a\u201d\u5b9a\u70b9\uff0cActor \u5168\u5f02\u6b65\u4e0d\u5b58\u5728\u7b49\u5f85"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.quora.com/How-are-Akka-actors-different-from-Go-channels-How-are-two-related-to-each-other"},"How are Akka actors different from Go channels?"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"channel",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"limit buffer"),Object(o.b)("li",{parentName:"ul"},"select - waiting faster"),Object(o.b)("li",{parentName:"ul"},"wait - \u4e0d\u6d88\u8017 CPU\uff0c\u53ea\u9700\u8981\u4e00\u70b9\u5185\u5b58",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u65e0 buffer - \u7b49\u5f85\u5bf9\u65b9\u5b58\u5728"),Object(o.b)("li",{parentName:"ul"},"buffer \u6ee1 - \u7b49\u5f85\u7a7a\u95f4"),Object(o.b)("li",{parentName:"ul"},"\u7a7a buffer - \u7b49\u5f85\u6570\u636e\u5b58\u5728"))),Object(o.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u4e92\u76f8\u4f9d\u8d56\u53ef\u80fd\u5bfc\u81f4\u6b7b\u9501"))))),Object(o.b)("li",{parentName:"ul"},"actor",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6bcf\u4e2a actor \u7c7b\u4f3c\u4e00\u4e2a goroutine ",Object(o.b)("inlineCode",{parentName:"li"},"for {}")),Object(o.b)("li",{parentName:"ul"},"\u53ea\u6709\u4e00\u4e2a\u8f93\u5165 channel"),Object(o.b)("li",{parentName:"ul"},"infinite buffer"),Object(o.b)("li",{parentName:"ul"},"unbounded number of writer - writer \u4e5f\u662f actor"),Object(o.b)("li",{parentName:"ul"},"\u4e0d\u5b58\u5728 wait - \u5168\u5f02\u6b65 - \u4e0d\u5b58\u5728 select"),Object(o.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5f53\u9700\u8981\u6d41\u63a7\u4ea4\u4e92\u65f6\u4f1a\u53d8\u5f97\u9ebb\u70e6 - \u8bf7\u6c42/\u54cd\u5e94 - \u5931\u53bb\u6027\u80fd\u4f18\u52bf"),Object(o.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u62d2\u7edd\u901a\u8baf - go \u53ef\u4ee5\u9009\u62e9 close channel\uff0c\u53ef select \u90e8\u5206"),Object(o.b)("li",{parentName:"ul"},"\u65e0\u9650\u7684 buffer \u5e76\u4e0d\u80fd\u5b9e\u9645\u88ab\u4fdd\u969c - \u5185\u5b58\u603b\u662f\u4f1a\u6ee1\u7684")))))))))}b.isMDXComponent=!0}}]);