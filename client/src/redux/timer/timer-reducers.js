import { createReducer } from '@reduxjs/toolkit';
import { setTimerSuccess } from './timer-actions';

const timerReducer = createReducer('', {
  [setTimerSuccess]: (_, { payload }) => payload,
});

export default timerReducer;
