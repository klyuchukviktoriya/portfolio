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
          aria-label="Close navigation menu"
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
            to="/projects"
            aria-label="link to projects page"
          >
            Projects
          </NavLink>
        </nav>
        <SocLinks className={css.mobileOnly} />
      </div>
    </div>
  );
}
