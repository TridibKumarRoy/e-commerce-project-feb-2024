import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import ServiceCard from "../cards/ServiceCard";
import { Link } from "react-router-dom";

const ServiceWIthFilter = () => {
  const [seacrh, setSeacrh] = useState("");
  const { services } = useContext(ProductContext);

  const renderRatings = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <li className="list-inline-item selected">
            <i className="fa fa-star"></i>
          </li>
        );
      } else {
        stars.push(
          <li className="list-inline-item">
            <i className="fa fa-star"></i>
          </li>
        );
      }
    }
    return stars;
  };


  return (
    <section class="section-sm">
      <div class="container">
        {seacrh && (
          <div class="row">
            <div class="col-md-12">
              <div class="search-result bg-gray">
                <h2>Results For "Electronics"</h2>
                <p>123 Results on 12 December, 2017</p>
              </div>
            </div>
          </div>
        )}

        <div class="row">
          {/* <div class="col-lg-3 col-md-4">
            <div class="category-sidebar">
              <div class="widget category-list">
                <h4 class="widget-header">All Category</h4>
                <ul class="category-list">
                  <li>
                    <Link to="">Home Service</Link>
                  </li>
                  <li>
                    <Link to="">Road Side Assistance</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div class="col-lg-9 col-md-8">
            <div class="product-grid-list">
              <div class="row">
                {services.map((item, i) => (
                  <>
                    <div class="col-lg-4 align-self-center">
                      <Link to={"/service/"+item._id}>
                        <img
                          src={item?.images[0].url}
                          class="img-fluid"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div class="col-lg-8">
                      <div class="row">
                        <div class="col-lg-6 col-md-10">
                          <div class="ad-listing-content">
                            <div>
                              <Link to={"/service/"+item._id} class="font-weight-bold">
                                {item?.serviceName}
                              </Link>
                            </div>
                            <ul class="list-inline mt-2 mb-3">
                              <li class="list-inline-item">
                                <a href="category.html">
                                  
                                  <i class="fa fa-folder-open-o"></i>{" "}
                                  {item?.category}
                                </a>
                              </li>
                              
                            </ul>
                            <div dangerouslySetInnerHTML={{__html: item.description?.slice(0, 50)}}></div>
                          </div>
                        </div>
                        <div class="col-lg-6 align-self-center">
                          <div class="product-ratings float-lg-right pb-3">
                            <ul class="list-inline">
                              {renderRatings(item.ratings)}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWIthFilter;
