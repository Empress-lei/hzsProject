/**
 * Created by Administrator on 2018/4/21.
 */
$(function () {
    selectOpt(".sele_type li label");
    selectOpt(".prom_top li label");
    selectOpt(".ter_prom .prom_div li label");
    seleRender(".seleul_state .state_render");
    seleRender(".sele_quali .state_render");
    seleRender(".edit_food .state_render");

    //可开展服务
    $(".eqs_add").on("click", function() {
        $(".hide_div").slideDown(300)
    })
    $("#inpuioc").on("click", function () {
        if($("#eqsBot .bot_input textarea").val() == "" || $("#eqsBot .bot_input textarea").val() == undefined){
            $(".hide_div").slideUp(300)
            return;
        }else {
            $(".eqs_add").before("<li  class='state_render'> "+ "<input type='radio' name='Pages' value='type2' id='' style='display: none'> " + "<label for=''>"  + $('#eqsBot .bot_input textarea').val() +  "</label>" + "</li>")
            $("#eqsBot .bot_input textarea").val("");
            $("#inpuiog").show();
            $("#inpuioc").hide();
        }
        $(".hide_div").slideUp(300)
    })
})
//记录文本框中的字数
function fn() {
    var len = $(".font13 textarea").val().length;
    $(".font13 p span").text(len);
    $("#inpuioc").show();
    $("#inpuiog").hide();
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