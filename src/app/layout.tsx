// src/app/layout.tsx

import '@/styles/globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

/**
 * Site-wide metadata used in the HTML <head>
 */
export const metadata = {
  title: 'Steven Kiss Portfolio',
  description: 'Portfolio of Steven Kiss - projects, experience, and hobbies',
  icons: {
    icon: '/favicon.ico',
  }
};


/**
 * Base Look for each page
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return(
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-page font-sans px-18">
        <Navbar />
        
        {/* MAIN CONTENT */}
        <main className="flex-grow container mx-auto px-6 py-8">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  )
}
