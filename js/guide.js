$(function () {
    $('.guide_list li').click(function () {
        $(this).addClass('current_li').siblings().removeClass('current_li');
    })
    $('.guide_list li').click(function () {
        $(".guide_detailed li").eq($(this).index()).show().siblings(".guide_detailed li").hide();
    })
    var myPlayer = videojs('my-video');
    //点击按钮，视频显示 并自动播放
    $('.palybtn').click(function () {
        $('.video_page').show();
        videojs("my-video").ready(function(){
            var myPlayer = this;
            myPlayer.play();
        });
    })
    //点击图片  视频显示  并自动播放
    $('.pptstart').click(function () {
        $('.video_page').show();
        videojs("my-video").ready(function(){
            var myPlayer = this;
            myPlayer.play();
        });
    })

    //点击视频朦层上的 X   视频关闭
    $('.video_page .closebtn').click(function () {
        $('.video_page').hide();
        myPlayer.pause();
        myPlayer.currentTime(0);
    })

    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
    });
    $('.pptbtn').click(function () {
        $('.ppt_page').show();
        var swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            pagination: '.swiper-pagination',
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
        });
    })
    //点击图片  ppt显示  并自动播放
    $('.pptend').click(function () {
        $('.ppt_page').show();
        var swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            pagination: '.swiper-pagination',
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
        });
    })
    //点击ppt朦层上的 X   视频关闭
    $('.ppt_page .closebtn').click(function () {
        $('.ppt_page').hide();
        // location.reload();
        // $('.guide_list :nth-child(2)').addClass(".current_li");
        // $('.guide_detailed :nth-child(2)').show();
    })
    //点击下载中心的图片显示大图
    $('.down_list .form_img').click(function () {
        $('.img_page').show();
    })
    //点击图片显示朦层上的 X   视频关闭
    $('.img_page .closebtn').click(function () {
        $('.img_page').hide();
    })
})