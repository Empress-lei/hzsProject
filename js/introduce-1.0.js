/**
 * Created by Administrator on 2018/3/27.
 */
$(function () {
    //点击活动方案弹出支付按钮
    $(".down_li").on("click",function () {
        $(".remind_page").show();
    })
    $(".nobuy_btn").on("click",function () {
        $(".remind_page").hide();
    })
    //预览扫码
    $(".preview_btn").hover(function () {
        $(".cord_share").fadeIn(500);
    },function () {
        $(".cord_share").fadeOut(500);
    })
    // $(".preview_btn").on("click",function () {
    //     $(".cord_share").toggle();
    // })
})
