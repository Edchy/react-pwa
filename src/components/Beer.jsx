import PropTypes from "prop-types";
import { translations } from "../utils/translations";
import { Link } from "react-router-dom";
function Beer({ data }) {
  return (
    <li className="beer">
      <p className="light">{data.typ}</p>
      <Link data={data} key={data._id} to={`/beers/${data._id}`}>
        <h2>{data.namn}</h2>
      </Link>
      <p className="light">{data.ekologisk ? "Eko" : ""}</p>
      <a
        target="_blank"
        rel="noreferrer"
        className="text-xs underline"
        href={`https://www.systembolaget.se/sortiment/?q=${data.nr}`}
      >
        Nr: {data.nr}
      </a>
      <div className="light flex text-xs items-center gap-2">
        <img
          className="w-6 h-6"
          src={`https://flagsapi.com/${translations[data.land]}/flat/64.png`}
        ></img>
        <p className="capitalize">{data.land}</p>
        <p>{data.volym}</p>
        <p>{data.alkohol}</p>
        <p>{data.pris}</p>
      </div>
    </li>
  );
}

Beer.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Beer;
