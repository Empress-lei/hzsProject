/**
 * Created by Administrator on 2018/1/5.
 */
$(function () {
    //百变橡皮泥 修改学校的名字
    $('.inn_plast').bind('input propertychange', function () {
        $('#kinder_plast').html($(".inn_plast").val());
    });
    //修改学校的名字
    $('.inn').bind('input propertychange', function () {
        var innVal = $("#in").val();
        console.log(innVal)
        var intVal = $("#inp_partner").val();
        console.log(intVal)
        if(intVal == "") {
            $('#kinder_name :nth-child(1)').html(innVal);
        }else {
            $('#kinder_name :nth-child(1)').html(innVal + "&nbsp;" + "&" + "&nbsp;" + intVal);
        }
    });
    //城市联动选择
    var address = $('#address').html()
    console.log(address + 'wbl')
    $(".pick-area1").pickArea({
        "getVal":function(){
            var thisdom = $("."+$(".pick-area-dom").val());
            console.log(thisdom);
            thisdom.next().val($(".pick-area-hidden").val());
            console.log(thisdom.next().val($(".pick-area-hidden").val()))
            var province = $(".pick-area .pick-province").html(),city = $(".pick-area .pick-city").html();
            province = province == city ? province : (province + (city == '请选择市' ? '' : city)) ;
            $("#address").html(province)
        }
    });
    $('#detailed').bind('input propertychange', function () {
        $("#add_1").html($("#detailed").val());
    });
    //电话号码
    $('#tell').bind('input propertychange', function () {
        $("#tell_num").html($("#tell").val());
    })
    //选择年月日
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        //常规用法
        laydate.render({
            elem: '#time_year'
            , format: 'yyyy.MM.dd' //可任意组合
            , done: function (value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                var dateStr=$('#time_year').val()+ " " + $("#time_branch").val();
                var activityTime = new Date(Date.parse(dateStr.replace(/[.]/g, "/")));
                $("#year_num").html(fmtWeekSecond(activityTime/1000));
            }
        });
    })
    //时间选择器
    //选择时间
    $('.filter-box').selectFilter({
        callBack: function (val) {
            //返回选择的值
            console.log(val + '-是返回的值')
            $('.time_p').html(val)
        }
    });
})
$(function(){
    $('.filter-list li').on('click',function(){
        var dateStr=$('#time_year').val()+ " " + $("#time_branch").val();
        var activityTime = new Date(Date.parse(dateStr.replace(/[.]/g, "/")));
        $("#year_num").html(fmtWeekSecond(activityTime/1000));
    });
})
jQuery.fn.selectFilter = function (options) {
    var defaults = {
        callBack: function (res) {
        }
    };
    var ops = $.extend({}, defaults, options);
    var selectList = $(this).find('select option');
    var that = this;
    var html = '';
    // 读取select 标签的值
    html += '<ul class="filter-list">';
    $(selectList).each(function (idx, item) {
        var val = $(item).val();
        // console.log(val)
        var valText = $(item).html();
        var selected = $(item).attr('selected');
        var disabled = $(item).attr('disabled');
        var isSelected = selected ? 'filter-selected' : '';
        var isDisabled = disabled ? 'filter-disabled' : '';
        if (selected) {
            html += '<li class="' + isSelected + '" data-value="' + val + '"><a title="' + valText + '">' + valText + '</a></li>';
            $(that).find('.filter-title').val(valText);
            console.log($("#myiframe").contents().find("#time_num").html(valText))
        } else if (disabled) {
            html += '<li class="' + isDisabled + '" data-value="' + val + '"><a>' + valText + '</a></li>';
        } else {
            html += '<li data-value="' + val + '"><a title="' + valText + '">' + valText + '</a></li>';
        }
        ;
    });
    html += '</ul>';

    $(that).append(html);
    $(that).find('select').hide();

    //点击选择
    $(that).on('click', '.time_branch', function () {
        $(that).find('.filter-list').slideToggle(100);
        $(that).find('.filter-list').toggleClass('filter-open');
    });
    //点击选择列表
    $(that).find('.filter-list li').not('.filter-disabled').on('click', function () {
        var val = $(this).data('value');
        var valText = $(this).find('a').html();
        $(that).find('.filter-title').val(valText);
        $(that).find('.icon-filter-arrow').toggleClass('filter-show');
        $(this).addClass('filter-selected').siblings().removeClass('filter-selected');
        $(this).parent().slideToggle(50);
        for (var i = 0; i < selectList.length; i++) {
            var selectVal = selectList.eq(i).val();
            if (val == selectVal) {
                $(that).find('select').val(val);
            }
            ;
        }
        ;
        ops.callBack(val); //返回值
    });

    //其他元素被点击则收起选择
    $(document).on('mousedown', function (e) {
        closeSelect(that, e);
    });
    $(document).on('touchstart', function (e) {
        closeSelect(that, e);
    });
    function closeSelect(that, e) {
        var filter = $(that).find('.filter-list'),
            filterEl = $(that).find('.filter-list')[0];
        var filterBoxEl = $(that)[0];
        var target = e.target;
        if (filterEl !== target && !$.contains(filterEl, target) && !$.contains(filterBoxEl, target)) {
            filter.slideUp(50);
            $(that).find('.filter-list').removeClass('filter-open');
            $(that).find('.icon-filter-arrow').removeClass('filter-show');
        }
        ;
    }

    //标签选择
    $('.lab_pubbtn li').click(function () {
        if ($(this).hasClass('orange_btn')) {
            $(this).removeClass('orange_btn');
        } else {
            $(this).addClass('orange_btn');
            $('.lab_pribtn li').removeClass('orange_btn');
        }
    });
};