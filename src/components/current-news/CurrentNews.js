import { useEffect, useState, useCallback, memo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import withStoreData from '../HOC/withStoreData';
import NewsItem from './NewsItem';
import NewsContent from './NewsContent';
import './currentNews.scss';
import withDate from '../HOC/withDate';

const CurrentNews = memo(({news, category}) => {
    const [firstNews] = news;
    const [currentNews, setCurrentNews] = useState(firstNews);
    const [activeNews, setActiveNews] = useState(0);
    const handleNews = useCallback((i) => {
        setCurrentNews(news[i]);
        setActiveNews(i);
    }, [setCurrentNews, setActiveNews, news])

    useEffect(() => {
        setCurrentNews(firstNews)
    }, [firstNews])

    const NewContentWithDate = withDate(NewsContent, {category, ...currentNews})

    return (
        <div className="app-main__tabs tabs-app-main">
            <div className="tabs-app-main__contents">
                {<NewContentWithDate/>}
            </div>
            <div className="tabs-app-main__items">
                {news && news.slice(0, 2).map((item, i) => {
                    return <NewsItem key={nanoid()} {...item} activeNews={activeNews} elementNumber = {i} handleNews={() => handleNews(i)}/>
                })}
            </div>
        </div>
    )
})

export default withStoreData(CurrentNews);