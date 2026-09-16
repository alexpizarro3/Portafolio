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

import NoiseOverlay from "@/components/ui/NoiseOverlay";

export const metadata = {
  title: 'Alexis Pizarro Abarca | Senior Supply Chain Data Analyst & Systems Engineer',
  description: 'Portfolio of Alexis Pizarro Abarca: Senior Supply Chain Data Analyst and Information Systems Engineer. Expert in the Google Data Stack (PLX, BigQuery, GoogleSQL), Power BI, Python RPA, and Generative AI.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden max-w-[100vw] bg-background text-foreground transition-colors duration-300`}>
        <NoiseOverlay />
        {children}
      </body>
    </html>
  );
}
