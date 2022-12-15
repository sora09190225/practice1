new WOW().init();

/*ハンバーガーメニュー*/

$(function () {
  $('#js-hamburger').click(function () {
  //toggleClassでclassをつけたり外したりする
    $('body').toggleClass('.sp-global_menu')
  //attr()でaria-expandedがfalseの場合、thisはクリックした要素そのもの
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true)
      //jQueryでcss操作、アニメーションにはdisplayではなく、visibilityを使う
      $('#js-global-menu').css('visibility', 'visible')
      $('#js-global-menu').attr('area-hidden','false')
    } else {
      $(this).attr('aria-expanded', false)
      $('#js-global-menu').css('visibility', 'hidden')
      $('#js-global-menu').attr('area-hidden','true')
    }
  })
 });

 
  /*=================================================
アコーディオン
===================================================*/

  $(".faq__item__question").on("click", function () {
    $(this).next().slideToggle();
    //  this（クリックされた元の要素）のnext（次の要素）をslideToggleさせる
    $(this).children(".faq__item__answer").toggleClass("is-open");
  });

  /*=================================================
スムーススクロール
===================================================*/
  // jQuery('a[href^="#"]').on("click", function () {
  //   // alert("click!");

  //     var header = jQuery('.header').innerHeight();
  //     var id = jQuery(this).attr('href');

  //     if (id != '#'){
  //       var position = jQuery(id).offset().top - header
  //     }

  //    jQuery('html,body').animate({
  //     scrollTop:position
  //      },
  //       300);
  // });

/*==================================================
スライダー
===================================================*/

const swiper = new Swiper('.swiper', {
  // Optional parameters
  width:322,
  loop: true,
  spaceBetween: 40,
  loopedSlides: 5,
  speed: 500,//スライドのスピード
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false,
  },

  autoplay: {
    speed: 5000 //自動再生のスピード
},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


/*=================================================
ajax
===================================================*/

let $form = $("#js-form");
$form.submit(function(e) { 
  e.preventDefault();
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $("#js-success").slideDown()
        }, 
        200: function() { 
          $form.slideUp()
          $("#js-error").slideDown()
          //送信に失敗したときの処理 
        }
      } 
    });
  }); 
  
  

  