(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{1021:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},696:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),o=(r(0),r(1021)),i={title:"Redis \u6d41\u7b80\u4ecb",slug:"redis-stream-intro",tags:["Java","\u963f\u91cc","Redis"]},c={permalink:"/story/redis-stream-intro",editUrl:"https://github.com/wenerme/wener/edit/master/story/2018/2018-10-25-redis-stream-intro.md",source:"@site/story/2018/2018-10-25-redis-stream-intro.md",description:"\u6982\u8ff0",date:"2018-10-25T00:00:00.000Z",tags:[{label:"Java",permalink:"/story/tags/java"},{label:"\u963f\u91cc",permalink:"/story/tags/\u963f\u91cc"},{label:"Redis",permalink:"/story/tags/redis"}],title:"Redis \u6d41\u7b80\u4ecb",readingTime:6.4,truncated:!0,prevItem:{title:"Java 11 JavaFX \u7b2c\u4e00\u4e2a\u5e94\u7528",permalink:"/story/java11-javafx-first-app"},nextItem:{title:"Java with GraphQL",permalink:"/story/jraphql"}},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[]}],p={toc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),Object(o.b)("p",null,"\u5bf9 Redis \u7684\u5370\u8c61\u53ef\u80fd\u5f88\u591a\u4eba\u90fd\u8fd8\u53ea\u505c\u7559\u5728 2.8 \u7684\u9636\u6bb5\uff0c\u4e00\u4e2a\u7ed3\u6784\u5316\u7684\u5185\u5b58\u5b58\u50a8\uff08\u55ef\uff0c\u597d\u50cf\u4e5f\u6ca1\u4ec0\u4e48\u95ee\u9898\uff09\u3002\u867d\u7136\u8ddd\u79bb 4.0 \u53d1\u5e03(2017.7.14)\u5df2\u7ecf\u4e00\u5e74\u8fc7\u53bb\u4e86\uff0c\u4f46\u76f8\u4fe1\u5f88\u591a\u4eba\u5df2\u7ecf\u4e0d\u518d\u53bb\u5173\u5fc3 Redis \u7684\u65b0\u7279\u6027\u4e86\uff0c\u56e0\u4e3a\u4ece 2.8 \u540e\u7684 Redis \u5df2\u7ecf\u8db3\u591f\u597d\u7528\u4e86\u3002\ud83d\ude04"),Object(o.b)("p",null,"Redis 3.0 \u6dfb\u52a0\u4e86\u96c6\u7fa4\u7684\u80fd\u529b\uff0c4.0 \u6dfb\u52a0\u4e86\u6a21\u5757\u5316\u80fd\u529b\uff0c5.0 \u6dfb\u52a0\u4e86\u6d41\u7c7b\u578b\u3002\u5982\u679c\u8bf4 3.0 \u548c 4.0 \u6dfb\u52a0\u7684\u65b0\u7279\u6027\u5bf9\u4e8e\u4e00\u822c\u7528\u6237\u6765\u8bf4\u65e0\u8db3\u8f7b\u91cd\uff0c\u90a3 5.0 \u65b0\u7684\u6d41\u7c7b\u578b\u5c31\u4e0d\u53ef\u5ffd\u89c6\u5566\uff01"),Object(o.b)("p",null,"\u5728\u6ca1\u6709 Stream \u7c7b\u578b\u4e4b\u524d\uff0c\u5176\u5b9e Redis \u4e5f\u652f\u6301\u5404\u79cd\u7c7b\u4f3c\u4e8e\u6d41\u7684\u5904\u7406\u6a21\u5f0f\uff0c\u4f8b\u5982 Fire and forget \u6a21\u5f0f\u7684 Pub/Sub\uff0c\u963b\u585e\u961f\u5217 BLPOP\uff0c\u65f6\u95f4\u5e8f\u5217 zsort \u5b58\u50a8\uff0c\u7b49\u5404\u79cd\u65b9\u5f0f\u90fd\u80fd\u6a21\u62df\u7c7b\u4f3c\u7684\u573a\u666f\uff0c\u4f46\u5374\u90fd\u89c9\u5f97\u6709\u70b9\u6b20\u7f3a\uff0c\u7ec8\u4e8e\uff0c\u6d41\u7c7b\u578b\u6210\u529f\u7684\u89e3\u51b3\u4e86\u4ee5\u4e0a\u6240\u6709\u95ee\u9898\uff0c\u5e76\u80fd\u652f\u6301\u5176\u4ed6\u7684\u5e38\u89c1\u4f7f\u7528\u573a\u666f\u3002"),Object(o.b)("p",null,"\u8bf4\u5230\u6d41\u6d88\u606f\u5c31\u4e0d\u5f97\u4e0d\u8bf4\u5230 Kafka \u5566\uff0c\u6211\u76f8\u4fe1\u5927\u5bb6\u5e94\u8be5\u90fd\u542c\u8bf4\u8fc7\u6d88\u606f\u4e2d\u95f4\u4ef6 Kafka\uff0c\u81f3\u4e8e RocketMQ \u6216\u8005 MetaQ \u5c31\u4e0d\u518d\u8d58\u8ff0\u4ed6\u4eec\u4e0e Kafka \u7684\u5173\u7cfb\u5566\uff0cRedis \u4f5c\u8005\u5728\u5b9e\u73b0\u6d41\u7c7b\u578b\u65f6\u5927\u91cf\u53c2\u8003\u4e86 Kafka \u4e2d\u7684\u6982\u5ff5\uff0c\u4f8b\u5982\u6d88\u8d39\u6a21\u578b\uff0c\u6d41\u6d88\u606f\u7684\u6982\u5ff5\u3002\u5f53\u7136\u6240\u6709\u7684\u53c2\u8003\u53ea\u5c40\u9650\u4e8e Kafka \u7684\u6587\u6863\uff0c\u4e0e Kafka \u7684\u4ee3\u7801\u5b9e\u73b0\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb\u54e6\u3002"),Object(o.b)("p",null,"\u5fc3\u52a8\u4e0d\u5982\u5fc3\u52a8\uff0c\u90a3\u5148\u4e00\u7779\u4e3a\u5feb\u5427\u3002"))}s.isMDXComponent=!0}}]);