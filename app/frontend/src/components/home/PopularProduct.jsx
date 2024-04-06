import React from "react";
import Slider from "react-slick";
import "../../../public/plugins/slick/slick-theme.css";
import "../../../public/plugins/slick/slick.css";
import { product_list } from "../../static/data";

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

  const renderRatings = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <li class="list-inline-item selected">
            <i class="fa fa-star"></i>
          </li>
        );
      } else {
        stars.push(
          <li class="list-inline-item">
            <i class="fa fa-star"></i>
          </li>
        );
      }
    }
    return stars;
  };

  return (
    <section class="popular-deals section bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2>Popular Products</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                magnam.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <Slider {...settings}>
              {product_list?.map((product, i) => (
                <div class="col-sm-12">
                  <div class="product-item bg-light">
                    <div class="card">
                      <div class="thumb-content">
                        <div class="price">${product?.price}</div>
                        <a href="single.html">
                          <img
                            style={{ height: 225, objectFit: "cover" }}
                            class="card-img-top img-fluid"
                            src={product.images[0].url}
                            alt={product.title}
                          />
                        </a>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="single.html">{product.title}</a>
                        </h4>
                        <ul class="list-inline product-meta">
                          <li class="list-inline-item">
                            <a href="single.html">
                              <i class="fa fa-folder-open-o"></i>
                              {product.category}
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="category.html">
                              <i class="fa fa-calendar"></i>
                              {product.date}
                            </a>
                          </li>
                        </ul>
                        <p class="card-text">{product.short_description}</p>
                        <div class="product-ratings">
                          <ul class="list-inline">
                            {renderRatings(product.rating)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
