import Link from "next/link";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import SectionHeader from "@/components/ui/section-header";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="bg-white dark:bg-bg-secondary text-sm text-tx-third dark:text-tx-primary px-10 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
      <div className="flex gap-10 justify-center items-center">
        <div className="flex gap-4 justify-center items-center cursor-pointer text-2xl">
          <Image
            src="/hive-blockchain.svg"
            alt="Baby Care Logo"
            width={32}
            height={32}
            className="text-bt-primary"
          />
          <p className="text-sm text-tx-secondary">baby.ai</p>
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
