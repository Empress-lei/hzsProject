window.AZ = {} ;
/**
 * 
 * @param date  YYYY-MM-DD HH:mm:ss
 */
function getIntTime(date){
	var fmtd = trim(date);
	var fmt = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
	if(!fmt.test(fmtd)){
		return new Data().getMilliseconds()/1000;
	}
	var _fmtd = fmtd.substr(0,4);
	fmtd = fmtd.substr(5,5)+"-"+_fmtd+" "+fmtd.substr(10,9);
	fmtd = fmtd.replace(/-/g,"/");
	date =  Date.parse(fmtd);
	return date;
}


jQuery.fn.extend({
	//form嵌套 不可用
	clickAjax:function(fun){
		var form = this.parents("form");
		if(form.size()){
			form = $(form.get(0));
			form.submit(function(){
				return false;
			});
			$(this).click(function(){
				try{
					var obj={};
					obj.url = form.attr("action");
					obj.params = form.serialize();
					obj.form = form;
					if("function"== typeof fun){
						fun(obj);
					}
				}catch(e){}
			});
		}else{
			this.click(fun);
		}
		
	}
});

//当加载完js后初始化
	AZ.datagrid = function(id,params){
			if("object" == typeof params){
				if(!params.complete){
					params.complete = function(){
						
					};
				}else{
					
				}
			}
		return $("#"+id).datagrid(params);
	};


AZ.refreshPagination = function(){
	var pagination = $('div.pagebars');
	var totalNum = pagination.data('total-num');
	var resultSize = pagination.data('result-size');
	if(!totalNum || ! resultSize ){
		return ;
	}
	
	var curPage = pagination.data('begin-index') ? Math.floor(pagination.data('begin-index') / resultSize) + 1  : 1;
	var totalPage = Math.floor((totalNum - 1) / resultSize) + 1;
	//if (1 == totalPage) {return;}

	var calcPageList = function(curPage, totalPage) {//定义分页函数->curPage,totalPage
		var pageList = {};
		if (curPage <= 3) {
			pageList.beginPage = 1;//设置分页开始页码为1
			pageList.endPage = (5 < totalPage) ? 5 : totalPage;//如果总页数大于5，则分页结束页码为5，否则为总页数
		}
		else if (curPage + 2 >= totalPage) {
			pageList.beginPage = (5 < totalPage) ? (totalPage - 5) : 1;//如果总页数大于5，则分页开始页码等于总页数减5，否则则为1
			pageList.endPage = totalPage;//分页结束页码为总页数
		}
		else {
			pageList.beginPage = curPage - 2;//当前分页开始页码等于当前页码减去2
			pageList.endPage = curPage + 2;//当前分页结束页码等于当期页码加2
		}
		return pageList;
	};

	var pager = calcPageList(curPage, totalPage);
	
	var beginPage = pager.beginPage;	
	var endPage = pager.endPage;

	var table = $('<table class="datagrid_page"/>');
	var tr = $('<tr />');
	table.append(tr);
	tr.append($('<td class="center" width="20%">' + totalNum +'条      '+curPage+'/'+totalPage+'页</td>'));
	var mainTd = $('<td class="center pagebars_right" width="60%" />');
	tr.append(mainTd);
	mainTd.append($('<a href="javascript:;"  class="' +(curPage > 1 ? '' :'disabled') +'" ' + (curPage > 1 ? ('  data-page-no="' + (curPage-1) + '" data-begin-index="' + ((curPage-2) * resultSize) + '" ') : ''  ) + '     >上一页</a>'));
	mainTd.append($('<a href="javascript:;" class="' +(curPage > 1 ? '' :'disabled') +'"  data-begin-index="0" data-page-no="1">首页</a>'));
	/*if(beginPage > 1 ){
		mainTd.append($('<a href="javascript:;">...</a>'));
	}*/
	for ( var i = beginPage; i < endPage; i++) {
		mainTd.append($('<a class="' + (curPage == i ? 'current' : '' )+ '" href="javascript:;" data-page-no="' + i +'" data-begin-index="'+((i - 1) * resultSize)+'">'+i+'</a>'));
	}
	if(endPage < totalPage ){
		mainTd.append($('<a href="#">...</a>'));
	}
	mainTd.append($('<a href="javascript:;"   data-page-no="' + totalPage +'" data-begin-index="' + ((totalPage - 1) * resultSize) +'">'+totalPage+'</a>'));
	mainTd.append($('<a href="javascript:;" class="' +(curPage < totalPage ? '' :'disabled') +' data-page-no="' + totalPage +'" data-begin-index="' + ((totalPage - 1) * resultSize) +'">末页</a>'));

	mainTd.append($('<a href="javascript:;"  class="' +(curPage < totalPage ? '' :'disabled') +'"  ' + ( curPage < totalPage ? ('  data-page-no="' + (curPage+1) +'" data-begin-index="' + (curPage  * resultSize) +'"  ' ) : ''  ) +'  >下一页</a>'));
	var rssTd =  $('<td class="right pagebars_right ResultSizes" width="20%">每页显示<a href="#" >10</a><a href="#" >20</a><a href="#" >50</a>条</td>');
	rssTd.find('a').each(function(){
		if($(this).text() ==resultSize ){
			$(this).addClass('underline');
			return true;
		}
	});
	tr.append(rssTd);
	pagination.empty().append(table);

	pagination.find('a[data-begin-index]').click(function(){
		var _this = $(this);
		$('input[name=beginIndex]').val(_this.data('begin-index'));
		$('#QueryForm').submit();
	});
	pagination.find('td.ResultSizes a').click(function(){
		var _this = $(this);
		$('input[name=resultSize]').val(_this.text());
		$('#QueryForm').submit();
	});
	
};

