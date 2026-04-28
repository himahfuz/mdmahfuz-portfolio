import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MD Mahfuzur Rahman - CA Student & Analyst",
  description: "Portfolio of MD Mahfuzur Rahman. Innovation Anything for Automation Everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} antialiased h-full`}
    >
      <body className="min-h-full font-sans m-0 p-0 bg-transparent">
        {children}
      </body>
    </html>
  );
}
