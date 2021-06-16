(window.webpackJsonp=window.webpackJsonp||[]).push([[789],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},862:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(1083)),o={id:"auth-glossary",title:"\u8bcd\u6c47"},c={unversionedId:"service/auth/auth-glossary",id:"service/auth/auth-glossary",isDocsHomePage:!1,title:"\u8bcd\u6c47",description:"IdP - Identity Provider",source:"@site/notes/service/auth/glossary.md",slug:"/service/auth/auth-glossary",permalink:"/notes/service/auth/auth-glossary",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/glossary.md",version:"current",sidebar:"docs",previous:{title:"dex",permalink:"/notes/service/auth/dex"},next:{title:"Hydra",permalink:"/notes/service/auth/hydra"}},u=[],l={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"idp---identity-provider"},"IdP - Identity Provider"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u8ba4\u8bc1\u4fe1\u606f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8d26\u53f7\u5bc6\u7801\u767b\u9646"))),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u9645\u5b58\u653e\u7528\u6237\u4fe1\u606f")),Object(i.b)("h1",{id:"idm---identity-management---\u8eab\u4efd\u7ba1\u7406"},"IdM - Identity Management - \u8eab\u4efd\u7ba1\u7406"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Identity_management"},"Identity management"))),Object(i.b)("h1",{id:"idam---iam---identity-and-access-management---\u8eab\u4efd\u8bbf\u95ee\u7ba1\u7406"},"IdAM - IAM - Identity and Access Management - \u8eab\u4efd\u8bbf\u95ee\u7ba1\u7406"),Object(i.b)("h1",{id:"saml---security-assertion-markup-language---\u5b89\u5168\u65ad\u8a00\u6807\u8bb0\u8bed\u8a00"},"SAML - Security Assertion Markup Language - \u5b89\u5168\u65ad\u8a00\u6807\u8bb0\u8bed\u8a00"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u8ba4\u8bc1\u548c\u6388\u6743"),Object(i.b)("li",{parentName:"ul"},"principal - \u4f8b\u5982 \u7ec8\u7aef\u7528\u6237"),Object(i.b)("li",{parentName:"ul"},"service provider - \u4f8b\u5982 \u7f51\u7ad9\uff0cprincipal \u5c1d\u8bd5\u8bbf\u95ee"),Object(i.b)("li",{parentName:"ul"},"identity provider - \u6301\u6709 principal \u8ba4\u8bc1\u548c\u6388\u6743\u4fe1\u606f\u7684\u670d\u52a1")))}p.isMDXComponent=!0}}]);