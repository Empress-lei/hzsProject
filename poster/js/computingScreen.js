/**
 * Created by Administrator on 2018/1/27.
 */
// js计算适配手机屏幕 元素的font-size = 37.5 / 屏幕宽度/375的设计图
var shuping = 'onorientationchange' in window ? 'orientationchange' : 'resize';
var isAndorid = /(Android)/i.test(navigator.userAgent);
var timer = null;
function setFontSize(){
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    document.documentElement.style.fontSize = 37.5*w/375 + 'px';
}
setFontSize();
window.addEventListener(shuping, function (){
    clearTimeout(timer);
    timer = setTimeout(setFontSize, isAndorid?300:0);
}, false);
