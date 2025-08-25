"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">TeenTalk</h1>

      <div className="flex items-center gap-4">
        {session ? (
          <>
            <Image
              src={session.user?.image || "/default-avatar.png"}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-red-500 text-white rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Image
              src="/default-avatar.png"
              alt="Default Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <button
              onClick={() => signIn("google")}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
}