import PropTypes from "prop-types";
import { translations } from "../utils/translations";
import { Link } from "react-router-dom";
function Beer({ beer }) {
  return (
    <li className="beer">
      <p className="light">{beer.typ}</p>
      <Link beer={beer} key={beer._id} to={`/beers/${beer._id}`}>
        <h2>{beer.namn}</h2>
      </Link>
      <p className="light">{beer.ekologisk ? "Eko" : ""}</p>
      <a
        target="_blank"
        rel="noreferrer"
        className="text-xs underline"
        href={`https://www.systembolaget.se/sortiment/?q=${beer.nr}`}
      >
        Nr: {beer.nr}
      </a>
      <div className="light flex text-xs items-center gap-2">
        <img
          className="w-6 h-6"
          src={`https://flagsapi.com/${translations[beer.land]}/flat/64.png`}
        ></img>
        <p className="capitalize">{beer.land}</p>
        <p>{beer.volym}</p>
        <p>{beer.alkohol}</p>
        <p>{beer.pris}</p>
      </div>
    </li>
  );
}

Beer.propTypes = {
  beer: PropTypes.object.isRequired,
};

export default Beer;
