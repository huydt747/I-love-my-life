import React, { useState, useEffect } from "react";
import "../css/slideshow.css";

function Slideshow({ images, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(slideInterval);
    }, [images, interval]);

    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt="Slideshow" className="slide-image" />
        </div>
    );
}

export default Slideshow;
