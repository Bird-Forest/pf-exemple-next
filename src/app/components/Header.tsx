// import Link from "next/link";
import React from "react";
import styles from "../page.module.css";
import Navigation from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation navLinks={navItems} />
    </header>
  );
}
