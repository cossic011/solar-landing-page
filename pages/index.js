import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { ParallaxProvider } from "react-scroll-parallax";
import Testimoni from "../components/Testimoni";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Career from "../components/Career";

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <SeoHead title="TOFIP Consult" />
        <Layout>
          <Hero />
          <Projects />
          <Career />
          <Testimoni />
          <Contact />
        </Layout>
      </ParallaxProvider>
    </>
  );
}
