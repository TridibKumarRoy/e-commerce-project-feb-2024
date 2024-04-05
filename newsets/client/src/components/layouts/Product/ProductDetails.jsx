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

export default ProductDetails;
