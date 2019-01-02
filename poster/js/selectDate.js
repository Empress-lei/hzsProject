/**
 * Created by Administrator on 2018/1/12.
 */
$(function () {
    //宝宝出生日期
    var scrollYear, scrollMonth, scrollDay;
    var selectDate = $('.scrollDate');
    //获取当前的年月日
    var curTime = new Date();
    var curYear = curTime.getFullYear();
    console.log(curYear);
    var curMonth = curTime.getMonth() + 1 >= 10 ? curTime.getMonth() + 1 : ("0" + (curTime.getMonth() + 1));
    console.log(curMonth);
    var curDate = curTime.getDate() >= 10 ? curTime.getDate() : ("0" + curTime.getDate());
    console.log(curDate);
    var timeInner = $('.showTime');
    var swiperYear, swiperMonth, swiperDay;
    //点击页面中的选择时间的位置出现弹层
    $('#nickSpan').off();
    $('#nickSpan').click(function () {
        selectDate.fadeIn();
        initSwiper(curYear, curMonth, curDate);
    });
    //点击取消，时间页面消失
    $('.btn_cancle').click(function () {
        selectDate.fadeOut();
    });

    //点击时间页面上的“确定”按钮，设置时间  页面取消
    $('.btn_sure').click(function () {
        //获取当前的时间
        var z = curYear + "年" + curMonth + "月" + curDate + "日";
        console.log(z)
        //获取时间页面上选择到的时间
        var s = timeInner.eq(0).html() + "年" + timeInner.eq(1).html() + "月" + timeInner.eq(2).html() + "日";
        console.log(s);
        if (s > z) {
            alert('所选时间不能大于当前时间');
        } else {
            selectDate.fadeOut();
            $("#messDate").children("#nickSpan").html(s);
        }
    })
    //选择宝宝出生日期
    function initSwiper(curYear, curMonth, curDate) {
        //获取年、月、日的索引值\
        var aaa = curYear -7;
        console.log(aaa);
        var yearIndex = curYear - 2011 - 2;
        var monthIndex = curMonth - 2;
        var dateIndex = curDate - 1 - 1;
        swiperYear = new Swiper('#swiperYear', {
            direction: 'vertical',
            height: 45,
            loop: true,
            initialSlide: yearIndex,
            centeredSlides: true,
            paginationClickable: true,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            //改变顶部年的值
            onSlideChangeEnd: function (swiper) {
                var idx = swiper.activeIndex;
                console.log(idx);
                var o = $("#swiperYear").children("div.swiper-wrapper").find("div:eq(" + idx + ")");
                var curTime = $('.scrollDate .swiper-slide-next').eq(0).html();
                timeInner.eq(0).html(curTime);
            },
        })
        swiperMonth = new Swiper('#swiperMonth', {
            direction: 'vertical',
            height: 45,
            loop: true,
            initialSlide: monthIndex,
            centeredSlides: true,
            paginationClickable: true,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            //改变顶部月的值
            onSlideChangeEnd: function (swiper) {
                var idx = swiper.activeIndex;
                console.log(idx);
                var o = $("#swiperMonth").children("div.swiper-wrapper").find("div:eq(" + idx + ")");
                var curTime = $('.scrollDate .swiper-slide-next').eq(1).html();
                timeInner.eq(1).html(curTime);
            }
        })
        swiperDay = new Swiper('#swiperDay', {
            direction: 'vertical',
            height: 45,
            loop: true,
            initialSlide: dateIndex,
            centeredSlides: true,
            paginationClickable: true,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            //改变顶部日的值
            onSlideChangeEnd: function (swiper) {
                var idx = swiper.activeIndex;
                console.log(idx);
                var o = $("#swiperDay").children("div.swiper-wrapper").find("div:eq(" + idx + ")");
                var curTime = $('.scrollDate .swiper-slide-next').eq(2).html();
                timeInner.eq(2).html(curTime);
            }
        })
    }
});



