(window.webpackJsonp=window.webpackJsonp||[]).push([[381],{819:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docsify环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docsify环境搭建"}},[s._v("#")]),s._v(" Docsify环境搭建")]),s._v(" "),a("h2",{attrs:{id:"docify是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docify是什么"}},[s._v("#")]),s._v(" Docify是什么？")]),s._v(" "),a("p",[s._v("docsify 是一个动态生成文档网站的工具。不同于 GitBook、Hexo 的地方是它不会生成将 .md 转成 .html 文件，所有转换工作都是在运行时进行。")]),s._v(" "),a("h2",{attrs:{id:"安装node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装node-js"}},[s._v("#")]),s._v(" 安装node.js")]),s._v(" "),a("p",[s._v("下载安装即可"),a("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js 中文网 (nodejs.cn)"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("建议选择 Long Term Support (LTS) 长期支持版本，安装后设置环境变量后即可以使用npm命令安装软件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("wasadmin@E193113 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\nv8.9.0\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("wasadmin@E193113 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.5")]),s._v(".1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"安装docsify-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docsify-cli"}},[s._v("#")]),s._v(" 安装docsify-cli")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i docsify-cli "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安装后可以查看版本:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("wasadmin@E193113 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ docsify "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n\ndocsify-cli version:\n  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),s._v(".3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"本地博客环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地博客环境搭建"}},[s._v("#")]),s._v(" 本地博客环境搭建")]),s._v(" "),a("ul",[a("li",[s._v("在文件夹目录下初始化")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docsify init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("初始化框架文本 （文本可使用工具自动生成）")]),s._v(" "),a("ul",[a("li",[s._v("index.html：入口文件")]),s._v(" "),a("li",[s._v("README.md：会做为主页内容渲染")]),s._v(" "),a("li",[s._v(".nojekyll：用于阻止 GitHub Pages 会忽略掉下划线开头的文件")]),s._v(" "),a("li",[s._v("各文件夹内放置目录文件README.md(仅放链接)")])])]),s._v(" "),a("li",[a("p",[s._v("启动本地预览服务器")]),s._v(" "),a("ul",[a("li",[s._v("note目录下运行 docsify serve 启动一个本地服务器，可以方便地实时预览效果。默认访问地址 http://localhost:3000 。")])])]),s._v(" "),a("li",[a("p",[s._v("docify js lib 库")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("https://unpkg.com/browse/docsify@4.11.6/lib/plugins/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"借助nginx实现远程环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#借助nginx实现远程环境搭建"}},[s._v("#")]),s._v(" 借助Nginx实现远程环境搭建")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装Nginx")]),s._v(" "),a("p",[s._v("参考网络上的步骤")])]),s._v(" "),a("li",[a("p",[s._v("检查Nginx版本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("wasadmin@E193113 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\nnginx version: nginx/1.9.4\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("wasadmin@E193113 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" nginx\n~/webnet/nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("配置Nginx（conf/nginx.conf）")]),s._v(" "),a("blockquote",[a("p",[s._v("公司webnet为Nginx改造版本也可以作为Nginx使用")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 侦听端口")]),s._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7707")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        charset utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网页访问的根路径")]),s._v("\n        root       /home/wasadmin/kb/kf1_kb/note"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        index index.html  index.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 避免缓冲")]),s._v("\n        add_header Cache-Control "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no-cache, no-store"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                index  index.php index.html index.htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                error_page "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("405")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("启动和重启Nginx")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\nnginx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\nnginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("远程访问")]),s._v(" "),a("p",[s._v("实现以上步骤后即可实现远程访问  "),a("a",{attrs:{href:"http://192.168.193.113:7707/#/",target:"_blank",rel:"noopener noreferrer"}},[s._v("HOME"),a("OutboundLink")],1),s._v(" 。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);