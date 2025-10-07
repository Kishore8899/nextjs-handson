"use client"

import Link from "next/link"
import { Button } from "./ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-full items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Logo</span>
        </Link>
        <nav className="flex items-center justify-end flex-1 gap-4">
          <Link href="/login" className="order-3">
            <Button>Login</Button>
          </Link>
          <Link href="/products-db" className="order-2">
            <Button variant="ghost">Products</Button>
          </Link>
          <Link href="/about" className="order-1">
            <Button variant="ghost">About</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}