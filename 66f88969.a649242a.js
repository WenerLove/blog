(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{275:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var r=t(2),a=t(7),i=(t(0),t(580)),o={slug:"arduino",title:"Arduino"},c={unversionedId:"hardware/microcontroller/dev/arduino",id:"hardware/microcontroller/dev/arduino",isDocsHomePage:!1,title:"Arduino",description:"Arduino",source:"@site/contents/notes/hardware/microcontroller/dev/arduino.md",slug:"/hardware/microcontroller/dev/arduino",permalink:"/notes/hardware/microcontroller/dev/arduino",version:"current",sidebar:"docs",previous:{title:"\u7535\u6c60",permalink:"/notes/hardware/battery/battery"},next:{title:"ImageMagick",permalink:"/notes/algorithm/cv/imagemagick"}},l=[{value:"managers",id:"managers",children:[]},{value:"cli",id:"cli",children:[]}],u={rightToc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"arduino"},"Arduino"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/arduino/arduino-cli"}),"arduino/arduino-cli"))),Object(i.b)("h2",{id:"managers"},"managers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://arduino.esp8266.com/stable/package_esp8266com_index.json"}),"http://arduino.esp8266.com/stable/package_esp8266com_index.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://digistump.com/package_digistump_index.json"}),"http://digistump.com/package_digistump_index.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://drazzy.com/package_drazzy.com_index.json"}),"http://drazzy.com/package_drazzy.com_index.json"))),Object(i.b)("h2",{id:"cli"},"cli"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://arduino.stackexchange.com/questions/15893"}),"How to compile, upload and monitor via the Linux command line?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/arduino/serial-discovery"}),"https://github.com/arduino/serial-discovery")),Object(i.b)("li",{parentName:"ul"},"\u914d\u7f6e",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"macOS - $HOME/Library/Arduino15/arduino-cli.yaml")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"# macos\nbrew install arduino-cli\n\n# linux\ncurl -LO https://downloads.arduino.cc/arduino-cli/arduino-cli_latest_Linux_64bit.tar.gz\ntar zxvf arduino-cli_latest_Linux_64bit.tar.gz\nsudo mv arduino-cli /usr/local/bin/\n\n# alpinelinux\n# \u4f9d\u7136\u4f1a\u6709 __strdup: symbol not found\n# \u9664\u975e\u4f7f\u7528 glibc \u5426\u5219\u65e0\u89e3\napk add libc6-compat gcompat\n\narduino-cli config init\n\narduino-cli core update-index\narduino-cli core search\n\n# \u5305\u542b\u5f88\u591a\u57fa\u7840\u5de5\u5177\narduino-cli coree install arduino:avr\n\narduino-cli core update-index --additional-urls http://digistump.com/package_digistump_index.json\narduino-cli core install digistump:avr --additional-urls http://digistump.com/package_digistump_index.json\n\n# \u5141\u8bb8\u64cd\u4f5c serial\nsudo adduser $USER dialout\n\narduino-cli board list\n\narduino-cli sketch new FirstSketch\ncd FirstSketch\n# arduino:avr:uno\narduino-cli compile -b digistump:avr:digispark-tiny\n")))}d.isMDXComponent=!0},580:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),d=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,b=p["".concat(o,".").concat(m)]||p[m]||s[m]||i;return t?a.a.createElement(b,c(c({ref:n},u),{},{components:t})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);