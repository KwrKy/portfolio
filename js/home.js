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
  $("#list-subtitle").html("");
  $("#left-side-text").css("visibility", "visible");
}

function toggleScroll() {
  if ($(".audio-player-wrapper-home,#source-code,.create-content-container").hasClass("open")) {
    $("#spin-text-list").addClass("paused");
  } else if (!$(".audio-player-wrapper-home,#source-code,.create-content-container").hasClass("open")) {
    $("#spin-text-list").removeClass("paused");
  }
}

//combine these three into a more elegant solution
function moveNameMusic() {
  $("#list-subtitle").html("Some of the music I have composed.");
  $("#left-side-text").css("visibility", "hidden");
}

function moveNameCode() {
  $("#list-subtitle").html("Yep, that's what this page looks like under the hood.");
  $("#left-side-text").css("visibility", "hidden");
}

function moveNameCreate() {
  $("#list-subtitle").html("My other creative offerings.");
  $("#left-side-text").css("visibility", "hidden");
}

//music panels popout
$(function () {
  $("#list-music").click(function () {
    $("#media-container").css("zIndex", "0");
    $('.audio-player-wrapper-home').addClass('open');
    $('.video-player-wrapper').addClass('open');
    $('#close-media').addClass('open');
    moveNameMusic();
    toggleScroll();
  });
  $(function () {
    $("#close-media").click(function () {
      $("#media-container").css("zIndex", "-100");
      $('.audio-player-wrapper-home').removeClass('open');
      $('.video-player-wrapper').removeClass('open');
      $('#close-media').removeClass('open');
      resetLeft();
      toggleScroll();
    });
  });
});

//code panel popout
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

//create panel popout
$(function () {
  $("#list-create").click(function () {
    $("#create-container").css("zIndex", "100");
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
