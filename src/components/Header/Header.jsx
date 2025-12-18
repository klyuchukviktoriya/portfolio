import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
export default function Header() {
  return (
    <header>
      <h2>Viсtoria Klyuchuk</h2>
      <svg className={css.menuIcon}>
        <use src="/sprite.svg#icon-menu"></use>
      </svg>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/works">works</NavLink>
      </nav>
    </header>
  );
}
