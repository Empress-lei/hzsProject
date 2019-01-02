//首页导航下面添加横线
window.onload = function () {
    //需求1：鼠标放到哪个li上面，span对应移动到该li上。移开后，回到原位置。
    //需求2：鼠标点击那个li记录该li标签，移开的时候span回到该记录的li标签上。
    var liArr = $(".hover_ani li");
    var liWidth = liArr[0].offsetWidth;
    var spanShow = $(".hover_ani .span_dec")[0];
    //计数器
    var count = 0;
    //for循环绑定事件
    liArr.click(function () {
        spanShow.style.display = 'block';
        $(".hover_ani li").addClass("active_org").parent().siblings().children().removeClass("active_org");
    });
    $('.logo .logo_img').click(function () {
        spanShow.style.display = 'none';
    })
    for (var i = 0; i < liArr.length; i++) {
        //自定义属性，然后绑定index属性为索引值
        liArr[i].index = i;
        //鼠标进入事件
        liArr[i].onmouseover = function () {
            //让span运动到该li的索引值位置
            //图片运动需要封装的方法
            animate(spanShow, this.index * liWidth);
        }
        //鼠标移开
        liArr[i].onmouseout = function () {
            //让span运动到该li的索引值位置
            //图片运动需要封装的方法
            animate(spanShow, count * liWidth);
        }
        //点击事件，记录功能
        liArr[i].onclick = function () {
            //需要一个计数器，每次点击以后把所以只记录下来
            //因为onmouseout事件要用到这个计数器，所以应该是一个全局变量
            count = this.index;
            animate(spanShow, count * liWidth);
        }
        $(".hover_ani li a").click(function () {
            demo(this);
        })
    }
    //缓动动画封装
    function animate(ele, target) {
        try {
            clearInterval(ele.timer);
            ele.timer = setInterval(function () {
                var step = (target - ele.offsetLeft) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                ele.style.left = ele.offsetLeft + step + "px";
//          console.log(1);
                if (Math.abs(target - ele.offsetLeft) < Math.abs(step)) {
                    ele.style.left = target + "px";
                    clearInterval(ele.timer);
                }
            }, 18);
        }catch (e){

        }
    }

    //导航上的字体变色
    function demo(obj) {
        obj = $(obj);
        obj.addClass('active_org');
        console.log(obj)
        obj.parent().siblings().find("a").removeClass('active_org');
        console.log(obj.parent().siblings().find("a"))
    }
    //登录框显隐
    $('.home_sing').click(function () {
        $('.login_page').show();
    })
    //点击登录
    $('.login_ginbtn').click(function () {
        $('.login_box').show();
        $('.login_phone').hide();
    })
    console.log(timerButton);
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
    //         $('#j_getVerifyCode').css('backgroundColor', '#E6E6E6');
    //         $('#j_getVerifyCode').css('color', '#181818')
    //         console.log(this);//这里的this指向按钮
    //         console.log(this.timedown);//这个timedown就是计时器
    //     },
    //     timeUp: function (time) {//计时结束时执行的回调
    //         btn.html("重新获取");
    //         $('#j_getVerifyCode').css('backgroundColor', '#0099FF');
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

    //鼠标经过出现扫码朦层
    $(".case li").hover(function () {
        $('.case_w', this).stop().animate({"bottom": "20px"}, 300);
        $('.case_w', this).css("box-shadow","0 4px 6px 4px rgba(228, 228, 228, 0.5)");
        $('.sha_show',this).show();
    }, function () {
        $('.case_w', this).stop().animate({"bottom": "14px"}, 300);
        $('.case_w', this).css("box-shadow","none");
        $('.sha_show',this).hide();
    })
}