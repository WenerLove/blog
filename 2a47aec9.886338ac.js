(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,g=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(g,p(p({ref:t},l),{},{components:n})):a.a.createElement(g,p({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(1021)),o={id:"pegjs",title:"PEG.js"},p={unversionedId:"languages/pegjs",id:"languages/pegjs",isDocsHomePage:!1,title:"PEG.js",description:"Tips",source:"@site/notes/languages/pegjs.md",slug:"/languages/pegjs",permalink:"/notes/languages/pegjs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/pegjs.md",version:"current",sidebar:"docs",previous:{title:"Parsing Expression Grammars",permalink:"/notes/languages/peg"},next:{title:"PHP Pecl",permalink:"/notes/languages/php-pecl"}},c=[{value:"Tips",id:"tips",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://pegjs.org"},"pegjs.org")," - JavaScript PEG \u8bed\u6cd5\u89e3\u6790\u751f\u6210\u5668",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://pegjs.org/online"},"\u5728\u7ebf")," / ",Object(i.b)("a",{parentName:"li",href:"https://pegjs.org/documentation"},"\u6587\u6863")))),Object(i.b)("li",{parentName:"ul"},"\u8bed\u6cd5",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"''")," - \u5355\u5f15\u53f7\u5b57\u7b26\u4e32\u5ffd\u7565\u5927\u5c0f\u5199"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'""')," - \u53cc\u5f15\u53f7\u5b57\u7b26\u4e32\u5927\u5c0f\u5199\u654f\u611f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"!")," ",Object(i.b)("inlineCode",{parentName:"li"},"&")," - \u7528\u4e8e\u6761\u4ef6\u9884\u6d4b - \u7c7b\u4f3c\u4e8e\u524d\u5411\u73af\u89c6 - Lookahead"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/metadevpro/ts-pegjs"},"metadevpro/ts-pegjs"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u751f\u6210 TS \u6e90\u7801")))))}u.isMDXComponent=!0}}]);