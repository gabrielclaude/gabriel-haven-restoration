"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import ImageUpload from "@/components/ImageUpload";
import AdminNav from "@/components/AdminNav";

const TipTapEditor = dynamic(() => import("@/components/TipTapEditor"), {
  ssr: false,
  loading: () => (
    <div className="border-2 border-[var(--color-light-gray)] rounded-lg p-4 min-h-[300px] bg-white">
      Loading editor...
    </div>
  ),
});

export default function NewPostPage() {
  const router = useRouter();
  const { status } = useSession();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Redirect to login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          excerpt,
          featuredImageUrl,
          published,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create post");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create post");
    } finally {
      setSaving(false);
    }
  };

  // Show loading state while checking auth
  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex min-h-screen bg-[var(--background)]">
        <AdminNav />
        <main className="flex-1 p-8">
          <div className="max-w-4xl">
            <div className="animate-pulse">
              <div className="h-8 bg-[var(--color-light-gray)] rounded w-1/3 mb-4" />
              <div className="h-4 bg-[var(--color-light-gray)] rounded w-1/2 mb-8" />
              <div className="card p-6 space-y-6">
                <div className="h-12 bg-[var(--color-light-gray)] rounded" />
                <div className="h-24 bg-[var(--color-light-gray)] rounded" />
                <div className="h-64 bg-[var(--color-light-gray)] rounded" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <AdminNav />
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Create New Post</h1>
            <p className="text-[var(--color-warm-gray)] mt-1">
              Write a new blog post for your restoration journal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200">
                {error}
              </div>
            )}

            <div className="card p-6 space-y-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium mb-2 text-[var(--color-primary-dark)]"
                >
                  Title *
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Enter post title"
                  className="text-xl"
                />
              </div>

              {/* Excerpt */}
              <div>
                <label
                  htmlFor="excerpt"
                  className="block text-sm font-medium mb-2 text-[var(--color-primary-dark)]"
                >
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief summary of the post (shown in post cards)"
                  rows={2}
                />
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-primary-dark)]">
                  Featured Image
                </label>

                {featuredImageUrl ? (
                  <div className="space-y-3">
                    <div className="relative inline-block">
                      <img
                        src={featuredImageUrl}
                        alt="Featured"
                        className="max-h-48 rounded-lg object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setFeaturedImageUrl("")}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ) : (
                  <ImageUpload onUpload={(url) => setFeaturedImageUrl(url)} />
                )}
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[var(--color-primary-dark)]">
                  Content *
                </label>
                <TipTapEditor content={content} onChange={setContent} />
              </div>

              {/* Published Toggle */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPublished(!published)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    published ? "bg-[var(--color-forest)]" : "bg-[var(--color-light-gray)]"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      published ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <label className="text-sm font-medium text-[var(--color-primary-dark)]">
                  {published ? "Published" : "Draft"}
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="btn-secondary"
                disabled={saving}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary" disabled={saving}>
                {saving ? "Saving..." : "Create Post"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
