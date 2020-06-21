# Nextcloud 配置

## Tips
* [config.sample.php](https://github.com/nextcloud/server/blob/master/config/config.sample.php)

```php

<?php

$CONFIG = array(
// 实例唯一标识符
'instanceid' => '',
// 默认语言 - 默认 en
'default_language' => 'zh',
'default_locale' => 'zh_CN',
// 默认打开应用
'defaultapp' => 'files',
// 信任域名
'trusted_domains' =>
  [
    'localhost',
  ],

// 默认开启帮助文档
'knowledgebaseenabled' => false,

// 模板文件目录 - 新创建用户
'skeletondirectory' => 'core/skeleton',
// 'skeletondirectory' => 'config/skeleton',

// HTTP_PROXY
'proxy' => '',
'proxyuserpwd' => '',
// NO_PROXY
'proxyexclude' => [],

// 是否自动检查更新
'updatechecker' => false,

// 是否有网络链接 - false 则是离线状态
'has_internet_connection' => true,
// 检测联通性
'connectivity_check_domains' => [
	'www.nextcloud.com',
	'www.startpage.com',
	'www.eff.org',
	'www.edri.org'
],


// 个个平台的客户端下载链接配置
'customclient_desktop' =>
	'https://nextcloud.com/install/#install-clients',
'customclient_android' =>
	'https://play.google.com/store/apps/details?id=com.nextcloud.client',
'customclient_ios' =>
	'https://itunes.apple.com/us/app/nextcloud/id1125420102?mt=8',
'customclient_ios_appid' =>
    '1125420102',
    

// 是否启用应用商店
'appstoreenabled' => true,

// 信任的反向代理
'trusted_proxies' => ['203.0.113.45', '198.51.100.128', '192.168.2.0/24'],
'forwarded_for_headers' => ['HTTP_X_FORWARDED_FOR'],

// 代理配置
// ==============================

// 覆盖主机 - 用于检测不到反向代理的 Host 时
'overwritehost' => '',

// 如果在反向代理之后检测不到 schema 时可以设置 - 例如 https
'overwriteprotocol' => '',

// 覆盖 root 路径 - 例如 www.example.com/nextcloud 会检测为 /nextcloud
// 反向代理的时候可能检测不到
'overwritewebroot' => '',

// 复写的条件地址 - 例如 10\.0\.0\. 则只覆盖 10.0.0.0/24 过来的请求
// 正则表达式
'overwritecondaddr' => '',

// 覆盖命令行工具地址 - 例如 occ cron 等
'overwrite.cli.url' => '',

)
```

## OIDC

https://lachlanlife.net/nextcloud-part-3-single-sign-on-with-keycloak/

Nextcloud Single-Sign-On with Auth0
https://medium.com/@mathiasconradt/nextcloud-single-sign-on-with-auth0-a546cdf1fccf

## SAML


(Realm) -> Client Scopes -> role_list (saml) -> Mappers tab -> role list -> 'Single Role Attribute'.
先创建一个 saml，拷贝到 nextcloud 即可
然后导出 metadata
然后再导入

Account is not provisioned

Auto provisioning not allowed and user wener does not exist

only do the authentication via SAML and get the user info from a separately set up LDAP, that uses the same usernames


when enabling SAML with "user has to exist in some other backend like LDAP" option the user is not able to sign in > ERROR: not provisioned
https://github.com/nextcloud/user_saml/issues/12#issuecomment-423335779

https://help.nextcloud.com/t/user-saml-account-not-provisioned/18650/5