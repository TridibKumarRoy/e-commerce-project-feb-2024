import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { AuthContext } from "../context/AuthContext";
import { Modal, Button, Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const SingleProduct = () => {
  const {getCartItem} = useContext(CartContext)
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "India",
    pinCode: "",
    phoneNo: "",
  });

  const getSingleProduct = async () => {
    try {
      const { data } = await axiosInstance.get(`/admin/products/${id}`);
      console.log(data);
      setDetails(data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);

  const renderRatings = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <li className="list-inline-item selected" key={i}>
            <i className="fa fa-star"></i>
          </li>
        );
      } else {
        stars.push(
          <li className="list-inline-item" key={i}>
            <i className="fa fa-star"></i>
          </li>
        );
      }
    }
    return stars;
  };

  const handleBuyNow = () => {
    if (!user) {
      return navigate("/login?redirectTo=product/" + id);
    }
    setShowModal(true);
  };

  const handleModalClose = () => setShowModal(false);

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handlePayment = async (orderDetails) => {
    try {
      const { data } = await axiosInstance.post('/checkout', {
        amount: orderDetails.totalPrice
      });

      const options = {
        key: 'rzp_test_J8xH3SkkAi6uxe',
        amount: data?.order?.amount,
        currency: 'INR',
        name: 'bhoom',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: data?.order?.id,
        callback_url: 'http://localhost:8000/payment/verification',
        prefill: {
          name: user?.name,
          email: user?.email,
          contact: shippingInfo.phoneNo,
        },
        notes: {
          address: shippingInfo.address,
        },
        theme: {
          color: '#3399cc',
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
      itemsPrice: details?.price,
      taxPrice: 36,
      shippingPrice: 100,
      totalPrice: details?.price + 36 + 100,
      orderItems: [
        {
          product: id,
          name: details?.name,
          price: details?.price,
          image: details?.images[0]?.url || "sample",
          quantity: 1,
        },
      ],
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
    const orderDetails = {
      itemsPrice: details?.price,
      taxPrice: 36,
      shippingPrice: 100,
      totalPrice: details?.price + 36 + 100,
      orderItems: [
        {
          product: id,
          name: details?.name,
          price: details?.price,
          image: details?.images[0]?.url || "sample",
          quantity: 1,
        },
      ],
      shippingInfo,
    };
    handlePayment(orderDetails);
  };

  const handleAdd = async () => {
    try {
      await axiosInstance.post("/addtocart", {
        productId: id,
        quantity: 1,
        price: details?.price,
      });

      getCartItem()
      navigate('/cart')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="product-details">
                <h1 className="product-title">{details?.name}</h1>
                <div className="product-meta">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <i className="fa fa-folder-open-o"></i> Category
                      <a href="category.html">{details?.category}</a>
                    </li>
                  </ul>
                </div>

                <div className="product-slider">
                  {details?.images?.length < 2 ? (
                    <div className="product-slider-item my-4">
                      <img
                        className="img-fluid w-100"
                        src={details?.images[0].url}
                        alt="product-img"
                      />
                    </div>
                  ) : (
                    <Slider {...settings}>
                      {details?.images?.map((item, i) => (
                        <div
                          key={i}
                          className="product-slider-item my-4"
                          data-image={item?.url}
                        >
                          <img
                            className="img-fluid w-100"
                            src={item?.url}
                            alt="product-img"
                          />
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>

                <div className="content mt-5 pt-5">
                  <ul
                    className="nav nav-pills justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Product Details
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <h3 className="tab-title">Product Description</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: details?.description,
                        }}
                      ></div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <h3 className="tab-title">Product Review</h3>
                      <div className="product-review">
                        {!details?.reviews?.length ? (
                          <div style={{ marginBottom: 20 }}>
                            <h3>Be the First one to be a reviewer</h3>
                          </div>
                        ) : (
                          details?.reviews?.map((item, i) => (
                            <div className="media" key={i}>
                              <img
                                src="images/user/user-thumb.jpg"
                                alt="avater"
                              />
                              <div className="media-body">
                                <div className="ratings">
                                  <ul className="list-inline">
                                    {renderRatings(item.rating)}
                                  </ul>
                                </div>
                                <div className="name">
                                  <h5>{item?.name}</h5>
                                </div>
                                <div className="review-comment">
                                  <p>{item?.comment}</p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}

                        <div className="review-submission">
                          <h3 className="tab-title">Submit your review</h3>

                          <div className="rate">
                            <div className="starrr"></div>
                          </div>
                          <div className="review-submit">
                            <form action="#" method="POST" className="row">
                              <div className="col-lg-6 mb-3">
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="form-control"
                                  placeholder="Name"
                                  required
                                />
                              </div>
                              <div className="col-lg-6 mb-3">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="form-control"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                              <div className="col-12 mb-3">
                                <textarea
                                  name="review"
                                  id="review"
                                  rows="6"
                                  className="form-control"
                                  placeholder="Message"
                                  required
                                ></textarea>
                              </div>
                              <div className="col-12">
                                <button type="submit" className="btn btn-main">
                                  Sumbit
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget price text-center">
                  <h4 className="widget-title">
                    Price: ₹{details?.price.toFixed(2)}
                  </h4>
                  <Button
                    variant="primary"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                  <Button
                  style={{marginLeft: 10}}
                    variant="danger"
                    onClick={handleAdd}
                  >
                    + Cart
                  </Button>
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

export default SingleProduct;
