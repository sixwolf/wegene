$(function () {


//猿人图以及脚下图
// 实现思路:就用一张大图片，然后div的宽高设置成一个小图片的宽高，
    //然后每隔一段时间往上走一个图片的高度，到最后一张返回第一张，
    //循环往复
    var evopic = document.getElementById('evolutionpic');

    var circle1 = document.getElementById('circle1');
    var circle2 = document.getElementById('circle2');
    var circle3 = document.getElementById('circle3');

    var count = 0;
//猿人轮播图
    setInterval(function () {
        count++;
        evopic.style.top = -432 * (count % 5) + 'px';
    }, 1000);
//猿人轮播图完成

//猿人脚下轮播图
    setInterval(function () {
        count++;
        circle1.style.top = -146 * (count % 24) + 'px';
    }, 200);
    setInterval(function () {
        count++;
        circle2.style.top = -146 * (count % 24) + 'px';
    }, 100);
    setInterval(function () {
        count++;
        circle3.style.top = -146 * (count % 24) + 'px';
    }, 50);
//猿人脚下轮播图完成

//合作伙伴部分动画效果
//    实现思路:合作伙伴4个字分成4个div,每隔1秒从左侧出来一个字,用animate动画做.
        //当然前提条件是scrollTop大于一定量(此处约为1150).
        //此部分动画可能有点卡,因为有4个动画效果等15s就好了.
        // 简单方法就是将4个字作为整体向左移动,这样一个animate动画就好了

    var friendstotal = document.getElementById('friendstotal');
    var friendsone = document.getElementById('friendsone');
    var friendstwo = document.getElementById('friendstwo');
    var friendsthree = document.getElementById('friendsthree');
    var friendsfour = document.getElementById('friendsfour');
    var friendsfive= document.getElementById('friendsfive');

//检测结果右侧图片部分
    var resultRightPic = document.getElementById('resultRightPic');
//DNA链图部分
    var detectionLeftPic = document.getElementById('detectionLeftPic');

    window.onscroll = function () {
        console.log($(document).scrollTop());
        if ($(document).scrollTop() > 1150) {
            //$(function () {
                $(friendsfour).animate({
                    'left': '775px'
                },1000,function(){
                    $(this).animate({
                        'left': '705px'
                    },500,function(){
                        $(friendsthree).animate({
                            'left':'745px'
                        },1000,function(){
                            $(this).animate({
                                'left':'675px'
                            },500,function(){
                                $(friendstwo).animate({
                                    'left':'715px'
                                },1000,function(){
                                    $(this).animate({
                                        'left':'645px'
                                    },500,function(){
                                        $(friendsone).animate({
                                            'left':'685px'
                                        },1000,function(){
                                            $(this).animate({
                                                'left':'615px'
                                            },500,function(){
                                                friendstotal.style.display = 'none';
                                                friendsfive.style.display = 'block';
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
        }

        if($(document).scrollTop() > 450){
            console.log($(document).scrollTop());
            $(resultRightPic).animate({
                'bottom':'0px'
            },1000)
        }

        if($(document).scrollTop() > 800){
            //console.log($(document).scrollTop());
            $(detectionLeftPic).animate({
                'left':'0px'
            },1000)
        }
    }
//合作伙伴部分动画效果完成
//检测结果右侧图片部分完成
//DNA链图部分完成







})//此处括号为最大的function括号


