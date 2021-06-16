(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(a,".").concat(f)]||p[f]||m[f]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},655:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),i=(n(0),n(1083)),a={id:"initramfs"},c={unversionedId:"os/linux/boot/initramfs",id:"os/linux/boot/initramfs",isDocsHomePage:!1,title:"initramfs",description:"initramfs",source:"@site/notes/os/linux/boot/initramfs.md",slug:"/os/linux/boot/initramfs",permalink:"/notes/os/linux/boot/initramfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/boot/initramfs.md",version:"current",sidebar:"docs",previous:{title:"dracut",permalink:"/notes/os/linux/boot/dracut"},next:{title:"Syslinux",permalink:"/notes/os/linux/boot/syslinux"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"initramfs"},"initramfs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://access.redhat.com/solutions/24029"},"How to unpack/uncompress and repack/re-compress an initial ramdisk (initrd/initramfs) boot image file?"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u56e0\u4e3a\u4f1a\u89e3\u538b\u5230\u5f53\u524d\u76ee\u5f55\uff0c\u4f7f\u7528\u7a7a\u76ee\u5f55\u907f\u514d\u6e05\u7406\nmkdir -p /tmp/initrd\ncd /tmp/initrd\n\n# GZIP\nzcat < /boot/initramfs-lts | cpio -idmv\nfind . | cpio -o -c -R root:root | gzip -9 > /boot/new.img\n\n# xz/LZMA\nxz -dc < /boot/initramfs-lts | cpio -idmv\nfind . 2>/dev/null | cpio -o -c -R root:root | xz -9 --format=lzma > /boot/new.img\n")))}l.isMDXComponent=!0}}]);