module.exports = {
  title: 'Windows注册表功能文档',
  description: 'Windows注册表功能文档',
  lang: 'zh-CN',
  base: '/windows/',
  theme: 'reco',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'keywords', content: 'Windows, 注册表, 配置, 系统优化' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true,
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
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
        title: "鼠标",
        collapsable: false,
        children: [
          { title: "鼠标指针轨迹设置注册表项", path: "/mouse/Displaypointertrails.md" }
        ]
      },
      {
        title: "桌面",
        collapsable: false,
        children: [
          { title: "桌面快捷方式箭头图标设置注册表项", path: "/desktop/RemoveShortcutArrow.md" },
          { title: "隐藏桌面上的所有图标注册表项", path: "/desktop/HideDesktopIcons.md" }
        ]
      },
      {
        title: "系统设置",
        collapsable: false,
        children: [
          { title: "自定义登录背景注册表项", path: "/system/customizeloginbackground.md" }
        ]
      }
    ]
  }
}