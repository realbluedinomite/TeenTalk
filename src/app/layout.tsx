"use client"; // Required because SessionProvider is client-only

import { SessionProvider } from "next-auth/react";
import "../globals.css"; // Tailwind/global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}