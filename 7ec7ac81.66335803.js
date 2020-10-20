(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{314:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(7),b=(r(0),r(594)),l={id:"harbor",title:"Harbor"},c={unversionedId:"devops/kubernetes/app/harbor",id:"devops/kubernetes/app/harbor",isDocsHomePage:!1,title:"Harbor",description:"Habor",source:"@site/notes/devops/kubernetes/app/harbor.md",slug:"/devops/kubernetes/app/harbor",permalink:"/notes/devops/kubernetes/app/harbor",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/harbor.md",version:"current",sidebar:"docs",previous:{title:"Consol",permalink:"/notes/devops/kubernetes/app/k8s-consul"},next:{title:"Darwin",permalink:"/notes/os/darwin/darwin"}},i=[{value:"Tips",id:"tips",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]}],o={rightToc:i};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"habor"},"Habor"),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/goharbor/harbor-helm"}),"goharbor/harbor-helm")," - trusted cloud native repository for Kubernetes"),Object(b.b)("li",{parentName:"ul"},"\u5c5e\u4e8e CI \u548c CD \u4e4b\u95f4\uff0cNexus \u504f\u5411\u5f00\u53d1\uff0cHarbor \u504f\u5411\u751f\u4ea7\u90e8\u7f72\u4ea4\u4ed8"),Object(b.b)("li",{parentName:"ul"},"\u7279\u6027",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"trivy \u5b89\u5168\u5206\u6790"),Object(b.b)("li",{parentName:"ul"},"\u8d26\u53f7\u7ba1\u7406\u3001\u591a\u79df\u6237\u3001RBAC"),Object(b.b)("li",{parentName:"ul"},"\u955c\u50cf\u526f\u672c\u3001Harbor \u4e4b\u95f4\u526f\u672c\u590d\u5236"),Object(b.b)("li",{parentName:"ul"},"WebUI"))),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u90e8\u7f72 ingress"),Object(b.b)("li",{parentName:"ul"},"\u8981\u6307\u5b9a externalURL \u786e\u4fdd\u751f\u6210\u5730\u5740\u6b63\u786e"),Object(b.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5173\u95ed\u5185\u90e8 TLS - internalTLS"),Object(b.b)("li",{parentName:"ul"},"\u5b58\u50a8",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"registry - 5Gi"),Object(b.b)("li",{parentName:"ul"},"chartmuseum - 5Gi"),Object(b.b)("li",{parentName:"ul"},"jobservice - 1Gi"),Object(b.b)("li",{parentName:"ul"},"database - 1Gi - \u53ef\u7528\u5916\u90e8",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u5185\u90e8\u6570\u636e\u5e93\u8bb0\u5f97\u4fee\u6539\u8d26\u53f7\u5bc6\u7801"))),Object(b.b)("li",{parentName:"ul"},"redis - 1Gi - \u53ef\u7528\u5916\u90e8"),Object(b.b)("li",{parentName:"ul"},"trivy - 2Gi"),Object(b.b)("li",{parentName:"ul"},"imageChartStorage",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u652f\u6301 azure,gcs,s3,swift,oss"))))))),Object(b.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"443"),Object(b.b)("li",{parentName:"ul"},"80"),Object(b.b)("li",{parentName:"ul"},"4443",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Notary - Docker Content Trust")))))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Resource"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Minimum"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Recommended"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"CPU"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"2 CPU"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4 CPU")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mem"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"4 GB"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"8 GB")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Disk"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"40 GB"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"160 GB")))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"helm repo add harbor https://helm.goharbor.io\n")),Object(b.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"docker \u5b89\u88c5\u8fc7\u7a0b\u4f1a\u4f7f\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"goharbor/prepare")," \u8fdb\u884c\u6784\u5efa\u9700\u8981\u7684 docker compose")),Object(b.b)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/"}),"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/"))))}p.isMDXComponent=!0},594:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(r),O=a,s=u["".concat(l,".").concat(O)]||u[O]||m[O]||b;return r?n.a.createElement(s,c(c({ref:t},o),{},{components:r})):n.a.createElement(s,c({ref:t},o))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,l=new Array(b);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<b;o++)l[o]=r[o];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);