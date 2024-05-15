import React, { useContext } from "react";
import Slider from "react-slick";
import "../../../public/plugins/slick/slick-theme.css";
import "../../../public/plugins/slick/slick.css";
import { product_list } from "../../static/data";
import ProductCard from "../cards/ProductCard";
import { ProductContext } from "../../context/ProductContext";

const PopularProduct = () => {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
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

  const {products} = useContext(ProductContext)

  return (
    <section className="popular-deals section bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Popular Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                magnam.

              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings}>
              {products?.slice(0, 5)?.map((product, i) => (
                <div key={i} className="col-sm-12">
                  <ProductCard data={product} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
