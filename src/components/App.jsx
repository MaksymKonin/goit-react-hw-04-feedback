import { useState } from 'react';
import Section from './section';
import FeedbackOptions from './feedbackOptions';
import Statistics from './statistics';
import Notification from './notification';

export default function App() {
  const [good, setGodd] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = e => {
    const { value } = e.target;
    switch (value) {
      case 'good':
        setGodd(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return bad + neutral + good;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const positiveFeedbackPercentage =
      totalFeedback > 0 ? Math.ceil((good / totalFeedback) * 100) : 0;
    return positiveFeedbackPercentage;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={addFeedback} />
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            onCountTotalFeedback={countTotalFeedback}
            onCountPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}
