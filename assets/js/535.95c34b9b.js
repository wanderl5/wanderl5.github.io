(window.webpackJsonp=window.webpackJsonp||[]).push([[535],{1004:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mq配置文件说明-qm-ini"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mq配置文件说明-qm-ini"}},[s._v("#")]),s._v(" MQ配置文件说明(QM.ini)")]),s._v(" "),a("p",[s._v("4.3.2 在 UNIX 系统上更改配置信息")]),s._v(" "),a("p",[s._v("在 UNIX 平台上，可以更改以配置文件中的 WebSphere MQ 属性：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("WebSphere MQ 配置文件（mqs.ini），它的属性将影响整个WebSphere MQ节点系统，每个节点有一个mqs.ini文件。")])]),s._v(" "),a("li",[a("p",[s._v("队列管理器配置文件（qm.ini），它的属性仅影响某个队列管理器，在节点中的每个队列管理器都有一个qm.ini文件。")])])]),s._v(" "),a("p",[s._v("配置文件中包含一个或多个节，每节都是为一个专门功能服务，如日志功能、通道功能和可安装服务。")]),s._v(" "),a("p",[s._v("因为 WebSphere MQ 配置文件用于维护和队列管理器相关的数据，不合法的或不正确的配置文件可能导致一些或全部 MQSC 命令失败。同样，应用程序不能与在 WebSphere MQ 配置文件中没有定义的队列管理器连接。")]),s._v(" "),a("p",[s._v("对配置文件所做的任何修改都不会立即生效，只有重新启动队列管理器才生效。")]),s._v(" "),a("p",[s._v("根据以下优先级设置配置文件属性值：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在命令行上输入的参数优先于在配置文件中定义的值。")])]),s._v(" "),a("li",[a("p",[s._v("qm.ini 文件中定义的值优先于 mqs.ini 文件中定义的值")])])]),s._v(" "),a("p",[s._v("WebSphere MQ 配置文件（mqs.ini）")]),s._v(" "),a("p",[s._v("WebSphere MQ 配置文件 mqs.ini 包含和节点上所有队列管理器都相关的信息。它在安装期间自动创建。 WebSphere MQ UNIX 系统版的 mqs.ini 文件在 /var/mqm 目录中。它包含：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("队列管理器的名称")])]),s._v(" "),a("li",[a("p",[s._v("缺省队列管理器的名称和每个文件关联的文件位置")])])]),s._v(" "),a("p",[s._v("以下为 WebSphere MQ 配置文件的示例：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DefaultPrefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/mqm\nLogDefaults:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogPrimaryFiles")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogSecondaryFiles")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogFilePages")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("104")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogType")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CIRCULAR\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogBufferPages")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogDefaultPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/mqm/log\nQueueManager:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("saturn.queue.manager\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/mqm\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Directory")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("saturn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("queue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("manager\nQueueManager:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pluto.queue.manager\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Prefix")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/mqm\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Directory")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pluto"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("queue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("manager\nDefaultQueueManager:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("saturn.queue.manager\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("队列管理器配置文件 (qm.ini)")]),s._v(" "),a("p",[s._v("队列管理器配置文件 qm.ini, 包含和特定队列管理器相关的信息。每个队列管理器都有一个队列管理器配置文件。创建队列管理器时，将自动创建此文件。")]),s._v(" "),a("p",[s._v("qm.ini 文件保存在队列管理器的目录树的根中。例如，队列管理器 QMNAME 的配置文件的路径和名称是： /var/mqm/qmgrs/QMNAME/qm.ini")]),s._v(" "),a("p",[s._v("队列管理器名称最大长达 48 个字符。")]),s._v(" "),a("p",[s._v("如图显示了在 WebSphere MQ UNIX 系统版中队列管理器配置文件的配置属性。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ExitPath:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExitsDefaultPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/mqm/exits\nService:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("AuthorizationService\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EntryPoints")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("\nServiceComponent:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("AuthorizationService\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MQ.UNIX.auth.service\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/mqm/bin/amqzfuno.o "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ComponentDataSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nService:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NameService\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("EntryPoints")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\nServiceComponent:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Service")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NameService\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MQ.DCE.name.service\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/mqm/lib/amqzfa "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ComponentDataSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nLog:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogPrimaryFiles")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogSecondaryFiles")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogFilePages")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogType")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CIRCULAR\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogBufferPages")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LogPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/mqm/log/saturn"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("queue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("manager/\nXAResourceManager:\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DB2 Resource Manager Bank\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SwitchFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/db2swit\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("XAOpenString")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MQBankDB\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("XACloseString")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ThreadOfControl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("THREAD\nCHANNELS:\nMaxChannels "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Maximum number of Channels allowed.\nMaxActiveChannels "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Maximum number of Channels allowed to be\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" active at any time. \nTCP: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" TCP/IP entries.\nKeepAlive "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Yes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Switch KeepAlive on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);