/**
 * Created by Administrator on 2018/1/3.
 */
$(function () {
    var html = '';
    $.ajax({
        type: "GET",
        url: "../../json/friends.json",
        success: function (ts) {
            var laypage = layui.laypage, layer = layui.layer;
            var count = ts.count;
            var data = ts.data;
            //调用分页
            layui.use(['laypage', 'layer'], function () {
                var laypage = layui.laypage, layer = layui.layer;
                laypage.render({
                    elem: 'pageGro',
                    count: count,
                    limit: count / 3,
                    prev: '<',
                    next: '>',
                    layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip'],
                    jump: function (obj) {
                        //模拟渲染
                        console.log(obj.limit)
                        document.getElementById('biuuu_city_list').innerHTML = function () {
                            var arr = [];
//                            thisData = data.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
//                            console.log(thisData)
                            layui.each(data, function (index, item) {
                                console.log(item)
                                arr.push('<li class="clearfix">' +
                                    '<img src="' + item.images + '" class="news_img fl"/>' +
                                    '<div class="news_activity fl">' +
                                    '<h4>' + item.title + '</h4>' +
                                    '<p class="like_txt">' + item.describe + '</p>' +
                                    '<div class="time_count clearfix">' +
                                    '<p>' + item.time + '</p>' +
                                    '<a href="javascript:void (0)" class="no_start">' + item.nostart + '</a>' +
                                    '</div>' +
                                    '</div>' +
                                    '<div class="news_cord fl">' +
                                    '<img src="' + item.cord + '" />' +
                                    '</div>' +
                                    '<p class="news_num fl">' + item.share + '</p>' +
                                    '<p class="news_num fl">' + item.about + '</p>' +
                                    '<div class="news_from fr">' +
                                    '<a href="#">' + item.messlist + '</a>' +
                                    '<a href="#">' + item.programme + '</a>' +
                                    '</div>' +
                                    '</li>');
                            });
                            return arr.join('');
                        }();
                    }
                });
            })
        }
    })
})