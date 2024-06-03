import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section'

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
      <body className={`${inter.className} bg-gray-50 text-gray-950 h-[5000px] pt-28 sm:pt-30 overflow-x-hidden `}>
        <div>
        <div className='bg-[#f9dedf] absolute -z-10 top-[-6rem] left-[-15rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
      <div className='bg-[#cbd4f5] absolute -z-10 top-[-6rem] right-[-30rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        
        </div>
        <ActiveSectionContextProvider>
        <Header></Header>
        {children}
        </ActiveSectionContextProvider>
       
        </body>
    </html>
  )
}
