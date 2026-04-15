'use client';
import React, from 'react';
import Image from 'next/image';

export default function DPI360Clone() {
    const works = [
        {
            title: 'Celiva Party宣傳單',
            subtitle: '海報DM',
            category: '宣傳單設計',
            image: '/dpi360/Celiva Party宣傳單.jpg'
        },
        {
            title: '米米花巧克力(背面)',
            subtitle: '包裝設計',
            category: '產品包裝',
            image: '/dpi360/米米花巧克力(背面).jpg'
        },
        {
            title: '米米花巧克力',
            subtitle: '包裝設計',
            category: '產品包裝',
            image: '/dpi360/米米花巧克力.jpg'
        },
        {
            title: '纖巧FIBER 巧克力',
            subtitle: '包裝設計',
            category: '產品包裝',
            image: '/dpi360/纖巧FIBER 巧克力.jpg'
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4">
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <div className="flex items-center">
                        {/* Using a placeholder since we don't have the svg ready locally without full fetch, but let's use text to represent logo */}
                        <span className="text-2xl font-black text-blue-600 tracking-tight">DPI<span className="text-gray-800">360</span></span>
                        <span className="ml-3 text-xs text-gray-500 hidden md:block">全印象數位影像<br />專業印刷設計</span>
                    </div>
                    <nav className="hidden md:flex space-x-8 text-sm font-bold text-gray-600">
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition">HOME</a>
                        <a href="#" className="hover:text-blue-600 transition">NEWS</a>
                        <a href="#" className="hover:text-blue-600 transition">WORKS</a>
                        <a href="#" className="hover:text-blue-600 transition">SERVICE</a>
                        <a href="#" className="hover:text-blue-600 transition">ABOUT</a>
                        <a href="#" className="hover:text-blue-600 transition">FAQ</a>
                        <a href="#" className="hover:text-blue-600 transition">CONTACT</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative w-full h-[600px] bg-gray-900 overflow-hidden flex items-center justify-center">
                {/* We use a gradient background to represent the hero image for now, keeping it premium */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-90"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                        專業完善一貫性服務<br className="md:hidden" />的<span className="text-blue-400">印刷設計</span>公司
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                        設計、印刷、大圖輸出整合。從品牌識別設計、商業設計、包裝設計到展場大圖輸出，為您提供一站式最高品質服務。
                    </p>
                    <a href="#works" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-xl">
                        查看我們的作品集
                    </a>
                </div>
            </section>

            {/* Services summary */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-3xl font-black text-gray-800 mb-12">OUR <span className="text-blue-600">SERVICES</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">✏️</div>
                            <h3 className="text-xl font-bold mb-3">商業設計</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">提供多樣化的視覺設計，包含海報DM、包裝設計、型錄手冊，精準傳達您的品牌價值。</p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">🖨️</div>
                            <h3 className="text-xl font-bold mb-3">專業印刷</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">引進頂級印刷設備，數位印刷、合版印刷、客製化印刷，嚴格把關每一份成品的色彩與品質。</p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">🎪</div>
                            <h3 className="text-xl font-bold mb-3">大圖輸出與施工</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">展覽會場佈置、戶外大型廣告、店頭背板，從輸出到施工我們一手包辦，展現最佳氣勢。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORKS Section with flip-box style effect */}
            <section id="works" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 inline-block relative">
                            WORKS
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 -mb-4"></span>
                        </h2>
                        <p className="mt-8 text-gray-500 max-w-xl mx-auto">印刷品產業精選案例展示，融合美學與實用性的最佳詮釋。</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {works.map((work, index) => (
                            <div key={index} className="group relative w-full h-80 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer">
                                {/* Front */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40"></div>
                                </div>

                                {/* Info Panel sliding up on hover */}
                                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-95 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out border-t-4 border-blue-600 flex flex-col justify-center h-[40%]">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{work.title}</h3>
                                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                                        <span className="bg-gray-100 px-2 py-1 rounded">{work.subtitle}</span>
                                        <span>•</span>
                                        <span>{work.category}</span>
                                    </div>
                                </div>

                                {/* Initial Title floating */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                                    <h3 className="font-bold text-gray-800 truncate text-center">{work.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="border-2 border-gray-900 text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
                            載入更多作品
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-2xl font-black text-white mb-6">DPI<span className="text-blue-500">360</span></h2>
                    <p className="mb-6">全印象數位影像｜品牌設計、商業設計、大圖輸出、展覽活動</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="hover:text-white transition">Facebook</a>
                        <a href="#" className="hover:text-white transition">Instagram</a>
                        <a href="#" className="hover:text-white transition">Line@</a>
                    </div>
                    <div className="mt-12 text-sm border-t border-gray-800 pt-8">
                        © {new Date().getFullYear()} 全印象數位影像. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
