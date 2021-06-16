(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,f=b["".concat(a,".").concat(m)]||b[m]||u[m]||i;return n?o.a.createElement(f,l(l({ref:t},p),{},{components:n})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},241:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),i=(n(0),n(1083)),a={title:"HTML"},l={unversionedId:"web/spec/html",id:"web/spec/html",isDocsHomePage:!1,title:"HTML",description:"Repaints",source:"@site/notes/web/spec/html.md",slug:"/web/spec/html",permalink:"/notes/web/spec/html",editUrl:"https://github.com/wenerme/wener/edit/master/notes/web/spec/html.md",version:"current",sidebar:"docs",previous:{title:"TypeScript \u7c7b\u578b\u5b9a\u4e49",permalink:"/notes/web/script/typescript-typing"},next:{title:"CSS Awesome",permalink:"/notes/web/style/css-awesome"}},c=[{value:"Repaints",id:"repaints",children:[]},{value:"Reflow",id:"reflow",children:[]},{value:"navigator.permissions",id:"navigatorpermissions",children:[]},{value:"geolocation",id:"geolocation",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"repaints"},"Repaints"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4fee\u6539\u53ef\u89c1\u6027\u6837\u5f0f\u89e6\u53d1 - \u4f8b\u5982 opacity, background-color, visibility, outline")),Object(i.b)("h2",{id:"reflow"},"Reflow"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4fee\u6539\u5e03\u5c40\u65f6\u89e6\u53d1 - \u4fee\u6539\u6837\u5f0f\u4e0d\u89e6\u53d1 - \u5f71\u54cd\u5f88\u5927\uff0c\u963b\u585e\u8ba1\u7b97"),Object(i.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u4f4d\u7f6e\u548c\u5c3a\u5bf8 - \u5f71\u54cd\u4e0a\u4e0b\u7ea7\u548c\u540c\u4e00\u7ea7"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gist.github.com/paulirish/5d52fb081b3570c81e3a"},"What forces layout / reflow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"position: absolute;")," ",Object(i.b)("inlineCode",{parentName:"li"},"position: fixed;")," \u53ef\u51cf\u5c11 reflow \u5f71\u54cd"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"display: none;")," \u4e0d\u5f71\u54cd")),Object(i.b)("h2",{id:"navigatorpermissions"},"navigator.permissions"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions"},"navigator.permissions"))),Object(i.b)("h2",{id:"geolocation"},"geolocation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation"},"Using geolocation")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://test.wener.me/geo.html"},"https://test.wener.me/geo.html"))))}s.isMDXComponent=!0}}]);