import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Works from "@/components/Works/Works";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <PageWrapper>
        <Hero />
        <About />
        <Skills />
        <Works />
        <Footer />
      </PageWrapper>
    </>
  );
}
