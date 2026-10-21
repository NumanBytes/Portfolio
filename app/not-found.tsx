import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center px-4 text-center">
      <div>
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
