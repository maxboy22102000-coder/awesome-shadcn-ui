"use client"; // 如果是 Next.js App Router，這行一定要加，因為這是在客戶端互動的元件

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    // 👇 把您剛剛在後台拿到的 Form ID 填入這裡 (替換掉 "xabcdefg")
    const [state, handleSubmit] = useForm("xzdyeqgj");

    // 如果表單成功送出，畫面就會直接替換成感謝文字
    if (state.succeeded) {
        return (
            <div className="p-4 text-green-600 bg-green-50 rounded-lg text-center">
                <p className="font-bold">感謝您的來信！</p>
                <p>我們已經收到您的訊息，會盡快與您聯繫。</p>
            </div>
        );
    }

    // 這是使用者看到的表單畫面 (加上了基礎的 Tailwind 樣式)
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">

            {/* 姓名欄位 */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">您的姓名</label>
                {/* ⚠️ 關鍵：一定要有 name 屬性，Formspree 才知道這個資料叫什麼 */}
                <input id="name" type="text" name="name" required className="w-full border rounded p-2" />
            </div>

            {/* Email 欄位 */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">電子信箱</label>
                <input id="email" type="email" name="email" required className="w-full border rounded p-2" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
            </div>

            {/* 訊息內容 */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">留言內容</label>
                <textarea id="message" name="message" required rows={4} className="w-full border rounded p-2" />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />
            </div>

            {/* 送出按鈕 */}
            <button
                type="submit"
                disabled={state.submitting}
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 disabled:bg-gray-400"
            >
                {state.submitting ? "傳送中..." : "送出表單"}
            </button>
        </form>
    );
}