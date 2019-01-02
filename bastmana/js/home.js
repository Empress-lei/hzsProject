/**
 * Created by Administrator on 2018/3/20.
 */
$(function () {
    $(".date_num").html(dateShow());
})
//获取当前的时间
function dateShow() {
    var mydate = new Date();
    var str = "" + mydate.getFullYear() + "年";
    str += "&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;";
    str += (mydate.getMonth() + 1) + "月";
    str += "&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;";
    str += "<span class='date_span'>" + mydate.getDate() + "</sapn>" + "<span class='date_r'>&nbsp;&nbsp;&nbsp;日</span>";
    return str;
}