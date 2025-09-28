"use client"; // This makes the whole page render in the browser

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"; // Navbar is already client-safe

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-800 to-black text-white flex flex-col items-center justify-center">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center max-w-6xl px-8 gap-12 text-center md:text-left">
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Group Chat <br /> That’s All{" "}
            <span className="text-purple-300">Fun & Safe</span>
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
            src="/hero-chat.png"
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