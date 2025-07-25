
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
   webpack: (config, { isServer }) => {
    // This is to prevent a "Module not found" error for a module that is not used.
    // See: https://github.com/firebase/genkit/issues/324
    config.externals.push('@opentelemetry/exporter-jaeger');
    return config;
  },
};

export default nextConfig;
