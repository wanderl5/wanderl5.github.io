(window.webpackJsonp=window.webpackJsonp||[]).push([[520],{987:function(e,_,p){"use strict";p.r(_);var v=p(2),s=Object(v.a)({},(function(){var e=this,_=e._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("注意点：\n1.query 只在exp中有，在imp中无query选项；\n2.imp时，相同数据将被导入，而非覆盖模式；\n3.alter table contacts add memo number(2) 加field(列，域)，alter table contacts drop(memo)，可drop掉刚生成的列，但drop动作自动提交，不能rollback!")]),e._v(" "),_("p",[e._v("exp和imp")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("exp和imp是客户端工具，可以在客户端使用也可以在服务器端使用")]),e._v(" "),_("p",[e._v("expdp和impdp是服务器端工具，只能在oracle服务器端使用。")]),e._v(" "),_("p",[e._v("imp只使用于exp导出文件，不适用于expdp导出文件，impdp只适用于expdp导出文件，不适用于exp导出文件")]),e._v(" "),_("p",[e._v("oracle10g开始，增加了数据泵导出导入工具expdp＆impdp")]),e._v(" "),_("p",[e._v("导出export：将数据库部分或全部对象的结构及其数据导出并存储到OS文件中的过程")]),e._v(" "),_("p",[e._v("导入import：将OS文件转换的对象结构及其数据装载到数据库中的过程")]),e._v(" "),_("p",[e._v("导出和导入具有以下作用")]),e._v(" "),_("p",[e._v("1.可以重建组织表")]),e._v(" "),_("p",[e._v("2.可以在用户之间移动对象")]),e._v(" "),_("p",[e._v("3.可以在数据库之间移动对象")]),e._v(" "),_("p",[e._v("4.可以升级数据库到其他平台")]),e._v(" "),_("p",[e._v("5.可以升级数据库到更高版本")]),e._v(" "),_("p",[e._v("6.可以实现逻辑备份和恢复")]),e._v(" "),_("p",[e._v("exp命令选项\n1、buffer用于指定在提取行数据时的缓冲区尺寸 buffer_size = rows_in_array * maximum_row_size")]),e._v(" "),_("p",[e._v("2、compress用于指定导出导入管理初始区（initial）的方法。默认为Y")]),e._v(" "),_("p",[e._v("3、consistent用于指定是否使用set transaction read only语句确保取得一致时间点的数据，默认为N")]),e._v(" "),_("p",[e._v("4、constraints用于指定是否要导出表的约束，默认为Y")]),e._v(" "),_("p",[e._v("5、direct用于指定是否使用直接导出方式，默认为N。直接导出速度要优于常规导出，但要求客户端和服务器端的字符集必须完全一致")]),e._v(" "),_("p",[e._v("6、feedback用于指定根据到导出行数显示导出进度框。默认为0，若设置为10，那么没导出10行显示一个圆点")]),e._v(" "),_("p",[e._v("7、file用于指定导出文件名")]),e._v(" "),_("p",[e._v("8、filesize用于指定导出文件的最大尺寸，若不指定filesize则所有对象和数据会被存放到一个导出文件中")]),e._v(" "),_("p",[e._v("9、flashback_scn用于指定导出特定scn时刻的表数据。不能和flashback_time同时使用")]),e._v(" "),_("p",[e._v("10、flahsback_time用于指定导出特定时刻的表数据。不能和flashback_scn同时使用")]),e._v(" "),_("p",[e._v("11、full用于指定数据库导出模式，默认为N，当设置为Y时，会导出除sys外所有其他方案的对象。需要exp_full_database或dba角色")]),e._v(" "),_("p",[e._v("12、grants用于指定是否要导出对象权限信息，默认为Y")]),e._v(" "),_("p",[e._v("13、help显示帮助信息，默认为N")]),e._v(" "),_("p",[e._v("14、indexes用于指定是否要导出与表和簇相关的所以，默认为Y")]),e._v(" "),_("p",[e._v("15、log用于指定导出日志文件的名称，默认不产生导出日志文件")]),e._v(" "),_("p",[e._v("16、object_consistent用于指定是否要基于对象级设置只读事务导出，默认为N")]),e._v(" "),_("p",[e._v("17、owner用于指定用户导出模式，普通用户只能导出其自身方案。")]),e._v(" "),_("p",[e._v("18、parfile用于指定导出工具要使用的参数文件名，当经常使用exp工具导出数据时，可以将命令行选项放到参数文件中。然后在导出时调用该参数文件")]),e._v(" "),_("p",[e._v("19、query用于指定where条件子句，从而导出表的部分数据。直接导出方式不能使用该选项。")]),e._v(" "),_("p",[e._v("20、recordlength用于指定文件记录的长度，其默认值为buffer选项的值")]),e._v(" "),_("p",[e._v("21、resumable用于指定是否要激活‘空间继续分配’特征，默认为N，为了使用resumable_name和resumable_timeout，必须将该选项设置为Y")]),e._v(" "),_("p",[e._v("resumable_name指定‘空间继续分配’语句所对应的标识符")]),e._v(" "),_("p",[e._v("resumable_timeout用于指定错误被修正的最大时间周期")]),e._v(" "),_("p",[e._v("22、rows用于指定是否要导出表行数据，默认为Y，若为N只会导出表结构")]),e._v(" "),_("p",[e._v("23、statistics用于指定当导入导出文件时生成优化统计信息的类型，默认为estimate")]),e._v(" "),_("p",[e._v("24、tables用于指定导出表")]),e._v(" "),_("p",[e._v("25、tablespaces用于指定表空间导出模式，要求exp_full_database or dba角色")]),e._v(" "),_("p",[e._v("26、transport_tablespace用于指定是否要导出表空间的元数据")]),e._v(" "),_("p",[e._v("27、triggers用于指定是否要导出触发器，默认为Y")]),e._v(" "),_("p",[e._v("28、tts_full_check用于指定是否检查被搬移表空间集合的关联关系，默认N")]),e._v(" "),_("p",[e._v("29、userid用于指定执行导出操作的用户名、口令和连接字符串")]),e._v(" "),_("p",[e._v("导出包括导出表、导出方案、导出数据库三种模式")]),e._v(" "),_("p",[e._v("导出表\n导出表是指用exp工具将一个或多个表的结构和数据存储到OS文件中，导出表是使用tables选项来完成的")]),e._v(" "),_("p",[e._v("导出表时默认情况下会导出相应的表上的所有索引、触发器、约束。")]),e._v(" "),_("p",[e._v("exp system/manager@demo tables=scott.emp,scott.dept file=tab1.dmp")]),e._v(" "),_("p",[e._v("exp scott/tiger@demo tables=dept,emp file=tab2.dmp")]),e._v(" "),_("p",[e._v("导出方案\n导出方案是指用exp工具将一个或多个方案中的所有对象及数据存储到OS文件中，导出方案是使用owner选项来完成的")]),e._v(" "),_("p",[e._v("exp system/manager@demo owner=scott file=schema1.dmp")]),e._v(" "),_("p",[e._v("exp scott/tiger@demo file=schema2.dmp")]),e._v(" "),_("p",[e._v("导出数据库\n导出数据库是指使用工具exp将所有数据库对象及其数据存储到特定的OS文件中，导出数据库是使用full选项来完成。")]),e._v(" "),_("p",[e._v("导出数据库要求具有exp_full_database或dba角色权限。不会导出sys方案的任何对象。")]),e._v(" "),_("p",[e._v("exp system/manager@demo full=y file=full.dmp")]),e._v(" "),_("p",[e._v("imp命令选项\n1、buffer用于指定在传送行数据时的缓冲区尺寸")]),e._v(" "),_("p",[e._v("2、commit用于指定在每次数组插入完成之后是否提交数据，默认值为N，在装载了表的所有数据后才会提交")]),e._v(" "),_("p",[e._v("3、compile用于指定在导入包、过程和函数时是否要进行编译，默认为Y")]),e._v(" "),_("p",[e._v("4、constraints用于指定是否要导入表的约束，默认为Y")]),e._v(" "),_("p",[e._v("5、datafiles当设置选项transport_tablespace为Y时，该选项用于指定要搬移到目标数据库的数据文件列表")]),e._v(" "),_("p",[e._v("6、destory用于指定在导入时是否要覆盖一存在的数据文件，默认为N")]),e._v(" "),_("p",[e._v("7、feedback用于指定根据导入行数显示导入进度框，默认为0")]),e._v(" "),_("p",[e._v("8、file用于指定导入操作要使用的转储文件的名称")]),e._v(" "),_("p",[e._v("9、filesize用于指定导出文件的最大尺寸，如果数据库对象数据被分布到多个导出文件中，哪么在导入时必须指定filesize")]),e._v(" "),_("p",[e._v("10、fromuser用于指定从导出文件中摘取并导入特定用户的对象，需要imp_full_database or dba角色")]),e._v(" "),_("p",[e._v("11、full用于指定导入转储文件的所有内容，默认为Y")]),e._v(" "),_("p",[e._v("12、grants用于指定是否要导入对象权限信息，默认为Y")]),e._v(" "),_("p",[e._v("13、help")]),e._v(" "),_("p",[e._v("14、ignore用于指定是否要忽略对象建立错误信息，默认为N")]),e._v(" "),_("p",[e._v("15、indexes用于指定是否要导入表和簇相关的索引，默认为Y")]),e._v(" "),_("p",[e._v("16、indexfile用于指定生成存放索引建立语句的文件名称，当使用该选项时，不会导入对象数据到数据库")]),e._v(" "),_("p",[e._v("17、log指定生成的导入日志文件的名称，默认为n")]),e._v(" "),_("p",[e._v("18、parfile指定导入工具要使用的参数文件名。经常使用imp导入数据时，可以将命令行选项放到参数文件中，然后在导入时调用该参数文件。例如:")]),e._v(" "),_("p",[e._v("PARM.TXT\ntalbes=dept,emp\nconstraints=n\nindexes=n\ngrants=n\nfile=a.dmp")]),e._v(" "),_("p",[e._v("imp scott/tiger parfile=parm.txt")]),e._v(" "),_("p",[e._v("19、recordlength指定文件记录的长度，默认为buffer的值，需要将导出文件传送到不同os平台时，需要设置，不能大于64K")]),e._v(" "),_("p",[e._v("20、resumable指定是否激活空间继续分配特征，为了使用resumable_name和resumable_timeout，必须设置为Y。默认为N")]),e._v(" "),_("p",[e._v("21、resumable_name指定空间继续分配语句所对应的标识符")]),e._v(" "),_("p",[e._v("22、resumable_timeout指定错误被修正的最大时间周期，默认为7200。如果在该时间范围内没有修正错误，语句会被终止")]),e._v(" "),_("p",[e._v("23、rows用于指定是否要导入表行数据，默认为Y")]),e._v(" "),_("p",[e._v("24、show用于指定显示导出文件的内容，默认为N")]),e._v(" "),_("p",[e._v("25、skip_unusable_indexes用于指定在导入时是否要跳过不可使用的索引，默认为N")]),e._v(" "),_("p",[e._v("statistics用于指定在导入时数据库优化器要执行的操作，默认为ALWAYS")]),e._v(" "),_("p",[e._v("26、streams_configuration用于指定是否要导入流元数据，默认为Y")]),e._v(" "),_("p",[e._v("27、table用于指定导入表或表分区")]),e._v(" "),_("p",[e._v("28、statistics指定在导入时数据库优化器要执行的操作，默认为always")]),e._v(" "),_("p",[e._v("29、tablespaces用于指定导入特定表空间上的所有对象")]),e._v(" "),_("p",[e._v("30、toid_novalidate用于指定当导入对象表时要排除校验的对象类型")]),e._v(" "),_("p",[e._v("31、touser用于指定将特定方案对象导入到其他用户，需要imp_full_database or dba角色权限")]),e._v(" "),_("p",[e._v("32、transport_tablespace用于指定导入表空间元数据，默认为N")]),e._v(" "),_("p",[e._v("33、tts_owners当设置transport_tablespace=y时，该选项用于列出拥有被搬移表空间数据的数据库用户")]),e._v(" "),_("p",[e._v("34、userid用于指定执行到如操作的用户名、口令和连接字符串")]),e._v(" "),_("p",[e._v("导入表\n导入表是指使用工具imp将exp文件中的表结构及其数据装载到数据库中，导入表是使用tables选项来完成")]),e._v(" "),_("p",[e._v("如果要将表导入到其他用户中则需要指定fromuser和touser")]),e._v(" "),_("p",[e._v("Imp scott/tiger@demo file=tab2.dmp tables=dept,emp")]),e._v(" "),_("p",[e._v("imp system/manager@demo file=tab2.dmp tables=emp,dept fromuser=scott touser=system")]),e._v(" "),_("p",[e._v("导入方案\n导入方案是使用imp工具将exp文件中特定方案的所有对象及数据装载到数据库中")]),e._v(" "),_("p",[e._v("imp scott/tiger@demo file=schema.dmp")]),e._v(" "),_("p",[e._v("imp system/manager@demo file=schema.dmp fromuser=scott touser=system")]),e._v(" "),_("p",[e._v("导入数据库\n导入数据库是指使用工具imp将exp文件中所有用户的对象及其数据装载到oracle数据库中，导入数据库是使用full选项来完成")]),e._v(" "),_("p",[e._v("imp system/manager@demo file=full.dmp full=y")]),e._v(" "),_("p",[e._v("本文仅为提供更多信息，不代表新浪BLOG同意其观点或描述。如需转载请注明出处。\n关闭阅读模式")]),e._v(" "),_("p",[e._v("带条件导出实例：")]),e._v(" "),_("p",[e._v('windows平台：\nexp funds5/funds5 file=deal.dmp tables=fx_forwarddeals, fx_forwarddeals_t query="where capturedate>sysdate - 100"')]),e._v(" "),_("p",[e._v('AIX平台：\nexp funds5/funds5 file=deal.dmp tables=fx_forwarddeals, fx_forwarddeals_t query="where capturedate>sysdate - 100"')]),e._v(" "),_("p",[e._v("exp funds5/funds file=1.dmp log=1.log tables=fx_RateSourceHis query=\"where to_char(refreshtime, 'yyyymmdd') = 20110808\"")]),e._v(" "),_("p",[e._v("使用par文件：\nfile=data.dmp\ntables=forex_ratesourcehis\nquery=\"where refreshtime > to_date('20120202 00:00:00', 'yyyymmdd hh24:mi:ss')\"")]),e._v(" "),_("h1",{attrs:{id:"使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),_("p",[e._v("exp newfunds_it/newfunds_it parfile=1.par")])])}),[],!1,null,null,null);_.default=s.exports}}]);