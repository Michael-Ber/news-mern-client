import { createSlice, createAsyncThunk, createEntityAdapter, createSelector, nanoid } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";
import { newsService } from "../../service/newsService";

const latestAdapter = createEntityAdapter({
    selectId: () => nanoid()
});

const initialState = latestAdapter.getInitialState({
    latestCategory: 'general',
    latestCountry: 'us',
    latestLoadingStatus: 'idle'
});

export const fetchLatestNews = createAsyncThunk(
    'fetchLatestNews',
    async ({country, category, pageSize}) => {
        const {request} = useHttp();
        const {apiUrlHeadlines} = newsService(country, category, pageSize);
        return await request(apiUrlHeadlines)
    }
);

const latestSlice = createSlice({
    name: 'latestNews',
    initialState,
    reducers: {
        latestCategoryChanged: (state, action) => {state.latestCategory = action.payload},
        latestCountryChanged: (state, action) => {state.latestCountry = action.payload}
    },
    extraReducers: builder => {
        builder 
            .addCase(fetchLatestNews.pending, state => {state.latestLoadingStatus = 'loading'})
            .addCase(fetchLatestNews.fulfilled, (state, action) => {state.latestLoadingStatus = 'idle'; latestAdapter.setAll(state, action.payload.articles)})
            .addCase(fetchLatestNews.rejected, state => {state.latestLoadingStatus = 'error'})
    }
});

const {reducer, actions} = latestSlice;
export default reducer;

const {selectAll} = latestAdapter.getSelectors(state => state.latestNews);

export const latestNewsArray = createSelector(
    selectAll,
    latestNews => latestNews
);

export const {
    latestCategoryChanged,
    latestCountryChanged,
    fetchingLatestNews, 
    fetchedLatestNews,
    fetchingLatestNewsError
} = actions;