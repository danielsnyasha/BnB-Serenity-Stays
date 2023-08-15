const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'fakestoreapi.com',
      'google.com',
      'console.firebase.google.com'
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      use: 'raw-loader',
    });

    return config;
  },
};

module.exports = nextConfig;
