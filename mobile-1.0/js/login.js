/**
 * Created by Administrator on 2018/4/17.
 */
$(function() {
    //获取验证码前面的input  更改登录按钮的样式
    $(".code_left").focus(function(){
        $(".submit_btn_org").addClass("login_org");
    });
    //倒计时
    timer(intDiff);
    //单选
    optab(".sele_state .state_render");
    //多选
    $('.select_opt .select_chechbox').click(function() {
        if($(this).hasClass('orangeBtn')) {
            $(this).removeClass('orangeBtn');
        } else {
            $(this).addClass('orangeBtn');
        }
    });
    $('.render_opt .select_type').click(function() {
        if($(this).hasClass('type_orange')) {
            $(this).removeClass('type_orange');
        } else {
            $(this).addClass('type_orange');
        }
    });
    //点击去注册  注册的内容显示 登录的隐藏
    $(".login_click").on("click", function() {
        $(".register_con").css("display","block");
        $(".login_con").css("display","none");
    })
    //点击去登录    登录的内容显示  注册的隐藏
    $(".register_click").on("click", function() {
        $(".login_con").css("display","block");
        $(".register_con").css("display","none");
    })
    //邀请码弹窗显示隐藏
    $(".register_num").on("click", function() {
        $(".obtain_pages").show();
    })
    $(".know_btn").on("click", function() {
        $(".obtain_pages").hide();
    })
});
var intDiff = parseInt(10);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
        var hour=0,
            minute=0,
            second=0;//时间默认值
        if(intDiff > 0){
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        // $('#day_show').html(day+"天");
        // $('#hour_show').html('<s id="h"></s>'+hour+'时');
        $('#minute_show').html('<s></s>'+minute+':');
        $('#second_show').html('<s></s>'+second+'&nbsp;秒后自动跳转...');
        intDiff--;
    }, 1000);
}
//选择标签
function optab(item) {
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