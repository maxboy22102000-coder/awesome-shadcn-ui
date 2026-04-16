/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 👇 補上這三行，告訴 Next.js 不要去伺服器壓縮圖片，直接顯示原圖
  images: {
    unoptimized: true,
  },
  // ... 其他設定保留
};
export default nextConfig;