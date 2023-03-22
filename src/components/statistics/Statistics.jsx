const Section = ({
  good,
  neutral,
  bad,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>Total: {onCountTotalFeedback}</p>
      <p>Pozitive feedback: {onCountPositiveFeedbackPercentage}%</p>
    </div>
  );
};
export default Section;
