import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function PageNavButton({ path, title = "back" }) {
  const navigate = useNavigate();

  function navigateTo() {
    navigate(path);
    // scrolla till toppen av sidan
    window.scrollTo(0, 0);
  }
  return (
    <button
      onClick={navigateTo}
      className="btn nav-btn bg-white text-black px-4 py-2 hover:opacity-70 rounded-xl text-sm block mt-8 mx-auto"
    >
      {title}
    </button>
  );
}

PageNavButton.propTypes = {
  path: PropTypes.number.isRequired,
  title: PropTypes.string,
};
