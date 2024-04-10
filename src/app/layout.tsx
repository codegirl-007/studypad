import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/Header'
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Study Pad",
  description: "Your all in one learning organizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          <Header />
            {children}
        </div>
      </body>
    </html>
  );
}
