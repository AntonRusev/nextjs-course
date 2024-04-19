import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// SEO
export const metadata = {
  title: "NextJS tutorial - Property Pulse",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};