import React, { useEffect } from "react";
import "./home.css";
// import {cgMouse} from "react-icons/all";
import Product from "./Product";

const product = {
    name: "zjdfhs shfhfs",
    image:[{url: "jadjadjoj"}],
    price: 2323,
    _id:"fkfasfhuus8fu"
}

export const Home = () => {
    return (
        <>
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
                    
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                    <Product product={product}/>
                </div>
            </div>
        </>
    );
};
