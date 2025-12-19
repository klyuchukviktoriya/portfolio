import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <h2>Viсtoria Klyuchuk</h2>
        {/* <button>
          <svg className={css.menuIcon}>
            <use href="/sprite.svg#icon-menu"></use>
          </svg>
        </button> */}
        {/* <button>
        c
        <svg className={css.menuIcon}>
          <use href="/sprite.svg#icon-menu"></use>
        </svg>
      </button> */}

        <nav className={css.header__nav}>
          <NavLink to="/">home</NavLink>
          <NavLink to="/works">works</NavLink>
        </nav>
      </div>
    </header>
  );
}
