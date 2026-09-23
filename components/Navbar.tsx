"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Company", href: "/about" },
    {
        name: "Products",
        href: "/products",
        subLinks: [
            { name: "PVC Pipes", href: "/products/pvc-pipes" },
            { name: "UPVC Pipes", href: "/products/upvc-pipes" },
            { name: "PVC Pipe Fittings", href: "/products/pvc-pipe-fittings" },
            { name: "Pipe Elbows", href: "/products/pipe-elbows" },
            { name: "Industrial Valves", href: "/products/industrial-valves" },
        ],
    },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Quality", href: "/quality-assurance" },
    { name: "Dealers", href: "/dealers" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-steel-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-navy-900 text-white font-bold text-xl">
                        B
                    </div>
                    <span className="hidden sm:inline-block font-bold text-xl tracking-tight text-navy-900">
                        Brahmaputra Udyog
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.subLinks ? (
                                <button
                                    className="flex items-center space-x-1 text-steel-700 hover:text-industrial-500 py-2"
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <span>{link.name}</span>
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-steel-700 hover:text-industrial-500 transition-colors py-2"
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* Mega Menu for Desktop */}
                            {link.subLinks && activeDropdown === link.name && (
                                <div
                                    className="absolute left-0 top-full w-64 rounded-md border border-steel-200 bg-white p-4 shadow-md mt-0 z-50 transition-all duration-200"
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="grid gap-2 text-sm">
                                        {link.subLinks.map((sub) => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="block rounded-md p-2 hover:bg-navy-50 text-navy-800 hover:text-industrial-600 font-medium"
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:flex items-center space-x-2 text-navy-900">
                        <Phone className="h-5 w-5 text-industrial-500" />
                        <span className="font-semibold text-sm">+91 0000 000000</span>
                    </div>
                    <Button className="hidden lg:inline-flex" variant="default">
                        Dealer Inquiry
                    </Button>

                    <button
                        className="lg:hidden p-2 text-navy-900"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-steel-200 shadow-lg p-4 z-40">
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.subLinks ? (
                                    <div className="flex flex-col space-y-2">
                                        <button
                                            className="flex items-center justify-between text-navy-900 font-medium w-full text-left"
                                            onClick={() => toggleDropdown(link.name)}
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {activeDropdown === link.name && (
                                            <div className="flex flex-col space-y-2 pl-4 border-l-2 border-steel-100 py-1">
                                                {link.subLinks.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="text-steel-600 hover:text-industrial-600 text-sm"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-navy-900 font-medium hover:text-industrial-500 block"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="pt-4 mt-2 border-t border-steel-100 flex flex-col space-y-4">
                            <Button variant="default" className="w-full">
                                Dealer Inquiry
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
