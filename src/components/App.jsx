import { Component } from 'react';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import FeedbackOptions from './feedbackoptions/FeedbackOptions';
import Notification from './notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  StatisticsIncrement = event => {
    this.setState(prevState => ({
      [event.target.id]: prevState[event.target.id] + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.StatisticsIncrement}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
