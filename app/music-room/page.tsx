import Header from '@/components/Header';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import PlaylistsCarousel from '@/components/PlaylistsCarousel';

export default function MusicRoom() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <Header />
            <ProjectsCarousel />
            <PlaylistsCarousel />
        </main>
    );
}
