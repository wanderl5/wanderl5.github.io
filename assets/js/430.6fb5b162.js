(window.webpackJsonp=window.webpackJsonp||[]).push([[430],{886:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("https://zhuanlan.zhihu.com/p/93457173")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("下载镜像\nhttps://docs.microsoft.com/zh-cn/windows/wsl/install-manual")])]),s._v(" "),t("li",[t("p",[s._v("使用winrar解压下载到的: Ubuntu_2004.2020.424.0_x64.appx 文件；")])]),s._v(" "),t("li",[t("p",[s._v("双击ubuntu2004.exe安装")])]),s._v(" "),t("li",[t("p",[s._v("安装完成建立用户： liu / liu123")])])]),s._v(" "),t("blockquote",[t("p",[s._v("如果需要使用 root 默认登录可以运行 ubuntu2004.exe config --default-user root")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("进入wsl\nwsl -d Ubuntu-20.04 -u root bash\nwsl -d Ubuntu -u root bash (第二个,Clion接入)")])]),s._v(" "),t("li",[t("p",[s._v("切换国内源 (root则不用sudo)")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/archive.ubuntu.com/mirrors.aliyun.com/g'")]),s._v(" /etc/apt/sources.list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("更新语言设置")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装中文支持")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" language-pack-zh-hans\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置默认语言")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" update-locale "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LANG")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("zh_CN.UTF-8\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("编辑服务自启动文件(/etc/init.wsl)")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#! /bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Filename: /etc/init.wsl")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Usage: /etc/init.wsl [start|stop|restart]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" dbus start\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("blockquote",[t("p",[s._v('开始 -> 运行 中输入 regedit 回车打开注册表编辑器 定位到 计算机\\HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run 后新建一个 REG_SZ 类型的值，名称随意，数值数据填写以下内容\nmshta vbscript:CreateObject("WScript.Shell").Run("wsl -d Ubuntu-20.04 -u root bash /etc/init.wsl",0,TRUE)(window.close)\n以后就可以向 /etc/init.wsl 追加服务，实现开启自启动了')])]),s._v(" "),t("h2",{attrs:{id:"安装nginx和php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx和php"}},[s._v("#")]),s._v(" 安装nginx和php")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" nginx php-fpm\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 fpm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" php7.4-fpm start\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 nginx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx start\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑 nginx 配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/nginx/sites-available/default\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"配置添加"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置添加"}},[s._v("#")]),s._v(" 配置添加：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("location ~ .*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/.*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("*$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tinclude snippets/fastcgi-php.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置监听端口")]),s._v("\n\tfastcgi_pass unix:/run/php/php7.4-fpm.sock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用于伪静态")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_filename")]),s._v("/index.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\trewrite "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("/index.html "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_filename")]),s._v("/index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\trewrite "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("/index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-f "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_filename")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\trewrite "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" /index.php"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("start nginx失败 - 待查 #加固")])])}),[],!1,null,null,null);t.default=e.exports}}]);