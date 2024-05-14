import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import ServiceCard from "../cards/ServiceCard";
import { Link } from "react-router-dom";

const ServiceWIthFilter = () => {
  const [seacrh, setSeacrh] = useState("");
  const {services} = useContext(ProductContext)
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
          <div class="col-lg-3 col-md-4">
            <div class="category-sidebar">
              <div class="widget category-list">
                <h4 class="widget-header">All Category</h4>
                <ul class="category-list">
                  <li>
                    <Link to=''>
                      Home Service
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Road Side Assistance
                    </Link>
                  </li>
                  
                </ul>
              </div>


              <div class="widget price-range w-100">
                <h4 class="widget-header">Price Range</h4>
                <div class="block">
                  <input
                    class="range-track w-100"
                    type="text"
                    data-slider-min="0"
                    data-slider-max="5000"
                    data-slider-step="5"
                    data-slider-value="[0,5000]"
                  />
                  <div class="d-flex justify-content-between mt-2">
                    <span class="value">$10 - $5000</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-9 col-md-8">
        
            <div class="product-grid-list">
              <div class="row">
                {services.map((item, i) => (
                  <div class="col-lg-4 col-md-6" key={i}>
                    <ServiceCard data={item} />
                  </div>
                ))}
              </div>
            </div>
            <div class="pagination justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="category.html"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="category.html">
                      1
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="category.html">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="category.html">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="category.html" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWIthFilter;
