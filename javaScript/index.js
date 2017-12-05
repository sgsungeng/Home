
// window.addEventListener("scroll",function (e) {
//     var offSetY = document.documentElement.scrollTop || document .body.scrollTop;
//     var floatDiv = document.getElementsByClassName("fff");
//     var htmlHeight = document.body.offsetHeight;
//     var divOffSet = 603;
//     var botttomHtml = document.getElementsByClassName("pageBottom");
//
//     for(var i = 0;i < floatDiv.length; i++){
//         var d = floatDiv[i];
//         if(offSetY < 603){
//             divOffSet = divOffSet - offSetY;
//         // }else if (offSetY + d.height > htmlHeight - botttomHtml[0] - 10){
//         //     // divOffSet = htmlHeight - bo
//         }else{
//             divOffSet = 0;
//         }
//
//         d.top = divOffSet;
//     }
// })
$(document).ready(function () {
    // this.css("background-color","lightgray");
    // language=JQuery-CSS
    // $(".leftDiv a").click(function () {
    //     $(".leftDiv a").each(function () { $(this).css("background-color","lightgray"); $(this).css("color","black");});
    //     $(this).css("background-color","#02891D");
    //     $(this).css("color","white");
    // });

    $(window).scroll(function() {
        var top = $(document).scrollTop();
        // language=JQuery-CSS
        var left = $(".leftDiv");
        var items = $(".section");
        var topItem = $("#top");

        var curId = "";
        var topOffset = topItem.offset().top;
        if (topOffset -100 <= top) {
            curId = "#top";
        }else {
            // curId = ""
        }
        items.each(function () {
            var m = $(this);
            var itemsTop = m.offset().top;
            if (top > itemsTop - 50) {
                if (m.attr("id") !== undefined) {
                    curId = "#" + m.attr("id");
                } else {
                    return false;
                }
            }
        });

        var curlink = left.find(".cur");
        if (curlink === null) {
            $(".leftDiv a").each(function () {
                var tt = $(this);
                if (tt.href === curId) {
                    tt.addClass("cur");
                }
            });
            return;
        }
        if (curId) {
            if (curlink.attr("href") !== curId) {
                curlink.removeClass("cur");
                $(".leftDiv a").each(function () {
                    var tt = $(this);
                    // noinspection JSAnnotator
                    if (tt.attr("href") === curId) {
                        tt.addClass("cur");
                    } else {

                    }
                });
            }
        }else{
            curlink.removeClass("cur");
        }
    });

    $.fn.smartFloat = function() {
            var position = function(element) {
                var top = element.position().top;// pos = element.css("position");
                $(window).scroll(function() {
                    var scrolls = $(this).scrollTop();
                    if (scrolls > top) {
                        if (window.XMLHttpRequest) {
                            element.css({
                                position: "fixed",
                                top: 0
                            });
                        } else {
                            element.css({
                                top: scrolls
                            });
                        }
                    }else {
                        element.css({
                            position: "absolute",
                            top: top
                        });
                    }
                });
            };
            return $(this).each(function() {
                position($(this));
            });
    };

    $(".leftDiv").smartFloat();
    // 刷新bannner
    // banner图
    //
    // 搜索框

    $(".inputImage").click(function () {
        var value = $(".inputStyle")[0].value;
        alert(value + "\n搜索不到啊");
    });

    $(".pageControlContent div").click(function () {
        list = $("#ad_list").find("li");
        var items = $(".pageControlContent div");
        first = list.filter(".current")[0];
        index = list.indexOf(first);
        items[index].removeClass("selectedPage");
        items[index].addClass("nomalPage");
        if(index >= list.length - 1){
            index = 0;
        }else{
            index = index + 1;
        }
        items[index].classList.remove("nomalPage");
        items[index].classList.add("selectedPage");
        next = list[i];
        first.style.display = "none";
        first.classList.remove("current");
        next.style.display = "list-item";
        next.classList.add("current");
    });

    $(".firstFilter a").click(function () {
        var pre = $(".firstFilter_selected");
        if (pre !== this){
            pre.removeClass("firstFilter_selected");
            this.classList.add("firstFilter_selected");
            $(".ccc").removeClass("ccc");
            var index = $(".firstFilterButton").index($(".firstFilter_selected")[0]);
            var list = $(".secondFilter");
            list[index].classList.add("ccc")
        }
    });
    var divSecond = $(".secondFilter");
    for(i = 0; i< divSecond.length; i++){
        var li = $(divSecond[i]).find("a");
        for(j = 0; j<li.length; j++){
            if ( li.length - 2 === j || li.length -1 === j){
                $(li[j]).css("border-bottom","0");
            }
        }
    }
    // banner图的切换
    {
        var list = $("#ad_list").find("li");
        var first;
        var index;
        var next;
        function changeADImage() {
            first = list.filter(".current")[0];
            index = list.index(first);

            if(index >= list.length - 1){
                index = 0;
            }else{
                index = index + 1;
            }
            next = list[index];
            $(first).animate({
                opacity: '0.5'
            },10,function () {
                next.style.opacity = "0.5";
                first.style.display = "none";
                first.classList.remove("current");
                next.style.display = "list-item";
                next.classList.add("current");
                    $(next).animate({
                    opacity: "1.0"
                },10)
            });
            var pageControl = $(".pageControlContent div");
            pageControl[list.index(next)].classList.remove("nomalPage");
            pageControl[list.index(next)].classList.add("selectedPage");
            pageControl[list.index(first)].classList.remove("selectedPage");
            pageControl[list.index(first)].classList.add("nomalPage");
        }
        var tt = setInterval(changeADImage,5000);
        $(".banner").mouseover(function () {
            window.clearInterval(tt);
        });
        $(".banner").mouseout(function () {
            tt = setInterval(changeADImage,5000);
        });
        var aPageItems = new Array();
        var ads = $("#ad_list").find("li");
        var pageControl = $(".pageControlContent")[0];
        var aa = (80 * ads.length + 30 * (ads.length - 1)) / 2;
        $(pageControl).css("width", (aa * 2) + "px");
        $(pageControl).css("marginLeft",-aa + "px");
        for(var i = 0; i< ads.length; i++){
            var item = document.createElement("div");
            item.style.display = "inline-block";
            item.style.position = "absolute";
            $(item).css("left",(i * (110)) + "px");
            $(item).addClass("nomalPage");
            $(item).css({"width":"80px","height":"5px"});

            if(i != ads.length - 1){
                $(item).css("marginRight","30px");
            }else{

                $(item).removeClass("nomalPage");
                $(item).addClass("selectedPage");
            }
            $(pageControl).append(item);
           aPageItems[i] = item;

            $(item).mouseover(function (item) {
                first = list.filter(".current")[0];

                console.log(aPageItems);
                console.log(self)
                var i = $(aPageItems).index(this);
                console.log(i);
                next = list[i];
                if(first === next){
                    return
                }
                $(first).animate({
                    opacity: '0.5'
                },10,function () {
                    next.style.opacity = "0.5";
                    first.style.display = "none";
                    first.classList.remove("current");
                    next.style.display = "list-item";
                    next.classList.add("current");
                    $(next).animate({
                        opacity: "1.0"
                    },10)
                });
                $(".selectedPage").each(function () {
                    var hhhh = $(aPageItems).index(this);
                    aPageItems[hhhh].classList.remove("selectedPage");
                    aPageItems[hhhh].classList.add("nomalPage");
                });
                this.classList.remove("nomalPage");
                this.classList.add("selectedPage");
            });
        }
    }
});



