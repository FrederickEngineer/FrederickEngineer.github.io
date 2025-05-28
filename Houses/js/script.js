$(function () {

  // 読み込み完了時、開始。
  $(document).ready(function () {
    $("#sliderArea .regular").slick({
      fade: true,    // fedeオン
      arrows: false,         // 矢印表示・非表示
      autoplay: true, // 自動再生を設定
      autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
      dots: true,             // ドットインジケーターの表示 
      slidesToShow: 1,       // スライド表示数
      infinite: true         // 無限リピート オン・オフ
    });

    $("#slide-items .regular").slick({
      slidesToScroll: 1,
      slidesToShow: 4,
      centerMode: true,
      centerPadding: '10%',
      variableWidth: true
    });

  });

  // カールセルスライダー
  // スクロールイベント
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    $("#Section1.class1").each(function () {
      const ImgHeight = $(this).offset().top;

      // 条件式に合致する場合はis-activeを付与
      if (scroll + 150 > ImgHeight) {
        $("#Section1.class1 img").addClass("is-active");
        $("#Section1.class1 p").addClass("is-active");
      }
    });

    $("#Section1.class2").each(function () {
      const ImgHeight = $(this).offset().top;

      // 条件式に合致する場合はis-activeを付与
      if (scroll + 150 > ImgHeight) {
        $("#Section1.class2 img").addClass("is-active");
        $("#Section1.class2 p").addClass("is-active");
      }
    });

    $("#Section1.class3").each(function () {
      const ImgHeight = $(this).offset().top;

      // 条件式に合致する場合はis-activeを付与
      if (scroll + 150 > ImgHeight) {
        $("#Section1.class3 img").addClass("is-active");
        $("#Section1.class3 p").addClass("is-active");
      }
    });

    if (scroll > 300) {
      $("header").addClass("small");
      $("#Menu2 ul>li>div").addClass("small");
    } else {
      $("header").removeClass("small");
    }
  });

  //ドロップダウンメニュー
  $("#Menu2").children("ul").children("li").hover(
    // 一時的にコメントアウト
    function () {
      $(this).children("div").stop().slideDown(600);
    },
    function () {
      $(this).children("div").stop().slideUp(200);
    }
  );

  $("#Footer-div1-button1").click(function (e) { 
    const $ul = $("#Footer-div1").children("ul");
    const $text = $("#Footer-div1-button1").children("p");

    $ul.slideToggle(300,function(){
      if($ul.is(":visible")){
        $ul.addClass('active');
        $text.text("グループ会社 －");
      }else{
        $ul.removeClass('active');
        $text.text("グループ会社 ＋");
      }
    });
  });

  $("#Footer-div1-button2").click(function (e) { 
    const $ul = $("#Footer-div2").children("ul");
    const $text = $("#Footer-div1-button2").children("p");

    $ul.slideToggle(300,function(){
      if($ul.is(":visible")){
        $ul.addClass('active');
        $text.text("関連サービス・サイト一覧 －");
      }else{
        $ul.removeClass('active');
        $text.text("関連サービス・サイト一覧 ＋");
      }
    });
  });
});
