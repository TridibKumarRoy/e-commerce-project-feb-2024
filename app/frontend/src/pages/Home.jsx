import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Landing from '../components/home/Landing'
import PopularProduct from '../components/home/PopularProduct'
import AllCategory from '../components/home/AllCategory'
import CTA from '../components/home/CTA'
import "jquery";

const Home = () => {
  useEffect(() => {
    (function ($) {
      "use strict";

      // navbarDropdown
      if ($(window).width() < 992) {
        $(".navigation .dropdown-toggle").on("click", function () {
          $(this).siblings(".dropdown-menu").animate(
            {
              height: "toggle",
            },
            300
          );
        });
      }

      $(window).on("scroll", function () {
        counter();
        //.Scroll to top show/hide
        var scrollToTop = $(".scroll-top-to"),
          scroll = $(window).scrollTop();
        if (scroll >= 200) {
          scrollToTop.fadeIn(200);
        } else {
          scrollToTop.fadeOut(100);
        }
      });
      // scroll-to-top
      $(".scroll-top-to").on("click", function () {
        $("body,html").animate(
          {
            scrollTop: 0,
          },
          500
        );
        return false;
      });

      $(".video-box").click(function () {
        var video =
          '<div class="embed-responsive embed-responsive-16by9 mb-4"><iframe class="embed-responsive-item" src="' +
          $(this).attr("data-video-url") +
          '" allowfullscreen></iframe></div>';
        $(this).parent(".video").replaceWith(video);
      });

      // niceSelect
      $("select:not(.ignore)").niceSelect();

      // tooltip
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });

      // bootstrap slider range
      $(".range-track").slider({});
      $(".range-track").on("slide", function (slideEvt) {
        $(".value").text(
          "$" + slideEvt.value[0] + " - " + "$" + slideEvt.value[1]
        );
      });
    })(jQuery);
  }, []);
  return (
    <>
      <Landing />
      <PopularProduct />
      {/* <AllCategory /> */}
      <CTA />
    </>
  )
}

export default Home
