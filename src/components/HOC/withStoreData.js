import { useSelector } from 'react-redux';
import Spinner from '../spinner/Spinner';

const withStoreData = (WrappedComponent) => {
    return () => {
        const { loadingStatus } = useSelector(state => state.news);
        const { category } = useSelector(state => state.news);
        const news = useSelector(state => state.news.articles);

        if(loadingStatus === 'loading') {
            return <Spinner />
        }else if(news.length === 0) {
            return <h2>Статей нет</h2>
        }

        return (
            <WrappedComponent news={news} category={category} />
        )
    }
}

export default withStoreData;