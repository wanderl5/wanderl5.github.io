(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{803:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"设置与配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置与配置"}},[s._v("#")]),s._v(" 设置与配置")]),s._v(" "),a("h3",{attrs:{id:"git-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-config"}},[s._v("#")]),s._v(" git config")]),s._v(" "),a("ul",[a("li",[s._v("参见"),a("code",[s._v("gitconfig")]),s._v("章节;")])]),s._v(" "),a("h3",{attrs:{id:"git-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-help"}},[s._v("#")]),s._v(" git help")]),s._v(" "),a("ul",[a("li",[s._v("命令帮助")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"获取和创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取和创建项目"}},[s._v("#")]),s._v(" 获取和创建项目")]),s._v(" "),a("h3",{attrs:{id:"git-init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-init"}},[s._v("#")]),s._v(" git init")]),s._v(" "),a("blockquote",[a("p",[s._v("创建分支\n创建bare分支,支持http作为服务器直接对外提供访问")])]),s._v(" "),a("h3",{attrs:{id:"git-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[s._v("#")]),s._v(" git clone")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("复合命令,同时完成以下内容:")]),s._v(" "),a("li",[s._v("创建新目录,进入新目录并执行git init;")]),s._v(" "),a("li",[s._v("指定远程仓库"),a("code",[s._v("git remote add origin")])]),s._v(" "),a("li",[s._v("执行"),a("code",[s._v("git fetch")]),s._v("获取最新内容")]),s._v(" "),a("li",[s._v("checkout分支到工作目录;")])])]),s._v(" "),a("ul",[a("li",[s._v("带"),a("code",[s._v("--bare")]),s._v("选项则可以创建没有工作目录的Git仓库副本;")]),s._v(" "),a("li",[s._v("打包仓库bundle并对包直接clone,效果跟联网从远程clone一致,特别适合网络慢无法联机clone的场景;")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" bundle create repo.bundle HEAD master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解包clone,从bundle中检出到本地仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone repo.bundle repo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("git 对检出时间有超时限制")])]),s._v(" "),a("ul",[a("li",[s._v("TODO: 具体超时配置项待核实")])]),s._v(" "),a("h2",{attrs:{id:"快照基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快照基础"}},[s._v("#")]),s._v(" 快照基础")]),s._v(" "),a("h3",{attrs:{id:"git-add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-add"}},[s._v("#")]),s._v(" git add")]),s._v(" "),a("blockquote",[a("p",[s._v("将内容添加到暂存区(stage,cache, 也叫索引index),以备下次提交")])]),s._v(" "),a("ul",[a("li",[s._v("支持add 单个文件或add指定文件夹或所有")]),s._v(" "),a("li",[s._v("合并产生冲突后,解决完成后需通过add,commit进行重新提交;(一般mergetool会在完成所有冲突解决后,自动调用add)")]),s._v(" "),a("li",[s._v("暂存可以按行级别进行暂存")])]),s._v(" "),a("h3",{attrs:{id:"git-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-status"}},[s._v("#")]),s._v(" git status")]),s._v(" "),a("blockquote",[a("p",[s._v("展示文件的状态,支持--short简化输出,类似于svn的状态,但简化状态下无法看到当前是否在merge或rebase")])]),s._v(" "),a("h3",{attrs:{id:"git-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-diff"}},[s._v("#")]),s._v(" git diff")]),s._v(" "),a("blockquote",[a("p",[s._v("比较任意两棵树之间的差异")])]),s._v(" "),a("ul",[a("li",[s._v("比较工作区与暂存区差异: "),a("code",[s._v("git diff")])]),s._v(" "),a("li",[s._v("比较暂存区与本地版本库"),a("code",[s._v("最后一次提交")]),s._v("的差异: "),a("code",[s._v("git diff --cached")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂存区文件与指定commit比较,支持指定文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cached")]),s._v(" 67ac6e tt/1.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用比较工具, 缓存区与指定commit比较,但不能限定目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" difftool --dir-diff "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cached")]),s._v(" 67ac6e \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[a("code",[s._v("--cached")]),s._v("也可以用"),a("code",[s._v("--staged")]),s._v("代替")])]),s._v(" "),a("ul",[a("li",[s._v("比较不同分支差异(fetch后也可以比较远程分支),实际是指定分支对应的commit_id来进行比较,commitid一旦确定,则其中包含的内容也是确定的,所以一旦获取后也可以直接跟远程仓库比较")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取所有分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分支(dir-diff用于一次性展示所有差异)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" difftool --dir-diff d62d56f 31edf33\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("两点语法")]),s._v(" : 比较两个分支或commit之间的差异")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以下两个用法等同")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" main "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--not")]),s._v(" f2\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" f2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("三点语法(triple-dot syntax)")]),s._v(" : 比较所处分支的最新提交与两个分支的共同祖先的差异")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# f1,main的共同祖先commit与main的最新提交比较")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".f1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("等同于以下两个命令的组合\n"),a("ul",[a("li",[s._v("获取共同祖先")])])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge-base main f1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("以上命令获取到共同祖先base:  d62d56f756c65ac9f7c942a74a883a0b4f8d1c14")]),s._v(" "),a("li",[s._v("比较共同祖先与f1的差异(此差异也是merge f1会引入的调整内容)")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" d62d56f756c65ac9f7c942a74a883a0b4f8d1c14"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("f1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("提前检查不经意间增加的末尾空格(不会检查前置tab):  "),a("code",[s._v("git diff --check")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".txt:3: trailing whitespace.\n+change \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("merge时忽略空格:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略行尾空格")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --ignore-space-change\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略所有空字符,包含空格和tab,位置包括任何位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --ignore-all-space\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"git-difftool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-difftool"}},[s._v("#")]),s._v(" git difftool")]),s._v(" "),a("blockquote",[a("p",[s._v("使用可视化工具查看差异(默认是逐个差异文件打开进行查看),具体使用哪个比较工具,在配置中支持配置化")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("--dir-diff")]),s._v("支持拷贝到临时目录进行树形比较")])]),s._v(" "),a("h3",{attrs:{id:"git-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-commit"}},[s._v("#")]),s._v(" git commit")]),s._v(" "),a("blockquote",[a("p",[s._v("将暂存区的内容提交到仓库,并记录永久快照,然户将分支指针指向它")])]),s._v(" "),a("ul",[a("li",[s._v("将工作区内容直接提交到仓库,跳过暂存"),a("code",[s._v("git add")]),s._v("操作")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-am")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add tab in 2.txt"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("amend修改最后一次提交信息(后台其实会产生多次提交,commitid都会变化,在reflog中均能找到)")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 事先已进行提交,发现提交有遗漏,可以在修改完文件后再次add,最后amend,就会修改掉最后1次修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--amend")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"git-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-reset"}},[s._v("#")]),s._v(" git reset")]),s._v(" "),a("ul",[a("li",[s._v("详见"),a("code",[s._v("Git恢复")]),s._v("章节")])]),s._v(" "),a("h3",{attrs:{id:"git-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-restore"}},[s._v("#")]),s._v(" git restore")]),s._v(" "),a("ul",[a("li",[s._v("详见"),a("code",[s._v("Git恢复")]),s._v("章节")])]),s._v(" "),a("h3",{attrs:{id:"git-revert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-revert"}},[s._v("#")]),s._v(" git revert")]),s._v(" "),a("ul",[a("li",[s._v("详见"),a("code",[s._v("Git恢复")]),s._v("章节")])]),s._v(" "),a("h3",{attrs:{id:"git-checkout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout"}},[s._v("#")]),s._v(" git checkout")]),s._v(" "),a("ul",[a("li",[s._v("切换分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout f1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("新建分支并切换到此分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" f2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("恢复工作区文件, 并直接将文件设置为stage状态")]),s._v(" "),a("li",[s._v("也可用于恢复文件,详见"),a("code",[s._v("Git恢复")]),s._v("章节")])]),s._v(" "),a("h3",{attrs:{id:"git-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-merge"}},[s._v("#")]),s._v(" git merge")]),s._v(" "),a("ul",[a("li",[s._v("merge时忽略空格:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略行尾空格")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge f1 -Xignore-space-change\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略所有空字符,包含空格和tab,位置包括任何位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge f1 -Xignore-all-space\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"展示指定commit区间的提交历史-cid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#展示指定commit区间的提交历史-cid"}},[s._v("#")]),s._v(" 展示指定commit区间的提交历史(cid)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-list 7df8d4b~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("HEAD "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -c1-7\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rev-list ff52449^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("ff52449\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"展示指定提交中的文件清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#展示指定提交中的文件清单"}},[s._v("#")]),s._v(" 展示指定提交中的文件清单")]),s._v(" "),a("ul",[a("li",[s._v("单commit")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" diff-tree --no-commit-id --name-only "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" ff52449 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("commit区间")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定commit区间")]),s._v("\n➜  gitplay_git git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" diff-tree --no-commit-id --name-only "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" 63b6d8c~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("HEAD\n.gitattributes\n0001-1111.patch\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".txt\ncrlf.txt\ncrlf3.txt\ncrlf4.txt\nmain.txt\nsrc/leak/1.cpp\nsrc/leak/ver.h\nsrc/svspot/priceWorkAction.h\ntmerge/1.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git - Reference 官方命令参考"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_44302046/article/details/123922309",target:"_blank",rel:"noopener noreferrer"}},[s._v("网友整理内容"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);