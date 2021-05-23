(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var l=n(0),r=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=s(n),d=l,m=o["".concat(i,".").concat(d)]||o[d]||u[d]||a;return n?r.a.createElement(m,b(b({ref:t},p),{},{components:n})):r.a.createElement(m,b({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:l,i[1]=b;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},599:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var l=n(3),r=n(8),a=(n(0),n(1021)),i={id:"linkerd",title:"Linkerd"},b={unversionedId:"devops/service/linkerd",id:"devops/service/linkerd",isDocsHomePage:!1,title:"Linkerd",description:"Tips",source:"@site/notes/devops/service/linkerd.md",slug:"/devops/service/linkerd",permalink:"/notes/devops/service/linkerd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/linkerd.md",version:"current",sidebar:"docs",previous:{title:"Linkerd Version",permalink:"/notes/devops/service/linkerd-version"},next:{title:"Microservices",permalink:"/notes/devops/service/microservices"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"Helm \u5b89\u88c5",id:"helm-\u5b89\u88c5",children:[]}]},{value:"TLS \u8bc1\u4e66\u66f4\u65b0",id:"tls-\u8bc1\u4e66\u66f4\u65b0",children:[]},{value:"\u5b9e\u9a8c",id:"\u5b9e\u9a8c",children:[]},{value:"Service Profile",id:"service-profile",children:[]},{value:"ingress",id:"ingress",children:[]},{value:"tracing",id:"tracing",children:[]},{value:"\u4ee3\u7406\u914d\u7f6e",id:"\u4ee3\u7406\u914d\u7f6e",children:[]},{value:"addons",id:"addons",children:[]},{value:"linker1 \u914d\u7f6e",id:"linker1-\u914d\u7f6e",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"linkerd2-proxy",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u975e\u5e38\u8f7b\u91cf\u5feb\u901f"))),Object(a.b)("li",{parentName:"ul"},"top/tap/routes",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5df2\u7ecf\u5305\u542b\u4e86\u7528\u4e8e\u5feb\u901f\u8c03\u8bd5\u548c\u68c0\u67e5\u6d41\u91cf\u7684\u529f\u80fd"))),Object(a.b)("li",{parentName:"ul"},"prometheus/grafana - \u5185\u5efa\u96c6\u6210"),Object(a.b)("li",{parentName:"ul"},"mTLS"))),Object(a.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"linkerd2-proxy",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u9488\u5bf9\u6027\u5f00\u53d1 - \u529f\u80fd\u76f8\u5bf9\u7b80\u5355"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u652f\u6301\u7c7b\u4f3c envoy\u3001nginx \u4e4b\u7c7b\u7684\u534f\u8bae\u5c42\u57fa\u7840\u529f\u80fd"))),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Circuit Breaker"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Auth"),Object(a.b)("li",{parentName:"ul"},"CP \u4e0d\u80fd\u7ba1\u7406\u591a\u96c6\u7fa4"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Service-to-Service \u6388\u6743"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Header \u8def\u7531",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/issues/3165"},"#3165")))))),Object(a.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/issues/3403"},"linkerd/linkerd2#3403")," - Injected nginx ingress controller doesn't have access to the remote client IP"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/issues/2846"},"linkerd/linkerd2#2846")," - Circuit Breaker"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/issues/3165"},"linkerd/linkerd2#3165")," - Header based routing"))),Object(a.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"linkerd2 \u76f8\u5bf9\u8f83\u65b0\uff0c\u529f\u80fd\u4e0a\u53ef\u80fd\u8fd8\u6709\u7f3a\u5931"),Object(a.b)("li",{parentName:"ul"},"Prometheus \u53ef\u80fd\u4f1a\u5360\u7528\u8f83\u591a\u8d44\u6e90\uff0c\u53ef\u4ee5\u4f7f\u7528\u5916\u90e8\u5b9e\u4f8b - ",Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/issues/2980"},"#2980")),Object(a.b)("li",{parentName:"ul"},"ECDSA \u8bc1\u4e66\u9700\u8981 P256"),Object(a.b)("li",{parentName:"ul"},"egress \u652f\u6301\u4e0d\u592a\u597d - \u53ea\u652f\u6301 HTTP",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"TCP \u5916\u90e8\u6d41\u91cf\u65e0\u6cd5\u76d1\u63a7"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/issues/3190"},"#3190")," - Egress HTTPS Metrics"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/issues/2192"},"#2192")," - Monitoring outbound HTTPS external call"))),Object(a.b)("li",{parentName:"ul"},"TCP \u652f\u6301\u4e0d\u597d",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("del",{parentName:"li"},"\u4e0d\u652f\u6301 mTLS ",Object(a.b)("a",{parentName:"del",href:"https://github.com/linkerd/linkerd2/issues/3207"},"#3207"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("del",{parentName:"li"},"\u4e0d\u652f\u6301 LB \u548c\u8f6c\u53d1 ",Object(a.b)("a",{parentName:"del",href:"https://github.com/linkerd/linkerd2/issues/3445"},"#3445"))))),Object(a.b)("li",{parentName:"ul"},"\u6ce8\u610f Ingress \u8fdc\u7a0b IP \u95ee\u9898",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2/issues/3403"},"#3403")),Object(a.b)("li",{parentName:"ul"},"\u6dfb\u52a0 annotations - ",Object(a.b)("inlineCode",{parentName:"li"},"config.linkerd.io/skip-inbound-ports: '80,443'")))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://linkerd.io/2/reference/architecture/"},"\u67b6\u6784"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u7ec4\u4ef6",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"cp",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"sp-validator - Service Profile Validator",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"admission controller"),Object(a.b)("li",{parentName:"ul"},"\u5f53 service profile \u4fdd\u5b58\u7684\u65f6\u5019\u6821\u9a8c"))),Object(a.b)("li",{parentName:"ul"},"destination"),Object(a.b)("li",{parentName:"ul"},"identity - CA, \u63a5\u53d7\u4ee3\u7406\u7684 CSR \u8bf7\u6c42"),Object(a.b)("li",{parentName:"ul"},"heartbeat"),Object(a.b)("li",{parentName:"ul"},"web"),Object(a.b)("li",{parentName:"ul"},"tap",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u63a5\u53d7 cli \u548c dashboard \u8bf7\u6c42\u76d1\u542c\u4ee3\u7406\u7684\u6d41\u91cf"))),Object(a.b)("li",{parentName:"ul"},"proxy-injector",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"admission controller"),Object(a.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u6ce8\u5165\u903b\u8f91\uff0c\u4f7f\u7528 initContainer \u521d\u59cb\u5316 iptables"))),Object(a.b)("li",{parentName:"ul"},"grafana"),Object(a.b)("li",{parentName:"ul"},"prometheus"))),Object(a.b)("li",{parentName:"ul"},"dp",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"proxy - linkerd2-proxy"),Object(a.b)("li",{parentName:"ul"},"linkerd-init"))))))),Object(a.b)("li",{parentName:"ul"},"Control Plane",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2"},"linkerd/linkerd2")))),Object(a.b)("li",{parentName:"ul"},"Dataplane",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/linkerd/linkerd2-proxy"},"linkerd/linkerd2-proxy")),Object(a.b)("li",{parentName:"ul"},"\u65e0\u914d\u7f6e\u4ee3\u7406 - iptable \u8f6c\u53d1"),Object(a.b)("li",{parentName:"ul"},"/metrics"),Object(a.b)("li",{parentName:"ul"},"WebSocket \u4ee3\u7406"),Object(a.b)("li",{parentName:"ul"},"\u5ef6\u65f6\u611f\u77e5\u7684 L7 \u8d1f\u8f7d\u5747\u8861"),Object(a.b)("li",{parentName:"ul"},"L4 TCP \u8d1f\u8f7d\u5747\u8861"),Object(a.b)("li",{parentName:"ul"},"mtls"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"tap")," \u8bca\u65ad\u63a5\u53e3 - \u7c7b\u4f3c tcpdump \u6982\u5ff5"))),Object(a.b)("li",{parentName:"ul"},"\u7279\u6027",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"HTTP, HTTP/2, gRPC"),Object(a.b)("li",{parentName:"ul"},"TCP \u4ee3\u7406\u548c\u534f\u8bae\u68c0\u6d4b"),Object(a.b)("li",{parentName:"ul"},"\u8d85\u65f6\u3001\u91cd\u8bd5"),Object(a.b)("li",{parentName:"ul"},"mtls"),Object(a.b)("li",{parentName:"ul"},"\u4e0d\u63d0\u4f9b Ingress\uff0c\u4e0e\u73b0\u6709 Ingress \u5171\u5b58"),Object(a.b)("li",{parentName:"ul"},"\u6307\u6807\u76d1\u63a7",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4e3a\u6240\u6709\u6d41\u91cf\u8bb0\u5f55\u6838\u5fc3\u6307\u6807 - request volume, success rate, latency distributions"),Object(a.b)("li",{parentName:"ul"},"\u8bb0\u5f55 TCP \u6307\u6807"),Object(a.b)("li",{parentName:"ul"},"\u6839\u636e Service Profile \u8bb0\u5f55\u8bf7\u6c42\u3001\u88ab\u8bf7\u6c42\u6307\u6807"),Object(a.b)("li",{parentName:"ul"},"\u751f\u6210\u62d3\u6251\u56fe"),Object(a.b)("li",{parentName:"ul"},"\u8bf7\u6c42\u91c7\u6837"),Object(a.b)("li",{parentName:"ul"},"\u67e5\u770b",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"linkerd stat"),", ",Object(a.b)("inlineCode",{parentName:"li"},"linkerd routes")),Object(a.b)("li",{parentName:"ul"},"dashboard -> Grafana"),Object(a.b)("li",{parentName:"ul"},"\u5185\u5efa Prometheus \u5b9e\u4f8b",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4fdd\u7559 6 \u5c0f\u65f6"))))))),Object(a.b)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5747\u8861 - EWMA \u7b97\u6cd5 - exponentially weighted moving average"),Object(a.b)("li",{parentName:"ul"},"\u81ea\u52a8\u6ce8\u5165 - ",Object(a.b)("inlineCode",{parentName:"li"},"linkerd.io/inject: enabled"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"admission webhook \u5b9e\u73b0"),Object(a.b)("li",{parentName:"ul"},"linkerd-init \u914d\u7f6e iptables"),Object(a.b)("li",{parentName:"ul"},"linkerd-proxy - dp"),Object(a.b)("li",{parentName:"ul"},"\u6dfb\u52a0 annotation \u540e\u9700\u8981 ",Object(a.b)("inlineCode",{parentName:"li"},"kubectl rollout restart")),Object(a.b)("li",{parentName:"ul"},"\u4e3b\u52a8\u7981\u7528 ",Object(a.b)("inlineCode",{parentName:"li"},"linkerd.io/inject: disabled")))),Object(a.b)("li",{parentName:"ul"},"CNI \u63d2\u4ef6",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528\u4e86\u5219\u4e0d\u9700\u8981 linkerd-init \u914d\u7f6e iptables\uff0c\u4f1a\u81ea\u52a8\u91cd\u5199"))),Object(a.b)("li",{parentName:"ul"},"\u96c6\u6210 grafana"),Object(a.b)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u8ddf\u8e2a"),Object(a.b)("li",{parentName:"ul"},"Fault Injection"),Object(a.b)("li",{parentName:"ul"},"ha cp",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"linkerd install --ha --controller-replicas=2")))),Object(a.b)("li",{parentName:"ul"},"\u8de8\u96c6\u7fa4\u901a\u4fe1"),Object(a.b)("li",{parentName:"ul"},"Service Profile",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u989d\u5916\u63a5\u53e3\u4fe1\u606f"))),Object(a.b)("li",{parentName:"ul"},"\u6d41\u91cf\u5207\u5206"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"linkerd install"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b89\u88c5\u5230 linkerd \u7a7a\u95f4"),Object(a.b)("li",{parentName:"ul"},"ClusterRole - ",Object(a.b)("inlineCode",{parentName:"li"},"$NAMESPACE-linkerd-$COMPONENT"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"linkerd-linkerd-identity"),Object(a.b)("li",{parentName:"ul"},"linkerd-linkerd-controller"),Object(a.b)("li",{parentName:"ul"},"linkerd-linkerd-destination"),Object(a.b)("li",{parentName:"ul"},"linkerd-linkerd-prometheus"),Object(a.b)("li",{parentName:"ul"},"linkerd-linkerd-proxy-injector"),Object(a.b)("li",{parentName:"ul"},"linkerd-linkerd-sp-validator"),Object(a.b)("li",{parentName:"ul"},"linkerd-linkerd-tap"))),Object(a.b)("li",{parentName:"ul"},"linkerd-heartbeat"),Object(a.b)("li",{parentName:"ul"},"linkerd-web"),Object(a.b)("li",{parentName:"ul"},"crds",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"serviceprofiles.linkerd.io/v1alpha2"),Object(a.b)("li",{parentName:"ul"},"trafficsplits.split.smi-spec.io/v1alpha1"))),Object(a.b)("li",{parentName:"ul"},"secret/linkerd-proxy-injector-tls"),Object(a.b)("li",{parentName:"ul"},"secret/linkerd-sp-validator-tls"),Object(a.b)("li",{parentName:"ul"},"secret/linkerd-tap-tls"),Object(a.b)("li",{parentName:"ul"},"cm/linkerd-config"),Object(a.b)("li",{parentName:"ul"},"cm/linkerd-config-addons"),Object(a.b)("li",{parentName:"ul"},"deploy/linkerd-identity"),Object(a.b)("li",{parentName:"ul"},"deploy/linkerd-controller",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"svc/linkerd-controller-api"))),Object(a.b)("li",{parentName:"ul"},"deploy/linkerd-destination",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"svc/linkerd-dst"))),Object(a.b)("li",{parentName:"ul"},"cronjob/linkerd-heartbeat",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"linkerd telemetry"))),Object(a.b)("li",{parentName:"ul"},"deploy/linkerd-web",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"svc/linkerd-web"))),Object(a.b)("li",{parentName:"ul"},"deploy/linkerd-prometheus",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"svc/linkerd-prometheus"),Object(a.b)("li",{parentName:"ul"},"cm/linkerd-prometheus-config"))),Object(a.b)("li",{parentName:"ul"},"deploy/linkerd-proxy-injector",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"svc/linkerd-proxy-injector"))),Object(a.b)("li",{parentName:"ul"},"deploy/linkerd-sp-validator",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"svc/linkerd-sp-validator"))),Object(a.b)("li",{parentName:"ul"},"deploy/linkerd-tap",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"svc/linkerd-tap"))),Object(a.b)("li",{parentName:"ul"},"deploy/linkerd-grafana",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"svc/linkerd-grafana"),Object(a.b)("li",{parentName:"ul"},"cm/linkerd-grafana-config"))))),Object(a.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.infoq.com/articles/linkerd-v2-production-adoption/"},"Linkerd v2: How Lessons from Production Adoption Resulted in a Rewrite of the Service Mesh")))),Object(a.b)("li",{parentName:"ul"},"tls",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"secret/linkerd-identity-issuer",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5305\u542b\u4e86 issuer \u8bc1\u4e66"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c schema \u4e3a kubernetes.io/tls \u5219\u9700\u8981 tls.crt, tls.key, ca.crt"),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c schema \u4e3a linkerd.io/tls \u5219\u9700\u8981 crt.pem, key.pem"))),Object(a.b)("li",{parentName:"ul"},"secret/linkerd-trust-anchor")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"brew install linkerd\n\nlinkerd version\nlinkerd check --pre\n\nlinkerd install | kubectl apply -f -\n\nlinkerd check\n\nkubectl -n linkerd get deploy\n\nlinkerd dashboard\nlinkerd -n linkerd top deploy/linkerd-web\n\n# \u6ce8\u5165\nkubectl get -n emojivoto deploy -o yaml \\\n  | linkerd inject - \\\n  | kubectl apply -f -\n\n# \u5378\u8f7d\nlinkerd install --ignore-cluster | kubectl delete -f -\n\n\n# \u6ce8\u5165\u7a7a\u95f4\nkubectl get ns monitoring -o yaml | linkerd inject - | kubectl apply -f -\n# \u91cd\u542f\u540e\u5168\u90e8\u751f\u6548\nkubectl rollout restart -n monitoring deployment\nkubectl rollout restart -n monitoring daemonset\nkubectl rollout restart -n monitoring statefulset\n\nkubectl get ns kubernetes-dashboard -o yaml | linkerd inject - | kubectl apply -f -\nkubectl rollout restart -n kubernetes-dashboard deployment\n")),Object(a.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# https://linkerd.io/2/reference/cli/install/\n# --addon-config - \u81ea\u5b9a\u4e49\u914d\u7f6e\n# --controller-replicas=1\n# --disable-heartbeat\n# --registry=gcr.io/linkerd-io \u9ed8\u8ba4\u955c\u50cf\u4ed3\u5e93\n# cmi - https://github.com/wenerme/container-mirror\nlinkerd install --disable-heartbeat --registry registry.cn-hongkong.aliyuncs.com/cmi\n\n# \u6240\u6709\u7684\u955c\u50cf\nlinkerd install | grep 'image: ' | sed -r 's/\\s*image:\\s*(.*)/\\1/' | sort -u\n\nlinkerd install | grep 'image: ' | sed -r 's/\\s*image:\\s*(.*)/\\1/' | sort -u | xargs -n 1 -I {} echo A {} B\n")),Object(a.b)("h3",{id:"helm-\u5b89\u88c5"},"Helm \u5b89\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'# \u751f\u6210\u8bc1\u4e66\nbrew install step\n\nstep certificate create identity.linkerd.cluster.local ca.crt ca.key --profile root-ca --no-password --insecure\n\nstep certificate create identity.linkerd.cluster.local issuer.crt issuer.key --ca ca.crt --ca-key ca.key --profile intermediate-ca --not-after 8760h --no-password --insecure\n\n# Helm \u5b89\u88c5\n# https://linkerd.io/2/tasks/install-helm/\n# helm repo add linkerd-edge https://helm.linkerd.io/edge\nhelm repo add linkerd https://helm.linkerd.io/stable\n\n# set expiry date one year from now\n# in Mac:\n# exp=$(date -v+8760H +"%Y-%m-%dT%H:%M:%SZ")\n# in Linux:\n# exp=$(date -d \'+8760 hour\' +"%Y-%m-%dT%H:%M:%SZ")\n\n# \u5982\u679c\u6709 CNI --set global.cniEnabled=true\n# \u9ed8\u8ba4\u5b89\u88c5\u5230 linkerd \u7a7a\u95f4\n# \u81ea\u5df1\u63d0\u4f9b prometheus\n# https://linkerd.io/2/tasks/external-prometheus/\n# --set global.prometheusUrl: existing-prometheus.xyz:9090\nhelm install linkerd2 \\\n  --set-file global.identityTrustAnchorsPEM=ca.crt \\\n  --set-file identity.issuer.tls.crtPEM=issuer.crt \\\n  --set-file identity.issuer.tls.keyPEM=issuer.key \\\n  --set identity.issuer.crtExpiry=$(date -d \'+8760 hour\' +"%Y-%m-%dT%H:%M:%SZ") \\\n  --set installNamespace=false \\\n  --create-namespace \\\n  linkerd/linkerd2\n')),Object(a.b)("h2",{id:"tls-\u8bc1\u4e66\u66f4\u65b0"},"TLS \u8bc1\u4e66\u66f4\u65b0"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://linkerd.io/2/tasks/automatically-rotating-control-plane-tls-credentials/"},"https://linkerd.io/2/tasks/automatically-rotating-control-plane-tls-credentials/"))),Object(a.b)("h2",{id:"\u5b9e\u9a8c"},"\u5b9e\u9a8c"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"cat <<YAML | kubectl apply -f -\napiVersion: v1\nkind: Pod\nmetadata:\n  name: alpine\n  namespace: default\n  annotations:\n    linkerd.io/inject: enabled\nspec:\n  containers:\n  - name: alpine\n    image: wener/base\n    command:\n    - tail\n    args:\n    - -f\n    - /dev/null\nYAML\n")),Object(a.b)("h2",{id:"service-profile"},"Service Profile"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://linkerd.io/2/reference/service-profiles/"},"https://linkerd.io/2/reference/service-profiles/"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# linkerd \u5185\u90e8\u7684 sp \u5b9a\u4e49\nlinkerd install-sp\n\n# \u6709 sp \u4fe1\u606f\u7684\u4f1a\u9644\u52a0 rt_route \u5230\u6307\u6807\nlinkerd tap -o wide <target> | grep req | grep -v rt_route\n\n\n# \u68c0\u6d4b\u6d41\u91cf\u751f\u6210 profile\nlinkerd profile -n emojivoto web-svc --tap deploy/web --tap-duration 10s\n# \u901a\u8fc7 pb \u751f\u6210\nlinkerd profile --proto web.proto web-svc\n# \u901a\u8fc7 swagger \u751f\u6210\nlinkerd profile --open-api webapp.swagger webapp\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: linkerd.io/v1alpha2\nkind: ServiceProfile\nmetadata:\n  name: nginx-demo.default.svc.cluster.local\n  namespace: default\nspec:\n  routes:\n  - name: me.wener.apis.test.PingService#ping\n    condition:\n      method: POST\n      pathRegex: /api/service/me.wener.apis.test.PingService/ping\n    isRetryable: true\n    timeout: 3s\n    responseClasses:\n    - condition:\n        not:\n          status:\n            min: 200\n            max: 399\n      isFailure: true\n  - name: me.wener.apis.test.PingService\n    condition:\n      method: POST\n      pathRegex: /api/service/me.wener.apis.test.PingService/.*\n    isRetryable: false\n  retryBudget:\n    # \u6700\u591a\u6709 20% \u88ab\u91cd\u8bd5\n    retryRatio: 0.2\n    # \u5141\u8bb8\u7684\u6bcf\u79d2\u91cd\u8bd5\u6b21\u6570\n    minRetriesPerSecond: 10\n    # \u8ba1\u7b97 retryRatio \u7684\u65f6\u95f4\u7a97\u53e3\n    ttl: 10s\n")),Object(a.b)("h2",{id:"ingress"},"ingress"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4f1a\u5bfc\u81f4 nginx \u7684\u7c98\u6027\u4f1a\u8bdd\u65e0\u6548")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'# nginx annotation\nnginx.ingress.kubernetes.io/configuration-snippet: |\n  proxy_set_header l5d-dst-override $service_name.$namespace.svc.cluster.local:$service_port;\n  grpc_set_header l5d-dst-override $service_name.$namespace.svc.cluster.local:$service_port;\n\n# with auth url\nnginx.ingress.kubernetes.io/auth-url: "https://$host/oauth2/auth"\nnginx.ingress.kubernetes.io/auth-signin: "https://$host/oauth2/start?rd=$escaped_request_uri"\nnginx.ingress.kubernetes.io/auth-snippet: |\n  proxy_set_header l5d-dst-override $service_name.$namespace.svc.cluster.local:$service_port;\n  grpc_set_header l5d-dst-override $service_name.$namespace.svc.cluster.local:$service_port;\n')),Object(a.b)("h2",{id:"tracing"},"tracing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://linkerd.io/2/tasks/distributed-tracing/"},"Distributed tracing with Linkerd")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://linkerd.io/2019/08/09/service-mesh-distributed-tracing-myths/"},"Distributed tracing in the service mesh: four myths"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u5e76\u4e0d\u9700\u8981\u8ddf\u8e2a \u68c0\u6d4b \u76d1\u63a7\u3001\u5ef6\u65f6\u3001\u541e\u5410"),Object(a.b)("li",{parentName:"ul"},"\u5e76\u4e0d\u9700\u8981\u8ddf\u8e2a \u624d\u77e5\u9053\u670d\u52a1\u4e4b\u95f4\u7684\u8c03\u7528\u4f9d\u8d56\u5173\u7cfb"),Object(a.b)("li",{parentName:"ul"},"\u60f3\u8981\u77e5\u9053\u65f6\u95f4\u7247\u6bb5\u91cc\u7684\u8c03\u7528\u5173\u7cfb\u5fc5\u987b\u8981\u4fee\u6539\u4ee3\u7801"))),Object(a.b)("li",{parentName:"ul"},"linkerd \u6709\u7c7b\u4f3c tracing \u7684\u529f\u80fd",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"tap"),Object(a.b)("li",{parentName:"ul"},"top"),Object(a.b)("li",{parentName:"ul"},"service profile"),Object(a.b)("li",{parentName:"ul"},"\u670d\u52a1\u62d3\u6251"))),Object(a.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Linkerd \u4f7f\u7528 ",Object(a.b)("a",{parentName:"li",href:"https://github.com/openzipkin/b3-propagation"},"openzipkin/b3-propagation")," \u683c\u5f0f"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"OpenCensus")," \u652f\u6301\u73af\u5883\u53d8\u91cf ",Object(a.b)("inlineCode",{parentName:"li"},"OC_AGENT_HOST=linkerd-collector.linkerd:55678")),Object(a.b)("li",{parentName:"ul"},"\u5982\u679c\u8981\u4f7f\u7528 Tracing \u5219\u4e00\u5b9a\u8981\u5bf9 Ingress \u4e5f\u5f00\u542f\uff0c\u56e0\u4e3a Ingress \u4f1a\u521b\u5efa\u6700\u5f00\u59cb\u7684 Span")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"cat << EOF >> config.yaml\ntracing:\n  enabled: true\nEOF\n# \u90e8\u7f72\n# linker-collector\n# linkerd-jaeger\nlinkerd upgrade --addon-config config.yaml | kubectl apply -f -\n\nkubectl -n linkerd rollout status deploy/linkerd-collector\nkubectl -n linkerd rollout status deploy/linkerd-jaeger\n\n# POD Annotation\n# config.linkerd.io/trace-collector: linkerd-collector.linkerd:55678\n# config.alpha.linkerd.io/trace-collector-service-account: linkerd-collector\n\n# \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u652f\u6301\nkubectl -n emojivoto set env --all deploy OC_AGENT_HOST=linkerd-collector.linkerd:55678\n\nkubectl -n linkerd port-forward svc/linkerd-jaeger 16686\n")),Object(a.b)("h2",{id:"\u4ee3\u7406\u914d\u7f6e"},"\u4ee3\u7406\u914d\u7f6e"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://linkerd.io/2/reference/proxy-configuration/"},"Proxy Configuration"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  template:\n    metadata:\n      annotations:\n        config.linkerd.io/proxy-cpu-limit: "1.5"\n        config.linkerd.io/proxy-cpu-request: "0.2"\n        config.linkerd.io/proxy-memory-limit: 2Gi\n        config.linkerd.io/proxy-memory-request: 128Mi\n')),Object(a.b)("h2",{id:"addons"},"addons"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://linkerd.io/2/tasks/enabling-addons/"},"Enabling Add-Ons"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"tracing:\n  enabled: true\n  collector:\n    resources:\n      cpu:\n        limit: 100m\n        request: 10m\n      memory:\n        limit: 100Mi\n        request: 50Mi\n")),Object(a.b)("h2",{id:"linker1-\u914d\u7f6e"},"linker1 \u914d\u7f6e"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"dtabs - delegate tables \u2014 a backtracking, hierarchical, suffix-preserving routing language used by Finagle"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://api.linkerd.io/head/linkerd/index.html"},"https://api.linkerd.io/head/linkerd/index.html"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'# \u540d\u5b57 -> \u5730\u5740\nnamers:\n# Consul \u670d\u52a1\u53d1\u73b0\n# /svc => /#/io.l5d.consul/dc1/prod;\n- kind: io.l5d.consul\n  # \u76f4\u63a5\u8bbf\u95ee\u670d\u52a1 - \u5982\u679c\u8bbf\u95ee agent \u5219\u662f $HOST_IP:8500\n  host: consul-server.consul\n  port: 8500\n  # token:\n  includeTag: true\n  useHealthCheck: false\n  healthStatuses:\n    - "passing"\n    - "warning"\n  setHost: true\n  consistencyMode: stale\n  # \u901a\u8fc7 tag \u5173\u8054\u6743\u91cd\n  weights:\n   - tag: experimental\n     weight: 0.1\n   - tag: primary\n     weight: 5.0\n\n# \u91cd\u5199\n# /svc => /#/rewrite\n- kind: io.l5d.rewrite\n  prefix: /rewrite\n  pattern: "/{service}/api"\n  name: "/srv/{service}"\n')))}s.isMDXComponent=!0}}]);