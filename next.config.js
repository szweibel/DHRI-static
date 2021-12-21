const withYAML = require('next-yaml')
const compose = require('next-compose')
const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/,
  })

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
    // reactStrictMode: true,
    trailingSlash: true,
    basePath: !debug ? '/DHRI-STATIC' : '',
    assetPrefix: !debug ? '/DHRI-STATIC/' : '',
    
}


module.exports = compose([
    [withMDX],
    [withYAML],
],
nextConfig)