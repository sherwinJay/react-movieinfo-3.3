/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MOVIE_DATABASE_ID: process.env.MOVIE_DATABASE_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
    // loader: 'custom',
    // loaderFile: './app/utils/imgixLoader.ts',
  },
}

module.exports = nextConfig
