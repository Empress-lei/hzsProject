$(function () {
    $('.next_btn').click(function () {
        $('.singin_first').hide();
        $('.singin_complete').show();
    })
    //导师朦层鼠标经过效果
    // $(".tutor_ul li").hover(function () {
    //     $('.sha_show',this).show();
    //     $('.name_mess',this).hide();
    // }, function () {
    //     $('.sha_show',this).hide();
    //     $('.name_mess',this).show();
    // })
    $(".tutor_ul li .case_w").hover(
        function () {
            var that = this;
            item5Timer = setTimeout(function () {
                $(that).find(".item5").animate({width: 230, height: 340}, 300, function () {
                    $(that).find(".sha_show").fadeIn(300);
                    $(that).find(".name_mess").hide();
                });
            }, 100);

        },
        function () {
            var that = this;
            clearTimeout(item5Timer);
            $(that).find(".sha_show").hide();
            $(that).find(".item5").stop().animate({width: 0, height: 0}, 300);
            $(that).find(".name_mess").fadeIn(300);
        }
    )
    // $(".tutor_ul .index-list-tutor").hover(
    //     function () {
    //         var that = this;
    //         item5Timer = setTimeout(function () {
    //             $(that).find(".index-tutor-info").animate({top: 0}, 1000, function () {
    //                 $(that).find(".index-tutor-info").css("background","rgba(49,37,32,0.8)");
    //                 $(that).find(".index-topic-info").css("visibility","visible");
    //                 $(that).find(".index-topic-info").css("opacity",1);
    //                 $(that).find(".index-topic-name").hide();
    //                 $(that).find(".index-list-cover").hide();
    //             });
    //         }, 100);
    //
    //     },
    //     function () {
    //         var that = this;
    //         clearTimeout(item5Timer);
    //         $(that).find(".index-topic-info").css("visibility","hidden");
    //         $(that).find(".index-tutor-info").css("background","none");
    //         $(that).find(".index-topic-info").css("opacity",0);
    //         $(that).find(".index-tutor-info").stop().animate({top:"50%"}, 1000);
    //         $(that).find(".index-topic-name").show();
    //         $(that).find(".index-list-cover").show();
    //     }
    // )
    //video朦层鼠标经过效果
    // $(".video_class li").hover(function () {
    //     $('.sha_show',this).show();
    // }, function () {
    //     $('.sha_show',this).hide();
    // })
    $(".video_class li .case_w").hover(
        function () {
            var that = this;
            item2Timer = setTimeout(function () {
                $(that).find('.sha_show').fadeIn(300);
            }, 100);
        },
        function () {
            var that = this;
            clearTimeout(item2Timer);
            $(that).find('.sha_show').fadeOut(300);
        }
    );
    //登录朦层显示
    $(".sing_in").click(function () {
        $(".login_newpage").show();
        $(".login_phone").show();
    })
    //鼠标经过出现扫码朦层
    $(".mudular-list li").hover(function () {
        $('.case_w', this).stop().animate({"bottom": "20px"}, 300);
        $('.case_w', this).css("box-shadow","0 4px 13px 4px rgba(0, 0, 0, 0.12)");
    }, function () {
        $('.case_w', this).stop().animate({"bottom": "14px"}, 300);
        $('.case_w', this).css("box-shadow","none");
    })
    $(".video_class li").hover(function () {
        $('.case_w', this).stop().animate({"bottom": "20px"}, 300);
        $('.case_w', this).css("box-shadow","0 10px 30px 0 rgba(0,0,0,.1)");
    }, function () {
        $('.case_w', this).stop().animate({"bottom": "14px"}, 300);
        $('.case_w', this).css("box-shadow","none");
    })
    // //微信图标切换
    // $("#wechat_img").click(function () {
    //     $(".wechat_login").show();
    //     $(".login_phone").hide();
    // })
    // //电脑图标切换
    // $("#comput_img").click(function () {
    //     $(".login_phone").show();
    //     $(".wechat_login").hide();
    // })
    // //关闭登录
    // $(".symbol_x").click(function () {
    //     $(".login_newpage").hide();
    // })
});
