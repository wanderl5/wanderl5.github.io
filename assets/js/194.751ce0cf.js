(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{605:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"idea远程连接tomcat调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#idea远程连接tomcat调试"}},[t._v("#")]),t._v(" IDEA远程连接Tomcat调试")]),t._v(" "),s("p",[t._v("\n注意: 本地调试不需要做以下调整\n")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在IDEA中：点击Run–>Edit Configurations-> 点击添加->Remote，新建一个Remote连接\n   - 修改Host（tomcat 的发布机器地址），然后复制第一行文本,如：-agentlib:jdwp=transport=dt_socket,server=y suspend=n,address=5005")])]),t._v(" "),s("li",[s("p",[t._v('打开$CATALINA_HOME/bin中的catalina.sh文件，在第一行加入（刚复制文本，并加上CATALINA_OPTS）\nset CATALINA_OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005"(与上步的文本一致)')])]),t._v(" "),s("li",[s("p",[t._v("将需要调试的代码打包(War包)放入$CATALINA_HOME/webapps中（需要保持在webapps里面的代码和idea代码完全一致）,然后启动tomcat：$CATALINA_HOME/bin/startup.sh")])]),t._v(" "),s("li",[s("p",[t._v("打好断点（CTRL+F8）,然后进入刚刚新建的远程连接的debug模式")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);