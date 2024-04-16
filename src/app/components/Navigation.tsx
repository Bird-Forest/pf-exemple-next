"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "../page.module.css";
// import { useSession, signOut } from "next-auth/react";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};
export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();
  //   const session = useSession();

  //   console.log(session);

  return (
    <div className={styles.navigate}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            href={link.href}
            key={link.label}
            className={isActive ? styles.active : styles.link}
          >
            {link.label}
          </Link>
        );
      })}
      {/* {session?.data && (
        <Link href="/profile" className={styles.link}>
          Profile
        </Link>
      )} */}
      {/* {session?.data ? (
        <Link
          href="#"
          onClick={() => signOut({ callbackUrl: "/" })}
          className={styles.link}
        >
          SignOut
        </Link>
      ) : (
        <Link href="/signin" className={styles.link}>
          SignIn
        </Link>
      )} */}
    </div>
  );
}
