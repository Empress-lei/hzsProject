/**
 * Created by Administrator on 2018/1/17.
 */
$(function () {
   // 点击导航上的登录  显示注册页面
   $('.home_sing').click(function () {
       $('.login_page').show();
       $('.login_page .login_phone').show();
   })
    //点击登录的时候  切换到登录的div
    $('.login').click(function () {
        $('.login_page .login_phone').show();
        $('.login_page .invitation_share').hide();
        $('.login_page .wechat_login').hide();
    })
    //点击注册的时候  切换到注册的div
    $('.register').click(function () {
        $('.login_page .invitation_share').show();
        $('.login_page .login_phone').hide();
    })
    //点击这里领取邀请码
    $(function () {
        $('.click_text').click(function () {
            $('.login_page .receive_cord').show();
            $('.login_page .invitation_share').hide();
            $('.login_page .binding_no').hide();
        })
    })
    //领取二维码的返回注册
    $(function () {
        $('#return').click(function () {
            $('.login_page .invitation_share').show();
            $('.login_page .receive_cord').hide();
        })
    })
    //点击微信图片切换到微信登录
    $(function () {
        $('#wechat_img').click(function () {
            $('.login_page .wechat_login').show();
            $('.login_page .login_phone').hide();
            $('.login_page .invitation_share').hide();
        })
    })
    $('.wechat_login .register').click(function () {
        $('.login_page .login_phone').show();
        $('.login_page .invitation_share').hide();
        $('.login_page .wechat_login').hide();
    })
    //返回按钮返回到登录页   页面隐藏
    $('.return_img').click(function () {
        $('.login_page .login_phone').show();
        $('.login_page .invitation_share').hide();
        $('.login_page .wechat_login').hide();
    })
    //点击蓝色的小x号   页面隐藏
    $('.symbol_x').click(function () {
        $('.login_page').hide();
    })
    $('.name_sco').click(function () {
        if($(this).parent().hasClass('sing_nostyle')) {
            $(this).parent().removeClass('sing_nostyle').addClass('active_sing');
        }else {
            $(this).parent().addClass('sing_nostyle').removeClass('active_sing');
        }
    })
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