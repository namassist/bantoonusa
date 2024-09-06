import { Header } from "@/components";
import { Hero, Benefits, Services, Contact, Consultant } from "./_components";
import { Packages } from "./_components/packages";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Contact />
        <Packages />
        <Consultant />
      </main>
      <Footer />
    </div>
  );
}
