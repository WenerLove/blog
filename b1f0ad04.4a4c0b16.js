(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{422:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(7),a=(r(0),r(586)),s={id:"statsd_exporter",title:"statsd_exporter"},p={unversionedId:"devops/metrics/statsd_exporter",id:"devops/metrics/statsd_exporter",isDocsHomePage:!1,title:"statsd_exporter",description:"statsd_exporter",source:"@site/notes/devops/metrics/statsd_exporter.md",slug:"/devops/metrics/statsd_exporter",permalink:"/notes/devops/metrics/statsd_exporter",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/metrics/statsd_exporter.md",version:"current",sidebar:"docs",previous:{title:"Prometheus Exporter",permalink:"/notes/devops/metrics/prometheus-exporter"},next:{title:"Prometheus K8S",permalink:"/notes/devops/metrics/prometheus-k8s"}},i=[{value:"Tips",id:"tips",children:[]}],c={rightToc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"statsd_exporter"},"statsd_exporter"),Object(a.b)("h2",{id:"tips"},"Tips"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/prometheus/statsd_exporter"}),"prometheus/statsd_exporter")),Object(a.b)("li",{parentName:"ul"},"statsd \u9ed8\u8ba4\u7aef\u53e3 8125/udp"),Object(a.b)("li",{parentName:"ul"},"statsd_exporter \u7aef\u53e3 9102")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  --name statsd-exporter prom/statsd-exporter\n\ndocker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  -v $PWD/statsd_mapping.yml:/tmp/statsd_mapping.yml \\\n  --name statsd-exporter prom/statsd-exporter --statsd.mapping-config=/tmp/statsd_mapping.yml\n")))}u.isMDXComponent=!0},586:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),l=n,b=d["".concat(s,".").concat(l)]||d[l]||m[l]||a;return r?o.a.createElement(b,p(p({ref:t},c),{},{components:r})):o.a.createElement(b,p({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=l;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var c=2;c<a;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);