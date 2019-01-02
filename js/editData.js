var imgArr = new Array();
var oldArr = new Array();
function article() {
    var content = $(".article_content .container");
    console.log(content)
    var newContent = content.clone().attr('id', 'newArticle');
    $(".reader_content").append(newContent);
    //获取input的值
    var strInput = $(".control").find("input").val();
    var new_obj = $('<p>');  // 以 DOM 创建新元素
    new_obj.text(strInput);
    $("#newArticle .control").append(new_obj);
    $("#newArticle").find("input").remove();
    $("#newArticle").find(".mask").remove();
    $("#newArticle").find(".imgclose").remove();
    $("#newArticle").find("img").removeAttr("onclick");
    $("#newArticle .left-part .image").css("border","none");
    //获取textarea的内容
    var strText = $(".font13").find("textarea").val();
    $("#newArticle .font13").text(strText);
    $("#newArticle").find("textarea").remove();
    $("#newArticle .length").remove();
    $("#newArticle .textarea").attr("contenteditable","false");
    //下面文本的
    $('#schedule textarea').each(function () {
        oldArr.push($(this).val());
    })
    console.log(oldArr)
    $('#newArticle #schedule .textarea').each(function (i) {
        $(this).text(oldArr[i])
    })
    //获取图片的src
    $('#selectText #schedule img').each(function () {
        // imgArr.push($(this).attr("src"));
        imgArr+=$(this).attr("src")+",";
    })
    console.log(imgArr)
}