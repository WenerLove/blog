(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1044:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),u=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=u(n),s=a,d=p["".concat(i,".").concat(s)]||p[s]||m[s]||l;return n?r.a.createElement(d,c(c({ref:t},o),{},{components:n})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),l=(n(0),n(1044)),i={title:"Alpine FAQ",id:"alpine-faq",date:new Date("2018-02-26T00:00:00.000Z")},c={unversionedId:"os/alpine/alpine-faq",id:"os/alpine/alpine-faq",isDocsHomePage:!1,title:"Alpine FAQ",description:"\u672f\u8bed",source:"@site/notes/os/alpine/alpine-faq.md",slug:"/os/alpine/alpine-faq",permalink:"/notes/os/alpine/alpine-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/alpine/alpine-faq.md",version:"current",sidebar:"docs",previous:{title:"Alpine chroot \u73af\u5883",permalink:"/notes/os/alpine/alpine-chroot"},next:{title:"Alpine \u5165\u95e8",permalink:"/notes/os/alpine/alpine-intro"}},b=[{value:"\u672f\u8bed",id:"\u672f\u8bed",children:[]},{value:"apk 1 error",id:"apk-1-error",children:[]},{value:"ifupdown \u5305\u4e0d\u4f1a\u542f\u52a8",id:"ifupdown-\u5305\u4e0d\u4f1a\u542f\u52a8",children:[]},{value:"\u6ca1\u6709\u63d0\u793a\u767b\u9646",id:"\u6ca1\u6709\u63d0\u793a\u767b\u9646",children:[]},{value:"Login incorrect - \u6ca1\u6709\u8be2\u95ee\u5bc6\u7801",id:"login-incorrect---\u6ca1\u6709\u8be2\u95ee\u5bc6\u7801",children:[]},{value:"process &#39;/sbin/getty -L ttyAMA0 115200 vt100&#39; (pid 1929) exited. Scheduling for restart.",id:"process-sbingetty--l-ttyama0-115200-vt100-pid-1929-exited-scheduling-for-restart",children:[]},{value:"getty: console: TIOCSCTTY: Operation not permitted",id:"getty-console-tiocsctty-operation-not-permitted",children:[]},{value:"\u5185\u6838\u98ce\u683c/kernel flavors",id:"\u5185\u6838\u98ce\u683ckernel-flavors",children:[]},{value:"rc-update: failed to add service <code>loadkmap&#39; to runlevel </code>boot&#39;: No such file or directory",id:"rc-update-failed-to-add-service-loadkmap-to-runlevel-boot-no-such-file-or-directory",children:[]},{value:"virt vs standard",id:"virt-vs-standard",children:[]},{value:"microcode",id:"microcode",children:[]},{value:"mount: mounting UUID=x-x-x-x on /sysroot failed: No such file or directory",id:"mount-mounting-uuidx-x-x-x-on-sysroot-failed-no-such-file-or-directory",children:[]},{value:"sh: can&#39;t access tty; job control turned off",id:"sh-cant-access-tty-job-control-turned-off",children:[]},{value:"initramfs emergency recovery shell launched. Type &#39;exit&#39; to continue boot",id:"initramfs-emergency-recovery-shell-launched-type-exit-to-continue-boot",children:[]},{value:"/dev/null/utmp: Not a directory",id:"devnullutmp-not-a-directory",children:[]},{value:"Password: chpasswd: PAM: Authentication failure",id:"password-chpasswd-pam-authentication-failure",children:[]}],o={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u672f\u8bed"},"\u672f\u8bed"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"HWE Hardware Enablement ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://askubuntu.com/questions/248914"},"https://askubuntu.com/questions/248914")))),Object(l.b)("li",{parentName:"ul"},"ECC - Error-correcting memory"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/EDAC_(Linux)"},"EDAC")," - Error Detection and Correction",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://bluesmoke.sourceforge.net/"},"EDAC Project")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.kernel.org/doc/html/v4.19/driver-api/edac.html"},"EDAC Device"))))),Object(l.b)("h2",{id:"apk-1-error"},"apk 1 error"),Object(l.b)("p",null,"apk \u64cd\u4f5c\u65f6\u663e\u793a\u6709\u9519\u8bef, \u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"p"},"1 error; 241 MiB in 67 packages"),"."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u5373\u53ef\napk fix\n")),Object(l.b)("h2",{id:"ifupdown-\u5305\u4e0d\u4f1a\u542f\u52a8"},"ifupdown \u5305\u4e0d\u4f1a\u542f\u52a8"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ifupdown \u6765\u81ea debian - \u867d\u7136\u4f9d\u8d56 iproute2 \u4f46\u662f\u4e0d\u4f1a\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},"busybox \u7684 ifup \u4f1a\u8c03\u7528 ip li set eth0 up"),Object(l.b)("li",{parentName:"ul"},"3.10 \u662f 0.7.x \u7248\u672c\u7684\uff0c\u4e0b\u4e00\u4e2a\u5927\u7248\u672c\u5e94\u8be5\u53ef\u7528")),Object(l.b)("h2",{id:"\u6ca1\u6709\u63d0\u793a\u767b\u9646"},"\u6ca1\u6709\u63d0\u793a\u767b\u9646"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ef\u80fd\u662f tty \u4e0d\u5bf9"),Object(l.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u4fee\u6539 ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/inittab")," \u91cc\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"ttyS0::respawn:/sbin/getty -L ttyS0 115200 vt100")),Object(l.b)("li",{parentName:"ul"},"qemu aarch64 \u4f7f\u7528\u7684 ttyAMA0")),Object(l.b)("h2",{id:"login-incorrect---\u6ca1\u6709\u8be2\u95ee\u5bc6\u7801"},"Login incorrect - \u6ca1\u6709\u8be2\u95ee\u5bc6\u7801"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ef\u80fd root \u5173\u95ed\u4e86 serial console \u767b\u9646"),Object(l.b)("li",{parentName:"ul"},"\u5141\u8bb8\u7684 tty ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/securetty")),Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u7684 ttyAMA0 \u53ef\u4ee5\u6dfb\u52a0")),Object(l.b)("h2",{id:"process-sbingetty--l-ttyama0-115200-vt100-pid-1929-exited-scheduling-for-restart"},"process '/sbin/getty -L ttyAMA0 115200 vt100' (pid 1929) exited. Scheduling for restart."),Object(l.b)("h2",{id:"getty-console-tiocsctty-operation-not-permitted"},"getty: console: TIOCSCTTY: Operation not permitted"),Object(l.b)("h2",{id:"\u5185\u6838\u98ce\u683ckernel-flavors"},"\u5185\u6838\u98ce\u683c/kernel flavors"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://git.alpinelinux.org/cgit/aports/tree/main/linux-hardened/APKBUILD"},"https://git.alpinelinux.org/cgit/aports/tree/main/linux-hardened/APKBUILD"),"\n",Object(l.b)("a",{parentName:"p",href:"https://git.alpinelinux.org/cgit/aports/tree/main/linux-vanilla"},"https://git.alpinelinux.org/cgit/aports/tree/main/linux-vanilla")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u533a\u522b\u5728\u4e8e\u4e0d\u540c\u7684\u5185\u6838\u7f16\u8bd1\u53c2\u6570\u548c\u5b89\u5168\u8865\u4e01"),Object(l.b)("li",{parentName:"ul"},"hardened < 3.10",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784: x86_64, x86, armhf"),Object(l.b)("li",{parentName:"ul"},"\u542f\u7528\u4e86\u5185\u6838\u5b89\u5168\u6a21\u5757"),Object(l.b)("li",{parentName:"ul"},"grsecurity"),Object(l.b)("li",{parentName:"ul"},"pax"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6210\u540e 500m \u5de6\u53f3, boot 20m \u5de6\u53f3",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u56fa\u4ef6: 210m"),Object(l.b)("li",{parentName:"ul"},"\u5185\u6838\u6a21\u5757: 270m"))))),Object(l.b)("li",{parentName:"ul"},"virthardened < 3.10",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784: x86_64, x86"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u5168\u548c hardened \u76f8\u540c"),Object(l.b)("li",{parentName:"ul"},"\u8c03\u6574\u5185\u6838\u53c2\u6570\u4ee5\u9002\u5e94\u865a\u62df\u5316\u73af\u5883"),Object(l.b)("li",{parentName:"ul"},"\u955c\u50cf\u66f4\u5c0f, \u66f4\u5feb, \u6ca1\u6709\u9ed8\u8ba4\u9a71\u52a8\u548c\u56fa\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u88c5\u5b8c\u6210\u540e 100m \u5de6\u53f3, boot 13m \u5de6\u53f3"))),Object(l.b)("li",{parentName:"ul"},"vanilla < 3.10",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784: x86_64, x86, s390x, ppc64le, ppc, armhf, aarch64"),Object(l.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u8c03\u8bd5"),Object(l.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5176\u4ed6\u98ce\u683c\u4e0d\u652f\u6301\u7684\u67b6\u6784"),Object(l.b)("li",{parentName:"ul"},"\u65e0\u5b89\u5168\u90e8\u76f8\u5173\u7684\u8865\u4e01\u548c\u5185\u6838\u914d\u7f6e"))),Object(l.b)("li",{parentName:"ul"},"virt",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u652f\u6301\u67b6\u6784: x86_64, x86"),Object(l.b)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u865a\u62df\u5316\u73af\u5883"))),Object(l.b)("li",{parentName:"ul"},"lts",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"LTS \u7248\u672c\u7684 Linux \u5185\u6838"))),Object(l.b)("li",{parentName:"ul"},"standard - \u6253\u5305\u5305\u542b\u66f4\u591a\u5185\u5bb9",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7535\u6e90\u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"CPU \u7ba1\u7406"),Object(l.b)("li",{parentName:"ul"},"PCI \u63a7\u5236\u5668"),Object(l.b)("li",{parentName:"ul"},"\u6027\u80fd\u76d1\u63a7"),Object(l.b)("li",{parentName:"ul"},"\u5185\u5b58"),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664\u7279\u6b8a\u786c\u4ef6\u76f8\u5173\u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u65e0\u7ebf"),Object(l.b)("li",{parentName:"ul"},"\u84dd\u7259"),Object(l.b)("li",{parentName:"ul"},"IRDA"),Object(l.b)("li",{parentName:"ul"},"NFC"),Object(l.b)("li",{parentName:"ul"},"SIP"),Object(l.b)("li",{parentName:"ul"},"I2C"),Object(l.b)("li",{parentName:"ul"},"\u952e\u76d8"),Object(l.b)("li",{parentName:"ul"},"\u9f20\u6807"),Object(l.b)("li",{parentName:"ul"},"\u89e6\u5c4f"),Object(l.b)("li",{parentName:"ul"},"\u535a\u901a SoC"),Object(l.b)("li",{parentName:"ul"},"\u7269\u7406\u63a7\u5236",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u7535\u6e90\u91cd\u7f6e"))),Object(l.b)("li",{parentName:"ul"},"\u96f7\u7535"),Object(l.b)("li",{parentName:"ul"},"\u5b89\u5353"))),Object(l.b)("li",{parentName:"ul"},"\u4e0d\u4f1a\u6784\u5efa\u56fa\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664\u786c\u4ef6\u76f8\u5173\u9a71\u52a8"),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664\u786c\u4ef6\u76f8\u5173\u517c\u5bb9\u8bbe\u7f6e"),Object(l.b)("li",{parentName:"ul"},"\u6dfb\u52a0 XEN"),Object(l.b)("li",{parentName:"ul"},"\u79fb\u9664 JFFS, UBIFS")))),Object(l.b)("h2",{id:"rc-update-failed-to-add-service-loadkmap-to-runlevel-boot-no-such-file-or-directory"},"rc-update: failed to add service ",Object(l.b)("inlineCode",{parentName:"h2"},"loadkmap' to runlevel "),"boot': No such file or directory"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u786e\u4fdd ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/init.d/loadkmap")," \u5b58\u5728"),Object(l.b)("li",{parentName:"ul"},"\u786e\u4fdd ",Object(l.b)("inlineCode",{parentName:"li"},"/etc/runlevels/boot/")," \u76ee\u5f55\u5b58\u5728"),Object(l.b)("li",{parentName:"ul"},"chroot \u6dfb\u52a0 boot runlevel \u6709\u95ee\u9898"),Object(l.b)("li",{parentName:"ul"},"\u4f7f\u7528 ln - ",Object(l.b)("inlineCode",{parentName:"li"},"ln -s /etc/init.d/$svc /etc/runlevels/boot"))),Object(l.b)("h2",{id:"virt-vs-standard"},"virt vs standard"),Object(l.b)("h2",{id:"microcode"},"microcode"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"AlpineLinux \u7684 microcode \u5728 non-free \u4e0b\uff0c\u9700\u8981\u81ea\u5df1\u7f16\u8bd1"),Object(l.b)("li",{parentName:"ul"},"\u7f16\u8bd1\u5b8c\u6210\u53ef\u76f4\u63a5\u62f7\u8d1d\u8fdb\u884c\u5b89\u88c5 ",Object(l.b)("inlineCode",{parentName:"li"},"apk add --allow-untrusted intel-ucode-20180312-r0.apk")),Object(l.b)("li",{parentName:"ul"},"\u7136\u540e\u9700\u8981\u4fee\u6539 ",Object(l.b)("inlineCode",{parentName:"li"},"/boot/extlinux.conf"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5982\u679c\u60f3\u8981 extlinux \u80fd\u591f\u81ea\u52a8\u68c0\u6d4b\uff0c\u53ef\u53c2\u8003 ",Object(l.b)("a",{parentName:"li",href:"https://patchwork.alpinelinux.org/patch/3443/"},"https://patchwork.alpinelinux.org/patch/3443/")))),Object(l.b)("li",{parentName:"ul"},"\u8fd9\u662f\u6211\u76ee\u524d\u7684\u8c03\u6574\uff0c\u6bd4\u63cf\u8ff0\u7684\u7b80\u5355\u4e9b")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},'        if [ -f "/boot/intel-ucode.img" ]; then\n            everbose "Found microcode for Intel CPUs: /boot/intel-ucode.img"\n            echo "  INITRD intel-ucode.img,initramfs-$tag" >> $conf.new\n        else\n            echo "  INITRD initramfs-$tag" >> $conf.new\n        fi\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7136\u540e ",Object(l.b)("inlineCode",{parentName:"li"},"update-extlinux")," \u5373\u53ef"),Object(l.b)("li",{parentName:"ul"},"\u53ef\u518d\u6b21\u786e\u8ba4 ",Object(l.b)("inlineCode",{parentName:"li"},"/boot/extlinux.conf")," \u4e2d\u7684 INITRD \u6709\u4e86 intel-ucode.img")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\u540e\u4f1a\u770b\u5230 microcode \u5347\u7ea7\u7684\u4fe1\u606f\ndmesg | grep microcode\n")),Object(l.b)("p",null,"\u4f8b\u5982"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"microcode: sig=0x906e9, pf=0x2, reversion=0x84\nmicrocode: Microcode Update Driver: v2.2\n")),Object(l.b)("h2",{id:"mount-mounting-uuidx-x-x-x-on-sysroot-failed-no-such-file-or-directory"},"mount: mounting UUID=x-x-x-x on /sysroot failed: No such file or directory"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ef\u80fd\u7cfb\u7edf\u8fd8\u6ca1\u53d1\u73b0\u8bbe\u5907\u5c31\u5c31\u884c\u6302\u8f7d\u4e86",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u901a\u5e38\u51fa\u73b0\u5728\u4f7f\u7528 usb \u542f\u52a8\u7684\u60c5\u51b5"),Object(l.b)("li",{parentName:"ul"},"\u56e0\u4e3a rootdelay \u8fd9\u6837\u7684\u53c2\u6570\u5728 extlinux \u6302\u8f7d\u65f6\u8fd8\u672a\u751f\u6548\uff0c\u53ef\u80fd\u7cfb\u7edf\u542f\u52a8\u4f46\u8bbe\u5907\u8fd8\u672a\u53d1\u73b0"),Object(l.b)("li",{parentName:"ul"},"\u5c1d\u8bd5\u4fee\u6539\u542f\u52a8\u811a\u672c\uff0c\u589e\u52a0 sleep 10",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/alpinelinux/mkinitfs/blob/master/initramfs-init.in#L474"},"https://github.com/alpinelinux/mkinitfs/blob/master/initramfs-init.in#L474")))),Object(l.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u51fa\u73b0\u65f6\u5019\u53ef\u4ee5\u8003\u8651\u624b\u52a8\u6302\u8f7d"),Object(l.b)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u8003\u8651\u591a\u91cd\u542f\u51e0\u6b21\uff0c\u6709\u4e00\u5b9a\u51e0\u7387\u8fdb\u5165\u7cfb\u7edf")))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"mount UUID=x-x-x-x /sysroot\n# \u6302\u8f7d\u5b8c\u6210\u540e\u9000\u51fa\u4f1a\u7ee7\u7eed\u542f\u52a8\n# exit\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u53ef\u80fd\u542f\u52a8\u5206\u533a\u574f\u4e86 - \u53ef\u4ee5\u76f4\u63a5\u4ece\u73b0\u6709\u7684\u7cfb\u7edf\u590d\u5236 boot \u5185\u5bb9\u5230\u542f\u52a8\u5206\u533a\u3002",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u590d\u5236\u540e\u5207\u8bb0\u4fee\u6539 extlinux.conf \u4e2d\u7684 UUID \u5582\u6b63\u786e\u7684 rootfs\u3002"),Object(l.b)("li",{parentName:"ul"},"\u590d\u5236\u540e\u8bb0\u5f97\u68c0\u67e5 kernel \u7248\u672c\uff0c\u786e\u4fdd\u88ab\u590d\u5236\u7684\u5b58\u50a8\u4e0a /lib/modules \u4e0b\u6709\u5bf9\u5e94 kernel \u7248\u672c\u7684\u6a21\u5757\u3002")))),Object(l.b)("h2",{id:"sh-cant-access-tty-job-control-turned-off"},"sh: can't access tty; job control turned off"),Object(l.b)("p",null,"\u4e00\u822c\u4f1a\u4f34\u968f\u5206\u533a\u635f\u574f\u51fa\u73b0\u3002"),Object(l.b)("h2",{id:"initramfs-emergency-recovery-shell-launched-type-exit-to-continue-boot"},"initramfs emergency recovery shell launched. Type 'exit' to continue boot"),Object(l.b)("p",null,"\u5206\u533a\u635f\u574f\u540e\u4f1a\u8fdb\u5165\u6025\u6551\u6a21\u5f0f\u3002"),Object(l.b)("h2",{id:"devnullutmp-not-a-directory"},"/dev/null/utmp: Not a directory"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://bugs.alpinelinux.org/issues/3282"},"#3282")," - users: /dev/null/utmp: Not a directory",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u6267\u884c who, last, screen \u65f6")))),Object(l.b)("h2",{id:"password-chpasswd-pam-authentication-failure"},"Password: chpasswd: PAM: Authentication failure"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"3.6+ BUG ",Object(l.b)("a",{parentName:"li",href:"https://gitlab.alpinelinux.org/alpine/aports/issues/10209"},"https://gitlab.alpinelinux.org/alpine/aports/issues/10209"))))}u.isMDXComponent=!0}}]);