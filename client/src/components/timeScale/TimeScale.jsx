import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimer, getCurInterval } from '../../redux/timer/timer-operations';
import { curIntervalSelector } from '../../redux/timer/timer-selectors';
import {
  intervalSelect_box,
  intervalSelect_text,
  intervalSelect,
  intervalSelect_label,
} from './TimeScale.module.scss';

const TimeScale = () => {
  const dispatch = useDispatch();
  const interval = useSelector(curIntervalSelector) / 1000;

  useEffect(() => {
    dispatch(getCurInterval());
  }, [dispatch]);

  const onChangeInterval = e => {
    dispatch(setTimer(e.target.value));
  };

  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={intervalSelect_box}>
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
    </div>
  );
};

export default TimeScale;
