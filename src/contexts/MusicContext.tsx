'use client'

import React, { createContext, useState, useContext } from 'react'

type MusicContextType = {
  musicPreference: boolean | null
  setMusicPreference: (preference: boolean) => void
}

const MusicContext = createContext<MusicContextType | undefined>(undefined)

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [musicPreference, setMusicPreference] = useState<boolean | null>(null)

  return (
    <MusicContext.Provider value={{ musicPreference, setMusicPreference }}>
      {children}
    </MusicContext.Provider>
  )
}

export const useMusicPreference = () => {
  const context = useContext(MusicContext)
  if (context === undefined) {
    throw new Error('useMusicPreference must be used within a MusicProvider')
  }
  return context
}

