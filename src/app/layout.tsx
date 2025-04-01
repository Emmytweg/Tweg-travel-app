import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "../../components/Home/Navbar/ResponsiveNav";
import Footer from "../../components/Home/Footer/Footer";
import ScollToTop from "../../components/Home/Helper/ScollToTop";

const font = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "TWEG- Travel For All",
  description: "Travel For All Landing Page", 
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScollToTop />
      </body>
    </html>
  );
}
