(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{122:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return d})),t.d(r,"default",(function(){return c}));var o=t(3),n=t(8),i=(t(0),t(836)),a={title:"Longhorn \u5e38\u89c1\u95ee\u9898"},l={unversionedId:"devops/kubernetes/storage/longhorn-faq",id:"devops/kubernetes/storage/longhorn-faq",isDocsHomePage:!1,title:"Longhorn \u5e38\u89c1\u95ee\u9898",description:"Longhorn on K3S",source:"@site/notes/devops/kubernetes/storage/longhorn-faq.md",slug:"/devops/kubernetes/storage/longhorn-faq",permalink:"/notes/devops/kubernetes/storage/longhorn-faq",editUrl:"https://github.com/wenerme/wener/edit/master/notes/devops/kubernetes/storage/longhorn-faq.md",version:"current",sidebar:"docs",previous:{title:"Local Path Provisioner",permalink:"/notes/devops/kubernetes/storage/local-path-provisioner"},next:{title:"Longhorn \u7248\u672c",permalink:"/notes/devops/kubernetes/storage/longhorn-version"}},d=[{value:"Longhorn on K3S",id:"longhorn-on-k3s",children:[]},{value:"Error deploying driver: failed to get kubelet root dir, no related proc for root-dir detection, error out",id:"error-deploying-driver-failed-to-get-kubelet-root-dir-no-related-proc-for-root-dir-detection-error-out",children:[]},{value:"MountVolume.SetUp failed for volume &quot;registration-dir&quot; : hostPath type check failed: /var/lib/rancher/k3s/agent/kubelet/plugins_registry is not a directory",id:"mountvolumesetup-failed-for-volume-registration-dir--hostpath-type-check-failed-varlibrancherk3sagentkubeletplugins_registry-is-not-a-directory",children:[]},{value:"Unable to attach or mount volumes: unmounted volumes=registration-dir, unattached volumes=registration-dir lib-modules socket-dir host-dev host-sys longhorn-service-account-token-7ppv2 pods-mount-dir host kubernetes-csi-dir: timed out waiting for the condition",id:"unable-to-attach-or-mount-volumes-unmounted-volumesregistration-dir-unattached-volumesregistration-dir-lib-modules-socket-dir-host-dev-host-sys-longhorn-service-account-token-7ppv2-pods-mount-dir-host-kubernetes-csi-dir-timed-out-waiting-for-the-condition",children:[]},{value:"cannot find disk config file, maybe due to a mount error",id:"cannot-find-disk-config-file-maybe-due-to-a-mount-error",children:[]},{value:"\u8282\u70b9 Allocated \u4e3a\u8d1f",id:"\u8282\u70b9-allocated-\u4e3a\u8d1f",children:[]},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",children:[]},{value:"driver name driver.longhorn.io not found in the list of registered CSI drivers",id:"driver-name-driverlonghornio-not-found-in-the-list-of-registered-csi-drivers",children:[]}],s={toc:d};function c(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"longhorn-on-k3s"},"Longhorn on K3S"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://longhorn.io/docs/1.1.0/advanced-resources/os-distro-specific/csi-on-k3s/"},"https://longhorn.io/docs/1.1.0/advanced-resources/os-distro-specific/csi-on-k3s/"))),Object(i.b)("h2",{id:"error-deploying-driver-failed-to-get-kubelet-root-dir-no-related-proc-for-root-dir-detection-error-out"},"Error deploying driver: failed to get kubelet root dir, no related proc for root-dir detection, error out"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"csi:\n  # 1.0.2\n  # https://github.com/longhorn/longhorn/issues/1861#issuecomment-705297295\n  kubeletRootDir: /var/lib/rancher/k3s/agent/kubelet\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/longhorn/longhorn/issues/1861"},"#1861"))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'time="2021-02-23T16:39:59Z" level=error msg="failed to get arg root-dir. Need to specify \\"--kubelet-root-dir\\" in your Longhorn deployment yaml.: failed to get kubelet root dir, no related proc for root-dir detection, error out"\ntime="2021-02-23T16:39:59Z" level=fatal msg="Error deploying driver: failed to get arg root-dir. Need to specify \\"--kubelet-root-dir\\" in your Longhorn deployment yaml.: failed to get kubelet root dir, no related proc for root-dir detection, error out"\n')),Object(i.b)("h2",{id:"mountvolumesetup-failed-for-volume-registration-dir--hostpath-type-check-failed-varlibrancherk3sagentkubeletplugins_registry-is-not-a-directory"},'MountVolume.SetUp failed for volume "registration-dir" : hostPath type check failed: /var/lib/rancher/k3s/agent/kubelet/plugins_registry is not a directory'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"# \u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u6267\u884c\nsudo mkdir /var/lib/rancher/k3s/agent/kubelet/plugins_registry\n")),Object(i.b)("h2",{id:"unable-to-attach-or-mount-volumes-unmounted-volumesregistration-dir-unattached-volumesregistration-dir-lib-modules-socket-dir-host-dev-host-sys-longhorn-service-account-token-7ppv2-pods-mount-dir-host-kubernetes-csi-dir-timed-out-waiting-for-the-condition"},"Unable to attach or mount volumes: unmounted volumes=","[registration-dir]",", unattached volumes=","[registration-dir lib-modules socket-dir host-dev host-sys longhorn-service-account-token-7ppv2 pods-mount-dir host kubernetes-csi-dir]",": timed out waiting for the condition"),Object(i.b)("h2",{id:"cannot-find-disk-config-file-maybe-due-to-a-mount-error"},"cannot find disk config file, maybe due to a mount error"),Object(i.b)("p",null,"\u8282\u70b9\u4e0a\u78c1\u76d8\u4e0d\u5b58\u5728\uff0c\u5220\u9664\u91cd\u5efa"),Object(i.b)("h2",{id:"\u8282\u70b9-allocated-\u4e3a\u8d1f"},"\u8282\u70b9 Allocated \u4e3a\u8d1f"),Object(i.b)("p",null,"\u5220\u9664 disk \u4ece\u65b0\u521b\u5efa\uff0c\u5982\u679c\u9009\u62e9\u7684\u76ee\u5f55\u4e0d\u5b58\u5728\u53ef\u80fd\u4e5f\u4f1a\u6709\u95ee\u9898"),Object(i.b)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f https://raw.githubusercontent.com/longhorn/longhorn/v1.1.0/deploy/longhorn.yaml\nkubectl delete -f https://raw.githubusercontent.com/longhorn/longhorn/v1.1.0/uninstall/uninstall.yaml\n\n# \u5982\u679c CRD \u8fd8\u5728\u53ef\u4ee5\u5f3a\u5236\u5220\u9664\nfor crd in $(kubectl get crd -o jsonpath={.items[*].metadata.name} | tr ' ' '\\n' | grep longhorn.rancher.io); do\n  kubectl -n ${NAMESPACE} get $crd -o yaml | sed \"s/\\- longhorn.rancher.io//g\" | kubectl apply -f -\n  kubectl -n ${NAMESPACE} delete $crd --all\n  kubectl delete crd/$crd\ndone\n")),Object(i.b)("h2",{id:"driver-name-driverlonghornio-not-found-in-the-list-of-registered-csi-drivers"},"driver name driver.longhorn.io not found in the list of registered CSI drivers"))}c.isMDXComponent=!0},836:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return g}));var o=t(0),n=t.n(o);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),c=function(e){var r=n.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(t),b=o,g=u["".concat(a,".").concat(b)]||u[b]||p[b]||i;return t?n.a.createElement(g,l(l({ref:r},s),{},{components:t})):n.a.createElement(g,l({ref:r},s))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);