import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so turbopack doesn't latch onto a stray lockfile
  // higher up the directory tree (Windows: C:\Users\dipam\package-lock.json).
  turbopack: {
    root: path.join(__dirname),
  },
  // 301-redirect the old Bootstrap-site URLs so any external links survive
  // (RE+ trade-show variants and the OEM/ODM landing page were the only paths
  // ever shared externally).
  async redirects() {
    return [
      { source: "/replus.html",  destination: "/",          permanent: true },
      { source: "/replus2.html", destination: "/practice",  permanent: true },
      { source: "/replus3.html", destination: "/",          permanent: true },
      { source: "/replus4.html", destination: "/",          permanent: true },
      { source: "/replus5.html", destination: "/",          permanent: true },
      { source: "/replus6.html", destination: "/",          permanent: true },
      { source: "/replus7.html", destination: "/",          permanent: true },
      { source: "/replug.html",  destination: "/practice",  permanent: true },
    ];
  },
};

export default nextConfig;
