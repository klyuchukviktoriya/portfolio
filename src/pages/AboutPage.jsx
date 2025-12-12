import PageWrapper from "@/components/PageWrapper/PageWrapper";
import css from "./AboutPage.module.scss";
export default function AboutPage() {
  return (
    <PageWrapper>
      <section className={css.about}>
        <p>
          I’m Viktoriya — a beginner Front-End Developer who cares a lot about
          details. I love learning by doing and creating interfaces that look
          visually appealing and feel comfortable to use. Yes, I often use
          ChatGPT — because I’m not afraid to look for solutions and learn from
          different sources. But when AI gets confused, my own curiosity and
          logic usually save the situation 😌
          {/* </p> */}
          {/* <p className={`${css.about__text} ${css.tiltRight}`}> */}
          I’ve already built a few pet projects while learning React and modern
          UI techniques. Clean layouts, smooth interactions and refined styling
          are the things that excite me the most. Every day I push myself to
          learn more, experiment with new ideas, and build better.
          {/* </p> */}
        </p>
      </section>
      {/* <p className="animate__animated animate__fadeInRight"> */}
    </PageWrapper>
  );
}
