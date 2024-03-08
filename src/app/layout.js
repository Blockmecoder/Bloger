import { Inter } from "next/font/google";
import "./globals.css";   
import NavBar from "@/components/NavBar/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bloger",
  description: "Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
