import React, { useState, useEffect } from "react";
import { isValidURL, sliceText } from "../utils/helper";
import { DeleteIcon, EditIcon } from "../assets/SVG/Icons";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(
          `/products?page=${currentPage}`
        );
        console.log(response);
        setProducts(response.data.product);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, [currentPage, searchTerm, setProducts]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        const { data } = await axiosInstance.delete("/admin/products/" + id);
        // Remove the deleted product from the state
        setProducts(products.filter((product) => product._id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="page-inner">
          <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
            <div>
              <h3 className="fw-bold mb-3">Products</h3>
            </div>

            <div className="ms-md-auto py-2 py-md-0">
              <Link
                to="/dashboard/add-product"
                className="btn btn-primary btn-round"
              >
                Add Product
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card card-round">
                <div className="card-header d-flex justify-content-between">
                  <div className="card-head-row card-tools-still-right">
                    <h4 className="card-title">All Products</h4>
                  </div>

                  {/* <div>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div> */}
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive table-hover table-sales">
                        <table className="table">
                          <thead>
                            <tr>
                              <th style={{ minWidth: 300 }}>Name</th>
                              <th style={{ minWidth: 220 }}>Category</th>
                              <th
                                style={{ minWidth: 150 }}
                                className="text-end"
                              >
                                In Stock
                              </th>
                              <th className="text-end">Price</th>
                              <th className="text-end">Rating</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            {products?.map((item, i) => (
                              <tr key={i}>
                                <td>
                                  <div className="d-flex">
                                    <div>
                                      <img
                                        width={40}
                                        height={40}
                                        style={{ borderRadius: "50%" }}
                                        src={
                                          isValidURL(item?.images[0]?.url)
                                            ? item?.images[0]?.url
                                            : "https://i.pinimg.com/originals/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.webp"
                                        }
                                        alt="product"
                                      />
                                    </div>

                                    <div
                                      className="info-user ms-3"
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                      }}
                                    >
                                      <div
                                        className="username"
                                        style={{ textTransform: "capitalize" }}
                                      >
                                        {item?.name}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>{item?.category}</td>
                                <td
                                  className={`text-end ${
                                    item?.Stock ? "text-success" : "text-danger"
                                  }`}
                                >
                                  {item?.Stock}
                                </td>
                                <td className="text-end">
                                  ₹{item?.price?.toFixed(2)}
                                </td>
                                <td className="text-end">{item?.ratings}</td>
                                <td className="d-flex gap-3">
                                  <Link to={'/dashboard/products/'+item?._id} className="btn btn-warning">
                                    <EditIcon />
                                  </Link>
                                  <button
                                    onClick={() => handleDelete(item?._id)}
                                    className="btn btn-danger"
                                  >
                                    <DeleteIcon />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end pe-3">
                  <ul className="pagination">
                    <li
                      className={`paginate_button page-item previous ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        key={index}
                        className={`paginate_button page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`paginate_button page-item next ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
