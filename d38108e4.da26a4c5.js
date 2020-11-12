(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{559:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(7),l=(n(0),n(661)),s={id:"gitlab-k8s",title:"GitLab K8S \u96c6\u6210"},i={unversionedId:"ops/service/gitlab-k8s",id:"ops/service/gitlab-k8s",isDocsHomePage:!1,title:"GitLab K8S \u96c6\u6210",description:"GitLab K8S",source:"@site/notes/ops/service/gitlab-k8s.md",slug:"/ops/service/gitlab-k8s",permalink:"/notes/ops/service/gitlab-k8s",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/service/gitlab-k8s.md",version:"current",sidebar:"docs",previous:{title:"GitaLab\u6301\u7eed\u96c6\u6210\u6301\u7eed\u4ea4\u4ed8",permalink:"/notes/ops/service/gitlab-cicd"},next:{title:"\u7535\u6c60",permalink:"/notes/hardware/battery/battery"}},c=[{value:"\u5b89\u88c5\u53c2\u6570",id:"\u5b89\u88c5\u53c2\u6570",children:[]},{value:"FAQ",id:"faq",children:[{value:"\u5e38\u89c1\u5b89\u88c5\u95ee\u9898",id:"\u5e38\u89c1\u5b89\u88c5\u95ee\u9898",children:[]},{value:"Ingress \u548c Knative Endpoint \u4e00\u76f4\u7b49\u5f85",id:"ingress-\u548c-knative-endpoint-\u4e00\u76f4\u7b49\u5f85",children:[]},{value:"\u5220\u9664\u96c6\u6210",id:"\u5220\u9664\u96c6\u6210",children:[]},{value:"\u624b\u52a8\u5b89\u88c5 Helm",id:"\u624b\u52a8\u5b89\u88c5-helm",children:[]},{value:"install-helm",id:"install-helm",children:[]},{value:"uninstall-helm",id:"uninstall-helm",children:[]},{value:"install-knative",id:"install-knative",children:[]},{value:"install-prometheus",id:"install-prometheus",children:[]}]},{value:"node pages",id:"node-pages",children:[]}],o={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"gitlab-k8s"},"GitLab K8S"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u95ee\u9898",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u96c6\u6210 Helm 3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("del",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"del"},{href:"https://gitlab.com/gitlab-org/gitlab/issues/29037"}),"#29037")," - Remove use of tiller from Kubernetes integration (Helm v3)"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4e0d\u5728\u76f4\u63a5\u4f7f\u7528 Helm"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/groups/gitlab-org/charts/-/epics/1"}),"Support Helm 3")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/charts/gitlab/-/issues/2121"}),"#2121")," KOTS \u96c6\u6210"))),Object(l.b)("li",{parentName:"ul"},"\u90e8\u7f72\u5230 istio ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/charts/gitlab/issues/743"}),"gitlab-org/charts#743")),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528\u73b0\u6709\u7684 Knative ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-foss/merge_requests/27173"}),"#27173")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab/issues/20556"}),"#41614")," - Kubernetes cluster integration shall only install Helm Tiller or Ingress if not available already",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u96c6\u7fa4\u91cc\u5df2\u7ecf\u6709 Tiller \u518d\u6b21\u5b89\u88c5\u4f1a\u6709\u95ee\u9898"))))),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"k8s \u7a7a\u95f4\u4e3a gitlab-managed-apps"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5 tiller \u9700\u8981\u4fee\u6539\u955c\u50cf - \u9ed8\u8ba4\u662f gcr.io"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\u5668\u662f\u4f7f\u7528\u7684 registry.gitlab.com/gitlab-org/cluster-integration \u4e0b\u9762\u7684\u955c\u50cf")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u4fee\u6539 namespace \u4e3a gitlab-managed-apps\nkubectl config set-context --current --namespace=gitlab-managed-apps\n\n# tiller \u53ef\u80fd\u4f1a\u90e8\u7f72\u5931\u8d25 - \u5982\u679c\u6ca1\u6709\u4fee\u6539\u8fc7\u955c\u50cf - \u9ed8\u8ba4\u662f gcr \u955c\u50cf - \u53ef\u4ee5\u8003\u8651\u4fee\u6539\u955c\u50cf\nkubectl edit $(kubectl get pods -o name | grep tiller-deploy)\n")),Object(l.b)("h2",{id:"\u5b89\u88c5\u53c2\u6570"},"\u5b89\u88c5\u53c2\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u62f7\u8d1d API - sed \u7528\u4e8e\u79fb\u9664\u989c\u8272\nkubectl cluster-info | grep 'Kubernetes master' | awk '/http/ {print $NF}' | sed -r \"s/\\x1B\\[([0-9]{1,2}(;[0-9]{1,2})?)?[mGK]//g\" | pbcopy\n# \u62f7\u8d1d CA Cert\nkubectl get secret default-token-gt956  -o jsonpath=\"{['data']['ca\\.crt']}\" | base64 --decode | pbcopy\n# \u521b\u5efa\u8d26\u53f7\nkubectl apply -f- <<YAML\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: gitlab-admin\n  namespace: kube-system\n---\napiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: gitlab-admin\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: gitlab-admin\n  namespace: kube-system\nYAML\n\n# \u62f7\u8d1d Token\nkubectl -n kube-system get secret $(kubectl -n kube-system get secret | grep gitlab-admin-token | awk '{print $1}') -o jsonpath='{.data.token}' | base64 --decode | pbcopy\n")),Object(l.b)("h2",{id:"faq"},"FAQ"),Object(l.b)("h3",{id:"\u5e38\u89c1\u5b89\u88c5\u95ee\u9898"},"\u5e38\u89c1\u5b89\u88c5\u95ee\u9898"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Helm \u5b89\u88c5\u5931\u8d25",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"\u7ed9 default \u7a7a\u95f4\u53bb\u6389 istio \u6ce8\u5165\u6807\u7b7e")," - ",Object(l.b)("inlineCode",{parentName:"li"},"istio-injection")),Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\u5931\u8d25 ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/cluster-integration/helm-install-image/issues/3"}),"cluster-integration/helm-install-image#3")," - is not a valid chart repository or cannot be reached"),Object(l.b)("li",{parentName:"ul"},"epics ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/groups/gitlab-org/-/epics/1202#note_163944373"}),"#1202")," - Make all GitLab K8s/Auto DevOps/Serverless features compatible with Cloud Run")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# hostname \u4e3a install/uninstall-\u670d\u52a1\u540d\n# \u8bc1\u4e66\u548c\u914d\u7f6e\u76ee\u5f55\ncd /data/helm/$(hostname|cut -d- -f2)/config\n# \u9a8c\u8bc1 helm \u662f\u901a\u7684\nhelm version --tls --tls-ca-cert ca.pem --tls-cert cert.pem --tls-key\n key.pem\n")),Object(l.b)("h4",{id:"error-could-not-get-apiversions-from-kubernetes-unable-to-retrieve-the-complete-list-of-server-apis-custommetricsk8siov1beta1-the-server-is-currently-unable-to-handle-the-request"},"Error: Could not get apiVersions from Kubernetes: unable to retrieve the complete list of server APIs: custom.metrics.k8s.io/v1beta1: the server is currently unable to handle the request"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'# API \u5f02\u5e38\nkubectl get apiservice\n# v1beta1.custom.metrics.k8s.io               knative-serving/autoscaler          False (MissingEndpoints)   13h\n\nkubectl get apiservice v1beta1.custom.metrics.k8s.io -o yaml\n# endpoints for service/autoscaler in "knative-serving" have no addresses with port name "custom-metrics"\n\n# \u5c06\u8be5 api \u5220\u9664\u540e\u518d\u4ece\u65b0\u64cd\u4f5c\u5373\u53ef\nkubectl delete apiservice v1beta1.custom.metrics.k8s.io\n')),Object(l.b)("h4",{id:"containers-with-unready-status-autoscaler--containers-with-unready-status-activator"},"Containers with unready status: ","[autoscaler]"," / Containers with unready status: ","[activator]"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/knative/serving/issues/4407"}),"knative/serving#4407"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u4f1a\u53d1\u73b0 autoscaler \u548c activator \u72b6\u6001\u4e0d\u6b63\u5e38\nkubectl -n knative-serving get pods\n\npod=$(kubectl -n knative-serving get pods -o name | grep autoscaler- | head -1)\n\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"activator")," \u9519\u8bef\u4fe1\u606f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5e94\u8be5\u662f\u4e0e autoscaler \u5efa\u7acb websoket \u5931\u8d25"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c autoscaler \u5931\u8d25\u90a3\u4e48 activator \u4e5f\u4f1a\u5931\u8d25")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"level":"error","ts":"2019-11-30T06:15:36.850Z","logger":"activator","caller":"websocket/connection.go:158","msg":"Failed to send ping message","knative.dev/controller":"activator","error":"connection has not yet been established","stacktrace":"github.com/knative/serving/vendor/github.com/knative/pkg/websocket.NewDurableConnection.func3\\n\\t/home/prow/go/src/github.com/knative/serving/vendor/github.com/knative/pkg/websocket/connection.go:158"}\n')),Object(l.b)("h4",{id:"neither---kubeconfig-nor---master-was-specified--using-the-inclusterconfig--this-might-not-work"},"Neither --kubeconfig nor --master was specified.  Using the inClusterConfig.  This might not work."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"knative \u5bb9\u5668\u542f\u52a8\u7684\u65f6\u5019\u53ef\u80fd\u6709\u8fd9\u4e2a\u5f02\u5e38\u4fe1\u606f")),Object(l.b)("h4",{id:"pod-is-not-yet-backed-by-activator-cannot-scale-to-zero"},"pod is not yet backed by activator, cannot scale to zero"),Object(l.b)("h3",{id:"ingress-\u548c-knative-endpoint-\u4e00\u76f4\u7b49\u5f85"},"Ingress \u548c Knative Endpoint \u4e00\u76f4\u7b49\u5f85"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u56e0\u4e3a LoadBalancer \u6ca1\u6709\u83b7\u53d6\u5230 IP"),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u662f\u79c1\u6709\u96c6\u7fa4\uff0c\u9700\u8981\u8003\u8651\u4f7f\u7528 metallb \u6765\u5b9e\u73b0 LoadBalancer \u63a7\u5236\u5668")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# gitlab knative\nkubectl get service --namespace=gitlab-managed-apps ingress-nginx-ingress-controller -o jsonpath='{.status.loadBalancer.ingress[0].ip}'\n\n# istio/knative\nkubectl get svc --namespace=istio-system knative-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'\n\n# all\nkubectl get svc --all-namespaces -o jsonpath='{range.items[?(@.status.loadBalancer.ingress)]}{.status.loadBalancer.ingress[*].ip}'\n")),Object(l.b)("h3",{id:"\u5220\u9664\u96c6\u6210"},"\u5220\u9664\u96c6\u6210"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u79fb\u9664\u7a7a\u95f4\nkubectl delete all --all -n gitlab-managed-apps\n# \u5220\u9664\u8d26\u53f7\nkubectl delete sa gitlab gitlab-admin -n kube-system\nkubectl delete ClusterRoleBinding gitlab-admin\n# \u5220\u9664 Token\n# kubectl delete Secret gitlab-token\n\n# tiller\nkubectl delete sa tiller -n kube-system\nkubectl delete ClusterRoleBinding tiller-admin\n")),Object(l.b)("h3",{id:"\u624b\u52a8\u5b89\u88c5-helm"},"\u624b\u52a8\u5b89\u88c5 Helm"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'export TILLER_NAMESPACE=gitlab-managed-apps\nexport HELM_VERSION=2.16.1\n# \u5bfc\u51fa\u8bc1\u4e66\nmkdir gitlab-tiller\nfor i in ca cert key; do kubectl -n gitlab-managed-apps get cm values-content-configuration-helm -o jsonpath="{.data.$i\\.pem}" > gitlab-tiller/$i.pem ;done\n\n# \u521b\u5efa\u8d26\u53f7\nkubectl -n gitlab-managed-apps create serviceaccount tiller\n# \u7ed1\u5b9a\u6743\u9650\nkubectl create clusterrolebinding tiller-admin \\\n  --clusterrole=cluster-admin \\\n  --serviceaccount=gitlab-managed-apps:tiller\n\n# \u624b\u52a8\u5b89\u88c5\nhelm init --tiller-tls --tiller-tls-verify --tls-ca-cert gitlab-tiller/ca.pem --tiller-tls-cert gitlab-tiller/cert.pem --tiller-tls-key gitlab-tiller/key.pem --service-account tiller\n# \u7a7a\u95f4\u4e0b helm \u76f8\u5173\u8d44\u6e90\nkubectl get all -l app=helm\n# \u9a8c\u8bc1\nhelm version --tls --tls-verify --tls-ca-cert gitlab-tiller/ca.pem --tls-cert gitlab-tiller/cert.pem --tls-key gitlab-tiller/key.pem\n\n# \u5b89\u88c5\u540e tiller-deploy \u7684\u8bc1\u4e66\u4f4d\u4e8e /etc/certs\n# /helm version --tls --tls-verify --tls-ca-cert /etc/certs/ca.crt --tls-cert /etc/certs/tls.crt --tls-key /etc/certs/tls.key --host\n\n# \u5220\u9664 Helm \u76f8\u5173\u8d44\u6e90\nkubectl delete all -l app=helm\n')),Object(l.b)("h3",{id:"install-helm"},"install-helm"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitlab.com/gitlab-org/cluster-integration/helm-install-image"}),"cluster-integration/helm-install-image"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"set -xeo pipefail\nhelm init --tiller-tls --tiller-tls-verify --tls-ca-cert /data/helm/helm/config/ca.pem --tiller-tls-cert /data/helm/helm/config/cert.pem --tiller-tls-key /data/helm/helm/config/key.pem --service-account tiller\n")),Object(l.b)("h3",{id:"uninstall-helm"},"uninstall-helm"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"set -xeo pipefail\nhelm reset --tls --tls-ca-cert /data/helm/helm/config/ca.pem --tls-cert /data/helm/helm/config/cert.pem --tls-key /data/helm/helm/config/key.pem\nkubectl delete replicaset -n gitlab-managed-apps -l name\\=tiller\nkubectl delete clusterrolebinding tiller-admin\n")),Object(l.b)("h3",{id:"install-knative"},"install-knative"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'set -xeo pipefail\nhelm init --upgrade\nfor i in $(seq 1 30); do helm version --tls --tls-ca-cert /data/helm/knative/config/ca.pem --tls-cert /data/helm/knative/config/cert.pem --tls-key /data/helm/knative/config/key.pem && s=0 && break || s=$?; sleep 1s; echo "Retrying ($i)..."; done; (exit $s)\nhelm repo add knative https://storage.googleapis.com/triggermesh-charts\nhelm repo update\nhelm upgrade knative knative/knative --install --reset-values --tls --tls-ca-cert /data/helm/knative/config/ca.pem --tls-cert /data/helm/knative/config/cert.pem --tls-key /data/helm/knative/config/key.pem --version 0.7.0 --set rbac.create\\=true,rbac.enabled\\=true --namespace gitlab-managed-apps -f /data/helm/knative/config/values.yaml\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"value.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"domain: knative.wener.me\n")),Object(l.b)("h3",{id:"install-prometheus"},"install-prometheus"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'set -xeo pipefail\nhelm init --upgrade\nfor i in $(seq 1 30); do helm version --tls --tls-ca-cert /data/helm/prometheus/config/ca.pem --tls-cert /data/helm/prometheus/config/cert.pem --tls-key /data/helm/prometheus/config/key.pem && s=0 && break || s=$?; sleep 1s; echo "Retrying ($i)..."; done; (exit $s)\nhelm repo update\nhelm upgrade prometheus stable/prometheus --install --reset-values --tls --tls-ca-cert /data/helm/prometheus/config/ca.pem --tls-cert /data/helm/prometheus/config/cert.pem --tls-key /data/helm/prometheus/config/key.pem --version 6.7.3 --set rbac.create\\=true,rbac.enabled\\=true --namespace gitlab-managed-apps -f /data/helm/prometheus/config/values.yaml\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"values.yaml")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'alertmanager:\n  enabled: false\n  image:\n    tag: v0.15.2\n\nkubeStateMetrics:\n  enabled: true\n\nnodeExporter:\n  enabled: false\n\npushgateway:\n  enabled: false\n\nserver:\n  fullnameOverride: "prometheus-prometheus-server"\n  image:\n    tag: v2.4.3\n\nserverFiles:\n  alerts: {}\n  rules: {}\n\n  prometheus.yml:\n    rule_files:\n      - /etc/config/rules\n      - /etc/config/alerts\n    scrape_configs:\n      - job_name: prometheus\n        static_configs:\n          - targets:\n            - localhost:9090\n      - job_name: kubernetes-cadvisor\n        scheme: https\n        tls_config:\n          ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\n          insecure_skip_verify: true\n        bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n        kubernetes_sd_configs:\n          - role: node\n        relabel_configs:\n          - action: labelmap\n            regex: __meta_kubernetes_node_label_(.+)\n          - target_label: __address__\n            replacement: kubernetes.default.svc:443\n          - source_labels:\n            - __meta_kubernetes_node_name\n            regex: "(.+)"\n            target_label: __metrics_path__\n            replacement: "/api/v1/nodes/${1}/proxy/metrics/cadvisor"\n        metric_relabel_configs:\n          - source_labels:\n            - pod_name\n            target_label: environment\n            regex: "(.+)-.+-.+"\n      - job_name: \'kubernetes-service-endpoints\'\n        kubernetes_sd_configs:\n          - role: endpoints\n        relabel_configs:\n          - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scrape]\n            action: keep\n            regex: true\n          - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_scheme]\n            action: replace\n            target_label: __scheme__\n            regex: (https?)\n          - source_labels: [__meta_kubernetes_service_annotation_prometheus_io_path]\n            action: replace\n            target_label: __metrics_path__\n            regex: (.+)\n          - source_labels: [__address__, __meta_kubernetes_service_annotation_prometheus_io_port]\n            action: replace\n            target_label: __address__\n            regex: (.+)(?::\\d+);(\\d+)\n            replacement: $1:$2\n          - action: labelmap\n            regex: __meta_kubernetes_service_label_(.+)\n          - source_labels: [__meta_kubernetes_namespace]\n            action: replace\n            target_label: kubernetes_namespace\n          - source_labels: [__meta_kubernetes_service_name]\n            action: replace\n            target_label: kubernetes_name\n      - job_name: kubernetes-nodes\n        scheme: https\n        tls_config:\n          ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\n          insecure_skip_verify: true\n        bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n        kubernetes_sd_configs:\n          - role: node\n        relabel_configs:\n          - action: labelmap\n            regex: __meta_kubernetes_node_label_(.+)\n          - target_label: __address__\n            replacement: kubernetes.default.svc:443\n          - source_labels:\n            - __meta_kubernetes_node_name\n            regex: "(.+)"\n            target_label: __metrics_path__\n            replacement: "/api/v1/nodes/${1}/proxy/metrics"\n        metric_relabel_configs:\n          - source_labels:\n            - pod_name\n            target_label: environment\n            regex: "(.+)-.+-.+"\n      - job_name: kubernetes-pods\n        tls_config:\n          ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\n          insecure_skip_verify: true\n        bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n        kubernetes_sd_configs:\n          - role: pod\n        relabel_configs:\n          - source_labels:\n            - __meta_kubernetes_pod_annotation_prometheus_io_scrape\n            action: keep\n            regex: \'true\'\n          - source_labels:\n            - __meta_kubernetes_pod_annotation_prometheus_io_path\n            action: replace\n            target_label: __metrics_path__\n            regex: "(.+)"\n          - source_labels:\n            - __address__\n            - __meta_kubernetes_pod_annotation_prometheus_io_port\n            action: replace\n            regex: "([^:]+)(?::[0-9]+)?;([0-9]+)"\n            replacement: "$1:$2"\n            target_label: __address__\n          - action: labelmap\n            regex: __meta_kubernetes_pod_label_(.+)\n          - source_labels:\n            - __meta_kubernetes_namespace\n            action: replace\n            target_label: kubernetes_namespace\n          - source_labels:\n            - __meta_kubernetes_pod_name\n            action: replace\n            target_label: kubernetes_pod_name\n      # Sourced from Knative monitoring config: https://github.com/knative/serving/blob/master/config/monitoring/metrics/prometheus/100-prometheus-scrape-config.yaml\n      - job_name: autoscaler\n        scrape_interval: 3s\n        scrape_timeout: 3s\n        kubernetes_sd_configs:\n        - role: pod\n        relabel_configs:\n        # Scrape only the the targets matching the following metadata\n        - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_pod_label_app, __meta_kubernetes_pod_container_port_name]\n          action: keep\n          regex: knative-serving;autoscaler;metrics\n        # Rename metadata labels to be reader friendly\n        - source_labels: [__meta_kubernetes_namespace]\n          target_label: namespace\n        - source_labels: [__meta_kubernetes_pod_name]\n          target_label: pod\n        - source_labels: [__meta_kubernetes_service_name]\n          target_label: service\n      - job_name: activator\n        scrape_interval: 3s\n        scrape_timeout: 3s\n        kubernetes_sd_configs:\n        - role: pod\n        relabel_configs:\n        # Scrape only the the targets matching the following metadata\n        - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_pod_label_app, __meta_kubernetes_pod_container_port_name]\n          action: keep\n          regex: knative-serving;activator;metrics-port\n        # Rename metadata labels to be reader friendly\n        - source_labels: [__meta_kubernetes_namespace]\n          target_label: namespace\n        - source_labels: [__meta_kubernetes_pod_name]\n          target_label: pod\n        - source_labels: [__meta_kubernetes_service_name]\n          target_label: service\n      # Istio mesh\n      - job_name: istio-mesh\n        scrape_interval: 5s\n        kubernetes_sd_configs:\n        - role: endpoints\n        relabel_configs:\n        # Scrape only the the targets matching the following metadata\n        - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]\n          action: keep\n          regex: istio-system;istio-telemetry;prometheus\n        # Rename metadata labels to be reader friendly\n        - source_labels: [__meta_kubernetes_namespace]\n          target_label: namespace\n        - source_labels: [__meta_kubernetes_pod_name]\n          target_label: pod\n        - source_labels: [__meta_kubernetes_service_name]\n          target_label: service\n      - job_name: istio-policy\n        scrape_interval: 5s\n        kubernetes_sd_configs:\n        - role: endpoints\n        relabel_configs:\n        # Scrape only the the targets matching the following metadata\n        - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]\n          action: keep\n          regex: istio-system;istio-policy;http-monitoring\n        # Rename metadata labels to be reader friendly\n        - source_labels: [__meta_kubernetes_namespace]\n          target_label: namespace\n        - source_labels: [__meta_kubernetes_pod_name]\n          target_label: pod\n        - source_labels: [__meta_kubernetes_service_name]\n          target_label: service\n      # Istio telemetry\n      - job_name: istio-telemetry\n        scrape_interval: 5s\n        kubernetes_sd_configs:\n        - role: endpoints\n        relabel_configs:\n        # Scrape only the the targets matching the following metadata\n        - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]\n          action: keep\n          regex: istio-system;istio-telemetry;http-monitoring\n        # Rename metadata labels to be reader friendly\n        - source_labels: [__meta_kubernetes_namespace]\n          target_label: namespace\n        - source_labels: [__meta_kubernetes_pod_name]\n          target_label: pod\n        - source_labels: [__meta_kubernetes_service_name]\n          target_label: service\n      # Istio pilot\n      - job_name: istio-pilot\n        scrape_interval: 5s\n        kubernetes_sd_configs:\n        - role: endpoints\n        relabel_configs:\n        # Scrape only the the targets matching the following metadata\n        - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]\n          action: keep\n          regex: istio-system;istio-pilot;http-monitoring\n        # Rename metadata labels to be reader friendly\n        - source_labels: [__meta_kubernetes_namespace]\n          target_label: namespace\n        - source_labels: [__meta_kubernetes_pod_name]\n          target_label: pod\n        - source_labels: [__meta_kubernetes_service_name]\n          target_label: service\n\n')),Object(l.b)("h2",{id:"node-pages"},"node pages"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"image: node\n\nbefore_script:\n  - npm install\n\ncache:\n  paths:\n    - node_modules/\n\npages:\n  script:\n    - npm run generate\n  artifacts:\n    paths:\n      - public\n  only:\n    - master\n")))}b.isMDXComponent=!0},661:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return _}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),m=b(n),u=a,_=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return n?r.a.createElement(_,i(i({ref:t},o),{},{components:n})):r.a.createElement(_,i({ref:t},o))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);