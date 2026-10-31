'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';
import { Menu, Search, X } from 'lucide-react';

const brandScript = Dancing_Script({
    subsets: ['latin'],
    weight: 'variable',
    variable: '--font-brand-script',
});

type AuthMode = 'sign-in' | 'create-account';

const navLinks = [
    { name: 'Music room', href: '/music-room#products', targetId: 'products' },
    { name: 'Movie room', href: null, targetId: null },
];

function SearchBar() {
    return (
        <div className="w-full overflow-hidden rounded-full border border-gray-200 bg-[#F1F3F5] transition-all duration-200 focus-within:border-[#FF5500]/60 focus-within:ring-2 focus-within:ring-[#FF5500]/10">
            <div className="relative">
                <Search
                    size={18}
                    aria-hidden="true"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                />
                <input
                    type="search"
                    aria-label="Tìm kiếm"
                    placeholder=" "
                    className="search-input w-full bg-transparent py-2.5 pl-11 pr-5 text-sm text-gray-900 outline-none placeholder:text-transparent"
                />
                <span
                    className="search-placeholder pointer-events-none absolute left-11 right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 text-sm text-gray-500"
                    aria-hidden="true"
                >
                    <span className="shrink-0">Tìm kiếm...</span>
                    <span className="music-icon-track">
                        <span className="music-icon-procession">
                            <span>🎵</span>
                            <span>🎸</span>
                            <span>🎧</span>
                            <span>🎶</span>
                            <span>🎬</span>
                            <span>🎥</span>
                            <span>🎞️</span>
                            <span>🍿</span>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    );
}

