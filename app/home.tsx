import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/big1.png"
              alt="ARCC Construction Logo"
              width={170}
              height={70}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8 text-[16px] font-semibold text-slate-800">
            <Link
              href="/"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/ourstory"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Our Story
            </Link>

            <Link
              href="/recentbuilds"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Recent Builds
            </Link>

            <Link
              href="/services"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Services
            </Link>

            <Link
              href="/getintouch"
              className="rounded-full bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
