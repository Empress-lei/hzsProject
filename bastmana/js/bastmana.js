/**
 *  2018/2/28   慧招生管理平台.
 */
$(function () {
    //店家
    $(".leftsidebar_box dt").css({"background-color": "#f2f2f2"});
    //侧边导航栏点击显示下拉导航
    $(".leftsidebar_box dd").hide();
    $(".leftsidebar_box .system_log dd").show();
    $(".leftsidebar_box dd").hide();
    //选择标签
    function optab(item){
        var dtc=$(item).children("dt");
        var ddc=$(item).children("dd");
        dtc.on("click",function(){
            ddc.removeClass("active_side");
            $(this).parent().siblings("dl").find("dd").hide();
            $(this).siblings("dd").show();
            $(this).siblings("dd").eq(0).addClass("active_side");
        })
        ddc.on("click",function(){
            ddc.removeClass("active_side");
            $(this).addClass("active_side");
        })
    }
    optab(".leftsidebar_box dl");
    //默认进来选择的是第一个一级菜单下面的第一个标签
    $(".leftsidebar_box dl").eq(0).children("dt").trigger("click");
    var firat = $("dd a").eq(0).data("url");
    //默认加载进来的是总用户的数的页面
    $(".contentright").load(firat);

    var index = 0;
    //点击二级菜单切换页面
    $(".leftsidebar_box dd a").click(function () {
        createDivAddClassName();
        //加载loading
        toastWaiting();
        $(".contentright").html("");
        console.log($(this).data("url"))
        $(".contentright").load($(this).data("url"),function () {
            toastWaitingColse()
        });
    });
    //点击一级菜单切换页面
    $(".leftsidebar_box dt").click(function () {
        createDivAddClassName();
        //加载loading
        toastWaiting();
        //切换url的时候  首先将放置内容的区域的内容清除
        $(".contentright").html("");
        $(".contentright").load($(this).data("url"),function () {
            toastWaitingColse()
        });
    });
})

