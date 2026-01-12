import css from "./Project.module.scss";

export default function Project({
  id,
  img,
  demo,
  github,
  design,
  name,
  technologies,
  type,
  //   description,
}) {
  return (
    <div id={`project-${id}`} className={css.project}>
      <h3>{name}</h3>
      <div className={css.project__imageWrapper}>
        <p>{id}</p>
        <img src={`${img}.png`} />
      </div>

      {/* <p className={css.project__description}>{description}</p> */}
      <div className={css.project__details}>
        <div>
          <ul>
            {technologies.map((technology, index) => (
              <li key={index}>
                <span></span>
                {technology}
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <span></span>
              <a
                className={css.project__link}
                href={demo}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
              </a>
            </li>
            <li>
              <span></span>
              <a
                className={css.project__link}
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <ul className={css.project__description}>
          {design.map((item, index) => (
            <li key={index}>
              <span></span>
              {item}
            </li>
          ))}
          <li>
            <span></span> {type}
          </li>
        </ul>
      </div>
    </div>
  );
}
