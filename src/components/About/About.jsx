import css from "./About.module.scss";

export default function About() {
  return (
    <section className={css.about}>
      <div className={`${css.about__container} ${css.container}`}>
        <h2 className={css.about__title}>about</h2>
        <div className={css.about__content}>
          <div className={css.about__text}>
            <p>
              I’m a front-end developer who cares a lot about details. I love
              learning by doing and creating interfaces that look visually
              appealing and feel comfortable to use.
            </p>
            <p>
              I’ve already built a few pet projects while learning React and
              modern UI techniques. Clean layouts, smooth interactions and
              refined styling are the things that excite me the most.
            </p>
          </div>
          <div className={css.about__wrapper}>
            <img src="/my-photo.jpg" alt="Klyuchuk Victoria" />
          </div>
        </div>
      </div>
    </section>
  );
}
