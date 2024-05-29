import React from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  return (
    <section class="dashboard section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="sidebar">
              <div class="widget user-dashboard-profile">
                <div class="profile-thumb">
                  <img
                    src="images/user/user-thumb.jpg"
                    alt=""
                    class="rounded-circle"
                  />
                </div>
                <h5 class="text-center">Samanta Doe</h5>
                <p>Joined February 06, 2017</p>
                <Link to="/my-profile" class="btn btn-main-sm">
                  Edit Profile
                </Link>
              </div>
              <div class="widget user-dashboard-menu">
                <ul>
                  <li class="active">
                    <a href="dashboard-my-ads.html">
                      <i class="fa fa-user"></i> My Ads
                    </a>
                  </li>
                  <li>
                    <a href="dashboard-favourite-ads.html">
                      <i class="fa fa-bookmark-o"></i> Favourite Ads{" "}
                      <span>5</span>
                    </a>
                  </li>
                  <li>
                    <a href="dashboard-archived-ads.html">
                      <i class="fa fa-file-archive-o"></i>Archeved Ads{" "}
                      <span>12</span>
                    </a>
                  </li>
                  <li>
                    <a href="dashboard-pending-ads.html">
                      <i class="fa fa-bolt"></i> Pending Approval<span>23</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <i class="fa fa-cog"></i> Logout
                    </a>
                  </li>
                  
                </ul>
              </div>

              <div
                class="modal fade"
                id="deleteaccount"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header border-bottom-0">
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body text-center">
                      <img
                        src="images/account/Account1.png"
                        class="img-fluid mb-2"
                        alt=""
                      />
                      <h6 class="py-2">
                        Are you sure you want to delete your account?
                      </h6>
                      <p>
                        Do you really want to delete these records? This process
                        cannot be undone.
                      </p>
                      <textarea
                        name="message"
                        id=""
                        cols="40"
                        rows="4"
                        class="w-100 rounded form-control"
                      ></textarea>
                    </div>
                    <div class="modal-footer border-top-0 mb-3 mx-5 justify-content-center">
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="widget dashboard-container my-adslist">
              <h3 class="widget-header">My Ads</h3>
              <table class="table table-responsive product-dashboard-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th class="text-center">Category</th>
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
                      <span class="add-id">
                        <strong>Ad ID:</strong> ng3D5hAMHPajQrM
                      </span>
                      <span>
                        <strong>Posted on: </strong>
                        <time>Jun 27, 2017</time>{" "}
                      </span>
                      <span class="status active">
                        <strong>Status</strong>Active
                      </span>
                      <span class="location">
                        <strong>Location</strong>Dhaka,Bangladesh
                      </span>
                    </td>
                    <td class="product-category">
                      <span class="categories">Laptops</span>
                    </td>
                    <td class="action" data-title="Action">
                      <div class="">
                        <ul class="list-inline justify-content-center">
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="View"
                              class="view"
                              href="category.html"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                              class="edit"
                              href="dashboard-my-ads.html"
                            >
                              <i class="fa fa-pencil"></i>
                            </a>
                          </li>
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
                        src="images/products/products-2.jpg"
                        alt="image description"
                      />
                    </td>
                    <td class="product-details">
                      <h3 class="title">Study Table Combo</h3>
                      <span class="add-id">
                        <strong>Ad ID:</strong> ng3D5hAMHPajQrM
                      </span>
                      <span>
                        <strong>Posted on: </strong>
                        <time>Feb 12, 2017</time>{" "}
                      </span>
                      <span class="status active">
                        <strong>Status</strong>Active
                      </span>
                      <span class="location">
                        <strong>Location</strong>USA
                      </span>
                    </td>
                    <td class="product-category">
                      <span class="categories">Laptops</span>
                    </td>
                    <td class="action" data-title="Action">
                      <div class="">
                        <ul class="list-inline justify-content-center">
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="View"
                              class="view"
                              href="category.html"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                              class="edit"
                              href="dashboard-my-ads.html"
                            >
                              <i class="fa fa-pencil"></i>
                            </a>
                          </li>
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
                        src="images/products/products-3.jpg"
                        alt="image description"
                      />
                    </td>
                    <td class="product-details">
                      <h3 class="title">Macbook Pro 15inch</h3>
                      <span class="add-id">
                        <strong>Ad ID:</strong> ng3D5hAMHPajQrM
                      </span>
                      <span>
                        <strong>Posted on: </strong>
                        <time>Jun 27, 2017</time>{" "}
                      </span>
                      <span class="status active">
                        <strong>Status</strong>Active
                      </span>
                      <span class="location">
                        <strong>Location</strong>Dhaka,Bangladesh
                      </span>
                    </td>
                    <td class="product-category">
                      <span class="categories">Laptops</span>
                    </td>
                    <td class="action" data-title="Action">
                      <div class="">
                        <ul class="list-inline justify-content-center">
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="View"
                              class="view"
                              href="category.html"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                              class="edit"
                              href="dashboard-my-ads.html"
                            >
                              <i class="fa fa-pencil"></i>
                            </a>
                          </li>
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
                        src="images/products/products-4.jpg"
                        alt="image description"
                      />
                    </td>
                    <td class="product-details">
                      <h3 class="title">Macbook Pro 15inch</h3>
                      <span class="add-id">
                        <strong>Ad ID:</strong> ng3D5hAMHPajQrM
                      </span>
                      <span>
                        <strong>Posted on: </strong>
                        <time>Jun 27, 2017</time>{" "}
                      </span>
                      <span class="status active">
                        <strong>Status</strong>Active
                      </span>
                      <span class="location">
                        <strong>Location</strong>Dhaka,Bangladesh
                      </span>
                    </td>
                    <td class="product-category">
                      <span class="categories">Laptops</span>
                    </td>
                    <td class="action" data-title="Action">
                      <div class="">
                        <ul class="list-inline justify-content-center">
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="View"
                              class="view"
                              href="category.html"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                              class="edit"
                              href="dashboard-my-ads.html"
                            >
                              <i class="fa fa-pencil"></i>
                            </a>
                          </li>
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
                      <span class="add-id">
                        <strong>Ad ID:</strong> ng3D5hAMHPajQrM
                      </span>
                      <span>
                        <strong>Posted on: </strong>
                        <time>Jun 27, 2017</time>{" "}
                      </span>
                      <span class="status active">
                        <strong>Status</strong>Active
                      </span>
                      <span class="location">
                        <strong>Location</strong>Dhaka,Bangladesh
                      </span>
                    </td>
                    <td class="product-category">
                      <span class="categories">Laptops</span>
                    </td>
                    <td class="action" data-title="Action">
                      <div class="">
                        <ul class="list-inline justify-content-center">
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="View"
                              class="view"
                              href="category.html"
                            >
                              <i class="fa fa-eye"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                              class="edit"
                              href="dashboard-my-ads.html"
                            >
                              <i class="fa fa-pencil"></i>
                            </a>
                          </li>
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
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
