(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(n),u=a,O=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return n?r.a.createElement(O,b(b({ref:t},p),{},{components:n})):r.a.createElement(O,b({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(1083)),i={id:"go-template",title:"Go \u6a21\u677f"},b={unversionedId:"languages/go/go-template",id:"languages/go/go-template",isDocsHomePage:!1,title:"Go \u6a21\u677f",description:"Go Template",source:"@site/notes/languages/go/go-template.md",slug:"/languages/go/go-template",permalink:"/notes/languages/go/go-template",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/go/go-template.md",version:"current",sidebar:"docs",previous:{title:"Go net/rpc",permalink:"/notes/languages/go/go-pkg-net-rpc"},next:{title:"Go Version",permalink:"/notes/languages/go/go-version"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",children:[]},{value:"\u5185\u5efa\u51fd\u6570",id:"\u5185\u5efa\u51fd\u6570",children:[]},{value:"sprig",id:"sprig",children:[]}],p={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"go-template"},"Go Template"),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("ul",{parentName:"div"},Object(l.b)("li",{parentName:"ul"},"GoLand \u652f\u6301\u6dfb\u52a0\u7c7b\u578b\u6ce8\u91ca ",Object(l.b)("inlineCode",{parentName:"li"},"{{/* gotype: entgo.io/ent/entc/gen.Graph */}}"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u540e\u53ef\u5bf9\u6a21\u677f\u8fdb\u884c\u8865\u5168")))))),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/Masterminds/sprig"},"Masterminds/sprig")," - \u63d0\u4f9b\u5927\u91cf\u6a21\u677f\u51fd\u6570"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/hairyhenderson/gomplate"},"hairyhenderson/gomplate")," - \u652f\u6301\u6570\u636e\u6e90\u7684\u547d\u4ee4\u884c\u6a21\u677f")),Object(l.b)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Syntax"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'{{"a" -}} b {{- "c"}}')),Object(l.b)("td",{parentName:"tr",align:null},"\u79fb\u9664\u7a7a\u767d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{{/* a comment */}}")),Object(l.b)("td",{parentName:"tr",align:null},"\u6ce8\u91ca")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{{pipeline}}")),Object(l.b)("td",{parentName:"tr",align:null},"\u7ba1\u9053")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{{if pipeline}} A {{else if pipeline}} B {{else}} C {{end}}")),Object(l.b)("td",{parentName:"tr",align:null},"If-Then-Else")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{{range pipeline}} T1 {{else}} T0 {{end}}")),Object(l.b)("td",{parentName:"tr",align:null},"\u904d\u5386 array\u3001slice\u3001map\u3001channel\uff0c\u5f53\u957f\u5ea6\u4e3a 0 \u4f7f\u7528 else \u90e8\u5206")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'{{template "name" pipeline}}')),Object(l.b)("td",{parentName:"tr",align:null},"\u5f15\u5165\u5176\u4ed6\u6a21\u677f\uff0c\u53ef\u643a\u5e26\u53c2\u6570")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'{{define "name"}} T1 {{end}}')),Object(l.b)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u6a21\u677f\u7528\u4e8e template \u5f15\u5165")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'{{block "name" pipeline}} T1 {{end}}')),Object(l.b)("td",{parentName:"tr",align:null},"\u7b49\u4e8e define + template\uff0c\u7528\u4e8e\u5b9e\u73b0\u9ed8\u8ba4\uff0cblock \u5b9a\u4e49\u7684\u6a21\u677f\u53ef\u4ee5\u88ab\u518d\u6b21\u5b9a\u4e49")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{{with pipeline}} T1 {{else}} T0 {{end}}")),Object(l.b)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e ",Object(l.b)("inlineCode",{parentName:"td"},".")," \u4f5c\u7528\u57df\uff0c\u5982\u679c\u7ed3\u679c\u4e3a\u7a7a\u4f7f\u7528 else")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},".")),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u4e0a\u4e0b\u6587")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"$")),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u6a21\u677f root \u4e0a\u4e0b\u6587")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"{{ $v:= pipeline }}")),Object(l.b)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u53d8\u91cf")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},'print (.F1 arg1) (.F2 arg2) (.StructValuedMethod "arg").Field')),Object(l.b)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u62ec\u53f7\u3001\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7 ",Object(l.b)("inlineCode",{parentName:"td"},".")," \u8bbf\u95ee\u3001\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u51fd\u6570")))),Object(l.b)("h2",{id:"\u5185\u5efa\u51fd\u6570"},"\u5185\u5efa\u51fd\u6570"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u903b\u8f91 and\u3001or\u3001not"),Object(l.b)("li",{parentName:"ul"},"\u6bd4\u8f83 eq\u3001ne\u3001lt\u3001le\u3001gt\u3001ge"),Object(l.b)("li",{parentName:"ul"},"\u8f93\u51fa print\u3001printf\u3001println"),Object(l.b)("li",{parentName:"ul"},"call"),Object(l.b)("li",{parentName:"ul"},"html - HTMLEscaper"),Object(l.b)("li",{parentName:"ul"},"index - \u7d22\u5f15\u8bbf\u95ee - map\u3001slice\u3001array"),Object(l.b)("li",{parentName:"ul"},"slice - \u5207\u5206\u7b2c\u4e00\u4e2a\u53c2\u6570",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"slice x 1 2")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"x[1:2]")))),Object(l.b)("li",{parentName:"ul"},"js - JSEscaper - \u8fd4\u56de\u8f6c\u4e49\u540e\u7684 JS"),Object(l.b)("li",{parentName:"ul"},"len - \u8fd4\u56de\u957f\u5ea6"),Object(l.b)("li",{parentName:"ul"},"urlquery - URLQueryEscaper - URL \u7f16\u7801"),Object(l.b)("li",{parentName:"ul"},"print, printf, println")),Object(l.b)("h2",{id:"sprig"},"sprig"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Go ",Object(l.b)("a",{parentName:"li",href:"https://play.golang.org/p/bbQDtcGKWFf"},"Playground"))))}o.isMDXComponent=!0}}]);