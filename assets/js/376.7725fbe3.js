(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{812:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[s._v("#")]),s._v(" update")]),s._v(" "),a("h3",{attrs:{id:"拉取报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取报错"}},[s._v("#")]),s._v(" 拉取报错")]),s._v(" "),a("ul",[a("li",[s._v("现象:"),a("code",[s._v("fatal: Not possible to fast-forward, aborting")])]),s._v(" "),a("li",[s._v("原因:\n"),a("ul",[a("li",[s._v("同时有修改待提交和远程待更新内容")])])]),s._v(" "),a("li",[s._v("解决:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rebase")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git pull origin master --rebase")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("建议不要采用pull含rebase,会导致较隐晦的问题")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config pull.rebase "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"stage-commit-merge-rebase等报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stage-commit-merge-rebase等报错"}},[s._v("#")]),s._v(" stage/commit/merge/rebase等报错")]),s._v(" "),a("ul",[a("li",[s._v("现象:"),a("code",[s._v("Unable to create '.git/index.lock' File exists")])]),s._v(" "),a("li",[s._v("原因:\n"),a("ul",[a("li",[s._v("执行git命令异常或有并行的git操作进行中")])])]),s._v(" "),a("li",[s._v("解决方案:\n"),a("ul",[a("li",[s._v("确认没有并行git操作,则可以删除仓库初始目录: .git/index.lock 文件,重新尝试")])])])]),s._v(" "),a("h2",{attrs:{id:"push推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push推送"}},[s._v("#")]),s._v(" push推送")]),s._v(" "),a("h3",{attrs:{id:"远程分支有更新拒绝推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程分支有更新拒绝推送"}},[s._v("#")]),s._v(" 远程分支有更新拒绝推送")]),s._v(" "),a("ul",[a("li",[s._v("现象:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("To https://gitee.com/soar0216/test.git\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rejected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("        master -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fetch first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nerror: failed to push some refs to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'https://gitee.com/soar0216/test.git'")]),s._v("\nhint: Updates were rejected because the remote contains work that you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\nhint: not have locally. This is usually caused by another repository pushing\nhint: to the same ref. You may want to first integrate the remote changes\nhint: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g., "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git pull ...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" before pushing again.\nhint: See the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Note about fast-forwards'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git push --help'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" details.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("解决:")])]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("远程仓库比本地仓库新,需要先pull,将变化合并进来再更新")]),s._v(" "),a("li",[s._v("如果修改的不是同一个文件会直接FastForward合并,如果是同一个文件则会合并")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"推送密码报错-但密码是正确的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送密码报错-但密码是正确的"}},[s._v("#")]),s._v(" 推送密码报错,但密码是正确的")]),s._v(" "),a("ul",[a("li",[s._v("推送密码报错,但密码是正确的")]),s._v(" "),a("li",[s._v("原因:\n"),a("ul",[a("li",[s._v("git用户刚刚建立,没有登陆或修改用户名密码,用户实际不可用")])])]),s._v(" "),a("li",[s._v("解决方案:\n"),a("ul",[a("li",[s._v("登陆用户,并修改初次密码,可以保持原密码")])])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("➜  gitplay git:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push                         \nUsername "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:9080'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" chenyang\nPassword "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://chenyang@localhost:9080'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" \nremote: HTTP Basic: Access denied. The provided password or token is incorrect or your account has 2FA enabled and you must use a personal access token instead of a password. See http://localhost:9080/help/topics/git/troubleshooting_git"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error-on-git-fetch-http-basic-access-denied")]),s._v("\nfatal: Authentication failed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://localhost:9080/erayt/gitplay.git/'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"推送远程分支报no-upstream-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送远程分支报no-upstream-branch"}},[s._v("#")]),s._v(" 推送远程分支报"),a("code",[s._v("no upstream branch.")])]),s._v(" "),a("ul",[a("li",[s._v("现象:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("fatal: The current branch master has no upstream branch.\nTo push the current branch and "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" the remote as upstream, use\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin feture1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("解决:")])]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("原因是没有设置远程仓库,设置push远程仓库分支即可,一般在新建分支后会出现此场景")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --set-upstream origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[s._v("#")]),s._v(" pull")]),s._v(" "),a("h3",{attrs:{id:"pull仓库报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull仓库报错"}},[s._v("#")]),s._v(" pull仓库报错")]),s._v(" "),a("ul",[a("li",[s._v("现象1:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("fatal: refusing to merge unrelated histories\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("解决:")])]),s._v(" "),a("blockquote",[a("p",[s._v("本地采用init建立,再推送到远程已存在的分支,文本没有关联默认会拒绝;")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master --allow-unrelated-historie\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);