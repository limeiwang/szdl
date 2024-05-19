// .vitepress/config.js
// import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

export default {
  // 站点级选项
  title: 'Szdl CLI',
  description: '数字道路前端开发脚手架',

  themeConfig: {
    // 主题级选项
    nav: [
      { text: '起步', link: '/start/index.md' },
      { text: '配置参考', link: '/config/index.md' },
      // { text: '插件' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/limeiwang/szdl-cli' },
    ],
  },

  // vite: {
  //   plugins: [AutoSidebar({ deletePrefix: '.', collapsed: false })],
  // },
}