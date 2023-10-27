import { Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { resetShowSearchResultsCount } from "../news/NewsSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import './app.scss';
import Footer from "../footer/Footer";
import Search from "../search/Search";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Spinner from "../spinner/Spinner";
import { Page404 } from "../404/Page404";
import { categoryChanged } from "../news/NewsSlice";

const SearchResult = lazy(() => import('../pages/SearchResult.js'))
const Main = lazy(() => import('../pages/Main.js'))

function App() {
	const nav = useNavigate();
	const urlActual = useLocation().pathname;
	const categoryFromUrl = urlActual.replace(/\/category\//, '');
	const dispatch = useDispatch();


	useEffect(() => {
		if (categoryFromUrl === '/') {
			nav(`/category/general`)
		} else {
			dispatch(categoryChanged(categoryFromUrl));
		}
		if (categoryFromUrl !== '/search_results') dispatch(resetShowSearchResultsCount())

	}, [categoryFromUrl, dispatch, nav])

	// useEffect(() => {

	// 	nav(`/category/${category}`);


	// }, [category])




	// useEffect(() => {

	// 	if (categoryFromUrl !== 'search_results') {
	// 		dispatch(resetShowSearchResultsCount())
	// 		console.log(categoryFromUrl)
	// 		dispatch(categoryChanged(urlActual.replace(/\/category\//, '')))
	// 	}
	// }, [categoryFromUrl])


	// useEffect(() => {
	// 	nav(`/category/${urlActual.replace(/\/category\//, '')}`);

	// }, [])



	return (
		<div className="app">
			<div className="app__container">

				<ErrorBoundary>
					<Header />
				</ErrorBoundary>
				<ErrorBoundary>
					<Search />
				</ErrorBoundary>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route
								path="/category/:category"
								element={<Main />}
							/>
							<Route
								path="/search_results"
								element={<SearchResult />}
							/>
							<Route path="/" element={<Main />} />
							<Route path="*" element={<Page404 />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>


				<ErrorBoundary>
					<Footer />
				</ErrorBoundary>


			</div>
		</div>
	);
}

export default App;
