import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Header />
      <Hero />
    </main>
  );
}