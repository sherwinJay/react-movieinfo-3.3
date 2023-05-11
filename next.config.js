/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MOVIE_DATABASE_ID: process.env.MOVIE_DATABASE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
}

module.exports = nextConfig
