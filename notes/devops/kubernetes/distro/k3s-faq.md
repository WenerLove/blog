---
id: k3s-faq
title: K3S 常见问题
---

# K3S 常见问题

## 访问 K3S 的 ETCD

- 只支持部分接口

```bash
# kine 不支持 --keys-only
ETCDCTL_API=3 etcdctl --endpoints=unix:///var/lib/rancher/k3s/server/kine.sock get /registry/clusterrolebindings/system:kube-dns
# 所有
# ETCDCTL_API=3 etcdctl --endpoints=unix:///var/lib/rancher/k3s/server/kine.sock get / --prefix
```

## docker vs containerd

- 建议使用 docker
- docker
  - 操作运维熟悉
  - 可独立使用
  - docker 命令好用
  - 镜像、缓存会更加友好 - 虽然 containerd 有 docker shim
- containerd
  - docker 底层也是使用的 containerd
  - 因此使用 docker 会额外消耗一些内存
  - 没有专用的 cli - crictl 主要用于调试

## k3s 状态清理

- K3S 节点重置
- cni0 和 flannel.1 不一定存在
  - 取决于安装方式
  - /var/lib/cni

**脚本清理**

```bash
# 如果通过 get.k3s.io 安装会有该脚本
/usr/local/bin/k3s-killall.sh
```

**手动清理**

```bash
# 清理 iptables 规则
iptables-save | grep -v KUBE- | grep -v CNI- | iptables-restore
iptables-save | grep -v 10.4[2,3] | iptables-restore

# 容器镜像清理
# 停止所有 pod，清除停止容器，清除 volume，但保留下载的镜像
docker stop $(docker ps -aq)
docker system prune --volumes -f
docker system prune -f
# 如果不想保留镜像
# docker system prune -a
# 取消所有挂载
sudo umount $(mount -v | grep '/var/lib/kubelet' | awk '{print $3}')
# k3s 和 kubelet 状态
sudo rm -rf /var/lib/rancher
sudo rm -rf /var/lib/kubelet
# kubeconf
sudo rm -f /etc/rancher/k3s/k3s.yaml
# 日志清理
sudo rm -rf /var/log/containers/*
sudo rm -rf /var/log/pods/*
sudo rm -f /var/log/k3s.log

# 如果用了数据库
echo drop table if exists kine | psql -d $DATABASE_URL

# 如果有日志文件，例如 --log k3s-server.log --alsologtostderr
rm k3s{,-server,-agent}.log -f

ip li del cni0
ip li del flannel.1
rm -rf /var/lib/cni/*
```

## K3S 部署资源使用情况分析

- AlpineLinux - 50M
  - 显存 32M
  - sshd,tincd,dbus
- dockerd - 97M + shim/8M
- containerd - 50M + shim/11M
  - docker 也依赖 containerd
- server 550M
  - `--disable=traefik，servicelb`
  - server 也会启动 agent
  - 容器
    - metrics-server
    - coredns
    - local-path-provisioner
- agent 180M
- 运行基础服务 - ingress-nginx, metallb, cert-manager, kubernetes-dashboard
  - server - 1G
  - agent - 450M
  - +linkerd
    - server 1.55G
    - agent 920M

## 区分 worker 和 cp

- `--node-taint k3s-controlplane=true:NoExecute`

## 生成的证书自定义域名

- `--tls-san YOUR_IP_OR_HOSTNAME_HERE`

## x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0

```
E0905 23:03:57.992668   12600 controller.go:114] loading OpenAPI spec for "v1alpha1.tap.linkerd.io" failed with: failed to retrieve openAPI spec, http error: ResponseCode: 503, Body: Error trying to reach service: 'x509: certificate relies on legacy Common Name field, use SANs or temporarily enable Common Name matching with GODEBUG=x509ignoreCN=0', Header: map[Content-Type:[text/plain; charset=utf-8] X-Content-Type-Options:[nosniff]]
```

```bash
# 启动时添加环境变量
GODEBUG=x509ignoreCN=0
```

## k3s etcd 备份

- 默认快照目录 /server/db/snapshots

## 迁移 k3s data-dir

> data-dir 包含 etc, local-path StorageClass, longhorn 存储 - 影响性能

```bash
service k3s stop
# 如果没有 k3s-killal 可以考虑关闭 k3s 开机自动启动然后重启
k3s-killall

mkdir -p /data/k3s
rsync -aP /var/lib/rancher/k3s/ /data/k3s/

# 修改 data-dir 启动服务
echo 'data-dir: /data/k3s' >> /etc/rancher/k3s/config.yaml
service k3s start

# busybox 的 lsof 不支持过滤路径
apk search lsof
lsof +D /data/k3s | wc -l
# 输出 0 则迁移完成
lsof +D /var/lib/rancher/k3s | wc -l

# 清除
rm -rf /var/lib/rancher/k3s
```

## ContainerStatus from runtime service failed: rpc error: code = Unavailable desc = connection error: desc = "transport: Error while dialing dial unix: missing address"

似乎是 containerd 的问题

- https://github.com/k3s-io/k3s/issues/1901

## 出现很奇怪的 probe 失败，看不到日志，重启 pod 也无法修复

可能是是 k3s 网络 proxy 异常了，尝试重启 k3s 服务。

## k3s 占用大量带宽

- master 之间交互跑完了 50M 带宽

重启 k3s 解决
