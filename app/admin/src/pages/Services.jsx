import React, { useState, useEffect } from "react";
import { isValidURL, sliceText } from "../utils/helper";
import { DeleteIcon, EditIcon } from "../assets/SVG/Icons";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.get(
          `/admin/services?page=${currentPage}`
        );
        console.log(response);
        setServices(response.data.services);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Failed to fetch service", error);
      }
    };

    fetchServices();
  }, [currentPage, searchTerm, setServices]);

 

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      try {
        const { data } = await axiosInstance.delete("/admin/service/" + id);
        // Remove the deleted product from the state
        setServices(services.filter((service) => service._id !== id));
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
              <h3 className="fw-bold mb-3">Services</h3>
            </div>

            <div className="ms-md-auto py-2 py-md-0">
              <Link
                to="/dashboard/add-services"
                className="btn btn-primary btn-round"
              >
                Add Services
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

                              <th className="text-end">Price</th>
                              <th className="text-end">Rating</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            {services?.map((item, i) => (
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
                                        alt="service"
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
                                        {item?.serviceName}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>{item?.category}</td>

                                <td className="text-end">
                                  ₹{item?.price?.toFixed(2)}
                                </td>
                                <td className="text-end">{item?.ratings}</td>
                                <td className="d-flex gap-3">
                                  <Link
                                    to={"/dashboard/services/" + item?._id}
                                    className="btn btn-warning"
                                  >
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
