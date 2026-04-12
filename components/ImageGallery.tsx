"use client";

import { useState } from "react";
import Image from "next/image";
import type { Media } from "@/lib/schema";

interface ImageGalleryProps {
  images: Media[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<Media | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="aspect-square relative rounded-lg overflow-hidden shadow-[var(--shadow-warm)] hover:shadow-[var(--shadow-warm-lg)] transition-shadow cursor-pointer group"
          >
            <Image
              src={image.url}
              alt={image.caption || "Gallery image"}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[var(--color-cream)] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-8 h-8"
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

          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.url}
              alt={selectedImage.caption || "Gallery image"}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[85vh] rounded-lg"
            />
            {selectedImage.caption && (
              <p className="text-white text-center mt-4">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
