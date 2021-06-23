$(function () {

    $.ajax({
        url: "http://localhost:3000/guid/hot",
        type: "GET",
        dateType: "JSON",
        success: function (date) {
            console.log(date);
            // console.log(date[0]);
            // // console.log(date[0][0]);
            // console.log(date[0].img);
            // var str = date[3].img;
            // var isrc = str.replace("192.168.1.64", "192.168.31.250")
            // console.log(isrc);
            // $('.lis').attr("src", isrc)
            // $('span').text(date[0].text)
            // date.each(function(index) {
            //     console.log(index);
            // })
            $.each(date, function (i, k) {
                var str = k.img;
                var txt = k.text;
                // console.log(str);
                // console.log(txt);
                var isrc = str.replace("192.168.1.64", "localhost");
                console.log(isrc);
                // console.log(isrc);
                var ndv = $("<div></div>")
                var nimg = $("<img>").attr("src", isrc);
                var np = $("<p></p>").text(txt);
                // console.log(nimg);
                ndv.append(nimg);
                ndv.append(np)
                $('.ctn').append(ndv);
                // console.log(np);
                // $('.ctn').append(nimg);
                // $('.ctn').append(np);
            })

        }
    })
})