(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{541:function(s,t,n){"use strict";n.r(t);var a=n(1),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"bit-operation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bit-operation"}},[s._v("#")]),s._v(" Bit Operation")]),s._v(" "),t("h2",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[s._v("#")]),s._v(" type")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Symbol")]),s._v(" "),t("th",[s._v("Name")]),s._v(" "),t("th",[s._v("中文")]),s._v(" "),t("th",[s._v("备注")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("&")]),s._v(" "),t("td",[s._v("Bitwise AND")]),s._v(" "),t("td",[s._v("与")]),s._v(" "),t("td",[s._v("都是1则1")])]),s._v(" "),t("tr",[t("td",[s._v("|")]),s._v(" "),t("td",[s._v("Bitwise Inclusive-OR")]),s._v(" "),t("td",[s._v("或")]),s._v(" "),t("td",[s._v("有1则1")])]),s._v(" "),t("tr",[t("td",[s._v("^")]),s._v(" "),t("td",[s._v("Bitwise Exclusive-OR")]),s._v(" "),t("td",[s._v("异或")]),s._v(" "),t("td",[s._v("其中有1个为1，但都是1算0")])]),s._v(" "),t("tr",[t("td",[s._v("~")]),s._v(" "),t("td",[s._v("Ones complement")]),s._v(" "),t("td",[s._v("按位取反")]),s._v(" "),t("td",[s._v("逐个反码，负数需反转补码+1得原码")])]),s._v(" "),t("tr",[t("td",[s._v("<<")]),s._v(" "),t("td",[s._v("Left Shift")]),s._v(" "),t("td",[s._v("左移")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v(">>")]),s._v(" "),t("td",[s._v("Right Shift")]),s._v(" "),t("td",[s._v("右移")]),s._v(" "),t("td")])])]),s._v(" "),t("p",[s._v("实例：")]),s._v(" "),t("div",{staticClass:"language-cpp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-cpp"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[t("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Bit Operate")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" word1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3u")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0011")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("unsigned")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" word2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9u")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1001")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\nword1:%d, word2:%d\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 与:  0001 => 1\n       0000 0000 0000 0000 0000 0000 0000 0011 \n    &  0000 0000 0000 0000 0000 0000 0000 1001\n\t------------------------------------------\n    => 0000 0000 0000 0000 0000 0000 0000 0001 => 1\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d & %d = %d \\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" word2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 或:  1011 => 11\n       0000 0000 0000 0000 0000 0000 0000 0011\n    |  0000 0000 0000 0000 0000 0000 0000 1001\n\t------------------------------------------\n    => 0000 0000 0000 0000 0000 0000 0000 1011 => 11\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d | %d = %d \\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" word2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 异或: 1010 => 10\n       0000 0000 0000 0000 0000 0000 0000 0011\n    ^  0000 0000 0000 0000 0000 0000 0000 1001\n\t------------------------------------------\n    => 0000 0000 0000 0000 0000 0000 0000 1010 => 10\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d ^ %d = %d \\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v(" word2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 取反：\n    ~  0000 0000 0000 0000 0000 0000 0000 1001\n\t------------------------------------------\n    => 1111 1111 1111 1111 1111 1111 1111 0110\n\t------------------------------------------\n    => 0000 0000 0000 0000 0000 0000 0000 1001 + 1 => 10\n    首先看符号位也就是最左的一位，如果是1代表是负数(-)如果是0代码是正数(+);\n\t正数: 直接取码计算即可;\n    负数: 使用补码表示负数,负数需求其原码,方法：对该值取反再+1\n    */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~ %d = %d \\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" word2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v("word2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -10")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d\\n"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0b11111111111111111111111111110110")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// -10")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);