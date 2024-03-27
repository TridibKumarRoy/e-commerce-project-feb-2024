import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'


const options = {
  edit: false,
  color: "rgba(20,20,20,0.1",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true
}

const Product = ({ product }) => {
  return (
    <Link className='productCard'>
      <img src={product.image[0].url} alt={product.name} srcset="" />
      <p>{product.name}</p>
      <div>
      <ReactStars {...options}/>
        <span className="productCardSpan">(50 reviews)</span>
        <span>&#8377;{product.price}</span>
      </div>
    </Link>
  )
}

export default Product