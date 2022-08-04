
/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: { esmExternals: true },
  images: {
    domains: ['source.unsplash.com'],
  }
 
}

const withTM = require('next-transpile-modules')(['fullpage.js'], ['grommet-icons'], ['framer-motion'], ['email.js']);

// const withTM = require('../metaswap/node_modules/next-transpile-modules')(['hashconnect'], {
//   resolveSymlinks: false,
//   debug: true,
// }, ['framer-motion'], ['react-bootstrap'], ['web3.storage']);

module.exports = withTM({nextConfig});