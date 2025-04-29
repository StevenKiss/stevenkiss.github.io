// src/app/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

/**
 * Home page (Hub) showing split-screen hereo with intro on left
 * and portrait on right.
 */
export default function Home() {
  return (
    <section className="
      container
      mx-auto
      flex
      flex-col-reverse
      lg:flex-row
      items-center
      bg-page 
      overflow-hidden
      "
    >
      {/* LEFT: Text Content */}
      <div className="flex-1 space-y-6 text-left">
        {/* Big heading */}
        <h1 className="text-6xl font-extrabold text-gray-900">
          Steven Kiss
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-gray-700">
        Computer Science student & aspiring software and machine learning engineer
        </p>

        {/* Description */}
        <p className="text-gray-600 max-w-md">
          I am a Purdue University CS student who loves to build web apps
          and tackle challenging machine learning problems!
        </p>

        {/* Social Buttons */}
        <div className="flex space-x-3">
          <Link
            href="https://github.com/StevenKiss"
            target="_blank"
            className="
              flex items-center justify-center
              w-12 h-12
              bg-gray-800 text-white
              rounded-lg
              hover:bg-black
              transition
            "
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/steven-kiss/"
            target="_blank"
            className="
              flex items-center justify-center
              w-12 h-12
              bg-blue-800 text-white
              rounded-lg
              hover:bg-blue-700
              transition
            "
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/Steven-Kiss-Resume.pdf"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
          >
            View Resume
          </a>
          <Link
            href="/contact"
            className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-50 transition"
          >
            Connect With Me!
          </Link>
        </div>
      </div>

      {/* Right: Portrait Image */}
      <div className="flex-1 relative h-80 lg:h-120">
        <Image
          src="/images/cartoons/CodingImage.png"
          alt="Steven Coding"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}