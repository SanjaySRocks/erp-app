import { Inter } from 'next/font/google'
// import './globals.css'
import Navbar from './components/navbar.js'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ERP Web App',
  description: 'An erp web application written in nextjs web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet"
      >

      </link>
      </head>

      <body className={inter.className}>
        
      <Navbar/>
      
      {children}
      
      </body>    
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" 
      ></Script>
    </html>



  )
}
