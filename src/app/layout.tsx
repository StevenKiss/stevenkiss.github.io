// src/app/layout.tsx

import '@/styles/globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';
import NavTile from '@/components/NavTile';
import Footer from '@/components/Footer';

/**
 * Site-wide metadata used in the HTML <head>
 */
export const metadata = {
  title: 'Steven Kiss Portfolio',
  description: 'Portfolio of Steven Kiss - projects, experience, and hobbies'
};


/**
 * Base Look for each page
 */

export default function RootLayout({ children }: { children: ReactNode }) {
  return(
    <html lang="en">
      <Head>
        {/* Basic meta tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Font stylesheet */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="flex min-h-screen flex-col bg-gray-50 font-sans">
        {/* HEADER */}
        <header className= "sticky top-0 z-20 bg-white shadow-sm">
          <nav className="container mx-auto flex items-center justify-between p-4">
            {/* Site title / logo */}
            <a href="/" className="text-2xl font-semibold">
              Steven Kiss
            </a>

            {/* Navigation links */}
            <div className="flex gap-4 text-gray-700">
              <NavTile href="/about"      label="About" />
              <NavTile href="/projects"   label="Projects" />
              <NavTile href="/experience" label="Experience" />
              <NavTile href="/hobbies"    label="Hobbies" />
              <NavTile href="/contact"    label="Contact" />
            </div>
          </nav>
        </header>

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
