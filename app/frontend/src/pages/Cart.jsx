import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section class="dashboard section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="widget dashboard-container my-adslist">
              <h3 class="widget-header">My Ads</h3>
              <table class="table table-responsive product-dashboard-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Quantity</th>
                    <th class="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="product-thumb">
                      <img
                        width="80px"
                        height="auto"
                        src="images/products/products-1.jpg"
                        alt="image description"
                      />
                    </td>
                    <td class="product-details">
                      <h3 class="title">Macbook Pro 15inch</h3>
                    
                    </td>
                    <td class="product-category">
                      
                      <span class="categories">100</span>
                    </td>
                    <td class="product-category">
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                      </button>
                      <span class="categories">1</span>

                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </button>
                    </td>
                    <td class="action" data-title="Action">
                      <div class="">
                        <ul class="list-inline justify-content-center">
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                              class="delete"
                              href="dashboard-my-ads.html"
                            >
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="product-thumb">
                      <img
                        width="80px"
                        height="auto"
                        src="images/products/products-1.jpg"
                        alt="image description"
                      />
                    </td>
                    <td class="product-details">
                      <h3 class="title">Macbook Pro 15inch</h3>
                    
                    </td>
                    <td class="product-category">
                      
                      <span class="categories">100</span>
                    </td>
                    <td class="product-category">
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                      </button>
                      <span class="categories">1</span>

                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </button>
                    </td>
                    <td class="action" data-title="Action">
                      <div class="">
                        <ul class="list-inline justify-content-center">
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                              class="delete"
                              href="dashboard-my-ads.html"
                            >
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr><tr>
                    <td class="product-thumb">
                      <img
                        width="80px"
                        height="auto"
                        src="images/products/products-1.jpg"
                        alt="image description"
                      />
                    </td>
                    <td class="product-details">
                      <h3 class="title">Macbook Pro 15inch</h3>
                    
                    </td>
                    <td class="product-category">
                      
                      <span class="categories">100</span>
                    </td>
                    <td class="product-category">
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-dash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                      </button>
                      <span class="categories">1</span>

                      <button
                        style={{
                          background: "none",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-plus"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                      </button>
                    </td>
                    <td class="action" data-title="Action">
                      <div class="">
                        <ul class="list-inline justify-content-center">
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Delete"
                              class="delete"
                              href="dashboard-my-ads.html"
                            >
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="pagination justify-content-center">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="dashboard-my-ads.html"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="dashboard-my-ads.html">
                      1
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="dashboard-my-ads.html">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="dashboard-my-ads.html">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="dashboard-my-ads.html"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="col-lg-4 mt-4">
            <div class="sidebar">
              <div class="order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  <span class="text-muted">Your cart</span>
                  <span class="badge badge-secondary badge-pill">3</span>
                </h4>
                <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Product name</h6>
                      <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">$12</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Second product</h6>
                      <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">$8</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 class="my-0">Third item</h6>
                      <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">$5</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between bg-light">
                    <div class="text-success">
                      <h6 class="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span class="text-success">-$5</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                  </li>
                </ul>

                <form class="card p-2">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promo code"
                    />
                    <div class="input-group-append">
                      <button type="submit" class="btn btn-secondary">
                        Redeem
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
