import React from "react";

const CTA = () => {
  return (
    <section className="call-to-action overly bg-1 section-sm">
      <div className="container">
        <div className="row justify-content-md-center text-center">
          <div className="col-md-8">
            <div className="content-holder">
              <h2>Start today to get more exposure and grow your business</h2>
              <ul className="list-inline mt-30">
                <li className="list-inline-item">
                  <a className="btn btn-main" href="ad-listing.html">
                    Add Listing
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-secondary" href="category.html">
                    Browser Listing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
