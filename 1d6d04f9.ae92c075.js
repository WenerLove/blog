(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(8),o=(n(0),n(879)),l={id:"syslinux",title:"Syslinux"},a={unversionedId:"os/linux/boot/syslinux",id:"os/linux/boot/syslinux",isDocsHomePage:!1,title:"Syslinux",description:"Tips",source:"@site/notes/os/linux/boot/syslinux.md",slug:"/os/linux/boot/syslinux",permalink:"/notes/os/linux/boot/syslinux",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/boot/syslinux.md",version:"current",sidebar:"docs",previous:{title:"initramfs",permalink:"/notes/os/linux/boot/initramfs"},next:{title:"U-Boot",permalink:"/notes/os/linux/boot/uboot"}},u=[{value:"Tips",id:"tips",children:[]},{value:"config",id:"config",children:[]},{value:"extlinux",id:"extlinux",children:[]},{value:"MBR",id:"mbr",children:[]},{value:"extlinux: no previous syslinux boot sector found",id:"extlinux-no-previous-syslinux-boot-sector-found",children:[]}],b={toc:u};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u53ea\u652f\u6301 X86"),Object(o.b)("li",{parentName:"ul"},"\u5206\u4e3a extlinux\u3001isolinux"),Object(o.b)("li",{parentName:"ul"},"\u652f\u6301 mbr\u3001efi\u3001gpt"),Object(o.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://shallowsky.com/linux/extlinux.html"},"How to install extlinux (syslinux) as a bootloader"))))),Object(o.b)("h2",{id:"config"},"config"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Config"},"Config"))),Object(o.b)("h2",{id:"extlinux"},"extlinux"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=EXTLINUX"},"EXTLINUX"))),Object(o.b)("h2",{id:"mbr"},"MBR"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://wiki.syslinux.org/wiki/index.php?title=Mbr"},"MBR")),Object(o.b)("li",{parentName:"ul"},"mbr - dos \u5206\u533a"),Object(o.b)("li",{parentName:"ul"},"altmbr.bin - \u6307\u5b9a\u5206\u533a\uff0c\u5ffd\u7565 boot"),Object(o.b)("li",{parentName:"ul"},"gptmbr.bin - gtp \u5206\u533a"),Object(o.b)("li",{parentName:"ul"},"isohdppx.bin - ISO HDD PPX"),Object(o.b)("li",{parentName:"ul"},"isohdpfx.bin - ISO HDD PFX"),Object(o.b)("li",{parentName:"ul"},"isolinux.bin - ISO Linux"),Object(o.b)("li",{parentName:"ul"},"\u98ce\u683c",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"_c")," - \u542f\u52a8\u6309\u4f4f Ctrl\uff0ccode boots from BIOS drive 0x80"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"_f")," - \u603b\u662f boots from BIOS drive 0x80.")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"# \u4fee\u590d mbr \u5206\u533a\ndd bs=440 conv=notrunc count=1 if=/usr/share/syslinux/mbr.bin of=$dev\n")),Object(o.b)("h1",{id:"faq"},"FAQ"),Object(o.b)("h2",{id:"extlinux-no-previous-syslinux-boot-sector-found"},"extlinux: no previous syslinux boot sector found"))}c.isMDXComponent=!0},879:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),c=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||o;return n?i.a.createElement(f,a(a({ref:t},b),{},{components:n})):i.a.createElement(f,a({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var b=2;b<o;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);