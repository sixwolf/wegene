/**
 * Created by ������ on 2016/9/3.
 */
$(function () {
    //�����������˵�
$('.navMiddle li').each(function () {
    $(this).on('mouseenter', function () {
        $(this).children('div').show();
    });
    $(this).on('mouseleave', function () {
        $(this).children('div').hide();
    })
});

    })