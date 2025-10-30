import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // برای ساخت خروجی استاتیک
  images: {
    unoptimized: true, // برای جلوگیری از خطا در GitHub Pages
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ نادیده گرفتن ESLint هنگام build
  },
  basePath: '/smart-advice-web', // 👈 نام ریپوی گیت‌هابت با اسلش ابتدایی
  assetPrefix: '/smart-advice-web/', // 👈 همان نام ریپو با اسلش ابتدایی و انتهایی
  trailingSlash: true, // برای سازگاری بهتر با GitHub Pages
};

export default nextConfig;