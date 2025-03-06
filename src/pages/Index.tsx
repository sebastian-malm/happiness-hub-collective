
import Header from "../components/Header";
import Hero from "../components/Hero";
import PillarsSection from "../components/PillarsSection";
import MissionSection from "../components/MissionSection";
import JoinSection from "../components/JoinSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PillarsSection />
        <MissionSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
