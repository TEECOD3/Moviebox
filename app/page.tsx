import Heropageskeleton from "@/components/Skeletons/Homeskeleton/Heropageskeleton";
import Footer from "@/components/ui/structuralComponents/Footer";
import HeroPage from "@/components/ui/structuralComponents/HeroPage";
import Movieslist from "@/components/ui/structuralComponents/Movieslist";

export default async function Home() {
  return (
    <main className="scroll-smooth">
      <HeroPage />
      <Movieslist />
      <Footer />
    </main>
  );
}
