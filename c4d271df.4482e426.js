(window.webpackJsonp=window.webpackJsonp||[]).push([[726],{799:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),i=(a(0),a(988)),l={id:"ipfs",title:"IPFS"},p={unversionedId:"dev/protocol/ipfs",id:"dev/protocol/ipfs",isDocsHomePage:!1,title:"IPFS",description:"Tips",source:"@site/notes/dev/protocol/ipfs.md",slug:"/dev/protocol/ipfs",permalink:"/notes/dev/protocol/ipfs",editUrl:"https://github.com/wenerme/wener/edit/master/notes/dev/protocol/ipfs.md",version:"current",sidebar:"docs",previous:{title:"BitTorrent",permalink:"/notes/dev/protocol/bittorrent"},next:{title:"reverse",permalink:"/notes/dev/reverse/reverse"}},b=[{value:"Tips",id:"tips",children:[]},{value:"libp2p",id:"libp2p",children:[]},{value:"filestore",id:"filestore",children:[]},{value:"gateway",id:"gateway",children:[]}],c={toc:b};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tips"},"Tips"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the InterPlanetary File System"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ipfs"},"ipfs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ipfspics/ipfspics-server"},"ipfs.pics"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Distributed image hosting"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/download13/ipfstube"},"ipfstube")),Object(i.b)("li",{parentName:"ul"},"Why",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u63d0\u4f9b\u5757\u7ea7\u53bb\u91cd, \u4f7f\u5f97\u603b\u4f53\u6570\u636e\u91cf\u5f97\u5230\u538b\u7f29"),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ipfs/notes/issues/208"},"Comparison of IPFS and BitTorrent for Archives")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://discuss.ipfs.io/t/how-does-ipfs-compare-with-x/465"},"How does IPFS compare with X?")))))),Object(i.b)("li",{parentName:"ul"},"\u7aef\u53e3",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"4001 - Swarm TCP"),Object(i.b)("li",{parentName:"ul"},"4002 - Swarm uTP"),Object(i.b)("li",{parentName:"ul"},"5001 - API",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"/webui")," Web \u7ba1\u7406\u7aef"))),Object(i.b)("li",{parentName:"ul"},"8080 - Gateway"),Object(i.b)("li",{parentName:"ul"},"8081 - Swarm Websockets"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://discuss.ipfs.io/t/is-it-possible-to-use-ipfs-for-live-video-streaming/1115"},"Is it possible to use IPFS for LIVE video streaming?")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://apis.wener.me/ipfs/gateway/checker"},"IPFS\u516c\u5171\u7f51\u5173\u68c0\u6d4b")),Object(i.b)("li",{parentName:"ul"},"\u4f18\u52bf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 gateway - \u53ef\u4ee5\u901a\u8fc7 HTTP \u76f4\u63a5\u8bbf\u95ee"),Object(i.b)("li",{parentName:"ul"},"\u652f\u6301 MFS/\u865a\u62df\u76ee\u5f55"),Object(i.b)("li",{parentName:"ul"},"\u76ee\u6807\u662f\u66ff\u4ee3 internet \u800c\u4e0d\u662f\u5355\u7eaf\u7684 P2P \u6587\u4ef6\u5171\u4eab"),Object(i.b)("li",{parentName:"ul"},"ipns \u66ff\u4ee3 dns\uff0cipfs \u66ff\u4ee3 internet"))),Object(i.b)("li",{parentName:"ul"},"\u52a3\u52bf",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"IPFS \u7f51\u7edc\u76f8\u5bf9 torrent \u6ca1\u90a3\u4e48\u6210\u719f",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u610f\u5473\u7740\u8282\u70b9\u5c11"),Object(i.b)("li",{parentName:"ul"},"\u8d44\u6e90\u5c11"))),Object(i.b)("li",{parentName:"ul"},"\u6587\u4ef6\u5206\u53d1\u8f83\u6162"),Object(i.b)("li",{parentName:"ul"},"\u5f00\u53d1\u516c\u53f8\u91cd\u5fc3\u8f6c\u5411 filecoin"))),Object(i.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/cloudflare/ipfs-ext"},"https://github.com/cloudflare/ipfs-ext"))))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# macOS\nbrew install ipfs\n\n# https://docs.ipfs.io/reference/api/cli/\n# \u751f\u6210\u914d\u7f6e\u6587\u4ef6\n# \u9ed8\u8ba4\u4f4d\u4e8e $HOME/.ipfs \u53ef\u901a\u8fc7 IPFS_PATH \u66f4\u6539\nexport IPFS_PATH=$PWD/repo\n# \u4e5f\u53ef\u4ee5\u4f7f\u7528 --config \u6216 -c \u6307\u5b9a\nipfs init\n\n# \u83b7\u53d6\u914d\u7f6e\nipfs config -c $PWD/repo --json Addresses.API\n# \u4fee\u6539\u914d\u7f6e\n# \b\u9ed8\u8ba4\u53ea\u76d1\u542c 127.0.0.1\nipfs config Addresses.API /ip4/0.0.0.0/tcp/5001\n\n# \u542f\u52a8\u670d\u52a1\u7aef\nipfs daemon\n\n# \u53ef\u4f7f\u7528 --api \u6307\u5b9a\u8fdc\u7a0b\u63a5\u53e3\n# \u67e5\u770b\u8282\u70b9\nipfs --api /ip4/127.0.0.1/tcp/5001 swarm peers\n\n# \u5bb9\u5668\u73af\u5883\u4e2d\u4f7f\u7528 ipfs\ndocker run --rm -it -v $PWD:/host --entrypoint sh --workdir /host ipfs/go-ipfs\n\n# \u542f\u52a8\u670d\u52a1\n# -e IPFS_LOGGING=debug \u663e\u793a\u8c03\u8bd5\u65e5\u5fd7\ndocker run -it --rm \\\n   -v $PWD/repo:/data/ipfs \\\n   -p 8080:8080 -p 4001:4001 -p 5001:5001 \\\n   --name ipfs_host ipfs/go-ipfs\n\n\n# \u751f\u6210 hash \u4e0d\u6dfb\u52a0\u6587\u4ef6 - HASH \u5bf9\u5e94 IPLD file data\necho 'Hello IPFS!' | ipfs add -nq\n\n# MFS \u91cc\u6587\u4ef6\u7684 hash - \u662f\u4e00\u4e2a LINK - HASH \u5bf9\u5e94 IPLD \u591a\u4e2a file block - \u6700\u540e\u7684\u4e00\u4e2a block \u5bf9\u5e94 raw \u6570\u636e - \u76f8\u540c\u6570\u636e\u4f46\u4e0d\u540c hsah\nipfs files stat /myfile\n\n# cp \u53ef\u4ee5\u652f\u6301\u4ece add \u7684\u590d\u5236\u5230 mfs\nipfs files cp /ipfs/$(echo 'Hello IPFS!' | ipfs add -q) /hello.txt\nipfs files read /hello.txt\n")),Object(i.b)("h2",{id:"libp2p"},"libp2p"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/libp2p/libp2p"},"libp2p/libp2p")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/libp2p/go-libp2p"},"libp2p/go-libp2p"))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"\u529f\u80fd"),Object(i.b)("th",{parentName:"tr",align:null},"\u76ee\u7684"),Object(i.b)("th",{parentName:"tr",align:null},"\u5b9e\u73b0"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6570\u636e"),Object(i.b)("td",{parentName:"tr",align:null},"applications"),Object(i.b)("td",{parentName:"tr",align:null},"IPFS")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u6570\u636e"),Object(i.b)("td",{parentName:"tr",align:null},"naming",Object(i.b)("br",null),"merkledag"),Object(i.b)("td",{parentName:"tr",align:null},"IPNS",Object(i.b)("br",null),"IPLD")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\u79fb\u52a8\u6570\u636e"),Object(i.b)("td",{parentName:"tr",align:null},"exchange",Object(i.b)("br",null),"routing",Object(i.b)("br",null),"network"),Object(i.b)("td",{parentName:"tr",align:null},"libp2p")))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/ipld/specs/tree/master/ipld"},"https://github.com/ipld/specs/tree/master/ipld"),"\n",Object(i.b)("a",{parentName:"p",href:"https://blog.cloudflare.com/distributed-web-gateway/"},"https://blog.cloudflare.com/distributed-web-gateway/"),"\n",Object(i.b)("a",{parentName:"p",href:"https://developers.cloudflare.com/distributed-web/ipfs-gateway/"},"https://developers.cloudflare.com/distributed-web/ipfs-gateway/")),Object(i.b)("h2",{id:"filestore"},"filestore"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u7528\u7279\u6027\nipfs config --json Experimental.FilestoreEnabled true\n")),Object(i.b)("h2",{id:"gateway"},"gateway"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/gateway.md"},"https://github.com/ipfs/go-ipfs/blob/master/docs/gateway.md")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/ipfs/infra/blob/master/ipfs/gateway/nginx.conf"},"https://github.com/ipfs/infra/blob/master/ipfs/gateway/nginx.conf")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://rklaehn.github.io/2018/06/08/running-ipfs-gateway/"},"https://rklaehn.github.io/2018/06/08/running-ipfs-gateway/"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"ipfs swarm connect $peer\nipfs bootstrap add $peer\n")))}o.isMDXComponent=!0},988:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=o(a),m=n,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return a?r.a.createElement(f,p(p({ref:t},c),{},{components:a})):r.a.createElement(f,p({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var b in t)hasOwnProperty.call(t,b)&&(p[b]=t[b]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);