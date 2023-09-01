import { memo, useEffect } from "react";
import {  fetchNews } from "./NewsSlice";
import { useSelector, useDispatch } from 'react-redux';
import CurrentNews from "../current-news/CurrentNews";
import Popular from "../popular/Popular";
import './news.scss';

const News = memo(() => {
    const { country, category } = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews({country, category}))
    }, [category, country])

    return (
        
        <section className="app-main">
            <div className="app-main__left">
                <CurrentNews />
            </div>
            <div className="app-main__right">
                <Popular />
            </div>
            
        </section>
        
        
    )
})

export default News;