// src/components/Footer.tsx

import React from 'react';

/**
 * Global footer rendered on every page.
 */

export default function Footer() {
    return (
        <footer className="bg-white shadow-inner py-4">
            <div className="container mx-auto text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Steven Kiss. All rights reserved.
            </div>
        </footer>
    );
}