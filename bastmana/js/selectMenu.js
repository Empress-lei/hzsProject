(function(window,$){
    Menu = function(){
        var thet = this;
        this.oneMenu = $(".firstMenu");
        this.oneMenu.each(function(i){
            thet._eachFirstMenu(this);
        });
        $(thet.menuNode).click(function(){
            if(1==this.level){
                thet.fristMenuNode(this);
            }else{
                this.child.stop();
                if(this.child.css("display")=="none"){
                    thet.showCss(this);
                }else{
                    thet.hideCss(this);
                }
                this.child.slideToggle();
            }
        });
        this.fristMenuNode = function(obj){
            if(thet.currentMenu == obj){
                if(thet.currentMenu.show){
                    thet.currentMenu.show = false;
                    thet.hideCurrentMenu(obj.level);
                }else{
                    thet.currentMenu.show = true;
                    thet.showCss(obj);
                    obj.child.slideDown();
                }
            }else{
                thet.hideCurrentMenu(obj.level);
                thet.showCss(obj);
                obj.child.slideDown();
                thet.currentMenu = obj;
                thet.currentMenu.show = true;
            }
            thet.currentMenu = obj;
        };
        this.hideCurrentMenu=function(level){
            var child = $(thet.currentMenu.child);
            child.stop();
            thet.hideCss($(thet.currentMenu));
            child.slideUp();
            if(level==1){
                var ccm = child.find(".otherMenu");
                thet.hideCss(ccm);

                var ccc = child.find(".otherChild");
                ccc.stop();
                ccc.slideUp();
            }
        };
        this.hideCss=function(obj){
            $(obj).children("span").removeClass("hidesub");
        };
        this.showCss=function(obj){
            $(obj).children("span").addClass("hidesub");
        };
        this.hideChildCss=function(obj){
            $(obj).removeClass("current");
        };
        this.showChildCss=function(obj){
            $(obj).addClass("current");
        };

        this.init = function(firstIndex,secondIndex){
            thet.currentMenu = this.oneMenu.get(firstIndex);
            thet.currentMenu.show = true;
            thet.secondMenu = thet.currentMenu.child.find(".leaf").get(firstIndex);
        };
        //this.init(0, 0);
    };
    Menu.prototype={
        /**
         * 叶子节点点击事件
         */
        clickDispatch:null,
        /**
         * 当前展示的一级菜单
         */
        currentMenu:{},
        /**
         * 当前展示的二级菜单
         */
        secondMenu:{},
        /**
         * 菜单节点
         */
        menuNode: new Array(),
        /**
         * 初始化一级菜单
         * @param mm
         */
        _eachFirstMenu:function (mm){
            var thet = this;
            mm.level = 1;
            if(this._isLeaf(mm)){
                $(mm).click(function(){
                    thet._dealLeaf(mm);
                });
            }else{
                this._dealMenu(mm);
            };
        },
        /**
         * 处理二级及以下菜单
         * @param m
         */
        _dealMenu:function(m){
            this.menuNode.push(m);
            var thet = this;
            var mm = $(m);
            var child = mm.next("div");
            if(child.size() == 1){
                m.child = child;
                $(m).addClass("otherMenu");
                child.addClass("otherChild");
                var obj = child.children("p").children("a");
                obj.each(function(){
                    this.uppath = (m.uppath?m.uppath+"|":"")+mm.text();
                    if(thet._isLeaf(this)){
                        this.level = m.level+1;
                        $(this).addClass("leaf");
                        $(this).click(function(){
                            if(this != thet.secondMenu){
                                thet.hideChildCss(thet.secondMenu);
                                thet.secondMenu=this;
                                thet.showChildCss(thet.secondMenu);
                            }

                            thet._dealLeaf(this);
                        });
                    }else{
                        var t = $(this).children("div:first-child").get(0);
                        if(t){
                            t.level = m.level+1;
                            thet._dealMenu(t);
                        };
                    };
                });
            };
        },

        /**
         * 是否叶子节点
         * @param leaf
         * @returns
         */
        _isLeaf:function(leaf){
            return !$(leaf).next("div").size();
        },
        /**
         * 处理leaf的点击事件
         * @param leaf
         */
        _dealLeaf:function(leaf){
            var level = leaf.level;
            if( typeof(this.clickDispatch) == "function"){
                try{
                    this.clickDispatch(leaf,level);
                }catch(e){}
            };
        }
    };
    window.Menu = Menu;
})(window,$);

$(function(){
    window.menu = new Menu();
    window.menu.clickDispatch= function(obj){
        var jobj = $(obj);
        var url =jobj.data("url");
        var path = obj.uppath+"&nbsp;&gt;&nbsp;"  +jobj.text();
        $("#pathBar").html(path);
        if(url)doUrlDispatch(url,null,false,"get");
        else alert("url is null");
    };
});
