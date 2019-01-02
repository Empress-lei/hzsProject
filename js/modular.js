/**
 * Created by Administrator on 2018/1/2.
 */
// window.location.reload();
$(function () {
    //需求：鼠标放入两侧的li中，让中间的ul中对应索引值的li显示出来，其他的隐藏。（右侧的li要+9）
    //左侧先绑。获取绑mouseenter

    //轮播图
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 'auto',
        paginationClickable: true,//点击之后继续可以轮播
        pagination: '.swiper-pagination',
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        speed: 500,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
    })

    $('.skillbar').click(function () {
        var that = $(this);
        console.log(that)
        var tag = that.data('tags');
        console.log(tag)
        var listTag = $('.case li').data('tags');
        console.log(listTag)
        $(listTag).show();
    })
    var ulfunction={};
    ulfunction.core_per = function(index,fnType){
        $('.core_per:eq(' + index + ') li').slice(1,$('.core_per li').length).css('display','none');
    };
    var menuAction= '0';
    if(menuAction){
        var arr = menuAction.split(',');
        for (var i = 0; i < arr.length; i++) {
            ulfunction.core_per(arr[i]);
        }
    }
    //鼠标经过出现扫码朦层
    $(".mudular-list li").hover(function () {
        $('.case_w', this).stop().animate({"bottom": "20px"}, 300);
        $('.case_w', this).css("box-shadow","0 4px 13px 4px rgba(0, 0, 0, 0.12)");
    }, function () {
        $('.case_w', this).stop().animate({"bottom": "14px"}, 300);
        $('.case_w', this).css("box-shadow","none");
    })
})
// function shaixuan(obj){
//     var self=$(obj);
//     console.log(self);
//     var tag=self.data('tags');
//     console.log(tag)
//     var ocarr= new Array();
//     console.log(ocarr)
//     $('.o_choose').each(function(){
//         ocarr.push($(this).data('tags'));
//     });
//     $('.list_li').css('display','none')
//     for(var i =0;i<ocarr.length;i++){
//         var s =ocarr[i];
//         console.log(s)
//         $('.'+s).css('display','block')
//     }
//     console.log(ocarr)
//     if(ocarr.length== 0){
//         $('.list_li').css('display','block');
//     }
// }

// jQuery(document).ready(function(){
//     //点击筛选项
//     $('.skillbar').click(function (){
//         createCho(this);
//         $('.options').show();
//     })
//     $('.core_per .per_li').click(function() {
//         shaixuan($(this))
//     })
// });
// //点击筛选项
// function createCho(cho){
//     var tp = $(cho).find('.skillbar-title span').html(); //获取点击对应值
//     var cl = $(cho).attr('data-percent'); //标记
//     var type = $(cho).attr('data-type'); //获取本筛选项的类型
//     var tags = $(cho).attr('data-tags'); //获取本筛选项的类型
//     //构造选中div
//     var div ="<div class='o_choose "+type+"' data-tags='"+tags+"' data-type='"+ type +"'>"+tp+"<span class='o_close "+cl+"' onclick='o_delete(this)' data-tags='"+tags+"'  data-percent='"+cl+"'>x</span></div>"
//     if($('.'+cl).length==1){
//         $('.options p').after(div);
//     }
//     $(cho).parent().removeClass('m_point').addClass('m_point2')
//     $(cho).parent().find('.skillbar-bar').removeClass('barbg').addClass('changeBg');
//     $(cho).find('.skillbar-bar').removeClass('changeBg').addClass('clickBg');
//     if($('.o_close').length > 0){
//         if($('.clearAll').length==0) {
//             o_open();//筛选栏下拉
//             var span = "<div class='clearAll' onclick='removeAllClose()' style='background: none;color: #666;cursor: pointer;'>清除全部</div>"
//             $('.o_choose:last-child').after(span);
//             $('.colose').show();
//         }
//     }
//     t = 0;
//     shaixuan(cho);
// }
// //清楚所有筛选项
// function removeAllClose(){
//     $('.person').remove();
//     $('.o_choose,.clearAll').remove();
//     $('.clearAll').parent().remove();
//     $('.options').hide();
//     $('.colose').hide();
//     o_delete();
// }
// //筛选栏拉伸
// var isopen = false;
// function o_open(){
//     if(isopen){
//         isopen =!isopen;
//     }else{
//         isopen =!isopen;
//     }
// };
// //删除筛选项
// function o_delete(obtn){
//     $(obtn).parent().remove();
//     var cl =$(obtn).attr('data-percent');
//     $("."+cl).parent().parent().removeClass('m_point2').addClass('m_point1')
//     $("."+cl).find('.skillbar-bar').removeClass('clickBg').addClass('changeBg');
//     if($('.o_close').length == 0){
//         $('.clearAll').remove();
//         $('.colose').hide();
//         $('.list_li').css('display','block')
//         o_open();//筛选栏回收
//     }
//     shaixuan(obtn);
//     if($('.major').length==0){
//         $('.lei1').removeClass('m_point2').addClass('m_point');
//     }
//     if($('.nationality').length==0){
//         $('.lei2').removeClass('m_point2').addClass('m_point');
//     }
//     if($('.csi').length==0){
//         $('.lei3').removeClass('m_point2').addClass('m_point');
//     }
//     if($('.he').length==0){
//         $('.lei4').removeClass('m_point2').addClass('m_point');
//     }
// }
