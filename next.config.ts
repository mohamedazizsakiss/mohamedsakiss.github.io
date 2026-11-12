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
  async rewrites() {
    return [
      {
        // The NFC chip on the business card opens /vcard. Next.js serves
        // public/vcard/index.html but not at the bare folder URL, so map it.
        // Returned as an array, this runs before app/[lang] could claim "vcard".
        source: "/vcard",
        destination: "/vcard/index.html",
      },
    ];
  },
  async headers() {
    return [
      {
        // Serve the contact file as a vCard so iOS opens "Create New Contact"
        // and Android hands it to the Contacts app.
        source: "/vcard/assets/:file*.vcf",
        headers: [
          { key: "Content-Type", value: "text/vcard; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
