import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import { ParallaxProvider } from "react-scroll-parallax";
import Testimoni from "../components/Testimoni";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <ParallaxProvider>
        <SeoHead title="Landing Page" />
        <Layout>
          <Hero />
          <Feature />
          <Services />
        </Layout>
      </ParallaxProvider>
    </>
  );
}
