(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{401:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(7),b=(a(0),a(586)),l={id:"quarkus",title:"Quarkus"},c={unversionedId:"java/library/quarkus",id:"java/library/quarkus",isDocsHomePage:!1,title:"Quarkus",description:"Quarkus",source:"@site/notes/java/library/quarkus.md",slug:"/java/library/quarkus",permalink:"/notes/java/library/quarkus",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/library/quarkus.md",version:"current",sidebar:"docs",previous:{title:"Hibernate Enver",permalink:"/notes/java/library/hibernate-enver"},next:{title:"Guava",permalink:"/notes/java/library/guava"}},u=[{value:"Tips",id:"tips",children:[]},{value:"quarkus-maven-plugin",id:"quarkus-maven-plugin",children:[]}],i={rightToc:u};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"quarkus"},"Quarkus"),Object(b.b)("h2",{id:"tips"},"Tips"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://quarkus.io/"}),"Quarkus")," - Kubernetes Native Java stack tailored for GraalVM & OpenJDK HotSpot"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://code.quarkus.io/"}),"code.quarkus.io")," \u9879\u76ee\u751f\u6210\uff0c\u7c7b\u4f3c\u4e8e spring \u7684 start"),Object(b.b)("li",{parentName:"ul"},"RedHat \u56e2\u961f - \u4f9d\u8d56\u7684\u4e3b\u8981\u662f RH \u76f8\u5173\u7684\u4e2d\u95f4\u4ef6"),Object(b.b)("li",{parentName:"ul"},"\u4e3b\u8981\u4f18\u52bf",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5feb\u901f\u542f\u52a8"),Object(b.b)("li",{parentName:"ul"},"\u5185\u5b58\u5360\u7528\u5c11"),Object(b.b)("li",{parentName:"ul"},"quarkus-maven-plugin \u5bf9\u5f00\u53d1\u53cb\u597d"),Object(b.b)("li",{parentName:"ul"},"cdi+resteasy = 20mb \u4e8c\u8fdb\u5236"))),Object(b.b)("li",{parentName:"ul"},"\u4e3b\u8981\u4f9d\u8d56",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"quarkus arc - CDI",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u975e\u53cd\u5c04 - \u56e0\u4e3a Graalvm \u4e0d\u652f\u6301\u5927\u90e8\u5206\u53cd\u5c04"),Object(b.b)("li",{parentName:"ul"},"\u5728\u90e8\u7f72\u65f6\u751f\u6210\u5143\u6570\u636e\u7c7b",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"META-INF/jandex.idx"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"*.zig")," - Jvm IR"),Object(b.b)("li",{parentName:"ul"},"quarkus.index-dependency \u914d\u7f6e\u9879"))))),Object(b.b)("li",{parentName:"ul"},"Substrate VM"),Object(b.b)("li",{parentName:"ul"},"undertow - \u9ed8\u8ba4 servlet \u5bb9\u5668"),Object(b.b)("li",{parentName:"ul"},"resteasy - jaxrs \u5b9e\u73b0"),Object(b.b)("li",{parentName:"ul"},"quarkus-hibernate-orm-panache - \u7c7b\u4f3c\u4e8e ActiveRecord \u7684\u6269\u5c55"),Object(b.b)("li",{parentName:"ul"},"MicroProfile - \u5fae\u670d\u52a1\u76f8\u5173\u80fd\u529b")))),Object(b.b)("h2",{id:"quarkus-maven-plugin"},"quarkus-maven-plugin"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u547d\u4ee4"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:add-extension"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6dfb\u52a0\u6269\u5c55")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:add-extensions"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6dfb\u52a0\u6269\u5c55")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:analyze-call-tree"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5206\u6790\u8c03\u7528\u6811")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:build"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6784\u5efa")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:create"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u521b\u5efa\u9879\u76ee\uff0c\u751f\u6210\u6587\u4ef6")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:create-extension"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u521b\u5efa\u6269\u5c55")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:dev"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u542f\u52a8\u5f00\u53d1\u670d\u52a1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:generate-config"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u751f\u6210\u793a\u4f8b\u914d\u7f6e")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:help"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u5e2e\u52a9")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:list-extensions"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u67e5\u770b\u6269\u5c55")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:native-image"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6784\u5efa\u672c\u5730\u955c\u50cf")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"mvn quarkus:remote-dev"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8fdc\u7a0b\u5f00\u53d1")))),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'# \u542f\u52a8\u5f00\u53d1\u670d\u52a1\nmvn compile quarkus:dev\n\n# \u6784\u5efa native \u955c\u50cf\nmvn package -Pnative\n# \u5982\u679c\u6ca1\u6709\u8bbe\u7f6e GRAALVM_HOME \u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e\nGRAALVM_HOME=~/jdk/graalvm/Contents/Home/ mvn package -Pnative\n# \u5982\u679c\u5931\u8d25\uff0c\u5c1d\u8bd5\u5b89\u88c5 native-image\n\n\n# \u521b\u5efa\u9879\u76ee\nmvn io.quarkus:quarkus-maven-plugin:0.22.0:create \\\n    -DprojectGroupId=org.acme \\\n    -DprojectArtifactId=application-lifecycle-events \\\n    -DclassName="org.acme.events.GreetingResource" \\\n    -Dpath="/hello"\n')))}p.isMDXComponent=!0},586:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),o=p(a),O=r,j=o["".concat(l,".").concat(O)]||o[O]||m[O]||b;return a?n.a.createElement(j,c(c({ref:t},i),{},{components:a})):n.a.createElement(j,c({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,l=new Array(b);l[0]=O;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);