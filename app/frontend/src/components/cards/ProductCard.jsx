import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
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

  return (
    <div className="product-item bg-light">
      <div className="card">
        <div className="thumb-content">
          <div className="price">&#8377;{data?.price}</div>
          <Link to={'/product/'+data._id}>
            <img
              style={{ height: 225, objectFit: "cover" }}
              className="card-img-top img-fluid"
              src={data.images[0].url}
              alt={data.title}
            />
          </Link>
        </div>
        <div className="card-body">
          <h4 className="card-title">
            <Link to={'/product/'+data._id}>{data.name}</Link>
          </h4>
          <ul className="list-inline product-meta">
            <li className="list-inline-item">
              <a href="single.html">
                <i className="fa fa-folder-open-o"></i>
                {data.category}
              </a>
            </li>
          </ul>
          <p className="card-text">{data.description?.slice(0, 50)}</p>
          <div className="product-ratings">
            <ul className="list-inline">{renderRatings(data.ratings)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
