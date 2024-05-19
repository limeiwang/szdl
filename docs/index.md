---
# 提供三种布局，doc、page和home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-home-page
title: Home
titleTemplate: Szdl CLI
editLink: true
lastUpdated: true

hero:
    name: Szdl CLI
    text: 一个开箱即用的前端框架
    tagline: 
    actions:
    - theme: brand
      text: 起步 ➡
      link: /start/index.md

# 官方文档相关配置：https://vitepress.dev/reference/default-theme-features
features:
  - title: 极简
    details: 基于Vue3、Vite、Antdv等最新技术栈开发，极简的配置，让你专注于业务开发。
  - title: 快速
    details: 无论应用程序大小如何，都始终极快的模块热重载（HMR），快速的开发，让你专注于业务开发。
  - title: 高效
    details: 对日常使用频率较高的组件二次封装,满足基础工作需求，让你专注于业务开发，提高开发效率。

footer: MIT Licensed | Copyright © 2022-present szdl
---

## 快速开始

```bash
npm i szdl-cli -g
```

```bash
szdl init my-project
```

```bash
cd my-project
npm install
npm run dev
```
