(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{586:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(7),o=(n(0),n(586)),i={id:"local-path-provisioner",title:"Local Path Provisioner"},c={unversionedId:"devops/kubernetes/storage/local-path-provisioner",id:"devops/kubernetes/storage/local-path-provisioner",isDocsHomePage:!1,title:"Local Path Provisioner",description:"Local Path",source:"@site/notes/devops/kubernetes/storage/local-path-provisioner.md",slug:"/devops/kubernetes/storage/local-path-provisioner",permalink:"/notes/devops/kubernetes/storage/local-path-provisioner",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/local-path-provisioner.md",version:"current"},p=[{value:"Tips",id:"tips",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"local-path"},"Local Path"),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/rancher/local-path-provisioner"}),"rancher/local-path-provisioner")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"storageClassName: local-path")),Object(o.b)("li",{parentName:"ul"},"\u81ea\u52a8\u521b\u5efa\u76ee\u5f55 - /var/lib/rancher/k3s/storage",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pvc-<UUID>")))),Object(o.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5f02\u5e38\u540e PVC \u4e22\u5931\uff0cStatefulSet \u65e0\u6cd5\u542f\u52a8",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"\u5220\u9664 Pod \u4ece\u65b0\u90e8\u7f72\u53ef\u6062\u590d")))))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"k3s \u9ed8\u8ba4\u914d\u7f6e")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "nodePathMap":[\n    {\n      "node":"DEFAULT_PATH_FOR_NON_LISTED_NODES",\n      "paths":["/var/lib/rancher/k3s/storage"]\n    }\n  ]\n}\n')),Object(o.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'kind: ConfigMap\napiVersion: v1\nmetadata:\n  name: local-path-config\n  namespace: local-path-storage\ndata:\n  # paths \u8bbe\u7f6e\u4e3a\u7a7a\u6570\u7ec4\u5219\u4f1a\u62d2\u7edd\n  # paths \u8bbe\u7f6e\u591a\u4e2a\u4f1a\u968f\u673a\u9009\u62e9\n  config.json: |-\n    {\n      "nodePathMap":[\n        {\n          "node":"DEFAULT_PATH_FOR_NON_LISTED_NODES",\n          "paths":["/opt/local-path-provisioner"]\n        },\n        {\n          "node":"yasker-lp-dev1",\n          "paths":["/opt/local-path-provisioner", "/data1"]\n        },\n        {\n          "node":"yasker-lp-dev3",\n          "paths":[]\n        }\n      ]\n    }\n  setup: |-\n    #!/bin/sh\n    path=$1\n    mkdir -m 0777 -p ${path}\n  teardown: |-\n    #!/bin/sh\n    path=$1\n    rm -rf ${path}\n')))}s.isMDXComponent=!0}}]);