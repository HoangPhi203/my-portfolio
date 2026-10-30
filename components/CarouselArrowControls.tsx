'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { RefObject } from 'react';

type CarouselArrowControlsProps = {
    trackRef: RefObject<HTMLDivElement | null>;
    trackId: string;
    label: string;
};

export default function CarouselArrowControls({
    trackRef,
    trackId,
    label,
}: CarouselArrowControlsProps) {
    function moveCarousel(direction: -1 | 1) {
        const track = trackRef.current;
        const animation = track?.getAnimations()[0];
        const group = track?.querySelector<HTMLElement>('.projects-marquee-group');
        const firstCard = group?.querySelector<HTMLElement>('li');

        if (!track || !animation || !group || !firstCard) return;

        const gap = Number.parseFloat(window.getComputedStyle(group).columnGap) || 0;
        const distance = firstCard.getBoundingClientRect().width + gap;
        const loopWidth = track.scrollWidth / 2;
        const duration = 36_000;
        const timePerPixel = duration / loopWidth;
        const currentTime = Number(animation.currentTime ?? 0);

        animation.currentTime = (currentTime + direction * distance * timePerPixel + duration) % duration;
    }

    const buttonClassName =
        'rounded-full border border-orange-200 bg-white/80 p-2 text-orange-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF5500] hover:bg-orange-50 hover:text-[#FF5500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]/40';

    return (
        <div className="flex items-center gap-1">
            <button
                type="button"
                aria-label={`Cuộn ${label} sang trái`}
                aria-controls={trackId}
                onClick={() => moveCarousel(-1)}
                className={buttonClassName}
            >
                <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
                type="button"
                aria-label={`Cuộn ${label} sang phải`}
                aria-controls={trackId}
                onClick={() => moveCarousel(1)}
                className={buttonClassName}
            >
                <ChevronRight size={18} aria-hidden="true" />
            </button>
        </div>
    );
}
