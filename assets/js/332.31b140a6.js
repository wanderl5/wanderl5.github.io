(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{755:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"zentao自定义查询条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zentao自定义查询条件"}},[s._v("#")]),s._v(" zentao自定义查询条件")]),s._v(" "),t("h3",{attrs:{id:"公共模块search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公共模块search"}},[s._v("#")]),s._v(" 公共模块"),t("code",[s._v("search")])]),s._v(" "),t("ul",[t("li",[s._v("通过观察网络可以发现，自定义查询是统一走"),t("code",[s._v("search")]),s._v("模块的"),t("code",[s._v("buildQuery()")]),s._v("方法，更新对应session的条件")]),s._v(" "),t("li",[t("code",[s._v("module\\search\\model.php")]),s._v("的"),t("code",[s._v("public function buildQuery()")]),s._v("函数")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$querySessionName")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("module")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Query'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$formSessionName")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("module")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Form'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// session条件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("session")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$querySessionName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$where")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("session")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$formSessionName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_POST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scoreNum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token class-name static-context"}},[s._v("dao")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("isError")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("loadModel")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'score'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'search'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'saveQueryAdvanced'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"应用模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用模块"}},[s._v("#")]),s._v(" 应用模块")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("projectstory/control.php")]),s._v("的"),t("code",[s._v("story()")]),s._v("方法")]),s._v(" "),t("li",[s._v("调用"),t("code",[s._v("product/control.php::browse()")])]),s._v(" "),t("li",[s._v("调用"),t("code",[s._v("story/model.php::getStories()")])]),s._v(" "),t("li",[s._v("根据"),t("code",[s._v("browseType=='bysearch'")]),s._v("调用"),t("code",[s._v("getBySeach()")]),s._v("函数")])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// session中条件加入")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$storyQuery")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("session")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("projectstoryQuery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getBySQL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$queryProductID")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$storyQuery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$orderBy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("getBySQL")])])]),s._v(" "),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$tmpStories")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("dao")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("select")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"DISTINCT t1.*, IF(t1.`pri` = 0, '),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$this")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("maxPriValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(', t1.`pri`) as priOrder"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("from")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE_STORY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'t1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("leftJoin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE_PROJECTSTORY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'t2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'t1.id=t2.story'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("beginIF")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("strpos")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'result'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("leftJoin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE_STORYREVIEW")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'t3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'t1.id = t3.story and t1.version = t3.version'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("where")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$sql")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("andWhere")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'t1.deleted'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("eq")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("andWhere")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'t1.type'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("eq")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("orderBy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$orderBy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("page")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$pager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'t1.id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fetchAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("blockquote",[t("p",[t("code",[s._v("where($sql)")]),s._v("这句会将session中的条件运用到查询中")])])])}),[],!1,null,null,null);t.default=r.exports}}]);