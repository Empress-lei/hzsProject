/**
 * Created by Administrator on 2018/1/17.
 */
$(function () {
    //注册页面 1.0
    $(".register_page .regis_div .regis_region .login_ginbtn").click(function () {
        $(".sco_name").show()
        $(".regis_div").hide()
    })
    $(".sco_name .render_mess .login_ginbtn").click(function () {
        $(".sub_div").show()
        $(".register").hide()
    })
    //选择园所
    optab(".sele_state .state_render");
    //多选
    $('.select_opt li').click(function() {
        if($(this).hasClass('orangeBtn')) {
            $(this).removeClass('orangeBtn');
        } else {
            $(this).addClass('orangeBtn');
        }
    });
    selectOpt(".sele_type li label")
})
//选择标签
function optab(item) {
    var item = $(item);
    item.on("click", function () {
        item.removeClass("active_first");
        $(this).siblings("li").addClass("active_first");
        // $(this).children("img").css("display","block");
    })
    item.on("click", function () {
        item.removeClass("active_first");
        $(this).addClass("active_first");
        // $(this).children("img").css("display","block");
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