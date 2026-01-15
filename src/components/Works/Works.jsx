import { NavLink } from "react-router-dom";
import css from "./Works.module.scss";
import { projects } from "@/helpers/constants";

export default function Works() {
  return (
    <section className={css.works}>
      <div className={`${css.works__container} ${css.container}`}>
        <h2 className={css.visuallyHidden}>works</h2>
        <NavLink
          className={`${css.works__btn} ${css.works__btnPulse}`}
          to="/projects"
        >
          check my projects
        </NavLink>
        <div>
          <ul className={css.works__list}>
            {projects.slice(0, 4).map(project => (
              <li key={project.id} className={css.works__item}>
                <NavLink to={`/projects#project-${project.id}`}>
                  <img src={`/${project.img}.png`} alt={project.name} />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
