'use client';

import Image from 'next/image';
import { useRef } from 'react';
import CarouselArrowControls from '@/components/CarouselArrowControls';

const tracks = [
    {
        id: 1,
        title: 'Như Một Người Rưng - Chủ Tịch Mai x Giám Đốc Hà | Official M/V',
        subtitle: 'OSAD Official',
        videoId: 'hGu7BVQy5G0',
    },
    {
        id: 2,
        title: '3 PHẢI 6 ĐỪNG - Quân A.P (Official MV)',
        subtitle: 'Quân A.P Official',
        videoId: 'INJuqE_34eQ',
    },
    {
        id: 3,
        title: '500K NHẠC LỘN XỘN SIÊU PEAK: Anh Vội Quên x Thương Nhau Đến Thế x Trả Cho Anh x Vở Kịch Của Em',
        subtitle: 'ĐÓM REMIX',
        videoId: 'yQYUySndW1c',
    },
    {
        id: 4,
        title: 'Tuyệt Phẩm Phố Đêm | Giọng Hát Làm Say Đắm Hàng Triệu Con Tim | Thanh Tú [Phố Nhạc Việt]',
        subtitle: 'PHỐ NHẠC VIỆT',
        videoId: 'moGiXG8naoU',
    },
    {
        id: 5,
        title: 'Đen x Lynk Lee x Pink Frog - Những em bé Mặt Trời (M/V)',
        subtitle: 'Đen Vâu Official',
        videoId: '_UYa_kYIQxs',
    },
    {
        id: 6,
        title: 'LỐI VỀ ĐẤT MẸ - LINH ĐAN BOLERO | Bản Phối Mới Chất Lượng Cao Sinh Ra Để TEST LOA',
        subtitle: 'Linh Đan Bolero',
        videoId: 'qECir1yuv_k',
    },
    {
        id: 7,
        title: 'Mashup 4IN1 - Nhạc Remix Lộn Xộn - 10K NHẠC THẬP CẨM🎼Nhạc Lộn Xộn PEAK Remix TikTok Triệu View 2026',
        subtitle: 'Remix Trending',
        videoId: 'w_xiAlDCOk4',
    },
    {
        id: 8,
        title: 'Mashup 4in1 Cực Cuốn: Yêu Bằng Mắt x Đừng Nói x Lo Người Ướt Áo x Em Ơi Đừng Sầu Remix',
        subtitle: 'Zeko Remix',
        videoId: 'ibo5saOWM90',
    },
    {
        id: 9,
        title: 'NHỊP CẦU TRI ÂM - Thanh Vinh & Hồng Quyên 💔 Song Ca Bolero Trữ Tình Xưa Hay Nhất',
        subtitle: 'Nhạc Hải Ngoại Chọn Lọc',
        videoId: 'FN1TTVmsBRM',
    },
    {
        id: 10,
        title: 'NGUYỄN VĂN MƯỜI - MCK (OFFICIAL MUSIC VIDEO)',
        subtitle: 'MCK // Nger',
        videoId: 'vDgKtOoGljU',
    },
    {
        id: 11,
        title: 'TRONG ĐÔI MẮT THIẾU NỮ - RHYDER | OFFICIAL MUSIC VIDEO',
        subtitle: 'RHYDER OFFICIAL',
        videoId: 'XoFALjTUXhw',
    },
    {
        id: 12,
        title: 'NHẠC REMIX LỘN XỘN SIÊU PEAK - NHẠC MASHUP THẬP CẨM MỚI NHẤT 2026 - 500K NHẠC REMIX LỘN XỘN SIÊU HAY',
        subtitle: 'SS Remix',
        videoId: 'jd7oOab50pw',
    },
    {
        id: 13,
        title: 'Bản Cover ĐANG HOT TIKTOK | HOA PHẬN ÁI LƯU - Chân CaCa x Ca Sĩ Giấu Mặt | Official Music Video',
        subtitle: 'Ca Sĩ Giấu Mặt Top Hit',
        videoId: 'BarSx8yTQLY',
    },
    {
        id: 14,
        title: 'Bảo Anh - THẾ NÀO LÀ ĐÚNG? (OST CHỊ CHỊ EM EM 3) | MV OFFICIAL',
        subtitle: 'Bảo Anh',
        videoId: 'kMlcXrUET8I',
    },
    {
        id: 15,
        title: 'Mashup Lộn Xộn 3IN1 SIÊU CUỐN: Thương Nhau Đến Thế x Anh Vội Quên x Chấp Niệm Trong Em Remix TikTok',
        subtitle: 'Zeko Remix',
        videoId: 'dGYelkh2LOE',
    },
    {
        id: 16,
        title: 'Một Người Thương Đến Cuối Đời - Gừng Cay Muối Mặn, Trọn Đời Bên Nhau',
        subtitle: 'Hoàng K Official',
        videoId: 'VPK8gBFArHA',
    },
    {
        id: 17,
        title: 'Liên Khúc: Xin Làm Người Xa Lạ - Đoạn Tái Bút | Hòa Âm Tâm Trạng Buồn Dành Cho Những Cuộc Tình Buồn.',
        subtitle: 'PHỐ NHẠC VIỆT',
        videoId: '74LBxa_vq2k',
    },
    {
        id: 18,
        title: 'Thương Nhau Đến Thế Remix (Bản Viral TikTok) - Gia Huy | Thương Nhau Đến Thế Nhưng Chỉ Là Đã Từng',
        subtitle: 'Remix Trending',
        videoId: 'dfXaGCkg4ok',
    },
    {
        id: 19,
        title: 'NGÀY GIÓ GIÔNG - KOALAOKE | Ca Sĩ Mặt Nạ - The Masked Singer Vietnam 2026 [Performance]',
        subtitle: 'Vie Channel - MUSIC',
        videoId: 'CWnEkeoDyes',
    },
    {
        id: 20,
        title: 'Đáy Biển x Vây Giữ x Em Hát Ai Nghe - Kasber Remix | Orchestral Version | Nhạc Trung Remix Cực Suy',
        subtitle: 'Kasber',
        videoId: 'uS5Bl7IlOdU',
    },
];

