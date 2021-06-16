(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),u=s(r),o=a,O=u["".concat(l,".").concat(o)]||u[o]||m[o]||i;return r?n.a.createElement(O,c(c({ref:t},p),{},{components:r})):n.a.createElement(O,c({ref:t},p))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=o;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}o.displayName="MDXCreateElement"},262:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(8),i=(r(0),r(1083)),l={title:"Service Mesh"},c={unversionedId:"devops/service/servicemesh",id:"devops/service/servicemesh",isDocsHomePage:!1,title:"Service Mesh",description:"- Why",source:"@site/notes/devops/service/servicemesh.md",slug:"/devops/service/servicemesh",permalink:"/notes/devops/service/servicemesh",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/servicemesh.md",version:"current",sidebar:"docs",previous:{title:"Microservices",permalink:"/notes/devops/service/microservices"},next:{title:"Caddy",permalink:"/notes/devops/web/caddy"}},b=[{value:"Notes",id:"notes",children:[]},{value:"SMI",id:"smi",children:[]}],p={toc:b};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Why",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7edf\u4e00\u5904\u7406 \u6a2a\u5207\u5173\u6ce8\u70b9/",Object(i.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cross-cutting_concern"},"Cross-cutting_concern"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e AOP \u7684\u5207\u9762"),Object(i.b)("li",{parentName:"ul"},"Service Mesh \u5904\u7406\u6240\u6709\u670d\u52a1\u4e4b\u95f4\u7684\u5207\u9762"),Object(i.b)("li",{parentName:"ul"},"\u6d41\u91cf\u76d1\u63a7, HTTP \u5f02\u5e38\u76d1\u63a7"),Object(i.b)("li",{parentName:"ul"},"mTLS"))),Object(i.b)("li",{parentName:"ul"},"\u5feb\u901f\u8fed\u4ee3 - \u63a5\u53e3/\u670d\u52a1\u4f5c\u4e3a\u4ea7\u54c1\u5feb\u901f\u8fdb\u5165\u5e02\u573a"),Object(i.b)("li",{parentName:"ul"},"\u5904\u7406 ",Object(i.b)("strong",{parentName:"li"},"\u670d\u52a1\u4e4b\u95f4")," / ",Object(i.b)("strong",{parentName:"li"},"\u5916\u90e8")," \u901a\u4fe1"))),Object(i.b)("li",{parentName:"ul"},"Why not",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5e26\u6765\u989d\u5916\u7684\u5ef6\u8fdf"),Object(i.b)("li",{parentName:"ul"},"\u590d\u6742\u7684\u8fd0\u7ef4\u90e8\u7f72"),Object(i.b)("li",{parentName:"ul"},"sidecar \u8017\u8d39\u989d\u5916\u7684\u8d44\u6e90"))),Object(i.b)("li",{parentName:"ul"},"When",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u540c\u6b65\u901a\u4fe1\u573a\u666f"),Object(i.b)("li",{parentName:"ul"},"\u4ea7\u54c1\u662f API/\u670d\u52a1/\u63a5\u53e3"))),Object(i.b)("li",{parentName:"ul"},"\u529f\u80fd/\u76ee\u7684/CCC",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8def\u7531",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861"),Object(i.b)("li",{parentName:"ul"},"\u767e\u5206\u6bd4\u6d41\u91cf\u5207\u5206"),Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e \u5934/\u8def\u7531 \u6d41\u91cf\u5207\u5206"),Object(i.b)("li",{parentName:"ul"},"\u4ee3\u7406"))),Object(i.b)("li",{parentName:"ul"},"\u6d41\u91cf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bbf\u95ee\u63a7\u5236"),Object(i.b)("li",{parentName:"ul"},"\u6d41\u91cf\u5207\u5206"),Object(i.b)("li",{parentName:"ul"},"\u6d41\u91cf\u89c4\u683c\u5b9a\u4e49"),Object(i.b)("li",{parentName:"ul"},"\u6d41\u91cf\u6307\u6807"))),Object(i.b)("li",{parentName:"ul"},"\u76d1\u63a7",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u8bbf\u95ee\u65e5\u5fd7"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/#xref_monitoring_golden-signals"},"\u9ec4\u91d1\u6307\u6807"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5ef6\u8fdf\u3001\u6d41\u91cf\u3001\u9519\u8bef\u3001\u9971\u548c"))),Object(i.b)("li",{parentName:"ul"},"\u8def\u7531\u7ea7\u76d1\u63a7"),Object(i.b)("li",{parentName:"ul"},"\u8ddf\u8e2a",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Jaeger, Zipkin, OpenCensus, OpenTracing"))))),Object(i.b)("li",{parentName:"ul"},"\u5f39\u6027",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u7194\u65ad"),Object(i.b)("li",{parentName:"ul"},"\u91cd\u8bd5\u548c\u8d85\u65f6"),Object(i.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u8def\u5f84\u7684\u91cd\u8bd5\u548c\u8d85\u65f6"),Object(i.b)("li",{parentName:"ul"},"\u9519\u8bef\u6ce8\u5165"),Object(i.b)("li",{parentName:"ul"},"\u5ef6\u8fdf\u6ce8\u5165"))),Object(i.b)("li",{parentName:"ul"},"\u5b89\u5168",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"mTLS"),Object(i.b)("li",{parentName:"ul"},"CA \u8bc1\u4e66\u7ba1\u7406/\u96c6\u6210"),Object(i.b)("li",{parentName:"ul"},"\u9274\u6743\u89c4\u5219"))))),Object(i.b)("li",{parentName:"ul"},"\u7ec4\u6210\u90e8\u5206",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"control plane"),Object(i.b)("li",{parentName:"ul"},"data plane"),Object(i.b)("li",{parentName:"ul"},"proxy"))),Object(i.b)("li",{parentName:"ul"},"Traffic Shiffting",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Istio ",Object(i.b)("a",{parentName:"li",href:"https://istio.io/latest/docs/tasks/traffic-management/traffic-shifting/"},"Traffic Shifting")))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://servicemesh.es/"},"Service Mesh Comparison")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://flagger.app/"},"flagger")," - Progressive Delivery Operator for Kubernetes",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Canary - progressive traffic shifting"),Object(i.b)("li",{parentName:"ul"},"A/B Testing - HTTP headers and cookies traffic routing"),Object(i.b)("li",{parentName:"ul"},"Blue/Green - traffic switching and mirroring"))))),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f - \u76ee\u524d=2020",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"istio \u662f\u76ee\u524d\u529f\u80fd\u6700\u4e3a\u5b8c\u5584\u7684 service mesh\uff0c\u4f46\u4f53\u79ef\u548c\u8d44\u6e90\u5360\u7528\u4e5f\u662f\u76f8\u5f53\u53ef\u89c2"),Object(i.b)("li",{parentName:"ul"},"linkerd2 \u662f\u76ee\u524d\u6781\u4e3a\u8f7b\u91cf\uff0c\u4fb5\u5165\u6027\u6781\u5c0f\uff0c\u529f\u80fd\u6709\u9650\u4f46\u80fd\u4e0a\u751f\u4ea7\u7684\u7684 service mesh")))),Object(i.b)("h2",{id:"notes"},"Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u5fae\u670d\u52a1\u7684 observability, reliability, security"),Object(i.b)("li",{parentName:"ul"},"Service Mesh \u7684\u7ed3\u6784\u90fd\u662f CP+DP"),Object(i.b)("li",{parentName:"ul"},"DP \u4e3a\u5e94\u7528\u7684 Sidecar"),Object(i.b)("li",{parentName:"ul"},"Service Mesh \u5c31\u662f\u5c06\u5e94\u7528\u901a\u4fe1\u7f51\u7edc\u5c42\u7684\u57fa\u7840\u529f\u80fd\u62bd\u8c61\u4e3a DP",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u53d1\u73b0 - \u5982\u4f55\u8bf7\u6c42 \u670d\u52a1 A"),Object(i.b)("li",{parentName:"ul"},"\u65e5\u5fd7"),Object(i.b)("li",{parentName:"ul"},"\u8ddf\u8e2a"),Object(i.b)("li",{parentName:"ul"},"\u670d\u52a1\u6743\u9650"),Object(i.b)("li",{parentName:"ul"},"\u6307\u6807\u76d1\u63a7"),Object(i.b)("li",{parentName:"ul"},"\u4f8b\u5982 dubbo RPC \u4e2d\u5173\u4e8e\u5ba2\u6237\u7aef\u4e0e\u6ce8\u518c\u4e2d\u5fc3\u901a\u4fe1\u8fd9\u90e8\u5206\u529f\u80fd"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"\u91cd")," \u5ba2\u6237\u7aef\u5230 \u8f7b\u5ba2\u6237\u7aef\u7684\u8fc7\u7a0b"),Object(i.b)("li",{parentName:"ul"},"Service Mesh \u7684 Service \u662f\u5e94\u7528\u7eac\u5ea6\uff0c\u4e0d\u662f ",Object(i.b)("inlineCode",{parentName:"li"},"me.wener.test.PingService")," \u8fd9\u6837\u7684\u63a5\u53e3\u7eac\u5ea6"),Object(i.b)("li",{parentName:"ul"},"\u9762\u5411 Service \u66f4\u50cf\u662f\u9762\u5411 Dataplane"),Object(i.b)("li",{parentName:"ul"},"\u8981\u6c42\u5e73\u5766\u7684\u7f51\u7edc\u7ed3\u6784 - \u8282\u70b9\u4e92\u901a"),Object(i.b)("li",{parentName:"ul"},"Dataplane \u7c7b\u4f3c\u4e00\u4e2a\u8282\u70b9\u7684\u7f51\u5173\uff0c\u5904\u7406\u6240\u6709\u7684\u51fa\u5165\u6d41\u91cf")),Object(i.b)("h2",{id:"smi"},"SMI"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://smi-spec.io/"},"Service Mesh Interface")," / ",Object(i.b)("a",{parentName:"li",href:"https://github.com/servicemeshinterface/smi-spec"},"servicemeshinterface/smi-spec"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Traffic Access Control - \u8bbf\u95ee\u63a7\u5236"),Object(i.b)("li",{parentName:"ul"},"Traffic Metrics - \u6307\u6807"),Object(i.b)("li",{parentName:"ul"},"Traffic Specs"),Object(i.b)("li",{parentName:"ul"},"Traffic Split - \u6d41\u91cf\u5207\u5206")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"kind: TrafficSplit\nmetadata:\n  name: canary\nspec:\n  # The root service that clients use to connect to the destination application.\n  service: website\n  # Services inside the namespace with their own selectors, endpoints and configuration.\n  backends:\n    - service: website-v1\n      weight: 90\n    - service: website-v2\n      weight: 10\n")))}s.isMDXComponent=!0}}]);