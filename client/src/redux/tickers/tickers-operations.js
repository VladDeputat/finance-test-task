import { socket } from '../../helpers/socket';
import {
  getTickersRequest,
  getTickersSuccess,
  getTickersError,
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

export { getTickers };
