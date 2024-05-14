import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from "next/font/google";
import "./globals.css";

import AuthProvider from "@/components/AuthProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// SEO
export const metadata = {
    title: "NextJS tutorial - Property Pulse",
    description: "Find your dream rental property",
    keywords: "rental, find rentals, find properties"
};

export default function RootLayout({ children }) {
    return (
        <AuthProvider>
            <html lang="en">
                <body className={inter.className}>
                    {/* Navigation Bar */}
                    <NavBar />

                    {/* Main content */}
                    <main>
                        {children}
                    </main>

                    {/* Footer */}
                    <Footer />

                    {/* Toaster */}
                    <ToastContainer />
                </body>
            </html>
        </AuthProvider>
    );
};