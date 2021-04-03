(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{410:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(8),a=(r(0),r(879)),s={title:"Argo Workflow"},i={unversionedId:"devops/kubernetes/app/argo-workflow",id:"devops/kubernetes/app/argo-workflow",isDocsHomePage:!1,title:"Argo Workflow",description:"* \u662f\u4ec0\u4e48\uff1f",source:"@site/notes/devops/kubernetes/app/argo-workflow.md",slug:"/devops/kubernetes/app/argo-workflow",permalink:"/notes/devops/kubernetes/app/argo-workflow",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/app/argo-workflow.md",version:"current",sidebar:"docs",previous:{title:"ArgoCD",permalink:"/notes/devops/kubernetes/app/argo-cd"},next:{title:"Cert Manager",permalink:"/notes/devops/kubernetes/app/cert-manager"}},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]},{value:"Workflow",id:"workflow",children:[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}]},{value:"failed to save outputs: Failed to establish pod watch: timed out waiting for the condition",id:"failed-to-save-outputs-failed-to-establish-pod-watch-timed-out-waiting-for-the-condition",children:[]},{value:"failed to save outputs: unexpected non 200 status code: 403, body: Forbidden (user=system:serviceaccount:argo:default, verb=get, resource=nodes, subresource=proxy)",id:"failed-to-save-outputs-unexpected-non-200-status-code-403-body-forbidden-usersystemserviceaccountargodefault-verbget-resourcenodes-subresourceproxy",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Cloud Native \u5de5\u4f5c\u6d41\u5f15\u64ce"),Object(a.b)("li",{parentName:"ul"},"CRD \u7ba1\u7406"),Object(a.b)("li",{parentName:"ul"},"\u6bcf\u4e2a\u6b65\u9aa4\u90fd\u662f\u5bb9\u5668"),Object(a.b)("li",{parentName:"ul"},"\u9002\u7528\u8ba1\u7b97\u5bc6\u96c6\u578b\u4efb\u52a1 - \u673a\u5668\u5b66\u4e60, \u6570\u636e\u5904\u7406"),Object(a.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e CI/CD \u573a\u666f"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-workflows"},"argoproj/argo-workflows")),Object(a.b)("li",{parentName:"ul"},"\b\u7528\u5230\u7684\u955c\u50cf",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"argoproj/argocli"),Object(a.b)("li",{parentName:"ul"},"argoproj/workflow-controller"),Object(a.b)("li",{parentName:"ul"},"argoproj/argoexec - executor"),Object(a.b)("li",{parentName:"ul"},"argoproj/argosay - \u6f14\u793a\u6d41\u7a0b\u4f7f\u7528\u7684\u955c\u50cf"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-workflows/workflow-executors/"},"workflow-executors"))),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("ul",{parentName:"div"},Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4 exector \u4e3a docker - \u4f1a\u6302\u8f7d /var/run/docker.sock",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u975e docker \u90e8\u7f72 kubernetes \u9700\u8981\u5207\u6362")))))),Object(a.b)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u65b9\u5f0f\n# install.yaml - \u96c6\u7fa4\u7eac\u5ea6\uff0c\u6240\u6709\u547d\u540d\u7a7a\u95f4\n# namespace-install.yaml - argo \u547d\u540d\u7a7a\u95f4\n# \u4f1a\u90e8\u7f72 argo-server \u548c workflow-controller\n# \u914d\u7f6e - workflow-controller-configmap\n# https://github.com/argoproj/argo-workflows/tree/stable/manifests\nkubectl create ns argo\nkubectl apply -n argo -f https://raw.githubusercontent.com/argoproj/argo-workflows/stable/manifests/namespace-install.yaml\n# \u9ed8\u8ba4\u4e0d\u9700\u8981 login - \u53ef\u4ee5\u81ea\u5df1\u6dfb\u52a0 sso \u6216\u8005\u8c03\u6574 authmode\n\n# \u547d\u4ee4\u884c\u5de5\u5177\nbrew install argo\n# \u83b7\u53d6\u767b\u9646 token\n# argo auth token\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: argo-ingress\n  namespace: argo\nspec:\n  rules:\n  - host: argo.example.com\n    http:\n      paths:\n      - backend:\n          service:\n            name: argo-server\n            port:\n              name: web\n        pathType: ImplementationSpecific\n\n")),Object(a.b)("h2",{id:"workflow"},"Workflow"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  name: delightful-rhino\n  labels:\n    example: 'true'\nspec:\n  arguments:\n    parameters:\n      - name: message\n        value: hello argo\n  entrypoint: argosay\n  templates:\n    - name: argosay\n      inputs:\n        parameters:\n          - name: message\n            value: '{{workflow.parameters.message}}'\n      container:\n        name: main\n        image: 'argoproj/argosay:v2'\n        command:\n          - /argosay\n        args:\n          - echo\n          - '{{inputs.parameters.message}}'\n  ttlStrategy:\n    secondsAfterCompletion: 300\n  podGC:\n    strategy: OnPodCompletion\n")),Object(a.b)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-workflows/workflow-controller-configmap.yaml"},"https://argoproj.github.io/argo-workflows/workflow-controller-configmap.yaml"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},"# containerRuntimeExecutor: docker\ncontainerRuntimeExecutor: kubelet\n\n\n# SSO Configuration for the Argo server.\n# You must also start argo server with `--auth-mode sso`.\n# https://argoproj.github.io/argo/argo-server-auth-mode/\nsso: |\n  # This is the root URL of the OIDC provider (required).\n  issuer: https://issuer.root.url/\n  # This is name of the secret and the key in it that contain OIDC client\n  # ID issued to the application by the provider (required).\n  clientId:\n    name: client-id-secret\n    key: client-id-key\n  # This is name of the secret and the key in it that contain OIDC client\n  # secret issued to the application by the provider (required).\n  clientSecret:\n    name: client-secret-secret\n    key: client-secret-key\n  # This is the redirect URL supplied to the provider (required). It must\n  # be in the form <argo-server-root-url>/oauth2/callback. It must be\n  # browser-accessible.\n  redirectUrl: https://argo-server/oauth2/callback\n  # Additional scopes to request. Typically needed for SSO RBAC. >= v2.12\n  scopes:\n    - groups\n    - email\n  # RBAC Config. >= v2.12\n  rbac:\n    enabled: false\n")),Object(a.b)("h1",{id:"faq"},"FAQ"),Object(a.b)("h2",{id:"failed-to-save-outputs-failed-to-establish-pod-watch-timed-out-waiting-for-the-condition"},"failed to save outputs: Failed to establish pod watch: timed out waiting for the condition"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"argo \u4f7f\u7528 ns \u4e0b\u7684 default ServiceAccount",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u4e00\u822c\u8be5 sa \u6ca1\u6709 watch pod \u7684\u6743\u9650")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# namespaced \u5b89\u88c5 - SA \u65e0\u6743\u9650\nkubectl auth can-i get pod --as=system:serviceaccount:argo:default\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u6700\u5c0f\u6743\u9650")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: workflow-role\nrules:\n# pod get/watch is used to identify the container IDs of the current pod\n# pod patch is used to annotate the step\'s outputs back to controller (e.g. artifact location)\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  verbs:\n  - get\n  - watch\n  - patch\n# logs get/watch are used to get the pods logs for script outputs, and for log archival\n- apiGroups:\n  - ""\n  resources:\n  - pods/log\n  verbs:\n  - get\n  - watch\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\b\u53c2\u8003",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-workflows/issues/2522"},"https://github.com/argoproj/argo-workflows/issues/2522")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/argoproj/argo-workflows/blob/master/docs/workflow-rbac.md"},"https://github.com/argoproj/argo-workflows/blob/master/docs/workflow-rbac.md"))))),Object(a.b)("h2",{id:"failed-to-save-outputs-unexpected-non-200-status-code-403-body-forbidden-usersystemserviceaccountargodefault-verbget-resourcenodes-subresourceproxy"},"failed to save outputs: unexpected non 200 status code: 403, body: Forbidden (user=system:serviceaccount:argo:default, verb=get, resource=nodes, subresource=proxy)"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"nodes/proxy")," \u6743\u9650\u4e0d\u8db3\uff0c\u8be5\u8d44\u6e90\u662f\u96c6\u7fa4\u8d44\u6e90"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: argo-executor\nrules:\n# pod get/watch is used to identify the container IDs of the current pod\n# pod patch is used to annotate the step\'s outputs back to controller (e.g. artifact location)\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  verbs:\n  - get\n  - watch\n  - patch\n# logs get/watch are used to get the pods logs for script outputs, and for log archival\n- apiGroups:\n  - ""\n  resources:\n  - pods/log\n  - nodes/proxy\n  verbs:\n  - get\n  - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: argo-executor\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: argo-executor\nsubjects:\n- kind: ServiceAccount\n  name: default\n  namespace: argo\n')))}p.isMDXComponent=!0},879:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);