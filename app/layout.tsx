import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 h-[5000px]`}>
      <div className='bg-[#f9dedf] absolute -z-10 top-[-6rem] left-[-15rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
       <div className='bg-[#cbd4f5] relative -z-10 top-[-6rem] right-[-30rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]  sm:w-[68.75rem]'></div>
        
       <Header></Header>
        {children}
        </body>
    </html>
  )
}
