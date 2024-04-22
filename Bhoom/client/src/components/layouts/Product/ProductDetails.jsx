import React from 'react';
import './ProductDetails.css'; // Import your CSS file for styling

const ProductDetails = ({ name, description, price, ratings, imageUrl, category, stock, numberOfReviews, reviews }) => {
    return (
        <div className="product-details">
            <div className="product-image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="product-info">
                <h2 className="product-name">{name}</h2>
                <p className="product-description">{description}</p>
                <div className="product-price">Price: ${price}</div>
                <div className="product-ratings">Ratings: {ratings}</div>
                <div className="product-category">Category: {category}</div>
                <div className="product-stock">Stock: {stock}</div>
                <div className="product-number-of-reviews">Number of Reviews: {numberOfReviews}</div>
                <div className="product-reviews">
                    <h3>Reviews:</h3>
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index}>{review}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// const ProductDetails = ({ product }) => {
//     return (
//         <div className="product-details">
            
//                 <div key={index} className="product">
//                     <div className="product-image">
//                         <img src={product.imageUrl} alt={product.name} />
//                     </div>
//                     <div className="product-info">
//                         <h2 className="product-name">{product.name}</h2>
//                         <p className="product-description">{product.description}</p>
//                         <div className="product-price">Price: ${product.price}</div>
//                         <div className="product-ratings">Ratings: {product.ratings}</div>
//                         <div className="product-category">Category: {product.category}</div>
//                         <div className="product-stock">Stock: {product.stock}</div>
//                         <div className="product-number-of-reviews">Number of Reviews: {product.numberOfReviews}</div>
//                         <div className="product-reviews">
//                             <h3>Reviews:</h3>
//                             <ul>
//                                 {product.reviews.map((review, index) => (
//                                     <li key={index}>{review}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
            
//         </div>
//     );
// };

export default ProductDetails;
