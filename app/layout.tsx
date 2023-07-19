import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory",
  description:
    "Create, read, update and delete products on top of a postgres database. Inventory is a demo application to learn CRUD operations using NextJS 13, Prisma and Supabase.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between py-8 lg:py-16">
          {children}
        </main>
        <Toaster
          toastOptions={{
            duration: 3000,
            success: {
              style: {
                background: "rgb(34 197 94)",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "rgb(34 197 94)",
              },
            },
            error: {
              style: {
                background: "rgb(239 68 68)",
                color: "white",
              },

              iconTheme: {
                primary: "white",
                secondary: "rgb(239 68 68)",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
