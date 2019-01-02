/**
 * Created by Administrator on 2018/4/21.
 */
$(function () {
    var nameTemp = "";
    //点击名字编辑   编辑名称的的朦层显示
    $(".name_text").on("click", function () {
        $(".edit_name").show();
        var oldName = $('#kinder_name').html();
        $('.old_kinname').html(oldName);
    })
    $("#editNewname").focus(function(){
        $(".deetermine").addClass("deeter_orange");
    });
    //点击确定 将input的值付给幼儿园的名称
    $(".deetermine").on("click", function () {
        var innVal = $(" input[ type='text']").attr("value");
        var aaa = $('#kinder_name').html();
        var innValText = $("#editNewname").val();
        if(innValText){
            $('#kinder_name').html(innValText);
            $('.old_kinname').html(innValText);
        }
        nameTemp = aaa;
        $("#editNewname").val("")
        $(".edit_name").hide();
        $(".deetermine").removeClass("deeter_orange");
    })
    //点击取消的时候   不要更改input的值  还是原来的值
    $(".closeicon").on("click", function () {
        $(".edit_name").hide();
        var bbb = $('#kinder_name').html();
        console.log(bbb);
        nameTemp = bbb;
        $("#editNewname").val("")
        $(".deetermine").removeClass("deeter_orange");
    })
    //点击选择城市  选择城市出现
    !function () {
        var $target = $('#J_Address2');
        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });
        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });

    }();
    var addTemp = "";
    $(".add_li").on("click", function () {
        $(".render_add").show();
        var addShow = $(".add_show").html();
        $(".old_add").html(addShow)
    })
    $(".deeaddbtn").on("click", function () {
        var addVal = $('#J_Address2').val();
        $(".add_show").html(addVal)
        var addShow = $(".add_show").html();
        $(".old_add").html(addShow)
        addTemp = addShow;
        $(".render_add").hide();
    })
    //点击取消的时候   不要更改城市的值  还是原来的值
    $(".closeadd").on("click", function () {
        $(".render_add").hide();
        var addHide = $(".add_show").html();
        addTemp = addHide;
    })
    var stateTemp = "";
    //点击已开园未开园的时候
    $(".render_li").on("click", function () {
        $(".render_state").show();
        var renArr = [];
        var renText = $("#renderState").text();
        $(".old_staname").html(renText)
        var renTrim = $.trim(renText);
        console.log(renText + "-----000-----");
        //获取li标签中的值
        var stateLen = $(".sele_state .state_render ").text();
        console.log(stateLen + "-----222-----")
        //将文字中间的连接符  “ + ”    替换掉
        renStrs = renTrim.split("+"); //字符分割
        console.log(renStrs)
        for (var i = 0; i < renStrs.length; i++) {
            if (renStrs[i] !== renArr[i]) {
                renArr.push(renStrs[i]);//加入元素数组
            }
            for (var j = 0; j < stateLen.length; j++) {
                if (renArr[i].indexOf($(".sele_state li label").eq(j).text()) != -1) {
                    $(".sele_state li").eq(j).addClass("active_first");
                    continue;
                }
            }
        }
        seleRender(".render_state .sele_state .state_render")
    })
    //点击幼儿园状态上面的确定
    $(".deestate").on("click", function () {
        c = $(".sele_state .active_first label").text();
        $("#renderState").html(c);
        $(".old_staname").html(c)
        $(".render_state").hide();
        $(".sele_state li").removeClass("active_first");
    })
    //点击取消的时候   不要更改城市的值  还是原来的值
    $(".closestate").on("click", function () {
        $(".render_state").hide();
        var stateHide = $("#renderState").html();
        stateTemp = stateHide;
    })

    //=园所类型=
    $(".type_li").on("click", function () {
        // $("input[name='kinTypes']:checked").click();
        $(".render_type").show();
        var arr = [];
        selectOpt(".sele_type li label")
        //获取到后台获取到的值
        var nlengt = $("#renderType").text();
        $(".old_typetit").html(nlengt);
        console.log(nlengt)
        //去除文字的前后空格
        var ddd = $.trim(nlengt);
        console.log(ddd)
        //将文字中间的连接符  “ / ”    替换掉
        strs = ddd.split("/"); //字符分割
        console.log(strs)
        //获取li标签中的值
        var optLen = $(".sele_type .state_render label").text();
        console.log(optLen)
        for (var i = 0; i < strs.length; i++) {
            if (strs[i] !== arr[i]) {
                arr.push(strs[i]);//加入元素数组
            }
            for (var j = 0; j < optLen.length; j++) {
                if (arr[i].indexOf($(".sele_type .state_render label").eq(j).text()) != -1) {
                    $(".sele_type .state_render").eq(j).addClass("orangeBtn");
                    continue;
                }
            }
        }
    })
    //点击园所类型的确定
    $(".deetype").on("click", function () {
        d = $(".sele_type .orangeBtn label").text();
        console.log(d);
        $("#renderType ").html(d);
        $(".old_typetit").html(d);
        $(".render_type").hide();
        $(".sele_type .state_render").removeClass("orangeBtn");
    })
    //点击园所类型的取消
    $(".closetype").on("click", function () {
        $(".sele_type .state_render").removeClass("orangeBtn");
        $(".render_type").hide();
    })

    //=注册人信息=
    $(".name_li").on("click", function () {
        // $("input[name='positionType']:checked").click();
        $(".render_info").show();
        var arrInfo = [];
        selectOpt("#seleInfo .state_render label");
        //获取到后台获取到的值
        var nlengt = $(".name_li .info_name").text();
        $(".old_info").html(nlengt)
        console.log(nlengt)
        //去除文字的前后空格
        var ddd = $.trim(nlengt);
        console.log(ddd)
        //将文字中间的连接符  “ + ”    替换掉
        strsInfo = ddd.split("+"); //字符分割
        console.log(strsInfo)
        //获取li标签中的值
        var optLen = $(".sele_info .state_render label").text();
        console.log(optLen)
//            nlengt = nlengt+" ";
        for (var i = 0; i < strsInfo.length; i++) {
            if (strsInfo[i] !== arrInfo[i]) {
                arrInfo.push(strsInfo[i]);//加入元素数组
            }
            for (var j = 0; j < optLen.length; j++) {
                if (arrInfo[i].indexOf($("#seleInfo .state_render label").eq(j).text()) != -1) {
                    $("#seleInfo .state_render").eq(j).addClass("orangeBtn");
                    continue;
                }
            }
        }
    })
    //点击园所注册人的确定
    $(".deeinfo").on("click", function () {
        e = $(".sele_info .orangeBtn label").text();
        $(".info_name").html(e);
        $(".old_info").html(e)
        $(".render_info").hide();
        $(".sele_info .state_render").removeClass("orangeBtn");
    })
    //点击园所注册人的取消
    $(".closeinfo").on("click", function () {
        $(".sele_info .state_render").removeClass("orangeBtn");
        $(".render_info").hide();
    })

    //展开收起硬件设备、教师团队内容
    slideTog(".hardware");
    slideTog(".teartime")

})

//单选选择标签
function seleRender(item) {
    var item = $(item);
    item.on("click", function () {
        item.removeClass("active_first");
        $(this).siblings("li").addClass("active_first");
    })
    item.on("click", function () {
        item.removeClass("active_first");
        $(this).addClass("active_first");

    })
}

//多选
function selectOpt(ele) {
    var ele = $(ele);
    if("true" == ele.data("click")){
        return;
    }
    ele.on("click", function () {
        if ($(this).parent().hasClass('orangeBtn')) {
            $(this).parent().removeClass('orangeBtn');
        } else {
            $(this).parent().addClass('orangeBtn');
        }
    })
    ele.data("click","true");
}

function slideTog(ele) {
    var ele = $(ele)
    ele.on("click", function () {
        if (ele.hasClass("cur_list")) {
            ele.removeClass("cur_list");
        } else {
            ele.addClass("cur_list");
        }
        ele.parent().children(".mess_details").slideToggle(500);
    })
}