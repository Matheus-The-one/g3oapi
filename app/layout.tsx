import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ui/themwitcher";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "g3o API - Nike, Cookpad, Doctors, Investors Leads APIs on RapidAPI",
  description:
    "Access comprehensive APIs on RapidAPI: Nike API, Cookpad API, Doctors API, Investors Leads API, AI Image Generation, Background Removal & more. Trusted by 100+ customers with 20,000+ API calls.",
  keywords:
    "nike api, cookpad api, doctors api, investors leads api, rapidapi, ai apis, nike products api, recipe api, medical api, business leads api, api marketplace, developer apis",
  openGraph: {
    title: "g3o API - Nike, Cookpad, Doctors, Investors Leads APIs on RapidAPI",
    description:
      "Access comprehensive APIs on RapidAPI. Nike products, Cookpad recipes, doctors database, investors leads & AI tools.",
    type: "website",
    url: "https://g3oapi.com",
    siteName: "g3o API",
  },
  twitter: {
    card: "summary_large_image",
    title: "g3o API - Comprehensive APIs on RapidAPI",
    description:
      "Nike API, Cookpad API, Doctors API, Investors Leads API & more on RapidAPI",
  },
  alternates: {
    canonical: "https://g3oapi.com",
  },
  metadataBase: new URL("https://g3oapi.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VXK8K00TKJ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VXK8K00TKJ');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <Link
                  href="/"
                  className="flex-shrink-0 font-bold text-xl hover:text-primary transition-colors"
                >
                  G3O
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                  <Navbar />
                  <div className="flex items-center gap-3">
                    <ModeToggle />
                    <Button asChild size="sm">
                      <a href="mailto:contact@g3oapi.com">Contact Us</a>
                    </Button>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center gap-2">
                  <ModeToggle />
                  <Navbar />
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
