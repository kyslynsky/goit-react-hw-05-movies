import { Link } from 'react-router-dom';

const MoviesListItem = ({ id, title, poster }) => {
  return (
    <li>
      <Link to={`${id}`}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
        </div>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default MoviesListItem;