export default function ProjectsCarousel() {
    const marqueeTrackRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="products"
            aria-labelledby="trending-heading"
            className="scroll-mt-24 overflow-hidden bg-white py-14 text-gray-900"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-7 flex items-end justify-between gap-4">
                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500]">
                            Được quan tâm nhiều
                        </p>
                        <h2
                            id="trending-heading"
                            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                        >
                            Top <span className="text-[#FF5500]">trending</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 rounded-full border border-orange-200 bg-white/80 p-1 text-xs font-semibold text-orange-700 shadow-sm">
                            <select
                                aria-label="Chọn tháng"
                                defaultValue=""
                                className="max-w-24 cursor-pointer rounded-full bg-transparent px-2 py-1.5 text-orange-700 outline-none transition-colors hover:bg-orange-50 focus-visible:ring-2 focus-visible:ring-[#FF5500]/30"
                            >
                                <option value="">Cả năm</option>
                                <option value="01">Tháng 1</option>
                                <option value="02">Tháng 2</option>
                                <option value="03">Tháng 3</option>
                                <option value="04">Tháng 4</option>
                                <option value="05">Tháng 5</option>
                                <option value="06">Tháng 6</option>
                                <option value="07">Tháng 7</option>
                                <option value="08">Tháng 8</option>
                                <option value="09">Tháng 9</option>
                                <option value="10">Tháng 10</option>
                                <option value="11">Tháng 11</option>
                                <option value="12">Tháng 12</option>
                            </select>
                            <select
                                aria-label="Chọn năm"
                                defaultValue="2025"
                                className="cursor-pointer rounded-full bg-transparent px-2 py-1.5 text-orange-700 outline-none transition-colors hover:bg-orange-50 focus-visible:ring-2 focus-visible:ring-[#FF5500]/30"
                            >
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                            </select>
                        </div>
                        <CarouselArrowControls
                            trackRef={marqueeTrackRef}
                            trackId="trending-track"
                            label="Top trending"
                        />
                    </div>
                </div>

                <div className="projects-marquee overflow-hidden px-1 pb-5 pt-1">
                    <div id="trending-track" ref={marqueeTrackRef} className="projects-marquee-track">
                        {[false, true].map((isDuplicate) => (
                            <ul
                                key={String(isDuplicate)}
                                aria-label={isDuplicate ? undefined : 'Trending 20 Vietnam'}
                                aria-hidden={isDuplicate || undefined}
                                className="projects-marquee-group"
                            >
                                {tracks.map((track, index) => (
                                    <li
                                        key={`${track.id}-${isDuplicate ? 'duplicate' : 'original'}`}
                                        aria-hidden={isDuplicate || undefined}
                                        className="project-card-enter group w-[min(72vw,15rem)] shrink-0"
                                        style={{ animationDelay: `${index * 180}ms` }}
                                    >
                                        <a
                                            href={`https://www.youtube.com/watch?v=${track.videoId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            tabIndex={isDuplicate ? -1 : undefined}
                                            aria-label={`${track.title} - ${track.subtitle} trên YouTube`}
                                            className="relative block aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200 shadow-lg shadow-orange-950/10 ring-1 ring-black/5 transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-orange-900/20"
                                        >
                                            <Image
                                                src={`https://i.ytimg.com/vi/${track.videoId}/hqdefault.jpg`}
                                                alt=""
                                                fill
                                                sizes="(max-width: 640px) 72vw, 240px"
                                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/85" />
                                            <span className="absolute left-4 top-4 flex h-10 min-w-10 items-center justify-center rounded-full border border-white/40 bg-black/25 px-2 text-sm font-bold text-white backdrop-blur-md">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                                                <h3 className="line-clamp-2 text-base font-bold leading-snug">
                                                    {track.title}
                                                </h3>
                                                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/75">
                                                    {track.subtitle}
                                                </p>
                                                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange-300 transition-colors group-hover:text-orange-200">
                                                    Xem trên YouTube
                                                    <span aria-hidden="true">→</span>
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
