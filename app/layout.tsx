import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Competitive Coach | Pakistan's Premier Exam Prep Platform",
  description: "Pakistan's leading online platform for competitive exam preparation including MDCAT, ECAT, and Public Service Commission exams. Join live classes, access study materials, and learn from experienced teachers.",
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
