(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{1044:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),o=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=o(n),O=a,j=p["".concat(b,".").concat(O)]||p[O]||m[O]||l;return n?r.a.createElement(j,i(i({ref:t},d),{},{components:n})):r.a.createElement(j,i({ref:t},d))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var d=2;d<l;d++)b[d]=n[d];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},542:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(8),l=(n(0),n(1044)),b={id:"windows-env",title:"Windows \u73af\u5883"},i={unversionedId:"os/windows/windows-env",id:"os/windows/windows-env",isDocsHomePage:!1,title:"Windows \u73af\u5883",description:"Windows \u73af\u5883\u4fe1\u606f",source:"@site/notes/os/windows/windows-env.md",slug:"/os/windows/windows-env",permalink:"/notes/os/windows/windows-env",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/windows/windows-env.md",version:"current",sidebar:"docs",previous:{title:"Windows \u57df\u63a7",permalink:"/notes/os/windows/windows-dc"},next:{title:"Windows FAQ",permalink:"/notes/os/windows/windows-faq"}},c=[{value:"Tips",id:"tips",children:[]},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",children:[]}],d={toc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"windows-\u73af\u5883\u4fe1\u606f"},"Windows \u73af\u5883\u4fe1\u606f"),Object(l.b)("h2",{id:"tips"},"Tips"),Object(l.b)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u76ee\u5f55\u6ce8\u518c\u8868",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders"))))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Environment Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Vista+"),Object(l.b)("th",{parentName:"tr",align:null},"XP"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%ALLUSERSPROFILE%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\ProgramData"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\All Users")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%APPDATA%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%\\AppData\\Roaming"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\%USERNAME%\\Application Data")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%COMMONPROGRAMFILES%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Program Files\\Common Files"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Program Files\\Common Files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%COMMONPROGRAMFILES(x86)%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Program Files (x86)\\Common Files"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Program Files (x86)\\Common Files")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%COMSPEC%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Windows\\System32\\cmd.exe"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Windows\\System32\\cmd.exe")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%HOMEDRIVE%")),Object(l.b)("td",{parentName:"tr",align:null},"C:"),Object(l.b)("td",{parentName:"tr",align:null},"C:")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%HOMEPATH%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\%USERNAME%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%LOCALAPPDATA%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%\\AppData\\Local"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%PROGRAMDATA%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\ProgramData"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%PROGRAMFILES%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Program Files"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%PROGRAMFILES(X86)%")," - 64 bit"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Program Files (x86)"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%PROGRAMFILES%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Program Files"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%PROGRAMFILES(X86)%")," - 64 bit"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Program Files (x86)"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%SystemDrive%")),Object(l.b)("td",{parentName:"tr",align:null},"C:"),Object(l.b)("td",{parentName:"tr",align:null},"C:")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%SystemRoot%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Windows"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Windows")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%TEMP%"),",",Object(l.b)("inlineCode",{parentName:"td"},"%TMP%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%\\AppData\\Local\\Temp"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\%USERNAME%\\Local Settings\\Temp")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%USERPROFILE%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Users\\%USERNAME%"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Documents and Settings\\%USERNAME%")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%WINDIR%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Windows"),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Windows")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%SystemDirectory%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\WINDOWS\\System32"),Object(l.b)("td",{parentName:"tr",align:null})),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%PUBLIC%")),Object(l.b)("td",{parentName:"tr",align:null},"C:\\Users\\Public"),Object(l.b)("td",{parentName:"tr",align:null})))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Environment Variable"),Object(l.b)("th",{parentName:"tr",align:null},"Detail"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%CD%")),Object(l.b)("td",{parentName:"tr",align:null},"\u5f53\u524d\u76ee\u5f55")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%ERRORLEVEL%")),Object(l.b)("td",{parentName:"tr",align:null},"\u4e0a\u4e00\u4e2a\u547d\u4ee4\u7684\u9000\u51fa\u7801")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%OS%")),Object(l.b)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7cfb\u7edf - Windows_NT")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%USERDOMAIN%")),Object(l.b)("td",{parentName:"tr",align:null},"\u7528\u6237\u57df")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%USERNAME%")),Object(l.b)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%DATE%")),Object(l.b)("td",{parentName:"tr",align:null},"\u65e5\u671f")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%TIME%")),Object(l.b)("td",{parentName:"tr",align:null},"\u65f6\u95f4")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"%RANDOM%")),Object(l.b)("td",{parentName:"tr",align:null},"0-32767 \u968f\u673a\u6570")))))}o.isMDXComponent=!0}}]);