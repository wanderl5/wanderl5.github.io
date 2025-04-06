(window.webpackJsonp=window.webpackJsonp||[]).push([[532],{1003:function(s,a,e){"use strict";e.r(a);var t=e(1),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"oracle-cli-reference-oracle命令行参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-cli-reference-oracle命令行参考"}},[s._v("#")]),s._v(" Oracle CLI Reference（Oracle命令行参考）")]),s._v(" "),a("h2",{attrs:{id:"修改用户名和密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改用户名和密码"}},[s._v("#")]),s._v(" 修改用户名和密码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#连接")]),s._v("\nsqlplus /nolog\n即可直接连接oracle，在sqlplus下修改密码\nSQL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" conn /as sysdba\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改oracle用户密码")]),s._v("\nSQL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" alter user system identified by system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSQL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" alter user sys identified by sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"查看字符集编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看字符集编码"}},[s._v("#")]),s._v(" 查看字符集编码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("SQL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from nls_database_parameters where parameter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NLS_CHARACTERSET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"设置密码不过期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置密码不过期"}},[s._v("#")]),s._v(" 设置密码不过期")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#将密码有效期由默认的180天修改成“无限制”：\nsql>ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);