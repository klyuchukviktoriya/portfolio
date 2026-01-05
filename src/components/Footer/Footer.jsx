import SocLinks from "../SocLinks/SocLinks";
import css from "./Footer.module.scss";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={`${css.footer__container} ${css.container}`}>
        <SocLinks />
        <p>Designed & built by Victoria Klyuchuk &copy; copyright 2026</p>
      </div>
    </footer>
  );
}
