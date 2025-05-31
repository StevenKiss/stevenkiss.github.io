// src/components/HobbiesModal.tsx
"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { SECTIONS, HobbySection } from "@/content/hobbiesSections";

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
              <Dialog.Panel className="w-full max-w-4xl max-h-[90vh] transform overflow-hidden rounded-2xl bg-[#FFFCF1] shadow-2xl transition-all flex flex-col">
                {/* Sticky Header - edge-to-edge, dark blue */}
                <div className="sticky top-0 z-10 flex items-center justify-between bg-[#00B140] text-white py-4 px-8 shadow-md">
                  <Dialog.Title className="text-4xl font-bold font-['Inter'] tracking-tight">
                    {section.title}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 hover:bg-[#009933] transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <svg
                      className="h-6 w-6 text-white hover:text-gray-200"
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
                <div className="flex-1 flex flex-col gap-8 p-8 pt-0 overflow-y-auto">
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
