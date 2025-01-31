
// ISOTOPE FILTER
jQuery(document).ready(function ($) {

  if ($('.iso-box-wrapper').length > 0) {

    var $container = $('.iso-box-wrapper'),
      $imgs = $('.iso-box img');

    $container.imagesLoaded(function () {

      $container.isotope({
        layoutMode: 'fitRows',
        itemSelector: '.iso-box'
      });

      $imgs.load(function () {
        $container.isotope('reLayout');
      })

      // 🔥 Lọc mặc định: Chỉ hiển thị các phần tử có class .kho khi trang load
      $container.isotope({ filter: '.kho' });
      $(".filter-wrapper li a").removeClass("selected");
      $(".filter-wrapper li a[data-filter='.kho']").addClass("selected");

    });

    //filter items on button click

    $('.filter-wrapper li a').click(function () {

      var $this = $(this), filterValue = $this.attr('data-filter');

      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });

      // don't proceed if already selected 

      if ($this.hasClass('selected')) {
        return false;
      }

      var filter_wrapper = $this.closest('.filter-wrapper');
      filter_wrapper.find('.selected').removeClass('selected');
      $this.addClass('selected');

      return false;
    });

  }

});


// PRELOADER JS
$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});


// jQuery to collapse the navbar on scroll //
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
    {
      mobile: false
    });
  wow.init();


  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  // NIVO LIGHTBOX
  $('.iso-box-section a').nivoLightbox({
    effect: 'fadeScale',
  });


  // HOME BACKGROUND SLIDESHOW
  $(function () {
    jQuery(document).ready(function () {
      $('#home').backstretch([
        "resources/photo 2025/banner_1.jpg",
        "resources/photo 2025/banner_2.jpg",
        "resources/photo 2025/banner_3.jpg",
        "images/home-bg-slideshow3.jpg",
        "images/home-bg-slideshow4.jpg",
        "images/home-bg-slideshow5.jpg",
      ], { duration: 2500, fade: 750 });
    });
  })

});

