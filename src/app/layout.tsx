import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Миксбордер «Розовый сад» — дизайн-проект клумбы",
  description:
    "Посадочный чертёж клумбы 4,8 × 1,8 м: два пиона, три лилии, флокс, лаванда, гладиолусы, анютины глазки, низкая гвоздика, шалфей, эхинацея и котовник.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
