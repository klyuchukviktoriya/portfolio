import css from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={`${css.hero__container} container`}>
        <div className={css.hero__info}>
          {/* <p className={css.hero__hello}>Hello :)</p> */}
          <h1>Front-End Developer</h1>
          <p>Viktoriya Klyuchuk </p>
        </div>
      </div>
    </section>
  );
}
