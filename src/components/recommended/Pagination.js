import { useRef } from 'react';
import { returnPaginationRange } from '../utils/returnPaginationRange';
import { findParentNodeAfterClick } from '../utils/findNodeAfterClick';
import Arrow from '../arrow/Arrow';
import './pagination.scss';

const Pagination = ({totalPage, totalSlides, page, limit, siblings, setSlide, setOffset, translateWidth, carouselWidth}) => {


    const paginationElements = returnPaginationRange(totalPage, page, limit, siblings).map((number, i) => {
        const classNames = page === number ? "app-recommended__num app-recommended__num_active" : "app-recommended__num";
        return (
            <span onClick={() => {setSlide(number); setOffset((number-1)*translateWidth)}} key={number} className={classNames}>{number}</span>
        )
    })
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const handlePrevClick = (e, nextRef) => {
        setSlide(prevSlide => prevSlide === totalSlides.length-2 ? prevSlide - 2: prevSlide-1)
        setOffset(prevOffset => {
            const button = findParentNodeAfterClick(e.target, 'BUTTON');
            const svg = findParentNodeAfterClick(e.target, 'svg');
            const nextButton = nextRef.current.children[0];
            const nextButtonSvg = nextRef.current.children[0].children[0];
            nextButtonSvg.style.stroke = '#f3692e';
            nextButton.disabled = false;
            button.disabled = false;
            if(prevOffset < 1 * translateWidth) {
                button.disabled = true;
                setSlide(1)
                return prevOffset
            }
            if(prevOffset < 2 * translateWidth) {
                svg.style.stroke = '#e0e0e0';
            }
            return prevOffset - translateWidth
        })

    }
    const handleNextClick = (e, prevRef) => {
        setSlide(prevSlide => prevSlide + 1)
        setOffset(prevOffset => {
            const button = findParentNodeAfterClick(e.target, 'BUTTON');
            const svg = findParentNodeAfterClick(e.target, 'svg');
            const prevButton = prevRef.current.children[0];
            const prevButtonSvg = prevRef.current.children[0].children[0];
            prevButtonSvg.style.stroke = '#f3692e';
            prevButton.disabled = false;
            button.disabled = false;
            if(Math.abs(prevOffset + 2 * translateWidth) >= carouselWidth) {
                button.disabled = true;
                setSlide(totalSlides - 1)
                return prevOffset
            }
            if(Math.abs(prevOffset + 3 * translateWidth) >= carouselWidth) {
                svg.style.stroke = '#e0e0e0';
            }

            return prevOffset + translateWidth
        })
    }
    
    return (
        <ul className="app-recommended__pagination">
            <li ref={prevRef} className="app-recommended__prev">
                <Arrow onClick={(e) => handlePrevClick(e, nextRef)} color="#e0e0e0" rotate="180deg"/>
            </li>
            <li className="app-recommended__nums">
                {paginationElements}
            </li>
            <li ref={nextRef} className="app-recommended__next">
                <Arrow onClick={(e) => handleNextClick(e, prevRef)} color="#f3692e"/>
            </li>
        </ul>
    )
}

export default Pagination;


