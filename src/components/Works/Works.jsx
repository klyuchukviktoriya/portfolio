import css from "./Works.module.scss";

export default function Works() {
  return (
    <section className={css.works}>
      <div className={css.works__container}>
        <h2 className={css.visuallyHidden}>works</h2>
        <div>Карусель</div>
        <button>check my works</button>
      </div>
    </section>
  );
}
