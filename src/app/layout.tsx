// "use client";
// import Link from "next/link";
// import "./globals.css";
// import { ThemeProvider } from "@/components/ui/theme-provider";
// import { useTheme } from "next-themes";
// import { FiSun, FiMoon } from "react-icons/fi";
// import { FaGithub, FaInstagram, FaLinkedin, FaHive } from "react-icons/fa6";
// import SectionHeader from "@/components/ui/section-header";
// import { CiSearch } from "react-icons/ci";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning={true}>
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//         <link rel="icon" href="/hive-blockchain.svg" type="image/svg+xml" />
//       </head>
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <div className="flex flex-col min-h-screen">
//             <Header />
//             <main className="flex-grow bg-bg-primary dark:bg-bg-fourth text-tx-third dark:text-tx-primary">
//               {children}
//             </main>
//             <Footer />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// function Header() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <header className="bg-white dark:bg-bg-secondary text-sm text-tx-third dark:text-tx-primary px-10 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
//       <div className=" flex gap-10 justify-center items-center">
//         <div className="flex gap-4 justify-center items-center cursor-pointer text-2xl">
//           <FaHive className="text-bt-primary" />
//           <p className="font-bold ">Dev</p>
//         </div>
//         <SectionHeader />
//         <Link href="./">Home</Link>
//         <Link href="/blog">Blog</Link>
//         <Link href="/community">community</Link>
//         <Link href="/dashboard">dashboard</Link>
//       </div>
//       <div className="flex gap-4 items-center ">
//         <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-8 py-2 rounded-full">
//           <CiSearch /> <p className="text-sm text-gray-500">Search</p>
//         </div>
//         <button
//           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//           className="text-xl flex items-center gap-2 "
//         >
//           {theme === "dark" ? <FiSun /> : <FiMoon />}
//         </button>
//         {/* <Link href="/profile">Profile</Link> */}
//       </div>
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-white dark:bg-bg-secondary text-tx-third dark:text-tx-primary text-sm  p-4">
//       <div className="flex gap-[5rem] flex justify-center items-center border-b border-gray-200 dark:border-gray-700">
//         <div className="flex gap-4 items-center">
//           <p>Follow me</p>
//           <ul className="flex gap-4">
//             <li>
//               <a
//                 href="https://twitter.com/devsoso"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagram />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://github.com/devsoso"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://devsoso.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin />
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="flex gap-4">
//           <p>Phone: </p>
//           <a href="tel:+250788724867">+250788724867</a>
//         </div>
//         <div className="flex gap-4">
//           <p>Email: </p>
//           <a href="mailto:sbananayo98@gmail.com">sbananayo98@gmail.com</a>
//         </div>
//       </div>
//       <div>
//         <p className="text-sm text-center mt-2 ">
//           2022 All rights reserved - Developer sostene{" "}
//         </p>
//       </div>
//     </footer>
//   );
// }



"use client";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin, FaHive } from "react-icons/fa6";
import SectionHeader from "@/components/ui/section-header";
import { CiSearch } from "react-icons/ci";
import { usePathname } from "next/navigation";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-bg-secondary text-sm text-tx-third dark:text-tx-primary px-10 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <div className="flex gap-10 justify-center items-center">
        <div className="flex gap-4 justify-center items-center cursor-pointer text-2xl">
          <FaHive className="text-bt-primary" />
          <p className="font-bold">Dev</p>
        </div>
        <SectionHeader />
        <Link href="./">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/community">community</Link>
        <Link href="/family-dash">dashboard</Link>
        <Link href="/admin-dash">admin dashboard</Link>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2 border border-gray-200 dark:border-gray-700 px-8 py-2 rounded-full">
          <CiSearch /> <p className="text-sm text-gray-500">Search</p>
        </div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-xl flex items-center gap-2"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-bg-secondary text-tx-third dark:text-tx-primary text-sm p-4">
      <div className="flex gap-[5rem] justify-center items-center border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-4 items-center">
          <p>Follow me</p>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://twitter.com/devsoso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/devsoso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://devsoso.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <p>Phone: </p>
          <a href="tel:+250788724867">+250788724867</a>
        </div>
        <div className="flex gap-4">
          <p>Email: </p>
          <a href="mailto:sbananayo98@gmail.com">sbananayo98@gmail.com</a>
        </div>
      </div>
      <div>
        <p className="text-sm text-center mt-2">
          2022 All rights reserved - Developer sostene{" "}
        </p>
      </div>
    </footer>
  );
}

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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/hive-blockchain.svg" type="image/svg+xml" />
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
