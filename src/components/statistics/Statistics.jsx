import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  onCountTotalFeedback,
  onCountPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h2 className={css.title}>Statistics</h2>
      <div className={css.wrap}>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <b>Total: {onCountTotalFeedback()}</b>
        <b>Pozitive feedback: {onCountPositiveFeedbackPercentage()}%</b>
      </div>
    </div>
  );
};
export default Statistics;

Statistics.prototypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onCountTotalFeedback: PropTypes.func.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
