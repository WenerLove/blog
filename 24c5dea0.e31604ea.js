(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{131:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return l})),t.d(r,"rightToc",(function(){return b})),t.d(r,"default",(function(){return c}));var a=t(2),n=t(7),i=(t(0),t(586)),p={id:"peg",title:"Parsing Expression Grammars",sidebar_label:"PEG"},l={unversionedId:"languages/peg",id:"languages/peg",isDocsHomePage:!1,title:"Parsing Expression Grammars",description:"Tips",source:"@site/notes/languages/peg.md",slug:"/languages/peg",permalink:"/notes/languages/peg",editUrl:"https://github.com/wenerme/wener/edit/master/notes/languages/peg.md",version:"current",sidebar_label:"PEG",sidebar:"docs",previous:{title:"\u8bed\u6cd5\u89e3\u6790",permalink:"/notes/languages/parsing"},next:{title:"PEG.js",permalink:"/notes/languages/pegjs"}},b=[{value:"Tips",id:"tips",children:[]},{value:"\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7",id:"\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7",children:[]}],o={rightToc:b};function c(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Parsing_expression_grammar"}),"Parsing expression grammar")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/orlandohill/peg-left-recursion"}),"orlandohill/peg-left-recursion")," - An idea to handle left-recursion in Parsing Expression Grammars (PEGs)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/PhilippeSigaud/Pegged/wiki/Left-Recursion"}),"PhilippeSigaud/Pegged/wiki/Left-Recursion")),Object(i.b)("li",{parentName:"ul"},"Golang",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pointlander/peg"}),"pointlander/peg")))),Object(i.b)("li",{parentName:"ul"},"Java",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/sirthias/parboiled"}),"sirthias/parboiled")," - Elegant parsing in Java and Scala - lightweight, easy-to-use, powerful."))),Object(i.b)("li",{parentName:"ul"},"JavaScript",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://pegjs.org/"}),"PEG.js"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pegjs/pegjs"}),"pegjs/pegjs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/pegjs/pegjs/blob/master/src/parser.pegjs"}),"parser.pegjs")),Object(i.b)("li",{parentName:"ul"},"Simple and expressive grammar syntax"),Object(i.b)("li",{parentName:"ul"},"Integrates both lexical and syntactical analysis"),Object(i.b)("li",{parentName:"ul"},"Parsers have excellent error reporting out of the box"),Object(i.b)("li",{parentName:"ul"},"Based on parsing expression grammar formalism \u2014 more powerful than traditional LL(k) and LR(k) parsers"),Object(i.b)("li",{parentName:"ul"},"Usable from your browser, from the command line, or via JavaScript API"))))),Object(i.b)("li",{parentName:"ul"},"\u6848\u4f8b",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jgm/peg-markdown/blob/master/markdown_parser.leg"}),"https://github.com/jgm/peg-markdown/blob/master/markdown_parser.leg"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Markdown"))))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://bford.info/packrat/"}),"The Packrat Parsing and Parsing Expression Grammars Page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.antlr.org/papers/LL-star-PLDI11.pdf"}),"LL(*): The Foundation of the ANTLR Parser Generator"))))),Object(i.b)("h2",{id:"\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7"},"\u64cd\u4f5c\u7b26\u4f18\u5148\u7ea7"),Object(i.b)("p",null,"\u4f8b\u5982 ",Object(i.b)("inlineCode",{parentName:"p"},"!true || !false && (true ^ false)")),Object(i.b)("p",null,"\u5b9a\u4e49\u8bed\u6cd5\u5982\u4e0b"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-pegjs"}),'Exp = AndExp\nAndExp = OrExp ( _ "&&" _ AndExp)?\nOrExp = ExOrExp ( _ "||" _ OrExp)?\nExOrExp = PrefixExp ( _ "^" _ ExOrExp)?\nPrefixExp = PrimaryExp / _ "!" _ PrefixExp\nPrimaryExp = "(" _ Exp _ ")" / Boolean\nBoolean = "true" / "false"\n\n_ "whitespace" = [ \\t\\n\\r]*\n')),Object(i.b)("p",null,"\u8be5\u9884\u53d1\u80fd\u6b63\u786e\u5904\u7406\u5404\u64cd\u4f5c\u7b26\u7684\u4f18\u5148\u7ea7\uff0c\u5728\u975e ",Object(i.b)("inlineCode",{parentName:"p"},"LLR")," \u4e2d\u4e00\u822c\u8fd9\u6837\u5904\u7406"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-pegjs"}),'Exp = AndExp\nAndExp = a:OrExp ( _ "&&" _ b:AndExp)? {return b?[a,"AND",b]:a}\nOrExp = a:ExOrExp ( _ "||" _ b:OrExp)? {return b?[a,"OR",b]:a}\nExOrExp = a:PrefixExp ( _ "^" _ b:ExOrExp)? {return b?[a,"XOR",b]:a}\nPrefixExp = PrimaryExp / _ "!" _ PrefixExp\nPrimaryExp = "(" _ Exp _ ")" / Boolean\nBoolean = "true" / "false"\n\n_ "whitespace" = [ \\t\\n\\r]*\n')))}c.isMDXComponent=!0},586:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return g}));var a=t(0),n=t.n(a);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=n.a.createContext({}),c=function(e){var r=n.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.a.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},m=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,g=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return t?n.a.createElement(g,l(l({ref:r},o),{},{components:t})):n.a.createElement(g,l({ref:r},o))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=m;var l={};for(var b in r)hasOwnProperty.call(r,b)&&(l[b]=r[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);