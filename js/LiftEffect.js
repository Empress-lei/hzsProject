﻿// LiftEffect({
// 	"control1": ".lift2", 						  //侧栏电梯的容器
// 	"control2": "#ccc",                           //需要遍历的电梯的父元素
// 	"target": [".dianti1",".dianti2",".dianti3"], //监听的内容，注意一定要从小到大输入
// 	"current": "xuanzhong" 						  //选中的样式
// });

function LiftEffect(json) {

    var array = [];

    for (var i = 0; i < json.target.length; i++) {
        var t = $(json.target[i]).offset().top;
        array.push(t);

    }

    function Selected(index) {
        $(json.control2).children().eq(index).addClass(json.current).siblings().removeClass(json.current);
    }

    $(window).on("scroll", Check);

    function Check() {

        var wst = $(window).scrollTop();
		console.log(wst);
        if (wst > 10) {
            $('.home_nav').fadeIn();
            $('.home_index').hide();

        } else {
            $('.home_index').fadeIn();
            $('.home_nav').hide();

        }
        if (wst > 400) {
            $('.warp_page .home_page .lift-nav li').css('backgroundColor','#888')
            $('.warp_page .home_page .lift-nav li.current').css('backgroundColor','#ff530b')

        } else {
            $('.warp_page .home_page .lift-nav li').css('backgroundColor','#fff');
            $('.warp_page .home_page .lift-nav li.current').css('backgroundColor','#ff530b')

        }
        if (wst >= $(json.target[0]).offset().top - 100) {
            $(json.control1).fadeIn(500);
        } else {
            $(json.control1).fadeOut(500);
        }

        var key = 0;
        var flag = true;
        for (var i = 0; i < array.length; i++) {
            key++;
            if (flag) {

                if (wst >= array[array.length - key] - 300) {
                    var index = array.length - key;
                    flag = false;
                } else {
                    flag = true;
                }

            }
        }
        Selected(index);
    }

    $(json.control2).children().on("click", function () {

        $(window).off("scroll");
        var index = $(this).index();
        Selected(index);
        console.log(index)
        if (index == 0) {
            $('.home_index').fadeIn();
            $('.home_nav').hide();

        } else {
            $('.home_nav').fadeIn();
            $('.home_index').hide();
        }
        if (index == 0) {
             $('.warp_page .home_page .lift-nav li').css('backgroundColor','#fff');
            $('.warp_page .home_page .lift-nav li.current').css('backgroundColor','#ff530b')


        } else {
           $('.warp_page .home_page .lift-nav li').css('backgroundColor','#888')
            $('.warp_page .home_page .lift-nav li.current').css('backgroundColor','#ff530b')

        }
        var flag = true;
        for (var i = 0; i < array.length; i++) {

            if (flag) {

                if (index == i) {
                    $("html,body").stop().animate({
                        "scrollTop": array[i] - 50
                    }, 500, function () {
                        $(window).on("scroll", Check);
                    });
                    flag = false;
                } else {
                    flag = true;
                }

            }
        }

    });

}