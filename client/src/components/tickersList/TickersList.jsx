import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { getTickers } from '../../redux/tickers/tickers-operations';
import {
  getFiltredTickers,
  getPrevTickers,
} from '../../redux/tickers/tickers-selectors';
import TickersListItem from '../tickersListItem/TickersListItem';

import styles from './TickersList.module.scss';

const TickersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickers());
  }, [dispatch]);

  const freshTickers = useSelector(getFiltredTickers);
  const prevTickers = useSelector(getPrevTickers);

  const tickers = freshTickers.map(item => {
    const it = prevTickers?.map(({ ticker, price }) => {
      return { ticker, prevPrice: price };
    });
    const prevPrice = it?.filter(({ ticker }) => ticker === item.ticker)[0]
      ?.prevPrice;

    return { ...item, prevPrice };
  });

  return (
    <div className={styles.tickersListBox}>
      {tickers.length > 0 ? (
        <>
          <h1 className={styles.tickersListHeading}>Tickers Live</h1>
          <ul className={styles.tickerDetailHead}>
            <li className={styles.tickerDetailHead_item}>Ticker</li>
            <li className={styles.tickerDetailHead_item}>Price</li>
            <li className={styles.tickerDetailHead_item}>Change</li>
            <li className={styles.tickerDetailHead_item}>Change %</li>
            <li className={styles.tickerDetailHead_item}>Dividend</li>
            <li className={styles.tickerDetailHead_item}>Yield</li>
          </ul>
          <ul className={styles.tickersList}>
            {tickers.map(ticker => (
              <TickersListItem key={uuid()} {...ticker} />
            ))}
          </ul>
        </>
      ) : (
        <h1 className={styles.tickersListHeading}>No tickers to show</h1>
      )}
    </div>
  );
};

export default TickersList;
