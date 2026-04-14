"use client";
import Hero         from "@/components/Hero";
import Stats        from "@/components/Stats";
import About        from "@/components/About";
import Programs     from "@/components/Programs";
import Advantages   from "@/components/Advantages";
import WhyPKBM      from "@/components/WhyPKBM";
import Gallery      from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Registration from "@/components/Registration";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Advantages />
      <WhyPKBM />
      <Gallery />
      <Testimonials />
      <Registration />
      <Contact />
      <Footer />
    </>
  );
}
