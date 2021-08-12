import { createAction } from "@reduxjs/toolkit";

const getTickersRequest = createAction("tickers/getTickersRequest");
const getTickersSuccess = createAction("tickers/getTickersSuccess");
const getTickersError = createAction("tickers/getTickersError");

export { getTickersRequest, getTickersSuccess, getTickersError };
