import { configureStore } from "@reduxjs/toolkit";
import news from '../components/news/NewsSlice';



const store = configureStore({
    reducer: {news},
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;