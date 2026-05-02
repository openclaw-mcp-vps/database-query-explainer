import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SQL Query Explainer — Understand Any SQL in Plain English",
  description: "Paste any SQL query and instantly get a plain English explanation with performance insights. Built for developers and data analysts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0c825673-2036-42ed-a302-4f1398c7bbe6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
