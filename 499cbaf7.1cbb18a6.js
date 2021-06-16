(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{1083:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return a?n.a.createElement(d,o(o({ref:t},b),{},{components:a})):n.a.createElement(d,o({ref:t},b))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<l;b++)c[b]=a[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},355:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),l=(a(0),a(1083)),c={title:"ScyllaDB"},o={unversionedId:"db/column/scylladb",id:"db/column/scylladb",isDocsHomePage:!1,title:"ScyllaDB",description:"Tips",source:"@site/notes/db/column/scylladb.md",slug:"/db/column/scylladb",permalink:"/notes/db/column/scylladb",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/column/scylladb.md",version:"current",sidebar:"docs",previous:{title:"Apache Cassandra",permalink:"/notes/db/column/cassandra"},next:{title:"OLAP",permalink:"/notes/db/olap/olap"}},i=[{value:"Tips",id:"tips",children:[]}],b={toc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/scylladb/scylla"},"scylladb/scylla"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"AGPL, C++"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 C++ \u5b9e\u73b0\u7684 Cassandra"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u4f9d\u8d56 Zookeeper"),Object(l.b)("li",{parentName:"ul"},"\u8f7b\u91cf\u7ea7\u4e8b\u52a1 Lightweight Transactions / LWT"),Object(l.b)("li",{parentName:"ul"},"Amazon DynamoDB \u517c\u5bb9\u63a5\u53e3"),Object(l.b)("li",{parentName:"ul"},"\b\u652f\u6301 CDC/Change Data Capture"),Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e ",Object(l.b)("a",{parentName:"li",href:"https://github.com/scylladb/seastar"},"seastar")," \u6846\u67b6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.scylladb.com/using-scylla/cassandra-compatibility/"},"Apache Cassandra Compatibility"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Apache Cassandra 3.11"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.scylladb.com/getting-started/system-requirements"},"\u8981\u6c42"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6700\u5c0f 4\u6838, 2G, SSD"),Object(l.b)("li",{parentName:"ul"},"\u751f\u4ea7 20\u6838, 128G, RAID0 4 SSD 1-5TB"),Object(l.b)("li",{parentName:"ul"},"\u5206\u6790 28\u6838, 256G, NVMe 10TB"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://manager.docs.scylladb.com/stable/"},"Scylla Manager"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"scylladb \u7ba1\u7406\u5e73\u53f0"),Object(l.b)("li",{parentName:"ul"},"\u4f8b\u5982 \u5907\u4efd\u3001\u6062\u590d\u3001\u96c6\u7fa4\u72b6\u6001"),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u8d85\u8fc7 5 \u4e2a\u8282\u70b9\u514d\u8d39"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://monitoring.docs.scylladb.com/stable/"},"Scylla Monitor"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"scylladb \u76d1\u63a7\u5e73\u53f0"),Object(l.b)("li",{parentName:"ul"},"Prometheus + Grafana"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/scylladb/scylla-operator"},"scylladb/scylla-operator"))))}p.isMDXComponent=!0}}]);