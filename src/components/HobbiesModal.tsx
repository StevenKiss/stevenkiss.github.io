// src/components/HobbiesModal.tsx
"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

const SECTIONS = [
  {
    id: "rock-climbing",
    title: "Rock Climbing",
    hobbyImage: "/images/cartoons/rockClimbing.png",
    Image1: "/images/RealImages/RockClimbing1.jpg",
    Image2: "/images/RealImages/RockClimbing2.jpg",
    text: `I started climbing during my senior year of high school and have been
          hooked ever since. I love outdoor lead climbing and top roping the most, 
          but you'll also catch me on the boulder wall from time to time. I have 
          been lucky enough to climb all over Colorado, with Shelf Road being my 
          favorite and Poudre Canyon a close second. I also had the chance to
          climb out in Moab, Utah, where I got to experience some incredible crack
          climbing at Indian Creek. Most recently, I went on a trip with some
          friends from Purdue and spent a weekend climbing at Red River Gorge in
          Kentucky, which was an awesome experience.`,
  },
  {
    id: "skiing",
    title: "Skiing",
    hobbyImage: "/images/cartoons/skiing.png",
    Image1: "/images/RealImages/Skiing1.jpg",
    Image2: "/images/RealImages/Skiing2.mov",
    text: `I've been skiing since before I could walk, and it's been my
      favorite winter sport for as long as I can remember. I've had the privilege
      of skiing a lot of the resorts in Colorado, with Breckenridge being my
      go-to. I'm comfortable on all terrain with skis, and I've recently picked up
      snowboarding. I'm still learning, but I can make it down some blacks with a
      bit of struggle. My favorite run of all time has to be Horseshoe Bowl at
      Breckenridge. It was the first double black I ever did, and I got to
      experience it with my dad, which made it even more memorable.`,
  },
  {
    id: "mountain-biking",
    title: "Mountain Biking",
    hobbyImage: "/images/cartoons/MountainBike.png",
    Image1: "/images/RealImages/MountainBike1.jpg",
    Image2: "/images/RealImages/MountainBike2.jpg",
    text: `Mountain biking has always been one of the strongest bonding points
      between me and my dad growing up. I didn't get into it until around third
      grade, but once I did, I was hooked. We started off in our neighborhood
      backyard trails before we began road tripping to different spots. I've had
      the chance to ride in a lot of places around Colorado, with Fruita being my
      favorite. But the best mountain biking I've done has to be out in Moab.
      Captain Ahab's is my top ride—it's super technical, and I highly recommend
      it if you're up for a challenge. It's my favorite because the last time I
      was there, my friend and I had to carry our bikes over a flooded sand bank
      at both the start and end of the trail. I also got the chance to head out
      to Santa Fe, New Mexico with some friends from high school and had a blast
      riding at the Chips and Salsa Mountain Bike Park. That place was a lot of
      fun.`,
  },
  {
    id: "gym",
    title: "Gym",
    hobbyImage: "/images/cartoons/Gym.png",
    Image1: "/images/RealImages/Gym1.jpg",
    Image2: "/images/RealImages/Gym2.jpg",
    text: `I got into going to the gym slowly but surely. I started my junior
      year of high school by investing some of my hard-earned money into simple
      at-home gym equipment. After about a year, I made the switch to a commercial
       gym at the beginning of my senior year and have been going ever since. I
       haven't been as consistent as I'd like, but it's become an essential part
       of my week. It helps keep my mental health in check and my body feeling
       good. I also love running into familiar faces at the gym and saying hi to
       friends. I'd have to say my favorite day at the gym right now is back and
       biceps.`,
  },
  {
    id: "traveling",
    title: "Traveling",
    hobbyImage: "/images/cartoons/plane.png",
    Image1: "/images/RealImages/Traveling1.jpg",
    Image2: "/images/RealImages/Traveling2.jpg",
    text: `I feel super privileged to have had so many amazing travel
      experiences at such a young age. With my dad being Hungarian and having
      immigrated here, I got to visit Europe quite a bit growing up to see
      relatives. Sometimes we'd also visit nearby countries, which gave me the
      chance to explore a lot of Southeastern and Central Europe. Other than the
      obvious choice of Hungary (I'm not biased), I would have to say Croatia is
      my favorite. The ocean there is unbelievably crystal clear, and it's just
      such a beautiful place. I also recently funded my own trip to Japan for a
      month with friends I made at Purdue, which was probably my favorite trip of
      all time. The highlight was definitely summiting Mount Fuji and watching the
       sunrise from the top. It was the most beautiful thing I've ever seen. I'm
       hoping to keep the adventures going and already have plans to hike
       Kilimanjaro this coming winter.`,
  },
];

interface Props {
  sectionId: string;
  onClose(): void;
}

// Helper function to check file extension
const isMovFile = (filePath: string) => {
  return filePath.toLowerCase().endsWith(".mov");
};

export default function HobbiesModal({ sectionId, onClose }: Props) {
  const section = SECTIONS.find((s) => s.id === sectionId);

  if (!section) return null;

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all">
                <div className="flex flex-col gap-8">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="text-4xl font-bold text-gray-900 font-['Inter'] tracking-tight">
                      {section.title}
                    </Dialog.Title>
                    <button
                      onClick={onClose}
                      className="rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
                      aria-label="Close modal"
                    >
                      <svg
                        className="h-6 w-6 text-gray-500 hover:text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-8">
                    {/* Text Content */}
                    <div className="flex flex-col gap-4">
                      <p className="text-gray-600 leading-relaxed font-['Roboto'] text-lg">
                        {section.text}
                      </p>
                    </div>
                    
                    {/* Personal Images/Videos Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Image/Video 1 */}
                      <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {isMovFile(section.Image1) ? (
                          <video
                            src={section.Image1}
                            width={500}
                            height={500}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <Image
                            src={section.Image1}
                            alt={`${section.title} image 1`}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>

                      {/* Image/Video 2 */}
                      <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {isMovFile(section.Image2) ? (
                          <video
                            src={section.Image2}
                            width={500}
                            height={500}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <Image
                            src={section.Image2}
                            alt={`${section.title} image 2`}
                            width={500}
                            height={500}
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
