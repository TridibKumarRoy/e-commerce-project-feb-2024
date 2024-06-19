import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { AuthContext } from "../context/AuthContext";

function parseDateString(dateString) {
  console.log(dateString);

  if (!dateString) return "---";
  const date = new Date(dateString);
  return date.toLocaleString();
}


const ServiceReq = () => {
  const [myOrders, setMyOrders] = useState([]);
  const {user} = useContext(AuthContext)
  const getMyOrders = async () => {
    try {
      const { data } = await axiosInstance.get("/orders/me");
      setMyOrders(data?.orders);
      console.log(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyOrders();
  }, []);
  return (
    <section class="dashboard section">
      <div class="container">
        <div class="row">
         
          <div class="col-12">
            <div class="widget dashboard-container my-adslist">
              <h3 class="widget-header">Service Request</h3>

              <table className="table">
                <thead>
                  <tr>
                    <th style={{ minWidth: 220 }}>Services</th>
                    <th style={{ minWidth: 150 }} className="text-end">
                      Order At
                    </th>
                    <th className="text-end">Price</th>
                    <th style={{ minWidth: 250 }}>shipping Address </th>
                    <th className="text-center" style={{ minWidth: 150 }}>
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {myOrders?.map((item, i) => (
                    <tr key={i}>
                     
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
                        </tr>

                        {item?.orderItems?.map((data, i) => (
                          <tr>
                            <td>{data?.serviceName}</td>
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
                      <td className="d-flex gap-3">{item.orderStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceReq;
