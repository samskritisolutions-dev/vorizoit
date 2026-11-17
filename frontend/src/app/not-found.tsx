import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070b0e] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="inline-block px-3 py-1 mb-4 text-xs font-mono tracking-widest uppercase rounded-full bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30">
        404 — Page Not Found
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        Lost in cyberspace?
      </h1>
      <p className="text-neutral-400 max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-[#ccff00] text-black font-semibold hover:bg-[#b8e600] transition"
      >
        Return Home
      </Link>
    </div>
  );
}
