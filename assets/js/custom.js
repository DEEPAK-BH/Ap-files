(function($){

  $('.video.col').on('click', function(){
      var url = $(this).data('youtube');
      url += '?autoplay=1';
      var screen = $('#video.screen');
      var iframe = $(screen).find('iframe');

      if ($(iframe).attr('src') === url)
      {
          _scrollToScreen();
          return;
      }

      $(iframe).attr('src', url);
      $(iframe).on('load', function(){
          _scrollToScreen();
      });

      function _scrollToScreen()
      {
        $('html, body').animate({
          scrollTop: $(screen).offset().top - 50
        }, 100);
      }
  });

  $(window).scroll(function(){
      var elem = $("#banner");
      var video = $(elem).find("video")[0];

      if (undefined !== video)
      {
        $(video).prop('muted', true);
        if(!isElementVisible(elem))
        {
            video.pause();
        }else {
            video.play();
        }
      }
  });

  function isElementVisible(element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
  }
}

})(jQuery);
