import { createSelector } from 'reselect';

const getAllTickers = state => state.tickers;
const getFilter = state => state.filter;

const getFiltredTickers = createSelector(
  [getAllTickers, getFilter],
  (tickers, filter) => {
    const normFilter = filter.toLowerCase();
    return tickers?.filter(({ ticker }) =>
      ticker.toLowerCase().includes(normFilter),
    );
  },
);

export { getAllTickers, getFilter, getFiltredTickers };
