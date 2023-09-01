import { Link } from "react-router-dom";
import './recommendedItem.scss';
import noImage from '../../assets/no_image.jpg';

const RecommendedItem = ({category, title, url, urlToImage, author, date}) => {

    const titleEdited = title.length > 50 ? title.slice(0, 50) + ' ...': title;
    const authorEdited = author ? author : 'От редакции';
    const editedImg = urlToImage ? urlToImage : noImage;
    

   

    const onErrorImg = (e) => {
        return e.type === 'error' ? e.target.src = noImage : null;
        
    }

    return (
        <li className="app-recommended__item item-app-recommended">
            <Link to={url} className="item-app-recommended__link">
                <div className="item-app-recommended__img">
                    <img onError={onErrorImg} src={editedImg} alt="recommended item" />
                    <div className="item-app-recommended__category">{category.toUpperCase()}</div>
                </div>
                <h2 className="item-app-recommended__title">{titleEdited}</h2>
                <span className="item-app-recommended__author">{authorEdited}</span>
                <span className="item-app-recommended__time">{date}</span>
            </Link>
        </li>
    )
}

export default RecommendedItem;