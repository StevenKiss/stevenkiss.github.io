'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavTile from './NavTile';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 20);
        }

        window.addEventListener('scroll', onScroll);
        onScroll();
        return() => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-20 transition-colors duration-300 ${
                scrolled ? 'bg-white/70 backdrop-blur-sm shadow-sm' : 
                           'bg-transparent'
            }`}
        >
            <nav className="container mx-auto px-6 flex items-center
            justify-between py-4">
                <Link href="/about" className="logo text-xs text-gray-700">
                    stevenkiss
                </Link>
                <div className="flex gap-4 text-gray-500">
                    <NavTile href="/about"      label="About" />
                    <NavTile href="/projects"   label="Projects"/>
                    <NavTile href="/experience" label="Experience"/>
                    <NavTile href="/hobbies"    label="Hobbies"/>
                    <NavTile href="/contact"    label="Contact" />
                </div>
            </nav>
        </header>
    );
}