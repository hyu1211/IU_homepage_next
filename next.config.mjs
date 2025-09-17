/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dagugihav/image/upload/**', // 必要に応じてパスを調整
      },
      // 他の外部画像ドメインがあればここに追加
    ],
  },
};

export default nextConfig;