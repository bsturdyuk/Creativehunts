$(document).ready(function(){

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
           icon     : "img/contact-arrow-orange-icon.png"
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
