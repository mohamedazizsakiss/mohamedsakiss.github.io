import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The printed resume QR code (public/Resume-QR.png) points here.
        // Temporary (307) so the target can change later without phones caching it forever.
        source: "/resume.pdf",
        destination: "/mohamed_aziz_resume.pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
