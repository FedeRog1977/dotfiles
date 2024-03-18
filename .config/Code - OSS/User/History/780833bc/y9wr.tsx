import { useState } from 'react';
import './Slider.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleRight,
    faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import { ImagesTest } from './ImagesTest';

const ImageCarousel = ({ slides }: any) => {
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
            <FontAwesomeIcon icon={faArrowCircleLeft} className='left-arrow' onClick={prevSlide} />
            <FontAwesomeIcon icon={faArrowCircleRight} className='right-arrow' onClick={nextSlide} />
            {slides.map(({ slide, idx }: any) => {
                return (
                    <div
                        className={idx === current ? 'slide active' : 'slide'}
                        key={idx}
                    >
                        <>
                            {idx === current && (
                                <img src={slide.src} alt='temp' className='image' />
                            )}
                            {/* {console.log(slide)} */}
                        </>
                    </div>
                );
            })}
        </section>
    );
};

export default ImageCarousel;