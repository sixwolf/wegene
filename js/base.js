/**
 * Created by 张羽昆 on 2016/9/3.
 */
$(function () {
    //导航栏下拉菜单
$('.navMiddle li').each(function () {
    $(this).on('mouseenter', function () {
        $(this).children('div').show();
    });
    $(this).on('mouseleave', function () {
        $(this).children('div').hide();
    })
});

    })