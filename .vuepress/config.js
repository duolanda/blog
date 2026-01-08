module.exports = {
  "title": "飞's Space",
  "description": "keep Advancing",
//   "base": '/blog/',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["link",
      { 
         "rel": 'stylesheet', 
         "href": 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' 
      }
    ],
    ["link", 
      { 
        "rel": "stylesheet", 
        "href": "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" 
      }
    ],
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-document",
        "items": [
          {
            "text": "test-doc",
            "link": "/docs/test-doc/"
          },
          {
            "text": "北邮基建",
            "link": "/docs/基建/"
          }
        ]
      },
      {
        "text": "Github",
        "icon": "reco-github",
        "link": "https://github.com/duolanda",
      }
    ],
    "sidebar": {
      "/docs/test-doc/": [
        "",
        "test1",
      ],
      "/docs/基建/": [
        "",
        "建筑面积考据",
        "南大门开销",
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "Liggest",
        "desc": "天才程序员",
        "link": "https://github.com/liggest"
      },
      {
        "title": "feishu",
        "desc": "🐷的礼物",
        "avatar": "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp442100212.jpg&refer=http%3A%2F%2Fimg2.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655969697&t=7ef3cc09c638a120bcb6aacac4fcf40c",
        "link": "https://stephyqin.github.io/feishu/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "valineConfig": {
        appId: 'PjQUaOjdyrWau6sTc6Y5vTco-gzGzoHsz',
        appKey: 'dqhdMi9i1Jk1xAMIMXErbgGy', 
      },
    // "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "上次更新",
    "author": "duolanda",
    "authorAvatar": "/avatar.png",
    "record": "京ICP备2021030318号-1",
    "cyberSecurityRecord": "京公网安备 11010802037768号",
    "cyberSecurityLink": "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802037768",
    "recordLink": 'https://beian.miit.gov.cn',
    "startYear": "2021",
    "noFoundPageByTencent": false,
    "subSidebar": 'auto',
  },
  "markdown": {
    "lineNumbers": true,
    "extendMarkdown": md => {
        md.use(require("markdown-it-katex"))
        md.use(require("markdown-it-disable-url-encode"))
      },
  },
  "plugins": [
    // 支持中文文件名
    [
      "permalink-pinyin",
      {
        lowercase: true, // Converted into lowercase, default: true
        separator: "-", // Separator of the slug, default: '-'
      },
    ],
    ["@vuepress-reco/vuepress-plugin-loading-page", false], //禁用插件
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          // 转换为 UTC+8 (北京时间)
          return moment.utc(timestamp).add(8, 'hours').format('YYYY/M/D HH:mm:ss')
        }
      }
    ],
  ],
  "locales": {
        // 键名是该语言所属的子路径，作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    }, 
}