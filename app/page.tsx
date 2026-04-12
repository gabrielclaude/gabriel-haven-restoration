import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import { db } from "@/lib/db";
import { posts } from "@/lib/schema";
import { desc, eq } from "drizzle-orm";

export const revalidate = 60; // Revalidate every 60 seconds

async function getPosts() {
  if (!db) return [];
  try {
    const allPosts = await db
      .select()
      .from(posts)
      .where(eq(posts.published, true))
      .orderBy(desc(posts.publishedAt));
    return allPosts;
  } catch {
    // Database not connected yet, return empty array
    return [];
  }
}

export default async function HomePage() {
  const allPosts = await getPosts();

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[var(--color-cream)] py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gabriel Haven Restoration
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-warm-gray)] max-w-2xl mx-auto">
              Follow along as we restore our home to its former glory. From
              hardwood floors to rooftops, every detail matters in this journey
              of preservation and renewal.
            </p>
          </div>
        </section>

        {/* Posts Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Restoration Journal
            </h2>

            {allPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-[var(--color-cream)] rounded-xl">
                <svg
                  className="w-16 h-16 mx-auto text-[var(--color-primary)]/30 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-[var(--color-primary-dark)] mb-2">
                  No Posts Yet
                </h3>
                <p className="text-[var(--color-warm-gray)]">
                  Check back soon for updates on our restoration journey.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
