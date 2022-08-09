import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  transform: translate(45%, 50%);
`;

const Loader = () => {
  return (
    <Backdrop>
      <TailSpin color="#2da8d8ff" width={80} heigth={80} />
    </Backdrop>
  );
};

export default Loader;
