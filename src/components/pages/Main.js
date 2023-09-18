import { CSSTransition } from 'react-transition-group'
import { Suspense, lazy, useEffect, useState } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Spinner from "../spinner/Spinner";

const News = lazy(() => import('../news/News.js'));
const LatestPost = lazy(() => import('../latest/LatestPost.js'));
const Recommended = lazy(() => import('../recommended/Recommended.js'));


const Main = () => {

    const [showRecom, setShowRecom] = useState(false);
    const scrollHandler = () => {
        const a = document.documentElement.scrollTop;
        const latest = document.querySelector('.app-latest');
        const bottomOfSection = latest?.offsetTop - window.innerHeight + latest?.clientHeight;
        if(a >= bottomOfSection) {
            setShowRecom(true);
        }else {
            setShowRecom(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => { window.removeEventListener('scroll', scrollHandler) }
    }, [])

    return (
        <>
            <Suspense fallback={<Spinner/>}> 
                <ErrorBoundary>
                    <News/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <LatestPost/>
                </ErrorBoundary>
                <ErrorBoundary>
                    {<CSSTransition 
                            in={showRecom} 
                            timeout={2500} 
                            classNames="recommended-opacity">
                                <Recommended showRecom={showRecom}/>
                            </CSSTransition>
                    }
                </ErrorBoundary>
            </Suspense>
        </>
    )
}


export default Main; 