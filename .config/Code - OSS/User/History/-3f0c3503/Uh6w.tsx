import React, { useState } from 'react';
import './styles/ImageSlider.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleRight,
    faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ slides }: any) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div style={{ margin: '0 50px 0 50px' }}>
            <div className='image-slider'>
                <FontAwesomeIcon icon={faArrowCircleLeft} className='left-arrow' onClick={prevSlide} />
                <FontAwesomeIcon icon={faArrowCircleRight} className='right-arrow' onClick={nextSlide} />
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} className='slider-image' />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageSlider;