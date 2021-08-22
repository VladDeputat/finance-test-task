import { createAction } from '@reduxjs/toolkit';

const getTickersRequest = createAction('tickers/getTickersRequest');
const getTickersSuccess = createAction('tickers/getTickersSuccess');
const getTickersError = createAction('tickers/getTickersError');

const setTickerRequest = createAction('tickers/setTickerRequest');
const setTickerSuccess = createAction('tickers/setTickerSuccess');
const setTickerError = createAction('tickers/setTickerError');

const unsetTickerRequest = createAction('tickers/unsetTickerRequest');
const unsetTickerSuccess = createAction('tickers/unsetTickerSuccess');
const unsetTickerError = createAction('tickers/unsetTickerError');

const filterTickers = createAction('tickers/filterTickers');

export {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
  setTickerRequest,
  setTickerSuccess,
  setTickerError,
  unsetTickerRequest,
  unsetTickerSuccess,
  unsetTickerError,
  filterTickers,
};
