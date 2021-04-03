(window.webpackJsonp=window.webpackJsonp||[]).push([[555],{628:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(8),l=(t(0),t(879)),c={id:"consul",title:"Consul"},o={unversionedId:"devops/service/consul",id:"devops/service/consul",isDocsHomePage:!1,title:"Consul",description:"Tips",source:"@site/notes/devops/service/consul.md",slug:"/devops/service/consul",permalink:"/notes/devops/service/consul",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/service/consul.md",version:"current",sidebar:"docs",previous:{title:"Consule Connect Mesh",permalink:"/notes/devops/service/consul-connect"},next:{title:"fabio",permalink:"/notes/devops/service/fabio"}},i=[{value:"Tips",id:"tips",children:[]},{value:"Catalog",id:"catalog",children:[]},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",children:[]},{value:"\u9009\u9879",id:"\u9009\u9879",children:[]},{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[{value:"\u6700\u5c0f\u670d\u52a1\u914d\u7f6e",id:"\u6700\u5c0f\u670d\u52a1\u914d\u7f6e",children:[]},{value:"\u670d\u52a1\u5b9a\u4e49",id:"\u670d\u52a1\u5b9a\u4e49",children:[]}]},{value:"ACL",id:"acl",children:[{value:"DNS",id:"dns",children:[]},{value:"Config",id:"config",children:[]}]},{value:"consul cluster",id:"consul-cluster",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u5730\u5740\u6a21\u677f\u9a8c\u8bc1",id:"\u5730\u5740\u6a21\u677f\u9a8c\u8bc1",children:[]},{value:"dropping node &quot;consul&quot; from result due to ACLs",id:"dropping-node-consul-from-result-due-to-acls",children:[]},{value:"autopilot: Failed to remove dead servers: too many dead servers: 1/1",id:"autopilot-failed-to-remove-dead-servers-too-many-dead-servers-11",children:[]},{value:"\u5c06 docker \u66b4\u9732\u5230 consul",id:"\u5c06-docker-\u66b4\u9732\u5230-consul",children:[]}]}],b={toc:i};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.consul.io/docs/guides/"},"Consul \u624b\u518c")),Object(l.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"HTTP 8500"),Object(l.b)("li",{parentName:"ul"},"HTTPS 8501 - \u9ed8\u8ba4\u6ca1\u5f00\u542f"),Object(l.b)("li",{parentName:"ul"},"gRPC 8502"),Object(l.b)("li",{parentName:"ul"},"DNS 8600"),Object(l.b)("li",{parentName:"ul"},"RPC 8400"))),Object(l.b)("li",{parentName:"ul"},"\u8fd0\u884c\u6a21\u5f0f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"server",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1\u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u4e2a dc \u4e0d\u8d85\u8fc7 5 \u4e2a\u670d\u52a1\u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"\u53c2\u4e0e raft \u4e00\u81f4\u6027\u4e8b\u52a1\u4fee\u6539"),Object(l.b)("li",{parentName:"ul"},"\u4e0e\u5176\u4ed6 dc \u7684\u7f51\u5173\u8fdb\u884c WAN gossip \u901a\u4fe1"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u8f6c\u53d1 dc \u6d41\u91cf"))),Object(l.b)("li",{parentName:"ul"},"agent",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e00\u822c\u6bcf\u4e2a\u8282\u70b9\u90fd\u4f1a\u542f\u52a8"),Object(l.b)("li",{parentName:"ul"},"\u4e0e server \u901a\u4fe1"),Object(l.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u7f13\u5b58\u3001\u4ee3\u7406\u3001\u8282\u70b9\u76d1\u63a7"))),Object(l.b)("li",{parentName:"ul"},"bootstrap",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u4e00\u4e2a dc \u5e94\u8be5\u53ea\u6709\u4e00\u4e2a server \u8282\u70b9\u4ee5\u8be5\u6a21\u5f0f\u8fd0\u884c"),Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u9009\u4e3e\u81ea\u5df1\u4e3a\u4e3b\u8282\u70b9"),Object(l.b)("li",{parentName:"ul"},"\u96c6\u7fa4\u542f\u52a8\u540e\u5219\u4e0d\u9700\u8981\u4f7f\u7528\u8be5\u6a21\u5f0f"),Object(l.b)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e ",Object(l.b)("inlineCode",{parentName:"li"},"bootstrap_expect")," \u4e3a 1"))))),Object(l.b)("li",{parentName:"ul"},"Watch",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"consul \u4f7f\u7528 http blocking query \u5b9e\u73b0 watch"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 index \u6216 content hash \u6765\u5224\u65ad\u53d8\u5316"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/hashicorp/consul-template/issues/1065"},"#1065")," - When watching all services, consul-template is DOSing the Consul agent"),Object(l.b)("li",{parentName:"ul"},"\u5f53\u76d1\u63a7\u91cf\u5927\u7684\u65f6\u5019\u8003\u8651\u5ba2\u6237\u7aef\u53bb\u91cd\uff0c\u95f4\u9694\u67e5\u8be2\uff0c\u907f\u514d\u957f\u94fe\u63a5"),Object(l.b)("li",{parentName:"ul"},"\u53ef Watch \u7684\u7c7b\u578b - key\u3001keyprefix\u3001services\u3001nodes\u3001service\u3001checks\u3001event"))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Value \u6700\u5927 512KB - \u4e0d\u8981\u5c06 KV \u7528\u4e8e\u901a\u7528\u5b58\u50a8\uff0c\u7528\u4e8e\u5b58\u50a8\u57fa\u672c\u72b6\u6001\u548c\u914d\u7f6e\u8db3\u4ee5"),Object(l.b)("li",{parentName:"ul"},"meta \u6700\u591a 64 \u4e2a KV\uff0ckey \u53ea\u80fd\u662f ",Object(l.b)("inlineCode",{parentName:"li"},"[-_a-zA-Z0-9]{,128}"),",\u503c\u6700\u957f 512"),Object(l.b)("li",{parentName:"ul"},"\u533a\u522b\u4f7f\u7528 tag \u548c meta",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"tags \u4f8b\u5982\uff1a primary\u3001secondary"),Object(l.b)("li",{parentName:"ul"},"metas \u4f8b\u5982\uff1a version\u3001name"))))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.consul.io/docs/troubleshoot/faq"},"FAQ"))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"env"),Object(l.b)("th",{parentName:"tr",align:null},"default"),Object(l.b)("th",{parentName:"tr",align:null},"desc"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_HTTP_ADDR"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"http://127.0.0.1:5800"},"http://127.0.0.1:5800")),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_HTTP_TOKEN"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_HTTP_TOKEN_FILE"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"HTTP Basic auth")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_HTTP_AUTH"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"user:pass")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_HTTP_SSL"),Object(l.b)("td",{parentName:"tr",align:null},"false"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_CACERT"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_CAPATH"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_CLIENT_CERT"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_CLIENT_KEY"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_TLS_SERVER_NAME"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_HTTP_SSL_VERIFY"),Object(l.b)("td",{parentName:"tr",align:null},"true"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"CONSUL_GRPC_ADDR"),Object(l.b)("td",{parentName:"tr",align:null},"127.0.0.1:8502"),Object(l.b)("td",{parentName:"tr",align:null},"envoy \u96c6\u6210\u9700\u8981")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# alpine install\n# 3.12 \u8fd8\u6ca1\u6709\uff0c\u9700\u8981\u4ece edge \u5b89\u88c5\napk add -X https://mirrors.aliyun.com/alpine/edge/community/ consul\n\n# macOS install\nbrew install consul\n\n# \u542f\u52a8\nconsul agent -bootstrap -server -data-dir $PWD/data -bind 0.0.0.0 -advertise 127.0.0.1 -ui\n\n# \u7ed1\u5b9a\u52a8\u6001\u5730\u5740\n# {{ GetPrivateInterfaces | include "network" "10.0.0.0/8" | attr "address" }}\n# {{ GetAllInterfaces | include "name" "^eth" | include "flags" "forwardable|up" | attr "address" }}\nconsul agent -bind \'{{ GetInterfaceIP "eth0" }}\' -server -dev\n\n# Debug\nconsul monitor --log-level=debug\n\n# \u6ce8\u9500\u670d\u52a1\ncurl -v -X PUT http://localhost:8500/v1/agent/service/deregister/web-test\nconsul services deregister -id web-test\n')),Object(l.b)("h2",{id:"catalog"},"Catalog"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Service"),Object(l.b)("li",{parentName:"ul"},"Node"),Object(l.b)("li",{parentName:"ul"},"Datacenter")),Object(l.b)("h2",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u542f\u52a8\u4e00\u4e2a\u4e09\u4e2a\u8282\u70b9\u7684\u96c6\u7fa4")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u9ed8\u8ba4\u914d\u7f6e\u76ee\u5f55\u4e3a /etc/consul\ncd /etc/consul\n# \u57fa\u7840\u670d\u52a1\u914d\u7f6e\ncat <<CONF > server.json\n{\n    "client_addr": "0.0.0.0",\n    "data_dir": "/var/consul",\n    "domain": "consul",\n    "enable_script_checks": true,\n    "dns_config": {\n        "enable_truncate": true,\n        "only_passing": true\n    },\n    "enable_syslog": true,\n    "leave_on_terminate": true,\n    "log_level": "INFO",\n    "rejoin_after_leave": true,\n    "server": true\n}\nCONF\n# \u542f\u52a8\u8fde\u63a5 - \u6570\u636e\u4e2d\u5fc3\necho \'{"start_join":["10.10.1.1","10.10.1.2","10.10.1.3"],"bootstrap_expect": 3,"datacenter":"center"}\' > join.json\n# \u751f\u6210\u5bc6\u94a5\necho \'{"encrypt":"\'$(consul keygen)\'"}\' > encrypt.json\n\n# \u5982\u679c\u89c9\u5f97\u914d\u7f6e\u6587\u4ef6\u8fc7\u591a\u53ef\u5408\u5e76\u4e3a\u4e00\u4e2a\n# jq -s add consul.d/*.json > config.json\n\n# \u542f\u52a8\nconsul agent -config-dir /etc/consul\n')),Object(l.b)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.consul.io/docs/agent/options"},"https://www.consul.io/docs/agent/options"))),Object(l.b)("h2",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u4ece\u65b0\u52a0\u8f7d\u914d\u7f6e\nconsul reload\nkillall -HUP consul\n")),Object(l.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(l.b)("h3",{id:"\u6700\u5c0f\u670d\u52a1\u914d\u7f6e"},"\u6700\u5c0f\u670d\u52a1\u914d\u7f6e"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "data_dir": "/var/consul",\n  "server": true,\n  "bootstrap_expect": 1,\n  "disable_update_check": true,\n  "disable_remote_exec": true,\n  "enable_syslog": true\n}\n')),Object(l.b)("h3",{id:"\u670d\u52a1\u5b9a\u4e49"},"\u670d\u52a1\u5b9a\u4e49"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.consul.io/docs/agent/services.html"},"Services"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5b9a\u4e49\u5355\u4e2a\u670d\u52a1")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "service": {\n    "name": "portal",\n    "tags": ["primary"],\n    "address": "10.66.1.1",\n    "meta": {\n      "meta": "for my service"\n    },\n    "port": 80,\n    "enable_tag_override": false\n  }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5b9a\u4e49\u591a\u4e2a\u670d\u52a1")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "services": [{ "name": "svc-a" }, { "name": "svc-b" }]\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# \u542f\u52a8\u5355\u8282\u70b9\n# \u5f00\u53d1\u6a21\u5f0f\nconsul agent -dev -client 0.0.0.0\n\nconsul agent -bootstrap -server -data-dir $PWD/data -advertise 127.0.0.1 -ui\n# ==> WARNING: Bootstrap mode enabled! Do not enable unless necessary\n# ==> Starting Consul agent...\n# ==> Starting Consul agent RPC...\n# ==> Consul agent running!\n#            Version: \'v0.7.3\'\n#            Node ID: \'f5bdf8b9-3e67-8b88-ddce-4052a5ae6bec\'\n#          Node name: \'wener\'\n#         Datacenter: \'dc1\'\n#             Server: true (bootstrap: true)\n#        Client Addr: 127.0.0.1 (HTTP: 8500, HTTPS: -1, DNS: 8600, RPC: 8400)\n#       Cluster Addr: 127.0.0.1 (LAN: 8301, WAN: 8302)\n#     Gossip encrypt: false, RPC-TLS: false, TLS-Incoming: false\n#              Atlas: <disabled>\n\n\n# \u5728\u5bb9\u5668\u4e2d\u542f\u52a8\u96c6\u7fa4, \u6307\u5b9a\u7f51\u5361\u662f\u5173\u952e\ndocker run --rm -it \\\n  --networ service \\\n  -e CONSUL_CLIENT_INTERFACE=eth0 \\\n  -e CONSUL_BIND_INTERFACE=eth0 \\\n  consule agent -server -bootstrap-expect 3 \\\n  -retry-join consul_consul_1 -retry-join consul_consul_2 -retry-join consul_consul_3\n\n# \u67e5\u770b\u6210\u5458\u4fe1\u606f\ndocker exec -it consul_consul_3 consul members -http-addr=http://consul_consul_3:8500\n\n# \u518d\u542f\u52a8\u4e00\u4e2a\u7528\u4e8e\u505a\u5bf9\u5916\u66b4\u9732, \u542f\u52a8 ui, \u5141\u8bb8\u6240\u6709\u6765\u6e90\u5ba2\u6237\u7aef\u8bbf\u95ee\ndocker run -it --rm --network multi-host-network \\\n  -e CONSUL_BIND_INTERFACE=eth0 -p 8500:8500 \\\n  --name consul consul agent -server -retry-join consul_consul_1 -ui\n\n\n\n# \u542f\u7528 ACL\ndocker run -it --rm -p 8500:8500  -v $PWD/consul/data:/consul/data \\\n  -e \'CONSUL_LOCAL_CONFIG={"datacenter":"dc1","acl_datacenter": "dc1","acl_master_token": "b1gs33cr3t","acl_default_policy": "deny","acl_down_policy": "extend-cache"}\' \\\n  -e CONSUL_CLIENT_INTERFACE=eth0 \\\n  -e CONSUL_BIND_INTERFACE=eth0 \\\n  --name consul consul agent -server -bootstrap-expect 1 -ui\n\n# \u5ba2\u6237\u7aef\u6307\u5b9a Token\nconsul members -token b1gs33cr3t\nCONSUL_HTTP_TOKEN=b1gs33cr3t consul members\n\ncurl -v --request PUT http://127.0.0.1:8500/v1/acl/bootstrap\n\ndocker run -d --name=dev-consul consul\ndocker run -d consul agent -dev -join=172.17.0.2\ndocker exec -t dev-consul consul members\n\ndocker run -d --net=host consul agent -server -bind=<external ip> -retry-join=<root agent ip> -bootstrap-expect=<number of server agents>\n\n# Start cluster server\ndocker run -d --name=node0 consul agent -server -client=0.0.0.0 -node=node0 -bootstrap-expect=1 -bind=172.17.0.2 -data-dir=/tmp/consul\n\n# Start client\ndocker run -d --name=node1 consul agent -client=0.0.0.0 -node=node1 -bind=172.17.0.3 -data-dir=/tmp/consul -join=172.17.0.2\n')),Object(l.b)("h2",{id:"acl"},"ACL"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://learn.hashicorp.com/consul/security-networking/production-acls"},"https://learn.hashicorp.com/consul/security-networking/production-acls")),Object(l.b)("li",{parentName:"ul"},"ACL \u53ef\u63a7\u5236\u7684\u8d44\u6e90\u4e3b\u8981\u6709",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"agent Utility operations in the Agent API, other than service and check registration"),Object(l.b)("li",{parentName:"ul"},"event Listing and firing events in the Event API"),Object(l.b)("li",{parentName:"ul"},"key Key/value store operations in the KV Store API"),Object(l.b)("li",{parentName:"ul"},"keyring Keyring operations in the Keyring API"),Object(l.b)("li",{parentName:"ul"},"node Node-level catalog operations in the Catalog API, Health API, Prepared Query API, Network Coordinate API, and Agent API"),Object(l.b)("li",{parentName:"ul"},"operator Cluster-level operations in the Operator API, other than the Keyring API"),Object(l.b)("li",{parentName:"ul"},"query Prepared query operations in the Prepared Query API"),Object(l.b)("li",{parentName:"ul"},"service Service-level catalog operations in the Catalog API, Health API, Prepared Query API, and Agent API"),Object(l.b)("li",{parentName:"ul"},"session Session operations in the Session API"))),Object(l.b)("li",{parentName:"ul"},"\u5185\u5efa\u7b56\u7565",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"global-management",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7528\u4e8e\u5168\u5c40\u7ba1\u7406"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://learn.hashicorp.com/consul/security-networking/managing-acl-policies#required-privileges-for-datacenter-operations"},"\u64cd\u4f5c\u9700\u8981\u7684\u6743\u9650"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"consul acl bootstrap\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "acl": {\n    // \u542f\u7528 ACL\n    "enabled": true,\n    // \u9ed8\u8ba4\u7b56\u7565 - \u9ed8\u8ba4\u4e3a allow\n    "default_policy": "deny",\n    "tokens": {\n      // \u5728 primary_datacenter \u96c6\u7fa4\u7684\u670d\u52a1\u4f1a\u4f7f\u7528\n      // \u7ba1\u7406\u7ea7\u522b\u7684\u6743\u9650\n      // \u7528\u4e8e\u7533\u8bf7\u96c6\u7fa4 leadership \u65f6\u4f7f\u7528\n      "master": "",\n      // \u9ed8\u8ba4 TOKEN - \u5728 agent \u8bf7\u6c42 \u670d\u52a1\u65f6\u4f7f\u7528\n      // \u5982\u679c\u4e3a\u7a7a\u5219\u4e3a anonymous \u7684 ACL\n      "default": "",\n      // \u7528\u4e8e\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u5904\u7406\u5185\u90e8\u64cd\u4f5c - \u5982\u679c\u6ca1\u6307\u5b9a\uff0c\u4f7f\u7528 default\n      // \u8be5 TOKEN \u81f3\u5c11\u9700\u8981\u6709\u5f53\u524d\u8282\u70b9\u7684\u5199\u6743\u9650\n      "agent": "",\n      // \u7528\u4e8e\u8bbf\u95ee agent \u63a5\u53e3 - \u9700\u8981 agent \u8bfb\u5199\u6743\u9650\u6216\u8282\u70b9\u7684\u8bfb\u6743\u9650\n      "agent_master": "",\n      "replication": ""\n    }\n  }\n}\n')),Object(l.b)("h4",{id:"agent"},"agent"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-hcl"},'node_prefix "" {\n   policy = "write"\n}\nservice_prefix "" {\n   policy = "read"\n}\n')),Object(l.b)("h4",{id:"\u53ea\u8bfb\u7b56\u7565"},"\u53ea\u8bfb\u7b56\u7565"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-hcl"},'node_prefix "" {\n  policy = "read"\n}\nservice_prefix "" {\n  policy = "read"\n}\nquery_prefix "" {\n  policy = "read"\n}\nkey_prefix "" {\n  policy = "read"\n}\n')),Object(l.b)("h4",{id:"registrator"},"registrator"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-hcl"},'service_prefix "" {\n  policy = "write"\n}\n')),Object(l.b)("h4",{id:"anonymous"},"anonymous"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-hcl"},'namespace "default" {\n  policy = "read"\n}\nagent {\n  policy = "read"\n}\nnode {\n  policy = "read"\n}\n')),Object(l.b)("h3",{id:"dns"},"DNS"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8282\u70b9 ",Object(l.b)("inlineCode",{parentName:"li"},"<node>.node[.datacenter].<domain>")),Object(l.b)("li",{parentName:"ul"},"\u670d\u52a1 ",Object(l.b)("inlineCode",{parentName:"li"},"[tag.]<service>.service[.datacenter].<domain>")),Object(l.b)("li",{parentName:"ul"},"RFC 2782 ",Object(l.b)("inlineCode",{parentName:"li"},"_<service>._<protocol>[.service][.datacenter][.domain]")),Object(l.b)("li",{parentName:"ul"},"\u9884\u5b9a\u4e49\u67e5\u8be2 ",Object(l.b)("inlineCode",{parentName:"li"},"<query or name>.query[.datacenter].<domain>"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"dig @127.0.0.1 -p 8600 consul.service.consul SRV\n")),Object(l.b)("h3",{id:"config"},"Config"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'{\n  "datacenter": "east-aws",\n  "data_dir": "/opt/consul",\n  "log_level": "INFO",\n  "node_name": "foobar",\n  "server": true,\n  "watches": [\n    {\n        "type": "checks",\n        "handler": "/usr/bin/health-check-handler.sh"\n    }\n  ],\n  "telemetry": {\n     "statsite_address": "127.0.0.1:2180"\n  }\n}\n')),Object(l.b)("h2",{id:"consul-cluster"},"consul cluster"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u4e09\u4e2a server\uff0c")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"consul.auto.tfvars.json")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "consul": {\n    "datacenter": "wener",\n    "master_token": "<UUID>"\n  }\n}\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"consul.tf")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-hcl"},'provider "docker" {}\n\nresource "docker_network" "service" {\n  name = "service"\n  check_duplicate = true\n}\n\nresource "docker_image" "consul" {\n  name = "consul:latest"\n  keep_locally = true\n}\n\nvariable "consul" {}\n\nlocals {\n  server_conf = {\n    datacenter: var.consul.datacenter\n    disable_update_check: true\n    disable_remote_exec: true\n    discard_check_output: true\n    acl: {\n      enabled: true\n      default_policy: "deny"\n      enable_token_persistence: true\n      tokens: {\n        master: var.consul.master_token\n      }\n    },\n    connect: {\n      enabled: true\n      enable_mesh_gateway_wan_federation: true\n    }\n  }\n}\n\n# config-dir /consul/config/\n# data-dir /consul/data/\nresource "docker_container" "consul_1" {\n  name  = "consul_1"\n  hostname  = "consul_1"\n  image = docker_image.consul.latest\n\n  upload {\n    file = "/consul/config/server.json"\n    content = jsonencode(local.server_conf)\n    source_hash = sha256(jsonencode(local.server_conf))\n  }\n\n  command = [\n    "agent", "-server",\n    "-advertise", "{{ GetInterfaceIP `eth0` }}",\n    "-bind", "0.0.0.0",\n    "-client", "0.0.0.0",\n    "-bootstrap-expect", "3",\n    "-ui",\n  ]\n  ports {\n    internal = 8500\n    external = 8500\n  }\n\n  networks_advanced {\n    name = "service"\n  }\n}\n\nresource "docker_container" "consul_2" {\n  name  = "consul_2"\n  hostname  = "consul_2"\n  image = docker_image.consul.latest\n  upload {\n    file = "/consul/config/server.json"\n    content = jsonencode(local.server_conf)\n    source_hash = sha256(jsonencode(local.server_conf))\n  }\n  command = [\n    "agent", "-server",\n    "-advertise", "{{ GetInterfaceIP `eth0` }}",\n    "-bind", "0.0.0.0",\n    "-client", "0.0.0.0",\n    "-retry-join","consul_1"\n  ]\n\n  networks_advanced {\n    name = "service"\n  }\n}\n\nresource "docker_container" "consul_3" {\n  name  = "consul_3"\n  hostname  = "consul_3"\n  image = docker_image.consul.latest\n  upload {\n    file = "/consul/config/server.json"\n    content = jsonencode(local.server_conf)\n    source_hash = sha256(jsonencode(local.server_conf))\n  }\n  command = [\n    "agent", "-server",\n    "-advertise", "{{ GetInterfaceIP `eth0` }}",\n    "-bind", "0.0.0.0",\n    "-client", "0.0.0.0",\n    "-retry-join","consul_1",\n    "-retry-join","consul_2",\n  ]\n\n  networks_advanced {\n    name = "service"\n  }\n}\n\n# agent\nresource "docker_container" "consul_4" {\n  name  = "consul_4"\n  hostname  = "consul_4"\n  image = docker_image.consul.latest\n  command = [\n    "agent",\n    "-advertise", "{{ GetInterfaceIP `eth0` }}",\n    "-bind", "0.0.0.0",\n    "-client", "0.0.0.0",\n    "-retry-join","consul_1",\n    "-retry-join","consul_2",\n    "-retry-join","consul_3",\n  ]\n\n  networks_advanced {\n    name = "service"\n  }\n}\n')),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"\u5730\u5740\u6a21\u677f\u9a8c\u8bc1"},"\u5730\u5740\u6a21\u677f\u9a8c\u8bc1"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'go get -u github.com/hashicorp/go-sockaddr/cmd/sockaddr\n~/go/bin/sockaddr eval \'GetPrivateInterfaces |  include "network" "10.0.0.0/8" | attr "address"\'\n')),Object(l.b)("h3",{id:"dropping-node-consul-from-result-due-to-acls"},'dropping node "consul" from result due to ACLs'),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"DNS \u67e5\u8be2\u65f6\u51fa\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u533f\u540d\u8bbf\u95ee service")),Object(l.b)("h3",{id:"autopilot-failed-to-remove-dead-servers-too-many-dead-servers-11"},"autopilot: Failed to remove dead servers: too many dead servers: 1/1"),Object(l.b)("h3",{id:"\u5c06-docker-\u66b4\u9732\u5230-consul"},"\u5c06 docker \u66b4\u9732\u5230 consul"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/gliderlabs/registrator"},"gliderlabs/registrator")),Object(l.b)("li",{parentName:"ul"},"\u914d\u7f6e\u9879",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6807\u793a SERVICE_ID - \u9ed8\u8ba4\u662f \u4e3b\u673a\u540d:\u670d\u52a1\u540d:\u7aef\u53e3"),Object(l.b)("li",{parentName:"ul"},"\u540d\u5b57 SERVICE_NAME"),Object(l.b)("li",{parentName:"ul"},"\u5ffd\u7565 SERVICE_IGNORE"),Object(l.b)("li",{parentName:"ul"},"\u6807\u7b7e SERVICE_TAGS=master,backups"),Object(l.b)("li",{parentName:"ul"},"\u5c5e\u6027 SERVICE_xxoo=abc \u4f1a\u8bb0\u5f55\u5230\u670d\u52a1\u5c5e\u6027")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# master \u4e3a\u6700\u65b0 - latest \u4e3a 4 \u5e74\u524d\u6700\u540e\u7248\u672c\ndocker run gliderlabs/registrator:master --help\n\n# -explicit \u53ea\u6709\u5b9a\u4e49\u4e86 SERVICE_NAME \u7684\u624d\u66b4\u9732\n# -ip \u66b4\u9732\u7684 IP - \u4f7f\u7528\u4e86\u8be5\u53c2\u6570\u5219\u4e0d\u9700\u8981 net=host\n# -internal \u4f7f\u7528\u5185\u90e8\u5730\u5740\u548c\u7aef\u53e3 - \u5728\u4f7f\u7528\u81ea\u5b9a\u4e49\u7f51\u7edc\u7684\u65f6\u5019\u5f88\u65b9\u4fbf\ndocker run -d --name=registrator \\\n  --volume=/var/run/docker.sock:/tmp/docker.sock \\\n  gliderlabs/registrator:master -explicit -ip 192.168.1.2 consul://192.168.1.2:8500\n\ndocker run -d --name web -l SERVICE_NAME=web -P nginx\n# \u5f53\u66b4\u9732\u4e86\u591a\u4e2a\u7aef\u53e3\u65f6\u9690\u85cf\u67d0\u4e2a\u7aef\u53e3\ndocker run -d --name web -l SERVICE_NAME=web -l SERVICE_443_IGNORE=true -P nginx\n# \u5982\u679c\u66b4\u9732\u4e86\u591a\u4e2a\u7aef\u53e3\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9\u53ea\u66b4\u9732\u67d0\u4e2a\u7aef\u53e3\u4f5c\u4e3a\u670d\u52a1\ndocker run -d --name web -l SERVICE_8080_NAME=web -P nginx\n")))}s.isMDXComponent=!0},879:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=s(t),p=a,m=u["".concat(c,".").concat(p)]||u[p]||d[p]||l;return t?r.a.createElement(m,o(o({ref:n},b),{},{components:t})):r.a.createElement(m,o({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=p;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<l;b++)c[b]=t[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);