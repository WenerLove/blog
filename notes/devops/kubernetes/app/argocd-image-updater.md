---
title: ArgoCD Image Updater
---

# ArgoCD Image Updater

- [argoproj-labs/argocd-image-updater](https://github.com/argoproj-labs/argocd-image-updater)
  - 基于 argocd 自动更新镜像
  - 支持写回到仓库
- ConfigMap argocd-image-updater-config
- semver 使用 [Masterminds/semver](https://github.com/Masterminds/semver) 实现
- 限制
  - 只能更新 ArgoCD 管理的容器
  - 只能更新 Kustomize 或 Helm 生成的容器
  - pull secrets 必须在相同集群
- Application 维度 添加 annotation
  - image-list 监听的镜像

```bash
# 安装
kubectl install -f https://raw.githubusercontent.com/argoproj-labs/argocd-image-updater/stable/manifests/install.yaml

kubectl annotate app guestbook \
    argocd-image-updater.argoproj.io/image-list=gcr.io/heptio-images/ks-guestbook-demo \
    argocd-image-updater.argoproj.io/write-back-method=git

# Github 仓库
# export GITHUB_PULLSECRET="<username>:<token>"
# 测试镜像 - 检测版本、是否升级等
argocd-image-updater test nginx
```

```yaml
argocd-image-updater.argoproj.io/write-back-method: git
# 带认证信息
argocd-image-updater.argoproj.io/write-back-method: git:secret:argocd-image-updater/git-creds
# 可指定分支
argocd-image-updater.argoproj.io/git-branch: main

argocd-image-updater.argoproj.io/myalias.force-update: "true"
# 指定私钥
# secret:<namespace>/<secret_name>#<field>
# pullsecret:<namespace>/<secret_name> 包含 .dockerconfigjson 字段
# env:<variable_name>
# ext:<path_to_script> 脚本生成
argocd-image-updater.argoproj.io/<image_name>.pull-secret: <secret_ref>

# kustomize 修改镜像
# kustomize edit set image quay.io/argoproj/argocd=ghcr.io/argoproj/argocd
argocd-image-updater.argoproj.io/<image_alias>.kustomize.image_name: <original_image_name>

# semver
# 语法 [<alias_name>=]<image_path>[:<version_constraint>]
argocd-image-updater.argoproj.io/image-list: some/image:v1.2.x
# semver 为默认
argocd-image-updater.argoproj.io/<image>.update-strategy: semver

# 升级最新
argocd-image-updater.argoproj.io/image-list: <alias>=some/image
argocd-image-updater.argoproj.io/<alias>.update-strategy: latest
# 限制 tag
argocd-image-updater.argoproj.io/myimage.allow-tags: regexp:^[0-9a-f]{7}$
# 忽略 tag
argocd-image-updater.argoproj.io/myimage.ignore-tags: latest, master

# 摘要
argocd-image-updater.argoproj.io/image-list: <alias>=some/image:<tag_name>
argocd-image-updater.argoproj.io/<alias>.update-strategy: digest

# 名字
# tag 排序，适用于 tag 为 YYYY-MM-DD 场景
argocd-image-updater.argoproj.io/image-list: <alias>=some/image
argocd-image-updater.argoproj.io/<alias>.update-strategy: name

# Demo
# =======
# Helm 参数
argocd-image-updater.argoproj.io/image-list: dex=quay.io/dexidp/dex
argocd-image-updater.argoproj.io/dex.helm.image-name: dex.image.name
argocd-image-updater.argoproj.io/dex.helm.image-tag: dex.image.tag

# Helm 多镜像
argocd-image-updater.argoproj.io/image-list: fooalias=foo/bar, baralias=bar/foo
argocd-image-updater.argoproj.io/fooalias.helm.image-name: foo.image
argocd-image-updater.argoproj.io/fooalias.helm.image-tag: foo.tag
argocd-image-updater.argoproj.io/baralias.helm.image-name: bar.image
argocd-image-updater.argoproj.io/baralias.helm.image-tag: bar.tag
```

```yaml
data:
  # 提交消息模板
  git.commit-message-template: |
    build: automatic update of {{ .AppName }}

    {{ range .AppChanges -}}
    updates image {{ .Image }} tag '{{ .OldTag }}' to '{{ .NewTag }}'
    {{ end -}}
```

## 配置
- cm argocd-image-updater-config

```yaml
data:
  applications_api: argocd
  # The address of Argo CD API endpoint - defaults to argocd-server.argocd
  argocd.server_addr: <FQDN or IP of your Argo CD server>
  # Whether to use GRPC-web protocol instead of GRPC over HTTP/2
  argocd.grpc_web: true
  # Whether to ignore invalid TLS cert from Argo CD API endpoint
  argocd.insecure: false
  # Whether to use plain text connection (http) instead of TLS (https)
  argocd.plaintext: false

  argocd.token:
```
