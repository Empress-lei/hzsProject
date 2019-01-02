/**
 * Created by Administrator on 2018/1/20.
 */
$(function() {
    var newStyle = $("<style> @font-face {font-family: 'myFont';  src: url('../font/PingFangSC-Regular2.ttf');} </style>");
    $('body').append(newStyle);
    var font = "src: url('../font/PingFangSC-Regular2.ttf')";
    if(font === true) {
        $('body').css = myFont;
    }else {
        $('body').css = "PingFangSC-Regular,PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Helvetica Neue,sans-serif";
    }
});
