import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate, useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { AuthContext } from "../context/AuthContext";

const SingleProduct = () => {
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
          <li className="list-inline-item selected">
            <i className="fa fa-star"></i>
          </li>
        );
      } else {
        stars.push(
          <li className="list-inline-item">
            <i className="fa fa-star"></i>
          </li>
        );
      }
    }
    return stars;
  };

  const handleBuyNow = async () => {
    if (!user) {
      return navigate("/login?redirectTo=product/" + id);
    }

    const {data} = await axiosInstance.post('/checkout', {
      amount: details?.price
    })

    console.log(data)
    var options = {
      key: 'rzp_test_J8xH3SkkAi6uxe',
      amount: data?.order?.amount,
      currency: 'INR',
      name: 'bhoom',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: data?.order?.id,
      callback_url: 'http://localhost:8000/payment/verification',
      prefill: {
        name: 'Tridib Roy',
        email: 'tridib.kumar@example.com',
        contact: '9000090000',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const handleAdd = async () => {
    try {
      const {data} = await axiosInstance.post('/addtocart', {
        productId:id,
        quantity: 1,
        price: details?.price
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section class="section bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="product-details">
                <h1 class="product-title">{details?.name}</h1>
                <div class="product-meta">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <i class="fa fa-folder-open-o"></i> Category
                      <a href="category.html">{details?.category}</a>
                    </li>
                  </ul>
                </div>

                <div class="product-slider">
                  {details?.images?.length < 2 ? (
                    <div class="product-slider-item my-4">
                      <img
                        class="img-fluid w-100"
                        src={details?.images[0].url}
                        alt="product-img"
                      />
                    </div>
                  ) : (
                    <Slider {...settings}>
                      {details?.images?.map((item, i) => (
                        <div
                          key={i}
                          class="product-slider-item my-4"
                          data-image={item?.url}
                        >
                          <img
                            class="img-fluid w-100"
                            src={item?.url}
                            alt="product-img"
                          />
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>

                <div class="content mt-5 pt-5">
                  <ul
                    class="nav nav-pills justify-content-center"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
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

                    <li class="nav-item">
                      <a
                        class="nav-link"
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
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <h3 class="tab-title">Product Description</h3>
                      <div dangerouslySetInnerHTML={{__html: details?.description}}></div>
                    </div>

                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <h3 class="tab-title">Product Review</h3>
                      <div class="product-review">
                        {!details?.reviews?.length ? (
                          <div style={{ marginBottom: 20 }}>
                            <h3>Be the First one to be a reviewer</h3>
                          </div>
                        ) : (
                          details?.reviews?.map((item, i) => (
                            <div class="media">
                              <img
                                src="images/user/user-thumb.jpg"
                                alt="avater"
                              />
                              <div class="media-body">
                                <div class="ratings">
                                  <ul class="list-inline">
                                    {renderRatings(item.rating)}
                                  </ul>
                                </div>
                                <div class="name">
                                  <h5>{item?.name}</h5>
                                </div>
                                <div class="date">
                                  {/* <p>Mar 20, 2018</p> */}
                                </div>
                                <div class="review-comment">
                                  <p>{item?.comment}</p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}

                        <div class="review-submission">
                          <h3 class="tab-title">Submit your review</h3>

                          <div class="rate">
                            <div class="starrr"></div>
                          </div>
                          <div class="review-submit">
                            <form action="#" method="POST" class="row">
                              <div class="col-lg-6 mb-3">
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  class="form-control"
                                  placeholder="Name"
                                  required
                                />
                              </div>
                              <div class="col-lg-6 mb-3">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  class="form-control"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                              <div class="col-12 mb-3">
                                <textarea
                                  name="review"
                                  id="review"
                                  rows="6"
                                  class="form-control"
                                  placeholder="Message"
                                  required
                                ></textarea>
                              </div>
                              <div class="col-12">
                                <button type="submit" class="btn btn-main">
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
            <div class="col-lg-4">
              <div class="sidebar">
                <div class="widget price text-center">
                  <h4>Price</h4>
                  <p>&#8377;{details?.price}</p>
                </div>
                <div
                  class="widget user text-center"
                  style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 15 }}
                >
                  <ul
                    class="list-inline mt-20"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <li class="list-inline-item">
                      <button
                        onClick={handleBuyNow}
                        style={{ textWrap: "nowrap" }}
                        class="btn btn-offer d-inline-block btn-warning ml-n1 my-1 px-lg-4 px-md-3"
                      >
                        Buy Now
                      </button>
                    </li>

                    <li class="list-inline-item">
                      <button onClick={handleAdd}
                        class="btn btn-contact d-inline-block btn-danger px-lg-5 my-1 px-md-3"
                      >
                        Cart
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
