import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimer, getCurInterval } from '../../redux/params/params-operations';
import {
  connectionSelector,
  curIntervalSelector,
} from '../../redux/params/params-selectors';
import { lastTradeTimeSelector } from '../../redux/tickers/tickers-selectors';
import {
  intervalSelect_box,
  intervalSelect_text,
  intervalSelect,
} from './TimeScale.module.scss';

const TimeScale = () => {
  const dispatch = useDispatch();
  const interval = useSelector(curIntervalSelector) / 1000;
  const connect = useSelector(connectionSelector);
  const lastTrade = useSelector(lastTradeTimeSelector);

  const date = new Date(lastTrade);

  const day =
    date.getUTCDay().toString().padStart(2, '0') +
    '.' +
    date.getUTCMonth().toString().padStart(2, '0') +
    '.' +
    date.getUTCFullYear();

  const time =
    date.getUTCHours().toString().padStart(2, '0') +
    ':' +
    date.getUTCMinutes().toString().padStart(2, '0') +
    ':' +
    date.getUTCSeconds().toString().padStart(2, '0');

  useEffect(() => {
    dispatch(getCurInterval());
  }, [dispatch]);

  const onChangeInterval = e => {
    dispatch(setTimer(e.target.value));
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={intervalSelect_box}>
      {connect ? (
        <>
          <p className={intervalSelect_text}>You're getting data every</p>
          <select
            name="singleHoursWasted"
            className={intervalSelect}
            onChange={onChangeInterval}
            value={interval}
          >
            {options.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className={intervalSelect_text}>sec</p>
        </>
      ) : (
        <p className={intervalSelect_text}>
          You're disconnected. Last trade time on {day} at {time}
        </p>
      )}
    </div>
  );
};

export default TimeScale;
