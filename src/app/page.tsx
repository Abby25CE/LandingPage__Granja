import VerticalAccordion from "@/Components/Acordion";
import ShuffleHero from "@/Components/Hero";
import { TextParallaxContentExample } from "@/Components/TextContent";
import Us from "@/Components/Us";

export default function Home() {
  return (
    <div>
      <ShuffleHero />
      <Us />
      <TextParallaxContentExample />
      <div>Separador</div>
      <VerticalAccordion />
    </div>
  );
}
