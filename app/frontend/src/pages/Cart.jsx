import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { axiosInstance } from "../utils/axios";
import { Modal, Button, Form } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
  const { cartItems, setCartItems, getCartItem, total } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const { data } = await axiosInstance.get("/cart"); // Assuming this endpoint fetches the current cart items
      setCartItems(data.items); // Update cart items in context
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.put(`/updatecart/${productId}`, {
        quantity,
      });
      getCartItem(); // Update cart items in context after successful update
      setLoading(false);
    } catch (error) {
      console.error("Error updating quantity:", error);
      setLoading(false);
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      setLoading(true);
      await axiosInstance.delete(`/removefromcart/${productId}`);
      const updatedCart = cartItems.filter(
        (item) => item.productId !== productId
      );
      getCartItem(); // Update cart items in context after successful removal
      setLoading(false);
    } catch (error) {
      console.error("Error removing item from cart:", error);
      setLoading(false);
    }
  };

  const [details, setDetails] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "India",
    pinCode: "",
    phoneNo: "",
  });

  const navigate = useNavigate();
  const handleBuyNow = () => {
    if (!user) {
      return navigate("/login");
    }
    setShowModal(true);
  };

  const handleModalClose = () => setShowModal(false);

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    try {
      const { data } = await axiosInstance.post("/checkout", {
        amount: total + 36 + 100,
      });

      const options = {
        key: "rzp_test_J8xH3SkkAi6uxe",
        amount: data?.order?.amount,
        currency: "INR",
        name: "bhoom",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data?.order?.id,
        callback_url: "http://localhost:8000/payment/verification",
        prefill: {
          name: user?.name,
          email: user?.email,
          contact: shippingInfo.phoneNo,
        },
        notes: {
          address: shippingInfo.address,
        },
        theme: {
          color: "#3399cc",
        },
        handler: function (response) {
          handleOrderSave(response);
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOrderSave = async (paymentResponse) => {
    const orderDetails = {
      itemsPrice: 100,
      taxPrice: 36,
      shippingPrice: 100,
      totalPrice: total + 36 + 100,
      orderItems: cartItems,
      shippingInfo,
      paymentInfo: {
        id: paymentResponse.razorpay_payment_id,
        status: "succeeded",
      },
    };

    try {
      await axiosInstance.post("/order/new", orderDetails);
      setShowModal(false);
      navigate("/thank-you", { state: { orderDetails } });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = () => {
    
    handlePayment();
  };
  return (
    <>
      <section className="dashboard section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="widget dashboard-container my-adslist">
                <h3 className="widget-header">My Cart</h3>
                <table className="table table-responsive product-dashboard-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Quantity</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((item, i) => (
                      <tr key={i}>
                        <td className="product-thumb">
                          <img
                            width="80px"
                            height="auto"
                            src={item?.productId?.images[0]?.url}
                            alt="product"
                          />
                        </td>
                        <td className="product-details">
                          <h3 className="title">{item?.productId?.name}</h3>
                        </td>
                        <td className="product-category">
                          <span className="categories">₹{item?.price * item.quantity}</span>
                        </td>
                        <td className="product-category">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                item?.productId?._id,
                                item.quantity - 1
                              )
                            }
                            disabled={loading || item.quantity <= 1}
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
                              className="bi bi-dash"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.5 8a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h7z"
                              />
                            </svg>
                          </button>
                          <span className="categories">{item?.quantity}</span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                item?.productId?._id,
                                item.quantity + 1
                              )
                            }
                            disabled={loading}
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
                              className="bi bi-plus"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                              />
                            </svg>
                          </button>
                        </td>
                        <td className="action" data-title="Action">
                          <div className="">
                            <ul className="list-inline justify-content-center">
                              <li className="list-inline-item">
                                <button
                                  onClick={() =>
                                    handleRemoveItem(item?.productId?._id)
                                  }
                                  className="delete"
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4 mt-4">
              <div className="sidebar">
                <div className="order-md-2 mb-4">
                  <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Cart Summary</span>
                  </h4>
                  <ul className="list-group mb-3">
                    {/* Add items summary here if needed */}
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Tax</span>
                      <strong>₹36</strong>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Shipping fee</span>
                      <strong>₹100</strong>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Total</span>
                      <strong>₹{total + 100+36}</strong>
                    </li>
                  </ul>

                  <button onClick={handleBuyNow} className="btn btn-primary">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={shippingInfo.state}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPinCode">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pinCode"
                value={shippingInfo.pinCode}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNo">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNo"
                value={shippingInfo.phoneNo}
                onChange={handleShippingChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit}>
            Proceed to Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
