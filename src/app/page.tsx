import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Resume from "./components/Resume";
import Presence from "./components/Presence";
import Writing from "./components/Writing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SiteShell from "./components/SiteShell";
import FollowingLight from "./components/FollowingLight";

export default function Home() {
  return (
    <SiteShell>
      <Header />
      <main id="main">
        <FollowingLight />
        <Hero />
        <Projects />
        <Services />
        <About />
        <Stats />
        <Testimonials />
        <Process />
        <Resume />
        <Presence />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </SiteShell>
  );
}
