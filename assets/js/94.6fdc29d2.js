(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{496:function(t,s,n){"use strict";n.r(s);var a=n(2),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"stl的诞生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stl的诞生"}},[t._v("#")]),t._v(" STL的诞生")]),t._v(" "),s("ul",[s("li",[t._v("长久以来，软件界一直希望建立一种可重复利用的东西")]),t._v(" "),s("li",[t._v("C++的"),s("strong",[t._v("面向对象")]),t._v("和"),s("strong",[t._v("泛型编程")]),t._v("思想，目的就是"),s("strong",[t._v("复用性的提升")])]),t._v(" "),s("li",[t._v("大多情况下，数据结构和算法都未能有一套标准,导致被迫从事大量重复工作")]),t._v(" "),s("li",[t._v("为了建立数据结构和算法的一套标准,诞生了"),s("strong",[t._v("STL")])])]),t._v(" "),s("h2",{attrs:{id:"stl基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stl基本概念"}},[t._v("#")]),t._v(" STL基本概念")]),t._v(" "),s("ul",[s("li",[t._v("STL(Standard Template Library,"),s("strong",[t._v("标准模板库")]),t._v(")")]),t._v(" "),s("li",[t._v("STL 从广义上分为: "),s("strong",[t._v("容器(container) 算法(algorithm) 迭代器(iterator)")])]),t._v(" "),s("li",[s("strong",[t._v("容器")]),t._v("和"),s("strong",[t._v("算法")]),t._v("之间通过"),s("strong",[t._v("迭代器")]),t._v("进行无缝连接。")]),t._v(" "),s("li",[t._v("STL 几乎所有的代码都采用了模板类或者模板函数")])]),t._v(" "),s("h2",{attrs:{id:"stl六大组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stl六大组件"}},[t._v("#")]),t._v(" STL六大组件")]),t._v(" "),s("p",[t._v("STL大体分为六大组件，分别是:"),s("strong",[t._v("容器、算法、迭代器、仿函数、适配器（配接器）、空间配置器")])]),t._v(" "),s("ol",[s("li",[t._v("容器：各种数据结构，如vector、list、deque、set、map等,用来存放数据。")]),t._v(" "),s("li",[t._v("算法：各种常用的算法，如sort、find、copy、for_each等")]),t._v(" "),s("li",[t._v("迭代器：扮演了容器与算法之间的胶合剂。")]),t._v(" "),s("li",[t._v("仿函数：行为类似函数，可作为算法的某种策略。")]),t._v(" "),s("li",[t._v("适配器：一种用来修饰容器或者仿函数或迭代器接口的东西。")]),t._v(" "),s("li",[t._v("空间配置器：负责空间的配置与管理。")])]),t._v(" "),s("h2",{attrs:{id:"stl中容器、算法、迭代器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stl中容器、算法、迭代器"}},[t._v("#")]),t._v(" STL中容器、算法、迭代器")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("容器："),s("strong",[t._v("置物之所也\nSTL")]),t._v("容器")]),t._v("就是将运用"),s("strong",[t._v("最广泛的一些数据结构")]),t._v("实现出来\n常用的数据结构：数组, 链表,树, 栈, 队列, 集合, 映射表 等\n这些容器分为"),s("strong",[t._v("序列式容器")]),t._v("和"),s("strong",[t._v("关联式容器")]),t._v("两种:\n"),s("strong",[t._v("序列式容器")]),t._v(":强调值的排序，序列式容器中的每个元素均有固定的位置。\n"),s("strong",[t._v("关联式容器")]),t._v(":二叉树结构，各元素之间没有严格的物理上的顺序关系")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("算法："),s("strong",[t._v("问题之解法也\n有限的步骤，解决逻辑或数学上的问题，这一门学科我们叫做算法(Algorithms)\n算法分为:  "),s("strong",[t._v("质变算法")]),t._v("和")]),t._v("非质变算法")]),t._v("。\n质变算法：   是指运算过程中会更改区间内的元素的内容。例如拷贝，替换，删除等等\n非质变算法：是指运算过程中不会更改区间内的元素内容，例如查找、计数、遍历、寻找极值等等")])]),t._v(" "),s("li",[s("p",[t._v("**迭代器：**容器和算法之间粘合剂\n提供一种方法，使之能够依序寻访某个容器所含的各个元素，而又无需暴露该容器的内部表示方式。\n每个容器都有自己专属的迭代器\n迭代器使用非常类似于指针，初学阶段我们可以先理解迭代器为指针")])])]),t._v(" "),s("p",[t._v("迭代器种类：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("种类")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),s("th",[t._v("支持运算")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("输入迭代器")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("对数据的只读访问")]),t._v(" "),s("td",[t._v("只读，支持++、==、!=")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("输出迭代器")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("对数据的只写访问")]),t._v(" "),s("td",[t._v("只写，支持++")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("前向迭代器")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("读写操作，并能向前推进迭代器")]),t._v(" "),s("td",[t._v("读写，支持++、==、!=")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("双向迭代器")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("读写操作，并能向前和向后操作")]),t._v(" "),s("td",[t._v("读写，支持++、--，")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("随机访问迭代器")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("读写操作，可以以跳跃的方式访问任意数据，功能最强的迭代器")]),t._v(" "),s("td",[t._v("读写，支持++、--、[n]、-n、<、<=、>、>=")])])])]),t._v(" "),s("p",[t._v("常用的容器中迭代器种类为双向迭代器，和随机访问迭代器")]),t._v(" "),s("h2",{attrs:{id:"容器算法迭代器初识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器算法迭代器初识"}},[t._v("#")]),t._v(" 容器算法迭代器初识")]),t._v(" "),s("p",[t._v("了解STL中容器、算法、迭代器概念之后，我们利用代码感受STL的魅力\nSTL中最常用的容器为Vector，可以理解为数组，下面我们将学习如何向这个容器中插入数据、并遍历这个容器")]),t._v(" "),s("h3",{attrs:{id:"初体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初体验"}},[t._v("#")]),t._v(" 初体验")]),t._v(" "),s("p",[t._v("容器：     "),s("code",[t._v("vector")]),t._v("\n算法：     "),s("code",[t._v("for_each")]),t._v("\n迭代器： "),s("code",[t._v("vector<int>::iterator")])]),t._v(" "),s("p",[t._v("使用到算法，需添加 algorithm的头文件")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<vector>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<algorithm>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyPrint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test01")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建vector容器对象，并且通过模板参数指定容器中存放的数据的类型")]),t._v("\n\tvector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//向容器中放数据")]),t._v("\n\tv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每一个容器都有自己的迭代器，迭代器是用来遍历容器中的元素")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//v.begin()返回迭代器，这个迭代器指向容器中第一个数据")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//v.end()返回迭代器，这个迭代器指向容器元素的最后一个元素的下一个位置")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//vector<int>::iterator 拿到vector<int>这种容器的迭代器类型")]),t._v("\n\n\tvector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("iterator pBegin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tvector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("iterator pEnd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一种遍历方式：")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pBegin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" pEnd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("pBegin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tpBegin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第二种遍历方式：")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[t._v("::")]),t._v("iterator it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" it"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tcout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("it "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tcout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第三种遍历方式：")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用STL提供标准遍历算法  头文件 algorithm")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for_each")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MyPrint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test01")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br")])]),s("h3",{attrs:{id:"vector存放自定义数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vector存放自定义数据类型"}},[t._v("#")]),t._v(" Vector存放自定义数据类型")]),t._v(" "),s("p",[t._v("学习目标：vector中存放自定义数据类型，并打印输出")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<vector>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<algorithm>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for_each")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printPerson")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Person p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"printPerson:"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//存放对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test01")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tvector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Person"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建数据")]),t._v("\n\tPerson "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("p1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aaa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tPerson "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("p2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bbb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("for_each")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" printPerson"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test01")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);