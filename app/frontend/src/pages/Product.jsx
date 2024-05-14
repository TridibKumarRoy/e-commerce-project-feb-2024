import React, { useContext, useEffect, useState } from "react";
import CategorySlider from "../components/products/CategorySlider";
import ProductList from "../components/products/ProductList";
import Search from "../components/products/Search";
import ProductWIthFilter from "../components/products/ProductWIthFilter";
import "jquery";
import { axiosInstance } from "../utils/axios";
import { ProductContext } from "../context/ProductContext";

const Product = () => {
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

      //  Count Up
      function counter() {
        var oTop;
        if ($(".counter").length !== 0) {
          oTop = $(".counter").offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
          $(".counter").each(function () {
            var $this = $(this),
              countTo = $this.attr("data-count");
            $({
              countNum: $this.text(),
            }).animate(
              {
                countNum: countTo,
              },
              {
                duration: 1000,
                easing: "swing",
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                },
              }
            );
          });
        }
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

  const { setProducts } = useContext(ProductContext);

  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axiosInstance.get(`/products?keyword=${search}`);
      setProducts(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <ProductWIthFilter search={search} setSearch={setSearch} />
    </>
  );
};

export default Product;
