import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
  return (
    <ul className={style.StatisticsList}>
      <li className={style.StatisticsList__item}>{good}</li>
      <li className={style.StatisticsList__item}>{neutral}</li>
      <li className={style.StatisticsList__item}>{bad}</li>
      <li className={style.StatisticsList__item}>
        Total feedback:{' '}
        <span className={style.StatisticsList__itemNumber}>{total}</span>
      </li>
      <li className={style.StatisticsList__item}>
        Positive feedback:{' '}
        <span className={style.StatisticsList__itemNumber}>
          {positivePercent}
          <span className={style.StatisticsList__itemPercent}>%</span>
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
