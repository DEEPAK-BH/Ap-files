(function($){
  $(window).scroll(function(){
      var elem = $("#banner");
      var video = $(elem).find("video")[0];

      if (undefined !== video)
      {
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
