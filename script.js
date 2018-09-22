var windowWidth = $(window).width();

$(window).resize(function() {
  if ($(window).width() != windowWidth) {
    windowWidth = $(window).width();
    location.reload();
  }
});

$(document).ready(function() {
  if ($(window).width() < 850) {
    $(".ellipse-menu").html('<circle cx =  "25" cy = "25" r = "25" />');
    $(".ellipse-menu").attr({
      height: "50px",
      width: "50px"
    });
  }

  $isMenuVisible = false;

  $(".button").click(function() {
    if (!$isMenuVisible) {
      $isMenuVisible = true;
      if ($(window).width() < 850) {
        anime({
          targets: ".contact",
          translateX: "-100vw",
          easing: "easeOutQuart",
          duration: 500,
          complete: function(anim) {
            $(".button").html("CANCEL");
            anime({
              targets: ".blue-background",
              backgroundColor: "#fff"
            });
            anime({
              targets: [".contact-phone", ".contact-email"],
              opacity: 1
            });
          }
        });
      } else if ($(window).width() > 850 && $(window).width() < 1200) {
        anime({
          targets: ".contact",
          translateX: "-60vw",
          easing: "easeOutQuart",
          duration: 500,
          complete: function(anim) {
            $(".button").html("CANCEL");
            anime({
              targets: ".blue-background",
              backgroundColor: "#fff"
            });
            anime({
              targets: [".contact-phone", ".contact-email"],
              opacity: 1
            });
          }
        });
      } else if ($(window).width() > 1200) {
        anime({
          targets: ".contact",
          translateX: "-40vw",
          easing: "easeOutQuart",
          duration: 500,
          complete: function(anim) {
            $(".button").html("CANCEL");
            anime({
              targets: ".blue-background",
              backgroundColor: "#fff"
            });
            anime({
              targets: [".contact-phone", ".contact-email"],
              opacity: 1
            });
          }
        });
      }
    } else {
      $isMenuVisible = false;
      anime({
        targets: [".contact-phone", ".contact-email"],
        opacity: 0
      });

      anime({
        targets: ".contact",
        translateX: "0",
        easing: "easeOutQuart",
        duration: 500,
        complete: function(anim) {
          $(".button").html("GET IN TOUCH");
          anime({
            targets: ".blue-background",
            backgroundColor: "#00ceff"
          });
        }
      });
    }
  });
});
