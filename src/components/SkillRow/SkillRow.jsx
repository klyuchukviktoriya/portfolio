import css from "./SkillRow.module.scss";
export default function SkillRow({ name, value, icon }) {
  return (
    <li className={css.skill}>
      {icon && (
        <svg className={css.icon}>
          <use href={`/sprite.svg#icon-${icon}`} />
        </svg>
      )}

      <span className={css.label}>{name}</span>

      <div className={css.line}>
        <span style={{ left: `${value}%` }} />
      </div>
    </li>
  );
}
