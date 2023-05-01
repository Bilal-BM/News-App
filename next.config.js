/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  typescript: {
    // Specify the path to your tsconfig.json file
    tsconfigPath: './tsconfig.json',
    
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        
      },
    ],
  },
}