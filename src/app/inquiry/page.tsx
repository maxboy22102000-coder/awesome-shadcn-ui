'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function InquiryPage() {
    const logoPath = '/dpi360/250401_[宏宇]LOGO-27.png';
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-4xl mb-8 animate-bounce">✓</div>
                <h1 className="text-4xl font-black mb-4">需求已收到</h1>
                <p className="text-neutral-500 mb-12">宏宇工藝將在 24 小時內與您聯繫。</p>
                <a href="/" className="px-12 py-4 bg-white text-black font-black text-xs tracking-widest rounded-2xl hover:bg-neutral-200 transition-all">
                    返回首頁
                </a>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-neutral-200 selection:bg-amber-500/30 font-sans pb-20">
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center px-6">
                <a href="/" className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded bg-white p-1">
                        <Image src={logoPath} alt="Logo" fill className="object-contain p-1" />
                    </div>
                    <span className="text-lg font-bold text-white">宏宇工藝</span>
                </a>
            </nav>

            <div className="container mx-auto px-6 pt-40 max-w-3xl">
                <h1 className="text-5xl font-black text-white mb-6">啟動您的專案</h1>
                <p className="text-neutral-500 mb-12">請填寫您的基本需求，我們將為您提供專業的工藝與報價建議。</p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">姓名 / 公司名稱</label>
                            <input required type="text" className="w-full bg-neutral-900 border border-white/10 rounded-2xl p-4 focus:border-amber-500 outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">聯絡電話</label>
                            <input required type="tel" className="w-full bg-neutral-900 border border-white/10 rounded-2xl p-4 focus:border-amber-500 outline-none transition-all" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">需求項目</label>
                        <select className="w-full bg-neutral-900 border border-white/10 rounded-2xl p-4 focus:border-amber-500 outline-none transition-all appearance-none cursor-pointer">
                            <option>商業包裝設計</option>
                            <option>大型展場輸出</option>
                            <option>文創精品開發</option>
                            <option>數位整合印刷</option>
                            <option>其他需求</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">詳細描述</label>
                        <textarea required rows={5} className="w-full bg-neutral-900 border border-white/10 rounded-2xl p-4 focus:border-amber-500 outline-none transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full py-6 bg-amber-600 hover:bg-amber-500 text-white font-black text-xs tracking-[0.3em] rounded-2xl transition-all shadow-2xl shadow-amber-900/40">
                        送出需求確認
                    </button>
                </form>
            </div>
        </div>
    );
}
