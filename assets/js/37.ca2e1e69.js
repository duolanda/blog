(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1135:function(t,a,r){"use strict";r.r(a);var e=r(11),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"问题描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),r("p",[t._v("使用自己电脑上的 PowerPoint/WPS 制作 PPT 时可以正常的插入并播放 mp4 视频，但是同样的文件在其他电脑上打开时无法播放视频，并伴随着“媒体不可用”的提示。")]),t._v(" "),r("br"),t._v(" "),r("p",[t._v("在 Windows XP SP3 虚拟机环境上尝试了问题的复现与排查：")]),t._v(" "),r("p",[t._v("无论是将 WPS 更换成 PowerPoint 或是 PowerPoint Viewer 都无法将这个问题解决，说明并非是幻灯片软件的问题，而是出在解码器上。但即使安装了 QuickTime 也同样不行。")]),t._v(" "),r("h2",{attrs:{id:"解决方案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),r("h3",{attrs:{id:"方案1-视频格式转换为-wmv-不建议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案1-视频格式转换为-wmv-不建议"}},[t._v("#")]),t._v(" 方案1：视频格式转换为 wmv（不建议）")]),t._v(" "),r("p",[t._v("Windows 天然支持 wmv 格式的视频，如果将 mp4 视频先转换为 wmv 再插入到 ppt 中可以在大多数情况下解决问题。但这也会带来新的问题，即在 MacOS 下反而会无法正常播放，且转换所需成本较大。")]),t._v(" "),r("h3",{attrs:{id:"方案2-为无法正常播放视频的电脑安装解码器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案2-为无法正常播放视频的电脑安装解码器"}},[t._v("#")]),t._v(" 方案2：为无法正常播放视频的电脑安装解码器")]),t._v(" "),r("p",[t._v("经测试，在电脑上安装 "),r("a",{attrs:{href:"https://codecguide.com/download_kl.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("K-Lite Codec Pack"),r("OutboundLink")],1),t._v(" 解码器包（Basic 版即可）后可以非常好的解决这一问题，且这一过程中无需重启。唯一的缺点在于播放视频时任务栏右下角会弹出多个解码器的图标。")]),t._v(" "),r("p",[t._v("但是，在教室的电脑上出现了只可以播放 Pr 和小丸工具箱生成的 H.264，而不能播放 Ae 和达芬奇导出的 mov 的情况，因为无法复现，暂时不能确定能否通过安装 QuickTime 来解决。")]),t._v(" "),r("h3",{attrs:{id:"方案3-视频转-gif-终极兼容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案3-视频转-gif-终极兼容"}},[t._v("#")]),t._v(" 方案3：视频转 GIF（终极兼容）")]),t._v(" "),r("p",[t._v("几乎不可能会有 PPT 无法播放 GIF，所以如果要追求极致的兼容性，将视频转成 GIF 会是一个可考虑的选择，因为压缩效率的底下，这样做在视频量很大时会使 PPT 体积成倍增加，而且可能无法承载过长的视频片段。如果选择这个方案，需要提前寻找一个可以批量转换的方法才行。")])])}),[],!1,null,null,null);a.default=s.exports}}]);