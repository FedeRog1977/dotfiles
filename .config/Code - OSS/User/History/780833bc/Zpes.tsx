import { useState } from 'react';
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
        <section className='slider'>
            <FontAwesomeIcon icon={faArrowCircleRight} className='left-arrow' onClick={prevSlide} />
            <FontAwesomeIcon icon={faArrowCircleLeft} className='right-arrow' onClick={nextSlide} />
            {slides.map(({ slide, index }: any) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.src} alt='travel image' className='image' />
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;