import { createAction } from '@reduxjs/toolkit';

const getTickersRequest = createAction('tickers/getTickersRequest');
const getTickersSuccess = createAction('tickers/getTickersSuccess');
const getTickersError = createAction('tickers/getTickersError');

const filterTickers = createAction('tickers/filterTickers');

export { getTickersRequest, getTickersSuccess, getTickersError, filterTickers };
