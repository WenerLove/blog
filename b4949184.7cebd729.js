(window.webpackJsonp=window.webpackJsonp||[]).push([[686],{1021:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},759:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(1021)),c={title:"athens"},i={unversionedId:"service/repository/athens",id:"service/repository/athens",isDocsHomePage:!1,title:"athens",description:"- Golang Module Proxy",source:"@site/notes/service/repository/athens.md",slug:"/service/repository/athens",permalink:"/notes/service/repository/athens",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/repository/athens.md",version:"current",sidebar:"docs",previous:{title:"PowerDNS",permalink:"/notes/service/dns/powerdns"},next:{title:"Nexus",permalink:"/notes/service/repository/nexus"}},l=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Golang Module Proxy"),Object(a.b)("li",{parentName:"ul"},"\u652f\u6301 disk, mongo, gcs, s3, minio, \u5916\u90e8\u5b58\u50a8")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528\u672c\u5730\u78c1\u76d8\u5b58\u50a8\ndocker run -d --restart always \\\n  -v $PWD/data:/var/lib/athens \\\n  -e ATHENS_DISK_STORAGE_ROOT=/var/lib/athens \\\n  -e ATHENS_STORAGE_TYPE=disk \\\n  -p 3000:3000 \\\n  --name athens-proxy \\\n  gomods/athens:latest\n")),Object(a.b)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/gomods/athens/blob/main/config.dev.toml"},"config.dev.toml"))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-toml"},'# \u907f\u514d CHECKSUM \u53d1\u9001\u5230\u4e0a\u6e38\n# ATHENS_GONOSUM_PATTERNS="github.com/mycompany/*,github.com/secret/*"\n# \u907f\u514d go sum \u5931\u8d25\n# export GONOSUMDB="github.com/mycompany/*,github.com/secret/*"\nNoSumPatterns = ["github.com/mycompany/*", "github.com/secret/*"]\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u4e0b\u8f7d\u6a21\u5f0f\u914d\u7f6e\u6587\u4ef6")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u4f7f\u7528\u4e0b\u8f7d\u6a21\u5f0f\u914d\u7f6e\u6587\u4ef6",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"\u901a\u8fc7 config.toml DownloadMode \u6307\u5b9a"),Object(a.b)("li",{parentName:"ul"},"\u901a\u8fc7 ATHENS_DOWNLOAD_MODE \u6307\u5b9a"),Object(a.b)("li",{parentName:"ul"},"file:$FILE_PATH - \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84"),Object(a.b)("li",{parentName:"ul"},"custom:$BASE_64 - inline \u914d\u7f6e"))),Object(a.b)("li",{parentName:"ul"},"sync - \u9ed8\u8ba4\u6a21\u5f0f - go mod download - \u4e0b\u8f7d\u5b8c\u6210\u8fd4\u56de"),Object(a.b)("li",{parentName:"ul"},"async - \u8fd4\u56de 404 \u5f02\u6b65\u4e0b\u8f7d"),Object(a.b)("li",{parentName:"ul"},"none - \u8fd4\u56de 404 - \u53ef\u7528\u4e8e\u8bbf\u95ee\u63a7\u5236"),Object(a.b)("li",{parentName:"ul"},"redirect - \u91cd\u5b9a\u5411\u5230\u4e0a\u6e38 - \u53ef\u51cf\u8f7b\u5b58\u50a8\u538b\u529b"),Object(a.b)("li",{parentName:"ul"},"async_redirect - \u91cd\u5b9a\u5411\u5230\u4e0a\u6e38\u4e14\u5f00\u59cb\u5f02\u6b65\u4e0b\u8f7d")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-hcl"},'# \u4e0a\u6e38\u5730\u5740\ndownloadURL = "https://proxy.golang.org"\n\nmode = "async_redirect"\n\ndownload "github.com/gomods/*" {\n    mode = "sync"\n}\n\ndownload "golang.org/x/*" {\n    mode = "none"\n}\n\ndownload "github.com/pkg/*" {\n    mode = "redirect"\n    downloadURL = "https://gocenter.io"\n}\n')))}u.isMDXComponent=!0}}]);