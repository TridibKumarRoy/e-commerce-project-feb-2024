import React from "react";
import Slider from "react-slick";

const CategorySlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="client-slider-03">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="category-slider">
              <Slider {...settings}>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-bed"></i>
                    <h4>Bed</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-bed"></i>
                    <h4>Hotels</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-car"></i>
                    <h4>Cars</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-cutlery"></i>
                    <h4>Restaurants</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-mobile"></i>
                    <h4>Automobile</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-film"></i>
                    <h4>Gym</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-paragraph"></i>
                    <h4>Park</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-play"></i>
                    <h4>Play</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-building"></i>
                    <h4>Real Estate</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-shopping-bag"></i>
                    <h4>Shopping</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-bed"></i>
                    <h4>Electronics</h4>
                  </a>
                </div>
                <div className="item">
                  <a href="store.html">
                    <i className="fa fa-bed"></i>
                    <h4>Health</h4>
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
