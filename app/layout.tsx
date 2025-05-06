import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/components/ui/themwitcher";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "g3o API - Powerful APIs for Startups",
  description:
    "g3o API provides powerful, reliable APIs for startups and funded projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="px-10 flex w-full h-16 items-center justify-between py-4">
              <div className="flex-shrink-0 font-bold text-xl">g3o API</div>

              <div className="md:hidden flex-1 flex justify-end gap-2">
                <ModeToggle />
                <Button>Book a Call</Button>
              </div>

              <div className="hidden md:flex items-center gap-5">
                <Navbar />
                <ModeToggle />
                <div className="flex items-center gap-2">
                  <Button>Book a Call</Button>
                </div>
              </div>

              <div className="md:hidden">
                <Navbar />
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
