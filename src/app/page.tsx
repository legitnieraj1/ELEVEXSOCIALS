import Hero from "@/components/sections/Hero";
import WorkflowSection from "@/components/sections/WorkflowSection";
import ClientSuccess from "@/components/sections/ClientSuccess";
import Transformations from "@/components/sections/Transformations";
import ContactForm from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkflowSection />
      <ClientSuccess />
      <Transformations />
      <ContactForm />
    </>
  );
}
