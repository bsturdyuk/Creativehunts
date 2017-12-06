$(document).ready(function(){

  $('.menu-toggle').on('click', function(){
    $('.full-menu').toggleClass('full-menu--open');
  });

  // BS Column Height Match
  $('.box').matchHeight();

  //Category filter Feature
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');

    if(value == "all") {
      $('.filter').show('1000');
    } else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
    }

    $(".filter-button").removeClass("active");
    $(this).addClass("active");
  });

  scaleVideoContainer();
  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function() {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
  });
});

function scaleVideoContainer() {
  $('.homepage-hero-module').css('height', window.innerHeight + 5);
}

function initBannerVideoSize(element){
  $(element).each(function(){
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
  });

  scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element){

  var windowWidth = $(window).width(),
  windowHeight = $(window).height() + 5,
  videoWidth,
  videoHeight;

  $(element).each(function(el){
    var videoAspectRatio = $(this).data('height')/$(this).data('width');
    $(this).width(windowWidth);

    if(windowWidth < 1000){
      videoHeight = windowHeight;
      videoWidth = videoHeight / videoAspectRatio;
      $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
      $(this).width(videoWidth).height(videoHeight);
    }
  });
}
