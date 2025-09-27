import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
// import { sleep } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube Music",
  description: "Youtube Music Clone App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log("Before RootLayout sleep------------");
  // await sleep(2000);
  // console.log("After RootLayout sleep------------");

  return (
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
