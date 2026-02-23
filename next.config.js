/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for the production Dockerfile: bundles a self-contained server
  // into .next/standalone so the image doesn't need node_modules at runtime.
  output: 'standalone',

  // Ensure the dev server listens on all interfaces so it's reachable
  // outside the container (VS Code port forwarding handles the rest).
  // This is the default in Next.js 15 but explicit is safer.

  // When running inside Docker on macOS, inotify events don't propagate
  // through bind mounts. This webpack option falls back to polling so
  // HMR still works. WATCHPACK_POLLING=true (set in devcontainer.json)
  // also covers this; the webpack config below is a belt-and-braces backup.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,          // check for changes every 1 second
        aggregateTimeout: 300, // delay rebuild after detecting a change
      };
    }
    return config;
  },
};

export default nextConfig;
