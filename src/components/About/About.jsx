// import { motion } from "framer-motion";
import css from "./About.module.scss";

export default function About() {
  return (
    <section className={css.about}>
      <div className={`${css.about__container} ${css.container}`}>
        <h2 className={css.about__title}>about</h2>
        <div className={css.about__content}>
          <div className={css.about__wrapper}>
            <img src="/my-photo.jpg" alt="Klyuchuk Victoria" />
          </div>
          <div className={css.about__text}>
            <p>
              I’m just a beginner who cares a lot about details. I love learning
              by doing and creating interfaces that look visually appealing and
              feel comfortable to use.
            </p>
            <p>
              I’ve already built a few pet projects while learning React and
              modern UI techniques. Clean layouts, smooth interactions and
              refined styling are the things that excite me the most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// <section className={css.about}>
//   <div className={css.container}>
//     <motion.div
//       className={css.about__bg}
//       initial={{ x: "-100%" }}
//       whileInView={{ x: "0%" }}
//       transition={{ duration: 1.2, ease: "easeOut" }}
//     />
//     <div></div>
//     <motion.div
//       className={css.about__content}
//       initial={{ x: "100%", opacity: 0 }}
//       whileInView={{ x: "0%", opacity: 1 }}
//       transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
//     >
//       <h2
//         className={`${css.about__title} animate__animated animate__fadeInLeft`}
//       >
//         About Me
//       </h2>

//       <p className="animate__animated animate__fadeInRight">
//         I’m Viktoriya — a beginner Front-End Developer who cares a lot about
//         details. I love learning by doing and creating interfaces that look
//         visually appealing and feel comfortable to use. Yes, I often use ChatGPT
//         — because I’m not afraid to look for solutions and learn from different
//         sources. But when AI gets confused, my own curiosity and logic usually
//         save the situation 😌
//       </p>
//       <p className={`${css.about__text} ${css.tiltRight}`}>
//         I’ve already built a few pet projects while learning React and modern UI
//         techniques. Clean layouts, smooth interactions and refined styling are
//         the things that excite me the most. Every day I push myself to learn
//         more, experiment with new ideas, and build better.
//       </p>
//     </motion.div>
//   </div>
// </section>;
