import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { getTickers } from '../../redux/tickers/tickers-operations';
import { getFiltredTickers } from '../../redux/tickers/tickers-selectors';
import TickersListItem from '../tickersListItem/TickersListItem';

import styles from './TickersList.module.scss';

const TickersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickers());
  }, [dispatch]);

  let tickers = useSelector(getFiltredTickers);

  // let tickersToShow = names;
  // let tickersToRecommend = [];

  // const handleDelete = e => {
  //   tickersToShow = tickersToShow.filter(
  //     ({ ticker }) => ticker !== e.target.id,
  //   );
  //   tickersToRecommend.push(e.target.id);
  // };

  return (
    <>
      {tickers.length > 0 && (
        <div className={styles.tickersListBox}>
          <h1 className={styles.tickersListHeading}>Tickers Live</h1>
          <ul className={styles.tickerDetailHead}>
            <li className={styles.tickerDetailHead_item}>Ticker</li>
            <li className={styles.tickerDetailHead_item}>Price</li>
            <li className={styles.tickerDetailHead_item}>Change</li>
            <li className={styles.tickerDetailHead_item}>Change %</li>
            <li className={styles.tickerDetailHead_item}>Dividend</li>
            <li className={styles.tickerDetailHead_item}>Income</li>
          </ul>
          <ul className={styles.tickersList}>
            {tickers.map(ticker => (
              <TickersListItem
                key={uuid()}
                {...ticker}
                // handleDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TickersList;
