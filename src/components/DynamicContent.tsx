'use client'

import { useMusicPreference } from '@/contexts/MusicContext'

export default function DynamicContent({ children }: { children: React.ReactNode }) {
  const { musicPreference } = useMusicPreference()

  if (musicPreference === null) return null

  return <>{children}</>
}

