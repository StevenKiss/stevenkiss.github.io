// src/components/NavTile.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavTileProps {
    href: string;
    label: string;
}

/**
 * Simple test navigation
 */

export default function NavTile({href, label}: NavTileProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`
                relative inline-block text-sm font-medium px-3
                ${isActive ? 'text-gray-900' : 'text-gray-500'}
                after:content-[''] 
                after:absolute
                after:left-1/4
                after:bottom-0 
                after:w-1/2
                after:h-[1.5px]
                after:bg-gray-700
                after:transform-gpu
                after:scale-x-0
                after:origin-center
                after:transition-transform
                after:duration-200
                after:ease-in-out
                ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
            `}
        >
            {label}
        </Link>
    );
}