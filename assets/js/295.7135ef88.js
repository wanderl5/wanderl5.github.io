(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{711:function(s,n,a){"use strict";a.r(n);var t=a(1),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"安装npm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装npm"}},[s._v("#")]),s._v(" 安装npm")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装npm")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://npm.taobao.org/mirrors/node/v16.13.0/node-v16.13.0-linux-x64.tar.gz\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" node-v16.13.0-linux-x64.tar.gz /usr/local\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" node-v16.13.0-linux-x64.tar.gz\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" node-v16.13.0-linux-x64 nodejs\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立软链接(方便sudo使用-linux)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /usr/bin/npm /usr/bin/node \n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/nodejs/bin/npm /usr/bin/npm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/nodejs/bin/node /usr/bin/node\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置全局prefix和cache")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" prefix "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/nodejs/node_global"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" cache "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/nodejs/node_cache"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查已安装的模块")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" list "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h2",{attrs:{id:"安装nrm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装nrm"}},[s._v("#")]),s._v(" 安装nrm")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" nrm\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /usr/bin/nrm\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置npm安装的模块可直接访问,链接方式或通过设置PATH来实现均可")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/nodejs/node_global/bin/nrm /usr/bin/nrm\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择淘宝的源")]),s._v("\nnrm use taobao\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);