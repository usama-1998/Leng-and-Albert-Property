import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Leng & Albert Property | Build Generational Wealth",
  description:
    "We help HDB owners navigate the 'Decaying Lease' trap and build generational wealth through our proven Six Box Concept.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${montserrat.variable} bg-[#0a0a0a] text-[#ededed] antialiased selection:bg-white selection:text-black font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
