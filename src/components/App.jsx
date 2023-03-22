import { Component } from 'react';
import Section from './section';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    // let value = e.target.textContent;
    let value = e.target.value;
    this.setState(prev => ({ [value]: prev[value] + 1 }));
  };

  countTotalFeedback() {
    return this.state.bad + this.state.neutral + this.state.good;
  }

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      totalFeedback > 0
        ? Math.ceil((this.state.good / totalFeedback) * 100)
        : 0;
    return positiveFeedbackPercentage;
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.addFeedback} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            onCountTotalFeedback={this.countTotalFeedback()}
            onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
export default App;
