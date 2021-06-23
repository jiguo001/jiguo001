$(function () {
    // 焦点图
    $('.apply').animate({
        top: '0',
        right: '0',
        opacity: 1
    }, 1500)
    // 热门试用
    $.ajax({
        url: 'http://localhost:3000/play/hot',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            var ind = 0;
            var strHtml = "";
            data[ind].map(function (nItem) {
                var Isrc = nItem.img.replace(/http:\/\/192.168.1.64/g, 'http://localhost')
                strHtml += `<div class="lb">
                <img src="${Isrc}" alt="" width="200">
                <span class="shou">首发</span>
                <p>${nItem.description}</p>
                <span class="hong">2032</span>
                <span class="hong">20台</span>
                <p><span>1392</span>申请</p>
                <span>剩余时间2天</span>
                </div>`
            })
            $('.lun').html(strHtml)
        }
    })
    // 轮播
    $('.hot').slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        autoPage: true,
        effect: "left",
        autoPlay: true,
        vis: 3
    })
    // 发现酷玩
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
            <img src="./img/xin.png" alt="">${nItem.like} 
            <img src="./img/reply.png" alt="">${nItem.words}</span>
            </p>
            </div>`

                })
                $('.kuwan').html(strHtml)
            })
        }
    })
    // 点击加载更多
    $('.gengduo>a').click(function () {
        $(this).hide();
        $.ajax({
            url: 'http://localhost:3000/play/hot',
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
                <img src="./img/xin.png" alt="">${nItem.like} 
                <img src="./img/reply.png" alt="">${nItem.words}</span>
                </p>
                </div>`

                    })
                    $('.gengduo').html(strHtml)
                })
            }
        })
    })
})