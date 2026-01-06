import { languages, personalSkills, softwareSkills } from "@/helpers/constants";
import SkillRow from "../SkillRow/SkillRow";
import css from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={css.skills}>
      <div className={`${css.skills__container} ${css.container}`}>
        <h2 className={css.skills__title}>skills</h2>
        <div className={css.skills__list}>
          <div className={css.skills__soft}>
            <div className={css.skills__item}>
              <h3>Languages</h3>
              <ul>
                {languages.map(item => (
                  <SkillRow key={item.name} {...item} />
                ))}
              </ul>
            </div>
            <div className={css.skills__item}>
              <h3>Personal skills</h3>
              <ul>
                {personalSkills.map(item => (
                  <SkillRow key={item.name} {...item} />
                ))}
              </ul>
            </div>
          </div>
          <div className={css.skills__item}>
            <h3>Software skills</h3>
            <ul className={css.skills__itemHard}>
              {softwareSkills.map(item => (
                <SkillRow key={item.name} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
