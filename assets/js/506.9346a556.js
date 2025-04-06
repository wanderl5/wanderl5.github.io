(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{975:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"自定义函数支持markdown的格式化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义函数支持markdown的格式化"}},[s._v("#")]),s._v(" 自定义函数支持markdown的格式化")]),s._v(" "),t("ul",[t("li",[s._v("修改"),t("code",[s._v("/~.vimrc")])])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" Format table under cursor.\n"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" Depends on Tabularize.\n"')]),s._v("\nfunction"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" TableFormat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("let")]),s._v(" l:pos "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" getpos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("g:, "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim_markdown_borderless_table'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" add '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" to the beginning of the line if it isn't present\n      normal! {\n      call search('|')\n      execute 'silent .,''}s/"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\v"}},[s._v("\\v")]),s._v("^(\\s{0,})\\|?([^\\|])/"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("|"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\2"}},[s._v("\\2")]),s._v("/e'\n\n      \"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" to the end of the line "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" it isn"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t present\n      normal! {\n      call search('")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("')\n      execute '")]),s._v("silent .,"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("s/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("v"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/e"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n    endif\n\n    normal! {\n    \" Search instead of `normal! j` because of the table at beginning of file edge case.\n    call search('")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\')\n    normal! j\n    " Remove everything that is not a pipe, colon or hyphen next to a colon othewise\n    " well formated tables would grow because of addition of 2 spaces on the separator\n    " line by Tabularize /|.\n    let l:flags = (&gdefault ? \'')]),s._v("' "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'g'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    execute "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/\\(:\\@<!-:\\@!\\|[^|:-]\\)//e'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" l:flags\n    execute "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/--/-/e'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" l:flags\n    Tabularize /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\" Move colons for alignment to left or right side of the cell.\n    execute 's/:\\( \\+\\)|/"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v(":|/e' . l:flags\n    execute 's/|\\( \\+\\):/|:"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\1"}},[s._v("\\1")]),s._v("/e' . l:flags\n    execute 's/|:\\?\\zs[ -]\\+\\ze:\\?|/\\=repeat(\"")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\", len(submatch(0)))/' . l:flags\n    call setpos('.', l:pos)\nendfunction\n\n\"")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("format")]),s._v(' current table where curso is\n"nnoremap '),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("F1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" :TableFormat"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nnnoremap "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("F1"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" :call TableFormat"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("CR"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br")])]),t("blockquote",[t("p",[s._v("依赖vimplugin：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Plug "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'soar0216/tabular-vim'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'on'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tabularize'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);