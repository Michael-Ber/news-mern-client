import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import { newsService } from "../../service/newsService";


const initialState = {
    articles: [],
    searchedArticles: [],
    category: 'general',
    country: 'us',
    language: 'ru',
    amount: 8,
    loadingStatus: 'idle',
    error: false
};

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async ({country, category, pageSize=8, page=1}) => {
        try {
            const { request } = useHttp();
            const { apiUrlHeadlines } = newsService();
            return await request(apiUrlHeadlines, {
                method: 'POST', 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({country, category, pageSize, page})
            })
        } catch (error) {
            console.log(error)
        }
        
    }
);

export const fetchSearchNews = createAsyncThunk(
    'news/fetchSearchNews',
    async({category, language}) => {
        try {
            const { request } = useHttp();
            const { apiUrlEverything } = newsService({ category, language });
            return  await request(apiUrlEverything, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({category, language})
            })
        } catch (error) {
            console.log(error)
        }
        
    }
);

const mainSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        categoryChanged: (state, action) => {state.category = action.payload},
        countryChanged: (state, action) => {state.country = action.payload},
        searchRequestChanged: (state, action) => {state.searchRequest = action.payload},
        changeAmount: (state) => { state.amount += 8 }
    },
    extraReducers: builder => {
        builder 
            .addCase(fetchNews.pending, state => {state.loadingStatus = 'loading'})
            .addCase(fetchNews.fulfilled, (state, action) => {state.loadingStatus = 'idle'; state.articles = action.payload.articles})
            .addCase(fetchNews.rejected, state => {state.loadingStatus = 'error'; state.error = true})
            .addCase(fetchSearchNews.pending, state => {state.loadingStatus = 'loading'})
            .addCase(fetchSearchNews.fulfilled, (state, action) => {state.loadingStatus = 'idle'; state.searchedArticles = action.payload.articles})
            .addCase(fetchSearchNews.rejected, state => {state.loadingStatus = 'error'; state.searchRequest = ''})
    }
});

const { reducer, actions } = mainSlice;
export default reducer;

export const {
    categoryChanged,
    countryChanged,
    searchRequestChanged,
    fetchingNews, 
    fetchedNews,
    fetchingNewsError,
    fetchingSearchNews,
    fetchedSearchNEws,
    fetchingSearchNEwsError,
    changeAmount
} = actions;