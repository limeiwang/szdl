# szdl-cli
szdl-cli 是一个大屏数据可视化工具，使用szdl-cli可以快速搭建可视化大屏。

## 安装

```bash
npm install szdl-cli -g
```

## 使用
```bash
szdl init <project-name>

cd <project-name>

npm install

npm run dev
```

## 技术栈
- Vue3 - 核心框架
- Vue Router - 路由管理
- Vuex - 状态管理
- Axios - 网络请求库
- ECharts - 数据可视化库
- Less - CSS预处理器
- Ant Design Vue - 组件库
- Vueuse - 组合式API工具库
- Day.js - 时间处理库

## 目录结构
```
|-- config - 配置文件
|-- mock - 模拟数据
|-- public - 静态资源
|-- src - 源代码
|   |-- api - 网络请求
|   |-- assets - 静态资源
|   |-- components - 组件
|   |-- network - 网络请求封装
|   |-- router - 路由
|   |-- store - 状态管理
|   |-- utils - 工具类
|   |-- views - 页面
|   |-- App.vue - 根组件
|   |-- main.js - 入口文件
|   |-- style.css - 全局样式
|-- .env.development - 开发环境变量
|-- .env.production - 生产环境变量
|-- .env.test - 测试环境变量
|-- .eslintrc.js - ESLint配置文件
|-- .gitignore - Git忽略文件
|-- package.json - 项目配置文件
|-- postcss.config.js - PostCSS配置文件
|-- README.md - 项目说明文件
|-- vue.config.js - Vue配置文件
```

## 功能
- 数据可视化
- 组件库
- 状态管理
- 路由管理
- 网络请求
- 工具类

## 计划
- [x] 数据可视化
- [x] 组件库

## 参与贡献
1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request

## 特别鸣谢
- [vue3](https://github.com/vuejs/vue-next)
- [vite](https://github.com/vitejs/vite)
- [pinia](https://github.com/vuejs/pinia)
- [unocss](https://github.com/unocss/unocss)
- [iconify](https://github.com/iconify/iconify)
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons)
- [unplugin-auto-import](https://github.com/unplugin/unplugin-vue-components)
- [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)
- [postcss-px-to-viewport-8-plugin](https://github.com/evrone/postcss-px-to-viewport-8-plugin)
