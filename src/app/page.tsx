"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  return (
    <div>
      {!session ? (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </div>
  );
}