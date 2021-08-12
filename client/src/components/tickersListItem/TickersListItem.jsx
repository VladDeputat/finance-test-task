import React from 'react';
import styles from './tickersListItem.module.scss';

const TickersListItem = ({
  ticker,
  price,
  change,
  change_percent,
  dividend,
  yield: income,
  last_trade_time,
}) => {
  return (
    <li className={styles.tickerListItem}>
      <ul className={styles.tickerDetailsList}>
        <li className={styles.tickerDetail_ticker}>{ticker}</li>
        <li className={styles.tickerDetailsList_item}>{price}</li>
        <li className={styles.tickerDetailsList_item}>{change}</li>
        <li className={styles.tickerDetailsList_item}>{change_percent}</li>
        <li className={styles.tickerDetailsList_item}>{dividend}</li>
        <li className={styles.tickerDetailsList_item}>{income}</li>
        {/* <li className={styles.tickerDetailsList_item}>{last_trade_time}</li> */}
      </ul>
    </li>
  );
};

export default TickersListItem;
