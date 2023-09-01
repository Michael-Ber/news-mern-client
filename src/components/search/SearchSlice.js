import { createAsyncThunk, createEntityAdapter, createSlice, createSelector, nanoid } from "@reduxjs/toolkit";
import {useHttp} from '../hooks/http.hook';
import { newsService } from "../../service/newsService";

const searchAdapter = createEntityAdapter({
    selectId: () => nanoid()
});
const initialState = searchAdapter.getInitialState({
    loading: 'idle'
});

export const searchFetch = createAsyncThunk(
    'fetchSearchNews',
    ({category, language}) => {
        const {request} = useHttp();
        const {apiUrlEverything} = newsService({category, language});
        return request(apiUrlEverything)
    }
);

const searchSlice = createSlice({
    name: 'searchNews',
    initialState,
    extraReducers: builder => {
        builder 
            .addCase(searchFetch.pending, state => {state.loadingStatus = 'loading'})
            .addCase(searchFetch.fulfilled, (state, action) => {state.loadingStatus = 'idle'; searchAdapter.setAll(state, action.payload.articles)})
            .addCase(searchFetch.rejected, state => {state.loadingStatus = 'error'})
    }
});

const {reducer, actions} = searchSlice;

const {selectAll} = searchAdapter.getSelectors(state => state.searchNews);
export const searchNewsArray = createSelector(
    selectAll, 
    news => news
);

export default reducer;
export const {
    searchFetching, 
    searchFetched,
    searchFetchError
} = actions;