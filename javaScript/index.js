
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

    $(window).scroll(function () {
        var top = $(document).scrollTop();
        // language=JQuery-CSS
        var left = $(".leftDiv");
        var items = $(".section");
        var topItem = $("#top");

        var curId = "";
        var topOffset = topItem.offset().top;
        if (topOffset - 100 <= top) {
            curId = "#top";
        } else {
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
        } else {
            curlink.removeClass("cur");
        }
    });

    $.fn.smartFloat = function () {
        var position = function (element) {
            var top = element.position().top;// pos = element.css("position");
            $(window).scroll(function () {
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
                } else {
                    element.css({
                        position: "absolute",
                        top: top
                    });
                }
            });
        };
        return $(this).each(function () {
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
        if (index >= list.length - 1) {
            index = 0;
        } else {
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
    var lastSelected = $(".firstFilter a")[0];
    $(".firstFilter a").click(function () {
        var pre = $(".firstFilter_selected");
        if (pre !== this) {
            lastSelected = this;
            pre.removeClass("firstFilter_selected");
            this.classList.add("firstFilter_selected");
            $(".ccc").removeClass("ccc");
            var index = $(".firstFilterButton").index($(".firstFilter_selected")[0]);
            var list = $(".secondFilter");
            list[index].classList.add("ccc")
        }
    });

    $(".firstFilter a").mouseover(function () {

        var pre = $(".firstFilter_selected");
        if (pre !== this) {
            pre.removeClass("firstFilter_selected");
            this.classList.add("firstFilter_selected");
            $(".ccc").removeClass("ccc");
            var index = $(".firstFilterButton").index($(".firstFilter_selected")[0]);
            var list = $(".secondFilter");
            list[index].classList.add("ccc")
        }
    });
    var iscurrent = false
    $(".filter").mouseover(function () {
        iscurrent = true;
    });
    $(".filter").mouseleave(function () {
        if (iscurrent) {
            var pre = $(".firstFilter_selected");
            if (pre !== lastSelected) {
                pre.removeClass("firstFilter_selected");
                lastSelected.classList.add("firstFilter_selected");
                $(".ccc").removeClass("ccc");
                var index = $(".firstFilterButton").index($(".firstFilter_selected")[0]);
                var list = $(".secondFilter");
                list[index].classList.add("ccc")
            }
            iscurrent = false;
        }

    });
    var divSecond = $(".secondFilter");
    for (i = 0; i < divSecond.length; i++) {
        var li = $(divSecond[i]).find("a");
        for (j = 0; j < li.length; j++) {
            if (li.length - 2 === j || li.length - 1 === j) {
                $(li[j]).css("border-bottom", "0");
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

            if (index >= list.length - 1) {
                index = 0;
            } else {
                index = index + 1;
            }
            next = list[index];
            $(first).animate({
                opacity: '0.5'
            }, 10, function () {
                next.style.opacity = "0.5";
                first.style.display = "none";
                first.classList.remove("current");
                next.style.display = "list-item";
                next.classList.add("current");
                $(next).animate({
                    opacity: "1.0"
                }, 10)
            });
            var pageControl = $(".pageControlContent div");
            pageControl[list.index(next)].classList.remove("nomalPage");
            pageControl[list.index(next)].classList.add("selectedPage");
            pageControl[list.index(first)].classList.remove("selectedPage");
            pageControl[list.index(first)].classList.add("nomalPage");
        }

        var tt = setInterval(changeADImage, 5000);
        $(".banner").mouseover(function () {
            window.clearInterval(tt);
        });
        $(".banner").mouseout(function () {
            tt = setInterval(changeADImage, 5000);
        });
        var aPageItems = new Array();
        var ads = $("#ad_list").find("li");
        var pageControl = $(".pageControlContent")[0];
        var aa = (80 * ads.length + 30 * (ads.length - 1)) / 2;
        $(pageControl).css("width", (aa * 2) + "px");
        $(pageControl).css("marginLeft", -aa + "px");
        for (var i = 0; i < ads.length; i++) {
            var item = document.createElement("div");
            item.style.display = "inline-block";
            item.style.position = "absolute";
            $(item).css("left", (i * (110)) + "px");
            $(item).addClass("nomalPage");
            $(item).css({"width": "80px", "height": "5px"});

            if (i != ads.length - 1) {
                $(item).css("marginRight", "30px");
            } else {

                $(item).removeClass("nomalPage");
                $(item).addClass("selectedPage");
            }
            $(pageControl).append(item);
            aPageItems[i] = item;

            $(item).mouseover(function (item) {
                first = list.filter(".current")[0];
                var i = $(aPageItems).index(this);
                next = list[i];
                if (first === next) {
                    return
                }
                $(first).animate({
                    opacity: '0.5'
                }, 10, function () {
                    next.style.opacity = "0.5";
                    first.style.display = "none";
                    first.classList.remove("current");
                    next.style.display = "list-item";
                    next.classList.add("current");
                    $(next).animate({
                        opacity: "1.0"
                    }, 10)
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

    // 此处是为了适配 欧朋mac 浏览器
    // $("#ad_content").css({
    //     display: "block"
    //
    // });
    var getRandomColor = function () {
        return '#' +
            (function (color) {
                return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)])
                && (color.length == 6) ? color : arguments.callee(color);
            })('');
    };
    { // 最新消息的轮播
        var aNewADList = $(".image1");
        var degree = 360 / (aNewADList.length);
        var length = 60 / Math.tan((degree / 2 / 180) * Math.PI);
        for (i = 0; i < aNewADList.length; i++) {
            // aNewADList[i].style.backgroundColor = getRandomColor();
            var aaa = "rotateX(" + degree * i + "deg)  translate3d(0, 0, " + length + "px)";
            aNewADList[i].style.transform = aaa;

            $(aNewADList[i]).css({
                display: "inline-block",
                transform: aaa
            });
        }
        var timer;
        var rotate = -0;
        var sroute;

        function transformNewAD() {
            rotate = (rotate - degree);
            sroute = "rotateX(" + rotate + "deg)";
            $(".newAd").css({
                transform: sroute
            });
        }


        // $(window).blur(function () {
        //    console.log( $.backfaceVisibility)
        //     // if(document.visibilityState == hidden)
        //     window.clearInterval(timer)
        // })
        // $(window).focus(function () {
        //     console.log( $.backfaceVisibility)
        //     timer = setInterval(transformNewAD,5000)
        // })
        (function() {
            var lastTime = 0;
            var vendors = ['webkit', 'moz'];
            for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                    window[vendors[x] + 'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                    console.log(timeToCall)
                    var id = window.setTimeout(function() {
                        callback(currTime + timeToCall);
                    }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };
            }
            if (!window.cancelAnimationFrame) {
                window.cancelAnimationFrame = function(id) {
                    clearTimeout(id);
                };
            }
        }());
        var ti = 0;
        function animation() {

            ti++;
            if (ti > 300){
                ti = 0;
                transformNewAD()
                console.log("动画")
            }
            timer = requestAnimationFrame(animation);
        }
        animation();
        $("#top").mouseover(function () {
            cancelAnimationFrame(timer)
        });
        $("#top").mouseout(function () {
            timer = requestAnimationFrame(animation)
        });
    }

    {
        window.onbeforeunload = function(){
            console.log("刷新");
            window.scrollTo(0,0);
        };
    }
});



