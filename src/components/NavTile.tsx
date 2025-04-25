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
            className="px-3 py-1 text-sm font-medium hover:text-green-600 transition"
        >
            {label}
        </Link>
    );
}