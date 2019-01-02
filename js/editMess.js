/**
 * Created by Administrator on 2018/4/21.
 */
$(function () {
    clickEven();
    // noClick();
})
//点击
function clickEven() {
    selectOpt(".sele_type li label");
    selectOpt(".prom_top li label");
    selectOpt(".ter_prom .prom_div li label");
    seleRender(".sele_state .state_render");
    seleRender(".sele_quali .state_render");
    seleRender(".edit_food .state_render");
    //可开展服务
    $(".eqs_add").on("click", function() {
        $("#eqsBot").slideDown(300);
        $("#inpuioc").hide();
        $("#inpuiog").show();
    })
    $("#inpuioc").on("click", function () {
        if($("#eqsBot .bot_input textarea").val() == "" || $("#eqsBot .bot_input textarea").val() == undefined){
            $("#eqsBot").slideUp(300);
            return;
        }else {
            var text = $('#eqsBot .bot_input textarea').val();
            $(".eqs_add").before("<li  class='state_render orangeBtn'> "+ "<input type='radio' name='Pages' value='type2' id='' style='display: none'> " + "<label class='se"+text+"' for='se"+text+"'>"  + $('#eqsBot .bot_input textarea').val() +  "</label>" + "</li>")
            selectOpt(".prom_top li .se"+text+"")
            $("#eqsBot .bot_input textarea").val("");
            $("#inpuioc").hide();
            $("#inpuiog").show();
        }
        $("#eqsBot").slideUp(300);
        // $(".prom_top li label").unbind();
        // selectOpt(".prom_top li label");
    })
    //教师
    $(".ter_add").on("click", function() {
        $("#terBot").slideDown(300);
        $("#terInpuioc").hide();
        $("#terInpuiocg").show();
    })
    $("#terInpuioc").on("click", function () {
        if($("#terBot .bot_input textarea").val() == "" || $("#terBot .bot_input textarea").val() == undefined){
            $("#terBot").slideUp(300)
            return;
        }else {
            var text =  $("#terBot .bot_input textarea").val();
            $(".ter_add").before("<li  class='state_li orangeBtn'> "+ "<input type='radio' name='Pages' value='type2' id='' style='display: none'> " + "<label class='tc"  + text +  "' for='tc"  + text +  "'>"  + text +  "</label>" + "</li>")
            selectOpt(".ter_prom .prom_div li .tc"  + text +  "");
            $("#terBot .bot_input textarea").val("");
            $("#terInpuioc").hide();
            $("#terInpuiocg").show();
        }
        $("#terBot").slideUp(300);
        // $(".ter_prom .prom_div li label").unbind();
        // selectOpt(".ter_prom .prom_div li label");
    })

    $(".eleDiv").on("click", function () {
        event.stopPropagation();//阻止事件冒泡
        $("#schedule-box").toggle();
        if ($(".hidearr_div span").hasClass("hidearrshow")) {
            $(".hidearr_div span").removeClass("hidearrshow");
        } else {
            $(".hidearr_div span").addClass("hidearrshow");
        }
        var tag = $('#schedule-box');
        var flag = true;
        $(document).on("click",function(e){//点击空白处，设置的弹框消失
            var target = $(e.target);
            if(target.closest(tag).length == 0 && flag == true){
                $(tag).hide();
                flag = false;
                $(".hidearr_div span").removeClass("hidearrshow");
            }
        });
    })
    var mySchedule = new Schedule({
        el: '#schedule-box',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = y + '.' + m + '.' + d;
            if ($(".hidearr_div span").hasClass("hidearrshow")) {
                $(".hidearr_div span").removeClass("hidearrshow");
            } else {
                $(".hidearr_div span").addClass("hidearrshow");
            }
        },
        nextMonthCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = y + '.' + m + '.' + d;
        },
        nextYeayCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = y + '.' + m + '.' + d;
        },
        prevMonthCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = y + '.' + m + '.' + d;
        },
        prevYearCb: function (y, m, d) {
            document.querySelector('#h3Ele').innerHTML = y + '.' + m + '.' + d;
        }
    });
    $(".eleDiv1").on("click", function () {
        event.stopPropagation();//阻止事件冒泡
        $("#schedule").toggle();
        if ($(".hidearr_ele2 span").hasClass("hidearrshow")) {
            $(".hidearr_ele2 span").removeClass("hidearrshow");
        } else {
            $(".hidearr_ele2 span").addClass("hidearrshow");
        }
        var tag = $('#schedule');
        var flag = true;
        $(document).on("click",function(e){//点击空白处，设置的弹框消失
            var target = $(e.target);
            if(target.closest(tag).length == 0 && flag == true){
                $(tag).hide();
                flag = false;
                $(".hidearr_ele2 span").removeClass("hidearrshow");
            }
        });
    })
    var mySchedule = new Schedule({
        el: '#schedule',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            document.querySelector('#h3Ele2').innerHTML = y + '.' + m + '.' + d;
            $("#schedule").hide();
            if ($(".hidearr_ele2 span").hasClass("hidearrshow")) {
                $(".hidearr_ele2 span").removeClass("hidearrshow");
            } else {
                $(".hidearr_ele2 span").addClass("hidearrshow");
            }
        },
        nextMonthCb: function (y, m, d) {
            document.querySelector('#h3Ele2').innerHTML = y + '.' + m + '.' + d;
        },
        nextYeayCb: function (y, m, d) {
            document.querySelector('#h3Ele2').innerHTML = y + '.' + m + '.' + d;
        },
        prevMonthCb: function (y, m, d) {
            document.querySelector('#h3Ele2').innerHTML = y + '.' + m + '.' + d;
        },
        prevYearCb: function (y, m, d) {
            document.querySelector('#h3Ele2').innerHTML = y + '.' + m + '.' + d;
        }
    });
    $(".eleDiv2").on("click", function () {
        event.stopPropagation();//阻止事件冒泡
        $("#schedule2").toggle();
        if ($(".hidearr_ele3 span").hasClass("hidearrshow")) {
            $(".hidearr_ele3 span").removeClass("hidearrshow");
        } else {
            $(".hidearr_ele3 span").addClass("hidearrshow");
        }
        var tag = $('#schedule2');
        var flag = true;
        $(document).on("click",function(e){//点击空白处，设置的弹框消失
            var target = $(e.target);
            if(target.closest(tag).length == 0 && flag == true){
                $(tag).hide();
                flag = false;
                $(".hidearr_ele3 span").removeClass("hidearrshow");
            }
        });
    })
    var mySchedule = new Schedule({
        el: '#schedule2',
        //date: '2018-9-20',
        clickCb: function (y, m, d) {
            document.querySelector('#h3Ele3').innerHTML = y + '.' + m + '.' + d;
            $("#schedule2").hide();
            if ($(".hidearr_ele3 span").hasClass("hidearrshow")) {
                $(".hidearr_ele3 span").removeClass("hidearrshow");
            } else {
                $(".hidearr_ele3 span").addClass("hidearrshow");
            }
        },
        nextMonthCb: function (y, m, d) {
            document.querySelector('#h3Ele3').innerHTML = y + '.' + m + '.' + d;
        },
        nextYeayCb: function (y, m, d) {
            document.querySelector('#h3Ele3').innerHTML = y + '.' + m + '.' + d;
        },
        prevMonthCb: function (y, m, d) {
            document.querySelector('#h3Ele3').innerHTML = y + '.' + m + '.' + d;
        },
        prevYearCb: function (y, m, d) {
            document.querySelector('#h3Ele3').innerHTML = y + '.' + m + '.' + d;
        }
    });
}
//不能点击
function noClick() {
    $(".sele_type li label").unbind();;
    $(".prom_top li label").unbind();;
    $(".ter_prom .prom_div li label").unbind();
    $(".sele_state .state_render").unbind();
    $(".sele_quali .state_render").unbind();
    $(".edit_food .state_render").unbind();
    //可开展服务
    $(".eqs_add").unbind();
    //教师
    $(".ter_add").unbind();
    $(".eleDiv").unbind();
    $(".eleDiv1").unbind();
    $(".eleDiv2").unbind();
}
//记录文本框中的字数
function fn() {
    var len = $(".font13 textarea").val().length;
    $(".font13 p span").text(len);
    $("#inpuioc").show();
    $("#inpuiog").hide();
    $("#terInpuioc").show();
    $("#terInpuiocg").hide();
}
function vfn() {
    var len = $(".font13 textarea").val().length;
    if(len < 10) {
        toast("至少输入10个字符");
        return false;
    }
}
//单选选择标签
function seleRender(item) {
    var item = $(item);
    item.on("click", function () {
        item.removeClass("active_first");
        $(this).siblings("li").addClass("active_first");
    })
    item.on("click", function () {
        item.removeClass("active_first");
        $(this).addClass("active_first");

    })
}
//多选
function selectOpt(ele) {
    var ele = $(ele);
    console.log(ele);
    if("true" == ele.data("click")){
        return;
    }
    ele.on("click", function () {
        if ($(this).parent().hasClass('orangeBtn')) {
            $(this).parent().removeClass('orangeBtn');
        } else {
            $(this).parent().addClass('orangeBtn');
        }
    })
    ele.data("click","true");
}