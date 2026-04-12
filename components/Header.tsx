import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-[var(--shadow-warm)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
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
              <h1 className="text-xl font-bold text-[var(--color-primary-dark)] leading-tight">
                Gabriel Haven
              </h1>
              <p className="text-xs text-[var(--color-warm-gray)]">
                Restoration
              </p>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-[var(--color-warm-gray)] hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/admin"
              className="text-[var(--color-warm-gray)] hover:text-[var(--color-primary)] font-medium transition-colors"
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
