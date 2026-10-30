'use client';

import { useState } from 'react';
import Link from 'next/link';
import { House, Menu, Search, X } from 'lucide-react';

function SearchBar() {
    return (
        <div className="w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900">
            <div className="relative">
                <Search
                    size={18}
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                />
                <input
                    type="search"
                    aria-label="Tìm kiếm"
                    placeholder="Tìm kiếm..."
                    className="search-input w-full bg-transparent py-2 pl-10 pr-4 text-sm text-zinc-900 outline-none placeholder:text-transparent focus:bg-white dark:text-zinc-100 dark:focus:bg-zinc-950"
                />
                <span className="search-placeholder-cat pointer-events-none absolute left-10 right-3 top-1/2 flex w-auto -translate-y-1/2 items-center gap-1 text-sm text-zinc-400" aria-hidden="true">
                    <span>Tìm kiếm...</span>
                    <span className="search-chase-track min-w-0">
                        <span className="search-chase-procession">
                            <span className="search-chase-animal">🐭</span>
                            <span className="search-chase-animal">🐈</span>
                            <span className="search-chase-animal">🐕</span>
                            <span className="search-chase-animal">🐦</span>
                            <span className="search-chase-animal">🐋</span>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Trang chủ', href: '#' },
        { name: 'Music room', href: '#products' },
        { name: 'Library', href: '#library' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-5">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                My Music
                            </span>
                        </Link>

                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    aria-label={link.name === 'Trang chủ' ? link.name : undefined}
                                >
                                    {link.name === 'Trang chủ' ? <House size={18} aria-hidden="true" /> : link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden lg:flex flex-1 max-w-md mx-8">
                        <SearchBar />
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <button
                            type="button"
                            className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        >
                            Sign in
                        </button>
                        <button
                            type="button"
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            Create account
                        </button>
                    </div>

                    <div className="md:hidden flex shrink-0 items-center gap-1">
                        <button
                            type="button"
                            className="whitespace-nowrap rounded-lg px-2 py-2 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        >
                            Sign in
                        </button>
                        <button
                            type="button"
                            className="whitespace-nowrap rounded-lg bg-blue-600 px-2 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                        >
                            Create account
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <div className="lg:hidden flex justify-center pb-3">
                    <div className="w-full max-w-md">
                        <SearchBar />
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-4 pt-2 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            aria-label={link.name === 'Trang chủ' ? link.name : undefined}
                        >
                            {link.name === 'Trang chủ' ? <House size={18} aria-hidden="true" /> : link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}