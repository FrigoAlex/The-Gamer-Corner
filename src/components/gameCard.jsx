import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTags, faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const gameCard = ({ name, author, description, image, releaseDate, genre, redirect }) => {
  return (
    <div className="column">
      <div className="card" onClick={redirect}>
        <img className="card-image" src={image} alt={name} />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <ul className="card-footer-list">
            <li className="card-footer-item">
              <FontAwesomeIcon className="card-footer-icon" icon={faUser} />
              {author}
            </li>
            <li className="card-footer-item">
              <FontAwesomeIcon className="card-footer-icon" icon={faTags} />
              {genre}
            </li>
            <li className="card-footer-item">
              <FontAwesomeIcon className="card-footer-icon" icon={faCalendarDay} />
              {releaseDate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default gameCard;
