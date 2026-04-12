"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const TipTapEditor = dynamic(() => import("@/components/TipTapEditor"), {
  ssr: false,
  loading: () => (
    <div className="border-2 border-[var(--color-light-gray)] rounded-lg p-4 min-h-[300px] bg-white">
      Loading editor...
    </div>
  ),
});

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EditPostPage({ params }: PageProps) {
  const { id } = use(params);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/posts/${id}`);
        if (!response.ok) {
          throw new Error("Post not found");
        }
        const post = await response.json();
        setTitle(post.title);
        setContent(post.content);
        setExcerpt(post.excerpt || "");
        setFeaturedImageUrl(post.featuredImageUrl || "");
        setPublished(post.published);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load post");
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
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
        throw new Error(data.error || "Failed to update post");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update post");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      return;
    }

    setDeleting(true);

    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete post");
      setDeleting(false);
    }
  };

  if (loading) {
    return (
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
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Edit Post</h1>
        <p className="text-[var(--color-warm-gray)] mt-1">
          Update your blog post
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
            <label
              htmlFor="featuredImage"
              className="block text-sm font-medium mb-2 text-[var(--color-primary-dark)]"
            >
              Featured Image URL
            </label>
            <input
              id="featuredImage"
              type="url"
              value={featuredImageUrl}
              onChange={(e) => setFeaturedImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
            {featuredImageUrl && (
              <div className="mt-2">
                <img
                  src={featuredImageUrl}
                  alt="Preview"
                  className="max-h-40 rounded-lg object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
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
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={handleDelete}
            className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            disabled={deleting || saving}
          >
            {deleting ? "Deleting..." : "Delete Post"}
          </button>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="btn-secondary"
              disabled={saving || deleting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={saving || deleting}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
