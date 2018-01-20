/* Mobile href changes */

$(function () {
  var hrefs = ['#', 'music.html'];
  $(window).on('resize', function () {
    $('#musiclink').attr('href', function () {
      return hrefs[$(window).width() > 767 ? 0 : 1];
    });
  }).trigger('resize');
});

$(function () {
  var hrefs = ['#', 'code.html'];
  $(window).on('resize', function () {
    $('#codelink').attr('href', function () {
      return hrefs[$(window).width() > 767 ? 0 : 1];
    });
  }).trigger('resize');
});

$(function () {
  var hrefs = ['#', 'create.html'];
  $(window).on('resize', function () {
    $('#createlink').attr('href', function () {
      return hrefs[$(window).width() > 767 ? 0 : 1];
    });
  }).trigger('resize');
});



var windowWidth = window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

(function () {
  "use strict";

  var items = document.querySelectorAll('.spin-text-list-item'),
    result = document.getElementById('creatorD');

  function updateResultColor() {
    var textColor = window.getComputedStyle(this, ':before').getPropertyValue('background-color');
    result.style.color = textColor;
  }

  function resetResultColor() {
    result.style.color = 'white';
  }
  items.forEach(function (item) {
    item.addEventListener("mouseover", updateResultColor);
    item.addEventListener("mouseleave", resetResultColor);
  });
}());

function resetLeft() {
  if (windowWidth > 767) {
    $("#list-subtitle").html("");
    $("#left-side-text").css("visibility", "visible");
  }
}

function toggleScroll() {
  if (document.documentElement.clientWidth > 767) {
    if ($(".audio-player-wrapper-home,#source-code,.create-content-container").hasClass("open")) {
      $("#spin-text-list").addClass("paused");
    } else if (!$(".audio-player-wrapper-home,#source-code,.create-content-container").hasClass("open")) {
      $("#spin-text-list").removeClass("paused");
    }
  }
}
//combine these three into a more elegant solution
function moveNameMusic() {
  if (windowWidth > 767) {
    $("#list-subtitle").html("Some of the music I have composed.");
    $("#left-side-text").css("visibility", "hidden");
  }
}

function moveNameCode() {
  if (windowWidth > 767) {
    $("#list-subtitle").html("Yep, that's what this page looks like under the hood.");
    $("#left-side-text").css("visibility", "hidden");
  }
}

function moveNameCreate() {
  if (windowWidth > 767) {
    $("#list-subtitle").html("My other creative offerings.");
    $("#left-side-text").css("visibility", "hidden");
  }
}

//music panels popout
if (windowWidth > 767) {

  $(function () {
    $("#list-music").click(function () {
      $("#media-container").css("zIndex", "85");
      $('.audio-player-wrapper-home').addClass('open');
      $('.video-player-wrapper').addClass('open');
      $('#close-media').addClass('open');
      moveNameMusic();
      toggleScroll();
    });
    $(function () {
      $("#close-media").click(function () {
        $("#media-container").css("zIndex", "0");
        $('.audio-player-wrapper-home').removeClass('open');
        $('.video-player-wrapper').removeClass('open');
        $('#close-media').removeClass('open');
        resetLeft();
        toggleScroll();
      });
    });
  });
}

//code panel popout
if (windowWidth > 767) {
  $(function () {
    $("#list-code").click(function () {
      $('#source-code').addClass('open');
      $('#close-source').addClass('open');
      $("<pre />", {
        "html": '&lt;!DOCTYPE html>\n&lt;html>\n' +
          $("html")
          .html()
          .replace(/[<>]/g, function (m) {
            return {
              '<': '&lt;',
              '>': '&gt;'
            }[m]
          })
          .replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi, '<a href="$1">$1</a>') +
          '\n&lt;/html>',
        "class": "prettyprint"
      }).appendTo("#source-code");
      prettyPrint();
      moveNameCode();
      toggleScroll();
    });
    $(function () {
      $("#close-source").click(function () {
        $('#source-code').removeClass('open');
        $('#close-source').removeClass('open');
        resetLeft();
        toggleScroll();
      });
    });
  });
}

//create panel popout
if (windowWidth > 767) {
  $(function () {
    $("#list-create").click(function () {
      $("#create-container").css("zIndex", "0");
      $('.create-content-container').addClass('open');
      $('#close-create').addClass('open');
      moveNameCreate();
      toggleScroll();
    });
    $(function () {
      $("#close-create").click(function () {
        $("#create-container").css("zIndex", "-100");
        $('.create-content-container').removeClass('open');
        $('#close-create').removeClass('open');
        resetLeft();
        toggleScroll();
      });
    });
  });
}