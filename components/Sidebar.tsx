import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 p-6">
      <h1 className="text-2xl font-bold text-orange-500">
        VnmOps
      </h1>

      <nav className="mt-8 space-y-2">
        <Link
          href="/dashboard"
          className="block rounded-lg p-3 hover:bg-slate-800"
        >
          Dashboard
        </Link>

        <Link
          href="/leads"
          className="block rounded-lg p-3 hover:bg-slate-800"
        >
          Leads
        </Link>
      </nav>
    </aside>
  );
}