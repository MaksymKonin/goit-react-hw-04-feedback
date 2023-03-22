const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button value="good" onClick={onLeaveFeedback}>
        good
      </button>
      <button value="neutral" onClick={onLeaveFeedback}>
        neutral
      </button>
      <button value="bad" onClick={onLeaveFeedback}>
        bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
