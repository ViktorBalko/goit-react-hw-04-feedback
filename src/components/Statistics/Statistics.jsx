import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <ul className={style.StatisticsList}>
      <li className={style.StatisticsListItem}>Good: {good}</li>
      <li className={style.StatisticsListItem}>Neutral: {neutral}</li>
      <li className={style.StatisticsListItem}>Bad: {bad}</li>

      <li className={style.StatisticsListItem}>
        Total:
        <span className={style.StatisticsListItemNumber}>{total}</span>
      </li>

      <li className={style.StatisticsListItem}>
        Positive feedback:{' '}
        <span className={style.StatisticsListItemNumber}>
          {positivePercent}
        </span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
