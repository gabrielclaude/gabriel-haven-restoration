import Link from "next/link";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { posts } from "@/lib/schema";
import { desc } from "drizzle-orm";
import { format } from "date-fns";
import { auth } from "@/lib/auth";
import AdminNav from "@/components/AdminNav";

export const dynamic = "force-dynamic";

async function getPosts() {
  if (!db) return [];
  try {
    return await db.select().from(posts).orderBy(desc(posts.createdAt));
  } catch {
    return [];
  }
}

export default async function AdminDashboard() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  const allPosts = await getPosts();

  return (
    <div className="flex min-h-screen bg-[var(--background)]">
      <AdminNav />
      <main className="flex-1 p-8">
        <div className="max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-[var(--color-warm-gray)] mt-1">
                Manage your blog posts
              </p>
            </div>
            <Link href="/admin/posts/new" className="btn-primary">
              + New Post
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6">
              <div className="text-[var(--color-warm-gray)] text-sm">Total Posts</div>
              <div className="text-3xl font-bold text-[var(--color-primary-dark)] mt-1">
                {allPosts.length}
              </div>
            </div>
            <div className="card p-6">
              <div className="text-[var(--color-warm-gray)] text-sm">Published</div>
              <div className="text-3xl font-bold text-[var(--color-forest)] mt-1">
                {allPosts.filter((p) => p.published).length}
              </div>
            </div>
            <div className="card p-6">
              <div className="text-[var(--color-warm-gray)] text-sm">Drafts</div>
              <div className="text-3xl font-bold text-[var(--color-terracotta)] mt-1">
                {allPosts.filter((p) => !p.published).length}
              </div>
            </div>
          </div>

          {/* Posts Table */}
          <div className="card">
            <div className="p-6 border-b border-[var(--color-light-gray)]">
              <h2 className="text-xl font-bold">All Posts</h2>
            </div>

            {allPosts.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[var(--color-cream)]">
                    <tr>
                      <th className="text-left p-4 font-medium text-[var(--color-warm-gray)]">
                        Title
                      </th>
                      <th className="text-left p-4 font-medium text-[var(--color-warm-gray)]">
                        Status
                      </th>
                      <th className="text-left p-4 font-medium text-[var(--color-warm-gray)]">
                        Date
                      </th>
                      <th className="text-right p-4 font-medium text-[var(--color-warm-gray)]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allPosts.map((post) => (
                      <tr
                        key={post.id}
                        className="border-b border-[var(--color-light-gray)] last:border-0 hover:bg-[var(--color-cream)]/50"
                      >
                        <td className="p-4">
                          <Link
                            href={`/admin/posts/${post.id}/edit`}
                            className="font-medium hover:text-[var(--color-primary)]"
                          >
                            {post.title}
                          </Link>
                          {post.excerpt && (
                            <p className="text-sm text-[var(--color-warm-gray)] mt-1 line-clamp-1">
                              {post.excerpt}
                            </p>
                          )}
                        </td>
                        <td className="p-4">
                          {post.published ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Published
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Draft
                            </span>
                          )}
                        </td>
                        <td className="p-4 text-[var(--color-warm-gray)]">
                          {format(new Date(post.createdAt), "MMM d, yyyy")}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/admin/posts/${post.id}/edit`}
                              className="p-2 text-[var(--color-warm-gray)] hover:text-[var(--color-primary)] transition-colors"
                              title="Edit"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                            </Link>
                            {post.published && (
                              <Link
                                href={`/posts/${post.slug}`}
                                target="_blank"
                                className="p-2 text-[var(--color-warm-gray)] hover:text-[var(--color-primary)] transition-colors"
                                title="View"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </Link>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-12 text-center">
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
                <p className="text-[var(--color-warm-gray)] mb-4">
                  Get started by creating your first blog post.
                </p>
                <Link href="/admin/posts/new" className="btn-primary inline-flex">
                  + Create First Post
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
