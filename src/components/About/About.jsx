import css from "./About.module.scss";

export default function About() {
  return (
    <section id="about" className={css.about}>
      <div className={css.container}>
        <div className={css.about__content}>
          <h2 className={css.about__title}>About Me</h2>

          <p className={css.about__text}>
            I’m Viktoriya — a beginner Front-End Developer who cares a lot about
            details. I love learning by doing and creating interfaces that look
            visually appealing and feel comfortable to use. Yes, I often use
            ChatGPT — because I’m not afraid to look for solutions and learn
            from different sources. But when AI gets confused, my own curiosity
            and logic usually save the situation 😌
          </p>

          <p className={css.about__text}>
            I’ve already built a few pet projects while learning React and
            modern UI techniques. Clean layouts, smooth interactions and refined
            styling are the things that excite me the most. Every day I push
            myself to learn more, experiment with new ideas, and build better.
          </p>
        </div>
      </div>
    </section>
  );
}
