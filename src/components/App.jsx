import { GlobalStyle } from './GlobalStyles';
import axios from 'axios';

export const App = () => {
  const { REACT_APP_API_KEY } = process.env;

  const resp = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/550?api_key=${REACT_APP_API_KEY}`
    );
    console.log(response);
  };

  resp();

  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <GlobalStyle />
    </>
  );
};
