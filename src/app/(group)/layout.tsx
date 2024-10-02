import Navbar from "@/components/navbar/Navbar";
import { CircleUser, Loader2, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DarkModeButton from "@/components/darkmode/DarkModeButton";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer/Footer";
import Header from "@/components/List/Header";
import InputList from "@/components/List/InputList";
import { Suspense } from "react";

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar>
        <div className="ml-auto flex-1 relative sm:flex-initial">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-red-500" />
          <Suspense
            fallback={
              <div>
                <Loader2 className="w-6 h-6 animate-spin text-blue-500 dark:text-red-500" />
              </div>
            }
          >
            <InputList />
          </Suspense>
        </div>
        <DarkModeButton />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Navbar>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
}
