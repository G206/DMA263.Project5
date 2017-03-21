// JavaScript Document

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
    $('.carousel-showmanymoveone .item').each(function(){
      var itemToClone = $(this);

      for (var i=1;i<6;i++) {
        itemToClone = itemToClone.next();

        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }

        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-"+(i))
          .appendTo($(this));
      }
    });

})(jQuery); // End of use strict
