/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
      },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/testUi',
          permanent: true, 
        },
      ];
    },
  };
  
  export default nextConfig;
  