AZ.formatDate = function (date , fmt) { 
	if(!fmt){
		fmt = 'yyyy-MM-dd HH:mm:ss' ;
	}
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "H+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

AZ.getWeekDates = function() {
	var date = new Date();
	var beginDate = new Date();
	beginDate.setDate(date.getDate()- date.getDay() + 1);
	beginDate.setHours(00,00,00);
	var endDate = new Date();
	endDate.setDate(date.getDate() + ( 7 - date.getDay()));
	endDate.setHours(23,59,59);
	return [beginDate,endDate];
};
AZ.getMonthDates = function() {
	var date = new Date();
	var beginDate = new Date();
	beginDate.setDate(1);
	beginDate.setHours(00,00,00);
	var endDate = new Date();
	endDate.setMonth(date.getMonth() + 1);
	endDate.setDate(0);
	endDate.setHours(23,59,59);
	return [beginDate,endDate];
};

AZ.getToDayDates = function() {
	var beginDate = new Date();
	beginDate.setHours(00,00,00);
	var endDate = new Date();
	endDate.setHours(23,59,59);
	return [beginDate,endDate];
};


AZ.scheduler = function(setting){
	var defaultSetting = {
			step:1000,
			time:10,
			stepFun:function(time){},
			over:function(){}
	};
	
	setting = $.extend( defaultSetting , setting);
	var t = setInterval(function(){
		if(setting.time == 0 ){
			setting.over();
			clearInterval(t);
			return ;
		}
		setting.stepFun(setting.time--);
	}, setting.step);
	
	var stop = function(){
		clearInterval(t);
		setting.over();
	};
	
	return {
		stop : stop 
	};
};

AZ.chooseAppTypes = function(container){
	container = $(container);
	$('<div class="app_type_item"><input type="checkbox" name="chooseAll">全选</div>').appendTo(container);
	AZ.ajax({
		url:top.$("#baseUrl").val()+'admin-manage/appmanage/obtain-app-types',
		callback:function(data){
			var map = data;
			for ( var e in map) {
				if(map[e].parentid == 0 ){
					$('<div class="app_type_item"><input type="checkbox" name="appType" value="'+e+'">'+map[e].name+'</div>').appendTo(container);
					var html = '<div class="type_select"><ul>';
					
					var obj = map[e];
					var subIds = [] ;					
					for ( var i = 0 ; i < obj.subIds.length ; i ++) {
						try {
							subIds = $.merge(subIds , map[obj.subIds[i]].subIds);
						} catch (e) {
						}
					}
					
					for ( var i = 0; i < subIds.length; i++) {
						html+='<li><input type="checkbox" name="appTypes" value="'+subIds[i]+'">'+map[subIds[i]].name+'</li>';
					}
					html += '</ul>';
					$(html).appendTo(container);
				}
			}
			$('input[name=chooseAll]',container).click(function(){
				var _this = $(this);
				$('input[name=appTypes],input[name=appType]',container).attr('checked' , !!_this.attr('checked') );
			});
			$('input[name=appType]' ,container ).click(function(){
				var _this = $(this);
				_this.parent().next().find('input[name=appTypes]').attr('checked' , !!_this.attr('checked') );
			});
		}
	});
	
};
AZ.selectAppTypes = function(container,value){
	container = $(container);
	var select1 = container.find('select').eq(0);
	var select2 = container.find('select').eq(1);
	
	
	AZ.ajax({
		url:top.$("#baseUrl").val()+'admin-manage/appmanage/obtain-app-types',
		callback:function(data){
			var map = data;
			var v1 ='';
			var v2 = '' ;
			if(value){
				try {
					v1 = map[map[value].parentid].parentid;
					v2 = value;
				} catch (e) {
				}
			}
			for ( var e in map) {
				if(map[e].parentid == 0 ){
					var opt = $('<option />').val(e).text(map[e].name).appendTo(select1);
					if( e == v1 ){
						opt.attr('selected' , true );
					}
				}
			}
			
			select1.change(function(){
				var _this = $(this);
				select2.empty().append('<option value="">请选择</option>');
				var obj = map[_this.val()];
				var subIds = [] ;					
				for ( var i = 0 ; i < obj.subIds.length ; i ++) {
					try {
						subIds = $.merge(subIds , map[obj.subIds[i]].subIds);
					} catch (e) {
					}
				}
				
				for ( var i = 0; i < subIds.length; i++) {
					var opt = $('<option />').val(subIds[i]).text(map[subIds[i]].name).appendTo(select2);
					if( subIds[i] == v2 ){
						opt.attr('selected' , true );
					}
				}
			});
			
			if(select1.val()){
				select1.change();
			}
		}
	});
	
};