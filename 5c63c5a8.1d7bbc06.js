(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return r?a.a.createElement(d,o(o({ref:t},b),{},{components:r})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var b=2;b<l;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},442:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),l=(r(0),r(1083)),i={id:"prometheus",title:"Prometheus"},o={unversionedId:"service/observability/metrics/prometheus/prometheus",id:"service/observability/metrics/prometheus/prometheus",isDocsHomePage:!1,title:"Prometheus",description:"Tips",source:"@site/notes/service/observability/metrics/prometheus/prometheus.md",slug:"/service/observability/metrics/prometheus/prometheus",permalink:"/notes/service/observability/metrics/prometheus/prometheus",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/observability/metrics/prometheus/prometheus.md",version:"current",sidebar:"docs",previous:{title:"Prometheus \u5b58\u50a8",permalink:"/notes/service/observability/metrics/prometheus/prometheus-storage"},next:{title:"PromQL",permalink:"/notes/service/observability/metrics/prometheus/promql"}},c=[{value:"Tips",id:"tips",children:[]},{value:"Config",id:"config",children:[]},{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",children:[]},{value:"\u96c6\u6210",id:"\u96c6\u6210",children:[]},{value:"Pushing",id:"pushing",children:[]},{value:"Proxy",id:"proxy",children:[]},{value:"label",id:"label",children:[]},{value:"Push vs Pull",id:"push-vs-pull",children:[]}],b={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://prometheus.io"},"Prometheus")),Object(l.b)("li",{parentName:"ul"},"Prometheus ",Object(l.b)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/comparison/"},"vs")),Object(l.b)("li",{parentName:"ul"},"Prometheus \u53ef\u4ee5\u548c Grafana \u96c6\u6210, \u5728 ",Object(l.b)("a",{parentName:"li",href:"https://grafana.net/dashboards"},"https://grafana.net/dashboards")," \u53ef\u4ee5\u627e\u5230\u5f88\u591a\u9884\u5b9a\u4e49\u7684\u9762\u677f\u5b9a\u4e49"),Object(l.b)("li",{parentName:"ul"},"Prometheus vs TICK",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Pull vs Push"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/prometheus/pushgateway"},"prometheus/pushgateway")),Object(l.b)("li",{parentName:"ul"},"\u78c1\u76d8\u7a7a\u95f4",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"needed_disk_space = retention_time_seconds * ingested_samples_per_second * bytes_per_sample"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"bytes_per_sample \u4e00\u822c\u4e3a 1\u30012 bytes"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.time")," \u9ed8\u8ba4 15d"),Object(l.b)("li",{parentName:"ul"},"node_exporter \u5927\u7ea6 3000 \u6307\u6807"),Object(l.b)("li",{parentName:"ul"},"scrape_interval 15s"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"(3000/15*2 * 15*24*60*60) /1000/1000 = 518M")))))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f \u26a0\ufe0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Prometheus \u4e0d\u652f\u6301 auth\uff0c\u5982\u679c\u8981\u5bf9\u5916\u66b4\u9732\u5efa\u8bae\u6dfb\u52a0\u53cd\u5411\u4ee3\u7406"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.robustperception.io/configuring-prometheus-storage-retention"},"https://www.robustperception.io/configuring-prometheus-storage-retention"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u5b89\u88c5\nbrew install prometheus\n# \u4ece\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5\ngo get -v -u github.com/prometheus/prometheus/cmd/...\n\n# \u542f\u52a8 \u9ed8\u8ba4\u524d\u7aef\u9875\u9762 localhost:9090\nprometheus --config.file ~/.config/prometheus.yml\n\n# docker \u542f\u52a8\ndocker run \\\n  -p 9090:9090 \\\n  -v /etc/prometheus:/etc/prometheus \\\n  prom/prometheus\n\n# \u6216\u901a\u8fc7 brew \u542f\u52a8\u670d\u52a1\n# \u5982\u679c\u6ca1\u6709 --storage.tsdb.path \u53ef\u80fd\u51fa\u73b0\u6743\u9650\u95ee\u9898\necho "--config.file $HOME/.config/prometheus.yml --storage.tsdb.path $HOME/.data/prometheus" > /usr/local/etc/prometheus.args\nbrew services start prometheus\n# \u9519\u8bef\u65e5\u5fd7\ncat /usr/local/var/log/prometheus.err.log\n# \u6b63\u5e38\u65e5\u5fd7\ncat /usr/local/var/log/prometheus.log\n\n# \u7ba1\u7406\u63a5\u53e3\n# --web.enable-admin-api \u542f\u7528 /api/*/admin/ \u76f8\u5173\u63a5\u53e3\n# --web.enable-lifecycle \u542f\u7528 reload \u548c quite\n# \u53c2\u8003 https://prometheus.io/docs/operating/security/\nprometheus --config.file ~/.config/prometheus.yml --web.enable-admin-api --web.enable-lifecycle\n# brew \u53c2\u6570\necho "--config.file $HOME/.config/prometheus.yml --storage.tsdb.path $HOME/.data/prometheus --web.enable-admin-api --web.enable-lifecycle" > /usr/local/etc/prometheus.args\n# \u91cd\u542f\u670d\u52a1\nbrew services restart prometheus\n# \u91cd\u8f7d\u914d\u7f6e\ncurl -X POST http://localhost:9090/-/reload\n\n# \u4e3b\u673a\u8282\u70b9\u76d1\u63a7\nbrew install node_exporter\n# \u901a\u8fc7 service \u542f\u52a8\necho --web.listen-address :9101 > /usr/local/etc/node_exporter.args\nbrew services start node_exporter\n\n# \u76f4\u63a5\u542f\u52a8\nnode_exporter --web.listen-address :9101\n\n# Docker\n# ===================\ndocker pull prom/prometheus\ndocker pull prom/alertmanager\n# \u9700\u8981\u6302\u8f7d /proc\ndocker pull prom/node-exporter\ndocker pull prom/blackbox-exporter\ndocker pull prom/container-exporter\ndocker pull prom/mysqld-exporter\n\n# node_exporter \u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u4e0d\u592a\u597d\ngo get github.com/prometheus/node_exporter\n\n# \u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\u4e3a admin/admin\ndocker pull grafana/grafana\n\ndocker network create --subnet=172.18.0.0/16 mon-net\n\ndocker run --net mon-net --ip 172.18.0.10 -i -p 12000:3000 grafana/grafana\ndocker run --net mon-net --ip 172.18.0.20 -i -p 12001:9090 prom/prometheus\n\n# http://docs.grafana.org/installation/docker/\ndocker run -d --restart always -v /etc/localtime:/etc/localtime:ro \\\n  -p 12000:3000 \\\n  -e "GF_SERVER_ROOT_URL=http://grafana.server.name"  \\\n  -e "GF_SECURITY_ADMIN_PASSWORD=secret"  \\\n  grafana/grafana\n')),Object(l.b)("h2",{id:"config"},"Config"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"# \u5168\u5c40\u914d\u7f6e\nglobal:\n  # \u6293\u53d6\u95f4\u9694\uff0c\u9ed8\u8ba4 1m\n  scrape_interval: 15s\n  # \u6293\u53d6\u8d85\u65f6\uff0c\u9ed8\u8ba4 10s\n  scrape_timeout: 10s\n  # \u8ba1\u7b97\u89c4\u5219\u95f4\u9694\uff0c\u9ed8\u8ba4 1m\n  evaluation_interval: 15s\n\n# \u544a\u8b66\u914d\u7f6e\nalerting:\n  alertmanagers:\n    - static_configs:\n        - targets:\n          # - alertmanager:9093\n\n# \u5468\u671f\u6027\u8ba1\u7b97\u7684\u89c4\u5219\u6587\u4ef6\nrule_files:\n  # - \"first_rules.yml\"\n  # - \"second_rules.yml\"\n\n# \u6293\u53d6\u914d\u7f6e\nscrape_configs:\n  # \u4efb\u52a1\u540d\u5b57\uff0c\u4f1a\u6dfb\u52a0\u4e00\u4e2a job=$job_name \u7684\u6807\u7b7e\n  - job_name: 'prometheus'\n    # \u6307\u6807\u8def\u5f84\uff0c\u9ed8\u8ba4 '/metrics'\n    metrics_path: '/metrics'\n    # \u8bf7\u6c42 schema\uff0c\u9ed8\u8ba4 'http'\n    scheme: 'http'\n    # \u9759\u6001\u914d\u7f6e\n    static_configs:\n      # \u6293\u53d6\u76ee\u6807\n      - targets: ['localhost:9090']\n")),Object(l.b)("h2",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration"},"\u652f\u6301\u914d\u7f6e"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"azure"),Object(l.b)("li",{parentName:"ul"},"consul - \u670d\u52a1 catalog"),Object(l.b)("li",{parentName:"ul"},"digitalocean"),Object(l.b)("li",{parentName:"ul"},"dockerswarm"),Object(l.b)("li",{parentName:"ul"},"dns - SVR \u8bb0\u5f55"),Object(l.b)("li",{parentName:"ul"},"ec2"),Object(l.b)("li",{parentName:"ul"},"openstack"),Object(l.b)("li",{parentName:"ul"},"file - \u68c0\u6d4b\u6587\u4ef6\u53d8\u5316",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u683c\u5f0f\u4e0e static_config \u76f8\u540c"))),Object(l.b)("li",{parentName:"ul"},"gce"),Object(l.b)("li",{parentName:"ul"},"kubernetes",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"node\u3001service\u3001pod\u3001endpoints\u3001ingress"))),Object(l.b)("li",{parentName:"ul"},"marathon"),Object(l.b)("li",{parentName:"ul"},"nerve"),Object(l.b)("li",{parentName:"ul"},"serverset"),Object(l.b)("li",{parentName:"ul"},"triton"))),Object(l.b)("li",{parentName:"ul"},"mDNS",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/prometheus/prometheus/issues/2537"},"#2537")," - Cannot scrape targets specified by mDNS name"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/msiebuhr/prometheus-mdns-sd"},"msiebuhr/prometheus-mdns-sd"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5199\u5165\u6587\u4ef6\uff0c\u4f7f\u7528\u6587\u4ef6\u53d1\u73b0")))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# _prometheus-http._tcp\n# _prometheus-https._tcp\ngo get github.com/msiebuhr/prometheus-mdns-sd\n#\nprometheus-mdns-sd -out /etc/prometheus/mdns-sd.json\n\ncat <<XML > /etc/avahi/services/node-exporter.service\n<service-group>\n  <name replace-wildcards="yes">%h</name>\n\n  <service>\n    <type>_prometheus-http._tcp</type>\n    <port>9100</port>\n  </service>\n</service-group>\nXML\n\n# macOS\ndns-sd -R "node_exporter metrics" _prometheus-http._tcp. . 9100 path=/metrics\n')),Object(l.b)("h2",{id:"\u96c6\u6210"},"\u96c6\u6210"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://prometheus.io/docs/operating/integrations"},"INTEGRATIONS")),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u8bfb\u5199\u7684\u5b58\u50a8",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Azure Data Explorer"),Object(l.b)("li",{parentName:"ul"},"Cortex"),Object(l.b)("li",{parentName:"ul"},"CrateDB"),Object(l.b)("li",{parentName:"ul"},"Google BigQuery"),Object(l.b)("li",{parentName:"ul"},"Google Cloud Spanner"),Object(l.b)("li",{parentName:"ul"},"InfluxDB"),Object(l.b)("li",{parentName:"ul"},"IRONdb"),Object(l.b)("li",{parentName:"ul"},"M3DB"),Object(l.b)("li",{parentName:"ul"},"MetricFire"),Object(l.b)("li",{parentName:"ul"},"PostgreSQL/TimescaleDB"),Object(l.b)("li",{parentName:"ul"},"QuasarDB"),Object(l.b)("li",{parentName:"ul"},"Splunk"),Object(l.b)("li",{parentName:"ul"},"TiKV"),Object(l.b)("li",{parentName:"ul"},"Thanos")))),Object(l.b)("h2",{id:"pushing"},"Pushing"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://prometheus.io/docs/practices/pushing/"},"https://prometheus.io/docs/practices/pushing/")),Object(l.b)("li",{parentName:"ul"},"only valid use case for the Pushgateway is for capturing the outcome of a service-level batch job")),Object(l.b)("h2",{id:"proxy"},"Proxy"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/prometheus-community/PushProx"},"https://github.com/prometheus-community/PushProx"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: node\n    # \u4ee3\u7406\n    proxy_url: http://proxy:8080/\n    static_configs:\n      - targets: ['client:9100'] # Presuming the FQDN of the client is \"client\".\n")),Object(l.b)("h2",{id:"label"},"label"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"__")," \u5f00\u5934\u7684\u4e3a\u5185\u90e8 label"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"__meta")," \u53ef\u80fd\u7531 Service Discovery \u6dfb\u52a0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"__tmp")," \u53ef\u7531\u7528\u6237\u4f7f\u7528")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Label"),Object(l.b)("th",{parentName:"tr",align:null},"Desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"__address__")),Object(l.b)("td",{parentName:"tr",align:null},"\u76ee\u6807\u5730\u5740")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"__schema__")),Object(l.b)("td",{parentName:"tr",align:null},"http/https")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"__name__")),Object(l.b)("td",{parentName:"tr",align:null},"\u6807\u7b7e\u540d\u5b57")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"__param_target")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"?target="))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"__param_module")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"?module="))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'- job_name: "printer"\n  static_configs:\n    - targets:\n      - 192.168.1.2\n  metrics_path: /snmp\n  params:\n    module: [printer_mib]\n  relabel_configs:\n    # __param_target=__address__\n    - source_labels: [__address__]\n      target_label: __param_target\n    # instance=__param_target\n    - source_labels: [__param_target]\n      target_label: instance\n    - target_label: __address__\n      # snmp exporter \u5730\u5740\n      replacement: 192.168.1.3:9116\n\n')),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"push-vs-pull"},"Push vs Pull"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Push",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"IoT \u573a\u666f"),Object(l.b)("li",{parentName:"ul"},"\u7f51\u7edc\u9694\u79bb\u573a\u666f"),Object(l.b)("li",{parentName:"ul"},"\u6570\u636e\u5bfc\u5165"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.google.com/document/d/1H47v7WfyKkSLMrR8_iku6u9VB73WrVzBHb2SB6dL9_g"},"Pros/Cons of allowing push in Prometheus"))))}p.isMDXComponent=!0}}]);