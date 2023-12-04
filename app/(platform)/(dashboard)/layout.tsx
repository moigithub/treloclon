import { UserButton } from '@clerk/nextjs'
import { Navbar } from './_components/navbar'

export default function DLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <Navbar />
      {children}
    </div>
  )
}
