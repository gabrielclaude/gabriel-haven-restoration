import { SessionProvider } from "next-auth/react";
import AdminNav from "@/components/AdminNav";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // Don't show admin layout on login page
  const isLoginPage =
    typeof window === "undefined"
      ? false
      : window.location.pathname === "/admin/login";

  if (!session && !isLoginPage) {
    redirect("/admin/login");
  }

  // For login page, just render children without layout
  if (!session) {
    return <SessionProvider>{children}</SessionProvider>;
  }

  return (
    <SessionProvider>
      <div className="flex min-h-screen bg-[var(--background)]">
        <AdminNav />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </SessionProvider>
  );
}
