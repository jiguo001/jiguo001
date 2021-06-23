$(function() {
    $.ajax({
        url: 'http://localhost:3000/useing/master',
        async: true,
        type: 'GET',
        dataType: 'JSON',
        success: function(data) {
            // var data1 = data.map((item, i) => {
            //     item = JSON.stringify(item)
            //     var x = item.replace(/\/\/192.168.1.13/g, '//localhost')
            //     item = JSON.parse(x)
            //     return item
            // });
            // console.log(data1);
            for (var i = 0; i < data.length; i++) {
                data[i].img = data[i].img.replace(/\/\/192.168.1.13/g, '//localhost')
                    //     console.log(data[i].img);
                if (data[i].info_ty === '体验师专享') {
                    data.splice(i, 1)
                }
            }
            // data.forEach((pro, i) => {
            //     if (pro.img) {
            //         pro.img = pro.img.replace(/\/\/192.168.1.13/g, '//localhost')
            //     }
            // if (data.info_ty === '体验师专享') {
            //     console.log(data);
            //     data.splice(i, 1)
            // }
            // }
            // });
            var mod = doT.template($('#txt').html())
            $('.mian_ul').html(mod(data))
                // console.log(mod);
        }
    })
})