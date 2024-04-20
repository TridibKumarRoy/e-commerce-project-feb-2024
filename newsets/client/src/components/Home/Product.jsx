import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, NavLink } from 'react-router-dom'



const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    // value: 2.5,
    value:  product.ratings ,
    isHalf: true
  }
  return (
    // <NavLink className='productCard' to="/productdetails">
    <Link to={`/product/${product._id}`} className='productCard'>
      <img src={product.images[0].url} alt={product.name}/>
      <p>{product.name}</p>
      <div>
      <ReactStars {...options}/>
        <span className="productCardSpan">({product.numberOfReviewes } reviews)</span>
      </div>
      <span>&#8377;{product.price}</span>
    </Link>
    // </NavLink>
  )
}
export default Product;