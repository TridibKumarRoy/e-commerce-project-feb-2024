import React, { useContext, useEffect, useState } from "react";
import { PRODUCT_CATEGORY, product_list } from "../../static/data";
import ProductCard from "../cards/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import { Link, useLocation } from "react-router-dom";

const ProductWIthFilter = ({ search, setSearch }) => {
  const { products, getProducts, productTotalPage } =
    useContext(ProductContext);
  const location = useLocation();

  const [page, setPage] = useState(1);

  const handleClear = () => {
    setSearch("");
    getProducts();
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const myParam = queryParams.get("page");
    setPage(myParam);
  }, [location]);

  useEffect(() => {
    getProducts(page);
  }, [page]);
  return (
    <section class="section-sm">
      <div class="container">
        {search && (
          <div class="row">
            <div class="col-md-12">
              <div
                class="search-result bg-gray"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* <h2>Results For "Electronics"</h2> */}
                <p>{products?.length} Results</p>

                <button
                  onClick={handleClear}
                  style={{
                    border: "none",
                    background: "transparent",
                    color: "red",
                    outline: "none",
                  }}
                >
                  Clear
                </button>
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
                  {PRODUCT_CATEGORY.map((item, i) => (
                    <li key={i}>
                      <a href="category.html">{item.label}</a>
                    </li>
                  ))}
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
                {products.map((item, i) => (
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
                    <Link
                      class="page-link"
                      to={page > 1 ? `/products?page=${page - 1}`: `/products?page=${1}`}
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </Link>
                  </li>
                  {Array.from({ length: productTotalPage })?.map((item, i) => (
                    <li class={`page-item ${i + 1 === page && "active"}`}>
                      <Link class="page-link" to={`/products?page=${i + 1}`}>
                        {i + 1}
                      </Link>
                    </li>
                  ))}

                  <li class="page-item">
                    <Link
                      class="page-link"
                      to={page < productTotalPage? `/products?page=${Number(page) + 1}`: `/products?page=${productTotalPage}`}
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </Link>
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
