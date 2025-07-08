module.exports = {
  title: 'Windows注册表功能文档',
  description: 'Windows注册表功能文档',
  lang: 'zh-CN',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '作者', 
        items: [
          { text: 'Github', link: 'https://github.com/wjm13206' },
          { text: 'bilibili', link: 'https://space.bilibili.com/3546791251282775' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎',
        collapsable: false,
        children: [
          { title: "学前必读", path: "/" }
        ]
      },
      {
        title: "鼠标设置",
        collapsable: false,
        children: [
          { title: "基础设置", path: "/" },
          { title: "高级配置", path: "/" }
        ]
      },
      {
        title: "键盘设置",
        collapsable: false,
        children: [
          { title: "快捷键配置", path: "/" }
        ]
      }
    ]
  }
}