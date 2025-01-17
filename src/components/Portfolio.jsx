import { useRef, useEffect } from 'react';
import CarouselActive from './CarouselActive.jsx';
import CarouselThumbnail from './CarouselThumbnail.jsx';

const Portfolio = ({ setPortfolioLoading }) => {
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailRef = useRef(null);

    // Image loading and state update
    useEffect(() => {
        // Pass the setPortfolioLoading to CarouselActive to control loading state
        setPortfolioLoading(true);
    }, [setPortfolioLoading]);

    const handleNextClick = () => {
        const sliderItems = sliderRef.current.querySelectorAll('.item');
        const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');

        sliderRef.current.appendChild(sliderItems[0]);  // Move first slider item to the end
        thumbnailRef.current.appendChild(thumbnailItems[0]);  // Move first thumbnail to the end
        carouselRef.current.classList.add('next');

        setTimeout(() => {
            carouselRef.current.classList.remove('next'); // Remove the class after 3 seconds
        }, 2000);
    };

    const handlePrevClick = () => {
        const sliderItems = sliderRef.current.querySelectorAll('.item');
        const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');

        sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);  // Move last slider item to the beginning
        thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);  // Move last thumbnail to the beginning
        carouselRef.current.classList.add('prev');

        setTimeout(() => {
            carouselRef.current.classList.remove('prev'); // Remove the class after 3 seconds
        }, 2000);
    };

    return (
        <div className="carousel" ref={carouselRef}>
            <CarouselActive setPortfolioLoading={setPortfolioLoading} sliderRef={sliderRef} />
            <CarouselThumbnail thumbnailRef={thumbnailRef} />
            <div className="arrow">
                <button id="prev" className="prev" onClick={handlePrevClick}>&#x25BE;</button>
                <button id="next" className="next" onClick={handleNextClick}>&#x25B4;</button>
            </div>
            <div className="time"></div>
        </div>
    );
};

export default Portfolio;
