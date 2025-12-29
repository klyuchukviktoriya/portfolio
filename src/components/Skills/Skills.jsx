import { languages, personalSkills, softwareSkills } from "@/helpers/constants";
import SkillRow from "../SkillRow/SkillRow";
import css from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className={css.skills}>
      <div className={`${css.skills__container} ${css.container}`}>
        <h2 className={css.skills__title}>skills</h2>
        <div className={css.skills__content}>
          <ul>
            {languages.map(item => (
              <SkillRow key={item.name} {...item} />
            ))}
            {personalSkills.map(item => (
              <SkillRow key={item.name} {...item} />
            ))}
            {softwareSkills.map(item => (
              <SkillRow key={item.name} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
