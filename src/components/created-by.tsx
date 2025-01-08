import Link from 'next/link'
import { Typography } from "@/components/ui/typography"

export default function CreatedBy() {
  return (
    <footer className="bg-[#EEEEEE] py-4 text-center">
      <Typography variant="small" className="text-black">
        Created By{' '}
        <Link 
          href="https://portfolio-esteban-pi.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          Esteban Pérez
        </Link>
        {' '}😎🤟🏻
      </Typography>
    </footer>
  )
}

