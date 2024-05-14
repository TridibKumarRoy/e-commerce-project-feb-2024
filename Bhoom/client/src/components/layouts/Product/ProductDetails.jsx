import React, { useContext, useEffect, useState } from 'react';
import './ProductDetails.css'; // Import your CSS file for styling
import { useParams } from 'react-router-dom';
import { AuthContext, useAuth } from '../../../store/store';

// const ProductDetails = ({ name, description, price, ratings, imageUrl, category, stock, numberOfReviews, reviews }) => {
const ProductDetails =  () => {
    const params = useParams();
    const {  getProductDetails } = useAuth();
    
    
    //* getting products
    // const product = getProductDetails(params.id)
    const [product, setProduct] = useState([{}]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const product = await getProductDetails(params.id);
                // const product = await getProductDetails('6623bfc53dce52dc22ab844b');
                setProduct(product);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, [getProductDetails]);

    console.log("product: ", product);


    return (
        <div className="product-details">
            <div className="product-image">
                {/* <img src={product.images[0]} alt={ product.name} /> */}
            </div>
            <div className="product-info">
                <h2 className="product-name">{ product.name}</h2>
                <p className="product-description">{ product.description}</p>
                <div className="product-price">Price: ${ product.price}</div>
                <div className="product-ratings">Ratings: { product.ratings}</div>
                <div className="product-category">Category: { product.category}</div>
                <div className="product-stock">Stock: { product.stock}</div>
                <div className="product-number-of-reviews">Number of Reviews: { product.numberOfReviews}</div>
                <div className="product-reviews">
                    <h3>Reviews:</h3>
                    <ul>
                        {/* {product.reviews.map((review, index) => (
                            <li key={index}>{ review.comment}</li>
                        ))} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
