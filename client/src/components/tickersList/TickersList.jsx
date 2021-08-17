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

  const tickers = useSelector(getFiltredTickers);
  // const tickersTest = [
  //   {
  //     change: '46.78',
  //     change_percent: '0.55',
  //     dividend: '0.37',
  //     exchange: 'NASDAQ',
  //     last_trade_time: '2021-08-12T07:15:57.000Z',
  //     price: '100.10',
  //     ticker: 'ONE',
  //     yield: '1.40',
  //   },
  //   {
  //     change: '46.78',
  //     change_percent: '0.55',
  //     dividend: '0.37',
  //     exchange: 'NASDAQ',
  //     last_trade_time: '2021-08-12T07:15:57.000Z',
  //     price: '150.15',
  //     ticker: 'TWO',
  //     yield: '1.40',
  //   },
  //   {
  //     change: '46.78',
  //     change_percent: '0.55',
  //     dividend: '0.37',
  //     exchange: 'NASDAQ',
  //     last_trade_time: '2021-08-12T07:15:57.000Z',
  //     price: '220.20',
  //     ticker: 'THREE',
  //     yield: '1.40',
  //   },
  // ];

  // const sorted = tickers.sort(function (a, b) {
  //   return a.price - b.price;
  // });

  // console.log(sorted);

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
            {/* <li className={styles.tickerDetailHead_item}>Last trade time</li> */}
          </ul>
          <ul className={styles.tickersList}>
            {tickers.map(ticker => (
              <TickersListItem key={uuid()} {...ticker} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default TickersList;
