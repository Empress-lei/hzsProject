/**
 * Created by Administrator on 2018/3/5.
 */
$(function () {
    optab(".sidebar dl dd");
    //默认进来选择的是第一个一级菜单下面的第一个标签
    var firat = $(".sidebar dl dd a").eq(0).data("url");
    myload(firat, function () {
        $(".add_btn").click(function () {
            var firat1 = $(".add_btn").data("url");
            console.log(firat1)
            myload(firat1, function () {
                loadPage();
                $(".draft_btn").click(function () {
                    // optc(".draft_btn");
                    var firat2 = $(".draft_btn").data("url");
                    myload(firat2)
                })
            })
        })
    })
    $(".sidebar dd a").click(function () {
        myload($(this).data("url"), function () {
            $(".add_btn").click(function () {
                var firat1 = $(".add_btn").data("url");
                console.log(firat1)
                myload(firat1, function () {
                    loadPage();
                    $(".draft_btn").click(function () {
                        // optc(".draft_btn");
                        var firat2 = $(".draft_btn").data("url");
                        myload(firat2);
                    })
                })
            })
        })
    })
});
//选择标签
function optab(item) {
    var ddc = $(item);
    ddc.on("click", function () {
        ddc.removeClass("active_first");
        $(this).siblings("dd").addClass("active_first");
    })
    ddc.on("click", function () {
        ddc.removeClass("active_first");
        $(this).addClass("active_first");
    })
}
//点击按钮  改变导航栏文字的样式
function optc(ele) {
    var btn = $(ele);
    var ddlen = $(".sidebar dl dd");
    for(var i=0; i< ddlen.length; i++){
        if($(btn).data("url") == $(".sidebar dl dd").eq(i).find("a").data("url")) {
            $(".sidebar dl dd").eq(i).addClass("active_first")
            $(".sidebar dl dd").eq(i).siblings("dd").removeClass("active_first");
        }
    }
}
function switchSidebar(url){
    $('.active_first').removeClass('active_first');
    $('.sidebar a').each(function(){
        var z=$(this).data('url');
        console.log(z)
        if(url == z){
            $(this).parent().addClass('active_first');
        }
    })
}
//物料准备 添加模块
function addMateriel() {
    var str = '';
    str += "<li class='active_con'>";
    str += "<div class='active_ready'>";
    str += "<span class='name_title'>板块标题：";
    str += "</span>";
    str += "<input  type='text' value='' class='name_input' placeholder='请填写板块标题：aaa例如 签到处'>";
    str += "</div>"
    str += "<div class='dele_div clearfix'>"
    str += "<a href='javascript:void (0)' class='dele_modular fr'>删除板块"
    str += "</a>"
    str += "<img src='../images/icon/dele_red.png' alt='' class='dele_icon fr'>"
    str += "</div>"
    str += " <div class='txtare_div'>";
    str += " <span class='name_title'>详细内容：";
    str += " </span>";
    str += " <textarea class='txtarebox' name='questionTxt'  placeholder=''></textarea>";
    str += " </div>";
    str += " </li>";
    return str;
}
//前期准备
function addReady() {
    var str = '';
    str += "<li class='active_con'>";
    str += "<div class='active_ready'>";
    str += "<span class='name_title'>时间&nbsp;&nbsp;|";
    str += "</span>";
    str += "<input  type='text' value='' class='name_input' placeholder=''>";
    str += "</div>"
    str += "<div class='active_text clearfix'>";
    str += "<span class='name_title fl'>关键点&nbsp;&nbsp;|";
    str += "</span>";
    str += "<textarea class='name_input fl' name='questionTxt'  placeholder=>";
    str += "</textarea>";
    str += "</div>"
    str += "<div class='dele_div clearfix'>"
    str += "<a href='javascript:void (0)' class='dele_modular fr'>删除板块"
    str += "</a>"
    str += "<img src='../images/icon/dele_red.png' alt='' class='dele_icon fr'>"
    str += "</div>"
    str += " <div class='txtare_div'>";
    str += " <span class='name_title'>详细内容：";
    str += " </span>";
    str += " <textarea class='txtarebox' name='questionTxt'  placeholder=''></textarea>";
    str += " </div>";
    str += " </li>";
    return str;
}
//现场准备
function sceneReady() {
    var str = '';
    str += "<li class='active_con'>";
    str += " <div class='txtare_div'>";
    str += " <span class='name_title'>具体内容：";
    str += " </span>";
    str += " <textarea class='txtarebox' name='questionTxt'  placeholder=''></textarea>";
    str += " </div>";
    str += "<div class='active_text clearfix'>";
    str += "<span class='name_title fl'>本条内容关键点";
    str += "</span>";
    str += "<textarea class='name_input fl' name='questionTxt'  placeholder=>";
    str += "</textarea>";
    str += "</div>"
    str += "<div class='dele_div clearfix'>"
    str += "<a href='javascript:void (0)' class='dele_modular fr'>删除板块"
    str += "</a>"
    str += "<img src='../images/icon/dele_red.png' alt='' class='dele_icon fr'>"
    str += "</div>"
    str += " </li>";
    return str;
}
//活动流程
function activityFlow() {
    var str = '';
    str += "<li class='active_con'>";
    str += " <div class='txtare_div'>";
    str += " <span class='name_title'>具体内容：";
    str += " </span>";
    str += " <textarea class='txtarebox' name='questionTxt'  placeholder=''></textarea>";
    str += " </div>";
    str += "<div class='active_text clearfix'>";
    str += "<span class='name_title fl'>本条内容关键点";
    str += "</span>";
    str += "<textarea class='name_input fl' name='questionTxt'  placeholder=>";
    str += "</textarea>";
    str += "</div>"
    str += "<div class='dele_div clearfix'>"
    str += "<a href='javascript:void (0)' class='dele_modular fr'>删除板块"
    str += "</a>"
    str += "<img src='../images/icon/dele_red.png' alt='' class='dele_icon fr'>"
    str += "</div>"
    str += " </li>";
    return str;
}
//活动结束
function activityEnd() {
    var str = '';
    str += "<li class='active_con'>";
    str += "<div class='active_ready'>";
    str += "<span class='name_title'>标题&nbsp;&nbsp;|";
    str += "</span>";
    str += "<input  type='text' value='' class='name_input' placeholder=''>";
    str += "</div>"
    str += "<div class='dele_div clearfix'>"
    str += "<a href='javascript:void (0)' class='dele_modular fr'>删除板块"
    str += "</a>"
    str += "<img src='../images/icon/dele_red.png' alt='' class='dele_icon fr'>"
    str += "</div>"
    str += " <div class='txtare_div'>";
    str += " <span class='name_title'>具体内容：";
    str += " </span>";
    str += " <textarea class='txtarebox' name='questionTxt'  placeholder=''></textarea>";
    str += " </div>";
    str += " </li>";
    return str;
}
//添加页面的事件绑定
function loadPage() {
    //把登录页面load进来 load完成需要重新绑定事件
    $(".contentright").load('./', function () {
        //清空
        $("section").on("click", ".dele_modular", function () {
            $(this).parent().parent().remove();
        })
        //收起
        $(".arr_sele").click(function () {
            $(this).parent().siblings("ul").slideToggle();
            $(this).parent().siblings(".add_button").slideToggle();
        })
        $(".arr_sele").click(function () {
            $(this).parent().siblings(".active_name").slideToggle();
        })
        $(".arr_sele").click(function () {
            $(this).parent().siblings(".select_click").slideToggle();
        })
        //物料准备
        $("#add_button").click(function () {
            $("#materiel").append(addMateriel());
        })
        //前期准备
        $("#ready_btn").click(function () {
            $("#addready").append(addReady());
        })
        //现场准备
        $("#scene_btn").click(function () {
            $("#scene").append(sceneReady());
        })
        //活动流程
        $("#flow_add").click(function () {
            $("#flow").append(activityFlow());
        })
        //活动结束
        $("#end_btn").click(function () {
            $("#end_activity").append(activityEnd());
        })
        //音频试听
        $(".playBtn").click(function () {
            document.getElementById("audio").play()
            if ($(this).hasClass("play")) {
                $(this).addClass("pause").removeClass("play");
                document.getElementById("audio").play();
            }
            else {
                $(this).addClass("play").removeClass("pause");
                document.getElementById("audio").pause();
            }
        })
    });
}
//load 简单的封装
function myload(url, callback) {
    createDivAddClassName();
    //加载loading
    toastWaiting();
    $(".contentright").html("");
    $(".contentright").load(url, function () {
        toastWaitingColse();
        switchSidebar(url)
        //css
        //callbak
        if (typeof callback == "function") {
            callback();
            var link = $(".stylebox link");
            for (var i = 0; i < link.length; i++) {
                for (var z = 0; z < $("head link").length; z++) {
                    // console.log($("head link").eq(z).attr("href"))
                    if ($("head link").eq(z).attr("href") == link.eq(i).attr("href")) {
                        break;
                    } else if( z == $("head link").length-1){
                        $("head").append(link.eq(i)[0])
                    }
                    $(".stylebox").remove();
                }
            }
        } else {
            return;
        }
    })
}