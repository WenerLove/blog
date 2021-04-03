(window.webpackJsonp=window.webpackJsonp||[]).push([[649],{723:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),i=(r(0),r(879)),l={title:"\u4ee3\u7406"},c={unversionedId:"service/network/proxy-awesome",id:"service/network/proxy-awesome",isDocsHomePage:!1,title:"\u4ee3\u7406",description:"Tips",source:"@site/notes/service/network/proxy-awesome.md",slug:"/service/network/proxy-awesome",permalink:"/notes/service/network/proxy-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/network/proxy-awesome.md",version:"current",sidebar:"docs",previous:{title:"Privoxy",permalink:"/notes/service/network/privoxy"},next:{title:"SNMP MIB",permalink:"/notes/service/network/snmp-mib"}},o=[{value:"Tips",id:"tips",children:[]},{value:"HTTP \u4ee3\u7406",id:"http-\u4ee3\u7406",children:[]},{value:"Golang",id:"golang",children:[]},{value:"\u5176\u4ed6\u8bed\u8a00",id:"\u5176\u4ed6\u8bed\u8a00",children:[]},{value:"github.com/rancher/remotedialer",id:"githubcomrancherremotedialer",children:[]}],b={toc:o};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("h2",{id:"http-\u4ee3\u7406"},"HTTP \u4ee3\u7406"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CONNECT \u4f1a\u7528\u4e8e\u5efa\u7acb TCP \u901a\u9053",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u662f\u7528\u4e8e https"),Object(i.b)("li",{parentName:"ul"},"\u975e https \u7684\u65f6\u5019\u4f1a\u76f4\u63a5\u53d1\u8d77 GET \u8fd9\u6837\u7684\u8bf7\u6c42"))),Object(i.b)("li",{parentName:"ul"},"Path \u4e0d\u4f1a\u53c2\u4e0e\u4ee3\u7406\u534f\u8bae")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f1a\u53d1\u8d77 GET \u8bf7\u6c42\ncurl -x http://127.0.0.1:8080 icanhazip.com -v\n# \u76f8\u540c\ncurl -x http://127.0.0.1:8080 https://icanhazip.com -v\ncurl -x http://127.0.0.1:8080/proxy https://icanhazip.com -v\n\n# http2\n# ==========\n# HTTP Upgrade\ncurl -v --http2 http://localhost:8000\n# GET / HTTP/2\ncurl -v --http2-prior-knowledge http://localhost:8000\n")),Object(i.b)("h1",{id:"\u5e93"},"\u5e93"),Object(i.b)("h2",{id:"golang"},"Golang"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://golang.org/pkg/net/http/httputil/#ReverseProxy"},"httputil.ReverseProxy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/google/huproxy"},"google/huproxy"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Server/Client \u7ed3\u6784"),Object(i.b)("li",{parentName:"ul"},"\u4e0e HTTP \u5e76\u5b58"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 Path"),Object(i.b)("li",{parentName:"ul"},"\u5229\u7528 Connection-Upgrade \u5347\u7ea7\u4e3a\u5176\u4ed6\u534f\u8bae"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/google/inverting-proxy"},"google/inverting-proxy"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Reverse proxy that inverts the direction of traffic"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/google/martian"},"google/martian"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"library for building custom HTTP/S proxies"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/antoniomika/sish"},"antoniomika/sish"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"HTTP(S)/WS(S)/TCP Tunnels to localhost using only SSH."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ginuerzh/gost"},"ginuerzh/gost")," - GO Simple Tunnel",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u591a\u7aef\u53e3"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u4ee3\u7406 HTTP/HTTPS/HTTP2/SOCKS4(A)/SOCKS5"),Object(i.b)("li",{parentName:"ul"},"UDP over TCP"),Object(i.b)("li",{parentName:"ul"},"TCP/UDP \u900f\u660e\u4ee3\u7406/\u8f6c\u53d1"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 Shadowsocks(TCP/UDP)"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 SNI \u4ee3\u7406"),Object(i.b)("li",{parentName:"ul"},"TUN/TAP"),Object(i.b)("li",{parentName:"ul"},"\u6743\u9650\u63a7\u5236"),Object(i.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),Object(i.b)("li",{parentName:"ul"},"\u8def\u7531\u63a7\u5236"),Object(i.b)("li",{parentName:"ul"},"DNS\u89e3\u6790\u548c\u4ee3\u7406"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/xtaci/smux"},"xtaci/smux")," - Stream Multiplexing Library"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/jamescun/switcher"},"jamescun/switcher")," - ssh http same port"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/inetaf/tcpproxy"},"inetaf/tcpproxy"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"TCP over HTTP"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u9759\u6001\u89c4\u5219 - Host \u5934\u3001SNI"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/akutz/memconn"},"akutz/memconn"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://akutz.wordpress.com/2018/04/20/memconn/"},"MemConn: an in-memory network stack for Go")),Object(i.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u6d4b\u8bd5\u6216\u865a\u62df\u5185\u90e8\u4ee3\u7406\u7f51\u7edc")))),Object(i.b)("h2",{id:"\u5176\u4ed6\u8bed\u8a00"},"\u5176\u4ed6\u8bed\u8a00"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/yrutschle/sslh"},"yrutschle/sslh")," - Applicative Protocol Multiplexer",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"C"),Object(i.b)("li",{parentName:"ul"},"HTTP, TLS/SSL (including SNI and ALPN), SSH, OpenVPN, tinc, XMPP, SOCKS5")))),Object(i.b)("h2",{id:"githubcomrancherremotedialer"},"github.com/rancher/remotedialer"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 websocket \u5efa\u7acb\u901a\u9053"),Object(i.b)("li",{parentName:"ul"},"tcp over websocket"),Object(i.b)("li",{parentName:"ul"},"\u5185\u90e8\u4f1a\u7ba1\u7406\u591a\u4e2a\u5ba2\u6237\u7aef"),Object(i.b)("li",{parentName:"ul"},"\u901a\u8fc7\u901a\u9053\u8fdb\u884c ",Object(i.b)("inlineCode",{parentName:"li"},"Dial")," - \b\u76f8\u5f53\u4e8e\u901a\u8fc7\u8fdc\u7a0b\u8fdb\u884c\u8c03\u7528")))}p.isMDXComponent=!0},879:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,O=u["".concat(l,".").concat(s)]||u[s]||m[s]||i;return r?a.a.createElement(O,c(c({ref:t},b),{},{components:r})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<i;b++)l[b]=r[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);