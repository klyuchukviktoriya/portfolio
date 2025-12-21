import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";

export default function HomePage() {
  return (
    <>
      <PageWrapper>
        <Hero />
        <About />
        <Skills />
      </PageWrapper>
    </>
  );
}
