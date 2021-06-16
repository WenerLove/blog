(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{1083:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return s}));var r=a(0),l=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b=l.a.createContext({}),o=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=o(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},h=l.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),m=o(a),h=r,s=m["".concat(i,".").concat(h)]||m[h]||u[h]||n;return a?l.a.createElement(s,c(c({ref:t},b),{},{components:a})):l.a.createElement(s,c({ref:t},b))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<n;b++)i[b]=a[b];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},273:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(3),l=a(8),n=(a(0),a(1083)),i={title:"GraphQL Awesome"},c={unversionedId:"service/api/graphql-awesome",id:"service/api/graphql-awesome",isDocsHomePage:!1,title:"GraphQL Awesome",description:"\u5b66\u4e60",source:"@site/notes/service/api/graphql-awesome.md",slug:"/service/api/graphql-awesome",permalink:"/notes/service/api/graphql-awesome",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/api/graphql-awesome.md",version:"current",sidebar:"docs",previous:{title:"API Awesome",permalink:"/notes/service/api/api-awesome"},next:{title:"graphql-code-generator",permalink:"/notes/service/api/graphql-code-generator"}},p=[{value:"\u5b66\u4e60",id:"\u5b66\u4e60",children:[]},{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",children:[]},{value:"Service",id:"service",children:[]},{value:"Tool",id:"tool",children:[]},{value:"Server",id:"server",children:[]},{value:"Client",id:"client",children:[]},{value:"Public GraphQL",id:"public-graphql",children:[{value:"GitLab",id:"gitlab",children:[]},{value:"Github",id:"github",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],b={toc:p};function o(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"\u5b66\u4e60"},"\u5b66\u4e60"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://engineering.fb.com/2013/06/25/core-data/tao-the-power-of-the-graph/"},"TAO: The power of the graph"))),Object(n.b)("h2",{id:"\u8bbe\u8ba1"},"\u8bbe\u8ba1"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://graphql.org/learn/best-practices"},"GraphQL \u6700\u4f73\u5b9e\u8df5"),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"\u901a\u8fc7 HTTP \u63d0\u4f9b\u670d\u52a1"),Object(n.b)("li",{parentName:"ol"},"JSON+Gzip \u8fd4\u56de"),Object(n.b)("li",{parentName:"ol"},"\u5bf9\u63a5\u53e3\u8fdb\u884c\u7248\u672c\u63a7\u5236 - \u5229\u7528 deprecated \u548c \u989d\u5916\u5b57\u6bb5\u80fd"),Object(n.b)("li",{parentName:"ol"},"\u5b57\u6bb5\u9ed8\u8ba4 null - \u5229\u7528 \u975e null \u8bbe\u8ba1\u66f4\u597d\u7684\u63a5\u53e3"),Object(n.b)("li",{parentName:"ol"},"\u5206\u9875\u4f7f\u7528 Connection - \u901a\u8fc7 first, last, before, after \u5b9e\u73b0\u57fa\u4e8e cursor \u5206\u9875"),Object(n.b)("li",{parentName:"ol"},"\u670d\u52a1\u7aef\u6279\u5904\u7406\u548c\u7f13\u5b58 - \u907f\u514d N+1 \u95ee\u9898 - \u5229\u7528 ",Object(n.b)("a",{parentName:"li",href:"https://github.com/graphql/dataloader"},"graphql/dataloader")," \u5904\u7406"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://principledgraphql.com"},"Principled GraphQL"),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"One Graph"),Object(n.b)("li",{parentName:"ol"},"Federated Implementation"),Object(n.b)("li",{parentName:"ol"},"Track the Schema in a Registry"),Object(n.b)("li",{parentName:"ol"},"Abstract, Demand-Oriented Schema"),Object(n.b)("li",{parentName:"ol"},"Use an Agile Approach to Schema Development"),Object(n.b)("li",{parentName:"ol"},"Iteratively Improve Performance"),Object(n.b)("li",{parentName:"ol"},"Use Graph Metadata to Empower Developers"),Object(n.b)("li",{parentName:"ol"},"Access and Demand Control"),Object(n.b)("li",{parentName:"ol"},"Structured Logging"),Object(n.b)("li",{parentName:"ol"},"Separate the GraphQL Layer from the Service Layer"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/development/api_graphql_styleguide.html"},"Gitlab GraphQL API \u89c4\u8303\u6587\u6863"))),Object(n.b)("h2",{id:"service"},"Service"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/urigo/graphql-mesh"},"urigo/graphql-mesh"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"GraphQL Adapter"),Object(n.b)("li",{parentName:"ul"},"\u540e\u7aef\u652f\u6301 GraphQL, JSON Schema, gRPC, Swagger, OpenAPI, SOAP, Postgres, Mongo, OData, Thrift, SQLite, MySQL, Neo4j")))),Object(n.b)("h2",{id:"tool"},"Tool"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/dotansimha/graphql-code-generator"},"dotansimha/graphql-code-generator"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u57fa\u4e8e GraphQL \u751f\u6210\u5404\u79cd\u5ba2\u6237\u7aef\u670d\u52a1\u7aef\u4ee3\u7801"),Object(n.b)("li",{parentName:"ul"},"\u5bf9 TypeScript \u652f\u6301\u975e\u5e38\u597d"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/jensneuse/graphql-go-tools"},"jensneuse/graphql-go-tools"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86 federation"),Object(n.b)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u5b9e\u73b0 graphql \u670d\u52a1\u5e94\u7528"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/anvilco/spectaql"},"anvilco/spectaql"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u6587\u6863\u751f\u6210")))),Object(n.b)("h2",{id:"server"},"Server"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.apollographql.com/docs/federation/federation-spec/"},"Apollo Federation specification")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/Urigo/graphql-mesh"},"Urigo/graphql-mesh"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"REST,DB,RPC \u6620\u5c04\u4e3a GraphQL"),Object(n.b)("li",{parentName:"ul"},"\u6536\u96c6 API \u63a5\u53e3\u89c4\u8303\u3001\u751f\u6210 SDK\u3001\u751f\u6210 GraphQL Schema\u3001\u751f\u6210\u63a5\u53e3\u6620\u5c04")))),Object(n.b)("h2",{id:"client"},"Client"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"apollo"),Object(n.b)("li",{parentName:"ul"},"urql"),Object(n.b)("li",{parentName:"ul"},"graphql-request",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"fetch + gql"))),Object(n.b)("li",{parentName:"ul"},"react-query+graphql-request")),Object(n.b)("h2",{id:"public-graphql"},"Public GraphQL"),Object(n.b)("h3",{id:"gitlab"},"GitLab"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://gitlab.com/-/graphql-explorer"},"GraphQL Explorer")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/graphql"},"\u6587\u6863")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/development/api_graphql_styleguide.html"},"GraphQL API \u89c4\u8303\u6587\u6863")),Object(n.b)("li",{parentName:"ul"},"\u5168\u5c40 ID \u683c\u5f0f ",Object(n.b)("inlineCode",{parentName:"li"},"gid://gitlab/MyObject/123")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/development/fe_guide/graphql.html"},"\u524d\u7aef GraphQL \u5f00\u53d1\u6587\u6863"))),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"# \u751f\u6210 schema\nbundle exec rake gitlab:graphql:schema:dump\n")),Object(n.b)("h3",{id:"github"},"Github"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://docs.github.com/public/schema.docs.graphql"},"schema.docs.graphql")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://developer.github.com/v4/explorer"},"GraphQL Explorer"))),Object(n.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/chentsulin/awesome-graphql"},"chentsulin/awesome-graphql")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/APIs-guru/graphql-apis"},"APIs-guru/graphql-apis"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\u516c\u5171 GraphQL API \u5217\u8868")))))}o.isMDXComponent=!0}}]);