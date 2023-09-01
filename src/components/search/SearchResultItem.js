import { Link } from 'react-router-dom';
import './searchResultItem.scss';

const SearchResultItem = ({title, url, urlToImage, author, description, date}) => {
    return (
        <div className="search-page__item item-search-page">
            <div className="item-search-page__left">
                <div className="item-search-page__img">
                    <img src={urlToImage} alt="search page item" />
                </div>
            </div>
            <div className="item-search-page__right">
                <Link to={`${url}`} className="item-search-page__link">
                    <div className="item-search-page__title">{title}</div>
                    <div className="item-search-page__info">
                        <span className="item-search-page__author">{author}</span>
                        <span className="item-search-page__time">{date}</span>
                    </div>
                    <p className="item-search-page__content">{description}</p>
                </Link>
            </div>
        </div>
    )
}

export default SearchResultItem;