function AuthDialog({
    mode,
    onClose,
    onModeChange,
}: {
    mode: AuthMode;
    onClose: () => void;
    onModeChange: (mode: AuthMode) => void;
}) {
    const [notice, setNotice] = useState('');
    const isSignIn = mode === 'sign-in';

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[60] grid min-h-dvh place-items-center overflow-y-auto bg-gray-950/50 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <section
                role="dialog"
                aria-modal="true"
                aria-labelledby="auth-dialog-title"
                className="my-auto w-full max-w-md rounded-3xl border border-orange-100 bg-white p-6 shadow-2xl shadow-gray-950/20 sm:p-8"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500]">
                            Phêee
                        </p>
                        <h2
                            id="auth-dialog-title"
                            className={`${brandScript.className} text-3xl font-bold leading-tight text-gray-900`}
                        >
                            {isSignIn ? 'Welcome back' : 'Tạo tài khoản để bắt đầu phêee.'}
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Đóng"
                        className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
                    >
                        <X size={20} aria-hidden="true" />
                    </button>
                </div>

                <form
                    className="space-y-4"
                    onSubmit={(event) => {
                        event.preventDefault();
                        setNotice('Biểu mẫu chưa được kết nối với dịch vụ xác thực. Dữ liệu chưa được gửi.');
                    }}
                >
                    {!isSignIn && (
                        <label className="block space-y-1.5 text-sm font-medium text-gray-700">
                            Tên hiển thị
                            <input
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-[#FF5500] focus:ring-4 focus:ring-orange-100"
                                placeholder="Tên của bạn"
                            />
                        </label>
                    )}
                    <label className="block space-y-1.5 text-sm font-medium text-gray-700">
                        Email
                        <input
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-[#FF5500] focus:ring-4 focus:ring-orange-100"
                            placeholder="you@example.com"
                        />
                    </label>
                    <label className="block space-y-1.5 text-sm font-medium text-gray-700">
                        Mật khẩu
                        <input
                            name="password"
                            type="password"
                            autoComplete={isSignIn ? 'current-password' : 'new-password'}
                            minLength={8}
                            required
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition focus:border-[#FF5500] focus:ring-4 focus:ring-orange-100"
                            placeholder="Ít nhất 8 ký tự"
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-[#FF5500] px-5 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e64d00] hover:shadow-lg"
                    >
                        {isSignIn ? 'Sign in' : 'Create account'}
                    </button>
                </form>

                <div className="mt-5">
                    {notice && (
                        <p role="status" className="mt-3 rounded-xl bg-orange-50 px-4 py-3 text-sm text-orange-800">
                            {notice}
                        </p>
                    )}
                </div>

                <p className="mt-6 text-center text-sm text-gray-600">
                    {isSignIn ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}{' '}
                    <button
                        type="button"
                        onClick={() => onModeChange(isSignIn ? 'create-account' : 'sign-in')}
                        className="font-semibold text-[#FF5500] hover:underline"
                    >
                        {isSignIn ? 'Create account' : 'Sign in'}
                    </button>
                </p>
            </section>
        </div>
    );
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [authMode, setAuthMode] = useState<AuthMode | null>(null);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = navLinks
            .map((link) =>
                link.targetId ? document.getElementById(link.targetId) : null,
            )
            .filter((section): section is HTMLElement => section !== null);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleSections[0]) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.2, 0.5, 0.8] },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md transition-all duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-5">
                        <Link href="/" className="flex shrink-0 items-center gap-2">
                            <span
                                className={`${brandScript.className} text-5xl font-black leading-none tracking-tight text-[#FF5500]`}
                                style={{ WebkitTextStroke: '1px currentColor' }}
                            >
                                Phêee
                            </span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-7">
                            {navLinks.map((link) => {
                                const className = `rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                                    link.href ? 'hover:text-[#FF5500]' : 'cursor-default'
                                } ${
                                    activeSection === link.targetId
                                        ? 'bg-orange-50 text-[#FF5500]'
                                        : 'text-[#65676B]'
                                }`;

                                return link.href ? (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        aria-current={activeSection === link.targetId ? 'location' : undefined}
                                        className={className}
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <span key={link.name} className={className}>
                                        {link.name}
                                    </span>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="hidden lg:flex mx-8 max-w-md flex-1">
                        <SearchBar />
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setAuthMode('sign-in')}
                            className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-[#FF5500]"
                        >
                            Sign in
                        </button>
                        <button
                            type="button"
                            onClick={() => setAuthMode('create-account')}
                            className="rounded-full bg-[#FF5500] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e64d00] hover:shadow-md"
                        >
                            Create account
                        </button>
                    </div>

                    <div className="md:hidden flex shrink-0 items-center gap-1">
                        <button
                            type="button"
                            onClick={() => setAuthMode('sign-in')}
                            className="whitespace-nowrap rounded-full px-2 py-2 text-xs font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-[#FF5500]"
                        >
                            Sign in
                        </button>
                        <button
                            type="button"
                            onClick={() => setAuthMode('create-account')}
                            className="whitespace-nowrap rounded-full bg-[#FF5500] px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e64d00] hover:shadow-md"
                        >
                            Create account
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-lg p-2 text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-[#FF5500]"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
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
                <div className="space-y-2 border-b border-gray-200 bg-white px-4 pb-6 pt-2 md:hidden">
                    {navLinks.map((link) => {
                        const className = `block rounded-md px-3 py-2 text-base font-medium transition-all duration-200 ${
                            link.href ? 'hover:bg-orange-50 hover:text-[#FF5500]' : 'cursor-default'
                        } ${
                            activeSection === link.targetId
                                ? 'bg-orange-50 text-[#FF5500]'
                                : 'text-[#65676B]'
                        }`;

                        return link.href ? (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => {
                                    if (link.targetId) setActiveSection(link.targetId);
                                    setIsOpen(false);
                                }}
                                aria-current={activeSection === link.targetId ? 'location' : undefined}
                                className={className}
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <span key={link.name} className={className}>
                                {link.name}
                            </span>
                        );
                    })}
                </div>
            )}
            {authMode && (
                <AuthDialog
                    mode={authMode}
                    onClose={() => setAuthMode(null)}
                    onModeChange={setAuthMode}
                />
            )}
        </header>
    );
}