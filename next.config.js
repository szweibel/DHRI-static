const withYAML = require('next-yaml')
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/,
  })

const debug = process.env.NODE_ENV !== "production";
console.log(`Running in ${process.env.NODE_ENV} mode`);
const isGitHub = process.env.GITHUB_ACTIONS === "true";
console.log(`Running in ${isGitHub ? "GitHub Actions" : "local"} mode`);
const nextConfig = {
    // reactStrictMode: true,
    trailingSlash: true,
    basePath: isGitHub ? '/DHRI-static' : '',
    assetPrefix: isGitHub ? '/DHRI-static/' : '',
    images: isGitHub ? {
        path: `yourBasePath/_next/image`} : null,
}
console.log(`nextConfig: ${JSON.stringify(nextConfig)}`);
module.exports = withPlugins([
    [withMDX],
    [withYAML],
],
nextConfig)