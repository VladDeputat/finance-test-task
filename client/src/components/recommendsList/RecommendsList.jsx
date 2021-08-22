import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTickersToRecommend,
  setTicker,
} from '../../redux/tickers/tickers-operations';
import { tickersToRecommendSelector } from '../../redux/tickers/tickers-selectors';
import styles from './RecommendsList.module.scss';

const RecommendsList = () => {
  const dispatch = useDispatch();
  const tickersToRecommend = useSelector(tickersToRecommendSelector);

  useEffect(() => {
    dispatch(getTickersToRecommend());
  }, [dispatch]);

  const handleClick = e => {
    dispatch(setTicker(e.target.id));
  };

  return (
    <>
      {tickersToRecommend.length > 0 && (
        <div className={styles.recommendsListBox}>
          <h1 className={styles.recommendsListHeading}>You may add</h1>
          <ul className={styles.recommendsList}>
            {tickersToRecommend.map(ticker => (
              <li
                className={styles.recommendsListItem}
                key={ticker}
                id={ticker}
                onClick={handleClick}
              >
                {ticker}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default RecommendsList;
