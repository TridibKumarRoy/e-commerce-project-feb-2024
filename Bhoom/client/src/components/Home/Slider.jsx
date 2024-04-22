import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import your CSS file for styling

const Slider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, interval);

        return () => clearInterval(intervalId);
    }, [currentIndex]); // Run effect whenever currentIndex changes

    return (
        <div className="slider-container">
            <div className="slide-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div className="slide" key={index}>

                        <a href="/">
                        <img src={image} alt={`Slide ${index + 1}`} className="slide-img" />
                        </a>
                        
                    </div>
                ))}
            </div>
            <button className="prev-btn" onClick={prevSlide}>
                &lt;
            </button>
            <button className="next-btn" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
};

export default Slider;

