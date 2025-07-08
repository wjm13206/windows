module.exports = {
  title: 'Windows注册表功能文档',
  description: 'Windows注册表功能文档',
  lang: 'zh-CN',
  base: '/windows/',
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
        title: "鼠标",
        collapsable: false,
        children: [
          { title: "鼠标指针轨迹设置注册表项", path: "/mouse/Displaypointertrails.md" }
        ]
      }
        ]
      }
    
  }
