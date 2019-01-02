/**
 * Created by Administrator on 2018/1/10.
 */
$(function () {
    var swiper = new Swiper('.myswiper-container', {
        direction : 'vertical',
        slidesPerView: "auto",
        centeredSlides: true,
        paginationClickable: true,
        normalizeSlideIndex: true,
        // mousewheelControl: true,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
            // alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
    // var btn = $("#j_getVerifyCode");
    // timerButton.verify("#j_getVerifyCode", {
    //     time: 60,//倒计时时间
    //     event: "click",//事件触发方式
    //     //执行条件，可以是function也可以是Boolean值，如果是函数则需返回true才会执行
    //     condition: function () {
    //         var phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
    //             flag = phoneReg.test($("#j_phone").val());
    //         if (!flag) {
    //             alert("电话号码填写不正确！");
    //             return false;
    //         }
    //         return true;
    //     },
    //     unableClass: "unabled",//按钮不能使用时的class
    //     runningText: " s后重新获取",//计时正在进行中时按钮显示的文字
    //     timeUpText: "重新获取",//时间到了时按钮显示的文字
    //     progress: function (time) {//计时正在进行中时的回调
    //         btn.html(time + " s后重新获取");
    //         $('#j_getVerifyCode').css('backgroundColor', '#888');
    //         $('#j_getVerifyCode').css('color', '#fff')
    //         console.log(this);//这里的this指向按钮
    //         console.log(this.timedown);//这个timedown就是计时器
    //     },
    //     timeUp: function (time) {//计时结束时执行的回调
    //         btn.html("重新获取");
    //         $('#j_getVerifyCode').css('color', '#fff')
    //         console.log("时间到了！");
    //         console.log(this);//这里的this指向按钮
    //     },
    //     eventFn: function () {//事件执行后的回调
    //         console.log(this);
    //         console.log("执行了");
    //         console.log(this);//这里的this指向按钮
    //     }
    // });
})