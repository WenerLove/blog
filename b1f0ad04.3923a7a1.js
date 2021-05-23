(window.webpackJsonp=window.webpackJsonp||[]).push([[668],{1021:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return r?a.a.createElement(b,c(c({ref:t},i),{},{components:r})):a.a.createElement(b,c({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<s;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},741:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(8),s=(r(0),r(1021)),o={title:"statsd_exporter"},c={unversionedId:"devops/metrics/statsd_exporter",id:"devops/metrics/statsd_exporter",isDocsHomePage:!1,title:"statsd_exporter",description:"Tips",source:"@site/notes/devops/metrics/statsd_exporter.md",slug:"/devops/metrics/statsd_exporter",permalink:"/notes/devops/metrics/statsd_exporter",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/metrics/statsd_exporter.md",version:"current",sidebar:"docs",previous:{title:"PromQL",permalink:"/notes/devops/metrics/promql"},next:{title:"Thanos \u7248\u672c",permalink:"/notes/devops/metrics/thanos-version"}},p=[{value:"Tips",id:"tips",children:[]},{value:"asterisk",id:"asterisk",children:[]}],i={toc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"tips"},"Tips"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/prometheus/statsd_exporter"},"prometheus/statsd_exporter")),Object(s.b)("li",{parentName:"ul"},"statsd \u9ed8\u8ba4\u7aef\u53e3 8125/udp"),Object(s.b)("li",{parentName:"ul"},"statsd_exporter \u7aef\u53e3 9102")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},'docker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  --name statsd-exporter prom/statsd-exporter\n\ndocker run --rm -it -p 9102:9102 -p 9125:9125 -p 9125:9125/udp \\\n  -v $PWD/statsd_mapping.yml:/tmp/statsd_mapping.yml \\\n  --name statsd-exporter prom/statsd-exporter --statsd.mapping-config=/tmp/statsd_mapping.yml\n\n# \u6d4b\u8bd5\n# -c close - \u4f46 busybox \u7684 nc \u4e0d\u652f\u6301\necho "deploys.test.myservice:1|c" | nc -w 1 -u 127.0.0.1 8125\necho "deploys.test.myservice:1|c" | socat -t 0 STDIN UDP:127.0.0.1:8125\n')),Object(s.b)("h2",{id:"asterisk"},"asterisk"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"statsd.conf")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ini"},"[general]\nenabled = yes\nserver = 192.168.1.1:8125\nprefix = ast-1\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"asterisk -R -x 'module reload res_statsd.so'\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'<PREFIX>_PJSIP_contacts_<CONTACT>__<ID>_rtt{quantile="0.5"} -0.001\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},'mappings:\n- match: "([^.]+)[.]PJSIP[.]contacts[.]([^;]+)(;[^.]*)?[.]rtt"\nmatch_type: regex\nname: "pjsip_contacts_rtt"\nlabels:\nasterisk: "$1"\nconact: "$2"\nsummary_options:\nquantiles:\n- quantile: 0.99\n  error: 0.001\n- quantile: 0.9\n  error: 0.05\n- quantile: 0.5\n  error: 0.005\nmax_summary_age: 60s\nsummary_age_buckets: 3\nstream_buffer_size: 1000\n')))}l.isMDXComponent=!0}}]);