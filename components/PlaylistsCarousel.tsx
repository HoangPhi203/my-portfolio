'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const playlists = [
    {
        id: 1,
        title: 'Hngle - KHÔNG BUÔNG ft. Ari | Official Music Video',
        subtitle: 'HNGLE / hưng lê',
        videoId: '9UcQ7ddVjoc',
    },
    {
        id: 2,
        title: 'JACK - J97 | LƯU NIÊN | Album TAM THÁI TỬ - Track No.4',
        subtitle: 'J97',
        videoId: 'boKJ5XDs_mY',
    },
    {
        id: 3,
        title: 'Bảo Anh (một mình) đi khắp thiên hà - Tìm Em',
        subtitle: 'Bảo Anh',
        videoId: 'J5psy58H52I',
    },
    {
        id: 4,
        title: 'JACK - J97 | NGƯỜI DƯNG | Album TAM THÁI TỬ - Track No.2',
        subtitle: 'J97',
        videoId: 'vLa5jvCJMGk',
    },
    {
        id: 5,
        title: 'HIEUTHUHAI - Người Im Lặng Gặp Người Hay Nói (prod. by Kewtiie) l Official Music Video',
        subtitle: 'HIEUTHUHAI',
        videoId: '8sVtL0o-v7U',
    },
    {
        id: 6,
        title: 'Khóa Ly Biệt | Anh Tú | Thà là Ô Thước xin đừng cách biệt âm dương',
        subtitle: 'Anh Tú Official',
        videoId: 'wEPX3V5T63M',
    },
    {
        id: 7,
        title: '[CHO BẢO] 02. Vùng An Toàn - B Ray (ft. V#) - Prod. Hipz',
        subtitle: 'EvB Records',
        videoId: '_XX248bq6Pw',
    },
    {
        id: 8,
        title: 'Nếu Như Ta Chẳng Còn - MCK (ft. A$AP Ướt Mi)',
        subtitle: 'MCK // Nger',
        videoId: 'rYWLIJB214Q',
    },
    {
        id: 9,
        title: 'VSTRA - Ai Ngoài Anh (Official Audio)',
        subtitle: 'VSTRA',
        videoId: 'cthtCRmTcgA',
    },
    {
        id: 10,
        title: 'Từng Ngày Yêu Em / buitruonglinh',
        subtitle: 'buitruonglinh',
        videoId: 'f-VsoLm4i5c',
    },
    {
        id: 11,
        title: 'Ozaan - Love/Aşk (Official Music Video)',
        subtitle: 'Grand Müzik',
        videoId: 'xcRPHoPjF6Q',
    },
    {
        id: 12,
        title: '07. Em - Binz (feat. SOOBIN) | Gặp Lại Album',
        subtitle: 'Binz Da Poet',
        videoId: '6uVJqD2hSGQ',
    },
    {
        id: 13,
        title: 'bình yên / Vũ. ft. Binz (Official MV) từ Album "Bảo Tàng Của Nuối Tiếc"',
        subtitle: 'Vũ Official',
        videoId: 'f9P7_qWrf38',
    },
    {
        id: 14,
        title: "Dương Domic - Mất Kết Nối | EP 'Dữ Liệu Quý'",
        subtitle: 'Dương Domic',
        videoId: 'lRsaDQtYqAo',
    },
    {
        id: 15,
        title: 'SƠN TÙNG M-TP | ĐỪNG LÀM TRÁI TIM ANH ĐAU | OFFICIAL MUSIC VIDEO',
        subtitle: 'Sơn Tùng M-TP Official',
        videoId: 'abPmZCZZrFA',
    },
    {
        id: 16,
        title: "obito - 'dạo này' (official music video)",
        subtitle: 'Obito Official',
        videoId: 'Bb5Qb7ziIig',
    },
    {
        id: 17,
        title: 'Bầu Trời Mới - Da LAB ft. Minh Tốc & Lam (Official MV)',
        subtitle: 'Da LAB Official',
        videoId: 'Z1D26z9l8y8',
    },
    {
        id: 18,
        title: "MONO - 'Chăm Hoa' (Official Music Video)",
        subtitle: 'Mono Official',
        videoId: 'WCm2elbTEZQ',
    },
    {
        id: 19,
        title: 'Trúc Nhân | VẠN SỰ NHƯ Ý | Official MV',
        subtitle: 'Trúc Nhân',
        videoId: 'hjYOanJelUs',
    },
    {
        id: 20,
        title: 'WREN EVANS - TỪNG QUEN | OFFICIAL AUDIO',
        subtitle: 'Wren Evans Official',
        videoId: 'zepHPnUDROE',
    },
    {
        id: 21,
        title: 'Giờ Thì (Official MV) / buitruonglinh',
        subtitle: 'buitruonglinh',
        videoId: '69ZDBWoj5YM',
    },
    {
        id: 22,
        title: 'EthoSuave x Stacks BW x ChrisBands - Panic (Remix) [Official Music Video]',
        subtitle: 'EthoSuave',
        videoId: 'FQL-eSyX45U',
    },
    {
        id: 23,
        title: "MIN - chẳng phải tình đầu sao đau đến thế feat. Dangrangto, antransax (Official Visual Stage)",
        subtitle: 'MIN OFFICIAL',
        videoId: 's0OMNH-N5D8',
    },
    {
        id: 24,
        title: "SOOBIN - giá như | 'BẬT NÓ LÊN' Album (Official MV)",
        subtitle: 'SOOBIN Official',
        videoId: 'SeWt7IpZ0CA',
    },
    {
        id: 25,
        title: 'Cánh Hoa Héo Tàn - Mochiii x Domino Remix | Có Lẽ Em Đã Không Còn Nước Mắt | Giống Như 1 Vở Kịch Buồn',
        subtitle: 'ACV Entertainment',
        videoId: 'YizrmzMvr7Q',
    },
    {
        id: 26,
        title: 'MỸ TÂM - TÌNH NHƯ LÁ BAY XA (ft. JIMMII NGUYỄN)',
        subtitle: 'My Tam',
        videoId: 'gxPoI_tldfQ',
    },
    {
        id: 27,
        title: 'NỖI ĐAU GIỮA HÒA BÌNH - HÒA MINZY x NGUYỄN VĂN CHUNG | OFFICIAL MUSIC VIDEO',
        subtitle: 'Hòa Minzy',
        videoId: 'yHikkFeIHNA',
    },
    {
        id: 28,
        title: 'WREN EVANS - Tò Te Tí | LOI CHOI The First Album (ft. itsnk)',
        subtitle: 'Wren Evans Official',
        videoId: 'aCqmdPaTVSg',
    },
    {
        id: 29,
        title: "Orange - 'Gặp Lại Năm Ta 60' OFFICIAL VISUALIZER",
        subtitle: 'Orange Singer Official',
        videoId: 'ZXNrz72k1ew',
    },
    {
        id: 30,
        title: 'NHỮNG LỜI HỨA BỎ QUÊN / VŨ. x DEAR JANE (Official MV) từ Album "Bảo Tàng Của Nuối Tiếc"',
        subtitle: 'Vũ Official',
        videoId: 'h6RONxjPBf4',
    },
    {
        id: 31,
        title: 'BÊN ẤY EM CÓ AI RỒI || CHÂU KHẢI PHONG x LÊ GIA QUÂN || OFFICIAL MUSIC VIDEO',
        subtitle: 'Châu Khải Phong',
        videoId: 'r0uH9lOqPZI',
    },
    {
        id: 32,
        title: 'T.R.I x @Dangrangto x DONAL - một bài hát không vui mấy (extended ver.) | OFFICIAL LYRICS VIDEO',
        subtitle: 'T.R.I',
        videoId: 'EvPEeSBfB3E',
    },
    {
        id: 33,
        title: 'Zerrin Özer - Basit Numaralar (Official Video)',
        subtitle: 'Grand Müzik',
        videoId: 'OFWBSpsqYM8',
    },
    {
        id: 34,
        title: 'Nhắn nhủ | Ronboogz (Lyrics video)',
        subtitle: 'Ronboogz',
        videoId: 'vfKiaXKO44M',
    },
    {
        id: 35,
        title: "SOOBIN - Dancing In The Dark | 'BẬT NÓ LÊN' Album (Official MV)",
        subtitle: 'SOOBIN Official',
        videoId: 'OZmK0YuSmXU',
    },
    {
        id: 36,
        title: 'ERIK x Kai Đinh - ‘Váy Cưới’ | Official MV | From the Wedding Ceremony of Ms. Vien Vibi and Mr. Linh',
        subtitle: 'ERIK Official',
        videoId: 'Y5VoCfbB6As',
    },
    {
        id: 37,
        title: 'VŨ CÁT TƯỜNG - TỪNG LÀ | OFFICIAL',
        subtitle: 'Vu Cat Tuong',
        videoId: 'i4qZmKSFYvI',
    },
    {
        id: 38,
        title: "MONO - ‘Em Xinh’ (Official Music Video)",
        subtitle: 'Mono Official',
        videoId: 'rYc1UbgbMIY',
    },
    {
        id: 39,
        title: "Orange x Hoàng Dũng x Cẩm Vân x Hứa Kim Tuyền - 'Nơi Pháo Hoa Rực Rỡ (Đi Để Trở Về 8)' OFFICIAL MV",
        subtitle: 'Orange Singer Official',
        videoId: 'BgUFNi5MvzE',
    },
    {
        id: 40,
        title: 'Người Đầu Tiên - Juky San feat. buitruonglinh',
        subtitle: 'Juky San',
        videoId: 'i54avTdUqwU',
    },
    {
        id: 41,
        title: "Quang Hùng MasterD - ‘Thuỷ Triều’ - Official Visualizer",
        subtitle: 'Quang Hùng MasterD',
        videoId: '7ig2lXjozdw',
    },
    {
        id: 42,
        title: 'SAU LỜI TỪ KHƯỚC - PHAN MẠNH QUỲNH | OFFICIAL MV (OST phim MAI, Đạo Diễn Trấn Thành)',
        subtitle: 'TRẤN THÀNH TOWN',
        videoId: 'h_1t3-6oWz4',
    },
    {
        id: 43,
        title: 'VŨ CÁT TƯỜNG - NGƯỜI BÌNH THƯỜNG | OFFICIAL',
        subtitle: 'Vu Cat Tuong',
        videoId: 'X5KvHXWPYm4',
    },
    {
        id: 44,
        title: 'DeathbyRomy - LONELIEST GIRL feat. Jayden Hammer & bodyimage (Official Video)',
        subtitle: 'DeathbyRomy',
        videoId: 'vcodNaJh_rI',
    },
    {
        id: 45,
        title: "ERIK - 'Dù cho tận thế (vẫn yêu em)' | Official MV | Valentine 2025",
        subtitle: 'ERIK Official',
        videoId: 'js6JBdLzNn4',
    },
    {
        id: 46,
        title: 'Có Sao Cũng Đành | DatKaa x Prod. QT Beatz [Official Music Video]',
        subtitle: 'DatKaa Official',
        videoId: 'dk6ZFR_Ebkg',
    },
    {
        id: 47,
        title: 'HOÀNG DŨNG - MỘT NGÀY NÀO ĐÓ (feat. ĐEN & BẠN NHẠC.) | OFFICIAL MUSIC VIDEO',
        subtitle: 'Hoàng Dũng',
        videoId: 'q4Y9OZp9TlU',
    },
    {
        id: 48,
        title: 'AI RỒI CŨNG THAY ĐỔI - LÂM CHẤN KHANG x ĐÔNG THIÊN ĐỨC | OFFICIAL MV | Tình Đậm Sâu Tình Vẫn Tan...',
        subtitle: 'NhacPro Tube',
        videoId: 'nnzgxt7sX5M',
    },
    {
        id: 49,
        title: 'SƠN TÙNG M-TP | CHÚNG TA CỦA TƯƠNG LAI | OFFICIAL MUSIC VIDEO',
        subtitle: 'Sơn Tùng M-TP Official',
        videoId: 'zoEtcR5EW08',
    },
    {
        id: 50,
        title: 'Trúc Nhân - KHÔNG RA GÌ | Only Vocal',
        subtitle: 'Trúc Nhân',
        videoId: 'mtCS2V7PsoI',
    },
    {
        id: 51,
        title: 'Em - Binz',
        subtitle: 'Binz Da Poet',
        videoId: 'CU2PtRKBkuw',
    },
    {
        id: 52,
        title: 'TỰ HÀO MÀU ÁO LÍNH - THÁI HỌC x LONG HỌ HUỲNH (Official MV) Ngoài tình yêu em anh còn tình yêu nước',
        subtitle: 'Nguyễn Thái Học Official',
        videoId: 'I2Cqm-_dWLk',
    },
    {
        id: 53,
        title: 'Đức Phúc - Ngày Đầu Sau Chia Tay (feat. Thùy Tiên & Khắc Hưng) (Official Music Video)',
        subtitle: 'ĐỨC PHÚC OFFICIAL',
        videoId: 'ZnRgYm4t_14',
    },
    {
        id: 54,
        title: 'hoá ra…',
        subtitle: 'GREY D',
        videoId: '5ibi4qoT_vc',
    },
    {
        id: 55,
        title: 'JACK - J97 | THIÊN LÝ ƠI | Official Music Video',
        subtitle: 'J97',
        videoId: 'OrDB4jpA1g8',
    },
    {
        id: 56,
        title: 'CHẲNG HỢP NHAU ĐÂU | OFFICIAL MV | LÊ BẢO BÌNH ft THANH HƯNG',
        subtitle: 'Lê Bảo Bình',
        videoId: 'SkUt2v87yiw',
    },
    {
        id: 57,
        title: 'MỘNG YU - AMEE x MCK | Official Music Video (‘MỘNGMEE’ mini album)',
        subtitle: 'ST.319 Entertainment',
        videoId: '09Mh7GgUFFA',
    },
    {
        id: 58,
        title: 'Kén Cá Chọn Canh - Hòa Minzy x Tuấn Cry x Masew | Official Music Video (Genshin Impact)',
        subtitle: 'Hòa Minzy',
        videoId: '8UwKhtdB3sQ',
    },
    {
        id: 59,
        title: 'ĂN TRÔNG NỒI NGỒI TRÔNG HƯỚNG | HUỲNH VĂN x DRUM7 x ARI | OFFICIAL LYRICS VIDEO',
        subtitle: 'ICM Entertainment',
        videoId: 'MYxn110jNPo',
    },
].slice(0, 30);

