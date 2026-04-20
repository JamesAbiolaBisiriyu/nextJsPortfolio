import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load the shared app font once at the root.
const inter = Inter({ subsets: ["latin"] });

// Global SEO metadata for the portfolio site.
export const metadata: Metadata = {
  title: "James Bisiriyu - Web Developer",
  description: "Portfolio website of James Bisiriyu, a Senior Web Developer",
};

// Root layout wraps every route with global styling and background media.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        {/* Full-screen background video layer behind the content. */}
        <div className={"fixed inset-0 w-full h-full z-10"}>
          <video autoPlay loop muted className={"w-full h-full object-cover object-center" }>
            <source src="/bgvid.mp4" type="video/mp4" />
            {/* Fallback overlay container for the blurred backdrop effect. */}
            <div className="absolute inset-0 background-blur-md">

            </div>
          </video>
        </div>
        {/* Route content renders above the background layer. */}
        {children}
      </body>
    </html>
  );
}
