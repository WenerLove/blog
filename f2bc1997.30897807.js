(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{1021:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return f}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=t,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||c;return n?o.a.createElement(f,a(a({ref:r},l),{},{components:n})):o.a.createElement(f,a({ref:r},l))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,s=new Array(c);s[0]=b;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:t,s[1]=a;for(var l=2;l<c;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},976:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return s})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return i})),n.d(r,"default",(function(){return p}));var t=n(3),o=n(8),c=(n(0),n(1021)),s={title:"PowerDNS Recursor"},a={unversionedId:"service/dns/powerdns-rec",id:"service/dns/powerdns-rec",isDocsHomePage:!1,title:"PowerDNS Recursor",description:"Tips",source:"@site/notes/service/dns/powerdns-rec.md",slug:"/service/dns/powerdns-rec",permalink:"/notes/service/dns/powerdns-rec",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/dns/powerdns-rec.md",version:"current",sidebar:"docs",previous:{title:"PowerDNS LUA",permalink:"/notes/service/dns/powerdns-lua"},next:{title:"PowerDNS",permalink:"/notes/service/dns/powerdns"}},i=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"API",id:"api",children:[]}],l={toc:i};function p(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\nbrew install pdnsrec\n\npdns_recursor --config >> files/recursor.conf\n")),Object(c.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://doc.powerdns.com/recursor/settings.html"},"https://doc.powerdns.com/recursor/settings.html"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ini"},"# \u57fa\u7840\u914d\u7f6e\ndaemon=yes\nhint-file=/etc/pdns/root.hints\nlocal-port=53\nsetgid=recursor\nsetuid=recursor\n\n# \u53ef\u4ee5\u8003\u8651\u5305\u542b\u5176\u5b83\u914d\u7f6e\u6587\u4ef6\nforward-zones-file=/etc/pdns/recursor-forwards.conf\n# \u52a0\u8f7d\u76ee\u5f55\u4e0b *.conf\ninclude-dir=/etc/pdns/recursor.d\n\n# Web \u670d\u52a1\u914d\u7f6e\n# ==========\nwebserver=yes\nwebserver-port=5380\nwebserver-address=0.0.0.0\n# \u9ed8\u8ba4 127.0.0.1\nwebserver-allow-from=127.0.0.0/8, 10.0.0.0/8, 100.64.0.0/10, 169.254.0.0/16, 192.168.0.0/16, 172.16.0.0/12, ::1/128, fc00::/7, fe80::/10\n# \u9ed8\u8ba4 none\n# normal \u8bb0\u5f55\u8bf7\u6c42\nwebserver-loglevel=normal\n# web \u67e5\u770b\u5bc6\u7801\nwebserver-password=\napi-key=changme\n\n# enable ipv6\nquery-local-address6=::\n")),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# https://doc.powerdns.com/recursor/http-api/index.html\n# 4.3.0\n# /metrics\n\ncurl -v -H 'X-API-Key: KEY' http://localhost:5380/api/v1/servers/localhost | jq\ncurl -v -H 'X-API-Key: KEY' http://localhost:5380/api/v1/servers/localhost/zones | jq\n")))}p.isMDXComponent=!0}}]);