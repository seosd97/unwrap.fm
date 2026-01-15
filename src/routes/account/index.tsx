import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/")({ component: Account });

function Account() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">Account</h1>
          <p className="text-xl text-gray-400">Manage your account</p>
        </div>
      </section>
    </div>
  );
}
