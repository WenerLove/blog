(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{1021:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return s}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),j=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},o=function(e){var a=j(e.components);return r.a.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=j(t),u=n,s=o["".concat(b,".").concat(u)]||o[u]||m[u]||l;return t?r.a.createElement(s,i(i({ref:a},c),{},{components:t})):r.a.createElement(s,i({ref:a},c))}));function s(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,b=new Array(l);b[0]=u;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var c=2;c<l;c++)b[c]=t[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},571:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return b})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return j}));var n=t(3),r=t(8),l=(t(0),t(1021)),b={id:"java-11",title:"Java 11"},i={unversionedId:"java/version/java-11",id:"java/version/java-11",isDocsHomePage:!1,title:"Java 11",description:"Tips",source:"@site/notes/java/version/java-11.md",slug:"/java/version/java-11",permalink:"/notes/java/version/java-11",editUrl:"https://github.com/wenerme/wener/edit/master/notes/java/version/java-11.md",version:"current",sidebar:"docs",previous:{title:"Java 10",permalink:"/notes/java/version/java-10"},next:{title:"Java 6",permalink:"/notes/java/version/java-6"}},p=[{value:"Tips",id:"tips",children:[]},{value:"\u53d8\u5316",id:"\u53d8\u5316",children:[]},{value:"JEPs",id:"jeps",children:[]}],c={toc:p};function j(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"http://openjdk.java.net/projects/jdk/11/"},"JDK 11"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"2018-09-25")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u52a8\u6001 class \u6587\u4ef6\u5e38\u91cf")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Dynamic Class-File Constants\nEpsilon: A No-Op Garbage Collector\nRemove the Java EE and CORBA Modules\nHTTP Client\nLocal-Variable Syntax for Lambda Parameters")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u53c2\u8003"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://winterbe.com/posts/2018/08/29/migrate-maven-projects-to-java-11-jigsaw/"},"\u8fc1\u79fb Maven \u9879\u76ee\u5230 Java 11"))))),Object(l.b)("p",null,"It\u2019s time! Migrating to Java 11\n",Object(l.b)("a",{parentName:"p",href:"https://medium.com/criciumadev/5eb3868354f9"},"https://medium.com/criciumadev/5eb3868354f9")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://medium.com/criciumadev/create-a-cloud-native-image-using-java-modules-a670be616b29"},"https://medium.com/criciumadev/create-a-cloud-native-image-using-java-modules-a670be616b29")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"http://mvnrepository.com/artifact/org.openjfx"},"http://mvnrepository.com/artifact/org.openjfx")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.reddit.com/r/java/comments/7ukei4/best_tool_for_packaging_jar_file_as_desktop/"},"https://www.reddit.com/r/java/comments/7ukei4/best_tool_for_packaging_jar_file_as_desktop/"),"\n",Object(l.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/10/tools/javapackager.htm"},"https://docs.oracle.com/javase/10/tools/javapackager.htm")),Object(l.b)("p",null,"Remove javapackager sources from OpenJFX repo\n",Object(l.b)("a",{parentName:"p",href:"https://bugs.openjdk.java.net/browse/JDK-8203379"},"https://bugs.openjdk.java.net/browse/JDK-8203379")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/javafx-maven-plugin/javafx-maven-plugin"},"https://github.com/javafx-maven-plugin/javafx-maven-plugin")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://github.com/javafx-maven-plugin/javafx-maven-plugin/issues/287"},"https://github.com/javafx-maven-plugin/javafx-maven-plugin/issues/287")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://docs.oracle.com/javase/9/tools/jmod.htm"},"https://docs.oracle.com/javase/9/tools/jmod.htm")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://simply-how.com/getting-started-with-java-11"},"https://simply-how.com/getting-started-with-java-11")),Object(l.b)("h2",{id:"\u53d8\u5316"},"\u53d8\u5316"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u65b0\u589e ",Object(l.b)("inlineCode",{parentName:"li"},"Collection#toArray(IntFunction)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"-XX:+UseDynamicNumberOfCompilerThreads"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u52a8\u6001\u63a7\u5236\u7f16\u8bd1\u5668\u7ebf\u7a0b\u6570")))),Object(l.b)("h2",{id:"jeps"},"JEPs"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/181"},"181"),": Nest-Based Access Control",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u57fa\u4e8e\u5d4c\u5957\u7684\u6210\u5458\u8bbf\u95ee\u63a7\u5236"),Object(l.b)("li",{parentName:"ul"},"\u8be5\u8bbf\u95ee\u4e0a\u4e0b\u6587\u5141\u8bb8\u5d4c\u5957\u7684\u5185\u5bb9\u88ab\u7f16\u8bd1\u5230\u4e0d\u540c\u7684\u7c7b\u6587\u4ef6\uff0c\u5e76\u5141\u8bb8\u8bbf\u95ee\u5f7c\u6b64\u7684\u79c1\u6709\u6210\u5458"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a\u5f88\u591a\u8bed\u8a00\u90fd\u8fd0\u884c\u4e00\u4e2a\u6e90\u6587\u4ef6\u5305\u542b\u591a\u4e2a\u7c7b\uff0c\u5bfc\u81f4\u5f7c\u6b64\u6210\u5458\u8bbf\u95ee\u65f6\u9700\u8981\u751f\u6210\u5305\u7ea7\u522b\u7684\u8bbf\u95ee\u65b9\u6cd5"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/309"},"309"),": Dynamic Class-File Constants",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u52a8\u6001\u7c7b\u6587\u4ef6\u5e38\u91cf"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u6587\u4ef6\u6dfb\u52a0\u65b0\u7684\u5e38\u91cf\u6c60 CONSTANT_Dynamic"),Object(l.b)("li",{parentName:"ul"},"\u52a0\u8f7d CONSTANT_Dynamic \u4f1a\u4ee3\u7406\u5230\u4e00\u4e2a\u542f\u52a8\u65b9\u6cd5\u4e0a\uff0c\u7c7b\u4f3c\u4e8e invokedynamic \u8c03\u7528"),Object(l.b)("li",{parentName:"ul"},"\u7b80\u5316\u521b\u5efa\u53ef\u56fa\u5316\u7684\u7c7b\u6587\u4ef6\u5e38\u91cf\uff0c\u4e3a\u8bed\u8a00\u8bbe\u8ba1\u8005\u548c\u7f16\u8bd1\u5668\u5b9e\u73b0\u63d0\u4f9b\u66f4\u9ad8\u6548\u7b80\u4fbf\u7684\u64cd\u4f5c\u65b9\u5f0f"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/315"},"315"),": Improve Aarch64 Intrinsics",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4f18\u5316\u5b57\u7b26\u4e32\u548c\u6570\u7ec4\u5185\u5efa\u65b9\u6cd5"),Object(l.b)("li",{parentName:"ul"},"\u4f18\u5316 java.lang.Math sin, cos \u548c log \u65b9\u6cd5"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/318"},"318"),": Epsilon: A No-Op Garbage Collector",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ZeroGC - ZGC"),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u7ba1\u7406\u5185\u5b58\u8bf7\u6c42\u4f46\u4e0d\u4f1a\u56de\u6536\u5185\u5b58\uff0c\u5f53\u5185\u5b58\u7528\u5b8c\u65f6\u5219\u4f1a\u505c\u6b62 JVM"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/320"},"320"),": Remove the Java EE and CORBA Modules",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u4ece JavaSE \u79fb\u9664 JavaEE \u548c CORBA \u6a21\u5757"),Object(l.b)("li",{parentName:"ul"},"\u81ea Java9 \u5e9f\u5f03"),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664\u6a21\u5757",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"java.xml.ws - JAX-WS, SAAJ, Web Services Metadata"),Object(l.b)("li",{parentName:"ul"},"java.xml.bind - JAXB"),Object(l.b)("li",{parentName:"ul"},"java.activation - JAF"),Object(l.b)("li",{parentName:"ul"},"java.xml.ws.annotation - Common Annotations"),Object(l.b)("li",{parentName:"ul"},"java.corba - CORBA"),Object(l.b)("li",{parentName:"ul"},"java.transaction - JTA"))),Object(l.b)("li",{parentName:"ul"},"\u76f8\u5173\u6a21\u5757",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"java.se.ee - Aggregator module for the six modules above"),Object(l.b)("li",{parentName:"ul"},"jdk.xml.ws - Tools for JAX-WS"),Object(l.b)("li",{parentName:"ul"},"jdk.xml.bind - Tools for JAXB"))),Object(l.b)("li",{parentName:"ul"},"\u4f1a\u79fb\u9664\u7684\u5de5\u5177",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"wsgen, wsimport - jdk.xml.ws"),Object(l.b)("li",{parentName:"ul"},"schemagen, xjc - jdk.xml.bind"),Object(l.b)("li",{parentName:"ul"},"idlj, orbd, servertool, tnamesrv - java.corba"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/321"},"321"),": HTTP Client (Standard)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6807\u51c6\u5316 Java9 \u5f15\u5165\u7684 HTTP \u5ba2\u6237\u7aef"),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664\u5b75\u5316\u63a5\u53e3\uff0c\u6dfb\u52a0\u6807\u51c6\u63a5\u53e3\u5230 ",Object(l.b)("inlineCode",{parentName:"li"},"java.net.http")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/323"},"323"),": Local-Variable Syntax for Lambda Parameters",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u4f7f\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"var")," \u6765\u5b9a\u4e49 lambda \u53c2\u6570\u7684\u63a8\u5bfc\u7c7b\u578b"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/324"},"324"),": Key Agreement with Curve25519 and Curve448",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"RFC7748: Curve25519,Curve448"),Object(l.b)("li",{parentName:"ul"},"Java \u5b9e\u73b0, \u5e73\u53f0\u72ec\u7acb"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/327"},"327"),": Unicode 10"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/328"},"328"),": Flight Recorder",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5f00\u6e90 Flight Recorder"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/329"},"329"),": ChaCha20 and Poly1305 Cryptographic Algorithms",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ChaCha20 \u548c Poly1305 \u52a0\u5bc6\u7b97\u6cd5"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/330"},"330"),": Launch Single-File Source-Code Programs",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u542f\u52a8\u5355\u6e90\u6587\u4ef6\u7a0b\u5e8f"),Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"li"},"#!")," \u6765\u542f\u52a8 java \u7a0b\u5e8f\uff0c\u7c7b\u4f3c\u4e8e shell"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"#!/path/to/java --source version")),Object(l.b)("li",{parentName:"ul"},"\u4e5f\u5141\u8bb8\u76f4\u63a5\u8c03\u7528 ",Object(l.b)("inlineCode",{parentName:"li"},"java -Dtrace=true --source 10 factorial 3")))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/331"},"331"),": Low-Overhead Heap Profiling",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u8fc7 JVMTI \u64cd\u4f5c"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/332"},"332"),": Transport Layer Security (TLS) 1.3"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/333"},"333"),": ZGC: A Scalable Low-Latency Garbage Collector",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ZGC \u53ef\u6269\u5c55\u7684\u4f4e\u5ef6\u65f6 gc"),Object(l.b)("li",{parentName:"ul"},"\u8bd5\u9a8c\u9636\u6bb5"),Object(l.b)("li",{parentName:"ul"},"gc < 10ms"),Object(l.b)("li",{parentName:"ul"},"mb \u5230 tb"),Object(l.b)("li",{parentName:"ul"},"\u5bf9\u6bd4 g1\uff0c\u5e94\u7528\u541e\u5410\u91cf\u4e0d\u5e94\u8be5\u635f\u8017\u4e0d\u5e94\u8be5\u8d85\u8fc7 15%"),Object(l.b)("li",{parentName:"ul"},"\u4f5c\u4e3a\u672a\u6765\u4f18\u5316\u57fa\u7840"),Object(l.b)("li",{parentName:"ul"},"\u5148\u652f\u6301 Linux/x64"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/335"},"335"),": Deprecate the Nashorn JavaScript Engine",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e9f\u5f03 JS \u5f15\u64ce\u6a21\u5757"),Object(l.b)("li",{parentName:"ul"},"\u6d89\u53ca\u7684\u5305",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"jdk.scripting.nashorn - \u5305\u62ec jdk.nashorn.api.scripting \u548c jdk.nashorn.api.tree"),Object(l.b)("li",{parentName:"ul"},"jdk.scripting.nashorn.shell - \u5305\u62ec jjs \u5de5\u5177"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://openjdk.java.net/jeps/336"},"336"),": Deprecate the Pack200 Tools and API",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5e9f\u5f03 java.util.jar \u4e2d\u7684 pack200, unpack200 \u5de5\u5177\u548c Pack200 \u63a5\u53e3")))))}j.isMDXComponent=!0}}]);