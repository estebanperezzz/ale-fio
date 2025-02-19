import { Metadata } from 'next'
import localFont from "next/font/local";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { MusicProvider } from '@/contexts/MusicContext'
import MusicPreferenceModal from '@/components/MusicPreferenceModal'
import FloatingMusicButton from '@/components/FloatingMusicButton'
import DynamicContent from '@/components/DynamicContent';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Invitación Boda - Ale & Fio",
  description: "Invitación a la boda de Ale y Fio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <MusicProvider>
          <MusicPreferenceModal />
          <DynamicContent>
            {children}
          </DynamicContent>
          <FloatingMusicButton />
        </MusicProvider>
      </body>
    </html>
  );
}

