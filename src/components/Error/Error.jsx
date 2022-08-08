import PropTypes from 'prop-types';
import { Container } from 'components/GlobalStyles';
import { Text } from './Error.styled';

export const ErrorBlock = ({ message }) => {
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
};

ErrorBlock.propTypes = {
  message: PropTypes.string,
};
