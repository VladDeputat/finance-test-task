import { configureStore, combineReducers } from "@reduxjs/toolkit";

import reducers from "../redux/tickers-reducers";

const tickersReducer = combineReducers({
  tickers: reducers.tickersReducers,
});

let store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
});

// eslint-disable-next-line
export default { store };
