import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './search.scss';
import searchIcon from '../../assets/search.svg';
import { searchRequestChanged } from '../news/NewsSlice';
import { useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';

const Search = () => {
    const {loadingStatus} = useSelector(state=>state.news)
    const [showResultsResolution, setShowResultsResolution] = useState(false);
    const [request, setRequest] = useState('');
    const searchNews = useSelector(state => state.news.searchedArticles);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchRequestChanged(request));
        localStorage.setItem('searchRequest', request);
        setRequest('');
        nav(`/search_results`);
        setShowResultsResolution(true);
    }

    const showSpinner = loadingStatus === 'loading' ? <Spinner customStyle={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px'}} /> : null;
    const showResults = (arr) => {
        const length = arr.length;
        const resultsCount = length > 0 ? <h5>Найдено: {length} статей</h5> : <h5>По вашему запросу ничего не найдено</h5>
        return (
            resultsCount
        )
    }
    const results = showResults(searchNews);
    const resultsStyles = showResultsResolution ? {display: 'block'}: {display: 'none'};
    return (
    <div className="app-search search-app">
        <div className="search-app__logo">World News</div>
        <div className="search-app__wrapper">
            <form onSubmit={handleSubmit} className="search-app__form">
                <input 
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    placeholder='Поиск' 
                    type="text" id='news' 
                    name='news' 
                    className="search-app__input" />
                    
                <button className="search-app__btn" type='submit'>
                    {showSpinner ? showSpinner : <img src={searchIcon} alt="search button" />}
                </button>
            </form>
            <div style={resultsStyles} className="search-app__results">{results}</div>
        </div>
    </div>
    )
}

export default Search;