import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import VideoEmbed from "@/components/VideoEmbed";
import { db } from "@/lib/db";
import { posts, media } from "@/lib/schema";
import { eq, and, asc } from "drizzle-orm";
import type { Metadata } from "next";

export const revalidate = 60;

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  if (!db) return null;
  try {
    const [post] = await db
      .select()
      .from(posts)
      .where(and(eq(posts.slug, slug), eq(posts.published, true)));

    if (!post) return null;

    const postMedia = await db
      .select()
      .from(media)
      .where(eq(media.postId, post.id))
      .orderBy(asc(media.sortOrder));

    return { post, media: postMedia };
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPost(slug);

  if (!data) {
    return {
      title: "Post Not Found | Gabriel Haven Restoration",
    };
  }

  return {
    title: `${data.post.title} | Gabriel Haven Restoration`,
    description: data.post.excerpt || `Read about ${data.post.title} in our restoration journey.`,
    openGraph: {
      title: data.post.title,
      description: data.post.excerpt || undefined,
      images: data.post.featuredImageUrl ? [data.post.featuredImageUrl] : undefined,
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getPost(slug);

  if (!data) {
    notFound();
  }

  const { post, media: postMedia } = data;
  const images = postMedia.filter((m) => m.type === "image");
  const videos = postMedia.filter((m) => m.type === "video");

  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "MMMM d, yyyy")
    : format(new Date(post.createdAt), "MMMM d, yyyy");

  return (
    <>
      <Header />

      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center text-[var(--color-warm-gray)] hover:text-[var(--color-primary)] mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to all posts
          </Link>

          {/* Header */}
          <header className="mb-8">
            <time className="text-[var(--color-warm-gray)]">{formattedDate}</time>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              {post.title}
            </h1>
          </header>

          {/* Featured Image */}
          {post.featuredImageUrl && (
            <div className="aspect-video relative rounded-xl overflow-hidden shadow-[var(--shadow-warm-lg)] mb-8">
              <Image
                src={post.featuredImageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Videos */}
          {videos.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Videos</h2>
              {videos.map((video) => (
                <VideoEmbed
                  key={video.id}
                  url={video.url}
                  caption={video.caption || undefined}
                />
              ))}
            </section>
          )}

          {/* Image Gallery */}
          {images.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
              <ImageGallery images={images} />
            </section>
          )}

          {/* Navigation */}
          <div className="border-t border-[var(--color-light-gray)] pt-8 mt-8">
            <Link
              href="/"
              className="btn-secondary inline-flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to all posts
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
