    var $window = $(window),
      $fixedEl = $('.nav-container'),
      elTop = $fixedEl.offset().top;

    $window.on({
      resize: function () {
        elTop = $fixedEl.offset().top;
        $window.trigger('scroll');
      },
      scroll: function () {
        $fixedEl.toggleClass('fixed-nav', $window.scrollTop() + 0 > elTop);
        if ($(".nav-container").hasClass("fixed-nav")) {
          $('.nav-container .logo').addClass('nav-top');
          $('.nav-container .title').addClass('no-shadow');
          console.log("Yay!");
          $('.nav-container nav').addClass('nav-top');
        } else if (!$(".nav-container").hasClass("fixed-nav")) {
          $('.nav-container .logo').removeClass('nav-top');
          $('.nav-container nav').removeClass('nav-top');
          $('.nav-container .title').removeClass('no-shadow');
        }
      }
    });
