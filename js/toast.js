/**
 * js在head 添加样式
 * @param cssText
 */
function addCSS(cssText) {
    var style = document.createElement('style'), // 创建一个style元素
        head = document.head || document.getElementsByTagName('head')[0]; // 获取head元素
    style.type = 'text/css'; // 这里必须显示设置style元素的type属性为text/css，否则在ie中不起作用
    if (style.styleSheet) { // IE
        var func = function () {
            try { // 防止IE中stylesheet数量超过限制而发生错误
                style.styleSheet.cssText = cssText;
            } catch (e) {

            }
        }
        // 如果当前styleSheet还不能用，则放到异步中则行
        if (style.styleSheet.disabled) {
            setTimeout(func, 10);
        } else {
            func();
        }
    } else { // w3c
        // w3c浏览器中只要创建文本节点插入到style元素中就行了
        var textNode = document.createTextNode(cssText);
        style.appendChild(textNode);
    }
    head.appendChild(style); // 把创建的style元素插入到head中
}
//可视区的高度
function getViewHeight() {
    return document.documentElement.clientHeight || document.body.clientHeight;
}
// 可视区的高度
function getViewWidth() {
    return document.documentElement.clientWidth || document.body.clientWidth;
}
// 整个文档的高度
function getScrollHeight() {
    return document.documentElement.scrollHeight || document.body.scrollHeight;
}
// 滚动条高度
function getScreenTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}
//---------------------------------toast-------------------------------

var toast_timer_show_time = 2 * 1000;//提示消息显示时间长度

// 添加 toast 样式内容
addCSS('.cuowu {  ' +
    'width: 100%; max-width:540px; height: 100%;  position: fixed;  z-index: 99999999;    top: 0; } ' +
    '.cuowu > div {  position: absolute;  width: 62%;  left: 50%;  margin-left: -31%;  background: rgba(0, 0, 0, 0.5);  margin-top: -1.78666667rem;  padding: 0.61333333rem 0;  top: 50%;  border-radius: 6px; } ' +
    '.cuowu > div span {  display: block;  text-align: center;  color: #fff;  line-height: 0.48rem;  margin-top: 0.21333333rem;  font-size: 15px; } ' +
    '.cuowu > div img {  display: block;  width: 1.06666667rem;  height: 1.09333333rem;  margin: 0 auto; } ' +
    '.cuowu .cw2 {  padding: 0.42666667rem 0.26666667rem;  line-height: 10px; } ' +
    '.load { width: 100%; height: 100%; position: fixed; left: 0; top: 0;z-index: 99999999; } ' +
    '.load .loading { width: 3.16rem; height: 3.16rem; position: relative; top: 50%; margin: -0.58rem auto 0 auto; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCMTEyNTRFNjgwQjExRTY5RTAwOUJGQ0M5MkVFQUFFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCMTEyNTRGNjgwQjExRTY5RTAwOUJGQ0M5MkVFQUFFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6REIwRThEM0Q2ODBCMTFFNjlFMDA5QkZDQzkyRUVBQUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6REIwRThEM0U2ODBCMTFFNjlFMDA5QkZDQzkyRUVBQUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5kmCiRAAAF00lEQVR42uxa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) no-repeat center center; background-size: 3rem; } .load .loadbg { width: 3.36rem; height: 3.36rem; background: url(data:image/png;base64,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) no-repeat center center; background-size: 3.36rem 3.36rem; animation: rotate 1s linear infinite; -webkit-animation: rotate 1s linear infinite; -moz-animation: rotate 1s linear infinite; -o-animation: rotate 1s linear infinite; }@keyframes rotate { 0% {  transform: rotate(0deg);  -webkit-transform: rotate(0deg);  -moz-transform: rotate(0deg);  -o-transform: rotate(0deg); } 100% {  transform: rotate(360deg);  -webkit-transform: rotate(360deg);  -moz-transform: rotate(360deg);  -o-transform: rotate(360deg); }}@-webkit-keyframes rotate { 0% {  transform: rotate(0deg);  -webkit-transform: rotate(0deg);  -moz-transform: rotate(0deg);  -o-transform: rotate(0deg); } 100% {  transform: rotate(360deg);  -webkit-transform: rotate(360deg);  -moz-transform: rotate(360deg);  -o-transform: rotate(360deg); }}@-moz-keyframes rotate { 0% {  transform: rotate(0deg);  -webkit-transform: rotate(0deg);  -moz-transform: rotate(0deg);  -o-transform: rotate(0deg); } 100% {  transform: rotate(360deg);  -webkit-transform: rotate(360deg);  -moz-transform: rotate(360deg);  -o-transform: rotate(360deg); }}@-o-keyframes rotate { 0% {  transform: rotate(0deg);  -webkit-transform: rotate(0deg);  -moz-transform: rotate(0deg);  -o-transform: rotate(0deg); } 100% {  transform: rotate(360deg);  -webkit-transform: rotate(360deg);  -moz-transform: rotate(360deg);  -o-transform: rotate(360deg); }}');
