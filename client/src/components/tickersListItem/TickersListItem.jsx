import React from 'react';
import { useDispatch } from 'react-redux';
import { unsetTicker } from '../../redux/tickers/tickers-operations';
import styles from './tickersListItem.module.scss';

const TickersListItem = ({
  ticker,
  price,
  prevPrice,
  change,
  change_percent,
  dividend,
  yield: income,
}) => {
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(unsetTicker(e.target.id));
  };

  const stylePicker = () => {
    let listItemStyle = styles.tickerListItem;
    let arrowStyle = styles.tickerDetailsList_arow;
    if (price > prevPrice) {
      listItemStyle = styles.tickerListItem_positive;
      arrowStyle = styles.tickerDetailsList_arow_positive;
    }
    if (price < prevPrice) {
      listItemStyle = styles.tickerListItem_negative;
      arrowStyle = styles.tickerDetailsList_arow_negative;
    }
    return { arrowStyle, listItemStyle };
  };

  return (
    <li className={stylePicker().listItemStyle}>
      <ul className={styles.tickerDetailsList}>
        <li className={styles.tickerDetail_ticker}>{ticker}</li>
        <li className={styles.tickerDetailsList_item}>{price}</li>
        <li className={styles.tickerDetailsList_item}>{change}</li>
        <li className={styles.tickerDetailsList_item}>{change_percent}</li>
        <li className={styles.tickerDetailsList_item}>{dividend}</li>
        <li className={styles.tickerDetailsList_item}>{income}</li>
      </ul>
      <span className={stylePicker().arrowStyle}></span>
      <button
        onClick={handleDelete}
        type="button"
        className={styles.tickerDetailsList_delete}
        id={ticker}
      ></button>
    </li>
  );
};

export default TickersListItem;
