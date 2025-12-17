import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => setContactOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <Projects />
        <Skills />
        <Contact onOpenContact={handleOpenContact} />
      </main>
      <Footer />
      <ContactForm open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Index;
