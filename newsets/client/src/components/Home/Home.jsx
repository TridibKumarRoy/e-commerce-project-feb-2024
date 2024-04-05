import React, { useEffect } from "react";
import "./home.css";
import Product from "./Product";
import Metadata from "../layouts/Metadata";
import Slider from './Slider'; 

const product = {
    name: "BMW z4 v8",
    image: [{ url: "https://www.bmwofdayton.com/static/dealer-20050/BMW-M850i-engine.jpg" }],
    price: 100000,
    _id: "fkfasfhuus8fu"
}
// const title = 'home page';
export const Home = () => {

    // const dispatch = useDispatch();
    // const { loading, error, products } = useSelector((state) => state.products);

    // useEffect(() => {
    //     if (error) {
    //         alert.error(error);
    //         dispatch(clearErrors());
    //     }
    //     dispatch(getProduct());
    // }, [dispatch, error, alert]);


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
