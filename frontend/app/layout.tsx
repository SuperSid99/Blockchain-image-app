import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLOCKCHAIN IMAGE APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} antialiased bg-black text-white min-h-screen w-full overflow-x-hidden`}
      >
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
