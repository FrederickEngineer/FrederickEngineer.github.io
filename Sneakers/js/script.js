$(function () {

    // カールセルスライダー
    $(".slide-items").slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '10%',
        variableWidth: true
    });


    // トグルメニューON
    $("#toggle-btn").click(function () {
        $("#Menu").toggleClass("open");
        $("#global-nav").toggleClass("open");
        $("#toggle-btn span").toggleClass("open");
    });

    // スクロールイベント
    $(window).scroll(function () {
        // スクロール量を取得
        const scroll = $(window).scrollTop();
        // 画面の高さを取得
        const windowHeight = $(window).height();

        $(".Feature-grid-child img").each(function() {
            // それぞれの.boxまでの高さを取得
            const boxHeight = $(this).offset().top;
            // 条件式に合致する場合はis-activeを付与
            if(scroll + 600 > boxHeight) {
              $(this).addClass("is-active");
            }
          });
    });
});