import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { AuthContext } from "../context/AuthContext";

const SingleService = () => {
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

  const getSingleService = async () => {
    try {
      const { data } = await axiosInstance.get(`/admin/service/${id}`);
      console.log(data);
      setDetails(data.service);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      getSingleService();
    }
  }, [id]);

  const renderRatings = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(
          <li key={i} className="list-inline-item selected">
            <i className="fa fa-star"></i>
          </li>
        );
      } else {
        stars.push(
          <li key={i} className="list-inline-item">
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleFormSubmit = async () => {
    const orderDetails = {
      servicePrice: details?.price,
      taxPrice: 36,
      visitingPrice: 100,
      totalPrice: details?.price + 36 + 100,
      serviceNames: [
        {
          name: details?.serviceName,
          description: details?.description,
        },
      ],
      shippingInfo,
      paymentInfo: {
        id: "sample payment info",
        status: "succeeded",
      },
    };

    try {
      await axiosInstance.post("/servicerequest/new", orderDetails);
      setShowModal(false);
      navigate("/thank-you");
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
                <h1 className="product-title" style={{ textTransform: "capitalize" }}>
                  {details?.serviceName}
                </h1>
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
                      <img className="img-fluid w-100" src={details?.images[0].url} alt="product-img" />
                    </div>
                  ) : (
                    <Slider {...settings}>
                      {details?.images?.map((item, i) => (
                        <div key={i} className="product-slider-item my-4" data-image={item?.url}>
                          <img className="img-fluid w-100" src={item?.url} alt="product-img" />
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>

                <div className="content mt-5 pt-5">
                  <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
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
                        Service Details
                      </a>
                    </li>

                    {/* <li className="nav-item">
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
                    </li> */}
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <h3 className="tab-title">Service Description</h3>
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
                            <div key={i} className="media">
                              <img src="images/user/user-thumb.jpg" alt="avater" />
                              <div className="media-body">
                                <div className="ratings">
                                  <ul className="list-inline">{renderRatings(item.rating)}</ul>
                                </div>
                                <div className="name">
                                  <h5>{item?.name}</h5>
                                </div>
                                <div className="date"></div>
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
                  <h4>Price</h4>
                  <p>&#8377;{details?.price}</p>
                </div>
                <div className="widget user text-center" style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 15 }}>
                  <ul className="list-inline mt-20" style={{ display: "flex", justifyContent: "center" }}>
                    <li className="list-inline-item">
                      <button
                        onClick={handleBuyNow}
                        style={{ textWrap: "nowrap" }}
                        className="btn btn-offer d-inline-block btn-warning ml-n1 my-1 px-lg-4 px-md-3"
                      >
                        Book Now
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={shippingInfo.city}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                value={shippingInfo.state}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                name="country"
                value={shippingInfo.country}
                onChange={handleInputChange}
                required
                disabled
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                name="pinCode"
                value={shippingInfo.pinCode}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNo"
                value={shippingInfo.phoneNo}
                onChange={handleInputChange}
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
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleService;
