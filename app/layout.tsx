import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manoj Kumar Jala | Portfolio',
  description: 'Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-30 overflow-x-hidden `}>
      <div className="bg-[#97c4e2] absolute top-[-1rem] -z-10 h-[20.25rem] w-full rounded-full blur-[30rem]"></div>


        <ActiveSectionContextProvider>
        <Header></Header>
        {children}
        <Toaster position='top-right'></Toaster>
        </ActiveSectionContextProvider>
       
        </body>
    </html>
  )
}
