(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1083:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=n.a.createContext({}),p=function(e){var t=n.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return n.a.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,s=u["".concat(b,".").concat(h)]||u[h]||o[h]||l;return a?n.a.createElement(s,c(c({ref:t},m),{},{components:a})):n.a.createElement(s,c({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,b[1]=c;for(var m=2;m<l;m++)b[m]=a[m];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(8),l=(a(0),a(1083)),b={id:"helm",title:"HELM \u5305\u7ba1\u7406\u5668"},c={unversionedId:"devops/kubernetes/app/helm",id:"devops/kubernetes/app/helm",isDocsHomePage:!1,title:"HELM \u5305\u7ba1\u7406\u5668",description:"Helm",source:"@site/notes/devops/kubernetes/app/helm.md",slug:"/devops/kubernetes/app/helm",permalink:"/notes/devops/kubernetes/app/helm",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/helm.md",version:"current",sidebar:"docs",previous:{title:"Harbor",permalink:"/notes/devops/kubernetes/app/harbor"},next:{title:"HELM2 - \u4e0d\u63a8\u8350",permalink:"/notes/devops/kubernetes/app/helm2"}},i=[{value:"\u8def\u5f84",id:"\u8def\u5f84",children:[]},{value:"\u5e38\u7528\u4ed3\u5e93",id:"\u5e38\u7528\u4ed3\u5e93",children:[]},{value:"\u4ed3\u5e93",id:"\u4ed3\u5e93",children:[{value:"local",id:"local",children:[]},{value:"chartmuseum",id:"chartmuseum",children:[]},{value:"registry",id:"registry",children:[]},{value:"repo",id:"repo",children:[]}]},{value:"Helm \u6a21\u677f",id:"helm-\u6a21\u677f",children:[]},{value:"Helm Operator",id:"helm-operator",children:[]},{value:"oci registry vs chart repository",id:"oci-registry-vs-chart-repository",children:[]}],m={toc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"helm"},"Helm"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Kubernetes \u4e0a\u7684\u5305\u7ba1\u7406\u5668"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://helm.sh/"},"helm.sh"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm"},"\u73af\u5883\u53d8\u91cf\u5217\u8868")))),Object(l.b)("li",{parentName:"ul"},"nexus \u53ef\u901a\u8fc7\u63d2\u4ef6\u652f\u6301 helm ",Object(l.b)("a",{parentName:"li",href:"https://github.com/sonatype-nexus-community/nexus-repository-helm"},"sonatype-nexus-community/nexus-repository-helm")),Object(l.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"3.0 \u8fc7\u540e\u6ca1\u6709 tiller \u4e86"),Object(l.b)("li",{parentName:"ul"},"HELM \u53ef\u4ee5\u5355\u7eaf\u7684\u4f5c\u4e3a\u6a21\u677f\u5f15\u64ce\u6765\u4f7f\u7528 - \u4f46\u662f\u5931\u53bb\u4e86 helm \u7ba1\u7406\u6ce8\u518c\u5e94\u7528\u7684\u80fd\u529b",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u7528\u4f5c\u6a21\u677f\u5f15\u64ce\uff0c\u90a3\u8fd8\u53ef\u4ee5\u9009\u62e9 Kustomize, k8comp, kdeploy, ktmpl, kuku, jinja, sed, awk, gotpl"),Object(l.b)("li",{parentName:"ul"},"\u5931\u53bb\u7684\u80fd\u529b\uff1a \u6e05\u5355\u5206\u7ec4\u3001\u5e94\u7528\u6216\u5305\u4f9d\u8d56\u3001\u67e5\u770b\u96c6\u7fa4\u5b89\u88c5\u5e94\u7528\u3001\u6ce8\u518c\u5e94\u7528\u3001\u5e94\u7528\u7248\u672c\u56de\u6eda"))),Object(l.b)("li",{parentName:"ul"},"\u4ed3\u5e93\u4e0d\u662f\u5fc5\u8981\u7684\uff0c\u4e00\u4e2a helm charts \u5c31\u662f\u4e00\u4e2a tgz"),Object(l.b)("li",{parentName:"ul"},"\u76f8\u540c\u7248\u672c\u53ef\u91cd\u590d\u5b89\u88c5\uff0crevision \u4f1a\u6709\u53d8\u5316\uff0c\u672c\u5730\u5f00\u53d1\u65f6\u7ecf\u5e38\u8fd9\u6837"))),Object(l.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://jfrog.com/blog/helm-charts-best-practices/"},"Helm Charts Best Practices")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://codefresh.io/docs/docs/new-helm/helm-best-practices/"},"HELM Best practices")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://helm.sh/docs/topics/charts/#the-chartyaml-file"},"Chart.yaml"))))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"brew install helm\n\n# \u5ba2\u6237\u7aef\u7248\u672c\nhelm version\n\nhelm repo add stable http://mirror.azure.cn/kubernetes/charts/\nhelm search repo stable\n\nhelm show values stable/nextcloud\nhelm pull stable/nextcloud\nhelm pull stable/nextcloud --untar\n")),Object(l.b)("h2",{id:"\u8def\u5f84"},"\u8def\u5f84"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u7cfb\u7edf"),Object(l.b)("th",{parentName:"tr",align:null},"\u7f13\u5b58"),Object(l.b)("th",{parentName:"tr",align:null},"\u914d\u7f6e"),Object(l.b)("th",{parentName:"tr",align:null},"\u6570\u636e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Linux"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$HOME/.cache/helm")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$HOME/.config/helm")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$HOME/.local/share/helm"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"macOS"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$HOME/Library/Caches/helm")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$HOME/Library/Preferences/helm")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$HOME/Library/helm"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Windows"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%TEMP%\\helm")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%APPDATA%\\helm")),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%APPDATA%\\helm"))))),Object(l.b)("h2",{id:"\u5e38\u7528\u4ed3\u5e93"},"\u5e38\u7528\u4ed3\u5e93"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"NAME"),Object(l.b)("th",{parentName:"tr",align:null},"URL"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"wener",Object(l.b)("br",null),"offcial collection"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://wenerme.github.io/charts"},"https://wenerme.github.io/charts"),Object(l.b)("br",null),Object(l.b)("a",{parentName:"td",href:"https://charts.wener.tech/"},"https://charts.wener.tech/"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"traefik"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://containous.github.io/traefik-helm-chart"},"https://containous.github.io/traefik-helm-chart"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jetstack"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://charts.jetstack.io"},"https://charts.jetstack.io"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"hashicorp"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://helm.releases.hashicorp.com"},"https://helm.releases.hashicorp.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"harbor"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://helm.goharbor.io"},"https://helm.goharbor.io"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Deprecaed"),Object(l.b)("td",{parentName:"tr",align:null},"\u26a0\ufe0f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"stable"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://kubernetes-charts.storage.googleapis.com/"},"https://kubernetes-charts.storage.googleapis.com/"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"incubator"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://kubernetes-charts-incubator.storage.googleapis.com"},"https://kubernetes-charts-incubator.storage.googleapis.com"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"stable",Object(l.b)("br",null),"azure mirror"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"http://mirror.azure.cn/kubernetes/charts/"},"http://mirror.azure.cn/kubernetes/charts/"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"incubator",Object(l.b)("br",null),"azure mirror"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"http://mirror.azure.cn/kubernetes/charts-incubator/"},"http://mirror.azure.cn/kubernetes/charts-incubator/"))))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/bitnami/charts"},"bitnami/charts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/banzaicloud/banzai-charts"},"banzaicloud/banzai-charts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/helm/charts"},"helm/charts"))),Object(l.b)("h2",{id:"\u4ed3\u5e93"},"\u4ed3\u5e93"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://helm.sh/docs/topics/chart_repository"},"The Chart Repository Guide"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"HTTP"),Object(l.b)("li",{parentName:"ul"},"\u63d0\u4f9b index.yaml \u8bbf\u95ee"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/helm/chartmuseum"},"helm/chartmuseum"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Golang chart \u4ed3\u5e93"),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u8f83\u591a\u540e\u7aef - \u4e3b\u8981\u7684\u6709",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"S3"),Object(l.b)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 OSS"),Object(l.b)("li",{parentName:"ul"},"Minio"))),Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u4e0a\u4f20"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/helm/chartmuseum#basic-auth"},"\u652f\u6301\u8ba4\u8bc1")))),Object(l.b)("li",{parentName:"ul"},"Helm \u652f\u6301 ",Object(l.b)("a",{parentName:"li",href:"https://helm.sh/docs/topics/registries/"},"Registry")," \u6765\u5b58\u50a8 charts",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u63a8\u9001\u9047\u5230\u95ee\u9898 - insufficient_scope: authorization failed ",Object(l.b)("a",{parentName:"li",href:"https://github.com/helm/helm/issues/6214"},"#6214")),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u80fd\u63a8\u9001\u5230 docker hub ",Object(l.b)("a",{parentName:"li",href:"https://github.com/helm/helm/issues/5861"},"#5861"))))),Object(l.b)("h3",{id:"local"},"local"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"helm repo reindex local-repo\n")),Object(l.b)("h3",{id:"chartmuseum"},"chartmuseum"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u672c\u5730\u5b58\u50a8\ndocker run --rm -it \\\n  -p 8080:8080 \\\n  -e DEBUG=1 \\\n  -e STORAGE=local \\\n  -e STORAGE_LOCAL_ROOTDIR=/charts \\\n  -v $(pwd)/charts:/charts \\\n  --name chartmuseum chartmuseum/chartmuseum:latest\n\n# UI\n# https://github.com/chartmuseum/ui\ndocker run --rm -it \\\n  -p 80:8080 \\\n  -e CHART_MUSESUM_URL: http://chartmuseum:8080 \\\n  --link chartmuseum:chartmuseum \\\n  --name chartmuseumui idobry/chartmuseumui:latest\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'# Aliyun OSS\n# ALIBABA_CLOUD_ACCESS_KEY_ID\n# ALIBABA_CLOUD_ACCESS_KEY_SECRET\nchartmuseum --debug --port=8080 \\\n  --storage="alibaba" \\\n  --storage-alibaba-bucket="my-oss-bucket" \\\n  --storage-alibaba-prefix="" \\\n  --storage-alibaba-endpoint="oss-cn-beijing.aliyuncs.com"\n')),Object(l.b)("h3",{id:"registry"},"registry"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"export HELM_EXPERIMENTAL_OCI=1\n\nhelm registry login -u myuser index.docker.io\nhelm chart save alpinelinux/ index.docker.io/v1/wcharts/alpinelinux:0.1.0\nhelm chart list\n# \u4f1a\u5bfc\u51fa\u5230 alpinelinux/\nhelm chart export index.docker.io/v1/wcharts/alpinelinux:0.1.0\n\n# \u63a8\u9001\u5230\u670d\u52a1\u5668\nhelm chart push index.docker.io/v1/wcharts/alpinelinux:0.1.0\nhelm chart pull index.docker.io/v1/wcharts/alpinelinux:0.1.0\n")),Object(l.b)("h3",{id:"repo"},"repo"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"helm repo add --username=admin myrepo https://xx.xx.xx.xx\n# helm plugin install https://github.com/chartmuseum/helm-push\nhelm push hello-helm-0.1.0.tgz myrepo\n")),Object(l.b)("h2",{id:"helm-\u6a21\u677f"},"Helm \u6a21\u677f"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://pkg.go.dev/text/template"},"https://pkg.go.dev/text/template")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://masterminds.github.io/sprig/"},"https://masterminds.github.io/sprig/"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# https://helm.sh/docs/chart_template_guide/\nhelm install --debug --dry-run goodly-guppy ./mychart\n\n# \u6e32\u67d3\u5355\u4e2a\u6a21\u677f - \u7528\u4e8e\u6d4b\u8bd5\u6392\u67e5\u95ee\u9898\nhelm template ./mychart --show-only templates/values.yaml > values.yaml\n# \u6e32\u67d3\u6574\u4e2a chart\nhelm template ./mychart\n")),Object(l.b)("h2",{id:"helm-operator"},"Helm Operator"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/fluxcd/helm-operator"},"fluxcd/helm-operator"))),Object(l.b)("h1",{id:"faq"},"FAQ"),Object(l.b)("h2",{id:"oci-registry-vs-chart-repository"},"oci registry vs chart repository"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"OCI",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b9e\u9a8c\u9636\u6bb5"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u76f4\u63a5\u4f7f\u7528\u73b0\u6709 Docker \u4ed3\u5e93\u57fa\u7840\u8bbe\u65bd"),Object(l.b)("li",{parentName:"ul"},"\u4ed3\u5e93\u65b9\u53ef\u80fd\u5bf9 chart \u652f\u6301\u8fd8\u4e0d\u662f\u5f88\u597d - Chart \u5143\u4fe1\u606f\u53ef\u80fd\u5c55\u73b0\u4e0d\u5b8c\u5584"),Object(l.b)("li",{parentName:"ul"},"\u90e8\u5206\u4ed3\u5e93\u8fd8\u4e0d\u652f\u6301"),Object(l.b)("li",{parentName:"ul"},"Helm 3+"))),Object(l.b)("li",{parentName:"ul"},"Repo",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Helm 2+"),Object(l.b)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7406\u89e3 - HTTP \u9759\u6001\u6587\u4ef6\u670d\u52a1 - \u63d0\u4f9b index.yaml \u4f5c\u4e3a\u7d22\u5f15"),Object(l.b)("li",{parentName:"ul"},"\u73b0\u6709\u4ed3\u5e93\u529f\u80fd\u76f8\u5bf9\u5b8c\u5584")))))}p.isMDXComponent=!0}}]);