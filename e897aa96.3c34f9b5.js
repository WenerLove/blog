(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{540:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(2),o=n(7),l=(n(0),n(586)),s={id:"syslog",title:"Syslog"},a={unversionedId:"service/logging/syslog",id:"service/logging/syslog",isDocsHomePage:!1,title:"Syslog",description:"Syslog",source:"@site/notes/service/logging/syslog.md",slug:"/service/logging/syslog",permalink:"/notes/service/logging/syslog",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/logging/syslog.md",version:"current",sidebar:"docs",previous:{title:"\u65e5\u5fd7",permalink:"/notes/service/logging/logging"},next:{title:"Loki",permalink:"/notes/service/logging/loki"}},i=[{value:"Tips",id:"tips",children:[]},{value:"busybox syslog",id:"busybox-syslog",children:[]},{value:"rsyslog",id:"rsyslog",children:[]},{value:"syslog-ng",id:"syslog-ng",children:[]}],c={rightToc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"syslog"},"Syslog"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5b9e\u73b0",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"busybox syslog"),Object(l.b)("li",{parentName:"ul"},"rsyslog"),Object(l.b)("li",{parentName:"ul"},"syslog-ng"),Object(l.b)("li",{parentName:"ul"},"fluentbit"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://serverfault.com/questions/692309"}),"What is the difference between syslog, rsyslog and syslog-ng?"))))),Object(l.b)("h2",{id:"busybox-syslog"},"busybox syslog"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"syslogd"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://git.busybox.net/busybox/tree/docs/syslog.conf.txt"}),"/etc/syslog.conf"))),Object(l.b)("h2",{id:"rsyslog"},"rsyslog"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"rsyslog ",Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.rsyslog.com/rsyslog-configuration-builder/"}),"Configuration Wizard"))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"brew install rsyslog\n")),Object(l.b)("h2",{id:"syslog-ng"},"syslog-ng"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/balabit/syslog-ng/blob/master/contrib/syslog-ng.conf.doc"}),"syslog-ng.conf.doc")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/balabit/syslog-ng/blob/master/contrib/rhel-packaging/syslog-ng.conf"}),"syslog-ng.conf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.syslog-ng.com/technical-documents/doc/syslog-ng-open-source-edition/3.22/administration-guide/12"}),"Administration Guide"))),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-conf"}),'@version: 3.9\n\ndestination d_general {\n  file("/data/log/general.log");\n};\n\nsource s_remote {\n    tcp(ip(0.0.0.0) port(10514));\n    udp(ip(0.0.0.0) port(10514));\n};\n\nlog {\n  source(s_remote);\n  destination(d_general);\n};\n')))}b.isMDXComponent=!0},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=b(n),p=r,y=g["".concat(s,".").concat(p)]||g[p]||u[p]||l;return n?o.a.createElement(y,a(a({ref:t},c),{},{components:n})):o.a.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=p;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<l;c++)s[c]=n[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);