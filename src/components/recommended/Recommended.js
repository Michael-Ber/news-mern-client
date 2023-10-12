import withStoreData from '../HOC/withStoreData';
import { useState, memo, useEffect, useRef } from 'react';
import RecommendedItem from './RecommendedItem';
import Pagination from './Pagination';
import withDate from '../HOC/withDate';

import './recommended.scss';

const Recommended = memo(({ news, category }) => {

    const totalSlides = news.length;
    const [limit] = useState(12);
    const [siblings] = useState(1);
    const [slideWidth, setSlideWidth] = useState(750);
    const gapWidth = 15;
    const carouselWidth = news.length * (slideWidth + gapWidth);
    const translateWidth = slideWidth + gapWidth;

    const refToSlider = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(max-width: 575px)').matches) {
            setSlideWidth(280);
        } else if (window.matchMedia('(max-width: 767px)').matches) {
            setSlideWidth(366);
        }
    }, [])

    const elements = news.length > 0 ? news.map((item, i) => {
        const RecommendedItemWithDate = withDate(RecommendedItem, { category, ...item });
        return (
            <RecommendedItemWithDate key={item.id} />
        )
    }) : <h2>Статей нет</h2>
    return (

        <div className="app-recommended">
            <div className="app-recommended__header">
                <h2 className="app-recommended__title">Рекомендованные вам</h2>
                <Pagination
                    totalPage={totalSlides}
                    limit={limit}
                    siblings={siblings}
                    translateWidth={translateWidth}
                    totalSlides={totalSlides}
                    carouselWidth={carouselWidth}
                    refToSlider={refToSlider}
                    news={news}
                />
            </div>
            <div className="app-recommended__carousel">
                <div className="app-recommended__carousel-wrapper">
                    <ul
                        ref={refToSlider}
                        className="app-recommended__list">
                        {elements}
                    </ul>
                </div>
            </div>

        </div>
    )
})

export default withStoreData(Recommended);