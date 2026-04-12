"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function AdminNav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/admin") {
      return pathname === "/admin";
    }
    return pathname.startsWith(path);
  };

  return (
    <aside className="w-64 bg-white shadow-[var(--shadow-warm)] min-h-screen">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <div>
            <h1 className="font-bold text-[var(--color-primary-dark)] leading-tight">
              Gabriel Haven
            </h1>
            <p className="text-xs text-[var(--color-warm-gray)]">Admin Panel</p>
          </div>
        </Link>

        <nav className="space-y-2">
          <Link
            href="/admin"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/admin") && pathname === "/admin"
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--color-warm-gray)] hover:bg-[var(--color-cream)]"
            }`}
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            Dashboard
          </Link>

          <Link
            href="/admin/posts/new"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive("/admin/posts/new")
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--color-warm-gray)] hover:bg-[var(--color-cream)]"
            }`}
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Post
          </Link>
        </nav>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[var(--color-light-gray)]">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-[var(--color-warm-gray)] hover:bg-[var(--color-cream)] w-full transition-colors"
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
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
