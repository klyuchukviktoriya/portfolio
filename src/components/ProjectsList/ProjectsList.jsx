import css from "./ProjectsList.module.scss";
import Project from "../Project/Project";
import { projects } from "../../helpers/constants.js";

export default function ProjectsList() {
  return (
    <section className={css.projects}>
      <div className={css.projects__container}>
        <h2>works</h2>
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
