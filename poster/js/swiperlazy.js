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
        /*
         * 设置为true -> 开启图片延迟加载
         * <img>的src属性改为data-src，class增加一个'swiper-lazy'
         * 如果直接用div，设置background，对应的改为data-background即可
         */
        lazyLoading: true,
        lazyLoadingInPrevNext : true,
        // 这个为true时，↓才有用
        lazyLoadingInPrevNextAmount: 1,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
})