const withYAML = require('next-yaml')
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)$/,
})
const repoName = 'DHRI-static'
const build = process.env.NODE_ENV === "production";
console.log(`Running in ${process.env.NODE_ENV} mode`);
const isGitHub = process.env.GITHUB_ACTIONS === "true";
console.log(`Running in ${isGitHub ? "GitHub Actions" : "local"} mode`);

const imagesConfig = function(production, isGitHub) {
    if (isGitHub) {
        return {
            loader: 'imgix',
            path: '/' + repoName + '/_next/static/image',
        }
    } 
    else if (build) {
        return {
            loader: 'imgix',
            path: '/',
        }
    }
}

const nextConfig = {
    // reactStrictMode: true,
    trailingSlash: true,
    basePath: isGitHub ? '/' + repoName : '',
    assetPrefix: isGitHub ? '/' + repoName + '/' : '',
    images: imagesConfig(production, isGitHub),
}

module.exports = withPlugins([
    [withMDX],
    [withYAML],
],
    nextConfig)