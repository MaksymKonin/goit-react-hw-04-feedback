import { Component } from 'react';
import Section from './section';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';
import Notification from './notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    // let value = e.target.textContent;
    let value = e.target.value;
    return this.setState(prev => ({ [value]: prev[value] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      totalFeedback > 0
        ? Math.ceil((this.state.good / totalFeedback) * 100)
        : 0;
    return positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.addFeedback} />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              onCountTotalFeedback={this.countTotalFeedback}
              onCountPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
