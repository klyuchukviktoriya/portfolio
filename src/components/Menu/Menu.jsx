import { NavLink } from "react-router-dom";
import css from "./Menu.module.scss";

export default function Menu({ onClose }) {
  return (
    <div className={css.modal}>
      <div className={css.modal__content}>
        <button
          onClick={onClose}
          className={css.menuBtn}
          type="button"
          aria-label="Close menu"
        >
          <svg className={css.menuIcon}>
            <use href="/sprite.svg#icon-close"></use>
          </svg>
        </button>
        <nav className={css.modal__nav}>
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
      </div>
    </div>
  );
}

//       <nav className="menu"
//         onClick={e => e.stopPropagation()}>
//       </nav>
