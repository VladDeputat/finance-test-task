import { createSelector } from 'reselect';

const getFreshTickers = ({ tickers }) =>
  tickers.length > 0 ? tickers[tickers.length - 1] : [];

const getFilter = state => state.filter;

const getFiltredTickers = createSelector(
  [getFreshTickers, getFilter],
  (tickers, filter) => {
    const normFilter = filter.toLowerCase();
    return tickers.filter(({ ticker }) =>
      ticker.toLowerCase().includes(normFilter),
    );
  },
);

const lastTradeTimeSelector = ({ tickers }) =>
  tickers.length > 0
    ? tickers[tickers.length - 1][0].last_trade_time
    : 'some time';

export { getFreshTickers, getFilter, getFiltredTickers, lastTradeTimeSelector };
