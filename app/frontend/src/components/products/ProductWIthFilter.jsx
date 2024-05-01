import React, { useState } from "react";
import { product_list } from "../../static/data";
import ProductCard from "../cards/ProductCard";

const ProductWIthFilter = () => {
  const [seacrh, setSeacrh] = useState("");
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
                    <a href="category.html">
                      Laptops <span>93</span>
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      Iphone <span>233</span>
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      Microsoft <span>183</span>
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      Monitors <span>343</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="widget category-list">
                <h4 class="widget-header">Nearby</h4>
                <ul class="category-list">
                  <li>
                    <a href="category.html">
                      New York <span>93</span>
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      New Jersy <span>233</span>
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      Florida <span>183</span>
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      California <span>120</span>
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      Texas <span>40</span>
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      Alaska <span>81</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="widget filter">
                <h4 class="widget-header">Show Produts</h4>
                <select>
                  <option>Popularity</option>
                  <option value="1">Top rated</option>
                  <option value="2">Lowest Price</option>
                  <option value="4">Highest Price</option>
                </select>
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

              <div class="widget product-shorting">
                <h4 class="widget-header">By Condition</h4>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    Brand New
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    Almost New
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    Gently New
                  </label>
                </div>
                <div class="form-check">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" value="" />
                    Havely New
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-8">
            <div class="category-search-filter">
              <div class="row">
                <div class="col-md-6 text-center text-md-left">
                  <strong>Short</strong>
                  <select>
                    <option>Most Recent</option>
                    <option value="1">Most Popular</option>
                    <option value="2">Lowest Price</option>
                    <option value="4">Highest Price</option>
                  </select>
                </div>
               
              </div>
            </div>
            <div class="product-grid-list">
              <div class="row mt-30">
                {product_list.map((item, i) => (
                  <div class="col-lg-4 col-md-6" key={i}>
                    <ProductCard data={item} />
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

export default ProductWIthFilter;
