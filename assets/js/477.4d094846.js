(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{940:function(s,n,a){"use strict";a.r(n);var t=a(2),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"启用图形界面-xfce"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启用图形界面-xfce"}},[s._v("#")]),s._v(" 启用图形界面 xfce")]),s._v(" "),n("ul",[n("li",[s._v("配置DISPLAY变量,配置后的效果:")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DESKTOP-P68VB3R qe"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo $DISPLAY")]),s._v("\nlocalhost:0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("在wsl下安装xfce")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切换yum源到ali")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装额外源(如Xfce)")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" epel-release\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装图形界面")]),s._v("\nyum groupinstall "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"X Window system"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前支持的安装组(确认已有xfce)")]),s._v("\nyum grouplist\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装vnc")]),s._v("\nyum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vnc-server "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装xfce")]),s._v("\nyum groupinstall xfce4\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# windows 下打开XLaunch,选择one large;")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再去看windows下的界面就已经有图形界面了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("保证~/.config没有设置,否则启动不了\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("ul",[n("li",[n("p",[s._v("启动后台图形界面\nstartxfce4")])]),s._v(" "),n("li",[n("p",[s._v("windows下启动config.xlaunch; (可保存设置), 这样就可以在windows下看到界面了")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);