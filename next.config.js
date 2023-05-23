/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  //------------------------------------------
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  env: {
    GOOGLE_CLIENT_ID:
      "1010926706108-m4hvhnod25616gr0pq964dh7kb7nian7.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    GITHUB_SECRET: "8f7e9ea69c3b6a791befdbe8e50554e9290a5f5d",
    GITHUB_ID: "Iv1.f50c06a0e1bd184e",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
