'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';
import { Menu, Search, X } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

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
    const [oauthProvider, setOauthProvider] = useState<'google' | 'facebook' | null>(null);
    const isSignIn = mode === 'sign-in';

    async function signInWithProvider(provider: 'google' | 'facebook') {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
            setNotice('Đăng nhập Google/Facebook chưa được cấu hình. Vui lòng thêm URL và anon key của Supabase.');
            return;
        }

        setOauthProvider(provider);
        setNotice('');

        try {
            const supabase = createClient(supabaseUrl, supabaseAnonKey);
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: {
                    redirectTo: window.location.origin,
                },
            });

            if (error) {
                setNotice(`Không thể kết nối ${provider === 'google' ? 'Google' : 'Facebook'}: ${error.message}`);
                setOauthProvider(null);
            }
        } catch (error) {
            setNotice(
                error instanceof Error
                    ? `Không thể kết nối ${provider === 'google' ? 'Google' : 'Facebook'}: ${error.message}`
                    : 'Không thể kết nối dịch vụ đăng nhập. Vui lòng thử lại.',
            );
            setOauthProvider(null);
        }
    }

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
                    <div className="relative mb-4">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <span className="w-full border-t border-gray-200" />
                        </div>
                        <p className="relative mx-auto w-fit bg-white px-3 text-xs text-gray-500">
                            Hoặc tiếp tục với
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() => void signInWithProvider('google')}
                            disabled={oauthProvider !== null}
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]/40 disabled:cursor-wait disabled:opacity-60"
                        >
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 48 48" className="h-5 w-5 shrink-0">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.65 5.94c4.47-4.13 7.13-10.2 7.13-17.59Z" />
                                <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.55 2.56 10.78l7.97-6.19Z" />
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.86l-7.65-5.94c-2.13 1.43-4.85 2.28-8.25 2.28-6.26 0-11.57-4.22-13.47-9.91l-7.97 6.19C6.51 42.62 14.62 48 24 48Z" />
                            </svg>
                            Google
                        </button>
                        <button
                            type="button"
                            onClick={() => void signInWithProvider('facebook')}
                            disabled={oauthProvider !== null}
                            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]/40 disabled:cursor-wait disabled:opacity-60"
                        >
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 320 512" className="h-5 w-5 shrink-0 fill-[#0866FF]">
                                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0C152.77 0 105.47 44 105.47 123.92v71.42H24.09V288h81.38v224h100.2V288z" />
                            </svg>
                            Facebook
                        </button>
                    </div>
                    {oauthProvider && (
                        <p role="status" className="mt-3 text-center text-sm text-gray-500">
                            Đang kết nối {oauthProvider === 'google' ? 'Google' : 'Facebook'}…
                        </p>
                    )}
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