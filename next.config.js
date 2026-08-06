/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      // Sanity image CDN — required for dog photos and other CMS-uploaded images
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
}
module.exports = nextConfig