/***
 * 创建div元素并添加类样式
 * @param _className
 * @returns {___anonymous5333_5340}
 */
function createDivAddClassName(_className) {
    var _div = document.createElement("div");
    _div.className = _className;
    return _div;
}
/***
 * 消息提示Base函数
 * @param txtNode
 * @param _src
 * @param noImg
 */
function _tips(txtNode, _src, noImg, fn, stime) {
    var body = this.document.body
        || this.document.getElementsByTagName('body')[0];

    var _divs = document.getElementsByClassName('cuowu');
    if (_divs.length == 0) {

        var _div = createDivAddClassName('cuowu');
        var _div2 = createDivAddClassName('cw cw2');
        //判断是否显示图片
        if (noImg != 'yes') {
            var img = document.createElement("img");
            img.src = _src;
        }
        var span = document.createElement("span");

        var txt = document.createTextNode(txtNode);

        span.appendChild(txt);
        //判断是否显示图片
        if (noImg != 'yes') {
            _div2.appendChild(img);
        }
        _div2.appendChild(span);
        _div.appendChild(_div2);
        body.appendChild(_div);
    } else {
        var _div = _divs[0];
        var _div2 = _div.getElementsByTagName('div')[0];
        var _span = _div.getElementsByTagName('span')[0];
        var _imgs = _div.getElementsByTagName('img');
        var _img;
        //判断是否显示图片
        if (noImg != 'yes') {
            if (_imgs.length == 0) {
                _img = document.createElement("img");
            } else {
                _img = _imgs[0];
            }
            _img.src = _src;
        }
        //判断是否显示图片
        if (noImg != 'yes') {
            _span.parentNode.removeChild(_span);
            _span = document.createElement("span");
            var txt = document.createTextNode(txtNode);
            _span.appendChild(txt);
            _div2.appendChild(_img);
            _div2.appendChild(_span);
        } else {
            if (_imgs.length != 0) {
                _img = _imgs[0];
                _img.parentNode.removeChild(_img);
            }
            _span.innerHTML = txtNode;
        }
        _div.style.display = 'block';
    }
    if (stime) {
        toast_timer_show_time = stime;
    }
    //延时隐藏消息提示
    setTimeout(function () {
        _div.style.display = 'none';
        if ("function" == typeof fn) {
            fn();
        }
    }, toast_timer_show_time);
}
function toast(txtNode, fn) {
    _tips(txtNode, null, 'yes', fn, null);
}
function toast(txtNode, fn, showtime) {
    _tips(txtNode, null, 'yes', fn, showtime);
}
function _errorTips(txtNode) {
    _tips(txtNode, '/res/img/iconfont-cuowutishi@1x.png');
}
function _warningTips(txtNode) {
    _tips(txtNode, '/res/img/iconfont-iconfontcolor100-copy@1x.png');
}
function _successTips(txtNode) {
    _tips(txtNode, '/res/img/iconfont-success@1x.png');
}
//---------waiting---------------
function toastWaiting() {
    var _load = document.getElementById('loadingwrapdiv');
    if (_load != undefined) {
        _load.style.display = 'block';
    } else {
        var _body = this.document.body
            || this.document.getElementsByTagName('body')[0];
        _load = createDivAddClassName('load');
        _load.id = 'loadingwrapdiv';
        var _loading = createDivAddClassName('loading');
        var _loadbg = createDivAddClassName("loadbg");
        _load.appendChild(_loading);
        _loading.appendChild(_loadbg);
        _body.appendChild(_load);
    }
}

function toastWaitingColse() {
    var _load = document.getElementById('loadingwrapdiv');
    if (_load) {
        _load.style.display = 'none';
    }
}