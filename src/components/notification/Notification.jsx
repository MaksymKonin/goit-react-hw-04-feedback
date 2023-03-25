import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
export default Notification;

Notification.prototypes = { message: PropTypes.string.isRequired };
