import { Routes, Route } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { resetShowSearchResultsCount } from "../news/NewsSlice";
import { useDispatch } from "react-redux";
import Header from "../header/Header";
import './app.scss';
import Footer from "../footer/Footer";
import Search from "../search/Search";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Spinner from "../spinner/Spinner";

const SearchResult = lazy(() => import('../pages/SearchResult.js'))
const Main = lazy(() => import('../pages/Main.js') )

function App() {
	const nav = useNavigate();
	const urlActual = useLocation().pathname;
	const categoryFromUrl = urlActual.slice(1, urlActual.length);
	const dispatch = useDispatch();

	useEffect(() => {
		if(categoryFromUrl !== 'search_results') {
			dispatch(resetShowSearchResultsCount())
		}
	}, [categoryFromUrl])
	
	useEffect(() => {
		nav('/general');
	}, [])
	

	
	
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
						<Suspense fallback={<Spinner/>}>
							<Routes>
								<Route 
									path="/:category"
									element={<Main />}
								/>
								<Route 
									path="/search_results"
									element={<SearchResult />}
								/>
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
