(window.webpackJsonp=window.webpackJsonp||[]).push([[533],{1004:function(e,r,n){"use strict";n.r(r);var t=n(1),a=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("一.字符串:\n1.字符截取和连接:\n1).substr:取字符串str中的指定字符，从位置a开始取长度为b的字符串，假如a为正则从左边开始，否则从右边开始\nselect dname, substr(dname,-3,2),substr(dname,3,2)  from DEPT where dname='ACCOUNTING';\n2).concat(str1,str2)---将字符串str1与str2连接起来(也可以通过'||'号直接相连)\n3).instr(str,'z',pos,nth)---取得str字符串中从左边开始每一次出现z字符的下标位置(下标从1开始),参数为字符串,'待搜索字符',开始搜索位置,第几个搜索到得字符;\nINSTR(str,find_string[,start][,occurrence])\n在str中查找字符串find_string，然后返回find_string所在的位置,可提供一个可选的start位置来指定该函数从这个位置开始查找。\n同样，也可以指定一个可选的occurrence参数，来说明应该返回find_string第几次出现的位置\nselect dname, instr(dname, 'N',4,2) from DEPT where dname='ACCOUNTING';\n4).仅对两边的字符起效,中间的字符无效 LTRIM(x,[,trim_string] 从左边截去一些字符,可选参数trim_string指定要截去的字符;如果不指定,则默认截去空格。\nRTRIM(x,[,trim_string] 从右边截去一些字符,可选参数trim_string指定要截去的字符;如果不指定,则默认截去空格。\nTRIM(x,[,trim_string] 两边同时截去一些字符,可选参数trim_string指定要截去的字符;如果不指定,则默认截去空格。\nselect ltrim('  soar is a boy  ') lt, trim('  soar is a boy  ')t, rtrim('  soar is a boy  ')rt  from dual;")]),e._v(" "),r("p",[e._v("5).REPLACE(x,search_string,replace_string)\n在x中查找search_string，并将其其替换为replace_string。\nselect replace(' soar is a hero ', ' ' , '#') from dual;")]),e._v(" "),r("p",[e._v("2.大小写转换:\nupper(str)---将字符串str全部转换成大写\nlower(str)---将字符串str全部转换成小写\ninitcap(str)---将字符串中每个单词的首字母大写\nselect initcap('soar is a hero') from dual;")]),e._v(" "),r("p",[e._v("3.填充:\nlpad(str,12,'"),r("em",[e._v("')---左填充，即将字符串str长度填充到12，假如其不足12位则在左边以")]),e._v("号填充\nrpad(str,12,'*')---右填充，同上")]),e._v(" "),r("p",[e._v("4.字符串长度: length(str)---计算字符串str的长度")]),e._v(" "),r("p",[e._v("5.ascII码和字符的转换\nASCII(X) 返回字符x的ascII码\nCHR(x) 返回ASCII码的x的字符\nselect ascII('a'), chr(97) from dual;")]),e._v(" "),r("p",[e._v("二.数字函数\n1.精度截取: round(45.926,2)---将前一数保留指定的小数位，并四舍五入(45.93)，假如指定位是负数则意为在小数点左边保留指定位,\nround(45.923,-1)=50     小数点左边保留1位,即可想象成4.5923,四舍五入后至5,再乘以10,即得到50\nround(45.93,-2)=0   小数点左边保留2位,即可想象成0.4593,四舍五入后至0,再乘以100,即得到0\nround(55.93,-2)=100     小数点左边保留2位,即可想象成0.5593,四舍五入后至1,再乘以100,即得到100\nround(45.923,0)=46")]),e._v(" "),r("p",[e._v("2.截取小数位: trunc(45.926,2)---同上，只是不四舍五入(45.92)\n3.取模,求余:\nmod(1600,300)=100\n4.取绝对值:ABS\nSQL> select abs(100),abs(-100) from dual;")]),e._v(" "),r("p",[e._v("ABS(100) ABS(-100)")]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("  100       100\n")])])]),r("h2",{attrs:{id:"_5-取整-floor-返回小于或等于给出数字的最小整数sql-select-floor-2345-67-from-dual-floor-2345-67"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-取整-floor-返回小于或等于给出数字的最小整数sql-select-floor-2345-67-from-dual-floor-2345-67"}},[e._v("#")]),e._v(" 5.取整:\nFLOOR 返回小于或等于给出数字的最小整数\nSQL> select floor(2345.67) from dual;\nFLOOR(2345.67)")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("      2345\n")])])]),r("p",[e._v("CEIL 返回大于或等于给出数字的最小整数\nSQL> select ceil(3.1415927) from dual;")]),e._v(" "),r("h2",{attrs:{id:"ceil-3-1415927"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ceil-3-1415927"}},[e._v("#")]),e._v(" CEIL(3.1415927)")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("          4\n")])])]),r("p",[e._v("6.次方和平方根:\nselect power(2,10),power(3,3) from dual;\nPOWER(2,10) POWER(3,3)")]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("   1024         27\n")])])]),r("p",[e._v("SQRT 返回数字n的根\nSQL> select sqrt(64),sqrt(10) from dual;")]),e._v(" "),r("p",[e._v("SQRT(64)  SQRT(10)")]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("    8 3.1622777\n")])])]),r("ol",{attrs:{start:"7"}},[r("li",[e._v("平均数 avg\nSQL> select avg(all sal) from gao.table3;")])]),e._v(" "),r("h2",{attrs:{id:"avg-allsal"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#avg-allsal"}},[e._v("#")]),e._v(" AVG(ALLSAL)")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("2592.59\n")])])]),r("ol",{attrs:{start:"7"}},[r("li",[e._v("SIGN 取数字n的符号,大于0返回1,小于0返回-1,等于0返回0\nSQL> select sign(123),sign(-100),sign(0) from dual;\nSIGN(123) SIGN(-100)   SIGN(0)")])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("    1         -1         0\n")])])]),r("p",[e._v("3.日期函数:\n1).取得月份最后一日,last_day(date)\nselect last_day(to_date('2010-04', 'yyyy-mm')) from dual;\nselect last_day(to_date('2010-04-01', 'yyyy-mm-dd')) from dual;")]),e._v(" "),r("p",[e._v("2).加上n个月后的日期add_months(date, n)\nselect add_months(to_date('2010-01-03', 'yyyy-mm-dd'), 6) from dual;")]),e._v(" "),r("p",[e._v("3).下个周几的日期next_day(date, '星期五')\nselect next_day('10-5月-2001','星期五') next_day from dual;\nselect next_day(sysdate,'星期五') next_day from dual;")]),e._v(" "),r("p",[e._v("4).计算日期间月份差months_between(date1, date2)\nselect round(months_between('18-12月-1999','19-3月-1999'),0) mon_between from dual;")]),e._v(" "),r("p",[e._v("5).计算不同时区时间new_time(date, str_时区, str_格式)\nselect to_char(sysdate,'yyyy.mm.dd hh24:mi:ss') bj_time,\nto_char(new_time(sysdate,'PDT','GMT'),'yyyy.mm.dd hh24:mi:ss') los_angles from dual;")]),e._v(" "),r("p",[e._v("6).日期的round和trunc:对日期进行四舍五入:对day进行round,round至最近的周日日期;\nround,存在上进位\nSelect sysdate, ROUND(Sysdate,'YEAR') ry, ROUND(Sysdate,'month') rm, ROUND(Sysdate-3,'day') rd From DUAL;\ntrunc将不上进,均截取掉多余部分\nSelect sysdate, TRUNC(Sysdate,'YEAR') ry, TRUNC(Sysdate,'month') rm, TRUNC(Sysdate,'day') rd From DUAL;")]),e._v(" "),r("p",[e._v("三.转换:\n1.数字--\x3e字符\nto_char(number,'format_model'),foramat_model有如下：\n9---用对应数字表示\n0---强制用０表示\n$---加一$符号\nL---前加本地货币单位表示\n.---十进制点\n,---千进制点")]),e._v(" "),r("p",[e._v("select to_char(123456.23, '09999999.099') from dual\nunion\nselect to_char(123456, 'L9999999.99') from dual\nunion\nselect to_char(123456, '9999999.999') from dual\nunion\nselect to_char(12345678, '99,999,999.999') from dual;\n结果:\nRMB123456.00\n123456.000\n00123456.230\n12,345,678.000")]),e._v(" "),r("h2",{attrs:{id:"_2-字符-日期tselect-to-date-19830917-yyyy-mm-dd-bir-from-dualbir"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-字符-日期tselect-to-date-19830917-yyyy-mm-dd-bir-from-dualbir"}},[e._v("#")]),e._v(" 2.字符--\x3e日期\ntselect to_date('19830917','yyyy-mm-dd') bir from dual\nBIR")]),e._v(" "),r("p",[e._v("17-9月 -83")]),e._v(" "),r("p",[e._v("Select TO_DATE('2008-01-01 星期二 10:36:31 上午','YYYY-MM-DD DAY HH:MI:SS PM') From DUAL;")]),e._v(" "),r("p",[e._v("--插入数据库的sql语句\ninsert into baslog (OPERTIME, CONTENT)\nvalues (to_date('09-06-2010 23:45:45', 'dd-mm-yyyy hh24:mi:ss'), 'Error When ModiData [新增事件]')  ;")]),e._v(" "),r("h2",{attrs:{id:"_3-字符-数字select-to-number-19821217-999999999-mybr-from-dualmybr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-字符-数字select-to-number-19821217-999999999-mybr-from-dualmybr"}},[e._v("#")]),e._v(" 3.字符--\x3e数字\nselect to_number('19821217','999999999') mybr from dual\nMYBR")]),e._v(" "),r("p",[e._v("19821217")]),e._v(" "),r("p",[e._v("Select TO_NUMBER('$1,600.01','$999,999.99') From DUAL;")]),e._v(" "),r("p",[e._v("强制显示个位数的0: // 多少0精确到多少位小数点\nselect to_char(0.12, '0.000'), 0.12 from dual;")]),e._v(" "),r("p",[e._v("四.通用函数\n1.nvl(expr1,expr2)---expr1为空则显示expr2,否则显示expr1\nselect nvl(comm, empno),comm, empno,mgr from emp where empno in (7369,7499,7839);")]),e._v(" "),r("p",[e._v("2.nvl2(expr1,expr2,expr3)---expr1不为空则显示expr2,否则显示expr3\nselect nvl2(comm, empno,mgr),comm, empno,mgr from emp where empno in (7369,7499,7839);\nSelect SAL,COMM,NVL2(COMM,SAL+COMM,SAL), sal+comm From EMP; (null+任何值为null)")]),e._v(" "),r("p",[e._v("3.nullif(expr1,expr2)---二个相等则显示空符,否则显示expr1\nselect nullif(1,3-3), nullif(1,3-2) from dual;")]),e._v(" "),r("p",[e._v("4.coalesce(expr1,expr2,...,exprn)---从expr1开始依次找到不为空的expr，找到就显示，直到最后，否则显示exprn\nselect coalesce(null, null,8,0) from dual;")]),e._v(" "),r("p",[e._v("5.case:\nSelect ename,job,\n(Case JOB\nWhen 'CLERK' Then '店员'\nwhen 'MANAGER'  Then '店员'\nWhen 'SALESMAN' Then '销售'\nElse '临时工'\nEnd )\nFrom emp;")]),e._v(" "),r("p",[e._v("2). (case when b.profit < 1 and b.profit != 0 then '0' || b.profit else to_char(b.profit) END) profit")]),e._v(" "),r("p",[e._v("Select ename, job,\ndecode(JOB,\n'CLERK','店员'\n,'SALESMAN' ,'销售',\n'临时工'\n) From emp;")]),e._v(" "),r("p",[e._v("decode(字段,value1,value1_real, value2, value2_real, ... , default_value_real);")]),e._v(" "),r("p",[e._v("decode(sign(b.amount1cur1),-1,'S','P') PS , sign 函数, 正负符号函数")]),e._v(" "),r("p",[e._v("两个集合比较：\nINTERSECT/MINUS :")]),e._v(" "),r("p",[e._v("Intersect和Minus的操作和Union基本一致，这里一起总结一下：\nUnion，对两个结果集进行并集操作，不包括重复行，同时进行默认规则的排序；\nUnion All，对两个结果集进行并集操作，包括重复行，不进行排序；\nIntersect，对两个结果集进行交集操作，不包括重复行，同时进行默认规则的排序；\nMinus ,对两个结果集进行差操作，不包括重复行，同时进行默认规则的排序。\n可以在最后一个结果集中指定Order by子句改变排序方式。")])])}),[],!1,null,null,null);r.default=a.exports}}]);