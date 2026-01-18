import css from "./Job.module.scss";

export default function Job() {
  return (
    <section className={css.job}>
      <div className={`${css.job__container} ${css.container}`}>
        <h3>I'm looking for my first job or real projects</h3>
      </div>
    </section>
  );
}
