import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css.wrap}>
      <button className={css.btn} value="good" onClick={onLeaveFeedback}>
        good
      </button>
      <button className={css.btn} value="neutral" onClick={onLeaveFeedback}>
        neutral
      </button>
      <button className={css.btn} value="bad" onClick={onLeaveFeedback}>
        bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
Notification.prototypes = { onLeaveFeedback: PropTypes.func.isRequired };
