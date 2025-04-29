// src/components/NavTile.tsx

import Link from 'next/link';

interface NavTileProps {
    href: string;
    label: string;
}

/**
 * Simple test navigation
 */

export default function NavTile({href, label}: NavTileProps) {
    return (
        <Link
            href={href}
            className="
                relative inline-block text-sm font-medium text-gray-700 px-3
                after:content-[''] 
                after:absolute
                after:left-1/4
                after:bottom-0 
                after:w-1/2
                after:h-px
                after:bg-gray-700
                after:transform-gpu
                after:scale-x-0
                after:origin-center
                after:transition-transform
                after:duration-200
                after:ease-in-out
                hover:after:scale-x-100"
        >
            {label}
        </Link>
    );
}