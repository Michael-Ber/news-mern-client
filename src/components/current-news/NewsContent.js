import { Link } from 'react-router-dom';

const NewsContent = ({category, title, url, date}) => {
  
    if(!title) {
        return 
    }
    return (
        <div className="tabs-app-main__content">
            <div className="app-main__header">
                <h2 className="app-main__category">{category}</h2>
                <span className="app-main__time">{date}</span>
            </div>
            <Link to={url} className="app-main__link">
                <h1 className="app-main__title">{title}</h1>
            </Link>
        </div>
        
    )
}

export default NewsContent;