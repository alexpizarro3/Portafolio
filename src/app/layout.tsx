import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Alexis Pizarro – Data Analytics & BI Portfolio',
  description: 'Explore the interactive portfolio of Alexis Pizarro, Business Intelligence Analyst and Power BI Developer. Showcasing automated Python workflows, advanced SQL dashboards, and real-world data solutions.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden max-w-[100vw]`}>
        {children}
      </body>
    </html>
  );
}
