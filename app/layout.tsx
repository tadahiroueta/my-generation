import type { Metadata } from "next";
import { Pangolin } from "next/font/google";

import "./globals.css";
import { Background } from "@/components/Background";

const pangolin = Pangolin({
  variable: "--font-pangolin",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "My Generation",
  description: "things to do before graduating",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${pangolin.variable} antialiased`}>
        <div className="flex min-h-lvh font-sans py-20 justify-center">
          <Background />
          {children}
        </div>
      </body>
    </html>
  );
}
