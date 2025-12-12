import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <NavLink to="/">home</NavLink>

      <NavLink to="/about">about</NavLink>

      <NavLink to="/skills">skills</NavLink>
    </nav>
  );
}
