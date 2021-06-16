(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1083:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=r.a.createContext({}),o=function(t){var e=r.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=o(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,b=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=o(n),d=a,O=u["".concat(b,".").concat(d)]||u[d]||m[d]||l;return n?r.a.createElement(O,i(i({ref:e},p),{},{components:n})):r.a.createElement(O,i({ref:e},p))}));function O(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,b=new Array(l);b[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,b[1]=i;for(var p=2;p<l;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},207:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return b})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(1083)),b={id:"network",title:"Linux \u7f51\u7edc"},i={unversionedId:"os/linux/network/network",id:"os/linux/network/network",isDocsHomePage:!1,title:"Linux \u7f51\u7edc",description:"- \u53c2\u8003",source:"@site/notes/os/linux/network/README.md",slug:"/os/linux/network/network",permalink:"/notes/os/linux/network/network",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/network/README.md",version:"current",sidebar:"docs",previous:{title:"UEFI",permalink:"/notes/os/linux/boot/uefi"},next:{title:"\u6865\u63a5\u7f51\u7edc",permalink:"/notes/os/linux/network/bridge"}},c=[],p={toc:c};function o(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man8/ip-link.8.html"},"ip-link.8"))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"type"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bridge"),Object(l.b)("td",{parentName:"tr",align:null},"\u6865\u63a5")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bond"),Object(l.b)("td",{parentName:"tr",align:null},"Bonding, \u805a\u5408")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"dummy"),Object(l.b)("td",{parentName:"tr",align:null},"Dummy")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hsr"),Object(l.b)("td",{parentName:"tr",align:null},"High-availability Seamless Redundancy device")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ifb"),Object(l.b)("td",{parentName:"tr",align:null},"Intermediate Functional Block device")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ipoib"),Object(l.b)("td",{parentName:"tr",align:null},"IP over Infiniband device")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"macvlan"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual interface base on link layer address (MAC)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"macvtap"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual interface based on link layer address (MAC) and TAP.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vcan"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual Controller Area Network interface")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vxcan"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual Controller Area Network tunnel interface")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"veth"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual ethernet interface")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vlan"),Object(l.b)("td",{parentName:"tr",align:null},"802.1q tagged virtual LAN interface")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vxlan"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual eXtended LAN")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ip6tnl"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual tunnel interface IPv4-IPv6 over IPv6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ipip"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual tunnel interface IPv4 over IPv4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sit"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual tunnel interface IPv6 over IPv4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"gre"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual tunnel interface GRE over IPv4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"gretap"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual L2 tunnel interface GRE over IPv4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"erspan"),Object(l.b)("td",{parentName:"tr",align:null},"Encapsulated Remote SPAN over GRE and")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ip6gre"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual tunnel interface GRE over IPv6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ip6gretap"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual L2 tunnel interface GRE over IPv6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ip6erspan"),Object(l.b)("td",{parentName:"tr",align:null},"Encapsulated Remote SPAN over GRE and IPv6")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vti"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual tunnel interface")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nlmon"),Object(l.b)("td",{parentName:"tr",align:null},"Netlink monitoring device")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ipvlan"),Object(l.b)("td",{parentName:"tr",align:null},"Interface for L3 (IPv6/IPv4) based VLANs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ipvtap"),Object(l.b)("td",{parentName:"tr",align:null},"Interface for L3 (IPv6/IPv4) based VLANs and TAP")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"lowpan"),Object(l.b)("td",{parentName:"tr",align:null},"Interface for 6LoWPAN (IPv6) over IEEE 802.15.4 / Bluetooth")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"geneve"),Object(l.b)("td",{parentName:"tr",align:null},"GEneric NEtwork Virtualization Encapsulation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bareudp"),Object(l.b)("td",{parentName:"tr",align:null},"Bare UDP L3 encapsulation support")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"macsec"),Object(l.b)("td",{parentName:"tr",align:null},"Interface for IEEE 802.1AE MAC Security (MACsec)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"vrf"),Object(l.b)("td",{parentName:"tr",align:null},"Interface for L3 VRF domains")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"netdevsim"),Object(l.b)("td",{parentName:"tr",align:null},"Interface for netdev API tests")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"rmnet"),Object(l.b)("td",{parentName:"tr",align:null},"Qualcomm rmnet device")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"xfrm"),Object(l.b)("td",{parentName:"tr",align:null},"Virtual xfrm interface")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"vlan",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"vlan"),Object(l.b)("li",{parentName:"ul"},"macvlan"),Object(l.b)("li",{parentName:"ul"},"macvtap"),Object(l.b)("li",{parentName:"ul"},"ipvlan"),Object(l.b)("li",{parentName:"ul"},"ipvtap")))))}o.isMDXComponent=!0}}]);