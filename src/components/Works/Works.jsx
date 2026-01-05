import { NavLink } from "react-router-dom";
import css from "./Works.module.scss";

export default function Works() {
  return (
    <section className={css.works}>
      <div className={`${css.works__container} ${css.container}`}>
        <h2 className={css.visuallyHidden}>works</h2>{" "}
        <NavLink className={css.works__link} to="/works">
          check my works
        </NavLink>
        <div>
          <ul className={css.works__list}>
            <li className={css.works__item}>
              <img src="/demo.jpg" alt="demo" />
            </li>
            <li className={css.works__item}>
              <img src="/demo.jpg" alt="demo" />
            </li>
            <li className={css.works__item}>
              <img src="/demo.jpg" alt="demo" />
            </li>
            <li className={css.works__item}>
              <img src="/demo.jpg" alt="demo" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
