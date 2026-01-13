import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
import { useState, useEffect } from "react";
import Modal from "../Menu/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${css.header} ${scrolled ? css.scrolled : ""}`}>
      <div className={css.header__container}>
        <h2>Viсtoria Klyuchuk</h2>
        <button className={css.header__menuBtn} onClick={() => setIsOpen(true)}>
          <svg>
            <use href="/sprite.svg#icon-menu"></use>
          </svg>
        </button>
        <nav className={css.header__nav}>
          <NavLink to="/" aria-label="link to home page">
            Home
          </NavLink>
          <NavLink to="/projects" aria-label="link to projects page">
            Projects
          </NavLink>
        </nav>
        {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      </div>
    </header>
  );
}
