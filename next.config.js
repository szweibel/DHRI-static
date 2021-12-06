const withYAML = require('next-yaml')
const compose = require('next-compose')
const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/,
  })

const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md'],
}


module.exports = compose([
    [withMDX],
    [withYAML],
],
nextConfig)