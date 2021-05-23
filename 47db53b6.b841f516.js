(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{1021:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(a),O=r,s=u["".concat(c,".").concat(O)]||u[O]||m[O]||l;return a?n.a.createElement(s,b(b({ref:t},p),{},{components:a})):n.a.createElement(s,b({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var p=2;p<l;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},338:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),l=(a(0),a(1021)),c={title:"GraphQL FAQ"},b={unversionedId:"service/api/graphql-faq",id:"service/api/graphql-faq",isDocsHomePage:!1,title:"GraphQL FAQ",description:"Apollo vs Relay vs URQL",source:"@site/notes/service/api/graphql-faq.md",slug:"/service/api/graphql-faq",permalink:"/notes/service/api/graphql-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/graphql-faq.md",version:"current",sidebar:"docs",previous:{title:"graphql-code-generator",permalink:"/notes/service/api/graphql-code-generator"},next:{title:"GraphQL",permalink:"/notes/service/api/graphql"}},i=[{value:"Apollo vs Relay vs URQL",id:"apollo-vs-relay-vs-urql",children:[]}],p={toc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"apollo-vs-relay-vs-urql"},"Apollo vs Relay vs URQL"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/FormidableLabs/urql"},"URQL"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Bundle \u5c0f - 5.9kB + React = 7.1kB + cache 6.5kB = 13.6kB"),Object(l.b)("li",{parentName:"ul"},"\u2705",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u79bb\u7ebf - \u672c\u5730 resolve\u3001\u672c\u5730\u6570\u636e\u7f13\u5b58"),Object(l.b)("li",{parentName:"ul"},"Focus Refetching"),Object(l.b)("li",{parentName:"ul"},"@urql/exchange-multipart-fetch \u652f\u6301\u6587\u4ef6\u4e0a\u4f20"))),Object(l.b)("li",{parentName:"ul"},"\ud83d\udd36",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u4eba\u6570\u5c11 - \u793e\u533a\u5c0f"),Object(l.b)("li",{parentName:"ul"},"suspense ",Object(l.b)("strong",{parentName:"li"},"\u5168\u5c40 opt-in")))),Object(l.b)("li",{parentName:"ul"},"\ud83d\udfe1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 wonka \u505a\u6d41\u5904\u7406 - \u5185\u90e8\u5f02\u5e38\u8c03\u8bd5\u5f88\u9ebb\u70e6"))),Object(l.b)("li",{parentName:"ul"},"\ud83d\uded1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728 cacheExchange \u4e4b\u5916\u64cd\u4f5c\u7f13\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u672c\u5730\u72b6\u6001\u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Batched Queries"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/facebook/relay"},"Relay"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Bundle - 27.7kB + React = 34.1kB"),Object(l.b)("li",{parentName:"ul"},"\u5bf9 Schema \u6709\u8981\u6c42"),Object(l.b)("li",{parentName:"ul"},"\u2705",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Schema \u89c4\u8303"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u5206\u9875"),Object(l.b)("li",{parentName:"ul"},"Defer & Stream"),Object(l.b)("li",{parentName:"ul"},"Live Queries"))),Object(l.b)("li",{parentName:"ul"},"\ud83d\uded1",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u672c\u5730 Resolve"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u8fd4\u56de\u90e8\u5206\u7ed3\u679c"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/apollographql/apollo-client"},"Apollo"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Bundle - 32.9kB"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"urql ",Object(l.b)("a",{parentName:"li",href:"https://formidable.com/open-source/urql/docs/comparison/"},"vs Apollo vs Relay"))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Symbol"),Object(l.b)("th",{parentName:"tr",align:null},"Desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\u2705"),Object(l.b)("td",{parentName:"tr",align:null},"Good at")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\ud83d\udd36"),Object(l.b)("td",{parentName:"tr",align:null},"Not Good Enough")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\ud83d\udfe1"),Object(l.b)("td",{parentName:"tr",align:null},"Bad at")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"\ud83d\uded1"),Object(l.b)("td",{parentName:"tr",align:null},"Sorry for")))))}o.isMDXComponent=!0}}]);