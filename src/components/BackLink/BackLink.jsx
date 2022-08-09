import PropTypes from 'prop-types';
import { Container } from 'components/GlobalStyles';
import { BackBtn, BackIco } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <Container>
      <BackBtn to={to}>
        <BackIco />
        {children}
      </BackBtn>
    </Container>
  );
};

BackLink.propTypes = {
  to: PropTypes.any.isRequired,
  children: PropTypes.string.isRequired,
};
