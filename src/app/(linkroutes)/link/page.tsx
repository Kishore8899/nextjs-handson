"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LinkPage() {
  const pathname = usePathname();

  console.log("Current Pathname:", pathname);

  return (
    <div style={{display: 'flex', gap: '10px', flexDirection: 'row', alignItems: 'center', marginBottom: '20px', justifyContent: 'center'}}>
      <Link href="/login" className={pathname === "/login" ? "font-bold mr-4" : "text-blue-500 mr-4"}>Login</Link>
      <Link href="/register" className={pathname === "/register" ? "font-bold mr-4" : "text-blue-500 mr-4"}>Register</Link>
      <Link href="/forgotpassword" className={pathname === "/forgotpassword" ? "font-bold mr-4" : "text-blue-500 mr-4"}>Forgot Password</Link>
      <Link href="/photo-feed" className={pathname === "/photo-feed" ? "font-bold mr-4" : "text-blue-500 mr-4"}>Photo Feed</Link>
      <Link href="/about" className={pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"}>About</Link>
    </div>
  );
}