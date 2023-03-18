import React, { Component } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackButtons } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goClickFeedbackIncrement = evt => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };

  goTotalFeedbackNumber() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  goPositiveFeedbackPercent() {
    const total = this.goTotalFeedbackNumber();
    return Math.round((this.state.good / total) * 100);
  }

  render() {
    const total = this.goTotalFeedbackNumber();
    const positivePercent = this.goPositiveFeedbackPercent();

    return (
      <>
        <h1 className="HomeworkTitle">React HW#2 ~ Feedback</h1>
        <Section title={'Leave Your Feedback'}>
          <FeedbackButtons
            buttons={this.state}
            leaveFeedback={this.goClickFeedbackIncrement}
          />
          <div>
            {total < 1 ? (
              <Notification message={'There are no feedback here. Be first!'} />
            ) : (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercent={positivePercent}
              />
            )}
          </div>
        </Section>
      </>
    );
  }
}

export default App;
