import { Hero } from "@/components/marketing/hero";
import { PracticeGrid } from "@/components/marketing/practice-grid";
import { SectorsPreview } from "@/components/marketing/sectors-preview";
import { VignettesPreview } from "@/components/marketing/vignettes-preview";
import { TalkToUsCTA } from "@/components/marketing/talk-to-us-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeGrid />
      <SectorsPreview />
      <VignettesPreview />
      <TalkToUsCTA />
    </>
  );
}
