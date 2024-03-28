import React, { useEffect } from "react";
import "./home.css";
// import {cgMouse} from "react-icons/all";
import Product from "./Product";
import Metadata from "../layouts/Metadata";

const product = {
    name: "BMW z4 v8",
    image: [{ url: "https://www.bmwofdayton.com/static/dealer-20050/BMW-M850i-engine.jpg" }],
    price: 100000,
    _id: "fkfasfhuus8fu"
}
// const title = 'home page';
export const Home = () => {
    return (
        <>
            <Metadata title='home page' />
            
            <div className="banner">
                <p>Welcome to Bhoom</p>
                <h1>Find amazing accessories below</h1>

                <a href="#mainContainer">
                    <button>Scroll</button>
                </a>

            </div>

            <div className="mainContainer" id="mainContainer">

                <h2 className="homeHeading">Featured Accessories</h2>
                <div className="container" id="container">

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
