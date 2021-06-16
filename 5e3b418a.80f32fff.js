(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(g,b(b({ref:t},o),{},{components:n})):r.a.createElement(g,b({ref:t},o))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<i;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},448:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(8),i=(n(0),n(1083)),l={id:"gitlab-cicd",title:"GitaLab\u6301\u7eed\u96c6\u6210\u6301\u7eed\u4ea4\u4ed8"},b={unversionedId:"service/forge/gitlab/gitlab-cicd",id:"service/forge/gitlab/gitlab-cicd",isDocsHomePage:!1,title:"GitaLab\u6301\u7eed\u96c6\u6210\u6301\u7eed\u4ea4\u4ed8",description:"Gitlab CI/CD",source:"@site/notes/service/forge/gitlab/gitlab-cicd.md",slug:"/service/forge/gitlab/gitlab-cicd",permalink:"/notes/service/forge/gitlab/gitlab-cicd",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/forge/gitlab/gitlab-cicd.md",version:"current",sidebar:"docs",previous:{title:"gitlab-ci.yml",permalink:"/notes/service/forge/gitlab/gitlab-ci-yml"},next:{title:"GitLab\u914d\u7f6e",permalink:"/notes/service/forge/gitlab/gitlab-config"}},c=[{value:"Tips",id:"tips",children:[]},{value:"serverless",id:"serverless",children:[{value:"echo-js example",id:"echo-js-example",children:[]}]},{value:"gitlabktl",id:"gitlabktl",children:[]},{value:"Auto DevOps",id:"auto-devops",children:[]}],o={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"gitlab-cicd"},"Gitlab CI/CD"),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},".gitlab-ci.yml"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u5e94\u7528\u6784\u5efa\u5b9a\u4e49"),Object(i.b)("li",{parentName:"ul"},"K8S Runner \u4e0b\u4f7f\u7528 Kaniko \u6784\u5efa\u955c\u50cf"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528 ",Object(i.b)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlabktl"},"gitlabktl")," \u90e8\u7f72\u670d\u52a1\u548c\u5e94\u7528\u5230 knative"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"serverless.yml"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65e0\u670d\u52a1\u51fd\u6570 - \u9700\u8981 Knative"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u90e8\u7f72 ",Object(i.b)("em",{parentName:"li"},"\u51fd\u6570")),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u751f\u6210 Dockerfile"),Object(i.b)("li",{parentName:"ul"},"Gitlab ",Object(i.b)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/serverless/runtimes"},"\u8fd0\u884c\u65f6")," \u652f\u6301 go ruby nodejs Dockerfile"),Object(i.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 OpenFaaS \u7684\u8fd0\u884c\u65f6"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Dockerfile"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u65e0\u670d\u52a1\u5e94\u7528"),Object(i.b)("li",{parentName:"ul"},"\u5b9a\u4e49\u5e94\u7528\u6784\u5efa\u65b9\u5f0f\u3001\u5e94\u7528\u8fd0\u884c\u65f6"),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u9700\u8981\u66b4\u9732 8080"))),Object(i.b)("li",{parentName:"ul"},"\u6ce8\u610f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u6784\u5efa\u7684\u5e94\u7528\u955c\u50cf\u9700\u8981 PUSH \u5230\u4ed3\u5e93 - \u56e0\u6b64\u9700\u8981\u914d\u7f6e\u4ed3\u5e93\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlab/-/issues/21619"},"#21619")," - \u5982\u679c\u955c\u50cf\u4e0d\u662f latest \u6807\u7b7e\u4e0d\u4f1a\u6bcf\u6b21\u62c9"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/ci/variables"},"CI \u53d8\u91cf\u8bf4\u660e")),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://about.gitlab.com/devops-tools/sonatype-nexus-repo-vs-gitlab.html"},"Gitlab \u4ed3\u5e93 vs Nexus"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Nexus \u4f1a\u66f4\u597d"),Object(i.b)("li",{parentName:"ul"},"Gitlab \u53ea\u6709 Docker \u4ed3\u5e93\u662f\u514d\u8d39\u4f7f\u7528\u7684"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://blog.sonatype.com/how-to-use-gitlab-ci-with-nexus"},"Gitlab CI \u4e2d\u4f7f\u7528 Nexus"))))),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"\u53d8\u91cf\u4e0d\u80fd\u5305\u542b\u7f8e\u5143\u7b26 ",Object(i.b)("inlineCode",{parentName:"li"},"$")," ",Object(i.b)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlab/-/issues/16442"},"#16442"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4f1a\u88ab\u5c55\u5f00 - \u76f4\u63a5\u5199 ",Object(i.b)("inlineCode",{parentName:"li"},"$$"))))))),Object(i.b)("h2",{id:"serverless"},"serverless"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"[knative-examplesknative-examples)")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'# \u67e5\u770b\u90e8\u7f72\u7684\u51fd\u6570\u670d\u52a1\nkubectl -n "$KUBE_NAMESPACE" get services.serving.knative.dev\n\n# \u8bf7\u6c42\ncurl \\\n--header "Content-Type: application/json" \\\n--request POST \\\n--data \'{"GitLab":"FaaS"}\' \\\nhttp://functions-echo.functions-1.functions.example.com/\n\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OpenFaaS \u8fd0\u884c\u65f6")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"hello:\n  source: ./hello\n  runtime: openfaas/classic/ruby\n  description: 'Ruby function using OpenFaaS classic runtime'\n")),Object(i.b)("h3",{id:"echo-js-example"},"echo-js example"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},".gitlab.yml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"include:\n  # \u6a21\u677f\u7ee7\u627f\n  template: Serverless.gitlab-ci.yml\n\nfunctions:build:\n  extends: .serverless:build:functions\n  # \u8bbe\u7f6e\u73af\u5883\u4fe1\u606f\n  environment: production\n\nfunctions:deploy:\n  extends: .serverless:deploy:functions\n  environment: production\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"serverless.yml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# \u670d\u52a1\u540d\u5b57\nservice: functions\n# \u670d\u52a1\u63cf\u8ff0\ndescription: 'GitLab Serverless functions using Knative'\n\nprovider:\n  # \u6267\u884c serverless.yml \u7684 provider\n  name: triggermesh\n  # \u73af\u5883\u53d8\u91cf\n  environment:\n    FOO: value\n\nfunctions:\n  echo-js:\n    # \u51fd\u6570\u540d\u5b57\n    handler: echo-js\n    # \u76ee\u5f55\n    source: ./echo-js\n    # \u8fd0\u884c\u65f6 - \u53ef\u9009 - \u53ef\u4ee5\u5728 source \u4e0b\u5b9a\u4e49 Dockerfile\n    runtime: https://gitlab.com/gitlab-org/serverless/runtimes/nodejs\n    # \u51fd\u6570\u63cf\u8ff0\n    description: 'node.js runtime function'\n    # \u73af\u5883\u53d8\u91cf\n    environment:\n      MY_FUNCTION: echo-js\n")),Object(i.b)("h2",{id:"gitlabktl"},"gitlabktl"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlabktl"},"GitLab Knative tool"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u65e0\u6cd5\u76f4\u63a5 build \u53ef\u4ee5\u4f7f\u7528\u955c\u50cf\ndocker pull registry.gitlab.com/gitlab-org/gitlabktl\n# \u4f5c\u4e3a\u547d\u4ee4\u4f7f\u7528\ngitlabktl(){ docker run --rm -it ${OPT} -v $PWD:/host -w /host registry.gitlab.com/gitlab-org/gitlabktl gitlabktl $*;}\n# \u6784\u5efa\n# \u9700\u8981\u955c\u50cf\u73af\u5883 CI_REGISTRY CI_REGISTRY_USER CI_REGISTRY_PASSWORD\ngitlabktl serverless build\n# \u4f1a\u5728\u76ee\u5f55\u4e0b\u751f\u6210 Dockerfile\n# \u4f1a\u5f80 registry-internal.wener.me/demo/\u51fd\u6570\u540d \u63a8\u9001\u955c\u50cf\nOPT=\"-e CI_REGISTRY=registry.wener.me -e CI_REGISTRY_USER='' -e CI_REGISTRY_PASSWORD='' -e CI_REGISTRY_IMAGE=registry-internal.wener.me/demo \" gitlabktl serverless build\n# \u8fd0\u884c\u521a\u624d\u63a8\u9001\u7684\u4ed3\u5e93 - \u4f7f\u7528\u7684 functions-echo-js\ndocker run -it --rm -p 8080:8080 registry-internal.incos.dev/demo/functions-echo-js\n")),Object(i.b)("h2",{id:"auto-devops"},"Auto DevOps"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Auto CI/CD \u4f7f\u7528\u7c7b\u4f3c heroku \u7684 buildpack"),Object(i.b)("li",{parentName:"ul"},"\u6784\u5efa\u5b8c\u6210\u540e\u4f1a\u521b\u5efa\u955c\u50cf\u5b58\u5165\u4ed3\u5e93 - \u57fa\u7840\u955c\u50cf ",Object(i.b)("a",{parentName:"li",href:"https://github.com/gliderlabs/herokuish"},"gliderlabs/herokuish")),Object(i.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6709\u4e09\u4e2a\u6b65\u9aa4 build test deploy - \u9ed8\u8ba4 test \u5305\u542b code_quality \u548c test"),Object(i.b)("li",{parentName:"ul"},"code_quality \u4f1a\u4f7f\u7528 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/codeclimate/codeclimate"},"https://github.com/codeclimate/codeclimate")),Object(i.b)("li",{parentName:"ul"},"build \u4f7f\u7528\u5171\u4eab runner - \u4f1a\u6bd4\u8f83\u6162"),Object(i.b)("li",{parentName:"ul"},"\u76f8\u8f83\u4e8e\u4e13\u95e8\u9879\u76ee\u7684 deploy - \u4f8b\u5982 now - \u4f1a\u6162\u5f88\u591a\uff0c 10 \u5206\u949f \u548c 1 \u5206\u949f\u7684\u533a\u522b"),Object(i.b)("li",{parentName:"ul"},"\u8ba1\u5212\u652f\u6301 cron - \u53ef\u4ee5\u5f53\u4f5c\u4e00\u4e2a webcron \u6765\u4f7f\u7528"),Object(i.b)("li",{parentName:"ul"},"\u5b9e\u9645\u64cd\u4f5c\u5185\u5bb9\u5b9a\u4e49\u5728 ",Object(i.b)("a",{parentName:"li",href:"https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Auto-DevOps.gitlab-ci.yml"},"Auto-DevOps.gitlab-ci.yml"))))}s.isMDXComponent=!0}}]);