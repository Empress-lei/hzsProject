/**
 * Created by Administrator on 2018/1/17.
 */
$(function () {
    //获取验证码前面的input  更改登录按钮的样式
    $(".code_left input").focus(function(){
        $(".submit_btn_org").addClass("login_org");
    });
    //微信图标切换
    $("#wechat_img").click(function () {
        $(".wechat_login").show();
        $(".login_phone").hide();
    })
    //电脑图标切换
    $("#comput_img").click(function () {
        $(".login_phone").show();
        $(".wechat_login").hide();
    })
    //关闭登录
    $(".symbol_x").click(function () {
        $(".login_newpage").hide();
    })
    $('.name_sco').click(function () {
        if($(this).parent().hasClass('sing_nostyle')) {
            $(this).parent().removeClass('sing_nostyle').addClass('active_sing');
        }else {
            $(this).parent().addClass('sing_nostyle').removeClass('active_sing');
        }
    })
})