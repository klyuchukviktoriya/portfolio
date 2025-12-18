import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

export default function HomePage() {
  return (
    <>
      <PageWrapper>
        <Hero />
        <About />
      </PageWrapper>
    </>
  );
}
