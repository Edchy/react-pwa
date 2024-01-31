// eslint-disable-next-line react/prop-types
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isScrolled ? "scrolled" : ""
      } flex bg-neutral-950 text-white justify-between items-center py-2`}
    >
      <div>
        <Link className="flex items-center logo" to="/">
          <img className="h-20" src="images/logo.svg" alt="beer bottle logo" />
          <span>Hoppy!</span>
        </Link>
      </div>
      <nav>
        <NavMobile />
        <NavDesktop />
      </nav>
    </header>
  );
}

export default Header;
