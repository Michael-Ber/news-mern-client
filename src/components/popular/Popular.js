import { memo } from 'react';
import withStoreData from '../HOC/withStoreData';
import PopularItem from './PopularItem';
import withDate from '../HOC/withDate';
import './popular.scss';

const Popular = memo(({news, category}) => {

    const renderItems = (arr) => {
        return arr.slice(2, 7).map((item, i) => {
            const PopularItemWithDate = withDate(PopularItem, {...item, category});
            return (
                <PopularItemWithDate key={item.id} />
            )
        })
    }

    const elements =  news && renderItems(news);
    return (
        <div className="app-main__popular popular-app-main">
            <h1 className="popular-app-main__title">Популярные новости за неделю</h1>
            <ul className="popular-app-main__list">
                {elements}
            </ul>
        </div>
    )
})

export default withStoreData(Popular);