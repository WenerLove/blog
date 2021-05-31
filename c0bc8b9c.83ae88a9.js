(window.webpackJsonp=window.webpackJsonp||[]).push([[761],{1044:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(a),j=n,s=u["".concat(c,".").concat(j)]||u[j]||m[j]||b;return a?r.a.createElement(s,l(l({ref:t},o),{},{components:a})):r.a.createElement(s,l({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},834:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(1044)),c={title:"Casbin"},l={unversionedId:"service/auth/casbin",id:"service/auth/casbin",isDocsHomePage:!1,title:"Casbin",description:"- \u652f\u6301\u7684\u6a21\u5f0f",source:"@site/notes/service/auth/casbin.md",slug:"/service/auth/casbin",permalink:"/notes/service/auth/casbin",editUrl:"https://github.com/wenerme/wener/edit/master/notes/service/auth/casbin.md",version:"current",sidebar:"docs",previous:{title:"\u8ba4\u8bc1\u6388\u6743\u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/auth/auth-faq"},next:{title:"dex",permalink:"/notes/service/auth/dex"}},i=[{value:"\u6a21\u578b",id:"\u6a21\u578b",children:[{value:"\u5185\u7f6e\u51fd\u6570",id:"\u5185\u7f6e\u51fd\u6570",children:[]}]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]}],o={toc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u652f\u6301\u7684\u6a21\u5f0f",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"ACL - \u8d85\u7ea7\u7528\u6237, \u65e0\u7528\u6237, \u65e0\u8d44\u6e90"),Object(b.b)("li",{parentName:"ul"},"RBAC - \u8d44\u6e90\u89d2\u8272, \u79df\u6237\u89d2\u8272"),Object(b.b)("li",{parentName:"ul"},"ABAC"),Object(b.b)("li",{parentName:"ul"},"RESTful \u8def\u5f84"),Object(b.b)("li",{parentName:"ul"},"\u62d2\u7edd\u4f18\u5148"),Object(b.b)("li",{parentName:"ul"},"\u4f18\u5148\u7ea7"))),Object(b.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5206\u4e3a \u6a21\u578b\u5b9a\u4e49\u3001Policy\u3001\u89d2\u8272 - Policy \u548c \u89d2\u8272\u914d\u7f6e\u53ef\u9009"),Object(b.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/casbin/casdoor"},"casbin/casdoor"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5e26 UI \u7684\u4e2d\u5fc3\u5316 SSO \u5e73\u53f0"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://casbin.org/docs/zh-CN/tutorials"},"\u6559\u7a0b")),Object(b.b)("li",{parentName:"ul"},"Golang",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6c42\u503c\u4f7f\u7528 ",Object(b.b)("a",{parentName:"li",href:"https://github.com/Knetic/govaluate"},"Knetic/govaluate"))))))),Object(b.b)("h2",{id:"\u6a21\u578b"},"\u6a21\u578b"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"PERM (Policy, Effect, Request, Matcher)"),Object(b.b)("li",{parentName:"ul"},"Request - r - \u81f3\u5c11\u5305\u542b subject, object, action"),Object(b.b)("li",{parentName:"ul"},"Policy - p - \u5b9a\u4e49\u8bbf\u95ee\u7b56\u7565",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u7b56\u7565\u5185\u5bb9\u5747\u4e3a string"))),Object(b.b)("li",{parentName:"ul"},"Matcher - m - Request \u548c Policy \u5339\u914d\u89c4\u5219",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f8b\u5982 m = r.sub == p.sub && r.act == p.act && r.obj == p.obj"),Object(b.b)("li",{parentName:"ul"},"\u5982\u679c\u5339\u914d\u5219\u8fd4\u56de ",Object(b.b)("inlineCode",{parentName:"li"},"p.eft")))),Object(b.b)("li",{parentName:"ul"},"Effect - e - \u5f71\u54cd - \u5141\u8bb8\u3001\u62d2\u7edd",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(b.b)("inlineCode",{parentName:"li"},"e = some(where(p.eft == allow))"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u4efb\u610f\u4e00\u4e2a policy \u5141\u8bb8"))),Object(b.b)("li",{parentName:"ul"},"\u4f8b\u5982 ",Object(b.b)("inlineCode",{parentName:"li"},"e = some(where (p.eft == allow)) && !some(where (p.eft == deny))"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6ca1\u6709\u62d2\u7edd\u4e14\u6709\u4e00\u4e2a\u5141\u8bb8")))))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ini"},"# \u8bf7\u6c42\u5b9a\u4e49 - \u5b9a\u4e49\u8bf7\u6c42 Enforce \u53c2\u6570\u542b\u4e49\n# \u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\n[request_definition]\nr = sub, obj, act\n\n# \u7b56\u7565\u5b9a\u4e49 - \u5b9a\u4e49 Policy \u89c4\u5219\u5217\u8868\u53c2\u6570\u542b\u4e49\n# \u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\n[policy_definition]\np = sub, obj, act\n\n# \u5408\u5e76\u591a\u4e2a\u7b56\u7565\u7ed3\u679c\n# \u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\n[policy_effect]\ne = some(where (p.eft == allow))\n\n# \u5339\u914d\u8bf7\u6c42\u548c\u7b56\u7565\n# \u53ea\u80fd\u5b9a\u4e49\u4e00\u4e2a\n# \u53ef\u4ee5\u8fd0\u884c\u65f6\u6307\u5b9a\n[matchers]\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n# \u89d2\u8272\u5b9a\u4e49 - \u51b3\u5b9a\u53c2\u6570\u4e2a\u6570\n# \u53ef\u5b9a\u4e49\u591a\u4e2a\n# \u5c06 a \u6620\u5c04\u4e3a b \u7684\u8fc7\u7a0b\n[role_definition]\n# \u4f8b\u5982 g(r.sub, p.sub)\ng = _, _\n# \u4f8b\u5982 g2(r.sub, p.sub, r.dom)\ng2 = _, _, _\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"policy.csv")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csv"},"p, alice, data1, read\np, bob, data1, read\n\ng, alice, data_group_admin\ng2, data1, data_group, t1\ng2, data2, data_group, t2\n")),Object(b.b)("p",null,"\u7b56\u7565\u89c4\u5219\uff0c\u542b\u4e49\u5728 policy_definition \u548c role_definition \u5b9a\u4e49\uff0c\u6240\u6709\u89c4\u5219\u53c2\u6570\u90fd\u4f1a\u5f53\u4f5c ",Object(b.b)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32")," \u5904\u7406\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("inlineCode",{parentName:"p"},"p = sub, obj, act, eft"))),Object(b.b)("p",null,"policy \u89c4\u5219\u53ef\u6dfb\u52a0\u4f18\u5148\u7ea7, \u4e0d\u8bbe\u7f6e\u5219\u987a\u5e8f\u4e3a\u4f18\u5148\u7ea7"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csv"},"p, 10, data2_allow_group, data2, read, deny\np, 10, data2_allow_group, data2, write, allow\n")),Object(b.b)("h3",{id:"\u5185\u7f6e\u51fd\u6570"},"\u5185\u7f6e\u51fd\u6570"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u5185\u5efa\u51fd\u6570\u7b7e\u540d\u90fd\u662f ",Object(b.b)("inlineCode",{parentName:"p"},"bool function(string arg1, string arg2)"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"name"),Object(b.b)("th",{parentName:"tr",align:null},"demo"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"keyMatch"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'keyMatch("/alice_data/resource1","/alice_data/*")'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"keyGet"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'keyGet("/alice_data/resource1","/alice_data/*")'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"keyMatch2"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'keyMatch2("/alice_data/resource1","/alice_data/:resource")'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"keyGet2"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'keyGet2("/alice_data/resource1","/alice_data/:resource")'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"keyMatch3"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'keyMatch3("/alice_data/resource1","/alice_data/{resource}")'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"keyMatch4"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'keyMatch4("/alice_data/123/book/123","/alice_data/{id}/book/{id}")'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"globMatch"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'globMatch("/alice_data/resource1","/alice_data/*")'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ipMatch"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'ipMatch("192.168.2.123","192.168.2.0/24")'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"regexMatch"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'regexMatch("abc","^a.*?b$")'))))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528\u53c2\u8003 ",Object(b.b)("a",{parentName:"li",href:"https://github.com/casbin/casbin/blob/master/util/builtin_operators_test.go"},"util/builtin_operators_test.go"))),Object(b.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ini"},'[matchers]\n# \u6700\u57fa\u7840\u5339\u914d\u903b\u8f91 - Policy \u4f5c\u4e3a ACL\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act\n\n# \u652f\u6301\u8d85\u7ea7\u7ba1\u7406\u5458\nm = r.sub == p.sub && r.obj == p.obj && r.act == p.act || r.sub == "root"\n# \u89d2\u8272\u5224\u65ad\nm = g(r.sub, p.sub) && r.obj == p.obj && r.act == p.act\n# \u8d44\u6e90\u89d2\u8272\nm = g(r.sub, p.sub) && g2(r.obj, p.obj) && r.act == p.act\n# \u79df\u6237\nm = g(r.sub, p.sub, r.dom) && r.dom == p.dom && r.obj == p.obj && r.act == p.act\n\n# \u6ca1\u6709 \u7528\u6237/subject - \u53ea\u5224\u65ad\u5bf9\u8c61\u548c\u64cd\u4f5c\nm = r.obj == p.obj && r.act == p.act\n\n# \u6ca1\u6709 \u8d44\u6e90/obj\nm = r.sub == p.sub && r.act == p.act\n\n# ABAC - \u57fa\u4e8e\u5c5e\u6027\u63a7\u5236\nm = r.sub == r.obj.Owner\n\n# RESTful \u8def\u5f84\u5339\u914d\nm = r.sub == p.sub && keyMatch(r.obj, p.obj) && regexMatch(r.act, p.act)\n\n[policy_effect]\n# \u53ea\u8981\u6709\u540c\u610f\u5373\u53ef\ne = some(where (p.eft == allow))\n# \u62d2\u7edd\u4f18\u5148\ne = !some(where (p.eft == deny))\n# \u6709\u540c\u610f\u4e14\u6ca1\u6709\u62d2\u7edd\ne = some(where (p.eft == allow)) && !some(where (p.eft == deny))\n\n# \u4f18\u5148\u5224\u65ad - p \u5b9a\u4e49\u987a\u5e8f\u9690\u542b\u4f18\u5148\u7ea7\uff0c\u6216\u8005 p \u89c4\u5219\u7b2c\u4e00\u4e2a\u53c2\u6570\u8bbe\u7f6e\u4e3a\u4f18\u5148\u7ea7\n# p = sub, obj, act, eft\ne = priority(p.eft) || deny\n')))}p.isMDXComponent=!0}}]);