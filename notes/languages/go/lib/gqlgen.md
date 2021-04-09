---
title: gqlgen
---

# gqlgen
* [99designs/gqlgen](https://github.com/99designs/gqlgen) 是什么？
  * 基于生成的 GraphQL 引擎
  * Schema first - 需要 DSL 定义 GraphQL Schema
  * 类型安全
  * 支持 Plugin - 修改配置, 生成代码
* 缺点
  * 库代码质量一般
  * 文档少
  * 插件能力弱，且没什么 Demo
* [gqlgen vs gophers vs graphql-go vs thunder](https://gqlgen.com/feature-comparison/)

:::caution

* embeded 相同 struct 需要重复写 resolver
  * [99designs/gqlgen#592](https://github.com/99designs/gqlgen/issues/592) - resolve 逻辑不能定义在 interface 上
  * [99designs/gqlgen#626](https://github.com/99designs/gqlgen/issues/626) - 生成类型不支持 embedded
* enum 不支持 int - [99designs/gqlgen#366](https://github.com/99designs/gqlgen/issues/366)

:::