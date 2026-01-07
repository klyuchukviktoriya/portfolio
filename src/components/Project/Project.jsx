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
    <div className={css.project}>
      <div className={css.project__imageWrapper}>
        <img src={`${img}.jpg`} />
        <p>{id}</p>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={css.project__details}>
        <ul>
          <li>
            <a href={demo} target="_blank" rel="noreferrer">
              Live demo
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
        <ul>
          {design.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
