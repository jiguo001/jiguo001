// 验证倒计时
var i = 10;
var n = '获取验证码';
var s;
$('button').eq(1).click(function(e) {
        $('button').eq(1).text(i + '秒后获取验证码').attr('disabled', true);
        s = setInterval(function() {
            i--;
            if (i > 0) {
                console.log(i);
                $('button').eq(1).text(i + '秒后获取验证码');
            } else {
                clearInterval(s);
                $('button').eq(1).text(n).attr('disabled', false);
                i = 10;
            }
        }, 1000)
        return false;
    })
    // 文本框验证
    // 手机
$('input').eq(0).blur(function() {
    var shou = /^1[3|4|5|6|7|8|9]\d{9}$/g;
    if (!shou.test($(this).val())) {
        alert('请输入正确的手机号!');
        return
    }
});
// 图片码
$('input').eq(1).blur(function() {
    if ($(this).val() != 'r2b7') {
        alert('请输入正确的验证码')
        return
    }
});
// 用户名
$('input').eq(3).blur(function() {
    var yong = /^(\w|[\u4e00-\u9fa5]){4,8}$/g;
    if (!yong.test($(this).val())) {
        alert('请输入正确的用户名!');
        return
    }

});
// 密码
$('input').eq(4).blur(function() {
    var mi = /^\w{6,12}$/g;
    if (!mi.test($(this).val())) {
        alert('密码格式不正确！');
        return
    }

});
// 确认密码
$('input').eq(5).blur(function() {
    if ($(this).val() != $('input').eq(5).val()) {
        alert('请重新确认密码');
        return
    }

});
// 提交
$('#form1').submit(function() {
    $.ajax({
        url: 'http://localhost:3000/users/register',
        type: 'POST',
        data: {
            phone: $('input').eq(0).val(),
            code: $('input').eq(1).val(),
            username: $('input').eq(3).val(),
            password: $('input').eq(4).val(),
            // phone: '18755545444',
            // code: 'r2b7',
            // username: 'uiodpp',
            // password: '12345678'
        },
        dataType: 'JSON',
        success: function(data) {
            alert(data.msg);
        },
        error: function(msg) {
            console.log(msg);
        }
    })
    return false;
})

// $('.subBtn').on('click', function(e) {
//     console.log(1);
//     return false
// })