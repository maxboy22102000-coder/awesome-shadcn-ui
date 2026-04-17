'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Player } from '@remotion/player';
import { HandwritingTitle } from '@/components/HandwritingTitle';

export default function HongyuArtHome() {
    const logoPath = '/dpi360/250401_[宏宇]LOGO-27.png';

    const partnerLogos = [
        { name: '故宮', src: '/dpi360/故宮LOGO.jpg' },
        { name: '華航', src: '/dpi360/五桐號 LOGO.jpg' },
        { name: '老媽拌麵', src: '/dpi360/老媽拌麵LOGO.png' },
        { name: '丹尼船長', src: '/dpi360/丹尼船長LOGO.jfif' },
        { name: '龜記', src: '/dpi360/龜記LOGO.jfif' },
        { name: 'Celavi', src: '/dpi360/celavi_Logo.jpg' },
        { name: '聯發生技', src: '/dpi360/聯發生技美學LOGO.png' },
        { name: '良雅色', src: '/dpi360/良雅色LOGO' },
    ];

    const works = [
        { title: '華航 X 五桐號 聯名手提袋', category: '包裝設計', image: '/dpi360/華航 X 五桐號 聯名手提袋.jpg' },
        { title: '老媽拌麵 精裝禮盒', category: '包裝設計', image: '/dpi360/老媽拌麵-禮盒.jpg' },
        { title: '龜記 經典杯身印刷', category: '包裝設計', image: '/dpi360/龜記杯子.jfif' },
        { title: '米米花巧克力 (系列)', category: '產品包裝', image: '/dpi360/米米花巧克力.jpg' },
        { title: '故宮精品 簍空磁貼', category: '文創開發', image: '/dpi360/故宮簍空磁貼.jpg' },
        { title: '故宮精品 菊花磁貼', category: '文創開發', image: '/dpi360/故宮菊花磁貼.jpg' },
    ];

    const services = [
        { title: '名片與卡片類', items: '一般/通用名片、特殊名片（冷燙/浮金）、明信片、邀請卡、應用卡片。', icon: '📇' },
        { title: '貼紙與紙膠帶類', items: '一般彩色貼紙、標籤貼紙、防水/造型姓名貼、特殊/PET紙膠帶。', icon: '🏷️' },
        { title: '傳單DM與海報類', items: '一般海報 (合版/數位少量)、特殊海報 (摺紙/冷燙/銀箔/描圖紙)。', icon: '📄' },
        { title: '事務與單據類', items: '單色/複寫聯單、一般/特殊信封、紅包袋、信紙。', icon: '✉️' },
        { title: '書冊與相片沖印類', items: '精裝相片書、特殊材質本、旗艦相片沖印、書籍封面、雲端數位書籍。', icon: '📚' },
        { title: '型錄、菜單與文宣類', items: '摺式型錄/菜單 (精裝/皮革/木板)、桌上型立牌、優惠券。', icon: '🍽️' },
        { title: '大圖輸出與廣告類', items: '大圖輸出、大圖貼紙、招牌看板、各類旗幟、展示架配件。', icon: '🏗️' },
        { title: '多功能客製商品', items: '飲用器皿、織品服飾、提袋包包、文具辦公、居家與生活、紀念品配件。', icon: '🎁' },
        { title: '曆冊與包裝類', items: '桌曆、月曆、掛曆、紙盒/禮盒、紙箱、彩盒、紙袋、軟包裝。', icon: '📦' },
        { title: '現成商品販售', items: '紙樣表、演色表、空白公版商品 (服飾、紙箱、提袋供加工)。', icon: '🛒' },
        { title: '專業後加工服務', items: '上光覆膜、摺紙裝訂、燙金、雷雕、紙盒打樣、網片輸出、數位打樣。', icon: '⚡' },
    ];

    const navItems = [
        { label: '價值', id: 'value' },
        { label: '夥伴', id: 'trust' },
        { label: '作品', id: 'portfolio' },
        { label: '服務', id: 'services' },
        { label: '聯絡', id: 'contact' },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-neutral-200 selection:bg-amber-500/30 font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative w-16 h-16 rounded-xl bg-white p-1 overflow-hidden shadow-2xl transition-transform group-hover:scale-105 border border-white/20">
                            <Image src={logoPath} alt="宏宇工藝 Logo" fill className="object-contain p-1.5" />
                        </div>
                        <div className="flex flex-col justify-center gap-1">
                            <span className="text-3xl font-black tracking-tight text-white block leading-none drop-shadow-md">宏宇工藝</span>
                            <span className="text-[11px] text-neutral-400 uppercase tracking-[0.25em] font-medium leading-none">Hongyu Art & Production</span>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-10 text-sm font-bold tracking-[0.2em] items-center">
                        {navItems.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="text-neutral-500 hover:text-white transition-colors duration-300">
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <Link href="/inquiry" className="bg-white text-black text-sm font-black tracking-widest px-8 py-3 rounded-full hover:bg-neutral-200 transition-all active:scale-95 shadow-lg shadow-white/5">
                        需求詢問
                    </Link>
                </div>
            </nav>

            {/* Hero Section: VALUE */}
            <section id="value" className="relative min-h-screen flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-amber-500 mb-8 animate-fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            專業快速的產品服務
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tighter opacity-90 drop-shadow-lg">
                            追求極致的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-200 italic">工藝轉化</span>
                        </h1>
                        <div className="w-[100%] md:w-[120%] h-[120px] md:h-[200px] mb-8 relative pointer-events-none -ml-4 md:-ml-8 animate-in fade-in zoom-in duration-1000 delay-300">
                            <Player
                                component={HandwritingTitle}
                                durationInFrames={150}
                                compositionWidth={2000}
                                compositionHeight={220}
                                fps={30}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                autoPlay
                                loop
                            />
                        </div>
                        <p className="text-xl text-neutral-300 mb-12 max-w-3xl leading-relaxed font-light tracking-wide border-l-4 border-amber-500/50 pl-6 animate-in slide-in-from-left duration-1000">
                            將品牌價值轉化為具有說服力的實體觸感，每一個成品都是為了驅動行動。
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Link href="/inquiry" className="px-12 py-6 bg-white text-black font-black text-sm tracking-widest rounded-2xl hover:bg-neutral-200 transition-all shadow-xl shadow-white/5">
                                需求詢問
                            </Link>
                            <a href="#portfolio" className="px-12 py-6 border border-white/10 hover:bg-white/5 text-white font-black text-sm tracking-widest rounded-2xl transition-all backdrop-blur-sm">
                                精選作品集
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar: TRUST */}
            <section id="trust" className="py-24 border-y border-white/5 bg-neutral-950/30">
                <div className="container mx-auto px-6">
                    <p className="text-center text-[10px] font-bold tracking-[0.5em] text-neutral-600 mb-16 uppercase">宏宇工藝 合作夥伴</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity duration-700">
                        {partnerLogos.map((logo) => (
                            <div key={logo.name} className="relative aspect-[3/1] grayscale hover:grayscale-0 transition-all duration-500">
                                <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section: PORTFOLIO */}
            <section id="portfolio" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-3xl">
                            <h2 className="text-5xl font-black text-white mb-6 tracking-tight">產品實績</h2>
                            <p className="text-lg text-neutral-400 font-light leading-relaxed">
                                從故宮的文創精品到星級聯名包裝，宏宇工藝以精湛的技術在不同領域建立信任。
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-8xl font-black text-white/5 leading-none">WORKS</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {works.map((work, idx) => (
                            <div key={idx} className="group relative aspect-[3/4] rounded-[40px] overflow-hidden bg-neutral-900 shadow-2xl border border-white/5">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 w-full p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="h-px w-8 bg-amber-500 group-hover:w-12 transition-all"></span>
                                        <span className="text-[10px] font-bold text-amber-500 tracking-widest uppercase">{work.category}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{work.title}</h3>
                                    <button className="text-[10px] font-black tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-all opacity-0 group-hover:opacity-100 duration-700 translate-y-4 group-hover:translate-y-0 text-left">
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section: SERVICES */}
            <section id="services" className="py-32 bg-neutral-950/50 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-black text-white mb-6 tracking-tight">專業工藝分類</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
                            我們提供 11 大專業服務範疇，從傳統印刷到高端客製禮贈品，全方位滿足您的品牌宣傳需求。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {services.map((service, idx) => (
                            <div key={idx} className="p-10 rounded-[40px] bg-neutral-900/40 border border-white/5 hover:border-amber-500/30 transition-all duration-500 group flex flex-col justify-between">
                                <div>
                                    <div className="text-3xl mb-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{service.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-[11px] text-neutral-500 leading-relaxed font-medium tracking-wide">
                                        {service.items}
                                    </p>
                                </div>
                                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[9px] font-black tracking-[0.2em] text-amber-500">LEARN MORE →</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <Link href="/inquiry" className="px-16 py-8 bg-amber-600 hover:bg-amber-500 text-white font-black text-base tracking-[0.3em] rounded-3xl transition-all shadow-2xl shadow-amber-900/40 active:scale-95 leading-none inline-block">
                            需求詢問
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer: CONTACT */}
            <footer id="contact" className="py-24 bg-black border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-2">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="relative w-10 h-10 rounded bg-white p-1">
                                    <Image src={logoPath} alt="Logo" fill className="object-contain p-1" />
                                </div>
                                <span className="text-2xl font-black text-white uppercase tracking-tighter">宏宇工藝</span>
                            </div>
                            <p className="text-neutral-500 leading-relaxed max-w-sm font-light">
                                宏宇工藝有限公司專注於提供高品質的數位印刷、大圖輸出與商業設計服務。
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-white mb-8 tracking-[0.3em] uppercase">頁面導覽</h4>
                            <ul className="space-y-4 text-base text-neutral-600 font-bold tracking-widest">
                                {navItems.map(item => (
                                    <li key={item.id}><a href={`#${item.id}`} className="hover:text-white transition">{item.label}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-white mb-8 tracking-[0.3em] uppercase">聯繫資訊</h4>
                            <ul className="space-y-5 text-base text-neutral-500 font-medium tracking-wide">
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-700 shrink-0 whitespace-nowrap">地址</span>
                                    <span>新北市中和區中山路二段332巷17號1樓</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-700">電話</span>
                                    <span className="text-white">02-8245-8008</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-neutral-700">郵件</span>
                                    <span className="text-amber-500 hover:text-amber-400">chiayu@hy-ap.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-neutral-800 tracking-widest border-t border-white/5 pt-12 gap-6">
                        <p>© 2024 HONGYU ART & PRODUCTION CO., LTD. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-white transition-colors">FB</a>
                            <a href="#" className="hover:text-white transition-colors">IG</a>
                            <a href="#" className="hover:text-white transition-colors">LI</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
