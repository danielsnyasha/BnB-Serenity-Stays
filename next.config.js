/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: [
        'res.cloudinary.com', 
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com',
        'https://pixabay.com/',
        'https://unsplash.com/',
        'fakestoreapi.com',
        'http://google.com',
        'fakestoreapi.com',
        'https://console.firebase.google.com/'

      ]
    }
  }
  
  module.exports = nextConfig