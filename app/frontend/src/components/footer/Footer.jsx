import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer section section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-7 offset-md-1 offset-lg-0 mb-4 mb-lg-0">
              <div className="block about">
                <img src="images/logo-footer.png" alt="logo" />
                <p className="alt-color">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-lg-2 offset-lg-1 col-md-3 col-6 mb-4 mb-lg-0">
              <div className="block">
                <h4>Site Pages</h4>
                <ul>
                  <li>
                    <a href="dashboard-my-ads.html">My Ads</a>
                  </li>
                  <li>
                    <a href="dashboard-favourite-ads.html">Favourite Ads</a>
                  </li>
                  <li>
                    <a href="dashboard-archived-ads.html">Archived Ads</a>
                  </li>
                  <li>
                    <a href="dashboard-pending-ads.html">Pending Ads</a>
                  </li>
                  <li>
                    <a href="terms-condition.html">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 offset-md-1 offset-lg-0 col-6 mb-4 mb-md-0">
              <div className="block">
                <h4>Admin Pages</h4>
                <ul>
                  <li>
                    <a href="category.html">Category</a>
                  </li>
                  <li>
                    <a href="single.html">Single Page</a>
                  </li>
                  <li>
                    <a href="store.html">Store Single</a>
                  </li>
                  <li>
                    <a href="single-blog.html">Single Post</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div className="block-2 app-promotion">
                <div className="mobile d-flex  align-items-center">
                  <a href="index.html">
                    <img src="images/footer/phone-icon.png" alt="mobile-icon" />
                  </a>
                  <p className="mb-0">Get the Dealsy Mobile App and Save more</p>
                </div>
                <div className="download-btn d-flex my-3">
                  <a href="index.html">
                    <img
                      src="images/apps/google-play-store.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                  <a href="index.html" className=" ml-3">
                    <img
                      src="images/apps/apple-app-store.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-3 mb-lg-0">
              <div className="copyright">
                <p>
                  Copyright &copy;{" "}
                  <script>
                    var CurrentYear = new Date().getFullYear()
                    document.write(CurrentYear)
                  </script>
                  . Designed & Developed by{" "}
                  <a className="text-white" href="https://themefisher.com">
                    Themefisher
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Social Icons */}
              <ul className="social-media-icons text-center text-lg-right">
                <li>
                  <a
                    className="fa fa-facebook"
                    href="https://www.facebook.com/themefisher"
                  ></a>
                </li>
                <li>
                  <a
                    className="fa fa-twitter"
                    href="https://www.twitter.com/themefisher"
                  ></a>
                </li>
                <li>
                  <a
                    className="fa fa-pinterest-p"
                    href="https://www.pinterest.com/themefisher"
                  ></a>
                </li>
                <li>
                  <a
                    className="fa fa-github-alt"
                    href="https://www.github.com/themefisher"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* To Top */}
        <div className="scroll-top-to">
          <i className="fa fa-angle-up"></i>
        </div>
      </footer>
    </>
  );
};

export default Footer;
