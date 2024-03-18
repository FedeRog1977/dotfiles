import React, { useState } from 'react';
import './styles/ImageSlider.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronCircleRight,
    faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Typography from './Typography';

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
        <div className='image-slider'>
            <FontAwesomeIcon icon={faChevronCircleLeft} className='left-arrow' onClick={prevSlide} />
            <FontAwesomeIcon icon={faChevronCircleRight} className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <>
                                <a href={slide.url}>
                                    <img src={slide.url} alt={slide.alt} className='slider-image' />
                                </a>
                                <div style={{ border: '1px solid black', textAlign: 'center', maxWidth: '250px' }}>
                                    <Typography type='h3' fontFamily='sans-serif' content={slide.description} textAlign='center' paragraphMargins />
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );

};

export default ImageSlider;