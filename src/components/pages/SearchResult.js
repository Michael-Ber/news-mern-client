import { useSelector } from 'react-redux';
import withDate from '../HOC/withDate';
import SearchResultItem from '../../components/search/SearchResultItem';
import './searchResult.scss';

const SearchResult = () => {
    const news = useSelector(state => state.news.searchedArticles);
    const renderNews = (arr) => {
        return arr.map(item => {
            const SearchResultItemWithDate = withDate(SearchResultItem, {...item});
            return (
                <SearchResultItemWithDate key={item.id} />
            )
        })
    }

    
    const elements = news && renderNews(news);
    return (
        <div className="app-search-page search-page">
            <h2 className='search-page__title'>Новости</h2>
            {elements}
        </div>  
    )
}

export default SearchResult;