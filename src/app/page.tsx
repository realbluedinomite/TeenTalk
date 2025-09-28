import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-black text-white flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">TeenTalk</h1>
        <div className="space-x-6 hidden md:flex">
          <Link href="#features">Features</Link>
          <Link href="#about">About</Link>
          <Link href="#support">Support</Link>
        </div>
        <Link
          href="/login"
          className="bg-white text-black px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
        >
          Open TeenTalk
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center max-w-6xl px-8 gap-12 text-center md:text-left">
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Group Chat <br /> That’s All <span className="text-purple-300">Fun & Safe</span>
          </h2>
          <p className="mt-6 text-lg text-gray-200">
            TeenTalk is your space to chat, connect, and build friendships. 
            Whether you’re studying, gaming, or just hanging out — it’s all about 
            being yourself in a safe community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/signup"
              className="px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-400 text-white font-semibold transition"
            >
              Join TeenTalk
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition"
            >
              Open in Browser
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="flex-1 relative">
          <Image
            src="/hero-chat.png" // replace with your illustration (put in public folder)
            alt="TeenTalk Chat Illustration"
            width={600}
            height={400}
            className="drop-shadow-2xl rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}