import { AppProviders } from "@/providers/AppProviders";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { ScreenContainer } from "@/components/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty Wiki",
  description: "A wiki for Rick and Morty Characters, Locations, and Episodes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <div className="flex flex-col items-center min-h-screen bg-teal-50 dark:bg-gray-900">
            <Header />
            <ScreenContainer>
              <main>{children}</main>
            </ScreenContainer>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
