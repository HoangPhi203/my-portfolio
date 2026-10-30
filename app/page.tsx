import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <Hero />
      <footer className="bg-[#111111] px-6 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 border-t border-white/10 pt-6 text-center">
          <p className="font-semibold">Lưu Hoàng Phi</p>
          <a
            href="tel:0383634255"
            className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]"
          >
            Số điện thoại: 0383634255
          </a>
        </div>
      </footer>
    </main>
  );
}