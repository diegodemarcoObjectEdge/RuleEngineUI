import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Rule Engine UI</h1>
        <p className="mb-8 text-lg text-gray-600">
          Manage your rule engines with ease
        </p>
        <Link
          href="/rule-engine"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Go to Rule Engine
        </Link>
        <div className="mt-3">
          <Link
            href="/lounge-entry-rule-engine"
            className="inline-block rounded-lg border border-blue-600 px-6 py-3 text-blue-700 hover:bg-blue-50"
          >
            Go to Lounge Entry Rule Engine
          </Link>
        </div>
      </div>
    </main>
  );
}
