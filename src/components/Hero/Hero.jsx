import SocLinks from "../SocLinks/SocLinks";
import css from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={css.hero}>
      <div className={css.hero__container}>
        <h1 className={css.hero__title}>
          Front<span className={css.hero__titleGrey}>-End</span>
          <span className={css.hero__titleBig}> Developer</span>
        </h1>
        <ul className={css.hero__list}>
          <li>clean</li>
          <li>responsive</li>
          <li>layouts</li>
        </ul>
        <div className={css.hero__info}>
          <p className={css.hero__text}>
            Based in Ukraine / <span>Open to remote work</span>
          </p>
          <SocLinks className={css.desktopOnly} />
        </div>
      </div>
    </section>
  );
}
