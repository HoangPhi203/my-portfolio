import Image from 'next/image';

export default function Hero() {
    return (
        <section aria-label="Trang chủ" className="bg-[#111111] px-4 pb-8 pt-5 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-4 flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/5 bg-gradient-to-r from-[#1c1c1c] via-[#30231f] to-[#1c1c1c] px-4 text-center text-sm text-white/90 shadow-inner shadow-black/10">
                    <span aria-hidden="true" className="text-lg font-bold text-[#FF5500]">♫</span>
                    <p>Âm nhạc và điện ảnh <span aria-hidden="true">🎬</span> — cùng một không gian khám phá</p>
                </div>
                <div className="relative isolate flex min-h-[320px] items-center overflow-hidden rounded-md bg-[#343434] sm:min-h-[400px] lg:min-h-[460px]">
                    <div className="absolute inset-y-0 left-0 w-[60%]">
                        <Image
                            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=90&w=1200&auto=format&fit=crop"
                            alt=""
                            fill
                            preload
                            sizes="(max-width: 1280px) 50vw, 600px"
                            className="object-cover object-center brightness-[0.9] saturate-[0.8]"
                        />
                    </div>
                    <div
                        className="absolute inset-y-0 left-[40%] w-[60%]"
                        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 35%)' }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=90&w=1200&auto=format&fit=crop"
                            alt=""
                            fill
                            sizes="(max-width: 1280px) 50vw, 600px"
                            className="object-cover object-center brightness-[0.9] saturate-[0.8]"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/35 to-black/35" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                    <div className="relative z-10 mx-auto max-w-3xl p-7 text-center text-white sm:p-10 lg:p-14">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 sm:text-xs">
                            PHÊEE · MUSIC & MOVIES
                        </p>
                        <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-6xl">
                            Chạm vào thế giới âm thanh và điện ảnh
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
