(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{1129:function(e,n,t){"use strict";t.d(n,"a",(function(){return g})),t.d(n,"b",(function(){return d}));var r=t(0),s=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),u=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=u(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},b=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=u(t),b=r,d=g["".concat(a,".").concat(b)]||g[b]||p[b]||i;return t?s.a.createElement(d,o(o({ref:n},l),{},{components:t})):s.a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<i;l++)a[l]=t[l];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},398:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),s=t(8),i=(t(0),t(1129)),a={id:"nginx-ingress",title:"Nginx Ingress"},o={unversionedId:"devops/kubernetes/network/nginx-ingress",id:"devops/kubernetes/network/nginx-ingress",isDocsHomePage:!1,title:"Nginx Ingress",description:"Tips",source:"@site/notes/devops/kubernetes/network/nginx-ingress.md",slug:"/devops/kubernetes/network/nginx-ingress",permalink:"/notes/devops/kubernetes/network/nginx-ingress",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/network/nginx-ingress.md",version:"current",sidebar:"docs",previous:{title:"Nginx Ingress \u5e38\u89c1\u95ee\u9898",permalink:"/notes/devops/kubernetes/network/nginx-ingress-faq"},next:{title:"Traefik Ingress",permalink:"/notes/devops/kubernetes/network/traefik-ingress"}},c=[{value:"Tips",id:"tips",children:[]},{value:"config",id:"config",children:[{value:"annotations",id:"annotations",children:[]},{value:"\u7c98\u6027\u4f1a\u8bdd",id:"\u7c98\u6027\u4f1a\u8bdd",children:[]},{value:"grpc",id:"grpc",children:[]},{value:"cors",id:"cors",children:[]},{value:"ConfigMap",id:"configmap",children:[]}]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"Examples",id:"examples",children:[]},{value:"FastCGI",id:"fastcgi",children:[]},{value:"\u9ed8\u8ba4 backend",id:"\u9ed8\u8ba4-backend",children:[]},{value:"auth",id:"auth",children:[{value:"basic",id:"basic",children:[]},{value:"external basic",id:"external-basic",children:[]},{value:"cert",id:"cert",children:[]}]},{value:"controller",id:"controller",children:[]}],l={toc:c};function u(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u6a21\u7248\u8def\u5f84 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx/blob/master/rootfs/etc/nginx/template/nginx.tmpl"},"/etc/nginx/template/nginx.tmpl")),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301\u81ea\u5b9a\u4e49 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx/blob/master/rootfs/etc/nginx/lua/plugins/README.md"},"Lua \u63d2\u4ef6")),Object(i.b)("li",{parentName:"ul"},"\u65e0\u6cd5\u5168\u5c40\u6dfb\u52a0 cert",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u8bbe\u7f6e\u9ed8\u8ba4 ",Object(i.b)("inlineCode",{parentName:"li"},"--default-ssl-certificate")," \u6307\u5411 secret - \u4f8b\u5982 ",Object(i.b)("inlineCode",{parentName:"li"},"default/foo-tls")),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f7f\u7528 self-signed"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/#websockets"},"Websocket"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"proxy-read-timeout \u548c proxy-send-timeout \u9ed8\u8ba4 60s"),Object(i.b)("li",{parentName:"ul"},"\u5bf9\u4e8e websocket \u5efa\u8bae 3600"))),Object(i.b)("li",{parentName:"ul"},"\u63d2\u4ef6",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/kubectl-plugin/"},"https://kubernetes.github.io/ingress-nginx/kubectl-plugin/")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/"},"https://kubernetes.github.io/ingress-nginx/user-guide/miscellaneous/"))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 ssl-passthrough \u672a\u5f00\u542f\uff0c\u4e0d\u652f\u6301 SNI",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u542f\u7528\u5bf9\u6027\u80fd\u5f71\u54cd\u5f88\u5927")))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'POD_NAME=$(kubectl get pods --selector "app.kubernetes.io/name=ingress-nginx" --all-namespaces --output=name | head -1)\n# \u67e5\u770b Nginx \u914d\u7f6e\nkubectl exec -n ingress-nginx -it $POD_NAME -- cat /etc/nginx/nginx.conf\n')),Object(i.b)("h2",{id:"config"},"config"),Object(i.b)("h3",{id:"annotations"},"annotations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/"},"annotations")),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u524d\u7f00 ",Object(i.b)("inlineCode",{parentName:"li"},"nginx.ingress.kubernetes.io"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# location \u81ea\u5b9a\u4e49\nnginx.ingress.kubernetes.io/configuration-snippet: |\n  more_set_headers \"Request-Id: $req_id\";\n# server \u81ea\u5b9a\u4e49\nnginx.ingress.kubernetes.io/server-snippet: |\n  set $agentflag 0;\n\n  if ($http_user_agent ~* \"(Mobile)\" ){\n    set $agentflag 1;\n  }\n\n  if ( $agentflag = 1 ) {\n    return 301 https://m.example.com;\n  }\n\n# \u8bbf\u95ee service \u800c\u4e0d\u662f pod\nnginx.ingress.kubernetes.io/service-upstream: 'false'\n# proxy_set_header Host $host\nnginx.ingress.kubernetes.io/upstream-vhost: ''\n# \u522b\u540d\nnginx.ingress.kubernetes.io/server-alias: '<alias 1>,<alias 2>'\n\n# \u9ed8\u8ba4\u5173\u95ed buffer\nnginx.ingress.kubernetes.io/proxy-buffering: \"off\"\n")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"name"),Object(i.b)("th",{parentName:"tr",align:null},"desc"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"whitelist-source-range"),Object(i.b)("td",{parentName:"tr",align:null},"CIDR \u767d\u540d\u5355")))),Object(i.b)("h3",{id:"\u7c98\u6027\u4f1a\u8bdd"},"\u7c98\u6027\u4f1a\u8bdd"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"nginx.ingress.kubernetes.io/affinity: cookie\n# \u9ed8\u8ba4 balanced \u6a21\u5f0f - \u6269\u7f29\u5bb9\u7684\u65f6\u5019\u4f1a\u53d8\nnginx.ingress.kubernetes.io/affinity-mode: persistent\n# \u9ed8\u8ba4 INGRESSCOOKIE\nnginx.ingress.kubernetes.io/session-cookie-name: _sticky\n# \u9ed8\u8ba4\u4e3a ingress match \u7684\u8def\u5f84\n# nginx.ingress.kubernetes.io/session-cookie-path: /\n# None, Lax, Strict\n# nginx.ingress.kubernetes.io/session-cookie-samesite: None\n\n# Will omit SameSite=None attribute for older browsers which reject the more-recently defined SameSite=None value\n# nginx.ingress.kubernetes.io/session-cookie-conditional-samesite-none: 'true'\n\n# Expires\nnginx.ingress.kubernetes.io/session-cookie-expires: '172800'\n# Max-Age\nnginx.ingress.kubernetes.io/session-cookie-max-age: '172800'\n\n# \u9ed8\u8ba4 false - \u5f53\u8bf7\u6c42\u4e0a\u6e38\u5931\u8d25\u65f6\u4fee\u6539 cookie\nnginx.ingress.kubernetes.io/session-cookie-change-on-failure: 'true'\n")),Object(i.b)("h3",{id:"grpc"},"grpc"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'# \u4fee\u6539\u540e\u7aef\nnginx.ingress.kubernetes.io/backend-protocol: "GRPCS"\n# \u5982\u679c\u8981\u4f7f\u7528 stream \u8003\u8651\u8bbe\u7f6e\u957f\u4e00\u70b9\u7684\u8d85\u65f6\nnginx.ingress.kubernetes.io/server-snippet: |\n  grpc_read_timeout "1200s";\n  grpc_send_timeout "1200s";\n  client_body_timeout "1200s";\n')),Object(i.b)("h3",{id:"cors"},"cors"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'nginx.ingress.kubernetes.io/enable-cors: "true"\n# \u9ed8\u8ba4\u6240\u6709\nnginx.ingress.kubernetes.io/cors-allow-origin: "https://wener.me"\n')),Object(i.b)("h3",{id:"configmap"},"ConfigMap"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap"},"configmap"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# \u9690\u85cf Proxy \u7684\u5934\n#hide-headers: Server\n# \u9ed8\u8ba4\u4f1a\u8fd4\u56de Server \u5934\nserver-tokens: 'false'\n# \u9ed8\u8ba4 1m\nproxy-body-size: 5m\n\n# \u751f\u6210 RequestID\ngenerate-request-id: 'true'\n\n# \u81ea\u5b9a\u4e49\u811a\u672c\nmain-snippet: ''\nhttp-snippet: ''\nserver-snippet: ''\nlocation-snippet: ''\n\n# \u6765\u6e90\u767d\u540d\u5355\nwhitelist-source-range: ''\n")),Object(i.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# HELM\nhelm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm install my-release ingress-nginx/ingress-nginx\n\n# manifest\nver=$(curl -Ls https://api.github.com/repos/kubernetes/ingress-nginx/releases/latest | jq -r .tag_name)\ncurl -LC- https://raw.githubusercontent.com/kubernetes/ingress-nginx/$ver/deploy/static/provider/baremetal/deploy.yaml -o nginx-ingress-baremetal-$ver.yaml\nkubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-0.32.0/deploy/static/provider/baremetal/deploy.yaml\n\n# wener helm charts\nhelm repo add wener https://charts.wener.tech\nhelm install ingress-nginx wener/ingress-nginx -n ingress-nginx -v nginx.values.yaml\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"values.yaml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},'config:\n  hide-headers: "Server"\ncontroller:\n  image:\n    # use mirror\n    # k8s.gcr.io/ingress-nginx/controller\n    repository: registry.cn-hongkong.aliyuncs.com/cmi/ingress-nginx_controller\n    # disable digest\n    digest: ""\n  # \u4ee5 DaemonSet \u5b89\u88c5\n  kind: DaemonSet\n  # 80 \u7aef\u53e3\n  hostPort:\n    enabled: true\n  # \u662f\u5426\u542f\u7528 /metrics\n  metrics:\n    enabled: true\n    # \u662f\u5426\u5b89\u88c5 kube-prometheus\n    serviceMonitor:\n      enabled: false\n  prometheusRule:\n    enabled: false\n  admissionWebhooks:\n    patch:\n      image:\n        repository: registry.cn-hongkong.aliyuncs.com/cmi/jettech_kube-webhook-certgen\n')),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# https://github.com/kubernetes/ingress-nginx/blob/master/docs/examples/rewrite/README.md\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /$2\n  name: rewrite\n  namespace: default\nspec:\n  rules:\n    - host: rewrite.bar.com\n      http:\n        paths:\n          - backend:\n              serviceName: http-svc\n              servicePort: 80\n            path: /something(/|$)(.*)\n")),Object(i.b)("h2",{id:"fastcgi"},"FastCGI"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    kubernetes.io/ingress.class: 'nginx'\n    nginx.ingress.kubernetes.io/backend-protocol: 'FCGI'\n    nginx.ingress.kubernetes.io/fastcgi-index: 'index.php'\n    # \u5b58\u653e\u989d\u5916\u53c2\u6570\n    nginx.ingress.kubernetes.io/fastcgi-params-configmap: 'example-cm'\n    # nginx.ingress.kubernetes.io/fastcgi-params-configmap: \"example-namespace/example-configmap\"\n  name: example-app\nspec:\n  rules:\n    - host: app.example.com\n      http:\n        paths:\n          - backend:\n              serviceName: example-service\n              servicePort: fastcgi\n")),Object(i.b)("h2",{id:"\u9ed8\u8ba4-backend"},"\u9ed8\u8ba4 backend"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: no-rules-map\nspec:\n  tls:\n    - hosts:\n        - 'wener.me'\n        - '*.wener.me'\n      secretName: wener-me-cert\n  backend:\n    serviceName: def\n    servicePort: 80\n")),Object(i.b)("h2",{id:"auth"},"auth"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/"},"https://kubernetes.github.io/ingress-nginx/examples/auth/oauth-external-auth/"))),Object(i.b)("h3",{id:"basic"},"basic"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  auth: Zm9vOiRhcHIxJE9GRzNYeWJwJGNrTDBGSERBa29YWUlsSDkuY3lzVDAK\nkind: Secret\nmetadata:\n  name: basic-auth\n  namespace: default\ntype: Opaque\n---\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: ingress-with-auth\n  annotations:\n    # \u8ba4\u8bc1\u7c7b\u578b\n    nginx.ingress.kubernetes.io/auth-type: basic\n    # \u5b58\u50a8\u4e86 auth \u7684 secret\n    nginx.ingress.kubernetes.io/auth-secret: basic-auth\n    # \u663e\u793a\u4fe1\u606f\n    nginx.ingress.kubernetes.io/auth-realm: 'Authentication Required - foo'\nspec:\n  rules:\n    - host: foo.bar.com\n      http:\n        paths:\n          - path: /\n            backend:\n              serviceName: http-svc\n              servicePort: 80\n")),Object(i.b)("h3",{id:"external-basic"},"external basic"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    nginx.ingress.kubernetes.io/auth-url: https://httpbin.org/basic-auth/user/passwd\n  name: external-auth\n  namespace: default\nspec:\n  rules:\n    - host: external-auth-01.sample.com\n      http:\n        paths:\n          - backend:\n              serviceName: http-svc\n              servicePort: 80\n            path: /\n")),Object(i.b)("h3",{id:"cert"},"cert"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  annotations:\n    # Enable client certificate authentication\n    nginx.ingress.kubernetes.io/auth-tls-verify-client: 'on'\n    # Create the secret containing the trusted ca certificates\n    nginx.ingress.kubernetes.io/auth-tls-secret: 'default/ca-secret'\n    # Specify the verification depth in the client certificates chain\n    nginx.ingress.kubernetes.io/auth-tls-verify-depth: '1'\n    # Specify an error page to be redirected to verification errors\n    nginx.ingress.kubernetes.io/auth-tls-error-page: 'http://www.mysite.com/error-cert.html'\n    # Specify if certificates are passed to upstream server\n    nginx.ingress.kubernetes.io/auth-tls-pass-certificate-to-upstream: 'true'\n  name: nginx-test\n  namespace: default\nspec:\n  rules:\n    - host: mydomain.com\n      http:\n        paths:\n          - backend:\n              serviceName: http-svc\n              servicePort: 80\n            path: /\n  tls:\n    - hosts:\n        - mydomain.com\n      secretName: tls-secret\n")),Object(i.b)("h2",{id:"controller"},"controller"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"    1 www-data  0:00 /usr/bin/dumb-init -- /nginx-ingress-controller --publish-service=ingress-nginx/ingress-nginx-controller --election-id=ingress-controller-leader --ingress-class=nginx --configmap=ingress-nginx/ingress-nginx-controller --validating-webhook=:8443 --validating-webhook-certificate=/usr/local/certificates/cert --validating-webhook-key=/usr/local/certificates/key\n    6 www-data  0:00 /nginx-ingress-controller --publish-service=ingress-nginx/ingress-nginx-controller --election-id=ingress-controller-leader --ingress-class=nginx --configmap=ingress-nginx/ingress-nginx-controller --validating-webhook=:8443 --validating-webhook-certificate=/usr/local/certificates/cert --validating-webhook-key=/usr/local/certificates/key\n   26 www-data  0:00 nginx: master process /usr/local/nginx/sbin/nginx -c /etc/nginx/nginx.conf\n   37 www-data  2:15 nginx: worker process is shutting down\n  105 www-data  0:00 /wait-shutdown\n  117 root      0:00 bash\n  136 root      0:00 ps aux\n  137 root      0:00 tee\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'/nginx-ingress-controller --help\n-------------------------------------------------------------------------------\nNGINX Ingress controller\n  Release:       v0.35.0\n  Build:         54ad65e32bcab32791ab18531a838d1c0f0811ef\n  Repository:    https://github.com/kubernetes/ingress-nginx\n  nginx version: nginx/1.19.2\n\n-------------------------------------------------------------------------------\n\nUsage of :\n      --add_dir_header                          If true, adds the file directory to the header of the log messages\n      --alsologtostderr                         log to standard error as well as files\n      --annotations-prefix string               Prefix of the Ingress annotations specific to the NGINX controller. (default "nginx.ingress.kubernetes.io")\n      --apiserver-host string                   Address of the Kubernetes API server.\n                                                Takes the form "protocol://address:port". If not specified, it is assumed the\n                                                program runs inside a Kubernetes cluster and local discovery is attempted.\n      --certificate-authority string            Path to a cert file for the certificate authority. This certificate is used\n                                                only when the flag --apiserver-host is specified.\n      --configmap string                        Name of the ConfigMap containing custom global configurations for the controller.\n      --default-backend-service string          Service used to serve HTTP requests not matching any known server name (catch-all).\n                                                Takes the form "namespace/name". The controller configures NGINX to forward\n                                                requests to the first port of this Service.\n      --default-server-port int                 Port to use for exposing the default server (catch-all). (default 8181)\n      --default-ssl-certificate string          Secret containing a SSL certificate to be used by the default HTTPS server (catch-all).\n                                                Takes the form "namespace/name".\n      --disable-catch-all                       Disable support for catch-all Ingresses\n      --election-id string                      Election id to use for Ingress status updates. (default "ingress-controller-leader")\n      --enable-metrics                          Enables the collection of NGINX metrics (default true)\n      --enable-ssl-chain-completion             Autocomplete SSL certificate chains with missing intermediate CA certificates.\n                                                Certificates uploaded to Kubernetes must have the "Authority Information Access" X.509 v3\n                                                extension for this to succeed.\n      --enable-ssl-passthrough                  Enable SSL Passthrough.\n      --health-check-path string                URL path of the health check endpoint.\n                                                Configured inside the NGINX status server. All requests received on the port\n                                                defined by the healthz-port parameter are forwarded internally to this path. (default "/healthz")\n      --health-check-timeout int                Time limit, in seconds, for a probe to health-check-path to succeed. (default 10)\n      --healthz-port int                        Port to use for the healthz endpoint. (default 10254)\n      --http-port int                           Port to use for servicing HTTP traffic. (default 80)\n      --https-port int                          Port to use for servicing HTTPS traffic. (default 443)\n      --ingress-class string                    Name of the ingress class this controller satisfies.\n                                                The class of an Ingress object is set using the field IngressClassName in Kubernetes clusters version v1.18.0 or higher or the annotation "kubernetes.io/ingress.class" (deprecated).\n                                                If this parameter is not set, or set to the default value of "nginx", it will handle ingresses with either an empty or "nginx" class name.\n      --kubeconfig string                       Path to a kubeconfig file containing authorization and API server information.\n      --log_backtrace_at traceLocation          when logging hits line file:N, emit a stack trace (default :0)\n      --log_dir string                          If non-empty, write log files in this directory\n      --log_file string                         If non-empty, use this log file\n      --log_file_max_size uint                  Defines the maximum size a log file can grow to. Unit is megabytes. If the value is 0, the maximum file size is unlimited. (default 1800)\n      --logtostderr                             log to standard error instead of files (default true)\n      --maxmind-edition-ids string              Maxmind edition ids to download GeoLite2 Databases. (default "GeoLite2-City,GeoLite2-ASN")\n      --maxmind-license-key string              Maxmind license key to download GeoLite2 Databases.\n                                                https://blog.maxmind.com/2019/12/18/significant-changes-to-accessing-and-using-geolite2-databases\n      --metrics-per-host                        Export metrics per-host (default true)\n      --monitor-max-batch-size int              Max batch size of NGINX metrics (default 10000)\n      --profiler-port int                       Port to use for expose the ingress controller Go profiler when it is enabled. (default 10245)\n      --profiling                               Enable profiling via web interface host:port/debug/pprof/ (default true)\n      --publish-service string                  Service fronting the Ingress controller.\n                                                Takes the form "namespace/name". When used together with update-status, the\n                                                controller mirrors the address of this service\'s endpoints to the load-balancer\n                                                status of all Ingress objects it satisfies.\n      --publish-status-address string           Customized address to set as the load-balancer status of Ingress objects this controller satisfies.\n                                                Requires the update-status parameter.\n      --report-node-internal-ip-address         Set the load-balancer status of Ingress objects to internal Node addresses instead of external.\n                                                Requires the update-status parameter.\n      --skip_headers                            If true, avoid header prefixes in the log messages\n      --skip_log_headers                        If true, avoid headers when opening log files\n      --ssl-passthrough-proxy-port int          Port to use internally for SSL Passthrough. (default 442)\n      --status-port int                         Port to use for the lua HTTP endpoint configuration. (default 10246)\n      --status-update-interval int              Time interval in seconds in which the status should check if an update is required. Default is 60 seconds (default 60)\n      --stderrthreshold severity                logs at or above this threshold go to stderr (default 2)\n      --stream-port int                         Port to use for the lua TCP/UDP endpoint configuration. (default 10247)\n      --sync-period duration                    Period at which the controller forces the repopulation of its local object stores. Disabled by default.\n      --sync-rate-limit float32                 Define the sync frequency upper limit (default 0.3)\n      --tcp-services-configmap string           Name of the ConfigMap containing the definition of the TCP services to expose.\n                                                The key in the map indicates the external port to be used. The value is a\n                                                reference to a Service in the form "namespace/name:port", where "port" can\n                                                either be a port number or name. TCP ports 80 and 443 are reserved by the\n                                                controller for servicing HTTP traffic.\n      --udp-services-configmap string           Name of the ConfigMap containing the definition of the UDP services to expose.\n                                                The key in the map indicates the external port to be used. The value is a\n                                                reference to a Service in the form "namespace/name:port", where "port" can\n                                                either be a port name or number.\n      --update-status                           Update the load-balancer status of Ingress objects this controller satisfies.\n                                                Requires setting the publish-service parameter to a valid Service reference. (default true)\n      --update-status-on-shutdown               Update the load-balancer status of Ingress objects when the controller shuts down.\n                                                Requires the update-status parameter. (default true)\n  -v, --v Level                                 number for the log level verbosity\n      --validating-webhook string               The address to start an admission controller on to validate incoming ingresses.\n                                                Takes the form "<host>:port". If not provided, no admission controller is started.\n      --validating-webhook-certificate string   The path of the validating webhook certificate PEM.\n      --validating-webhook-key string           The path of the validating webhook key PEM.\n      --version                                 Show release information about the NGINX Ingress controller and exit.\n      --vmodule moduleSpec                      comma-separated list of pattern=N settings for file-filtered logging\n      --watch-namespace string                  Namespace the controller watches for updates to Kubernetes objects.\n                                                This includes Ingresses, Services and all configuration resources. All\n                                                namespaces are watched if this parameter is left empty.\npflag: help requested\n')))}u.isMDXComponent=!0}}]);