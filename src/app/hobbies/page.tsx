// src/app/hobbies/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import HobbiesModal from "@/components/HobbiesModal";
import { SECTIONS } from "@/content/hobbiesSections";

export default function HobbiesPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      {/* Grid of 5 vertical image */}
      <div
        className="grid grid-cols-1 md:grid-cols-5 grid-rows-1 auto-rows-fr
        h-screen max-h-[80vh] overflow-hidden gap-2 p-4"
      >
        {SECTIONS.map(({ id, title, hobbyImage }) => (
          <button
            key={id}
            onClick={() => setSelected(id)}
            className={`
                relative h-full w-full overflow-hidden group
                transition-all duration-300 rounded-xl
                hover:-translate-y-2 focus:-translate-y-2
                hover:shadow-xl focus:shadow-xl
              `}
          >
            {/* Hobby Image */}
            <Image 
              src={hobbyImage} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-300 group-hover:scale-110" 
            />

            {/* Label overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white text-xl font-semibold transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                {title}
              </h3>
            </div>
          </button>
        ))}
      </div>

      {/* Modal for details about hobby */}
      {selected && (
        <HobbiesModal sectionId={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
