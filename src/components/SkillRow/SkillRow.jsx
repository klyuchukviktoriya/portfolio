import css from "./SkillRow.module.scss";
export default function SkillRow({ name, value, icon }) {
  return (
    // <li className={css.skill}>
    //   {icon && (
    //     <svg className={css.skill__icon}>
    //       <use href={`/sprite.svg#icon-${icon}`} />
    //     </svg>
    //   )}
    //   <p className={css.skill__label}>{name}</p>
    //   <div className={css.skill__line}>
    //     <span style={{ left: `${value}%` }} />
    //   </div>
    // </li>
    <li className={`${css.skill} ${icon ? css.withIcon : css.noIcon}`}>
      {icon && (
        <svg className={css.skill__icon}>
          <use href={`/sprite.svg#icon-${icon}`} />
        </svg>
      )}

      <p className={css.skill__label}>{name}</p>

      <div className={css.skill__line}>
        <span style={{ left: `${value}%` }} />
      </div>
    </li>
  );
}
