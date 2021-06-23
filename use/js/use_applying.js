$(function() {
    $.ajax({
        url: 'http://localhost:3000/useing/public',
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                data[i].img = data[i].img.replace(/192.168.1.13/g, 'localhost')
                if (data[i].info_ty === undefined) {
                    console.log(data[i]);
                    data.splice(i, 1)
                    console.log(data);
                }
            }
            var mod = doT.template($('#txt').html())
            $('.mian_ul').html(mod(data))
                // console.log(mod);

        }
    })
})