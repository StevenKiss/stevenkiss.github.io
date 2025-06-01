// src/components/HobbiesModal.tsx
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { SECTIONS } from "@/content/hobbiesSections";

interface Props {
  sectionId: string;
  onClose(): void;
}

const isMovFile = (filePath: string) => {
  return filePath.toLowerCase().endsWith(".mov");
};

const MediaItem = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (isMovFile(src)) {
    return (
      <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg hover:shadow-2xl transition-all duration-700">
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className={`object-cover w-full h-full transition-all duration-700 ${
            isLoaded ? 'group-hover:scale-110' : 'scale-105 blur-sm'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button
          onClick={togglePlay}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40"
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 text-white" />
          )}
        </button>
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg hover:shadow-2xl transition-all duration-700"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`object-cover w-full h-full transition-all duration-700 ${
          isLoaded ? 'group-hover:scale-110' : 'scale-105 blur-sm'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default function HobbiesModal({ sectionId, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(() => 
    SECTIONS.findIndex(s => s.id === sectionId)
  );
  
  const section = SECTIONS[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + SECTIONS.length) % SECTIONS.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SECTIONS.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!section) return null;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden p-0 bg-gradient-to-br from-[#FFFCF1] via-white to-amber-50/30 border-0 shadow-2xl">
        {/* Enhanced Header with fixed navigation controls */}
        <div className="relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 p-8 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            {/* Left navigation control */}
            <div className="flex items-center space-x-4">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-110"
                aria-label="Previous hobby"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
            </div>
            
            {/* Center-aligned title using absolute positioning */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <DialogHeader>
                <DialogTitle className="text-4xl font-bold tracking-tight text-white font-serif text-center">
                  {section.title}
                </DialogTitle>
              </DialogHeader>
            </div>
            
            {/* Right navigation controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-110"
                aria-label="Next hobby"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-110"
                aria-label="Close modal"
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 overflow-y-auto max-h-[calc(95vh-140px)]">
          <div className="mb-8 animate-fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed text-lg font-light tracking-wide first-letter:text-5xl first-letter:font-bold first-letter:text-emerald-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {section.text}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MediaItem 
              src={section.Image1} 
              alt={`${section.title} image 1`} 
              index={0}
            />
            <MediaItem 
              src={section.Image2} 
              alt={`${section.title} image 2`} 
              index={1}
            />
          </div>
          
          <div className="mt-8 flex justify-center">
            <div className="text-sm text-slate-500">
              {currentIndex + 1} of {SECTIONS.length}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}