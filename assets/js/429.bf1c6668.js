(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{885:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"wsl环境下搭建开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wsl环境下搭建开发环境"}},[s._v("#")]),s._v(" WSL环境下搭建开发环境")]),s._v(" "),a("h2",{attrs:{id:"windows开启wsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows开启wsl"}},[s._v("#")]),s._v(" windows开启wsl")]),s._v(" "),a("ul",[a("li",[s._v("开启")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("管理员权限运行powershell并运行下面的命令：\nEnable-WindowsOptionalFeature "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Online")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-FeatureName")]),s._v(" Microsoft-Windows-Subsystem-Linux\n或者：\n控制面板-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("程序和功能-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("启用或关闭Windows功能-"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("勾选 适用于Linux的Windows子系统\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("重启电脑")])]),s._v(" "),a("h2",{attrs:{id:"安装chocolatey-windows下软件包安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装chocolatey-windows下软件包安装软件"}},[s._v("#")]),s._v(" 安装Chocolatey（windows下软件包安装软件）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("命令行安装： 以管理员身份打开powershell.exe,执行以下代码\nSet-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))")])]),s._v(" "),a("li",[a("p",[s._v("脚本安装： 直接打开https://chocolatey.org/install.ps1,复制内容到本地新建 install.psl 文件，右键powershell打开，执行安装")])])]),s._v(" "),a("h2",{attrs:{id:"安装lxrunoffline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装lxrunoffline"}},[s._v("#")]),s._v(" 安装LxRunOffline")]),s._v(" "),a("ul",[a("li",[s._v("Chocolatey安装：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("choco "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lxrunoffline\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("Scoop：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("scoop bucket "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" extras\nor\nscoop "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lxrunoffline\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("手动下载安装 download the binaries directly:\nLatest releases: https://github.com/DDoSolitary/LxRunOffline/releases\nDevelopment builds: https://ddosolitary-builds.sourceforge.io/LxRunOffline/")])]),s._v(" "),a("blockquote",[a("p",[s._v("如果是工具安装，直接可使用；\n但如果下载二进制文件，需手动设置下环境变量")])]),s._v(" "),a("blockquote",[a("p",[s._v("注：Chocolatey 也可用来安装其他软件\nchoco install -y git\nchoco install -y python")])]),s._v(" "),a("h2",{attrs:{id:"wsl-安装centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wsl-安装centos"}},[s._v("#")]),s._v(" wsl 安装centos")]),s._v(" "),a("ul",[a("li",[s._v("下载好centos-7-docker.tar.xz")]),s._v(" "),a("li",[s._v("新建本地用于存放wsl工作目录的路径 E:\\wsl\\centos")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("LxRunOffline.exe  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" centos "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" E:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("wsl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("centos "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("  E:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("soft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("linux"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("wsl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("centos-7-docker.tar.xz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"centos环境启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos环境启动"}},[s._v("#")]),s._v(" centos环境启动")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("wsl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" centos\n\n看到如下的提示符，说明环境ok：\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@DESKTOP-P68VB3R yt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"centos环境配置-含sshd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos环境配置-含sshd"}},[s._v("#")]),s._v(" centos环境配置（含sshd）")]),s._v(" "),a("h3",{attrs:{id:"更换yum源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换yum源"}},[s._v("#")]),s._v(" 更换yum源")]),s._v(" "),a("p",[s._v("see [[Change Yum Source]]")]),s._v(" "),a("h3",{attrs:{id:"实现用终端ssh连接wsl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现用终端ssh连接wsl"}},[s._v("#")]),s._v(" 实现用终端ssh连接wsl")]),s._v(" "),a("h4",{attrs:{id:"安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装软件"}},[s._v("#")]),s._v(" 安装软件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# centos")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" openssl openssh-server openssh-clients "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssl openssh-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("环境下载最新的hdltmp安装包，解压并安装")]),s._v(" "),a("h4",{attrs:{id:"ssh配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh配置"}},[s._v("#")]),s._v(" SSH配置")]),s._v(" "),a("ul",[a("li",[s._v("编辑 /etc/ssh/sshd_config，打开 Port 22(若被占用,调整端口) - 以下参数按下配置")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu调整端口为32")]),s._v("\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nPermitRootLogin "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nPasswordAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("创建公私密钥，输入命令后，直接按两次enter键确认就行了")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /etc/ssh/ssh_host_rsa_key\nssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ecdsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /etc/ssh/ssh_host_ecdsa_key\nssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ed25519 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /etc/ssh/ssh_host_ed25519_key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("开启服务")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/usr/sbin/sshd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("建议在~/.bash_profile中加入/usr/sbin/sshd -D & 保证sshd自启动")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sshd_cnt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sshd -D"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sshd_cnt: '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sshd_cnt")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sshd_cnt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-eq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        /usr/sbin/sshd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sshd inited ..."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("ul",[a("li",[s._v("在Ubuntu下需使用sudo操作; #ssh")]),s._v(" "),a("li",[s._v("Ubuntu下使用.profile文件而非.bash_profile")]),s._v(" "),a("li",[s._v('需手动"sudo mkdir /run/sshd"，否则会报：Missing privilege separation directory: /run/sshd')]),s._v(" "),a("li",[s._v("Ubuntu下启动ssh: sudo service ssh --full-restart")])])]),s._v(" "),a("ul",[a("li",[s._v("使用termnius 连接127.0.0.1连接到本地wsl上")])]),s._v(" "),a("h4",{attrs:{id:"问题-解决missing-privilege-separation-directory-run-sshd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-解决missing-privilege-separation-directory-run-sshd"}},[s._v("#")]),s._v(" 问题：解决Missing privilege separation directory: /run/sshd")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/run/sshd/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装编译相关软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装编译相关软件"}},[s._v("#")]),s._v(" 安装编译相关软件")]),s._v(" "),a("p",[s._v("see [[GCC]]")]),s._v(" "),a("h3",{attrs:{id:"oracle客户端安装和proc编译环境设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle客户端安装和proc编译环境设置"}},[s._v("#")]),s._v(" oracle客户端安装和proc编译环境设置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("安装oracle Client\n参考[[Oracle Client Linux_InstallWizard(ZIP)]]")])]),s._v(" "),a("li",[a("p",[s._v("oracle proc编译设置\n调整/opt/oracle/precomp/admin/pcscfg.cfg文件如下:")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sys_include")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/opt/oracle/precomp/public,/usr/include,/usr/lib/gcc-lib/x86_64-redhat-linux/3.2.3/include,/usr/lib/gcc/x86_64-redhat-linux/4.1.1/include,/usr/lib64/gcc/x86_64-suse-linux/4.1.2/include,/usr/lib64/gcc/x86_64-suse-linux/4.3/include,/usr/lib/gcc/x86_64-redhat-linux/4.4.4/include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ltype")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("short\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("define")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("__x86_64__\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"mq安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq安装"}},[s._v("#")]),s._v(" MQ安装")]),s._v(" "),a("p",[s._v("see "),a("code",[s._v("中间件->MQ->MQ8.0安装(Linux)")])]),s._v(" "),a("h3",{attrs:{id:"linux下实现可视化调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux下实现可视化调试"}},[s._v("#")]),s._v(" linux下实现可视化调试")]),s._v(" "),a("ul",[a("li",[s._v("windows下安装可视化客户端 vcxsrv-64.1.20.8.1.installer.exe")]),s._v(" "),a("li",[s._v("linux安装界面\n"),a("ul",[a("li",[s._v("see [[Linux GUI-xfce]]")])])])]),s._v(" "),a("h4",{attrs:{id:"安装ddd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装ddd"}},[s._v("#")]),s._v(" 安装DDD")]),s._v(" "),a("p",[s._v("see [[DDD Basic]]")]),s._v(" "),a("h3",{attrs:{id:"开发环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发环境搭建"}},[s._v("#")]),s._v(" 开发环境搭建：")]),s._v(" "),a("ul",[a("li",[s._v("拷贝本地文件到wsl中：\n"),a("ul",[a("li",[s._v("本地文件可以使用sftp传输；")]),s._v(" "),a("li",[s._v("通过cp命令,通过/mnt/f 下的路径直接访问windows的文件;")]),s._v(" "),a("li",[s._v("通过FreeFileSync软件镜像同步;(推荐)")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("禁止在windows人为调整wsl中的文件")])]),s._v(" "),a("p",[s._v("商店下载后报错:\nInstalling, this may take a few minutes...\nWslRegisterDistribution failed with error: 0x8000000d")])])}),[],!1,null,null,null);a.default=n.exports}}]);