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
  intervalSelect_subbox,
  intervalSelect_text,
  intervalSelect,
} from './TimeSelect.module.scss';

const TimeSelect = () => {
  const dispatch = useDispatch();
  const interval = useSelector(curIntervalSelector) / 1000;
  const connect = useSelector(connectionSelector);
  const lastTrade = useSelector(lastTradeTimeSelector);

  const time = () => {
    const date = new Date(lastTrade);
    const time =
      +date.getHours().toString().padStart(2, '0') +
      3 +
      ':' +
      date.getMinutes().toString().padStart(2, '0') +
      ':' +
      date.getSeconds().toString().padStart(2, '0');
    return new Date(lastTrade).getTime() ? time : lastTrade;
  };

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
          <p className={intervalSelect_text}>You're getting data</p>
          <div className={intervalSelect_subbox}>
            <p className={intervalSelect_text}>every</p>

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
          </div>
        </>
      ) : (
        <>
          <p className={intervalSelect_text}>You're disconnected.</p>
          <p className={intervalSelect_text}>Last trade time</p>
          <p className={intervalSelect_text}>was at {time()}</p>
        </>
      )}
    </div>
  );
};

export default TimeSelect;
