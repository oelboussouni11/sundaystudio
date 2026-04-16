import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { PageTransition } from "@/components/effects/PageTransition";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { SplashScreen } from "@/components/effects/SplashScreen";
import { siteMetadata } from "@/lib/constants";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteMetadata.name} — ${siteMetadata.tagline}`,
    template: `%s · ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-sunday-dark text-sunday-text">
        <ThemeScript />
        <SplashScreen />
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
