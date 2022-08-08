import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

BackLink.propTypes = {
  to: PropTypes.any.isRequired,
  children: PropTypes.string.isRequired,
};
