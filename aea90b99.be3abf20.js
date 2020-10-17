(window.webpackJsonp=window.webpackJsonp||[]).push([[352],{412:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(7),c=(n(0),n(586)),b={id:"dns",title:"DNS"},i={unversionedId:"ops/network/application/dns",id:"ops/network/application/dns",isDocsHomePage:!1,title:"DNS",description:"DNS",source:"@site/notes/ops/network/application/dns.md",slug:"/ops/network/application/dns",permalink:"/notes/ops/network/application/dns",editUrl:"https://github.com/wenerme/wener/edit/master/notes/ops/network/application/dns.md",version:"current",sidebar:"docs",previous:{title:"\u70f9\u996a\u8bcd\u6c47",permalink:"/notes/reference/cook/glossary"},next:{title:"HTTP",permalink:"/notes/ops/network/application/http"}},l=[{value:"Tips",id:"tips",children:[]},{value:"\u670d\u52a1",id:"\u670d\u52a1",children:[]},{value:"coredns",id:"coredns",children:[]},{value:"dnsupdate",id:"dnsupdate",children:[]},{value:"dig",id:"dig",children:[{value:"FAQ",id:"faq",children:[]},{value:"\u4f18\u5316",id:"\u4f18\u5316",children:[]}]}],p={rightToc:l};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"dns"},"DNS"),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_DNS_server_software"}),"Comparison of DNS server software")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.isc.org/community/rfcs/dns/"}),"DNS RFC")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://tools.ietf.org/html/rfc2136"}),"rfc2136")," - Dynamic Updates in the Domain Name System (DNS UPDATE)",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Dynamic_DNS"}),"Dynamic DNS:wiki")),Object(c.b)("li",{parentName:"ul"},"caddy ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://caddyserver.com/docs/tls.dns.rfc2136"}),"tls.dns.rfc2136")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://intodns.com"}),"intodns"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"DNS \u68c0\u6d4b"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://zh.wikipedia.org/zh-cn/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F"}),"DNS")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/List_of_DNS_record_types"}),"List of DNS record types")),Object(c.b)("li",{parentName:"ul"},"\u5237\u65b0 Google ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://developers.google.com/speed/public-dns/cache"}),"Public DNS")),Object(c.b)("li",{parentName:"ul"},"SOA - Start of ","[a zone of]"," authority record")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"Primary nameserver: ns.wener.me\nHostmaster E-mail address: hostmaster.i.wener.me\nSerial #: 1\nRefresh: 10800\nRetry: 3600\nExpire: 604800   1 weeks\nDefault TTL: 3600\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"TSIG - Transaction Signature"),Object(c.b)("li",{parentName:"ul"},"KSK - Key Signing Key",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u662f\u4e00\u5bf9\u516c\u94a5\u79c1\u94a5."),Object(c.b)("li",{parentName:"ul"},"\u79c1\u94a5\u7528\u4e8e\u751f\u6210 ZSK \u7684\u6570\u5b57\u7b7e\u540d. \u516c\u94a5\u5b58\u50a8\u4e8e DNS, \u7528\u4e8e\u5bf9 ZSK \u8fdb\u884c\u8ba4\u8bc1"))),Object(c.b)("li",{parentName:"ul"},"ZSK - Zone Signing Key",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u662f\u4e00\u5bf9\u516c\u94a5\u79c1\u94a5."),Object(c.b)("li",{parentName:"ul"},"\u79c1\u94a5\u7528\u4e8e\u751f\u6210\u6570\u5b57\u7b7e\u540d, \u5373\u4e3a\u6bcf\u4e2a RRSET \u751f\u6210 RSSIG(Resource Record Signature).\u516c\u94a5\u5b58\u50a8\u4e8e DNS \u7528\u4e8e\u5bf9 RRSIG \u8fdb\u884c\u8ba4\u8bc1."),Object(c.b)("li",{parentName:"ul"},"\u6bcf\u4e2a DNSSET \u4e2d\u7b7e\u540d\u7684 zone \u90fd\u7531 RRSIG \u4fdd\u62a4"))),Object(c.b)("li",{parentName:"ul"},"AXFR - Authoritative Zone Transfer",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/DNS_zone_transfer"}),"DNS zone transfer")),Object(c.b)("li",{parentName:"ul"},"PowerDNS ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/PowerDNS/pdns/wiki/AXFR-FAQ"}),"AXFR-FAQ")))),Object(c.b)("li",{parentName:"ul"},"References",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.cloudflare.com/dns/dnssec/how-dnssec-works/"}),"How DNSSEC works")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://tinydns.org/"}),"http://tinydns.org/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/miekg/dns"}),"https://github.com/miekg/dns")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"http://social.dnsmadeeasy.com/blog/authoritative-vs-recursive-dns-servers-whats-the-difference/"}),"Authoritative vs. Recursive DNS Servers: What\u2019s The Difference?")),Object(c.b)("li",{parentName:"ul"},"dnsimple ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://support.dnsimple.com/categories/dns/"}),"DNS FAQ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://support.dnsimple.com/articles/differences-between-a-cname-alias-url/"}),"Differences between the A, CNAME, ALIAS and URL records"))))),Object(c.b)("h2",{id:"\u670d\u52a1"},"\u670d\u52a1"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.knot-dns.cz/"}),"https://www.knot-dns.cz/")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"C + Lua"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tenta-browser/tenta-dns"}),"tenta-browser/tenta-dns")," Recursive and authoritative DNS server in go, including DNSSEC and DNS-over-TLS"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://news.ycombinator.com/item?id=15796943"}),"HN"))))),Object(c.b)("h2",{id:"coredns"},"coredns"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://coredns.io/"}),"https://coredns.io/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/coredns/coredns"}),"https://github.com/coredns/coredns")),Object(c.b)("li",{parentName:"ul"},"CNCF \u4e0b\u7684\u9879\u76ee")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"coredns -conf Corefile -dns.port 1053\n\ndig -p 1053 @localhost AAAA www.example.org +noall +answer\n\nnslookup -type=A twitter.com 1.0.0.1\nnslookup -type=A twitter.com 114.114.114.114\n")),Object(c.b)("h2",{id:"dnsupdate"},"dnsupdate"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://linux.die.net/man/8/nsupdate"}),"nsupdate.8"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u66f4\u65b0 NS \u8bb0\u5f55\u7684\u51fd\u6570\nns_update_record(){\n  nsupdate -y $TSIG_NAME:$TSIG_SECRET <<!\n  update delete $1 $3\n  update add $1 $2 $3 $4\n  send\n  !\n}\n# ns_update_record test.wener.me 600 A 192.168.1.1\n")),Object(c.b)("h2",{id:"dig"},"dig"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u6240\u6709 IP\ndig +short amazon.com\n# \u6240\u6709 NS\ndig NS +short amazon.com\n# \u8bf7\u6c42\u8fc7\u7a0b\ndig amazone.com +trace\n# \u901a\u8fc7 IP \u8bf7\u6c42\u57df\u540d\ndig +short -x 8.8.8.8\n# \u9876\u7ea7\u57df\u540d\u7684 NS\ndig +short NS me.\n# \u6307\u5b9a\u8bf7\u6c42\u7684 ns\ndig google.com @8.8.8.8\n# \u83b7\u53d6\u8d85\u65f6\u65f6\u95f4\ndig google.com +noall +answer\n# \u5224\u65ad\u662f\u5426\u6240\u6709 NS \u90fd\u540c\u6b65\u4e86\u57df\u540d, \u4e3b\u8981\u901a\u8fc7 SOA \u5e8f\u53f7\u5224\u65ad\ndig google.com +nssearch\n# \u770b\u57df\u540d\u5728 DNS \u4e0a\u662f\u5426\u5b58\u5728\ndig SOA google.nl @ns1.dns.nl.\n")),Object(c.b)("h3",{id:"faq"},"FAQ"),Object(c.b)("h4",{id:"\u516c\u5171-dsn"},"\u516c\u5171 DSN"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://public-dns.info/"}),"https://public-dns.info/"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://wiki.ipfire.org/dns/public-servers"}),"https://wiki.ipfire.org/dns/public-servers"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.lifewire.com/free-and-public-dns-servers-2626062"}),"https://www.lifewire.com/free-and-public-dns-servers-2626062"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.dnsperf.com"}),"https://www.dnsperf.com"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"8.8.8.8")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"8.8.4.4")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"223.6.6.6")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"223.5.5.5")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"114.114.114.114")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"1.1.1.1 "),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://blog.cloudflare.com/dns-resolver-1-1-1-1/"}),"https://blog.cloudflare.com/dns-resolver-1-1-1-1/")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"1.0.0.1"))),Object(c.b)("h4",{id:"\u5c06\u65e5\u5fd7\u8bb0\u5f55\u5230\u6587\u4ef6"},"\u5c06\u65e5\u5fd7\u8bb0\u5f55\u5230\u6587\u4ef6"),Object(c.b)("p",null,"\u4fee\u6539\u914d\u7f6e,\u8c03\u6574 syslog \u8f93\u51fa"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"# \u4f7f\u7528 LOCAL0 \u4f5c\u4e3a\u65e5\u5fd7\u8f93\u51fa\nlogging-facility=0\n")),Object(c.b)("p",null,"\u91cd\u5b9a\u5411 syslog \u8f93\u51fa"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"# \u4fee\u6539 syslog.conf\nlocal0  /var/log/pdns.log\n")),Object(c.b)("h4",{id:"ddns"},"DDNS"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Dynamic_DNS"}),"https://wiki.archlinux.org/index.php/Dynamic_DNS"))),Object(c.b)("p",null,"\u4fee\u6539 pdns.conf \u542f\u7528 dnsupdate"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"# \u542f\u7528\ndnsupdate=yes\n# \u9ed8\u8ba4\u662f 0.0.0.0/0, \u7f6e\u7a7a\u5219\u7981\u6b62\u6240\u6709\nallow-dnsupdate-from=\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# \u751f\u6210 TSIG\npu generate-tsig-key home-test hmac-md5\n# \u4e3a\u8be5 ZONE \u8bbe\u7f6e\u5141\u8bb8\u4fee\u6539\npu set-meta i.wener.me ALLOW-DNSUPDATE-FROM 0.0.0.0/0\n# \u4f7f\u7528 nsupdate \u66f4\u65b0\u8bb0\u5f55\nnsupdate <<!\nserver 127.0.0.1 5300\nzone i.wener.me\nupdate delete dev.i.wener.me. A\nupdate add dev.i.wener.me. 3600 A 127.0.0.4\nkey home-wener jI8oJLnLIVOEc6QR7fCUylRnpiD3DL4yXgvBQoaAodM=\nsend\n!\n\n# \u751f\u6210\u53e6\u5916\u4e00\u4e2a tsig\npu generate-tsig-key home-test2 hmac-md5\n# \u4fee\u6539\u4e3a\u53ea\u5141\u8bb8\u6307\u5b9a\u7684 tsig \u4fee\u6539\npu set-meta i.wener.me TSIG-ALLOW-DNSUPDATE home-test2\n")),Object(c.b)("h3",{id:"\u4f18\u5316"},"\u4f18\u5316"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://doc.powerdns.com/md/authoritative/performance/"}),"Performance and Tuning")),Object(c.b)("li",{parentName:"ul"},"\u67e5\u8be2\u7f13\u5b58"),Object(c.b)("li",{parentName:"ul"},"\u5305\u7f13\u5b58"),Object(c.b)("li",{parentName:"ul"},"\u76d1\u63a7\u7edf\u8ba1"),Object(c.b)("li",{parentName:"ul"},"\u65e5\u5fd7"),Object(c.b)("li",{parentName:"ul"},"\u540e\u7aef\u7f13\u5b58")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"# \u4ee5\u4e0b\u7684\u503c\u5747\u4e3a\u9ed8\u8ba4\u503c\n\n# SO_REUSEPORT\nreuseport=no\n# \u542f\u52a8\u76d1\u542c\u7684\u7ebf\u7a0b\u6570, \u4e00\u822c\u5efa\u8bae 3-4\nreceiver-threads=1\n# \u6bcf\u4e2a\u63a5\u6536\u7ebf\u7a0b\u5bf9\u5e94\u7684\u540e\u7aef\u7ebf\u7a0b\u6570\ndistributor-threads=3\n# \u5305\u7f13\u5b58\u7684\u65f6\u95f4, \u5c06\u5305\u7f13\u5b58\u540e\u4e0d\u9700\u8981\u8bf7\u6c42\u540e\u7aef\u6765\u4ece\u65b0\u7ec4\u88c5\u4e00\u4e2a\u5b8c\u6574\u7684\u6570\u636e\u5305\n# \u8bbe\u7f6e\u4e3a 60 \u4e00\u822c\u4e0d\u4f1a\u6709\u95ee\u9898\n# \u4e5f\u53ef\u4ee5\u5c06\u8be5\u503c\u8bbe\u7f6e\u4e3a\u51e0\u4e2a\u5c0f\u65f6, \u9700\u8981\u6e05\u9664\u7f13\u5b58\u7684\u65f6\u5019\u901a\u8fc7 pdns_control purge \u6765\u6e05\u9664\ncache-ttl=20\n# \u7f13\u5b58\u67e5\u8be2\u548c\u7ed3\u679c\u7684\u65f6\u95f4\nquery-cache-ttl=20\n# \u7f13\u5b58\u67e5\u8be2\u4f46\u4e0d\u7f13\u5b58\u7ed3\u679c\u7684\u65f6\u95f4\nnegquery-cache-ttl=60\n")))}o.isMDXComponent=!0},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=o(n),u=a,d=s["".concat(b,".").concat(u)]||s[u]||m[u]||c;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var p=2;p<c;p++)b[p]=n[p];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);