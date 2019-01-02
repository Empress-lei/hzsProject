/**
 * 八国联军入侵代码标记: baguolianjun
 */

(function (window, $) {
    page_grid = function (params) {
        if (!params) {
            return;
        }
        var thet = this;
        this.datagrid = params.datagrid;
        this.pagesize_1 = params.pagesize;
        this.pageindex = params.pageindex;
        this.pageMark = params.pageMark;
        if (undefined == this.pageMark || null == this.pageMark) {
            this.pageMark = "";
        }
        this.totalno = params.totalno;
        this.goFn = params.go;
        this.showNum = 888;
        this.lowest = 1;
        this.highest = this.showNum;
        this.totalpage = 0;
        this.listNum = [15, 25, 55];


        if (!(thet.pagesize_1 && thet.pageindex && thet.totalno)) {
            return;
        }

        //计算页数
        this.getTotalpage = function () {
            return Math.ceil(parseInt(this.totalno, 10) / parseInt(this.pagesize_1, 10));
        };

        this.totalpage = this.getTotalpage();

        this.pagediv = $("<div class='datagrid_page'></div>");
        var pdc = this.datagrid.children("div.pagegrid");
        if (!pdc.size()) {
            pdc = $("<div class='pagegrid'></div>");
        }
        $(pdc.get(0)).append(this.pagediv);
        this.datagrid.append(pdc);
        this.pagediv.hide();

        var pagetable = $('<table width="100%" cellpadding="0" cellspacing="0" border="0" >');
        this.pagediv.append(pagetable);

        var tr = $("<tr></tr>");
        pagetable.append(tr);
        var td = $("<td></td>");
        this.totalnospan = $("<span></span>");
        td.append(this.totalnospan);
        td.append("条&nbsp;&nbsp");
        this.currentpagespan = $("<span></span>");
        td.append(this.currentpagespan);
        td.append("/");
        this.totalpagespan = $("<span></span>");
        td.append(this.totalpagespan);
        td.append("页");
        tr.append(td);

        td = $("<td></td>");
        this.turnleft = $('<a  href ="#" class="turn_left">上一页</a>');
        this.turnleft.bind("click", function () {
            if (thet.pageindex <= 1) {
                return;
            }
            thet.pageindex--;
            if ("function" == typeof thet.goFn)thet.goFn(thet.pageindex, thet.pageMark);
        });
        td.append(this.turnleft);

        this.firstPage = $('<a  href ="#" class="turn_left">首页</a>');
        this.firstPage.bind("click", function () {
            if (thet.pageindex <= 1) {
                return;
            }
            thet.pageindex = 1;
            if ("function" == typeof thet.goFn)thet.goFn(thet.pageindex, thet.pageMark);
        });
        td.append(this.firstPage);


        this.pagea = $("<span></span>");
        td.append(this.pagea);

        this.lastPage = $('<a  href ="#" class="turn_right">末页</a>');
        this.lastPage.bind("click", function () {
            if (thet.pageindex >= thet.totalpage) {
                return;
            }
            thet.pageindex = thet.totalpage;
            if ("function" == typeof thet.goFn)thet.goFn(thet.pageindex, thet.pageMark);
        });
        td.append(this.lastPage);

        this.turnright = $('<a href ="#" class="turn_right">下一页</a>');
        this.turnright.bind("click", function () {
            if (thet.pageindex >= thet.totalpage) {
                return;
            }
            thet.pageindex++;
            if ("function" == typeof thet.goFn)thet.goFn(thet.pageindex, thet.pageMark);
        });
        td.append(this.turnright);
        tr.append(td);

        if (this.listNum && this.listNum.length) {
            td = $("<td></td>");

            td.append("每页显示");
            for (var aa = 0; aa < this.listNum.length; aa++) {
                var num = this.listNum[aa];
                var a = $("<a class='listNum'></a>");
                if (this.datagrid.pagesize == num) {
                    a.addClass("active");
                }
                td.append(a);
                a.get(0).value = num;
                a.html(num);
                a.bind("click", function () {
                    if (thet.datagrid) {
                        if (thet.datagrid.pagesize == this.value) {
                            return;
                        }
                        thet.datagrid.pagesize = this.value;
                        thet.datagrid.refresh();
                    }
                });
            }
            td.append("条");
            tr.append(td);
        }


        /**
         * 分页销毁
         */
        this.destroy = function () {
            var aa = thet;
            thet.pagediv.remove();
            for (var e in this) {
                delete thet[e];
            }
        };
        this.pageMark = params.pageMark;
        if (undefined == this.pageMark || null == this.pageMark) {
            this.pageMark = "";
        }
        this.totalno = params.totalno;
        //生成分页
        this.genpage = function (pageindex, _totalno, _pageMark) {
            if (pageindex) {
                thet.pageindex = pageindex;
                if (thet.totalpage < thet.pageindex || 1 > thet.pageindex) {
                    return;
                }
            } else
                return;

            if ("number" == typeof _totalno) {
                thet.totalno = _totalno;
                thet.totalpage = thet.getTotalpage();
                if (thet.pageindex > thet.totalpage) {
                    pageindex = thet.pageindex = thet.totalpage;
                }
            }

            if (_pageMark) {
                thet.pageMark = _pageMark;
            }

            var dotShow = false;

            if (thet.totalpage <= thet.showNum) {
                thet.lowest = 1;
                thet.highest = thet.totalpage;
            } else {

                var l_half = Math.floor(thet.showNum / 2) + 1;
                var r_half = thet.showNum - l_half;

                if (thet.pageindex > l_half) {
                    thet.lowest = thet.pageindex - l_half + 1;
                } else {
                    thet.lowest = 1;
                }

                if (thet.pageindex + r_half < thet.totalpage) {
                    dotShow = true;
                    thet.highest = thet.pageindex + r_half;
                    if (thet.highest < thet.showNum) {
                        thet.highest = thet.showNum;
                    }
                } else {

                    thet.highest = thet.totalpage;
                    thet.lowest = thet.totalpage - thet.showNum + 1;
                }


            }

            if (1 < thet.pageindex) {
                thet.turnleft.removeClass("disabled");
                thet.firstPage.removeClass("disabled");
            } else {
                thet.turnleft.addClass("disabled");
                thet.firstPage.addClass("disabled");
            }
            if (thet.pageindex < thet.totalpage) {
                thet.turnright.removeClass("disabled");
                thet.lastPage.removeClass("disabled");
            } else {
                thet.turnright.addClass("disabled");
                thet.lastPage.addClass("disabled");
            }

            var ca = thet.highest - thet.lowest;

            thet.pagea.empty();
            for (var i = 0; i <= ca; i++) {
                var a = $("<a></a>");
                thet.pagea.append(a);
                var ht = thet.lowest + i;
                a.get(0).value = ht;
                a.html(ht);
                if (ht == thet.pageindex) {
                    a.addClass("active");
                } else {
                    a.bind("click", function () {
                        if ("function" == typeof thet.goFn)thet.goFn(this.value, thet.pageMark);
                    });
                }
            }

            if (dotShow) {
                if (thet.totalpage - thet.highest > 1) {
                    thet.pagea.append("<span>...</span>");
                }
                ;
                var a = $("<a></a>");
                thet.pagea.append(a);
                var ht = thet.totalpage;
                a.get(0).value = ht;
                a.html(ht);
                a.bind("click", function () {
                    if ("function" == typeof thet.goFn)thet.goFn(this.value, thet.pageMark);
                });
            }
            /**
             * 使用默认
             thet.pagea.children("a").hover(function(){
				this.oldc = this.style.color;
				this.style.color="#F60";
			},function(){
				this.style.color=this.oldc;
			});
             */
            thet.currentpagespan.html(thet.pageindex);
            thet.totalpagespan.html(thet.totalpage);
            thet.totalnospan.html(thet.totalno);
            thet.pagediv.show();
        };

        this.isEmpty = function (strValue) {
            strValue = trim(strValue);
            if (strValue == "")
                return true;
            else
                return false;
        };
        this.isInteger = function (_) {
            var $ = RegExp(/^[0-9]+$/);
            return ($.test(_));
        };

        return this;
    };

    $.pagegrid = page_grid;

})(window, $);
jQuery.fn.extend({
    datagrid: function (params) {
        if (!params) {
            return;
        }
        var thet = this;
        this.url = params.url;//访问路径
        this.width = params.width;//datagrid的宽
        this.columns = params.columns;//各个列[{field:'返回数据中的名称',title:'显示列名',width:"100px",align:'left',formatter：function(){},click:function(){},,dblclick:function(value,obj,i){}}]
        this.trclick = params.trclick;//行上的click
        this.urlData = params.urlData;//请求数据时的参数
        if (!this.urlData) {
            this.urlData = {};
        }
        this.currentData = {};//本次请求返回的数据对象
        this.beforeSend = params.beforeSend;//请求发送之前
        this.successFinish = params.successFinish;//请求成功方法执行完成时
        this.successFn = params.success;//请求成功时的方法
        this.completeFn = params.complete;//请求完成时的方法
        this.errorFn = params.error;//请求失败时的方法
        this.timeout = (params.timeout) ? timeout : 30000;//超时时间
        this.dataType = params.dataType ? dataType : "json";//请求类型
        this.noPagegrid = params.noPagegrid;//是否无没有分页
        this.pagesize = params.pagesize;//分页时每页多少条
        if (this.pagesize) {
            this.pagesize = parseInt(this.pagesize, 10);
        } else {
            this.pagesize = 10;
        }
        this.columnBgColor = "#f9f9f9";
        this.hoverBgColor = "#D0E5F5";//鼠标划过色
        this.selectBgColor = "#FBEC88";//选中时行的背景色
        this.multiple = params.multiple;//多选 //若存在selecttrue 则为选 中
        this.single = params.single;//单选
        if (this.multiple) {
            this.single = false;//若多选不能单选
        }
        this.checkboxWidth = params.checkboxWidth;//多（单）选框的宽度
        if (!this.checkboxWidth) {
            this.checkboxWidth = "15px";
        }
        this.selectData = new Array();//选择数据
        this.currentpageindex = 0;
        this._pagegrid = null;//分页对象
        //params.list:{name:"list",code:"200",total:"totalRows",mark:"mark"}
        //返回列表信息的域 name为数据中列表域，code是哪个域为"success"时为成功
        //total为总共多少笔，mark 分页中用到的标志
        this.listName = "list";
        this.listCode = "code";
        this.listTotal = "totalRows";
        this.listMark = "mark";
        if (params.list) {
            this.listName = params.list.name ? params.list.name : this.listName;
            this.listCode = params.list.code ? params.list.code : this.listCode;
            this.listTotal = params.list.total ? params.list.total : this.listTotal;
            this.listMark = params.list.mark ? params.list.mark : this.listMark;
        }

        this.errorCodeFn = params.errorCodeFn;//如果成功返回，但  !data || "success" != listCode 时的处理
        this.noTitle = params.noTitle;//是否没有表头

        if (this.width) {
            this.css("width", this.width);
        }
        this.addClass("datagrid_div");
        this.table = $("<table  class='datagrid'/>");
        if (this.children().size()) {
            if (this.noTitle) {
                var customhead = this.children(".customhead");
                if (customhead.size()) {
                    customhead.after(this.table);
                }
            } else {
                $(this.children().get(0)).before(this.table);
            }
        } else {
            this.append(this.table);
        }

        this.hasTbody = false;//是否可以加载数据
        if (this.columns && this.columns.length) {
            var thead = $('<thead class="datagrid_header"/>');
            //如果没有表头则隐藏表头
            if (this.noTitle) {
                thead.hide();
            }
            this.table.append(thead);
            var tr = $("<tr  id='title_tr'></tr>");
            thead.append(tr);

            if (thet.multiple || thet.single) {
                var checkbox = $("<input datagrid-checkbox name='allselect' type='checkbox'>");
                checkbox.click(function () {
                    thet.allSelect();
                });
                var td = $("<td></td>");
                td.css("width", thet.checkboxWidth);
                td.append(checkbox);
                tr.append(td);
            }

            var len = this.columns.length;
            for (var i = 0; i < len; i++) {
                var col = this.columns[i];
                if (col.field) {
                    var td = $("<td></td>");
                    td.html(col.title);
                    td.attr("id", "title_" + col.field);
                    if (col.width) {
                        td.attr("width", col.width);
                    }
                    if ("function" == typeof col.titleclick) {
                        td.css("cursor", "pointer");
                        td.bind("click", col.titleclick);
                    }
                    tr.append(td);
                } else {
                    continue;
                }
            }

            this.tbody = $('<tbody class="datagrid_body"></tbody>');
            this.table.append(this.tbody);
            this.hasTbody = true;
        }
        ;


        /**
         * 获取选择数据
         * @returns 或为空则为null 多选为数组 单选为数据
         */
        this.getSelect = function () {
            if (thet.single) {
                return thet.selectData.rowData;
            } else if (thet.multiple && thet.selectData && thet.selectData.length > 0) {
                var retSelectData = new Array();
                for (var i = 0; i < thet.selectData.length; i++) {
                    var _obj = thet.selectData[i];
                    if (_obj && _obj.rowData) {
                        retSelectData.push(_obj.rowData);
                    }
                }
                return retSelectData;
            } else {
                return [];
            }
        };
        this._clearSelect = function () {
            if (thet.multiple) {
                var as = thet.table.find("[name='allselect']");
                as.get(0).isCheck = false;
                as.attr("checked", false);
                if (typeof(thet.onselect) == "function") {
                    thet.onselect(false);
                }
            }
            thet.selectData = new Array();
        };
        /**
         * 全选
         * slt : true 选择  false 取消
         */
        this.allSelect = function () {
            if (thet.multiple) {
                thet._allSelect();
                var isCheck = thet.table.find("[name='allselect']").get(0).isCheck;
                if (typeof(thet.onselect) == "function") {
                    thet.onselect(isCheck);
                }
                return isCheck;
            } else {
                var as = thet.table.find("[name='allselect']");
                as.attr("checked", false);
            }
            return false;
        };

        this.onselect = null;
        /**
         * 全选
         */
        this._allSelect = function () {
            var as = thet.table.find("[name='allselect']").get(0);
            if (thet.multiple) {
                if (!as.isCheck) {
                    as.isCheck = true;
                    var cbs = thet.table.find("[datagrid-checkbox]");
                    cbs.each(function () {
                        var cb = $(this);
                        cb.attr("checked", true);
                        if (this.tr && !this.tr.selecttrue) {
                            thet.selectData.push(this.tr);
                            /**
                             * 选中不再变色
                             this.tr.oldbc = this.tr.style.backgroundColor;
                             this.tr.style.backgroundColor=thet.selectBgColor;
                             */
                            this.tr.selecttrue = true;
                        }
                    });
                } else {
                    as.isCheck = false;
                    var cbs = thet.table.find("[datagrid-checkbox]");
                    cbs.each(function () {
                        var cb = $(this);
                        cb.attr("checked", false);
                        if (this.tr) {
                            /**
                             * 选中不再变色
                             this.tr.style.backgroundColor = this.tr.oldbc;
                             */
                            this.tr.selecttrue = false;
                        }
                    });
                    thet.selectData = new Array();
                }

            } else {
                var as = thet.table.find("[name='allselect']");
                as.attr("checked", false);
            }
        };

        /**
         * 行事件
         */
        this._trclick = function () {
            if ("function" == typeof thet.trclick) {
                var trs = thet.tbody.children("tr");
                trs.bind("click", function () {
                    thet.trclick(this.rowData);
                });
                trs.css("cursor", "pointer");
            }
            ;
        };

        /**
         * 鼠标滑过
         */
        this._hover = function () {
            thet.tbody.children("tr").hover(function () {
                /**
                 * 若选中状态，则不变色
                 if(this.selecttrue){
					return;
				}
                 */
                this.oldbc = this.style.backgroundColor;
                this.style.backgroundColor = thet.hoverBgColor;
            }, function () {
                /**
                 * 若选中状态，则不变色
                 if(this.selecttrue){
					return;
				}
                 */
                this.style.backgroundColor = this.oldbc;
            });
        };

        /**
         * 获取数据列表
         */
        this.getDataList = function () {
            if (thet.currentData) {
                return thet.currentData[thet.listName];
            }
            return null;
        };

        this.reload_init = true;
        /**
         * 重新加载
         */
        this.reload = function (urlData) {
            if (!thet.hasTbody) {
                return;
            }
            if (urlData) {
                thet.urlData = urlData;
            } else {
                thet.urlData = {};
            }
            thet.reload_init = true;
            thet._load(1, "");
        };

        /**
         * 重新加载数据
         */
        this.refresh = function (urlData, pMark) {
            if (!thet.hasTbody) {
                return;
            }

            if (urlData) {
                thet.urlData = urlData;
            }

            thet.reload_init = true;
            thet._load(1, pMark);
        };

        this._load = function (_load_pageindex, _pageMark) {
            if (!thet.url) {
                return
            }
            if (!thet.noPagegrid) {
                if (undefined == _pageMark || null == _pageMark) {
                    _pageMark = "";
                }
                thet.currentpageindex = _load_pageindex;
                var beginIndex = (thet.currentpageindex - 1) * thet.pagesize;
                if (thet.pagesize) {
                    if ("string" == typeof thet.urlData) {
                        var lio = thet.urlData.lastIndexOf("&_=_");
                        if (lio > 0) {
                            thet.urlData = thet.urlData.substring(0, lio);
                        }
                        thet.urlData += "&_=_&beginIndex=" + beginIndex + "&resultSize=" + thet.pagesize + "&pageIndex=" + thet.currentpageindex + "&pageSize=" + thet.pagesize + "&pageMark=" + _pageMark;
                    } else if (thet.urlData) {
                        thet.urlData.pageIndex = thet.currentpageindex;
                        thet.urlData.beginIndex = beginIndex;
                        thet.urlData.resultSize = thet.pagesize;
                        thet.urlData.pageSize = thet.pagesize;
                        thet.urlData.pageMark = _pageMark;
                    }
                }
            }
            if ("function" == typeof thet.beforeSend)thet.beforeSend.call();

            //baguolianjun
            try {
                if (pageLoading)pageLoading();
            } catch (e) {
            }

            $.ajax({
                cache: false,
                type: "post",
                url: thet.url,
                data: thet.urlData,
                dataType: thet.dataType,
                timeout: thet.timeout,
                success: thet.load_success,
                error: thet.load_error,
                complete: thet.load_complete
            });
        };
        this.load_success = function (data) {

            thet.currentData = data;//只要返回则更新此数据
            if (data && 200 == data[thet.listCode]) {

                if ("function" == typeof thet.successFn) {
                    thet.successFn(data);
                }
                //清空tbody
                thet.tbody.empty();
                //清空选择项
                thet._clearSelect();

                var tln = 0;
                var pMark = "";
                try {

                    tln = data[thet.listTotal];
                    if (tln) {
                        tln = parseInt(tln, 10);
                    } else {
                        tln = 0;
                    }
                    pMark = "" + data[thet.listMark];

                    var list = data[thet.listName];
                    if (list && list.length) {
                        var listlen = list.length;
                        var len = thet.columns.length;
                        for (var j = 0; j < listlen; j++) {
                            var obj = list[j];
                            if (!obj)continue;
                            var tr = $("<tr></tr>");
                            if (j % 2 == 1)tr.css("background-color", thet.columnBgColor);
                            //单选 或多选
                            if (thet.multiple || thet.single) {

                                var checkbox = $("<input datagrid-checkbox type='checkbox'>");
                                checkbox.get(0).tr = tr.get(0);
                                var td = $("<td></td>");
                                td.css("width", thet.checkboxWidth);
                                td.append(checkbox);
                                tr.append(td);

                                tr.get(0).rowData = obj;

                                checkbox.bind("click", function () {
                                    if (this.tr.selecttrue) {
                                        if (thet.single) {
                                            thet.selectData = [];
                                        } else if (thet.multiple) {
                                            var selectlen = thet.selectData.length;
                                            for (var k = 0; k < selectlen; k++) {
                                                if (this.tr == thet.selectData[k]) {
                                                    thet.selectData.splice(k, 1);
                                                    break;
                                                }
                                            }

                                        }
                                        /**
                                         * 选中不再变色
                                         this.tr.style.backgroundColor = this.oldbc;
                                         */
                                        this.tr.selecttrue = false;
                                        this.checked = false;
                                    } else {
                                        if (thet.single) {
                                            if (thet.selectData && thet.selectData.rowData) {
                                                /**
                                                 * 选中不再变色
                                                 thet.selectData.style.backgroundColor = thet.selectData.oldbc;
                                                 */
                                                thet.selectData.selecttrue = false;
                                            }
                                            thet.selectData = this.tr;
                                        } else if (thet.multiple) {
                                            thet.selectData.push(this.tr);
                                        }
                                        /**
                                         * 选中不再变色
                                         this.tr.style.backgroundColor=thet.selectBgColor;
                                         */
                                        this.tr.selecttrue = true;
                                        this.checked = true;
                                    }
                                });
                            }
                            thet.tbody.append(tr);

                            try {
                                for (var i = 0; i < len; i++) {
                                    var col = thet.columns[i];
                                    if (col.field) {
                                        var td = $("<td></td>");
                                        var fid = obj[col.field], fidNew = fid;
                                        td.get(0).value = fid;
                                        td.get(0).obj = obj;
                                        td.get(0).index = j;
                                        if ("function" == typeof col.click) {
                                            td.bind("click", col.click);
                                            td.css("cursor", "pointer");
                                        }
                                        if ("function" == typeof col.dblclick) {
                                            td.bind("dblclick", col.dblclick);
                                            td.css("cursor", "pointer");
                                        }
                                        if ("function" == typeof col.formatter) {
                                            fidNew = col.formatter(fid, obj, j);
                                        }
                                        td.html(fidNew);
                                        //处理特殊文本
                                        if ("function" == typeof col.dealText) {
                                            col.dealText(fid, obj, j, td);
                                        }

                                        if (col.align) {
                                            td.css("text-align", col.align);
                                        }
                                        if (col.width) {
                                            td.css("width", col.width);
                                        }
                                        tr.append(td);
                                    } else {
                                        continue;
                                    }
                                }
                            } catch (e) {
                                //某个数据域出问题
                            }
                        }
                    } else {
                        var len = thet.columns.length;
                        if (thet.multiple || thet.single) {
                            len++;
                        }
                        var tr = $("<tr></tr>");
                        thet.tbody.append(tr);
                        var td = $("<td align='center'>无可用数据</td>");
                        td.attr("colspan", len);
                        tr.append(td);
                    }
                } catch (e) {
                    thet.load_error.call(null, null, "error", e);
                    return;
                }
                //有pagegrid 并且 总条数不为空
                if (!thet.noPagegrid) {
                    if (thet.reload_init) {
                        if (thet._pagegrid) {
                            thet._pagegrid.destroy();
                            delete thet._pagegrid;
                        }
                        if (tln) {
                            thet._pagegrid = new $.pagegrid({
                                datagrid: thet,
                                pagesize: thet.pagesize,
                                pageindex: 1,
                                pageMark: pMark,
                                totalno: tln,
                                go: thet._load
                            });
                            thet.reload_init = false;
                        }
                    }
                    if (thet._pagegrid)thet._pagegrid.genpage(thet.currentpageindex, tln, pMark);
                }
            } else {
                if ("function" == typeof thet.errorCodeFn) {
                    thet.errorCodeFn(data);
                } else {
                    thet.load_error.call(null, null, "error", new Error(-1000000001, "返回不正常"));
                }
                return;
            }
            //动态效果
            thet._hover();
            //行click事件
            thet._trclick();
            if ("function" == typeof thet.successFinish) {
                thet.successFinish(data);
            }
        };
        this.load_error = function (XMLHttpRequest, textStatus, errorThrown) {
            if ("function" == typeof thet.errorFn) {
                thet.errorFn(XMLHttpRequest, textStatus, errorThrown);
            }
        };
        this.load_complete = function (XMLHttpRequest, textStatus) {
            //baguolianjun
            try {
                if (pageLoadingClose) {
                    window.setTimeout(pageLoadingClose, 500);
                }
            } catch (e) {
            }
            if ("function" == typeof thet.completeFn) {
                thet.completeFn(XMLHttpRequest, textStatus);
            }
        };


        return this;
    }
});
