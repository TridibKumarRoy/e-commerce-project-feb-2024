import React from "react";
import { product_list } from "../../static/data";
import ProductCard from "../cards/ProductCard";

const ProductList = () => {
  return (
    <section class="stores section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h2>Our Product</h2>
            </div>
            <div class="block">
              <div class="row">
                {product_list.map((item, i) => (
                  <div class="col-md-4 col-sm-6">
                    <ProductCard data={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
