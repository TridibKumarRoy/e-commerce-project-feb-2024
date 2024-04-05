import React, { useEffect } from "react";
import "./home.css";
import Product from "./Product";
import Metadata from "../layouts/Metadata";
import Slider from './Slider'; 

const product = {
    name: "BMW z4 v8",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: [{ url: "https://www.bmwofdayton.com/static/dealer-20050/BMW-M850i-engine.jpg" }],
    price: 100000,
    ratings: 4.5,
    category: 'Electronics',
    stock: 10,
    numberOfReviews: 5,
    reviews: ['Great product!', 'Fast shipping', 'Excellent quality'],
    _id: "fkfasfhuus8fu"
}


// const title = 'home page';
export const Home = () => {

    const images = [
        'https://www.bmwofdayton.com/static/dealer-20050/BMW-M850i-engine.jpg',
        'https://www.bmwofdayton.com/static/dealer-20050/BMW-M850i-engine.jpg',
        'https://www.bmwofdayton.com/static/dealer-20050/BMW-M850i-engine.jpg',
    ];
    
    return (
        <>
            <Metadata title='home page' />

            <Slider images={images} />

            <div className="mainContainer" id="mainContainer">

                <h2 className="homeHeading">Featured Accessories</h2>
                <div className="container" id="container">

                    

                    {/* <a href="/productDetails"> <Product product={product} /> </a> */}

                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                    <Product product={product} />
                </div>
            </div>
        </>
    );
};
