import React from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackButtons.module.css';

const FeedbackButtons = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={style.FeedbackButtons__section}>
      <h2 className={style.FeedbackSection__title}>Leave your Feedback</h2>
      <li className={style.FeedbackButtons__item}>
        {options.map(option => (
          <button
            className={style.FeedbackButtons__button}
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </li>
    </ul>
  );
};

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackButtons;
