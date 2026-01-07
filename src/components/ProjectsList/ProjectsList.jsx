import css from "./ProjectsList.module.scss";
import projects from "../../helpers";
import Project from "../Project/Project";

export default function ProjectsList() {
  return (
    <section className={css.projects}>
      <div className={css.projects__container}>
        <h2>works</h2>
        <ul>
          {projects.map(project => {
            <Project key={project.id} {...project} />;
          })}
        </ul>
      </div>
    </section>
  );
}
