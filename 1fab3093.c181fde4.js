(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1021:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=p(t),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||c;return t?r.a.createElement(d,l(l({ref:n},o),{},{components:t})):r.a.createElement(d,l({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<c;o++)i[o]=t[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},199:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),c=(t(0),t(1021)),i={title:"Crypto"},l={unversionedId:"security/crypto",id:"security/crypto",isDocsHomePage:!1,title:"Crypto",description:"Tips",source:"@site/notes/security/crypto.md",slug:"/security/crypto",permalink:"/notes/security/crypto",editUrl:"https://github.com/wenerme/wener/edit/master/notes/security/crypto.md",version:"current"},s=[{value:"Tips",id:"tips",children:[]},{value:"OpenSSL",id:"openssl",children:[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}]}],o={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"tips"},"Tips"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Comparison_of_cryptography_libraries"},"Comparison of cryptography libraries")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://arxiv.org/pdf/1405.0398.pdf"},"Symmetric Algorithm Survey: A Comparative Analysis")),Object(c.b)("li",{parentName:"ul"},"\u975e\u5bf9\u79f0\u52a0\u5bc6 - Asymmetric",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"DH"),Object(c.b)("li",{parentName:"ul"},"RSA"),Object(c.b)("li",{parentName:"ul"},"SSL"),Object(c.b)("li",{parentName:"ul"},"SSH"))),Object(c.b)("li",{parentName:"ul"},"\u5bf9\u79f0\u52a0\u5bc6 - Symmetric",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"AES - Advanced Encryption Standard",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u53d6\u4ee3\u4e86 DES"))),Object(c.b)("li",{parentName:"ul"},"Blow Fish - Drop-in replacement for DES or IDEA"),Object(c.b)("li",{parentName:"ul"},"Rijndael"),Object(c.b)("li",{parentName:"ul"},"DES - Data Encryption Standard"),Object(c.b)("li",{parentName:"ul"},"3DES"),Object(c.b)("li",{parentName:"ul"},"CAS"),Object(c.b)("li",{parentName:"ul"},"RC6"),Object(c.b)("li",{parentName:"ul"},"TEA"),Object(c.b)("li",{parentName:"ul"},"Mars"),Object(c.b)("li",{parentName:"ul"},"IDEA - International Data Encryption Algorithm"),Object(c.b)("li",{parentName:"ul"},"Serpent"),Object(c.b)("li",{parentName:"ul"},"Two Fish"),Object(c.b)("li",{parentName:"ul"},"RC4 - Rivest Cipher 4"),Object(c.b)("li",{parentName:"ul"},"RC5 - Rivest Cipher 5"),Object(c.b)("li",{parentName:"ul"},"RC6 - Rivest Cipher 6"))),Object(c.b)("li",{parentName:"ul"},"\u5bf9\u79f0\u52a0\u5bc6\u5206\u4e3a \u5757\u3001\u6d41 \u7b97\u6cd5"),Object(c.b)("li",{parentName:"ul"},"TLS - Transport Layer Security"),Object(c.b)("li",{parentName:"ul"},"SSL - Secure Sockets Layer",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"TLS \u524d\u4efb"))),Object(c.b)("li",{parentName:"ul"},"csr - Certificate Signing Request"),Object(c.b)("li",{parentName:"ul"},"crt - certificate",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"x509"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RSA_(cryptosystem)"},"RSA"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://youtu.be/wXB-V_Keiu8"},"Public Key Cryptography: RSA Encryption Algorithm")))),Object(c.b)("li",{parentName:"ul"},"DES - Data Encryption Standard",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5df2\u7ecf\u4e0d\u662f\u4e00\u79cd\u5b89\u5168\u7684\u52a0\u5bc6\u65b9\u6cd5\uff0c\u4e3b\u8981\u56e0\u4e3a\u5b83\u4f7f\u7528\u768456\u4f4d\u5bc6\u94a5\u8fc7\u77ed"))),Object(c.b)("li",{parentName:"ul"},"DER"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/X.509"},"X.509")),Object(c.b)("li",{parentName:"ul"},"PKI - Publick Key Infra"),Object(c.b)("li",{parentName:"ul"},"rc2/rc4"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/PKCS"},"PKCS")," - Public Key Cryptography Standards"),Object(c.b)("li",{parentName:"ul"},"ec - Elliptic Curves"),Object(c.b)("li",{parentName:"ul"},".pem \u2013 Privacy-enhanced Electronic Mail",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},'Base64 encoded DER certificate, enclosed between "-----BEGIN CERTIFICATE-----" and "-----END CERTIFICATE-----"'))),Object(c.b)("li",{parentName:"ul"},".cer, .crt, .der",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"usually in binary DER form, but Base64-encoded certificates are common too (see .pem above)"))),Object(c.b)("li",{parentName:"ul"},".p7b, .p7c",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"PKCS#7 SignedData structure without data, just certificate(s) or CRL(s)"))),Object(c.b)("li",{parentName:"ul"},".p12",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"PKCS#12, may contain certificate(s) (public) and private keys (password protected)"))),Object(c.b)("li",{parentName:"ul"},".pfx",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"predecessor of PKCS#12 (usually contains data in PKCS#12 format, e.g., with PFX files generated in IIS)")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# \u4f7f\u7528 brew \u5b89\u88c5\u7684 openssl\n# \u6216\u8005 brew link openssl --force\nalias openssl=$(brew --prefix openssl)/bin/openssl\n\n")),Object(c.b)("h2",{id:"openssl"},"OpenSSL"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://www.openssl.org/docs/manpages.html"},"manpages"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"Standard commands\nasn1parse         ca                ciphers           cms\ncrl               crl2pkcs7         dgst              dh\ndhparam           dsa               dsaparam          ec\necparam           enc               engine            errstr\ngendh             gendsa            genpkey           genrsa\nnseq              ocsp              passwd            pkcs12\npkcs7             pkcs8             pkey              pkeyparam\npkeyutl           prime             rand              req\nrsa               rsautl            s_client          s_server\ns_time            sess_id           smime             speed\nspkac             srp               ts                verify\nversion           x509\n\nMessage Digest commands (see the `dgst' command for more details)\nmd4               md5               mdc2              rmd160\nsha               sha1\n\nCipher commands (see the `enc' command for more details)\naes-128-cbc       aes-128-ecb       aes-192-cbc       aes-192-ecb\naes-256-cbc       aes-256-ecb       base64            bf\nbf-cbc            bf-cfb            bf-ecb            bf-ofb\ncamellia-128-cbc  camellia-128-ecb  camellia-192-cbc  camellia-192-ecb\ncamellia-256-cbc  camellia-256-ecb  cast              cast-cbc\ncast5-cbc         cast5-cfb         cast5-ecb         cast5-ofb\ndes               des-cbc           des-cfb           des-ecb\ndes-ede           des-ede-cbc       des-ede-cfb       des-ede-ofb\ndes-ede3          des-ede3-cbc      des-ede3-cfb      des-ede3-ofb\ndes-ofb           des3              desx              idea\nidea-cbc          idea-cfb          idea-ecb          idea-ofb\nrc2               rc2-40-cbc        rc2-64-cbc        rc2-cbc\nrc2-cfb           rc2-ecb           rc2-ofb           rc4\nrc4-40            seed              seed-cbc          seed-cfb\nseed-ecb          seed-ofb          zlib\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'# \u6d4b\u8bd5 sha1 \u901f\u5ea6\n# \u53ef\u7528\u4e8e\u6d4b\u8bd5\u673a\u5668\u6027\u80fd\nopenssl speed sha1\n\n# \u6d4b\u8bd5\u5b89\u88c5\u7684 OpenSSL \u662f\u5426\u652f\u6301 CPU \u52a0\u901f AES-NI\nopenssl speed aes-256-cbc\nopenssl speed -evp aes-256-cbc\n\n# \u521b\u5efa certificate request/unsigned key\n# ====================================\nDOMAIN=wener.me\n# \u540c\u65f6\u521b\u5efa key\nopenssl req -nodes -new -sha256 -keyout $DOMAIN.key.pem -out $DOMAIN.csr.pem\n# \u4f7f\u7528\u73b0\u6709\u79d8\u94a5\nopenssl req -nodes -new -sha256 -key $DOMAIN.key.pem -out $DOMAIN.csr.pem\n\n# \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\n# SubjectAltName \u53ef\u4ee5\u4f7f\u5f97\u8bc1\u4e66\u7528\u4e8e\u591a\u4e2a\u57df\u540d\ncat > $DOMAIN.conf << EOF\n[req]\ndistinguished_name = req_distinguished_name\nreq_extensions = req_ext\n\n[req_distinguished_name]\ncountryName = Country Name (2 letter code)\ncountryName_default = US\nstateOrProvinceName = State or Province Name (full name)\nstateOrProvinceName_default = New York\nlocalityName = Locality Name (eg, city)\nlocalityName_default = New York City\norganizationalUnitName = Organizational Unit Name (eg, section)\ncommonName = Common Name\ncommonName_default = $DOMAIN\ncommonName_max = 64\n\n[req_ext]\nsubjectAltName = @alt_names\n\n[alt_names]\nDNS.1   = $DOMAIN\nDNS.2   = www.$DOMAIN\nEOF\n# \u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u521b\u5efa\nopenssl req -nodes -new -sha256 -key $DOMAIN.key.pem -out $DOMAIN.csr.pem -config $DOMAIN.conf\n\n# \u663e\u793a\u79d8\u94a5\u6307\u7eb9\nopenssl x509 -subject -dates -fingerprint -in $DOMAIN.key.pem\n\n# \u751f\u6210 RSA key\nopenssl genrsa -out $DOMAIN.key.pem 4096\n# \u751f\u6210 EC key (using prime256v1 curve)\nopenssl ecparam -out $DOMAIN.key.pem -name prime256v1 -genkey\n\n# \u663e\u793a\u8bc1\u4e66\u4fe1\u606f\nopenssl req -text -noout -in $DOMAIN.csr.pem\nopenssl x509 -in $DOMAIN.crt.pem -noout -text\n\n# \u4e3a\u670d\u52a1\u751f\u6210 PEM\ncat $DOMAIN.key.pem $DOMAIN.crt.pem $DOMAIN.dhp.pem > $DOMAIN.pem\n\n# \u751f\u6210 PKCS12 \u6587\u4ef6\u683c\u5f0f\nopenssl pkcs12 -export -in $DOMAIN.crt.pem -inkey $DOMAIN.key.pem -out blah.p12 -name "Bill Gates"\n# \u5bf9 email \u52a0\u5bc6\nopenssl smine -sign -in msg.txt -text -out msg.encrypted -signer $DOMAIN.crt.pem -inkey $DOMAIN.key.pem\n\n# \u521b\u5efa CA\nopenssl req -new -x509 -keyout private/something-CA.key.pem -out ./something-CA.crt.pem -days 3650\n# \u5bfc\u51fa\u4e3a DER \u683c\u5f0f, \u6d4f\u89c8\u5668\u4f7f\u7528\nopenssl x509 -in something-CA.crt.pem -outform der -out something-CA.crt\n\n# \u8bc1\u4e66\u56de\u6536\nopenssl ca -revoke $DOMAIN.crt.pem\n# Generate Certificate Revocation List (CRL)\nopenssl ca -gencrl -out crl/$DOMAIN-CA.crl\n# Sign Certificate Request\nopenssl ca -out blah.crt.pem -in $DOMAIN.req.pem\n# Create Diffie-Hoffman Parameters for Current CA\nopenssl dhparam -out $DOMAIN-CA.dhp.pem 1536\n\n# Create self-signed certificate from generated key\nopenssl req -new -x509 -sha256 -key $DOMAIN.key.pem -out $DOMAIN.crt.pem\n\n\n# \u6587\u4ef6\u52a0\u5bc6\nopenssl enc -bf -A -in file_to_encrypt.txt\n# \u6587\u4ef6\u89e3\u5bc6\nopenssl enc -bf -d -A -in file_to_encrypt.txt\n\n# \u4e3b\u673a\u9a8c\u8bc1\n# =======\n# IMAP\nopenssl s_client -connect localhost:993 -quiet > /dev/null\n# SMTP\nopenssl s_client -connect localhost:465 -quiet > /dev/null\n# HTTP\necho HEAD / | openssl s_client -connect localhost:443 -quiet > /dev/null\n')),Object(c.b)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"OPENSSL_CONF")," \u73af\u5883\u53d8\u91cf\u6765\u5236\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84"),Object(c.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u6587\u4ef6\u540d\u4e3a ",Object(c.b)("inlineCode",{parentName:"li"},"openssl.cnf")),Object(c.b)("li",{parentName:"ul"},"\u914d\u7f6e\u5206\u4e3a\u8bf4\u660e\u548c\u9ed8\u8ba4\u503c")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# -batch  \u4e0d\u8be2\u95ee\u95ee\u9898\n# -config \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\n# -utf8   \u8bf4\u660e\u5185\u5bb9\u4e3a utf8 \u5b57\u7b26\n# -newkey \u6307\u5b9a\u751f\u6210 key \u4fe1\u606f, rsa:bits, dsa:file, ec:file\nopenssl req -new -x509 -keyout wener.key.pem -out wener.crt.pem -days 365\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"req \u9ed8\u8ba4\u914d\u7f6e")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"Country Name (2 letter code) [AU]:\nState or Province Name (full name) [Some-State]:\nLocality Name (eg, city) []:\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:\nOrganizational Unit Name (eg, section) []:\nCommon Name (e.g. server FQDN or YOUR name) []:\nEmail Address []:\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"req \u914d\u7f6e\u793a\u4f8b")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ini"},"openssl_conf = conf\n[conf]\nalg_section = evp_sect\n[evp_sect]\nfips_mode = no\n\n[req]\ndistinguished_name = req_distinguished_name\n\n[req_distinguished_name]\ncountryName = \u56fd\u5bb6\u540d\u5b57(\u4e24\u4e2a\u5b57\u7b26)\ncountryName_default = CN\nstateOrProvinceName = \u7701\u5e02\u540d\u5b57\nstateOrProvinceName_default = \u4e0a\u6d77\u5e02\nlocalityName = \u57ce\u5e02\u533a\u57df\u540d\u5b57\nlocalityName_default = \u95f5\u884c\u533a\norganizationalUnitName = \u7ec4\u7ec7\u5355\u4f4d\u540d\u5b57\norganizationalUnitName_default = \u6587\u96ea\u79d1\u6280\u53d1\u5c55\u6709\u9650\u516c\u53f8\ncommonName = \u516c\u5171\u540d\u5b57\ncommonName_default = wener.me\ncommonName_max = 64\n")))}p.isMDXComponent=!0}}]);