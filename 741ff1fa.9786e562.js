(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{399:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(8),o=(r(0),r(803)),l={id:"postgrest-hello",title:"PostREST \u5165\u95e8\u90e8\u7f72"},s={unversionedId:"db/relational/postgresql/postgrest-hello",id:"db/relational/postgresql/postgrest-hello",isDocsHomePage:!1,title:"PostREST \u5165\u95e8\u90e8\u7f72",description:"Hello PostgREST",source:"@site/notes/db/relational/postgresql/postgrest-hello.md",slug:"/db/relational/postgresql/postgrest-hello",permalink:"/notes/db/relational/postgresql/postgrest-hello",editUrl:"https://github.com/wenerme/wener/edit/master/notes/db/relational/postgresql/postgrest-hello.md",version:"current",sidebar:"docs",previous:{title:"\u53ef\u66f4\u65b0\u89c6\u56fe",permalink:"/notes/db/relational/postgresql/postgresql-view"},next:{title:"TimeScale",permalink:"/notes/db/relational/postgresql/timescale"}},c=[{value:"1. \u73af\u5883",id:"1-\u73af\u5883",children:[]},{value:"2. \u6570\u636e\u5e93\u51c6\u5907",id:"2-\u6570\u636e\u5e93\u51c6\u5907",children:[]},{value:"3. \u6570\u636e\u63a7\u5236\u53f0",id:"3-\u6570\u636e\u63a7\u5236\u53f0",children:[]}],p={toc:c};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"hello-postgrest"},"Hello PostgREST"),Object(o.b)("h2",{id:"1-\u73af\u5883"},"1. \u73af\u5883"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"DataGrip",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.jetbrains.com/datagrip/download"},"https://www.jetbrains.com/datagrip/download")),Object(o.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u7ba1\u7406\u5de5\u5177"))),Object(o.b)("li",{parentName:"ul"},"Docker for Mac",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.docker.com/docker-mac"},"https://www.docker.com/docker-mac")),Object(o.b)("li",{parentName:"ul"},"\u5bb9\u5668\u73af\u5883"))),Object(o.b)("li",{parentName:"ul"},"PostgreSQL",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"brew install postgresql")),Object(o.b)("li",{parentName:"ul"},"\u672c\u5730\u6570\u636e\u5e93")))),Object(o.b)("h2",{id:"2-\u6570\u636e\u5e93\u51c6\u5907"},"2. \u6570\u636e\u5e93\u51c6\u5907"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u5c06\u6570\u636e\u5b58\u50a8\u4e8e\u672c\u5730\u8be5\u76ee\u5f55\nmkdir -p ~/data/pg\n# \u521d\u6b21\u542f\u52a8\n# \u542f\u52a8\u5b8c\u6210\u540e Ctrl+C \u7ec8\u6b62\ndocker run -it --rm -v $HOME/data/pg:/var/lib/postgresql/data -e POSTGRES_PASSWORD=OP6Ats postgres:alpine\n\n# \u518d\u6b21\u542f\u52a8, \u4f7f\u7528\u5df2\u7ecf\u521d\u59cb\u5316\u597d\u7684\u6570\u636e\u76ee\u5f55, \u6b64\u65f6\u4e0d\u518d\u9700\u8981\u6307\u5b9a\u5bc6\u7801, \u4ee5\u540e\u542f\u52a8\u5747\u4f7f\u7528\u8be5\u547d\u4ee4\ndocker run -it --rm -v $HOME/data/pg:/var/lib/postgresql/data -p 5432:5432 postgres:alpine\n\n# \u67e5\u770b\u5f53\u524d\u7248\u672c \u5e76\u786e\u8ba4\u670d\u52a1\u6b63\u5e38\u542f\u52a8\n# \u9700\u8981\u8f93\u5165\u4e4b\u524d\u7684\u5bc6\u7801 OP6Ats\npsql -h 127.0.0.1 -U postgres -c 'show server_version'\n\n# \u521b\u5efa\u6613\u5f00\u4e1a\u6570\u636e\u5e93\npsql -h 127.0.0.1 -U postgres -c 'create database yky'\n# \u521b\u5efa\u670d\u52a1\u7cfb\u7edf schema\npsql -h 127.0.0.1 -U postgres yky -c 'create schema servicer'\n\n# \u5207\u6362\u5230\u5de5\u4f5c\u76ee\u5f55\ncd ~/data/pg\n\n# PostgREST\n# ---------\n# \u914d\u7f6e\u6587\u4ef6\ncat <<CONF > postgrest.conf\ndb-uri = \"postgres://postgres:OP6Ats@docker.for.mac.localhost/yky\"\ndb-schema = \"servicer\"\ndb-anon-role = \"postgres\"\nCONF\n# \u542f\u52a8 PostgREST\n# \b\b\bhttp://localhost:3000 \u4e3a rest \u670d\u52a1\u63a5\u53e3\ndocker run --rm -p 3000:3000 -v $PWD:/host --name postgrest postgrest/postgrest postgrest /host/postgrest.conf\n# \u542f\u52a8 SwaggerUI\n# \b\b\bhttp://localhost:8081 \u4e3a swagger ui\ndocker run --rm -p 8081:8080 -e API_URL=http://localhost:3000 swaggerapi/swagger-ui\n")),Object(o.b)("h2",{id:"3-\u6570\u636e\u63a7\u5236\u53f0"},"3. \u6570\u636e\u63a7\u5236\u53f0"),Object(o.b)("p",null,"\u6253\u5f00 DataGrip, \u65b0\u589e PostgreSQL \u6570\u636e\u6e90, \u4e3b\u673a localhost, \u7aef\u53e3 5432, \u8d26\u53f7 postgres \u5bc6\u7801 OP6Ats \u6570\u636e\u5e93 yky"),Object(o.b)("p",null,"\u6253\u5f00\u63a7\u5236\u53f0, \u6267\u884c SQL"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"-- \u8bbe\u7f6e\u641c\u7d22\u8def\u5f84, \u4e3b\u8981\u4fee\u6539\u5f53\u524d schema\nset search_path=servicer,public;\n\n\n-- \u5ba2\u6237\ncreate table customer (\n  id       int generated by default as identity,\n\n  -- \u57fa\u7840\u4fe1\u606f\n  name     text not null,\n  type     text not null, -- \u62df\u8bbe\u7acb, \u5df2\u8bbe\u7acb\n  email    text,\n  wechat   text,\n  qq       text,\n\n  source   text not null,\n  state    text,\n  remark   text,\n\n  addition jsonb,\n  --\n  primary key (id)\n);\n")),Object(o.b)("p",null,"\u6267\u884c\u5b8c\u6210\u540e\u8981\u8ba9 PostgREST \u4ece\u65b0\u626b\u63cf\u6570\u636e\u5e93"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker kill -s HUP postgrest\n")),Object(o.b)("p",null,"\u5237\u65b0 http://localhost:8081  \u5373\u53ef\u770b\u5230\u65b0\u7684\u63a5\u53e3, \u5f80\u540e\u7684\u64cd\u4f5c\u4fbf\u662f\u9010\u6e10\u5b8c\u5584\u6570\u636e\u5e93\u548c\u719f\u6089\u4ea7\u54c1\u6570\u636e\u6a21\u578b."))}i.isMDXComponent=!0},803:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),i=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=i(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=i(r),d=n,g=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(g,s(s({ref:t},p),{},{components:r})):a.a.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);