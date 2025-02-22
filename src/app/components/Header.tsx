"use client";

import { useState } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full border-b border-gray-300 bg-white shadow-sm z-50">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link href="/" className="text-4 font-bold text-black">
                    <Image 
                        src="/assets/images/logo.jpg"
                        alt="logo"
                        width={130}
                        height={150}
                        className="w-[130px] transform hover:scale-105 transition duration-300" 
                    />
                </Link>
                <div className="hidden md:flex space-x-6 text-lg">
                    <Link href="/" className="hover:text-blue-500">Home</Link>
                    <Link href="/products" className="hover:text-blue-500">Products</Link>
                    <Link href="/blog" className="hover:text-blue-500">Blog</Link>
                    <Link href="/about" className="hover:text-blue-500">About</Link>
                </div>
                <div className="md:hidden">
                    {menuOpen ? (
                        <X className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(false)} />
                    ) : (
                        <Menu className="w-8 h-8 cursor-pointer" onClick={() => setMenuOpen(true)} />
                    )}
                </div>
                <div className="hidden md:flex space-x-3 md:space-x-4 text-lg">
                    <SignedOut>
                        <SignInButton className="bg-gray-300 rounded shadow-md px-2 py-1 " />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <Search className="cursor-pointer hover:text-blue-500 w-6 h-6 md:w-7 md:h-7" />
                    <User className="cursor-pointer hover:text-blue-500 w-6 h-6 md:w-7 md:h-7" />
                    <Heart className="cursor-pointer hover:text-blue-500 w-6 h-6 md:w-7 md:h-7" />
                    <ShoppingCart className="cursor-pointer hover:text-blue-500 w-6 h-6 md:w-7 md:h-7" />
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-300 shadow-lg absolute top-[64px] left-0 w-full p-5 space-y-4 text-lg">
                    <Link href="/" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/products" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>Products</Link>
                    <Link href="/blog" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>Blog</Link>
                    <Link href="/about" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</Link>
                    <SignedOut>
                        <SignInButton className="bg-gray-600 text-white  rounded shadow-md  block w-20  text-center" />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            )}
        </header>
    );
};

export default Header;
