import { configureStore, combineReducers } from '@reduxjs/toolkit';

import tickerReducers from './tickers/tickers-reducers';
import { timerReducer, connectionReducer } from './params/params-reducers';

const store = configureStore({
  reducer: combineReducers({
    tickers: tickerReducers.tickersReducer,
    filter: tickerReducers.filterReducer,
    interval: timerReducer,
    isConnected: connectionReducer,
  }),
});

// eslint-disable-next-line
export default { store };
