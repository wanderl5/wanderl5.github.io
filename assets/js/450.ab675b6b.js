(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{912:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu默认shell调整-含sudo调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu默认shell调整-含sudo调整"}},[s._v("#")]),s._v(" Ubuntu默认shell调整（含sudo调整）")]),s._v(" "),a("h2",{attrs:{id:"检查当前shell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查当前shell"}},[s._v("#")]),s._v(" 检查当前shell")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unbuntu默认新建的用户使用dash")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mqm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mqm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("groups")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mqm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n/bin/sh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尝试修改（发现非sudo用户）")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /bin/bash mqm\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" mqm: \nmqm is not "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" the sudoers file.  This incident will be reported.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("#sudo")]),s._v(" "),a("h2",{attrs:{id:"mqm加入sudoers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqm加入sudoers"}},[s._v("#")]),s._v(" mqm加入sudoers")]),s._v(" "),a("ul",[a("li",[s._v("visudo加入mqm")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 调整sudo文件加入mqm （修改文件为 /etc/sudoers）")]),s._v("\nvisudo \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在打开的文件中加入mqm:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# User privilege specification")]),s._v("\nroot    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL:ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ALL\nliu    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL:ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ALL\nmqm    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ALL:ALL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ALL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("Ctrl + x 保存退出")]),s._v(" "),a("li",[s._v("再次尝试，正常通过")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /bin/bash mqm\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sudo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" mqm: \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"重登验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重登验证"}},[s._v("#")]),s._v(" 重登验证")]),s._v(" "),a("ul",[a("li",[s._v("重新登录mqm用户,即可看到已切换成功")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mqm@LAPTOP-8UNAVVRU:~$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mqm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mqm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("groups")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mqm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nmqm@LAPTOP-8UNAVVRU:~$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n/bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);