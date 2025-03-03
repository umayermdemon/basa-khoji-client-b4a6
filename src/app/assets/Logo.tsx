import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-xl font-bold text-gray-800 dark:text-white flex gap-1 justify-center items-center">
      <span>
        <HomeIcon className="text-[#ed6e5a]" />
      </span>{" "}
      <h1>BasaKhoji</h1>
    </Link>
  );
}
