import { NavLink } from "react-router-dom";
import css from "./Menu.module.scss";
import SocLinks from "../SocLinks/SocLinks";

export default function Menu({ onClose }) {
  return (
    <div className={css.menu}>
      <div className={css.menu__content}>
        <button
          onClick={onClose}
          className={css.menu__closeBtn}
          type="button"
          aria-label="Close menu"
        >
          <svg>
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <nav className={css.menu__nav}>
          <NavLink onClick={onClose} to="/" aria-label="link to home page">
            Home
          </NavLink>
          <NavLink
            onClick={onClose}
            to="/works"
            aria-label="link to works page"
          >
            Works
          </NavLink>
        </nav>
        <SocLinks />
      </div>
    </div>
  );
}

//       <nav className="menu"
//         onClick={e => e.stopPropagation()}>
//       </nav>