export default function PlaylistsCarousel() {
    const [activePlaylist, setActivePlaylist] = useState<number | null>(null);
    const playlistRefs = useRef<(HTMLLIElement | null)[]>([]);
    const playlistScrollerRef = useRef<HTMLDivElement>(null);

    function selectPlaylist(index: number) {
        const nextIndex = (index + playlists.length) % playlists.length;
        setActivePlaylist(nextIndex);

        const scroller = playlistScrollerRef.current;
        const playlist = playlistRefs.current[nextIndex];
        if (!scroller || !playlist) return;

        const scrollLeft =
            playlist.getBoundingClientRect().left -
            scroller.getBoundingClientRect().left +
            scroller.scrollLeft;
        scroller.scrollTo({
            left: scrollLeft,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
    }

    function movePlaylist(direction: -1 | 1) {
        selectPlaylist((activePlaylist ?? 0) + direction * 3);
    }

    return (
        <section
            id="library"
            aria-labelledby="playlists-heading"
            className="scroll-mt-24 overflow-hidden border-t border-orange-100 bg-white py-14 text-gray-900"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-7 flex items-end justify-between gap-4">
                    <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF5500]">
                            Tìm giai điệu dành riêng cho bạn
                        </p>
                        <h2
                            id="playlists-heading"
                            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                        >
                            Top <span className="text-[#FF5500]">favorite</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 rounded-full border border-orange-200 bg-white/80 p-1 text-xs font-semibold text-orange-700 shadow-sm">
                            <select
                                aria-label="Chọn tháng playlist"
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
                                aria-label="Chọn năm playlist"
                                defaultValue="2025"
                                className="cursor-pointer rounded-full bg-transparent px-2 py-1.5 text-orange-700 outline-none transition-colors hover:bg-orange-50 focus-visible:ring-2 focus-visible:ring-[#FF5500]/30"
                            >
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-1">
                            <button
                                type="button"
                                aria-label="Playlist trước"
                                onClick={() => movePlaylist(-1)}
                                className="rounded-full border border-orange-200 bg-white/80 p-2 text-orange-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF5500] hover:bg-orange-50 hover:text-[#FF5500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]/40"
                            >
                                <ChevronLeft size={18} aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                aria-label="Playlist tiếp theo"
                                onClick={() => movePlaylist(1)}
                                className="rounded-full border border-orange-200 bg-white/80 p-2 text-orange-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FF5500] hover:bg-orange-50 hover:text-[#FF5500] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500]/40"
                            >
                                <ChevronRight size={18} aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    ref={playlistScrollerRef}
                    className="overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    <ul
                        aria-label="Bài hát Top favorite"
                        className="grid w-max auto-cols-[minmax(18rem,20rem)] grid-flow-col grid-rows-3 gap-4"
                    >
                        {playlists.map((playlist, index) => (
                            <li
                                key={playlist.id}
                                ref={(element) => {
                                    playlistRefs.current[index] = element;
                                }}
                                className="project-card-enter group snap-start"
                                style={{ animationDelay: `${index * 120}ms` }}
                            >
                                <a
                                    href={`https://www.youtube.com/watch?v=${playlist.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-current={activePlaylist === index ? 'true' : undefined}
                                    className={`flex items-center gap-4 rounded-2xl border bg-gradient-to-r from-orange-50/80 to-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_12px_30px_rgba(255,85,0,0.1)] ${
                                        activePlaylist === index
                                            ? 'border-[#FF5500]/50 ring-2 ring-[#FF5500]/15'
                                            : 'border-orange-100'
                                    }`}
                                >
                                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-orange-100 ring-1 ring-black/5 sm:h-24 sm:w-24">
                                        <Image
                                            src={`https://i.ytimg.com/vi/${playlist.videoId}/hqdefault.jpg`}
                                            alt=""
                                            fill
                                            sizes="96px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <span
                                            className="absolute bottom-1.5 right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-[#FF5500] text-xs text-white shadow-md transition-transform group-hover:scale-110"
                                            aria-hidden="true"
                                        >
                                            ▶
                                        </span>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="mb-1 flex items-center gap-2">
                                            <span className="text-[11px] font-bold tracking-widest text-[#FF5500]">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="h-px flex-1 bg-orange-100" />
                                        </div>
                                        <h3 className="truncate text-base font-bold text-gray-900 transition-colors group-hover:text-[#FF5500]">
                                            {playlist.title}
                                        </h3>
                                        <p className="mt-1 truncate text-sm text-gray-500">
                                            {playlist.subtitle}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
