import { configureStore, combineReducers } from '@reduxjs/toolkit';

import tickerReducers from './tickers/tickers-reducers';
import timerReducer from './timer/timer-reducers';

const store = configureStore({
  reducer: combineReducers({
    tickers: tickerReducers.tickersReducer,
    filter: tickerReducers.filterReducer,
    interval: timerReducer,
  }),
});

// eslint-disable-next-line
export default { store };
