import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar-custom";
import DarkModeButton from "@/components/toggle-darkmode";
import icon from "@/assets/logo.png";
import footer from "@/assets/footer.png";
import Image from "next/image";

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
            <div className="flex h-[15.625rem] items-center justify-center relative mt-[6.875rem]">
              <Image fill src={footer} alt="Footer image" />    
              <div className="flex w-4/5 justify-between absolute items-center text-white font-semibold">
                <div className="flex justify-center items-center">
                  <Image
                    src={icon}
                    width={500}
                    height={500}
                    alt="icon website"
                    className="w-[5.125rem] md:w-[6.25rem]"
                  />
                  <h2 className="text-xl md:text-4xl">MovieWido</h2>
                </div>
                <p className="opacity-50 md:text-2xl">TunggulDev</p>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
