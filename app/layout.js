import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Future IT Touch Private Limited - Web Development & Digital Solutions",
  description:
    "Future IT Touch Private Limited is a leading IT solutions company offering expert web development, digital marketing, software development, and business solutions. Empowering businesses with innovation and technology.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <TopBar/>
      <Header/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
