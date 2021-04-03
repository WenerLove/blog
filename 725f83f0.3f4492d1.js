(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{431:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return u})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(8),l=(a(0),a(879)),u={id:"auth-faq",title:"\u8ba4\u8bc1\u6388\u6743\u5e38\u89c1\u95ee\u9898"},i={unversionedId:"service/auth/auth-faq",id:"service/auth/auth-faq",isDocsHomePage:!1,title:"\u8ba4\u8bc1\u6388\u6743\u5e38\u89c1\u95ee\u9898",description:"OIDC vs OAuth",source:"@site/notes/service/auth/auth-faq.md",slug:"/service/auth/auth-faq",permalink:"/notes/service/auth/auth-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/auth-faq.md",version:"current",sidebar:"docs",previous:{title:"Apache Directory",permalink:"/notes/service/auth/apacheds"},next:{title:"dex",permalink:"/notes/service/auth/dex"}},b=[{value:"OIDC vs OAuth",id:"oidc-vs-oauth",children:[]},{value:"Authentication vs Authorization",id:"authentication-vs-authorization",children:[]},{value:"Proxy Auth vs Forward Auth",id:"proxy-auth-vs-forward-auth",children:[]},{value:"louketo-proxy vs oauth2-proxy",id:"louketo-proxy-vs-oauth2-proxy",children:[]}],c={toc:b};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"oidc-vs-oauth"},"OIDC vs OAuth"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"OIDC - OpenID Connect",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6807\u51c6\u5316\u4e86\u4f7f\u7528 OAuth 2.0 \u8ba4\u8bc1\u7684\u903b\u8f91"),Object(l.b)("li",{parentName:"ul"},"\u6709\u88ab \u6388\u6743/\u7528\u6237/subject \u5bf9\u8c61"),Object(l.b)("li",{parentName:"ul"},"\u6709 subject \u7684\u57fa\u7840\u5c5e\u6027",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"profile, emial, \u552f\u4e00\u6807\u8bc6\u7b26, group"))),Object(l.b)("li",{parentName:"ul"},"\u6709 subject \u6388\u6743\u4e0a\u4e0b\u6587",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"issuer, \u65f6\u95f4"))))),Object(l.b)("li",{parentName:"ul"},"OAuth 2.0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u662f\u8ba4\u8bc1\u534f\u8bae"),Object(l.b)("li",{parentName:"ul"},"\u4e3b\u8981\u5728\u4e8e \u4ee3\u7406/\u59d4\u6258/delegated \u8bbf\u95ee\u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},"\u6ca1\u6709\u88ab\u6388\u6743\u5bf9\u8c61/\u7528\u6237 \u6982\u5ff5"),Object(l.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5ba2\u6237\u7aef\u573a\u666f"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://oauth.net/articles/authentication/"},"User Authentication with OAuth 2.0"))),Object(l.b)("h2",{id:"authentication-vs-authorization"},"Authentication vs Authorization"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Authentication",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f53\u524d\u7528\u6237\u662f\u4e0d\u662f\u5b83\u6240\u4ee3\u8868\u7684\u7528\u6237",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u4e00\u4e2a\u58f0\u79f0 admin \u7684 token \u662f\u4e0d\u662f\u4ee3\u8868\u7684\u5b9e\u9645\u7684 admin")))))),Object(l.b)("h2",{id:"proxy-auth-vs-forward-auth"},"Proxy Auth vs Forward Auth"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Proxy - \u4ee3\u7406\u6388\u6743",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u62e6\u622a\u6240\u6709\u8bf7\u6c42"),Object(l.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u4e0a\u6e38"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u989d\u5916\u53cd\u5411\u4ee3\u7406\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5355\u6b21\u8bf7\u6c42\u5b8c\u6210\u9a8c\u8bc1"))),Object(l.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u66f4\u590d\u6742",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u9664\u4e86\u9700\u8981\u5b9e\u73b0 auth \u80fd\u529b\u8fd8\u9700\u8981\u5b9e\u73b0 proxy \u80fd\u529b"))),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4e0d\u4f9d\u8d56\u989d\u5916 Nginx/\u53cd\u5411\u4ee3\u7406 - \u4f46\u4e00\u822c\u90fd\u4f1a\u6709",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6240\u4ee5\u8fd8\u662f\u7b49\u540c\u4e8e\u591a\u4e00\u6b21\u8bf7\u6c42"))),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4e0a\u6e38\u90e8\u7f72\u4e00\u4e2a"))))),Object(l.b)("li",{parentName:"ul"},"Forward - \u8f6c\u53d1\u6388\u6743",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7f51\u5173\u8bf7\u6c42\u65f6\u53d1\u8d77\u4e00\u4e2a\u989d\u5916\u7684\u8ba4\u8bc1\u8bf7\u6c42"),Object(l.b)("li",{parentName:"ul"},"\u9700\u8981\u914d\u7f6e\u989d\u5916\u7684\u53cd\u5411\u4ee3\u7406 - \u4f46\u4e00\u822c\u4e00\u4e2a\u57df\u540d\u4e00\u6b21\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u5355"),Object(l.b)("li",{parentName:"ul"},"\u90e8\u7f72\u4e00\u4e2a\u7ed9\u591a\u4e2a\u4e0a\u6e38\u4f7f\u7528"))),Object(l.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u591a\u4e00\u6b21\u8bf7\u6c42"),Object(l.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u4f20\u9012\u989d\u5916\u4fe1\u606f\u5230\u4e0a\u6e38",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u65e0\u6cd5\u4f20\u9012 JWT \u5934")))))))),Object(l.b)("h2",{id:"louketo-proxy-vs-oauth2-proxy"},"louketo-proxy vs oauth2-proxy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"louketo",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4ee3\u7406\u6388\u6743\u4e3a\u4e3b"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u4e00\u4e2a Nginx \u7f51\u5173\uff0c\u6d41\u91cf\u4ece\u4e2d\u8fc7"),Object(l.b)("li",{parentName:"ul"},"\u4ee5\u96c6\u6210 Keycloak \u4e3a\u4e3b"),Object(l.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u4e0a\u6e38\u90fd\u9700\u8981\u90e8\u7f72\u4e00\u4e2a"),Object(l.b)("li",{parentName:"ul"},"\u8131\u80ce\u4e8e Keycloak Gateway - \u56e0\u6b64\u80fd\u66f4\u597d\u4e0e KC \u96c6\u6210",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7b80\u6613\u914d\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u89d2\u8272"),Object(l.b)("li",{parentName:"ul"},"\u6743\u9650"),Object(l.b)("li",{parentName:"ul"},"\u8def\u5f84\u8d44\u6e90\u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u900f\u4f20 logout \u5230 KC"))))),Object(l.b)("li",{parentName:"ul"},"oauth2",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8f6c\u53d1\u6388\u6743\u4e3a\u4e3b"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7406\u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u66f4\u591a\u4e09\u65b9 Oauth2 \u96c6\u6210"),Object(l.b)("li",{parentName:"ul"},"Nginx \u8bf7\u6c42\u4e4b\u524d\u9a8c\u8bc1"),Object(l.b)("li",{parentName:"ul"},"\u7b80\u5355\u7684\u9a8c\u8bc1"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u53ea\u90e8\u7f72\u4e00\u4e2a\u7ed9\u591a\u4e2a\u4e0a\u6e38\u4f7f\u7528 - \u8f6c\u53d1\u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},"Keycloak \u96c6\u6210",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4ec5\u652f\u6301 ",Object(l.b)("inlineCode",{parentName:"li"},"--keycloak-group")),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 cookie-refresh"),Object(l.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u8bbf\u95ee\u539f\u59cb jwt \u4fe1\u606f"),Object(l.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u6b63\u786e logout")))))))}o.isMDXComponent=!0},879:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),o=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=o(a),m=r,j=p["".concat(u,".").concat(m)]||p[m]||O[m]||l;return a?n.a.createElement(j,i(i({ref:t},c),{},{components:a})):n.a.createElement(j,i({ref:t},c))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,u=new Array(l);u[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var c=2;c<l;c++)u[c]=a[c];return n.a.createElement.apply(null,u)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);