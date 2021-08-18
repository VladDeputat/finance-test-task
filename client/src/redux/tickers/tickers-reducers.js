import { createReducer } from '@reduxjs/toolkit';
import { getTickersSuccess, filterTickers } from './tickers-actions';

const initialState = [];

const tickersReducer = createReducer(initialState, {
  [getTickersSuccess]: (state, { payload }) => [...state, payload],
});

const filterReducer = createReducer('', {
  [filterTickers]: (_, { payload }) => payload,
});

const tickerReducers = {
  tickersReducer,
  filterReducer,
};

export default tickerReducers;
