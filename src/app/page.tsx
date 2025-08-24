"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold text-blue-600">🚀 TeenTalk</h1>

      {!session ? (
        <button onClick={() => signIn("google")} className="btn">
          Sign in with Google
        </button>
      ) : (
        <>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()} className="btn">
            Sign out
          </button>
        </>
      )}
    </main>
  );
}