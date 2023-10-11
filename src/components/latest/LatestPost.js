import withStoreData from '../HOC/withStoreData';
import { useState, memo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHttp } from "../hooks/http.hook";
import { newsService } from "../../service/newsService";
import LatestPostItem from './LatestPostItem';

import './latestPost.scss';

const LatestPost = memo(({ news, category }) => {
    const [moreNews, setMoreNews] = useState([]);
    const [moreNumber, setMoreNumber] = useState(2);
    const [pageSizeNumber, setPageSizeNumber] = useState(8);
    const { country } = useSelector(state => state.news);
    const { request } = useHttp();
    const { apiUrlHeadlines } = newsService();


    const moreRef = useRef(null);

    const handleMore = async () => {
        moreRef.current.disabled = true;
        const articles = await request(apiUrlHeadlines, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ country, category, pageSize: pageSizeNumber, page: moreNumber })
        });
        setMoreNumber(state => state + 1);
        setMoreNews(state => ([...state, ...articles.articles]))
        if (articles.articles.length === 0) {
            moreRef.current.style.display = 'none';
        }
        moreRef.current.disabled = false;
    }
    const elements = news ? news.map(item => {

        return (
            <LatestPostItem key={item.id} {...item} category={category} />
        )


    }) : <h2>Статей нет</h2>
    const moreElements = moreNews && moreNews.map(item => {

        return (
            <LatestPostItem key={item.id} {...item} category={category} />
        )

    })
    const listStyleNoArticles = news.length === 0 ? { gridTemplateRows: 'auto' } : {};
    return (
        <div className="app-latest">
            <h1 className="app-latest__title">Последние статьи</h1>
            <ul style={listStyleNoArticles} className="app-latest__list">
                {elements}
                {moreElements}
            </ul>
            <button
                ref={moreRef}
                onClick={handleMore}
                className="btn btn-more app-latest__more">Еще
            </button>

        </div>

    )
})

export default withStoreData(LatestPost);