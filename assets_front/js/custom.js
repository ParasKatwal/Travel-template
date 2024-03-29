$(document).ready(function(){

    $(".navbar-collapse").collapse('hide');

    $('a[href="#ex1"]').click(function (){
        $(this).modal({
            fadeDuration: 1000,
            fadeDelay: 0.50
        });
        return false;
    })

    $('.ct-slick-homepage').on('init', function(event, slick){
        $('.animated').addClass('activate fadeInUp');
    });   
  
    $('.ct-slick-homepage').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        prevArrow: '<div class="left"><span class="fa fa-angle-left"></span></div>',
        nextArrow: '<div class="right"><span class="fa fa-angle-right"></span></div>'
    });     
  
    $('.ct-slick-homepage').on('afterChange', function(event, slick, currentSlide) {
        $('.animated').removeClass('off');
        $('.animated').addClass('activate fadeInUp');
    });   
  
    $('.ct-slick-homepage').on('beforeChange', function(event, slick, currentSlide) {
        $('.animated').removeClass('activate fadeInUp');
        $('.animated').addClass('off');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          $('nav').fadeOut();
        } else {
          $('nav').fadeIn();
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
          $('.top_nav').fadeOut();
        } else {
          $('.top_nav').fadeIn();
        }
    });
    
    $('.collapse').collapse()

    $('.upcoming_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: '<div class="left"><span class="fa fa-angle-left"></span></div>',
        nextArrow: '<div class="right"><span class="fa fa-angle-right"></span></div>'
    });
    $('.testimonials_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    });
    $('.activity_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: '<div class="left"><span class="fa fa-angle-left"></span></div>',
        nextArrow: '<div class="right"><span class="fa fa-angle-right"></span></div>'
    });

    $(".diamond_insta").diamonds({
        size : 210,
        gap : 5,
        hideIncompleteRow : false,
        autoRedraw :true,
        itemSelector :".item"
    });
    
    $(window).scroll(function(e){ 
        var $el = $('.details_menu'); 
        if ($(this).scrollTop() > 620){ 
          $el.css({'position': 'fixed', 'top': '-20px', 'transition': '1s ease'}); 
        }
        if ($(this).scrollTop() < 620){
          $el.css({'position': 'absolute', 'top': '20px'}); 
        } 
    });

    $('.photo_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        prevArrow: '<div class="left"><span class="fa fa-angle-left"></span></div>',
        nextArrow: '<div class="right"><span class="fa fa-angle-right"></span></div>'
    });

    $('.details_menu a' ).on( 'click', function(e){
        var href = $(this).attr( 'href' );    
        $( 'html, body' ).animate({
              scrollTop: $( href ).offset().top
        }, '0' );
        e.preventDefault();
    });

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});
  
$(document).ready(function() {
    if ($('[data-background]').length > 0) {
         $('[data-background]').each(function() {
            var $background, $backgroundmobile, $this;
            $this = $(this);
            $background = $(this).attr('data-background');
            $backgroundmobile = $(this).attr('data-background-mobile');
            if ($this.attr('data-background').substr(0, 1) === '#') {
                return $this.css('background-color', $background);
            } else if ($this.attr('data-background-mobile') && device.mobile()) {
                return $this.css('background-image', 'url(' + $backgroundmobile + ')');
            } else {
                return $this.css('background-image', 'url(' + $background + ')');
            }
        });
    }
});