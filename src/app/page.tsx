import HeroSection from "@/components/hero-section";
import Us from "@/components/us";
import GiftSection from "@/components/gift";
import CreatedBy from "@/components/created-by";
import PhotoShare from "@/components/photos";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <Countdown /> */}
      {/* <Location /> */}
      <PhotoShare />
      <Us />
      <GiftSection />
      {/* <DressCode /> */}
      {/* <Separator />
      <Confirmation />
      <SongSuggestions /> */}
      <CreatedBy />
    </main>
  );
}
