$(function () {
    //首页音频
    $(".playbtn_home").click(function () {
        $(".video_page").show();
        var videoSrc = $(this).data("url");
        $("#my-video").attr("src", videoSrc);
        var myPlayer =  videojs("#my-video");  //初始化视频
        myPlayer.src(videoSrc);  //重置video的src
        myPlayer.load(videoSrc);  //使video重新加载
        myPlayer.play();
    });
    var myPlayer = videojs('my-video');
    //点击分享按钮  出现分享页面，音频暂停
    $(".shareBtn").click(function () {
        $(".share_page").show();
        myPlayer.pause();
        $(".video_page").css("background-color","rgba(0, 0, 0, 0)");
    })
    //点击分享上面的关闭按钮   分享页面隐藏   音频播放
    $(".close_share").click(function () {
        $(".share_page").hide();
        myPlayer.play();
        $(".video_page").css("background-color","rgba(0, 0, 0, 0.7)");
    })
    $(".closebtn_pos img").click(function () {
        $('.video_page').hide();
        myPlayer.pause();
        myPlayer.currentTime(0);
    })
    $(".playbtn_img").click(function () {
        $(".video_page").show();
        var videoSrc = $(this).data("url");
        $("#my-video").attr("src", videoSrc);
        var myPlayer =  videojs("#my-video");  //初始化视频
        myPlayer.src(videoSrc);  //重置video的src
        myPlayer.load(videoSrc);  //使video重新加载
        myPlayer.play();
    });
    //video朦层鼠标经过效果
    // $(".list-ul li").hover(function () {
    //     $('.sha_show',this).show();
    // }, function () {
    //     $('.sha_show',this).hide();
    // })
    $(".list-ul li").hover(
        function () {
            var that = this;
            item2Timer = setTimeout(function () {
                $(that).find('.sha_show').fadeIn(300);
            }, 100);

        },
        function () {
            var that = this;
            clearTimeout(item2Timer);
            $(that).find('.sha_show').fadeOut(300);
        }
    );
    $(".list-ul li").hover(function () {
        $('.case_w', this).stop().animate({"bottom": "20px"}, 300);
        $('.case_w', this).css("box-shadow","0 10px 30px 0 rgba(0,0,0,.1)");
    }, function () {
        $('.case_w', this).stop().animate({"bottom": "14px"}, 300);
        $('.case_w', this).css("box-shadow","none");
    })
});
