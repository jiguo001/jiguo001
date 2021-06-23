$(function() {
    $.ajax({
        url: 'http://localhost:3000/useing/public',
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
            console.log(data);
            var newdata = [];
            for (var i = 0; i < data.length; i++) {
                data[i].img = data[i].img.replace(/192.168.1.13/g, 'localhost')
                if (data[i].info_ty === '体验师专享') {
                    //     console.log(data[i]);
                    newdata.push(data[i])
                }
                // if (data[i].info_ty === '首发') {
                //     data[i].info_ty = '体验师专享'
                //     console.log(data[i]);
                // }
            }
            var mod = doT.template($('#txt').html())
            $('.mian_ul').html(mod(newdata))
                // console.log(mod);
        }
    })
})