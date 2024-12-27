import HeroSection from '@/components/hero-section'
import Countdown from '@/components/countdown'
import Location from '@/components/location'
import Us from '@/components/us'
import GiftSection from '@/components/gift'
import DressCode from '@/components/dress-code'
import Confirmation from '@/components/confirmation'
import SongSuggestions from '@/components/song-suggestions'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Countdown />
      <Location />
      <Us />
      <GiftSection />
      <DressCode />
      <Separator />
      <Confirmation />
      <SongSuggestions />
    </main>
  )
}

