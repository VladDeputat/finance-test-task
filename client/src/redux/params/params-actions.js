import { createAction } from '@reduxjs/toolkit';

const setTimerRequest = createAction('timer/setTimerRequest');
const setTimerSuccess = createAction('timer/setTimerSuccess');
const setTimerError = createAction('timer/setTimerError');

const setConnection = createAction('connection/setConnection');

export { setTimerRequest, setTimerSuccess, setTimerError, setConnection };
