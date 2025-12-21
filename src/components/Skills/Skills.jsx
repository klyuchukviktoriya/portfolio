import css from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={css.about}>
      <div className={`${css.about__container} ${css.container}`}>
        <h2 className={css.about__title}>about</h2>
        <div className={css.about__wrapper}>
          <img
            // className={css.about__img}
            src="/my-photo.jpg"
            alt="Klyuchuk Victoria"
          />
        </div>

        <p className={css.about__text}>
          I’m just a beginner who cares a lot about details. I love learning by
          doing and creating interfaces that look visually appealing and feel
          comfortable to use.
        </p>
        <p className={css.about__text}>
          I’ve already built a few pet projects while learning React and modern
          UI techniques. Clean layouts, smooth interactions and refined styling
          are the things that excite me the most.
        </p>
      </div>
    </section>
  );
}
