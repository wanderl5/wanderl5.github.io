(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{948:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"dos和unix风格回车转换-不可见字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dos和unix风格回车转换-不可见字符"}},[s._v("#")]),s._v(" Dos和Unix风格回车转换（不可见字符）")]),s._v(" "),a("ul",[a("li",[s._v("由于Windows下的换行为\\r\\n,而Unix下换行为\\n，会导致windows文件上传导Linux/Aix后换行会被识别为^M+回车，")])]),s._v(" "),a("p",[s._v("vi展示中：^M 代表 \\r  , $ 代表 \\n")]),s._v(" "),a("ul",[a("li",[s._v("存在^M可能导致shell脚本执行失败、配置文件读取失败、代码编译失败等较严重后果")])]),s._v(" "),a("h2",{attrs:{id:"查看不可见字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看不可见字符"}},[s._v("#")]),s._v(" 查看不可见字符")]),s._v(" "),a("ul",[a("li",[s._v("windows编辑test.txt")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("nihao\n测试下回车\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" huiche\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("linux下查看确认 (检查是否存在^M$)")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" test.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在vi命令行模式下输入:set list ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出")]),s._v("\nnihao^M\n测试下回车^M\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" huiche\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## cat -A test.txt 也基本看个大概,但展示不太好")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("blockquote",[a("ul",[a("li",[s._v("vi中显示隐藏字符 ,使用:set list ； 不显示隐藏字符,使用 :set nolist")])])]),s._v(" "),a("h2",{attrs:{id:"命令行调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行调整"}},[s._v("#")]),s._v(" 命令行调整")]),s._v(" "),a("ul",[a("li",[s._v("方法1：在vi中直接使用命令替换去除不可见字符^M")])]),s._v(" "),a("blockquote",[a("p",[s._v("注意:")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用vi(vim不一定能看到,使用 cat -v 能看)")])]),s._v(" "),a("li",[a("p",[s._v("若vi被alias成了vim,请使用/usr/bin/vi打开,否则可能看不到^M")])])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.打开文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" test.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.命令行下输入 :1,$s/^M//g (^M使用Ctrl+V + M输入)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.替换后即可看到^M消失,保存即完成转换")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("方法2: 使用tr命令替换")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\015'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" srcfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" destfile\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\r'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" srcfile "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" destfile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("方法3: 使用sed命令替换")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\r//'")]),s._v(" filename\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"dos2unix调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dos2unix调整"}},[s._v("#")]),s._v(" dos2unix调整")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dos2unix test.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出: (直接修改源文件)")]),s._v("\ndos2unix: converting "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" test.txt to Unix format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改后再用vi -b test.txt, :set list查看 ")]),s._v("\nnihao$\n测试下回车$\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" huiche$\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("blockquote",[a("p",[s._v("unix2dos 将unix格式调整为dos格式\n两者都可以通过apt get分别安装")])]),s._v(" "),a("ul",[a("li",[s._v("dos2unix语法:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dos2unix "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-hkqV"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-c convmode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-o "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-n infile outfile "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("-k：保持输出文件的日期不变 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如果要保持文件时间戳不变，加上-k参数。所以上面几条命令都是可以加上-k参数来保持文件时间戳的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n-q：安静模式，不提示任何警告信息\n-V：查看版本\n-c：转换模式，模式有：ASCII, 7bit, ISO, Mac, 默认是：ASCII\n-o：写入到源文件\n-n：写入到新文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dos2unix "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-k")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" test.txt test1.txt\n\ndos2unix: converting "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" test.txt to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" test1,txt "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" Unix format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# test.txt 仍保持dos格式不变, test1.txt转换为unix格式")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);