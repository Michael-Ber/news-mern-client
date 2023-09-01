import { Link } from 'react-router-dom';
import './latestPostItem.scss';
import noImage from '../../assets/no_image.jpg';

const LatestPostItem = ({category, title, author, url, urlToImage, date}) => {

    const titleEdited = title.length > 50 ? title.slice(0, 50) + ' ...': title;
    const authorEdited = author ? author : 'От редакции';
    const editedImg = urlToImage ? urlToImage : noImage;
 
    const onErrorImg = (e) => {
        return e.type === 'error' ? e.target.src = noImage : null;
        
    }

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
                    {date}
                </div>
            </Link>
        </li>
    )
}

export default LatestPostItem;