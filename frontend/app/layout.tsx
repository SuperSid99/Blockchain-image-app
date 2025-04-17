import type { Metadata } from "next";
import { Lato } from "next/font/google";
// import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   subsets: ["latin"],
// });

const lato = Lato({
  weight: ["100", "300", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
