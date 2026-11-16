import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080c09] text-[#f4f4f4] flex flex-col items-center justify-center text-center p-8">
      <span className="text-[#c6ff00] text-sm tracking-[0.2em] font-semibold mb-4">
        404 — PAGE NOT FOUND
      </span>
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">
        Lost in the architecture?
      </h1>
      <p className="text-[#99a19c] max-w-md mb-8 leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c6ff00] text-[#080c09] font-semibold rounded-full hover:bg-[#b0e600] transition-colors"
      >
        Return to Home
      </Link>
    </main>
  );
}
