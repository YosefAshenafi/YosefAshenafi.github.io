import portfolio from "@/data/portfolio";
import TitleBar from "@/components/TitleBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Works from "@/components/Works";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Writing from "@/components/Writing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TitleBar />
      <Nav />
      <main>
        <Hero
          email={portfolio.email}
          clients={portfolio.clients}
          available={portfolio.available}
        />
        <FocusAreas focus={portfolio.focus} />
        <Works works={portfolio.works} />
        <Career experience={portfolio.experience} education={portfolio.education} />
        <Skills skills={portfolio.skills} />
        <Writing posts={portfolio.posts} telegram={portfolio.telegram} />
        <Testimonials testimonials={portfolio.testimonials} />
        <Contact
          email={portfolio.email}
          emailAlt={portfolio.emailAlt}
          phone={portfolio.phone}
          address={portfolio.address}
          location={portfolio.location}
        />
      </main>
      <Footer />
    </>
  );
}
