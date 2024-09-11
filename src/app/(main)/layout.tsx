import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar-custom";
import DarkModeButton from "@/components/toggle-darkmode";
import icon from "@/assets/logo.png";

export const metadata: Metadata = {
  title: "Movie Wido",
  description: "Movie List from tmdb",
  icons: {
    icon: icon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-[200vh] w-full flex-col">
            <Navbar>
              <div className="ml-auto">
                <DarkModeButton />
              </div>
            </Navbar>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
