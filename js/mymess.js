/**
 * Created by Administrator on 2018/3/28.
 */
$(function () {
    optab(".system_log dd");
    myload($(".first_dd a").data("url"), function () {
        dbText(".info_ul .info_list .dbtext");
    })
    var tempUrl = ""
    $(".system_log dd a").on("click",function () {
        if(tempUrl != $(this).data("url") ) {
            tempUrl = $(this).data("url");
        }else {
            return
        }
        myload($(this).data("url"), function () {
            dbText(".info_ul .info_list .dbtext");
            
            // messState(".my_mess .sele_state .state_render");
        })
    })
//     $(".system_log .other_num a").on("click",function () {
//         myload($(this).data("url"), function () {
//             dbText(".info_ul .info_list .dbtext");
//             var html = '';
//             $.ajax({
//                 type: "GET",
//                 url: "../../json/friends.json",
//                 success: function (ts) {
//                     var laypage = layui.laypage, layer = layui.layer;
//                     var count = ts.count;
//                     var data = ts.data;
//                     //调用分页
//                     layui.use(['laypage', 'layer'], function () {
//                         var laypage = layui.laypage, layer = layui.layer;
//                         laypage.render({
//                             elem: 'pageGro',
//                             count: count,
//                             limit: count / 6,
//                             prev: '<',
//                             next: '>',
//                             jump: function (obj) {
//                                 //模拟渲染
//                                 // console.log(obj.limit)
//                                 document.getElementById('friend_list').innerHTML = function () {
//                                     var arr = [];
// //                            thisData = data.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
// //                            console.log(thisData)
//                                     layui.each(data, function (index, item) {
//                                         console.log(item)
//                                         arr.push('<li class="clearfix friend_mess">' +
//                                             '<div class="news_img fl">' +
//                                             '<img src="' + item.images + '"/>' +
//                                             '</div>' +
//                                             '<div class="news_activity fl">' +
//                                             '<h4 class="like_phone">' + item.phone + '</h4>' +
//                                             '<p class="like_txt">' + item.renderName + '</p>' +
//                                             '<p>' + item.identity + '</p>' +
//                                             '</div>' +
//                                             '</li>');
//                                     });
//                                     return arr.join('');
//                                 }();
//                             }
//                         });
//                     })
//                 }
//             })
//         })
//     })

})

function messRady() {
    $(".nomessready").on("click",function(){
        alert("1111")
        myload($(".nomessready a").data("url"))
    })
    //点击已读
    $(".messready").click(function () {
        alert("2222")
        myload($(".messready a").data("url"))
    })
}
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
//选择标签
function messState(item) {
    var item = $(item);
    item.on("click", function () {
        item.removeClass("active_mess");
        $(this).siblings("li").addClass("active_mess");
    })
    item.on("click", function () {
        item.removeClass("active_mess");
        $(this).addClass("active_mess");
    })
}
//双击修改名称
var bbb;
function dbText(ele) {
    var dap = $(ele);
    if(!dap.hasClass("isMaster")){
        return;
    }
    dap.on("click",function () {
        var text= $(this).text();
        var input=$('<input type="text" class="edit" value="'+text+'">');
        $(this).data( "old", text );
        $(this).html( input );
        $('input.edit').click(function(){
            return false;
        }); //阻止表单默认点击行为
        $('input.edit').select(); //点击自动全选中表单的内容
        $('input.edit').blur(function(){
            var nextxt=$(this).val();
            dap.html(nextxt);
        }); //表单失去焦点文本框变成文本
    })
}
//load 简单的封装
function myload(url, callback) {
    //加载loading
    $(".contentright").html("");
    //加载loading
    $(".contentright").load(url, function () {
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