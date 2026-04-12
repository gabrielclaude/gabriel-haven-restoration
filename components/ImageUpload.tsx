"use client";

import { useState, useCallback } from "react";

interface ImageUploadProps {
  onUpload: (url: string) => void;
}

export default function ImageUpload({ onUpload }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleUpload = useCallback(
    async (file: File) => {
      setError("");
      setUploading(true);

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Upload failed");
        }

        const { url } = await response.json();
        onUpload(url);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to upload image");
      } finally {
        setUploading(false);
      }
    },
    [onUpload]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      handleUpload(file);
    } else {
      setError("Please drop an image file");
    }
  };

  return (
    <div className="space-y-2">
      <label
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
          dragActive
            ? "border-[var(--color-primary)] bg-[var(--color-cream)]"
            : "border-[var(--color-light-gray)] hover:bg-[var(--color-cream)]"
        } ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {uploading ? (
            <>
              <svg
                className="w-8 h-8 animate-spin text-[var(--color-primary)]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              <p className="mt-2 text-sm text-[var(--color-warm-gray)]">
                Uploading...
              </p>
            </>
          ) : (
            <>
              <svg
                className="w-8 h-8 text-[var(--color-warm-gray)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="mt-2 text-sm text-[var(--color-warm-gray)]">
                <span className="font-medium text-[var(--color-primary)]">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-[var(--color-warm-gray)]">
                PNG, JPG, GIF, WebP (max 10MB)
              </p>
            </>
          )}
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          disabled={uploading}
        />
      </label>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
