import { createReducer } from '@reduxjs/toolkit';
import {
  getTickersSuccess,
  setTickerSuccess,
  unsetTickerSuccess,
  filterTickers,
} from './tickers-actions';

const initialState = [];

const tickersReducer = createReducer(initialState, {
  [getTickersSuccess]: (state, { payload }) => [...state, payload],
});

const tickersToRecommendReducer = createReducer(initialState, {
  [setTickerSuccess]: (_, { payload }) => payload,
  [unsetTickerSuccess]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [filterTickers]: (_, { payload }) => payload,
});

const tickerReducers = {
  tickersReducer,
  tickersToRecommendReducer,
  filterReducer,
};

export default tickerReducers;
