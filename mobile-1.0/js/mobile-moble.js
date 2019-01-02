var videoObj={
    playBefore:function(){return true},
    playAfter:function(){}
};
$(function () {
    $(".play_btn").click(function () {
        videoClick();
    });
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed:300,
        autoplay : 3000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    })
})
function videoClick() {
    if(videoObj.playBefore){
        if(!videoObj.playBefore()){
            return;
        }
    }
    $(".video_play").hide();
    $(".video_share").show()
    var myPlayer =  videojs("#my-video");  //初始化视频
    myPlayer.play();
    myPlayer.on("ended", function(){
        $(".video_play").show();
        $(".video_share").hide()
    });
    if(videoObj.playAfter){
        videoObj.playAfter();
    }
}