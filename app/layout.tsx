import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mail Sync - Next Generation Customer Support Service",
  description:
    "MailSyncs is a Next Generation Customer Support Service. Free Uses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const date = new Date();

  return (
    <html lang="en">
      <body className={` ${inter.className}`}>{children}</body>
    </html>
  );
}
