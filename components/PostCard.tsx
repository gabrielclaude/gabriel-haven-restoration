import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import type { Post } from "@/lib/schema";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "MMMM d, yyyy")
    : format(new Date(post.createdAt), "MMMM d, yyyy");

  return (
    <Link href={`/posts/${post.slug}`} className="block">
      <article className="card group">
        <div className="aspect-video relative bg-[var(--color-cream)]">
          {post.featuredImageUrl ? (
            <Image
              src={post.featuredImageUrl}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg
                className="w-16 h-16 text-[var(--color-primary)]/30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="p-5">
          <time className="text-sm text-[var(--color-warm-gray)]">
            {formattedDate}
          </time>

          <h2 className="text-xl font-bold mt-2 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="text-[var(--color-warm-gray)] line-clamp-2">
              {post.excerpt}
            </p>
          )}

          <div className="mt-4 flex items-center text-[var(--color-primary)] font-medium">
            <span>Read more</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
