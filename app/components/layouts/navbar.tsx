
'use client';
import Link from "next/link";
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { SignedIn, SignedOut, SignIn, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 shadow-md bg-white font-medium">
      <div className="flex items-center justify-between">
        {/* Left - Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="logo" className="h-10 w-10 object-contain" />
          <span className="text-[34px] text-black font-semibold">Furniro</span>
        </div>

        {/* Center - Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-black">
          <li className="hover:text-blue-500 cursor-pointer">  <Link href="/">Home</Link> </li>
          <li className="hover:text-blue-500 cursor-pointer"><Link href="/shop">Shop</Link></li>
          <li className="hover:text-blue-500 cursor-pointer"><Link href="/about">About</Link></li>
          <li className="hover:text-blue-500 cursor-pointer"><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Right - Icons + Hamburger */}
        <div className="flex items-center space-x-4 text-black">
          <button className="hover:text-black hidden sm:flex items-center space-x-1">
            <Icon icon="mdi:heart-outline" width="20" height="20"  />
            <span className="hidden md:inline hover:text-blue-500 cursor-pointer">Wishlist</span>
          </button>
          <button className="hover:text-black hidden sm:flex items-center space-x-1">
            <Icon icon="mdi:cart-outline" width="20" height="20" />
            <span className="hidden md:inline hover:text-blue-500 cursor-pointer"><Link href="/cart">Cart</Link></span>
          </button>
{/* USER SIGN-IN/ SIGN-UP */}
<div className="hidden sm:flex items-center space-x-2">
  <SignedOut>
    <SignInButton mode="modal">
      <button className="hover:text-blue-500 cursor-pointer text-sm">Sign In</button>
    </SignInButton>
  </SignedOut>

  <SignedIn>
    <UserButton afterSignOutUrl="/" />
  </SignedIn>
</div>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon icon={menuOpen ? 'mdi:close' : 'mdi:menu'} width="24" height="24" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-black">
          <div className="flex flex-col space-y-3">
            <span className="hover:text-blue-500 cursor-pointer"> <Link href="/">Home</Link></span>
            <span className="hover:text-blue-500 cursor-pointer"><Link href="/shop">Shop</Link></span>
            <span className="hover:text-blue-500 cursor-pointer"><Link href="/about">About</Link></span>
            <span className="hover:text-blue-500 cursor-pointer"><Link href="/contact">Contact</Link></span>
            <span className="hover:text-blue-500 cursor-pointer flex items-center space-x-1">
              <Icon icon="mdi:heart-outline" width="20" height="20" />
              <span>Wishlist</span>
            </span>
            <span className="hover:text-black cursor-pointer flex items-center space-x-1">
              <Icon icon="mdi:cart-outline" width="20" height="20" />
              <span><Link href="/cart"></Link>Cart</span>
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}
