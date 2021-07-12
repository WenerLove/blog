(window.webpackJsonp=window.webpackJsonp||[]).push([[718],{1129:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),d=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=d(a),s=n,m=o["".concat(l,".").concat(s)]||o[s]||u[s]||b;return a?r.a.createElement(m,i(i({ref:t},p),{},{components:a})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},791:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),b=(a(0),a(1129)),l={title:"Partition"},i={unversionedId:"os/linux/partition",id:"os/linux/partition",isDocsHomePage:!1,title:"Partition",description:"- GPT",source:"@site/notes/os/linux/partition.md",slug:"/os/linux/partition",permalink:"/notes/os/linux/partition",editUrl:"https://github.com/wenerme/wener/edit/master/notes/os/linux/partition.md",version:"current",sidebar:"docs",previous:{title:"tcpdump",permalink:"/notes/os/linux/network/tcpdump"},next:{title:"Linux Device",permalink:"/notes/os/linux/dev/dev"}},c=[{value:"sfdisk",id:"sfdisk",children:[]},{value:"sgdisk",id:"sgdisk",children:[]},{value:"\u5206\u533a\u7c7b\u578b",id:"\u5206\u533a\u7c7b\u578b",children:[]},{value:"\u6df7\u5408\u5206\u533a",id:"\u6df7\u5408\u5206\u533a",children:[]},{value:"MBR vs GPT",id:"mbr-vs-gpt",children:[]},{value:"LBA vs CHS",id:"lba-vs-chs",children:[]},{value:"\u6269\u5c55\u6700\u540e\u4e00\u4e2a\u5206\u533a",id:"\u6269\u5c55\u6700\u540e\u4e00\u4e2a\u5206\u533a",children:[]}],p={toc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/GUID_Partition_Table"},"GPT")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/storage/disk-management/change-an-mbr-disk-into-a-gpt-disk"},"Convert an MBR disk into a GPT disk"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"abbr"),Object(b.b)("th",{parentName:"tr",align:null},"meaning"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"MBR"),Object(b.b)("td",{parentName:"tr",align:null},"Master Boot Record")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"EBR"),Object(b.b)("td",{parentName:"tr",align:null},"Extended Boot Record")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"GPT"),Object(b.b)("td",{parentName:"tr",align:null},"GUID Partition Table")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"RDB"),Object(b.b)("td",{parentName:"tr",align:null},"Rigid Disk Block")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"CHS"),Object(b.b)("td",{parentName:"tr",align:null},"Cylinder-Head-Sector")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"tool"),Object(b.b)("th",{parentName:"tr",align:null},"desc"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"fdisk"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sfdisk"),Object(b.b)("td",{parentName:"tr",align:null},"\u652f\u6301\u811a\u672c\u7684 fdisk")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"cfdisk"),Object(b.b)("td",{parentName:"tr",align:null},"new versions; older do just DOS partitions")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"gdisk"),Object(b.b)("td",{parentName:"tr",align:null},"interactive tool and GPT counterpart to fdisk")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"sgdisk"),Object(b.b)("td",{parentName:"tr",align:null},"\u652f\u6301\u811a\u672c\u7684 gdisk")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"cgdisk"),Object(b.b)("td",{parentName:"tr",align:null},"menu-based tool and GPT counterpart to cfdisk")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"partx"),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"partprobe"),Object(b.b)("td",{parentName:"tr",align:null},"\u68c0\u6d4b\u5206\u533a\u53d8\u5316")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"parted"),Object(b.b)("td",{parentName:"tr",align:null})))),Object(b.b)("h2",{id:"sfdisk"},"sfdisk"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man8/sfdisk.8.html"},"sfdisk"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"2.26 \u5f00\u59cb\u652f\u6301 MBR (DOS), GPT, SUN, SGI \u4f46\u4e0d\u652f\u6301 CHS")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# dump\nsfdisk -d /dev/sda\n")),Object(b.b)("h2",{id:"sgdisk"},"sgdisk"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# Move backup GPT data structures to the end of the disk\nsgdisk -e /dev/sda\n")),Object(b.b)("h2",{id:"\u5206\u533a\u7c7b\u578b"},"\u5206\u533a\u7c7b\u578b"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Partition_type"},"Partition type")),Object(b.b)("li",{parentName:"ul"},"\u5e38\u7528\u7c7b\u578b",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"07h - NTFS/exFAT"),Object(b.b)("li",{parentName:"ul"},"0Bh - FAT32 with CHS"),Object(b.b)("li",{parentName:"ul"},"0Ch - FAT32 with LBA"),Object(b.b)("li",{parentName:"ul"},"AFh - HFS/HFS+"),Object(b.b)("li",{parentName:"ul"},"E8h - LUKS"),Object(b.b)("li",{parentName:"ul"},"EDh - \u63d0\u8bae\u4f5c\u4e3a GPT/MBR \u6df7\u5408\u5206\u533a"),Object(b.b)("li",{parentName:"ul"},"EEh - GPT \u7684\u4fdd\u62a4 MBR \u5206\u533a"),Object(b.b)("li",{parentName:"ul"},"EFh - EFI \u7cfb\u7edf\u5206\u533a, \u4e00\u822c\u4e3a FAT12, FAT16, FAT32")))),Object(b.b)("h2",{id:"\u6df7\u5408\u5206\u533a"},"\u6df7\u5408\u5206\u533a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://wiki.gentoo.org/wiki/Hybrid_partition_table"},"Hybrid partition table")),Object(b.b)("li",{parentName:"ul"},"gdisk \u6062\u590d\u6a21\u5f0f\u4e0b\u6709 MBR \u6df7\u5408\u64cd\u4f5c\u5de5\u5177\uff0c\u5c06\u9700\u8981\u653e\u5230 MBR \u7684\u5206\u533a\u6309\u5e8f\u6307\u5b9a\u5373\u53ef")),Object(b.b)("h2",{id:"mbr-vs-gpt"},"MBR vs GPT"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"GPT",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u6700\u521d\u9884\u7559\u7684\u5206\u533a\u8868\u7a7a\u95f4\u51b3\u5b9a\u53ef\u4ee5\u6709\u591a\u5c11\u4e2a\u5206\u533a"),Object(b.b)("li",{parentName:"ul"},"LBA 0",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u9884\u7559\u7684\u517c\u5bb9 MBR \u7684\u4fe1\u606f"),Object(b.b)("li",{parentName:"ul"},"\u5206\u533a\u7c7b\u578b 0xEE \u8868\u793a\u4e3a GPT \u5206\u533a"),Object(b.b)("li",{parentName:"ul"},"MBR/GPT \u6df7\u5408\u5206\u533a\u8868\u7684\u786c\u76d8\u8be5\u90e8\u5206\u4e5f\u4f1a\u4ee5 MBR \u7684\u5f62\u5f0f\u5b58\u50a8\u524d\u56db\u4e2a\u5206\u533a"))))),Object(b.b)("li",{parentName:"ul"},"MBR",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u5f15\u5bfc\u7a0b\u5e8f\u4f1a\u76f4\u63a5\u5b58\u50a8\u4e0e MBR \u4e2d"),Object(b.b)("li",{parentName:"ul"},"\u65e9\u671f MBR \u57fa\u4e8e CHS, \u73b0\u5728\u4e00\u822c\u4e5f\u57fa\u4e8e LBA")))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"VS"),Object(b.b)("th",{parentName:"tr",align:null},"MBR"),Object(b.b)("th",{parentName:"tr",align:null},"GPT"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\u540d\u5b57"),Object(b.b)("td",{parentName:"tr",align:null},"\u4e3b\u5f15\u5bfc\u8bb0\u5f55"),Object(b.b)("td",{parentName:"tr",align:null},"\u5168\u5c40\u552f\u4e00\u6807\u8bc6\u5206\u533a\u8868")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\u5206\u533a\u6570"),Object(b.b)("td",{parentName:"tr",align:null},"4"),Object(b.b)("td",{parentName:"tr",align:null},"128 / EFI \u6700\u5c0f\u5c3a\u5bf8")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"\u6700\u5927\u5377"),Object(b.b)("td",{parentName:"tr",align:null},"2 TB"),Object(b.b)("td",{parentName:"tr",align:null},"18 EB")))),Object(b.b)("h2",{id:"lba-vs-chs"},"LBA vs CHS"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"[LBA]",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u903b\u8f91\u533a\u5757\u5730\u5740"),Object(b.b)("li",{parentName:"ul"},"\u6bd4\u8f83\u73b0\u4ee3\u5316\u7684\u65b9\u5f0f"),Object(b.b)("li",{parentName:"ul"},"\u66f4\u7b26\u5408 SSD, Flash \u8fd9\u6837\u7684\u5757\u8bbe\u5907"),Object(b.b)("li",{parentName:"ul"},"\u4e00\u822c\u4e3a 512 \u6216 1024"),Object(b.b)("li",{parentName:"ul"},"ISO-9660 \u6807\u51c6\u7684 CD \u4e3a 2048"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cylinder-head-sector"},"CHS"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\u67f1\u9762-\u78c1\u5934-\u6247\u533a"),Object(b.b)("li",{parentName:"ul"},"\u65e7\u5f0f\u7684\u673a\u68b0\u78c1\u76d8")))),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"// H = heads per cylinder - \u6bcf\u4e2a\u78c1\u67f1\u7684\u78c1\u5934\u6570\n// S = sectors per track - \u6bcf\u78c1\u9053\u7684\u6247\u533a\u6570\n$lba = ($c * H + $h) * S + $s - 1;\n\n$c = $lba / (S * H);\n$h = ($lba / S) % H;\n$s = ($lba % S) + 1;\n")),Object(b.b)("h1",{id:"faq"},"FAQ"),Object(b.b)("h2",{id:"\u6269\u5c55\u6700\u540e\u4e00\u4e2a\u5206\u533a"},"\u6269\u5c55\u6700\u540e\u4e00\u4e2a\u5206\u533a"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# from cloud-guest-utils\ngrowpart /dev/sda 3\n\n#\nparted /dev/sda resize 3 100%\n\n# fidks \u6269\u5c55\u6700\u540e\u4e00\u4e2a\u5206\u533a\napk add util-linux\necho -e 'd\\n\\nn\\n\\n\\n\\n\\n\\np\\nw\\n' | fdisk /dev/sda\n\n# GPT\nsgdisk -e /dev/sda\nsgdisk -d 3 /dev/sda\nsgdisk -N 3 /dev/sda\npartprobe /dev/sda\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u6269\u5c55\u6587\u4ef6\u7cfb\u7edf")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-bash"},"# ext4\napk add e2fsprogs-extra\nresize2fs /dev/sda3\n\n# luks - \u6269\u5c55\u5206\u533a\ncryptsetup open /dev/sdb2 root\ncryptsetup resize root\n# \u6269\u5c55\u6587\u4ef6\u7cfb\u7edf\nresize2fs /dev/mapper/root\n")))}d.isMDXComponent=!0}}]);