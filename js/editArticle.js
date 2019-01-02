var i = 0;
//记录文本框中的字数
function fn() {
    var len = $(".font13 textarea").val().length;
    $(".font13 p span").text(len);
}

function vfn() {
    var len = $(".font13 textarea").val().length;
    if (len < 10) {
        return false;
    }
}
$(function () {

    //复制
    var clipboard = new Clipboard('#copy', {
        target: function() {
            return document.querySelector('#schedule');
        }
    });
    $('.font13 textarea').autoHeight();
    //图片上传   增加
    $("#form_id").change(function () {
        $("#schedule").show();
        var file = this.files[0];
        console.log(file);
        if (window.FileReader) {
            var reader = new FileReader();
            console.log(reader);
            reader.readAsDataURL(file);
            //监听文件读取结束后事件
            reader.onloadend = function (e) {
                $("#schedule").append(addImg(e.target.result));
            };
        }
    });
    $(".upload_img").click(function () {
        $("#schedule").show();
    });
    $(".upload_text").click(function () {
        $("#schedule").show();
        $("#schedule").append(addText());
        $(".textarea textarea").focus();
        $('.textarea textarea').autoHeight();
    });
});


//添加图片
function addImg(src) {
    var str = '';
    str += "<section class=\"file_img mar_bot\">";
    str += "<img onclick=editImg(this) class=\"img\" src='" + src + "' />"
    str += "<img onclick=removeImg(this) class=\"imgclose\"  src='../../images/icon/close_1.png'/>"
    str += "</section>";
    return str;
}
//在原位置修改图片
var currentEle={src:""};
$("#File").change(function () {
    var file = this.files[0];
    console.log(file);
    if (window.FileReader) {
        var reader = new FileReader();
        console.log(reader);
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = function (e) {
            //e.target.result就是最后的路径地址
            console.log(e.target.result)
            console.log(currentEle)
            currentEle.attr("src",e.target.result)
        };
    }
});
function editImg(ele) {
    console.log(ele)
    var eleth = $(ele);
    currentEle = eleth;
    console.log(eleth.parent())
    var eleSrc = eleth.attr("src");
    console.log(eleSrc);
    // $(this).parent().remove();
    $("#File").click();
}
// 删除图片
function removeImg(ele) {
    var ele = $(ele)
    ele.parent().remove();
}
// textarea   高度自适应
jQuery.fn.extend({
    autoHeight: function () {
        return this.each(function () {
            var $this = jQuery(this);
            if (!$this.attr('_initAdjustHeight')) {
                $this.attr('_initAdjustHeight', $this.outerHeight());
            }
            _adjustH(this).on('input', function () {
                _adjustH(this);
            });
        });
        /**
         * 重置高度
         * @param {Object} elem
         */
        function _adjustH(elem) {
            var $obj = jQuery(elem);
            return $obj.css({height: $obj.attr('_initAdjustHeight'), 'overflow-y': 'hidden'})
                .height(elem.scrollHeight);
        }
    }
});
//添加文字
function addText() {
    var str = '';
    str += "<seaction  contenteditable=\"true\" class=\"textarea mar_bot\">";
    str += "<textarea onblur=\"teareonblur(this.value,this)\"></textarea>";
    str += "</seaction>";
    return str;
}
//在 textarea 失去焦点的时候   里面如果没有内容  直接remove
var textArr = new Array();
function teareonblur(ttext,objmy){
    console.log(ttext)
    console.log(objmy)
    if(ttext==""){
        objmy.parentNode.remove(objmy)
    }else{
        console.log(ttext)
        $('#schedule textarea').each(function () {
            textArr.push(ttext);
        });
        console.log(textArr)
        $('#schedule .textarea').each(function (i) {
            $(this).text(textArr[i])
        })
        $("#schedule").find("textarea").remove();
    }
}