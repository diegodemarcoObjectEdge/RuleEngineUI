"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  path: string;
  title: string;
}

export function MenuItem({ path, title }: MenuItemProps) {
  const currentPath = usePathname();

  return (
    <li
      className={clsx(
        "rounded text-gray-300",
        currentPath === path && "bg-gray-800",
      )}
    >
      <Link
        href={path}
        className={clsx(
          "block rounded px-3 py-2 hover:bg-gray-700",
          "focus-visible:shadow-ring-gray focus-visible:outline-none",
        )}
      >
        {title}
      </Link>
    </li>
  );
}
