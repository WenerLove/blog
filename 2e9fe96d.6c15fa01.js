(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(2),a=r(7),o=(r(0),r(586)),i={id:"promql",title:"PromQL"},c={unversionedId:"devops/metrics/promql",id:"devops/metrics/promql",isDocsHomePage:!1,title:"PromQL",description:"PromQL",source:"@site/notes/devops/metrics/promql.md",slug:"/devops/metrics/promql",permalink:"/notes/devops/metrics/promql",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/metrics/promql.md",version:"current",sidebar:"docs",previous:{title:"Prometheus",permalink:"/notes/devops/metrics/prometheus"},next:{title:"Prometheus Exporter",permalink:"/notes/devops/metrics/prometheus-exporter"}},s=[{value:"irate vs rate",id:"irate-vs-rate",children:[]}],u={rightToc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"promql"},"PromQL"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"}),"PromQL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://prometheus.io/docs/prometheus/latest/querying/examples/"}),"QUERY EXAMPLES")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/@valyala/9ab455142085"}),"PromQL tutorial for beginners and humans")),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 PromQL \u7684\u5e94\u7528",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/VictoriaMetrics/VictoriaMetrics"}),"VictoriaMetrics"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"long-term remote storage for Prometheus"))))),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.robustperception.io/rate-then-sum-never-sum-then-rate"}),"Rate then sum, never sum then rate"))))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-promql"}),'# \u6307\u6807\nnode_cpu_seconds_total\n# \u6807\u7b7e\u8fc7\u6ee4\uff0c\u652f\u6301\u64cd\u4f5c\u7b26\u53f7 = != \u5339\u914d =~ \u4e0d\u5339\u914d !~\nnode_cpu_seconds_total{mode="user"}\n# 5 \u5206\u949f\u5747\u503c\nrate(node_cpu_seconds_total{mode="user"}[5m])\n# \u805a\u5408\u7ed3\u679c\nsum(rate(node_cpu_seconds_total{mode="user"}[5m]))\n# \u6309\u7167 mode \u5206\u7ec4\nsum(rate(node_cpu_seconds_total[5m])) by (mode)\n# \u4e0d\u770b idle \u548c nice\nsum(rate(node_cpu_seconds_total{mode!~"idle|nice"}[5m])) by (mode)\n# \u53ea\u770b user \u548c system\nsum(rate(node_cpu_seconds_total{mode=~"user|system"}[5m])) by (mode)\n# \u5206\u522b\u8fd4\u56de\n# by (mode) \u662f\u5fc5\u987b\u7684\uff0c\u5982\u679c\u4e22\u5931\u4e86 label\uff0c\u5219\u4f1a\u8ba4\u4e3a\u662f\u540c\u6837\u7684\u6307\u6807\uff0c\u4f1a\u88ab\u4e22\u5f03\nsum(rate(node_cpu_seconds_total{mode="user"}[5m])) by (mode) or sum(rate(node_cpu_seconds_total{mode="system"}[5m])) by (mode)\n# \u7ed3\u679c\u52a0\u4e0a\u53e6\u5916\u4e00\u4e2a\u6307\u6807\nsum(rate(node_cpu_seconds_total{mode=~"user|system"}[5m])) by (mode) or node_load15\n\n# unifiVapNumStations \u7ed3\u679c join unifiVapEssId label\nsum(unifiVapNumStations * on(unifiVapIndex,instance) group_left(unifiVapEssId) unifiVapEssId{}) by (unifiVapEssId)\n\n# \u66ff\u6362\u6807\u7b7e\n# grafana \u91cc\u80fd\u8ba9\u4e00\u5217\u51fa\u73b0\u4e24\u6b21\n# \u4f46 grafana \u4e0d\u80fd\u5168\u6587\u5339\u914d https://github.com/grafana/grafana/issues/11418\nlabel_replace(unifiIfMac, "unifiLabel", "$0", "unifiIfMac", ".+")\n')),Object(o.b)("h1",{id:"faq"},"FAQ"),Object(o.b)("h2",{id:"irate-vs-rate"},"irate vs rate"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53ea\u7528\u4e8e counter - \u589e\u957f\u503c"),Object(o.b)("li",{parentName:"ul"},"\u5c3d\u91cf\u4f7f\u7528 rate - irate \u4e0d\u6bd4 rate \u5feb\uff0c\u65e0\u6cd5\u6355\u83b7\u5cf0\u503c"),Object(o.b)("li",{parentName:"ul"},"irate",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u53ea\u4f7f\u7528\u8303\u56f4\u5185\u6700\u8fd1\u4e24\u4e2a\u65f6\u95f4\u70b9\u6570\u636e"))),Object(o.b)("li",{parentName:"ul"},"rate",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u6240\u6709\u95f4\u9694\u8fdb\u884c\u6c42\u5e73\u5747\u6bcf\u79d2"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/@valyala/why-irate-from-prometheus-doesnt-capture-spikes-45f9896d7832"}),"Why irate from Prometheus doesn't capture spikes"))))}m.isMDXComponent=!0},586:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),m=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=m(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=m(r),b=n,d=l["".concat(i,".").concat(b)]||l[b]||p[b]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);