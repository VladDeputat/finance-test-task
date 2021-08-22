import { socket } from '../../helpers/socket';
import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
  setTickerRequest,
  setTickerSuccess,
  setTickerError,
  unsetTickerRequest,
  unsetTickerSuccess,
  unsetTickerError,
} from './tickers-actions';

const getTickers = () => async dispatch => {
  dispatch(getTickersRequest());

  try {
    socket.on('ticker', function (res) {
      dispatch(getTickersSuccess(res));
    });
  } catch (err) {
    dispatch(getTickersError(err.message));
  }
};

const setTicker = ticker => async dispatch => {
  dispatch(setTickerRequest());

  try {
    socket.emit('setTicker', ticker);
    socket.on('tickersToRecommend', function (res) {
      dispatch(setTickerSuccess(res));
    });
  } catch (err) {
    dispatch(setTickerError(err.message));
  }
};

const unsetTicker = ticker => async dispatch => {
  dispatch(unsetTickerRequest());

  try {
    socket.emit('unsetTicker', ticker);
    socket.on('tickersToRecommend', function (res) {
      dispatch(unsetTickerSuccess(res));
    });
  } catch (err) {
    dispatch(unsetTickerError(err.message));
  }
};

const getTickersToRecommend = () => async dispatch => {
  socket.on('tickersToRecommend', function (res) {
    dispatch(setTickerSuccess(res));
  });
};

export { getTickers, setTicker, unsetTicker, getTickersToRecommend };
