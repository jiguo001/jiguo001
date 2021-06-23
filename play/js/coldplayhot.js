// 默认加载
$.ajax({
    url: 'http://localhost:3000/play/new',
    type: 'GET',
    dataType: 'JSON',
    success: function (data) {
        // var ind = 0;
        var strHtml = "";
        data.map(function (Item) {
            Item.map(function (nItem) {
                if (nItem.description == undefined) {
                    nItem.description = '暂无';
                } else {
                    nItem.description = nItem.description;
                }
                var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://localhost')
                strHtml += `<div class="tua">
        <img src="${Isrc}" alt="" width="200">
        <p>${nItem.text}</p>
        <p>${nItem.description}</p>
        <p>${nItem.price}<span>
        <img src="../img/xin.png" alt="">${nItem.like} 
        <img src="../img/reply.png" alt="">${nItem.words}</span>
        </p>
        </div>`

            })
            $('.kuwan').html(strHtml)
        })
    }
})
// 更多
$('.gengduo>a').click(function () {
    $(this).hide();
    $.ajax({
        url: 'http://localhost:3000/play/new',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            // var ind = 0;
            var strHtml = "";
            data.map(function (Item) {
                Item.map(function (nItem) {
                    if (nItem.description == undefined) {
                        nItem.description = '暂无';
                    } else {
                        nItem.description = nItem.description;
                    }
                    var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://localhost')
                    strHtml += `<div class="tua">
            <img src="${Isrc}" alt="" width="200">
            <p>${nItem.text}</p>
            <p>${nItem.description}</p>
            <p>${nItem.price}<span>
            <img src="../img/xin.png" alt="">${nItem.like} 
            <img src="../img/reply.png" alt="">${nItem.words}</span>
            </p>
            </div>`

                })
                $('.gengduo').html(strHtml)
            })
        }
    })
})