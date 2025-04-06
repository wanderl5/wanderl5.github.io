(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{868:function(a,e,s){"use strict";s.r(e);var t=s(1),n=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"gnu-make"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gnu-make"}},[a._v("#")]),a._v(" GNU Make")]),a._v(" "),e("blockquote",[e("p",[a._v("环境说明：RedHat Linux 8.0，GNU  make 3.80， 默认的编译器是UNIX下的GCC和CC，原文作者： 陈皓")])]),a._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("什么是makefile？或许很多Winodws的程序员都不知道这个东西，因为那些Windows的IDE都为你做了这个工作，但我觉得要作一个好的和professional的程序员，makefile还是要懂。这就好像现在有这么多的HTML的编辑器，但如果你想成为一个专业人士，你还是要了解HTML的标识的含义。特别在Unix下的软件编译，你就不能不自己写makefile了，会不会写makefile，从一个侧面说明了一个人是否具备完成大型工程的能力。")]),a._v(" "),e("p",[a._v("因为，makefile关系到了整个工程的编译规则。一个工程中的源文件不计数，其按类型、功能、模块分别放在若干个目录中，makefile定义了一系列的规则来指定，哪些文件需要先编译，哪些文件需要后编译，哪些文件需要重新编译，甚至于进行更复杂的功能操作，因为makefile就像一个Shell脚本一样，其中也可以执行操作系统的命令。")]),a._v(" "),e("p",[a._v("makefile带来的好处就是——“自动化编译”，一旦写好，只需要一个make命令，整个工程完全自动编译，极大的提高了软件开发的效率。make是一个命令工具，是一个解释makefile中指令的命令工具，一般来说，大多数的IDE都有这个命令，比如：Delphi的make，Visual C++的nmake，Linux下GNU的make。可见，makefile都成为了一种在工程方面的编译方法。")])]),a._v(" "),e("h2",{attrs:{id:"程序编译和链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#程序编译和链接"}},[a._v("#")]),a._v(" 程序编译和链接")]),a._v(" "),e("p",[a._v("——————————")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("在此，我想多说关于程序编译的一些规范和方法，一般来说，无论是C、C++、还是pas，首先要把源文件编译成中间代码文件，在Windows下也就是 .obj 文件，UNIX下是 .o 文件，即 Object File，这个动作叫做编译（compile）。然后再把大量的Object File合成执行文件，这个动作叫作链接（link）。")]),a._v(" "),e("p",[a._v("编译时，编译器需要的是语法的正确，函数与变量的声明的正确。对于后者，通常是你需要告诉编译器头文件的所在位置（头文件中应该只是声明，而定义应该放在C/C++文件中），只要所有的语法正确，编译器就可以编译出中间目标文件。一般来说，每个源文件都应该对应于一个中间目标文件（O文件或是OBJ文件）。")]),a._v(" "),e("p",[a._v("链接时，主要是链接函数和全局变量，所以，我们可以使用这些中间目标文件（O文件或是OBJ文件）来链接我们的应用程序。链接器并不管函数所在的源文件，只管函数的中间目标文件（Object File），在大多数时候，由于源文件太多，编译生成的中间目标文件太多，而在链接时需要明显地指出中间目标文件名，这对于编译很不方便，所以，我们要给中间目标文件打个包，在Windows下这种包叫“库文件”（Library File)，也就是 .lib 文件，在UNIX下，是Archive File，也就是 .a 文件。")]),a._v(" "),e("p",[a._v("总结一下，源文件首先会生成中间目标文件，再由中间目标文件生成执行文件。在编译时，编译器只检测程序语法，和函数、变量是否被声明。如果函数未被声明，编译器会给出一个警告，但可以生成Object File。而在链接程序时，链接器会在所有的Object File中找寻函数的实现，如果找不到，那到就会报链接错误码（Linker Error），在VC下，这种错误一般是：Link 2001错误，意思说是说，链接器未能找到函数的实现。你需要指定函数的Object File.")])]),a._v(" "),e("h2",{attrs:{id:"makefile-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#makefile-介绍"}},[a._v("#")]),a._v(" Makefile 介绍")]),a._v(" "),e("p",[a._v("——————————")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("make命令执行时，需要一个 Makefile 文件，以告诉make命令需要怎么样的去编译和链接程序。")]),a._v(" "),e("p",[a._v("首先，我们用一个示例来说明Makefile的书写规则。以便给大家一个感兴认识。这个示例来源于GNU的make使用手册，在这个示例中，我们的工程有8个C文件，和3个头文件，我们要写一个Makefile来告诉make命令如何编译和链接这几个文件。我们的规则是：\n1）如果这个工程没有编译过，那么我们的所有C文件都要编译并被链接。\n2）如果这个工程的某几个C文件被修改，那么我们只编译被修改的C文件，并链接目标程序。\n3）如果这个工程的头文件被改变了，那么我们需要编译引用了这几个头文件的C文件，并链接目标程序。")]),a._v(" "),e("p",[a._v("只要我们的Makefile写得够好，所有的这一切，我们只用一个make命令就可以完成，make命令会自动智能地根据当前的文件修改的情况来确定哪些文件需要重编译，从而自己编译所需要的文件和链接目标程序。")])]),a._v(" "),e("h3",{attrs:{id:"makefile的规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#makefile的规则"}},[a._v("#")]),a._v(" Makefile的规则")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("在讲述这个Makefile之前，还是让我们先来粗略地看一看Makefile的规则。")]),a._v(" "),e("p",[a._v("target ... : prerequisites ...\ncommand\n...\n...")]),a._v(" "),e("p",[a._v("target也就是一个目标文件，可以是Object File，也可以是执行文件。还可以是一个标签（Label），对于标签这种特性，在后续的“伪目标”章节中会有叙述。")]),a._v(" "),e("p",[a._v("prerequisites就是，要生成那个target所需要的文件或是目标。")]),a._v(" "),e("p",[a._v("command也就是make需要执行的命令。（任意的Shell命令）")]),a._v(" "),e("p",[a._v("这是一个文件的依赖关系，也就是说，target这一个或多个的目标文件依赖于prerequisites中的文件，其生成规则定义在command中。说白一点就是说，prerequisites中如果有一个以上的文件比target文件要新的话，command所定义的命令就会被执行。这就是Makefile的规则。也就是Makefile中最核心的内容。")])]),a._v(" "),e("h3",{attrs:{id:"一个示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个示例"}},[a._v("#")]),a._v(" 一个示例")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("正如前面所说的，如果一个工程有3个头文件，和8个C文件，我们为了完成前面所述的那三个规则，我们的Makefile应该是下面的这个样子的。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v(" edit "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" main.o kbd.o command.o display.o "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n      insert.o search.o files.o utils.o\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" edit main.o kbd.o command.o display.o "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n            insert.o search.o files.o utils.o\n\n  main.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" main.c defs.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" main.c\n  kbd.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" kbd.c defs.h command.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" kbd.c\n  command.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" command.c defs.h command.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" command.c\n  display.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" display.c defs.h buffer.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" display.c\n  insert.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" insert.c defs.h buffer.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" insert.c\n  search.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" search.c defs.h buffer.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" search.c\n  files.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" files.c defs.h buffer.h command.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" files.c\n  utils.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" utils.c defs.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" utils.c\n  clean "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" edit main.o kbd.o command.o display.o "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n        insert.o search.o files.o utils.o\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br")])]),e("p",[a._v("反斜杠（\\）是换行符的意思。这样比较便于Makefile的易读。我们可以把这个内容保存在文件为“Makefile”或“makefile”的文件中，然后在该目录下直接输入命令“make”就可以生成执行文件edit。如果要删除执行文件和所有的中间目标文件，那么，只要简单地执行一下“make clean”就可以了。")]),a._v(" "),e("p",[a._v("在这个makefile中，目标文件（target）包含：执行文件edit和中间目标文件（*.o），依赖文件（prerequisites）就是冒号后面的那些 .c 文件和 .h文件。每一个 .o 文件都有一组依赖文件，而这些 .o 文件又是执行文件 edit 的依赖文件。依赖关系的实质上就是说明了目标文件是由哪些文件生成的，换言之，目标文件是哪些文件更新的。")]),a._v(" "),e("p",[a._v("在定义好依赖关系后，后续的那一行定义了如何生成目标文件的操作系统命令，一定要以一个"),e("strong",[a._v("Tab键")]),a._v("作为开头。记住，make并不管命令是怎么工作的，他只管执行所定义的命令。make会比较targets文件和prerequisites文件的修改日期，如果prerequisites文件的日期要比targets文件的日期要新，或者target不存在的话，那么，make就会执行后续定义的命令。")]),a._v(" "),e("p",[a._v("这里要说明一点的是，clean不是一个文件，它只不过是一个动作名字，有点像C语言中的lable一样，其冒号后什么也没有，那么，make就不会自动去找文件的依赖性，也就不会自动执行其后所定义的命令。要执行其后的命令，就要在make命令后明显得指出这个lable的名字。这样的方法非常有用，我们可以在一个makefile中定义不用的编译或是和编译无关的命令，比如程序的打包，程序的备份，等等。")])]),a._v(" "),e("h3",{attrs:{id:"make是如何工作的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make是如何工作的"}},[a._v("#")]),a._v(" make是如何工作的")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("在默认的方式下，也就是我们只输入make命令。那么，")]),a._v(" "),e("p",[a._v("1、make会在当前目录下找名字叫“Makefile”或“makefile”的文件。\n2、如果找到，它会找文件中的第一个目标文件（target），在上面的例子中，他会找到“edit”这个文件，并把这个文件作为最终的目标文件。\n3、如果edit文件不存在，或是edit所依赖的后面的 .o 文件的文件修改时间要比edit这个文件新，那么，他就会执行后面所定义的命令来生成edit这个文件。\n4、如果edit所依赖的.o文件也存在，那么make会在当前文件中找目标为.o文件的依赖性，如果找到则再根据那一个规则生成.o文件。（这有点像一个堆栈的过程）\n5、当然，你的C文件和H文件是存在的啦，于是make会生成 .o 文件，然后再用 .o 文件生命make的终极任务，也就是执行文件edit了。")]),a._v(" "),e("p",[a._v("这就是整个make的依赖性，make会一层又一层地去找文件的依赖关系，直到最终编译出第一个目标文件。在找寻的过程中，如果出现错误，比如最后被依赖的文件找不到，那么make就会直接退出，并报错，而对于所定义的命令的错误，或是编译不成功，make根本不理。make只管文件的依赖性，即，如果在我找了依赖关系之后，冒号后面的文件还是不在，那么对不起，我就不工作啦。")]),a._v(" "),e("p",[a._v("通过上述分析，我们知道，像clean这种，没有被第一个目标文件直接或间接关联，那么它后面所定义的命令将不会被自动执行，不过，我们可以显示要make执行。即命令——“make clean”，以此来清除所有的目标文件，以便重编译。")]),a._v(" "),e("p",[a._v("于是在我们编程中，如果这个工程已被编译过了，当我们修改了其中一个源文件，比如file.c，那么根据我们的依赖性，我们的目标file.o会被重编译（也就是在这个依性关系后面所定义的命令），于是file.o的文件也是最新的啦，于是file.o的文件修改时间要比edit要新，所以edit也会被重新链接了（详见edit目标文件后定义的命令）。")]),a._v(" "),e("p",[a._v("而如果我们改变了“command.h”，那么，kdb.o、command.o和files.o都会被重编译，并且，edit会被重链接。")])]),a._v(" "),e("h3",{attrs:{id:"makefile中使用变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#makefile中使用变量"}},[a._v("#")]),a._v(" makefile中使用变量")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("在上面的例子中，先让我们看看edit的规则：")]),a._v(" "),e("p",[a._v("edit : main.o kbd.o command.o display.o "),e("br"),a._v("\ninsert.o search.o files.o utils.o\ncc -o edit main.o kbd.o command.o display.o "),e("br"),a._v("\ninsert.o search.o files.o utils.o")]),a._v(" "),e("p",[a._v("我们可以看到[.o]文件的字符串被重复了两次，如果我们的工程需要加入一个新的[.o]文件，那么我们需要在两个地方加（应该是三个地方，还有一个地方在clean中）。当然，我们的makefile并不复杂，所以在两个地方加也不累，但如果makefile变得复杂，那么我们就有可能会忘掉一个需要加入的地方，而导致编译失败。所以，为了makefile的易维护，在makefile中我们可以使用变量。makefile的变量也就是一个字符串，理解成C语言中的宏可能会更好。")]),a._v(" "),e("p",[a._v("比如，我们声明一个变量，叫objects, OBJECTS, objs, OBJS, obj, 或是 OBJ，反正不管什么啦，只要能够表示obj文件就行了。我们在makefile一开始就这样定义：")]),a._v(" "),e("p",[a._v("objects = main.o kbd.o command.o display.o "),e("br"),a._v("\ninsert.o search.o files.o utils.o")]),a._v(" "),e("p",[a._v("于是，我们就可以很方便地在我们的makefile中以“$(objects)”的方式来使用这个变量了，于是我们的改良版makefile就变成下面这个样子：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("  objects "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" main.o kbd.o command.o display.o "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n       insert.o search.o files.o utils.o\n\n  edit "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("objects"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" edit "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("objects"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n  main.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" main.c defs.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" main.c\n  kbd.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" kbd.c defs.h command.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" kbd.c\n  command.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" command.c defs.h command.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" command.c\n  display.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" display.c defs.h buffer.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" display.c\n  insert.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" insert.c defs.h buffer.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" insert.c\n  search.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" search.c defs.h buffer.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" search.c\n  files.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" files.c defs.h buffer.h command.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" files.c\n  utils.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" utils.c defs.h\n      cc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" utils.c\n  clean "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" edit "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("objects"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br")])]),e("p",[a._v("于是如果有新的 .o 文件加入，我们只需简单地修改一下 objects 变量就可以了。")])]),a._v(" "),e("h3",{attrs:{id:"让make自动推导"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#让make自动推导"}},[a._v("#")]),a._v(" 让make自动推导")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("GNU的make很强大，它可以自动推导文件以及文件依赖关系后面的命令，于是我们就没必要去在每一个[.o]文件后都写上类似的命令，因为，我们的make会自动识别，并自己推导命令。")]),a._v(" "),e("p",[a._v("只要make看到一个[.o]文件，它就会自动的把[.c]文件加在依赖关系中，如果make找到一个whatever.o，那么whatever.c，就会是whatever.o的依赖文件。并且 cc -c whatever.c 也会被推导出来，于是，我们的makefile再也不用写得这么复杂。我们的是新的makefile又出炉了。")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("objects "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" main.o kbd.o command.o display.o "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n\tinsert.o search.o files.o utils.o\nedit "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("objects"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\tcc "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" edit "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("objects"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n\nmain.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" defs.h\nkbd.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" defs.h command.h\ncommand.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" defs.h command.h\ndisplay.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" defs.h buffer.h\ninsert.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" defs.h buffer.h\nsearch.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" defs.h buffer.h\nfiles.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" defs.h buffer.h command.h\nutils.o "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" defs.h\n\n.PHONY "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" clean\nclean "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v("\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" edit "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("objects"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br")])]),e("p",[a._v("这种方法，也就是make的“隐晦规则”。上面文件内容中，“.PHONY”表示，clean是个伪目标文件。")])]),a._v(" "),e("h3",{attrs:{id:"清空目标文件的规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清空目标文件的规则"}},[a._v("#")]),a._v(" 清空目标文件的规则")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("每个Makefile中都应该写一个清空目标文件（.o和执行文件）的规则，这不仅便于重编译，也很利于保持文件的清洁。这是一个“修养”（呵呵，还记得我的《编程修养》吗）。一般的风格都是：\n​    clean:\n​      rm edit $(objects)\n更为稳健的做法是：\n​    .PHONY : clean\n​    clean :\n​        -rm edit $(objects)\n前面说过，.PHONY意思表示clean是一个“伪目标”，。而在rm命令前面加了一个小减号的意思就是，也许某些文件出现问题，但不要管，继续做后面的事。当然，clean的规则不要放在文件的开头，不然，这就会变成make的默认目标，相信谁也不愿意这样。不成文的规矩是——“clean从来都是放在文件的最后”。")])]),a._v(" "),e("h3",{attrs:{id:"makefile里有什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#makefile里有什么"}},[a._v("#")]),a._v(" Makefile里有什么？")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("Makefile里主要包含了五个东西：显式规则、隐晦规则、变量定义、文件指示和注释。\n1、显式规则。显式规则说明了，如何生成一个或多的的目标文件。这是由Makefile的书写者明显指出，要生成的文件，文件的依赖文件，生成的命令。\n2、隐晦规则。由于我们的make有自动推导的功能，所以隐晦的规则可以让我们比较粗糙地简略地书写Makefile，这是由make所支持的。\n3、变量的定义。在Makefile中我们要定义一系列的变量，变量一般都是字符串，这个有点你C语言中的宏，当Makefile被执行时，其中的变量都会被扩展到相应的引用位置上。\n4、文件指示。其包括了三个部分，一个是在一个Makefile中引用另一个Makefile，就像C语言中的include一样；另一个是指根据某些情况指定Makefile中的有效部分，就像C语言中的预编译#if一样；还有就是定义一个多行的命令。有关这一部分的内容，我会在后续的部分中讲述。\n5、注释。Makefile中只有行注释，和UNIX的Shell脚本一样，其注释是用“#”字符，这个就像C/C++中的“//”一样。如果你要在你的Makefile中使用“#”字符，可以用反斜框进行转义，如：“#”。\n最后，还值得一提的是，在Makefile中的命令，必须要以[Tab]键开始。")])]),a._v(" "),e("h3",{attrs:{id:"makefile的文件名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#makefile的文件名"}},[a._v("#")]),a._v(" Makefile的文件名")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("默认的情况下，make命令会在当前目录下按顺序找寻文件名为“GNUmakefile”、“makefile”、“Makefile”的文件，找到了解释这个文件。在这三个文件名中，最好使用“Makefile”这个文件名，因为，这个文件名第一个字符为大写，这样有一种显目的感觉。最好不要用“GNUmakefile”，这个文件是GNU的make识别的。有另外一些make只对全小写的“makefile”文件名敏感，但是基本上来说，大多数的make都支持“makefile”和“Makefile”这两种默认文件名。")]),a._v(" "),e("p",[a._v("当然，你可以使用别的文件名来书写Makefile，比如：“Make.Linux”，“Make.Solaris”，“Make.AIX”等，如果要指定特定的Makefile，你可以使用make的“-f”和“--file”参数，如：make -f Make.Linux或make --file Make.AIX。")])]),a._v(" "),e("h3",{attrs:{id:"引用其它的makefile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引用其它的makefile"}},[a._v("#")]),a._v(" 引用其它的Makefile")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("在Makefile使用include关键字可以把别的Makefile包含进来，这很像C语言的#include，被包含的文件会原模原样的放在当前文件的包含位置。include的语法是：\ninclude "),e("filename",[a._v(";\nfilename可以是当前操作系统Shell的文件模式（可以保含路径和通配符）\n在include前面可以有一些空字符，但是绝不能是[Tab]键开始。include和"),e("filename",[a._v(";可以用一个或多个空格隔开。举个例子，你有这样几个Makefile：a.mk、b.mk、c.mk，还有一个文件叫foo.make，以及一个变量$(bar)，其包含了e.mk和f.mk，那么，下面的语句：\ninclude foo.make *.mk $(bar)\n等价于：\ninclude foo.make a.mk b.mk c.mk e.mk f.mk\nmake命令开始时，会把找寻include所指出的其它Makefile，并把其内容安置在当前的位置。就好像C/C++的#include指令一样。如果文件都没有指定绝对路径或是相对路径的话，make会在当前目录下首先寻找，如果当前目录下没有找到，那么，make还会在下面的几个目录下找：\n1、如果make执行时，有“-I”或“--include-dir”参数，那么make就会在这个参数所指定的目录下去寻找。\n2、如果目录"),e("prefix",[a._v(";/include（一般是：/usr/local/bin或/usr/include）存在的话，make也会去找。\n如果有文件没有找到的话，make会生成一条警告信息，但不会马上出现致命错误。它会继续载入其它的文件，一旦完成makefile的读取，make会再重试这些没有找到，或是不能读取的文件，如果还是不行，make才会出现一条致命信息。如果你想让make不理那些无法读取的文件，而继续执行，你可以在include前加一个减号“-”。如：\n-include "),e("filename",[a._v(";\n其表示，无论include过程中出现什么错误，都不要报错继续执行。和其它版本make兼容的相关命令是sinclude，其作用和这一个是一样的。")])],1)],1)],1)],1)]),a._v(" "),e("h3",{attrs:{id:"环境变量-makefiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量-makefiles"}},[a._v("#")]),a._v(" 环境变量 MAKEFILES")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("ul",[e("li",[a._v("如果你的当前环境中定义了环境变量MAKEFILES，那么，make会把这个变量中的值做一个类似于include的动作。这个变量中的值是其它的Makefile，用空格分隔。只是，它和include不同的是，从这个环境变中引入的Makefile的“目标”不会起作用，如果环境变量中定义的文件发现错误，make也会不理。")]),a._v(" "),e("li",[a._v("但是在这里我还是建议不要使用这个环境变量，因为只要这个变量一被定义，那么当你使用make时，所有的Makefile都会受到它的影响，这绝不是你想看到的。在这里提这个事，只是为了告诉大家，也许有时候你的Makefile出现了怪事，那么你可以看看当前环境中有没有定义这个变量。")])])]),a._v(" "),e("h3",{attrs:{id:"make的工作方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#make的工作方式"}},[a._v("#")]),a._v(" make的工作方式")]),a._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[a._v("点击查看")]),a._v(" "),e("p",[a._v("GNU的make工作时的执行步骤入下：（想来其它的make也是类似）\n1、读入所有的Makefile。\n2、读入被include的其它Makefile。\n3、初始化文件中的变量。\n4、推导隐晦规则，并分析所有规则。\n5、为所有的目标文件创建依赖关系链。\n6、根据依赖关系，决定哪些目标要重新生成。\n7、执行生成命令。\n1-5步为第一个阶段，6-7为第二个阶段。第一个阶段中，如果定义的变量被使用了，那么，make会把其展开在使用的位置。但make并不会完全马上展开，make使用的是拖延战术，如果变量出现在依赖关系的规则中，那么仅当这条依赖被决定要使用了，变量才会在其内部展开。\n选项建议加入: "),e("code",[a._v("-Wall -Wextra -Werror -Wconversion -Wshadow")])]),a._v(" "),e("p",[a._v("在使用这种链接器的时候要注意参数\n顺序，越基础的库越到放到后面。如果程序用到了多个 library，这些 library 之间有\n依赖（假设不存在循环依赖），那么链接器的参数顺序应该是依赖图的拓扑排序。这\n样保证每个未决符号都可以在后面出现的库中找到。比如 A、B 两个彼此独立的库同\n时依赖 C 库，那么链接的顺序是 ABC 或 BAC。\n为什么这个规定不是反过来，先列出基础库，再列出应用库呢？原因是前一种做\n法的内存消耗要小得多。如果先处理基础库，链接器不知道库里哪些符号会被后面代\n码的用到，因此只能每一个都记住，链接器的内存消耗跟所有库的大小之和成正比")])])])}),[],!1,null,null,null);e.default=n.exports}}]);