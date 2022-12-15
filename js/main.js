$(function () {
  $('#js-hamburger').click(function () {
  //toggleClassでclassをつけたり外したりする
    $('body').toggleClass('is-drawerActive')
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