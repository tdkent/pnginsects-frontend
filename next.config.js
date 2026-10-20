/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [new URL("https://res.cloudinary.com/**")],
  },
}

module.exports = nextConfig
