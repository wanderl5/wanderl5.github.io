(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{825:function(a,t,s){"use strict";s.r(t);var e=s(1),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"离线补丁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#离线补丁"}},[a._v("#")]),a._v(" 离线补丁")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("git diff")]),a._v("和"),t("code",[a._v("git apply patch")])]),a._v(" "),t("li",[t("code",[a._v("git format-patch")]),a._v("和"),t("code",[a._v("git am")])])]),a._v(" "),t("h3",{attrs:{id:"diff"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diff"}},[a._v("#")]),a._v(" diff")]),a._v(" "),t("blockquote",[t("p",[a._v("git diff还可以制作补丁文件，在其他机器上对应目录下使用"),t("code",[a._v("git apply patch")]),a._v("将补丁打上即可,便于在不push的情况下直接同步代码")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("git diff > patch patch的命名是随意的，不加其他参数时作用是：将我们本仓库工作区的修改拷贝一份到其他机器上使用")])]),a._v(" "),t("li",[t("p",[a._v("git diff --cached > patch是将暂存区与版本库的差异做成补丁")])]),a._v(" "),t("li",[t("p",[a._v("git diff --HEAD > patch是将工作区与版本库的差异做成补丁")])]),a._v(" "),t("li",[t("p",[a._v("git diff filename > patch将单个文件做成一个单独的补丁")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("git apply patch")]),a._v("应用补丁。")])])]),a._v(" "),t("blockquote",[t("p",[a._v("注意： 应用补丁之前我们可以先检验一下补丁能否应用，git apply --check patch 如果没有任何输出，那么表示可以顺利接受这个补丁。\n使用git apply --reject patch将能打的补丁先打上，有冲突的会生成.rej文件，此时可以找到这些文件进行手动打补丁")])]),a._v(" "),t("h3",{attrs:{id:"format-patch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#format-patch"}},[a._v("#")]),a._v(" format-patch")]),a._v(" "),t("ul",[t("li",[a._v("形成patch")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将main分支后的所有补丁打成patch,形成的patch文件按commit逐个保存")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" format-patch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-M")]),a._v(" origin/main\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("补丁以邮件方式或copy到目的机器")]),a._v(" "),t("li",[a._v("应用补丁")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修正空白字符的检测")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" am "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reject")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--whitespace")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("fix ~/tmp/0001-1111.patch\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" am "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reject")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--whitespace")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("fix ~/tmp/0002-add-patch.patch \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ul",[t("li",[a._v("补丁应用完成,会自动commit")]),a._v(" "),t("li",[a._v("补丁失败则可以通过"),t("code",[a._v("abort")]),a._v("推出,并通过"),t("code",[a._v("git reset")]),a._v("重新回退后再次应用")])])])}),[],!1,null,null,null);t.default=r.exports}}]);