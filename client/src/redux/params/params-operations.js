import { socket } from '../../helpers/socket';
import {
  setTimerRequest,
  setTimerSuccess,
  setTimerError,
  setConnection,
} from './params-actions';

const setTimer = time => async dispatch => {
  dispatch(setTimerRequest());

  try {
    socket.emit('timer', time);
    socket.disconnect();
    socket.connect(socket.emit('start'));
    socket.on('curInterval', function (res) {
      dispatch(setTimerSuccess(res));
    });
  } catch (err) {
    dispatch(setTimerError(err.message));
  }
};

const getCurInterval = () => async dispatch => {
  socket.on('curInterval', function (res) {
    dispatch(setTimerSuccess(res));
  });
};

const setConnect = res => async dispatch => {
  dispatch(setConnection(res));
};

export { setTimer, getCurInterval, setConnect };
