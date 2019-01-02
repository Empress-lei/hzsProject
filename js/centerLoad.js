$(function () {
    myload($(".active_first a").data("url"));
    var tempUrl = ""
    $(".system_log dd").on("click",function () {
        if(tempUrl != $(this).children().data("url") ) {
            tempUrl = $(this).children().data("url");
        }else {
            return
        }
        console.log($(this));
        myload($(this).children().data("url"),function () {
            $(".now_li .li_icon").on("click", function () {
                $(".sign_page").show();
            })
            $(".sign_page .sign_share").on("click", function () {
                $(".sign_page").hide();
            })
            $(".now_li .li_poster").on("click", function () {
                $(".sign_scene").show();
            })
            $(".sign_scene .sign_share").on("click", function () {
                $(".sign_scene").hide();
            })
        });
    })
})
//load 简单的封装
function myload(url, callback) {
    //加载loading
    $(".contentshow").html("");
    //加载loading
    $(".contentshow").load(url, function () {
        //css
        //css
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