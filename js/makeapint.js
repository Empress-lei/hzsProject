$(function() {
    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: '#test'
            , count: 70
            , prev: '《'
            , next: '》'
            , url: '../../json/table.json'
            , height: 508
            , limit: 8
            , page: true //开启分页
            , cols: [[ //表头
                {field: 'number', title: '编号',}
                , {field: 'nickname', title: '家长微信昵称',}
                , {field: 'babynickname', title: '宝宝昵称',}
                , {field: 'date', title: '宝宝出生年月',}
                , {field: 'data', title: '家长联系方式',}
                , {field: 'time', title: '预约时间',}
                , {field: 'present', title: '是否到场',}
            ]]
            , unresize: true
            , align: "center"
            , initSort: {
                field: 'data' //排序字段，对应 cols 设定的各字段名
                , type: 'desc' //排序方式  asc: 升序、desc: 降序、null: 默认排序
            }
            , done: function (res, curr, count) {
                //如果是异步请求数据方式，res即为你接口返回的信息。
                //如果是直接赋值的方式，res即为：{data: [], count: 99} data为当前页数据、count为数据总长度
                console.log(res);
                console.log(res.data);
                $('.laytable-cell-1-images').append('<img src="" alt="" class="imagesMin">');
                for (var i = 0; i < res.data.length; i++) {
                    console.log(res.data[i].images);
                    for (var j = 0; j < $('.laytable-cell-1-images img').length; j++) {
                        $('.imagesMin').attr('src', res.data[i].images)
                    }
                }
                console.log(this);

                $('.laytable-cell-1-iamges img');

                //得到当前页码
                console.log(curr);

                //得到数据总量
                console.log(count);
            }
        });
    });
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
                console.log(this.index * liWidth + 100)
            }
            //鼠标移开
            liArr[i].onmouseout = function () {
                //让span运动到该li的索引值位置
                //图片运动需要封装的方法
                animate(spanShow, count * liWidth + 100);
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
        //点击下一步
        $('.login_nextbtn').click(function () {
            $('.login_box').hide();
            $('.login_phone').show();
        })
        //点击叉号
        $('.symbol_x').click(function () {
            $('.login_page').hide();
        })
    //点击现场签到二维码  出现弹层
    $('#submit_cord').click(function () {
        $('.sign_page').show();
    })
    $('#close_img1').click(function () {
        $('.sign_page').hide();
    })
})