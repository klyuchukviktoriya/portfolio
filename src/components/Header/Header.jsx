import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
import { useState, useEffect } from "react";
import Modal from "../Menu/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // блокируем скролл
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <h2>Viсtoria Klyuchuk</h2>
        <button className={css.menuBtn} onClick={() => setIsOpen(true)}>
          <svg className={css.menuIcon}>
            <use href="/sprite.svg#icon-menu"></use>
          </svg>
        </button>
        {/* <nav className={css.modal__nav}>
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
        </nav> */}
        {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      </div>
    </header>
  );
}
