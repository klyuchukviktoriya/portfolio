import css from "./Project.module.scss";

export default function Project({
  id,
  img,
  demo,
  github,
  design,
  name,
  technologies,
  description,
}) {
  return (
    <div id={`project-${id}`} className={css.project}>
      <div className={css.project__imageWrapper}>
        <p>{id}</p>
        <img src={`${img}.jpg`} />
      </div>
      <h3>{name}</h3>
      <p className={css.project__description}>{description}</p>
      <div className={css.project__details}>
        <ul>
          <li>
            <span></span>
            <a href={demo} target="_blank" rel="noreferrer">
              Live demo
            </a>
          </li>
          <li>
            <span></span>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
        <ul>
          {design.map((item, index) => (
            <li key={index}>
              <span></span>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>
              {" "}
              <span></span>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
