import { Link } from 'react-router-dom';
import { memo } from 'react';
import dateChangeToUTC from '../utils/dateChangeToUTC';
import './latestPostItem.scss';
import noImage from '../../assets/no_image.jpg';

const LatestPostItem = memo(({category, title, author, url, urlToImage, publishedAt}) => {

    const titleEdited = title && title.length > 50 ? title.slice(0, 50) + ' ...': title;
    const authorEdited = author ? author : 'От редакции';
    const editedImg = urlToImage ? urlToImage : noImage;
 
    const onErrorImg = (e) => {
        return e.type === 'error' ? e.target.src = noImage : null;
    }
    const { utcYear, utcMonth, utcDate } = dateChangeToUTC(publishedAt);

    return (
        <li className="app-latest__item item-app-latest">
            <Link to={url} className="item-app-latest__link">
                <div className="item-app-latest__img">
                    <img onError={onErrorImg} src={editedImg} alt="author" />
                    <div className="item-app-latest__category">{category.toUpperCase()}</div>
                </div>
                <h2 className="item-app-latest__title">{titleEdited}</h2>
                <div className="item-app-latest__footer">
                    <span className="item-app-latest__author">{authorEdited}</span>
                    {utcMonth} {utcDate} {utcYear}
                </div>
            </Link>
        </li>
    )
}, compareProps)

function compareProps(prevProps, nextProps) {
    return prevProps.id === nextProps.id
}

export default LatestPostItem;