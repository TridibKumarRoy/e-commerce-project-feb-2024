import React, { Fragment } from 'react'
import "./home.css"
// import {cgMouse} from "react-icons/all";
import Product from "./Product.jsx"


export const Home = () => {
    return (<>
        <main>
            <Fragment>
                <div className='banner'>
                    <p>Welcome to Bhoom</p>
                    <h1>Find amazing accessories below</h1>

                    <a href="#container">
                        <button>
                            Scroll <cgMouse/>
                        </button>
                    </a>
                </div>

                <h2 className='homeHeading'>Featured Accessories</h2>

                <div className='container' id='container'>

                    <Product product={product}/>
                </div>


            </Fragment>
        </main>
    </>)
}
