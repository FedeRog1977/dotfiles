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
            {slides.map(({ slide, idx }: any) => {
                return (
                    <div
                        className={idx === current ? 'slide active' : 'slide'}
                        key={idx}
                    >
                        {idx === current && (
                            <img src={idx.src} alt='travel image' className='image' />
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImageSlider;