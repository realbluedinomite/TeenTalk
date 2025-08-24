'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Page() {
  const { data: session } = useSession();

  return (
    <main>
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      )}
    </main>
  );
}