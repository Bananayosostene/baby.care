"use client";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
import Header  from "@/components/header-one";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Check if current path is admin or family dashboard
  const isAdminDash = pathname?.startsWith("/admin-dash");
  const isFamilyDash = pathname?.startsWith("/family-dash");
  const shouldShowHeaderFooter = !isAdminDash && !isFamilyDash;

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/heart-baby.care.svg" type="image/svg+xml" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            {shouldShowHeaderFooter && <Header />}
            <main className="flex-grow bg-bg-primary dark:bg-bg-fourth text-tx-third dark:text-tx-primary">
              {children}
            </main>
            {shouldShowHeaderFooter && <Footer />}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
