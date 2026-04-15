'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HongyuArtHome() {
    const logoPath = '/dpi360/250401_[宏宇]LOGO-27.png';

    const partnerLogos = [
        { name: '故宮', src: '/dpi360/故宮LOGO.jpg' },
        { name: '華航', src: '/dpi360/五桐號 LOGO.jpg' },
        { name: '丹尼船長', src: '/dpi360/丹尼船長LOGO.jfif' },
        { name: '龜記', src: '/dpi360/龜記LOGO.jfif' },
        { name: 'Celavi', src: '/dpi360/celavi_Logo.jpg' },
        { name: '聯發生技', src: '/dpi360/聯發生技美學LOGO.png' },
        { name: '良雅色', src: '/dpi360/良雅色LOGO' },
    ];

    const works = [
        { title: '華航 X 五桐號 聯名手提袋', category: '包裝設計', image: '/dpi360/華航 X 五桐號 聯名手提袋.jpg' },
        { title: 'Celiva Party宣傳單', category: '海報DM', image: '/dpi360/Celiva Party宣傳單.jpg' },
        { title: '米米花巧克力 (系列)', category: '產品包裝', image: '/dpi360/米米花巧克力.jpg' },
        { title: '纖巧FIBER 巧克力', category: '產品包裝', image: '/dpi360/纖巧FIBER 巧克力.jpg' },
        { title: '故宮精品 簍空磁貼', category: '文創開發', image: '/dpi360/故宮簍空磁貼.jpg' },
        { title: '故宮精品 菊花磁貼', category: '文創開發', image: '/dpi360/故宮菊花磁貼.jpg' },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-neutral-200 selection:bg-amber-500/30 font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative w-12 h-12 rounded-lg bg-white p-1 overflow-hidden shadow-2xl transition-transform group-hover:scale-105">
                            <Image src={logoPath} alt="宏宇工藝 Logo" fill className="object-contain p-1" />
                        </div>
                        <div>
                            <span className="text-xl font-bold tracking-tight text-white block leading-none">宏宇工藝</span>
                            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium">Hongyu Art & Production Co., Ltd</span>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em]">
                        {['VALUE', 'TRUST', 'PORTFOLIO', 'SERVICES', 'CONTACT'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-neutral-500 hover:text-white transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>
                    <Link href="/inquiry" className="bg-white text-black text-[10px] font-black tracking-widest px-8 py-3 rounded-full hover:bg-neutral-200 transition-all active:scale-95 shadow-lg shadow-white/5">
                        需求詢問箱
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
                        <h1 className="text-6xl md:text-[100px] font-black text-white mb-10 leading-[0.9] tracking-tighter">
                            追求極致的<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-neutral-500 italic">工藝轉化</span>
                        </h1>
                        <p className="text-xl text-neutral-400 mb-12 max-w-3xl leading-relaxed font-light">
                            宏宇工藝將品牌價值轉化為具有說服力的實體觸感，每一個成品都是為了驅動行動。
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Link href="/inquiry" className="px-12 py-6 bg-white text-black font-black text-xs tracking-widest rounded-2xl hover:bg-neutral-200 transition-all shadow-xl shadow-white/5">
                                啟動您的專案
                            </Link>
                            <a href="#portfolio" className="px-12 py-6 border border-white/10 hover:bg-white/5 text-white font-black text-xs tracking-widest rounded-2xl transition-all backdrop-blur-sm">
                                精選作品
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar: TRUST */}
            <section id="trust" className="py-24 border-y border-white/5 bg-neutral-950/30">
                <div className="container mx-auto px-6">
                    <p className="text-center text-[10px] font-bold tracking-[0.5em] text-neutral-600 mb-16 uppercase">Trusted by Global Brands</p>
                    <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
                        {partnerLogos.map((logo) => (
                            <div key={logo.name} className="relative w-32 md:w-44 h-16 grayscale hover:grayscale-0 transition-all duration-500">
                                <Image src={logo.src} alt={logo.name} fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section: SEE & TRUST */}
            <section id="portfolio" className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-3xl">
                            <h2 className="text-5xl font-black text-white mb-6 tracking-tight">實戰案例展示</h2>
                            <p className="text-lg text-neutral-500 font-light leading-relaxed">
                                從故宮的文創精品到星級聯名包裝，宏宇工藝以精湛的技術在不同領域建立信任。
                            </p>
                        </div>
                        <div className="text-right">
                            <span className="text-8xl font-black text-white/5 leading-none">01</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {works.map((work, idx) => (
                            <div key={idx} className="group relative aspect-[3/4] rounded-[40px] overflow-hidden bg-neutral-900 shadow-2xl">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 w-full p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="h-px w-8 bg-amber-500"></span>
                                        <span className="text-[10px] font-bold text-amber-500 tracking-widest uppercase">{work.category}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{work.title}</h3>
                                    <button className="text-[10px] font-black tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-all opacity-0 group-hover:opacity-100 duration-700 translate-y-4 group-hover:translate-y-0">
                                        VIEW PROJECT
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section: UNDERSTAND & ACT */}
            <section id="services" className="py-32 bg-neutral-950/50 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-black text-white mb-6 tracking-tight">我們能為您做什麼</h2>
                        <p className="text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
                            宏宇工藝提供全方位的解決方案，專注於成品與受眾之間的溝通力量。
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: '商業包裝設計', desc: '不僅是容器，更是品牌的沈浸式體驗。', icon: '📦' },
                            { title: '大型展場輸出', desc: '提供最高精細度的噴繪與專業施工服務。', icon: '🏗️' },
                            { title: '文創精品開發', desc: '將文化元素轉化為精緻贈禮，滿足高端收藏需求。', icon: '🎭' },
                        ].map((service, idx) => (
                            <div key={idx} className="p-12 rounded-[48px] bg-neutral-900/50 border border-white/5 hover:border-amber-500/30 transition-all duration-500 group">
                                <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed font-light">{service.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <Link href="/inquiry" className="px-16 py-8 bg-amber-600 hover:bg-amber-500 text-white font-black text-sm tracking-[0.3em] rounded-3xl transition-all shadow-2xl shadow-amber-900/40 active:scale-95 leading-none inline-block">
                            啟動您的專案
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="py-24 bg-black border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-2">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="relative w-10 h-10 rounded bg-white p-1">
                                    <Image src={logoPath} alt="Logo" fill className="object-contain p-1" />
                                </div>
                                <span className="text-2xl font-black text-white uppercase">宏宇工藝</span>
                            </div>
                            <p className="text-neutral-500 leading-relaxed max-w-sm font-light">
                                宏宇工藝有限公司專注於提供高品質的數位印刷、大圖輸出與商業設計服務。
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black text-white mb-8 tracking-[0.3em] uppercase">Navigation</h4>
                            <ul className="space-y-4 text-sm text-neutral-600 font-bold">
                                <li><a href="#value" className="hover:text-white transition">VALUE</a></li>
                                <li><a href="#trust" className="hover:text-white transition">TRUST</a></li>
                                <li><a href="#portfolio" className="hover:text-white transition">PORTFOLIO</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black text-white mb-8 tracking-[0.3em] uppercase">Contact</h4>
                            <ul className="space-y-4 text-xs text-neutral-500 font-medium tracking-wide">
                                <li>新北市中和區中山路二段332巷17號1樓</li>
                                <li>02-8245-8008</li>
                                <li className="text-amber-500">chiayu@hy-ap.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold text-neutral-800 tracking-widest border-t border-white/5 pt-12">
                        <p>© 2024 HONGYU ART & PRODUCTION CO., LTD. ALL RIGHTS RESERVED.</p>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-white">FB</a>
                            <a href="#" className="hover:text-white">IG</a>
                            <a href="#" className="hover:text-white">LI</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
