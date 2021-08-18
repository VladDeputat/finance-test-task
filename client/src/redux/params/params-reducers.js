import { createReducer } from '@reduxjs/toolkit';
import { setConnection, setTimerSuccess } from './params-actions';

const timerReducer = createReducer('', {
  [setTimerSuccess]: (_, { payload }) => payload,
});

const connectionReducer = createReducer('', {
  [setConnection]: (_, { payload }) => payload,
});

export { timerReducer, connectionReducer };
