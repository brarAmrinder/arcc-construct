import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <header className=" px-8 py-2 bg-[var(--color-gold)] text-navy shadow-md">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-10 text-[18px] font-bold">
          <Link href="/home" className="hover:text-royalblue transition">
            Home
          </Link>
          <Link href="/ourstory" className="hover:text-royalblue transition">
            Our Story
          </Link>
          <Link
            href="/recentbuilds"
            className="hover:text-royalblue transition"
          >
            Recent Builds
          </Link>
          <Link href="/services" className="hover:text-royalblue transition">
            Services
          </Link>
          <Link href="/getintouch" className="hover:text-royalblue transition">
            Get in Touch
          </Link>
        </div>
        <Link href="/">
          {" "}
          <img
            src="/big1.png"
            alt="arcc Logo"
            className="h-16 w-auto cursor-pointer "
          />{" "}
        </Link>{" "}
      </nav>{" "}
    </header>
  );
}
