import React, { useState, useEffect } from "react";
import { isValidURL, sliceText } from "../utils/helper";
import { DeleteIcon, EditIcon } from "../assets/SVG/Icons";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axios";

function parseDateString(dateString) {
  console.log(dateString);

  if (!dateString) return "---";
  const date = new Date(dateString);
  return date.toLocaleString();
}

const STATUS = [
  { label: "Pending" },
  { label: "Processing" },
  { label: "Shifted" },
  { label: "Delivered" },
];

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(`/admin/orders`);
        console.log(response);
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, [setOrders]);

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
                    <h4 className="card-title">All Orders</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive table-hover table-sales">
                        <table className="table">
                          <thead>
                            <tr>
                              <th style={{ minWidth: 300 }}>Customer</th>
                              <th style={{ minWidth: 220 }}>Items</th>
                              <th
                                style={{ minWidth: 150 }}
                                className="text-end"
                              >
                                Order At
                              </th>
                              <th className="text-end">Price</th>
                              <th style={{ minWidth: 250 }}>
                                shipping Address{" "}
                              </th>
                              <th
                                className="text-center"
                                style={{ minWidth: 150 }}
                              >
                                Status
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {orders?.map((item, i) => (
                              <tr key={i}>
                                <td>
                                  <div className="d-flex">
                                    <div>
                                      <img
                                        width={40}
                                        height={40}
                                        style={{ borderRadius: "50%" }}
                                        src={
                                          isValidURL(item?.user?.avatar?.url)
                                            ? item?.user?.avatar?.url
                                            : "https://i.pinimg.com/originals/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.webp"
                                        }
                                        alt="product"
                                      />
                                    </div>

                                    <div className="info-user ms-3">
                                      <div
                                        className="username"
                                        style={{ textTransform: "capitalize" }}
                                      >
                                        {item?.user?.name}
                                      </div>
                                      <div class="status">
                                        {item?.user?.email}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <tr>
                                    <td
                                      style={{
                                        minWidth: 100,
                                        fontWeight: "600",
                                      }}
                                    >
                                      Name
                                    </td>
                                    <td style={{ fontWeight: "600" }}>
                                      Quantity
                                    </td>
                                  </tr>

                                  {item?.orderItems?.map((data, i) => (
                                    <tr>
                                      <td>{data?.name}</td>
                                      <td className="text-end">
                                        {data?.quantity}
                                      </td>
                                    </tr>
                                  ))}
                                </td>
                                <td className="text-end">
                                  {parseDateString(item?.createdAt)}
                                </td>
                                <td className="text-end">
                                  ₹{item?.totalPrice?.toFixed(2)}
                                </td>
                                <td>{`${item?.shippingInfo?.address}, ${item?.shippingInfo?.city}, ${item?.shippingInfo?.state}, ${item?.shippingInfo?.country}, ${item?.shippingInfo?.pinCode}, ${item?.shippingInfo?.phoneNo},`}</td>
                                <td className="d-flex gap-3">
                                  <select
                                    className="form-control"
                                    name="category"
                                    value={item?.orderStatus}
                                  >
                                    <option disabled={true} value="">
                                      Select Status
                                    </option>
                                    {STATUS.map((item, i) => (
                                      <option value={item.label} key={i}>
                                        {item.label}
                                      </option>
                                    ))}
                                  </select>
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

export default Orders;
