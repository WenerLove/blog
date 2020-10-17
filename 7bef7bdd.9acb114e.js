(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{304:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(2),o=t(7),a=(t(0),t(586)),i={id:"privoxy-action",title:"Privoxy Action"},c={unversionedId:"ops/network/private/privoxy-action",id:"ops/network/private/privoxy-action",isDocsHomePage:!1,title:"Privoxy Action",description:"Privoxy Action",source:"@site/notes/ops/network/private/privoxy-action.md",slug:"/ops/network/private/privoxy-action",permalink:"/notes/ops/network/private/privoxy-action",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/private/privoxy-action.md",version:"current",sidebar:"docs",previous:{title:"Privoxy",permalink:"/notes/ops/network/private/privoxy"},next:{title:"IPSec",permalink:"/notes/ops/network/private/ipsec"}},p=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",children:[]},{value:"\u91cd\u5b9a\u5411 google \u7684\u641c\u7d22\u7ed3\u679c\u4e3a https",id:"\u91cd\u5b9a\u5411-google-\u7684\u641c\u7d22\u7ed3\u679c\u4e3a-https",children:[]},{value:"\u8986\u76d6\u8f6c\u53d1",id:"\u8986\u76d6\u8f6c\u53d1",children:[{value:"match-all.action",id:"match-allaction",children:[]}]}],l={rightToc:p};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"privoxy-action"},"Privoxy Action"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.privoxy.org/user-manual/actions-file.html"}),"Action file"))),Object(a.b)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"+name # \u542f\u7528 Action\n-name # \u7981\u7528 Action\n\n+name{param} # \u542f\u7528\u5e26\u53c2\u6570\n")),Object(a.b)("h2",{id:"\u91cd\u5b9a\u5411-google-\u7684\u641c\u7d22\u7ed3\u679c\u4e3a-https"},"\u91cd\u5b9a\u5411 google \u7684\u641c\u7d22\u7ed3\u679c\u4e3a https"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"{+redirect{s@^http://[^/]*/search\\?q=([^&]*).*@https://encrypted.google.com/search?q=$1@}}\n.google.*/search\n")),Object(a.b)("h2",{id:"\u8986\u76d6\u8f6c\u53d1"},"\u8986\u76d6\u8f6c\u53d1"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"# \u8f6c\u53d1\u7279\u5b9a\u57df\u540d\u5230\u7279\u5b9a\u8fdc\u7a0b Socks\n{+forward-override{forward-socks5t 127.0.0.1:1080 .}}\n*.wener.me\n\n# \u8fdc\u7a0b http proxy \u534f\u8bae\n{+forward-override{forward 127.0.0.1:8123 }}\n*.wener.me\n\n# \u76f4\u63a5\u8bf7\u6c42\n{+forward-override{forward .}}\n*.wener.me\n\n# \u8bf7\u6c42 Web \u7aef\u53e3\n{+forward-override{forward-webserver 127.0.0.1:80}}\n*.wener.me\n\n")),Object(a.b)("h3",{id:"match-allaction"},"match-all.action"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ini"}),"{ \\\n# \u79fb\u9664 X-Forwarded-For\n+change-x-forwarded-for{block} \\\n# \u9488\u5bf9\u4e0d\u540c\u7c7b\u578b\u6dfb\u52a0\u6807\u8bb0\n+client-header-tagger{css-requests} \\\n+client-header-tagger{image-requests} \\\n+client-header-tagger{range-requests} \\\n# \u79fb\u9664\u90ae\u7bb1\n+hide-from-header{block} \\\n# \u8bbe\u7f6e\u5982\u4f55\u963b\u585e\u56fe\u7247\n+set-image-blocker{pattern} \\\n}\n# \u5339\u914d\u6240\u6709 URL\n/\n")))}s.isMDXComponent=!0},586:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return t?o.a.createElement(m,c(c({ref:r},l),{},{components:t})):o.a.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);