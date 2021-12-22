const withYAML = require('next-yaml')
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/,
  })

const debug = process.env.NODE_ENV !== "production";
console.log(`Running in ${process.env.NODE_ENV} mode`);

const nextConfig = {
    // reactStrictMode: true,
    trailingSlash: true,
    basePath: !debug ? '/DHRI-STATIC' : '',
    assetPrefix: !debug ? '/DHRI-STATIC/' : '',
    
}

module.exports = withPlugins([
    [withMDX],
    [withYAML],
],
nextConfig)