import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  //logo: '/logo.svg',
  base: "/one-piece/",
  lang: 'zh-CH',
  title: "one-piece",
  description: "",
  mermaid: {},
  markdown: {
    math: true,
  },  
  themeConfig: {
    outline: {
      level: "deep",
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    search: {
      provider: 'local',     
    },    
    
    // nav: [       
    //   {
    //     text: 'Hub',
    //     items: [
    //       { text: 'github', link: 'https://github.com/sn9527' },
    //     ]
    //   }       
    // ],

    sidebar: {
      '/g1-edu': [
        { text: 'ros2-humble-安装', link: '/g1-edu/ros2-humble-安装' },
        { text: 'unitree_sdk2-安装', link: '/g1-edu/unitree_sdk2-安装' },
        { text: '网络配置', link: '/g1-edu/网络配置' },
        { text: 'slam-导航', link: '/g1-edu/slam-导航' }
      ],
    },
    // socialLinks: [
      // { icon: 'github', link: '/account' },
    // ],


    // editLink: {
      // pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      // text: '在 GitHub 上编辑此页面'
    // },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },    
    // footer: {
      // message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2019-present Evan You'
    // }
  }
})