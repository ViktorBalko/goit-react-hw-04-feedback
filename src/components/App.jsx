import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('Invalid option');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositivePercent = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <div className="AppBox">
      <h1 className="HomeworkTitle">React HW4 ~ Feedback</h1>
      <Section>
        <div className="FeedbackBox">
          <FeedbackButtons
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={leaveFeedback}
          />
          <div className="StatisticsBox">
            {countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercent={countPositivePercent()}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;
