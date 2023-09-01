import './newsItem.scss';

const NewsItem = ({title, urlToImage, elementNumber, handleNews, activeNews}) => {
    const classNames = elementNumber === activeNews ? 'tabs-app-main__item tabs-app-main__item_active' : 'tabs-app-main__item';

    const renderTitle = (str) => {
        return str.length > 80 ? str.slice(0, 80) + ' ...': str;
    }

    const modifiedTitle = renderTitle(title)
    return (
        <div onClick={handleNews} className={classNames}>
            <div className="tabs-app-main__img">
                <img src={urlToImage} alt="latest news" />
            </div>
            <h3 className="tabs-app-main__title">{modifiedTitle}</h3>
        </div>
    )
}

export default NewsItem;