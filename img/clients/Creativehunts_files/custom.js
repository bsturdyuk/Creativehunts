$(document).ready(function(){

  $('.menu-toggle').on('click', function(){
   $('.full-menu').toggleClass('full-menu--open');
  })


  // BS Column Height Match
  $('.box').matchHeight();


  //Category filter Feature
  $(".filter-button").click(function(){
       var value = $(this).attr('data-filter');

       if(value == "all")
       {
           //$('.filter').removeClass('hidden');
           $('.filter').show('1000');
       }
       else
       {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
           $(".filter").not('.'+value).hide('3000');
           $('.filter').filter('.'+value).show('3000');
       }
   });

   if ($(".filter-button").removeClass("active")) {
     $(this).removeClass("active");
   }
     $(this).addClass("active");



     // Map
    jQuery(function($){
        var longitude = 10.783178;
        var latitude = 106.695895;
        var canvas = "map";


        function randing_map(canvas, lan, lat){
          var myLatlng = new google.maps.LatLng(lan,lat);
          var myOptions = {
                      zoom: 17,
                      center: myLatlng,
                      scrollwheel: false,
                      navigationControl: false,
                      mapTypeControl: false,
                      scaleControl: false,
                      draggable: false,
                      mapTypeId: google.maps.MapTypeId.ROADMAP,
                      maxZoom   : 20,
                      disableDefaultUI: false
                  }
          var map = new google.maps.Map( document.getElementById(canvas), myOptions );
          var marker = new google.maps.Marker({
              position : myLatlng,
              map      : map,
              icon     : "img/arrow-icon.svg"
          });
          var styles = [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
          var infowindow = new google.maps.InfoWindow({
              content:"<div class='map_adresse'><div class='contact-img'><img src='img/logos/creativehunts-logo.svg' class='img-responsive'></div><div class='map_address'>38/38c tran cao van,<br> ward 6, district 3, hcmc, vietnam</div></div>"
          });

          map.setOptions({styles: styles});

          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
          });
        }
        randing_map(canvas, longitude, latitude);

    });

    //Contact Page Map Centering
    var hw = $('header').width() + 0;
    var mw = $('#map').width();
    var wh = $(window).height();
    var ww = $(window).width();

    $('#map').css({
        "max-width" : mw,
        "height" : wh
    });

    if(ww>1100){
         $('#map').css({
            "margin-left" : hw
        });
    }
});



// Video bg
//jQuery is required to run this code
$( document ).ready(function() {

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

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

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

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
